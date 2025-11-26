import validator from "validator";

export const signupValidator = async (User, name, email, password) => {
  if (!name || !email || !password) {
    throw new Error("All fields must be filled");
  }

  if (!validator.isEmail(email)) {
    throw new Error("Email is not valid");
  }

  if (!validator.isStrongPassword(password)) {
    throw new Error("Password is not strong enough");
  }

  const isUserFound = await User.findOne({ $or: [{ name }, { email }] });

  if (isUserFound) {
    throw new Error("User is found with the same name or email");
  }
};
