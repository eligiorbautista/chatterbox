import User from "../models/user.model.mjs";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    // This will excludes the logged in user
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.log(`Error in getUsersForSideBar: ${error.message}`);
    res.status(500).json({ error: "Internal server error." });
  }
};
