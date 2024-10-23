import User from "../../models/userModel.js";

// Get all Users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete User
export const deleteById = async (req, res) => {
  let id = req.headers.id;
  if (!id)
  {
    return res.status(500).json({
      message: "Something went wrong. Please try again.",
      errors: error,
    });
  }
  let deleteOne = await User.findByIdAndDelete(id);
  if (deleteOne) {
    res.json({ message: "successfully deleted" });
  } else {
    res.json({ message: "faild" });
  }
};

export const addRole = async (req, res) => {
  const userId = req.params.id;
  const role = req.body.role;
  console.log(userId, role);

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    if (user.roles.includes(role)) {
      return res.status(400).json({ message: "Role already exists" });
    }
    console.log(user.roles);

    user.roles.push(role);
    await user.save();

    res.status(200).json({ message: "Role added", roles: user.roles });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const removeRole = async (req, res) => {
  const userId = req.params.id;
  const role = req.body.role;

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    const roleIndex = user.roles.indexOf(role);
    if (roleIndex === -1) {
      return res.status(400).json({ message: "Role not found" });
    }

    user.roles.splice(roleIndex, 1);
    await user.save();

    res.status(200).json({ message: "Role removed", roles: user.roles });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
