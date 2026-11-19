import companyModel from "../models/companyModel.js";
import driverModel from "../models/driverModel.js";

// add driver (optionally assign to a company)
const addDriver = async (req, res) => {
  try {
    const { name, phone, email, licenseNumber, companyId } = req.body;

    if (!name?.trim()) {
      return res.json({ success: false, message: "Driver name is required" });
    }

    if (companyId) {
      const company = await companyModel.findByPk(companyId);
      if (!company) {
        return res.json({ success: false, message: "Company not found" });
      }
    }

    const driver = await driverModel.create({
      name: name.trim(),
      phone,
      email,
      licenseNumber,
      companyId: companyId || null,
    });

    res.json({ success: true, message: "Driver added", driver });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// list drivers with their company
const listDrivers = async (req, res) => {
  try {
    const drivers = await driverModel.findAll({
      include: [{ model: companyModel, attributes: ["id", "name"] }],
      order: [["createdAt", "DESC"]],
    });
    res.json({ success: true, drivers });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// update driver details
const updateDriver = async (req, res) => {
  try {
    const { id, name, phone, email, licenseNumber } = req.body;

    const driver = await driverModel.findByPk(id);
    if (!driver) {
      return res.json({ success: false, message: "Driver not found" });
    }

    if (name !== undefined && !name.trim()) {
      return res.json({ success: false, message: "Driver name is required" });
    }

    await driver.update({
      ...(name !== undefined && { name: name.trim() }),
      ...(phone !== undefined && { phone }),
      ...(email !== undefined && { email }),
      ...(licenseNumber !== undefined && { licenseNumber }),
    });

    res.json({ success: true, message: "Driver updated" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// assign driver to a company (send companyId: null to unassign)
const assignDriver = async (req, res) => {
  try {
    const { driverId, companyId } = req.body;

    const driver = await driverModel.findByPk(driverId);
    if (!driver) {
      return res.json({ success: false, message: "Driver not found" });
    }

    if (companyId) {
      const company = await companyModel.findByPk(companyId);
      if (!company) {
        return res.json({ success: false, message: "Company not found" });
      }
    }

    await driver.update({ companyId: companyId || null });

    res.json({
      success: true,
      message: companyId ? "Driver assigned" : "Driver unassigned",
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// remove driver
const removeDriver = async (req, res) => {
  try {
    const { id } = req.body;
    await driverModel.destroy({ where: { id } });
    res.json({ success: true, message: "Driver removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { addDriver, listDrivers, updateDriver, assignDriver, removeDriver };