import userModel from "../models/userModel.js";

// list customers (password and cart are never returned)
const listCustomers = async (req, res) => {
  try {
    const customers = await userModel.findAll({
      attributes: { exclude: ["password", "cartData"] },
      order: [["id", "DESC"]],
    });
    res.json({ success: true, customers });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// delete customer
const removeCustomer = async (req, res) => {
  try {
    const { id } = req.body;
    await userModel.destroy({ where: { id } });
    res.json({ success: true, message: "Customer removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { listCustomers, removeCustomer };