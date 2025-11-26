import validator from "validator";

export const loginValidator = async (User, email, password) => {
  if (!email || !password) {
    throw new Error("All fields must be filled");
  }

  if (!validator.isEmail(email)) {
    throw new Error("Email is not valid");
  }

  if (!validator.isStrongPassword(password)) {
    throw new Error("Password is not strong enough");
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};
