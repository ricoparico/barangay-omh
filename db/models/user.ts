import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
    email_type: {
      type: String,
      enum: ["google", "credentials"],
      required: true,
    },
    is_verified: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      enum: ["admin", "super-admin", "user"],
      default: "user",
    },
    firstname: {
      type: String,
      default: "",
    },
    middlename: {
      type: String,
      default: "",
    },
    lastname: {
      type: String,
      default: "",
    },
    birthday: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = models?.User || model("User", userSchema);
export default UserModel;
