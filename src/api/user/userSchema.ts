import mongoose, { Schema, type Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  username: string;
  password: string;
  email: string;
  age: number;
  createdAt: Date;
  updatedAt: Date;
  refreshToken: string | null;
}

const UserSchema: Schema = new Schema(
  {
    name: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: false },
    username: { type: String, required: true },
    password: { type: String, required: true },
    refreshToken: { type: String, required: false },
  },
  {
    timestamps: true,
  },
);

export const UserModel = mongoose.model<IUser>("User", UserSchema);
