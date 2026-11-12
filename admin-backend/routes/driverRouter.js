import express from "express";
import {
  addDriver,
  listDrivers,
  updateDriver,
  assignDriver,
  removeDriver,
} from "../controllers/driverController.js";
import adminAuth from "../middleware/adminAuth.js";

const driverRouter = express.Router();

driverRouter.post("/list", adminAuth, listDrivers);
driverRouter.post("/add", adminAuth, addDriver);
driverRouter.post("/update", adminAuth, updateDriver);
driverRouter.post("/assign", adminAuth, assignDriver);
driverRouter.post("/remove", adminAuth, removeDriver);

export default driverRouter;