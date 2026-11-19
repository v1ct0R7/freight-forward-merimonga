import companyModel from "../models/comanyModel.js";
import driverModel from "../models/driverModel.js";

//add company 
const addCompany = async (req, res) => {
  try {

    const { name, email, phone, address } = req.body

    if (!name?.trim()) {
      return res.json({ success: false, message: "Company name is required" });
    }

    const company = await companyModel.create({
      name: name.trim(),
      email,
      phone,
      address,
    })

    res.json({ success: true, message: "Company added", company });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
}

//list companies with the drivers
const listCompanies = async (req, res) => {
  try {
    const companies = await companyModel.findAll({
      include: [{ model: driverModel, attributes: ["id", "name"] }],
      order: [["CreatedAt", "DESC"]]
    })
    res.json({ success: true, companies })

  } catch (error) {
    res.json({ success: false, message: error.message });
  }
}

//update company
const updateCompany = async (req, res) => {
  try {
    const { id, name, email, phone, address } = req.body;

    const company = await companyModel.findByPk(id);
    if (!company) {
      return res.json({ success: false, message: "Company not found" });
    }

    if (name !== undefined && !name.trim()) {
      return res.json({ success: false, message: "Company name is required" });
    }

    await company.update({
      ...(name !== undefined && { name: name.trim() }),
      ...(email !== undefined && { email }),
      ...(phone !== undefined && { phone }),
      ...(address !== undefined && { address }),
    });

    res.json({ success: true, message: "Company updated" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// remove company (its drivers become unassigned)
const removeCompany = async (req, res) => {
  try {
    const { id } = req.body;
    await companyModel.destroy({ where: { id } });
    res.json({ success: true, message: "Company removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};



export { addCompany, listCompanies, updateCompany, removeCompany }