import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import validator from "validator";
import { Op } from "sequelize";
import workerModel from "../models/workerModel.js";

// never send the password hash to the frontend
const safeWorker = (worker) => {
  const { password, ...rest } = worker.get({ plain: true });
  return rest;
};

// admin creates a worker account (name, email, password)
const addWorker = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name?.trim()) {
      return res.json({ success: false, message: "Name is required" });
    }
    if (!validator.isEmail(email || "")) {
      return res.json({ success: false, message: "Please enter a valid email" });
    }
    if (!password || password.length < 8) {
      return res.json({
        success: false,
        message: "Password must be at least 8 characters",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();

    const exists = await workerModel.findOne({ where: { email: normalizedEmail } });
    if (exists) {
      return res.json({ success: false, message: "Worker already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const worker = await workerModel.create({
      name: name.trim(),
      email: normalizedEmail,
      password: hashedPassword,
    });

    res.json({ success: true, message: "Worker account created", worker: safeWorker(worker) });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// list workers
const listWorkers = async (req, res) => {
  try {
    const workers = await workerModel.findAll({
      attributes: { exclude: ["password"] },
      order: [["createdAt", "DESC"]],
    });
    res.json({ success: true, workers });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// admin edits a worker (password is optional)
const updateWorker = async (req, res) => {
  try {
    const { id, name, email, password, isActive } = req.body;

    const worker = await workerModel.findByPk(id);
    if (!worker) {
      return res.json({ success: false, message: "Worker not found" });
    }

    const updates = {};

    if (name !== undefined) {
      if (!name.trim()) {
        return res.json({ success: false, message: "Name is required" });
      }
      updates.name = name.trim();
    }

    if (email !== undefined) {
      if (!validator.isEmail(email)) {
        return res.json({ success: false, message: "Please enter a valid email" });
      }
      const normalizedEmail = email.trim().toLowerCase();
      const dup = await workerModel.findOne({
        where: { email: normalizedEmail, id: { [Op.ne]: id } },
      });
      if (dup) {
        return res.json({ success: false, message: "Email already in use" });
      }
      updates.email = normalizedEmail;
    }

    if (password) {
      if (password.length < 8) {
        return res.json({
          success: false,
          message: "Password must be at least 8 characters",
        });
      }
      updates.password = await bcrypt.hash(password, 10);
    }

    if (typeof isActive === "boolean") {
      updates.isActive = isActive;
    }

    await worker.update(updates);

    res.json({ success: true, message: "Worker updated" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// admin deletes a worker
const removeWorker = async (req, res) => {
  try {
    const { id } = req.body;
    await workerModel.destroy({ where: { id } });
    res.json({ success: true, message: "Worker removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// worker login (worker dashboard)
const workerLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const worker = await workerModel.findOne({
      where: { email: (email || "").trim().toLowerCase() },
    });

    if (!worker || !worker.isActive) {
      return res.json({ success: false, message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password || "", worker.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: worker.id, role: "worker" },
      process.env.WORKER_JWT_SECRET,
      { expiresIn: "7d" },
    );

    res.json({ success: true, token, worker: safeWorker(worker) });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// logged-in worker profile
const getWorkerProfile = async (req, res) => {
  try {
    const { workerId } = req.body;

    const worker = await workerModel.findByPk(workerId, {
      attributes: { exclude: ["password"] },
    });
    if (!worker) {
      return res.json({ success: false, message: "Worker not found" });
    }

    res.json({ success: true, worker });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export {
  addWorker,
  listWorkers,
  updateWorker,
  removeWorker,
  workerLogin,
  getWorkerProfile,
};