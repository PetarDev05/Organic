import jwt from "jsonwebtoken";

export const generateAccessToken = (userId) => {
  const accessToken = jwt.sign({ userId }, process.env.ACCESS_SECRET, {
    expiresIn: "1h",
  });

  return accessToken;
};

export const generateRefreshToken = (userId) => {
  const refreshToken = jwt.sign({ userId }, process.env.REFRESH_SECRET, {
    expiresIn: "10d",
  });

  return refreshToken;
};
