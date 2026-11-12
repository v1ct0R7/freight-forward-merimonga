import express from "express";
import {
  addCompany,
  listCompanies,
  updateCompany,
  removeCompany,
} from "../controllers/companyController.js";
import adminAuth from "../middleware/adminAuth.js";

const companyRouter = express.Router();

companyRouter.post("/list", adminAuth, listCompanies);
companyRouter.post("/add", adminAuth, addCompany);
companyRouter.post("/update", adminAuth, updateCompany);
companyRouter.post("/remove", adminAuth, removeCompany);

export default companyRouter;