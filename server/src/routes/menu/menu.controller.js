const { menuCreate } = require("../../models/menu.model");

 async function addMenu (req, res) {
  const menu = req.body;
  if (!menu.menuname || !menu.description || !menu.menudate) {
    return res.status(400).json({ error: "Missing required fields" });
  } else {
    return res.status(201).json(await menuCreate(menu));
  }
  };

  module.exports = {addMenu}