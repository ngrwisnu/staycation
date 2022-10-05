// import Models
const Category = require("../models/Category");

module.exports = {
  viewDashboard: (req, res) => {
    res.render("admin/dashboard/view_dashboard");
  },
  viewCategory: async (req, res) => {
    const category = await Category.find();
    res.render("admin/category/view_category", { category });
  },
  addCategory: async (req, res) => {
    const { name } = req.body;

    await Category.create({ name });
    res.redirect("/admin/category");
  },
  editCategory: async (req, res) => {
    const id = req.body.id;
    const name = req.body.name;

    const category = await Category.findOne({ _id: id });

    category.name = name;
    await category.save();
    res.redirect("/admin/category");
  },
  deleteCategory: async (req, res) => {
    const { id } = req.params;

    const category = await Category.findOne({ _id: id });
    await category.remove();

    res.redirect("/admin/category");
  },
  viewBank: (req, res) => {
    res.render("admin/bank/view_bank");
  },
  viewItems: (req, res) => {
    res.render("admin/items/view_item");
  },
  viewBooking: (req, res) => {
    res.render("admin/booking/view_booking");
  },
};