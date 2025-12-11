import User from "../models/users.models.js";
import { generateHash } from "./generateHash.utils.js";

export const createAdmin = async () => {
  const adminName = "Admin";
  const adminEmail = "admin@gmail.com";
  const adminPassword = "Admin123!";

  const existingAdmin = await User.findOne({ email: adminEmail });

  if (existingAdmin) {
    return;
  }

  const hash = await generateHash(adminPassword);

  await User.create({
    name: adminName,
    email: adminEmail,
    password: hash,
    role: "admin",
  });
};
