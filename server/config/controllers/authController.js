import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {

  try {

    const { name, email, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({
        message: "User Already Exists",
      });
    }

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

export const loginUser = async (req, res) => {

  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Invalid Email or Password",
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid Email or Password",
      });
    }

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,

      token: jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET,
        {
          expiresIn: "30d",
        }
      ),
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};