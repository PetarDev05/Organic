import jwt from "jsonwebtoken";

export const authMiddleware = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      throw new Error("Access denied");
    }

    const [bearer, token] = authorization.split(" ");

    if (bearer !== "Bearer" || !token) {
      throw new Error("Access denied");
    }

    const { _id } = jwt.verify(token, process.env.ACCESS_SECRET);

    req.user = _id;

    next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return res.status(401).json({ message: "Token expired" });
    }

    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({ message: "Invalid token" });
    }
    
    return res.status(401).json({ message: error.message });
  }
};
