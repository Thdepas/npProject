import { Schema, model } from "mongoose";

interface UserDocument extends Document {
  email: String;
  name: String;
  password: String;
}

const userSchema = new Schema(
  {
    email: String,
    name: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

const User = model<UserDocument>("User", userSchema);
export default User;
