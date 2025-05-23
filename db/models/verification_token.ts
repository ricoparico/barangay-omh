import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const emailVerificationTokenSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    token: {
      type: String,
      unique: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const EmailVerificationTokenModel =
  models?.EmailVerificationToken ||
  model("EmailVerificationToken", emailVerificationTokenSchema);
export default EmailVerificationTokenModel;
