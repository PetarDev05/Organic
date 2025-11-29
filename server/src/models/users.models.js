import mongoose from "mongoose";

// validators
import { signupValidator } from "../validators/signupData.validators.js";
import { loginValidator } from "../validators/loginData.validators.js";

// utils
import { generateHash } from "../utils/generateHash.utils.js";
import { comparePasswords } from "../utils/comparePasswords.utils.js";

const usersSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    refreshToken: {
      type: String,
    },
    role: {
      type: String,
      required: true,
      default: "customer",
    },
    cart: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

usersSchema.statics.signup = async function (name, email, password) {
  await signupValidator(this, name, email, password);
  const hash = await generateHash(password);
  const user = await this.create({
    name,
    email,
    password: hash,
  });
  return user;
};

usersSchema.statics.login = async function (email, password) {
  const user = await loginValidator(this, email, password);
  await comparePasswords(password, user.password);
  return user;
};

const User = mongoose.model("User", usersSchema);

export default User;
