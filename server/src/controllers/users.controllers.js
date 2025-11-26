// models
import User from "../models/users.models.js";

// utils
import {
  generateAccessToken,
  generateRefreshToken,
} from "../utils/generateTokens.utils.js";

// dependencies
import jwt from "jsonwebtoken";

export const signUpUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.signup(name, email, password);
    const accessToken = generateAccessToken(user._id);
    const refreshToken = generateRefreshToken(user._id);
    await User.findByIdAndUpdate(user._id, { $set: { refreshToken } });
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 10 * 24 * 60 * 60 * 1000,
    });
    res.status(200).json({
      person: user,
      accessToken,
      message: "You are registered successfully",
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.login(email, password);
    const accessToken = generateAccessToken(user._id);
    const refreshToken = generateRefreshToken(user._id);
    await User.findByIdAndUpdate(user._id, { $set: { refreshToken } });
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 10 * 24 * 60 * 60 * 1000,
    });
    res.status(200).json({
      person: user,
      accessToken,
      message: "You are logged in successfully",
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const logoutUser = (req, res) => {
  res.clearCookie("refreshToken", {
    httpOnly: true,
    maxAge: 10 * 24 * 60 * 60 * 1000,
  });
  res.status(200).json({ message: "You logged out successfully" });
};

export const extendUserSession = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      throw new Error("Your session expired 1");
    }

    const decoded = jwt.verify(refreshToken, process.env.REFRESH_SECRET);

    if (!decoded) {
      throw new Error("Your session expired 2");
    }

    const userId = decoded.userId;
    console.log(decoded);
    const user = await User.findOne({ _id: userId });

    if (!user) {
      throw new Error("Your session expired 3");
    }

    if (user.refreshToken !== refreshToken) {
      throw new Error("Your session expired 4");
    }

    const newAccessToken = generateAccessToken(user._id);
    res.status(200).json({
      accessToken: newAccessToken,
      person: user,
    });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};
