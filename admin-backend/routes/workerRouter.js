import express from "express";
import {
  addWorker,
  listWorkers,
  updateWorker,
  removeWorker,
  workerLogin,
  getWorkerProfile,
} from "../controllers/workerController.js";
import { allOrders } from "../controllers/orderController.js";
import adminAuth from "../middleware/adminAuth.js";
import workerAuth from "../middleware/workerAuth.js";

const workerRouter = express.Router();

// public: worker dashboard login
workerRouter.post("/login", workerLogin);

// worker-only routes
workerRouter.post("/profile", workerAuth, getWorkerProfile);
workerRouter.post("/orders", workerAuth, allOrders);

// admin-only management
workerRouter.post("/list", adminAuth, listWorkers);
workerRouter.post("/add", adminAuth, addWorker);
workerRouter.post("/update", adminAuth, updateWorker);
workerRouter.post("/remove", adminAuth, removeWorker);

export default workerRouter;