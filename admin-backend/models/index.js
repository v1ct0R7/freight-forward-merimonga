import companyModel from "./companyModel.js";
import driverModel from "./driverModel.js";

companyModel.hasMany(driverModel, { foreignKey: "companyId", onDelete: "SET NULL" });
driverModel.belongsTo(companyModel, { foreignKey: "companyId" });

export { companyModel, driverModel };