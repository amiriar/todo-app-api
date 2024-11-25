import { type IUser, UserModel } from "./userSchema";

export class UserRepository {
  async findAllAsync(): Promise<IUser[]> {
    return await UserModel.find();
  }

  async findByIdAsync(id: string): Promise<IUser | null> {
    return await UserModel.findById(id);
  }

  // async createAsync(userData: Partial<IUser>): Promise<IUser> {
  //   const user = new UserModel(userData);
  //   return await user.save();
  // }

  async updateAsync(id: string, userData: Partial<IUser>): Promise<IUser | null> {
    return await UserModel.findByIdAndUpdate(id, userData, { new: true });
  }

  async deleteAsync(id: string): Promise<IUser | null> {
    return await UserModel.findByIdAndDelete(id);
  }
}
