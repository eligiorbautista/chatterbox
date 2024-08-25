import jwt from "jsonwebtoken";
import User from "../models/user.model.mjs";

const protectedRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    // check if token exists
    if (!token) {
      return res
        .status(401)
        .json({ error: "Unauthorized - No token provided." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // check if the token is valid
    if (!decoded) {
      return res.status(401).json({ error: "Unauthorized - Invalid token." });
    }
    // get the user without the password (-password will exclude the password)
    const user = await User.findById(decoded.userId).select("-password");

    // check if user exists
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    // set the user to the authenticated user
    req.user = user;

    next();

  } catch (error) {
    console.log(`Error in protectedRoute middleware: ${error.message}`);
    res.status(500).json({ error: "Internal server error." });
  }
};


export default protectedRoute;