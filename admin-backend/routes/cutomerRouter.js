import express from "express";
import { listCustomers, removeCustomer } from "../controllers/customerController.js";
import adminAuth from "../middleware/adminAuth.js";

const customerRouter = express.Router();

customerRouter.post("/list", adminAuth, listCustomers);
customerRouter.post("/remove", adminAuth, removeCustomer);

export default customerRouter;