import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const driverModel = sequelize.define(
  "Driver",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING, allowNull: true },
    email: { type: DataTypes.STRING, allowNull: true },
    companyId: { type: DataTypes.INTEGER, allowNull: true },
  },
  { tableName: "drivers" },
);

export default driverModel;