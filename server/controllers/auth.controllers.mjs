import User from "../models/user.model.mjs";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.mjs";

export const register = async (req, res) => {
  try {
    const { fullName, email, password, confirmPassword, gender } = req.body;

    // check if password and confirm password match
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords don't match." });
    }

    const user = await User.findOne({ email: email });

    // check if email already exists
    if (user) {
      return res.status(400).json({ error: "Email already exists." });
    }

    // HASH PASSWORD HERE
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // API to set default avatar for the users using UI Avatars
    const profilePic = `https://ui-avatars.com/api/?name=${encodeURIComponent(fullName)}&background=random&bold=true`;

    const newUser = new User({
      fullName: fullName,
      email: email,
      password: hashedPassword,
      gender: gender,
      profilePic: profilePic,
    });

    if (newUser) {
      // GENERATE JWT TOKEN HERE
      generateTokenAndSetCookie(newUser._id, res);

      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ error: "Invalid user data." });
    }
  } catch (error) {
    console.log(`Error in register controller: ${error.message}`);
    res.status(500).json({ error: "Internal server error." });
  }
};


export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });

    // CHECK PASSWORD HERE
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );

    // verify if the user exists and if password is correct
    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid credentials." });
    }

    // GENERATE JWT TOKEN HERE
    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
        _id: user._id,
        fullName : user.fullName,
        email : user.email,
        profilePic : user.profilePic
    });
    
  } catch (error) {
    console.log(`Error in login controller: ${error.message}`);
    res.status(500).json({ error: "Internal server error." });
  }
};

export const logout = (req, res) => {
  try {
    // REMOVE JWT TOKEN HERE
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({message:"Logged out successfully."})
  } catch (error) {
    console.log(`Error in logout controller: ${error.message}`);
    res.status(500).json({ error: "Internal server error." });
  }
};
