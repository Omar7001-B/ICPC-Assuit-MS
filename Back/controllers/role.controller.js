import Role from "../models/roleModel.js";

export const getAll = async (req, res) => {
  let roles = await Role.find();
  res.json({ data: roles });
};

export const edit = async (req, res) => {
  let id = req.headers.id;
  if (!id)
  {
    return res.status(500).json({
      message: "Something went wrong. Please try again.",
      errors: error,
    });
  }
  let body = req.body;
  let editOne = await Role.findByIdAndUpdate(
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

export const getById = async (req, res) => {
  let id = req.headers.id;
  if (!id)
  {
    return res.status(500).json({
      message: "Something went wrong. Please try again.",
      errors: error,
    });
  }
  try {
    let role = await Role.find({ _id: id });
    res.json({ data: role });
  } catch (err) {
    res.json({ message: "faield" });
  }
};

export const create = async (req, res) => {
  let newrole = req.body;
  try {
    await Role.create(newrole);
    res.json({ message: "added successfully", data: await Role.find() });
  } catch {
    res.json({ message: "faield" });
  }
};

export const deleteById = async (req, res) => {
  let id = req.headers.id;
  if (!id)
  {
    return res.status(500).json({
      message: "Something went wrong. Please try again.",
      errors: error,
    });
  }
  let deleteOne = await Role.findByIdAndDelete(id);
  if (deleteOne) {
    res.json({ message: "successfully deleted", data: await Role.find() });
  } else {
    res.json({ message: "faield" });
  }
};

export const replace = async (req, res) => {
  let id = req.headers.id;
  if (!id)
  {
    return res.status(500).json({
      message: "Something went wrong. Please try again.",
      errors: error,
    });
  }
  let body = req.body;
  let replaceOne = await Role.findOneAndReplace({ _id: id }, body, {
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

