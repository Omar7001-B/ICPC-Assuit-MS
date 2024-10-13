const roleModel = require("../models/roleModel");

let getAll = async (req, res) => {
  let roles = await roleModel.find();
  res.json({ data: roles });
};

let edit = async (req, res) => {
  let id = req.params.id;
  let body = req.body;
  let editOne = await roleModel.findByIdAndUpdate(
    id,
    { name: body.name },
    { new: true }
  );
  if (editOne) {
    res.json({
      message: "edited successfully",
      data: editOne,
    });
  } else {
    res.json({ message: "faield" });
  }
};

let getById = async (req, res) => {
  let id = req.params.id;
  try {
    let role = await roleModel.find({ _id: id });
    res.json({ data: role });
  } catch (err) {
    res.json({ message: "faield" });
  }
};

let create = async (req, res) => {
  let newrole = req.body;
  try {
    await roleModel.create(newrole);
    res.json({ message: "added successfully", data: await roleModel.find() });
  } catch {
    res.json({ message: "faield" });
  }
};

let deleteById = async (req, res) => {
  let id = req.params.id;
  let deleteOne = await roleModel.findByIdAndDelete(id);
  if (deleteOne) {
    res.json({ message: "successfully deleted", data: await roleModel.find() });
  } else {
    res.json({ message: "faield" });
  }
};

let replace = async (req, res) => {
  let id = req.params.id;
  let body = req.body;
  let replaceOne = await roleModel.findOneAndReplace({ _id: id }, body, {
    new: true,
  });
  if (replaceOne) {
    res.json({
      message: "successfully replaced",
      data: replaceOne,
    });
  } else {
    res.json({ message: "faield" });
  }
};

module.exports = {
  getAll,
  edit,
  getById,
  create,
  deleteById,
  replace,
};
