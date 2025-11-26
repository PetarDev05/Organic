import bcrypt from "bcrypt";

export const comparePasswords = async (password, savedPassword) => {
  const match = await bcrypt.compare(password, savedPassword);

  if (!match) {
    throw new Error("User not found");
  }
};
