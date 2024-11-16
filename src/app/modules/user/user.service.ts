import { IUser } from "./user.interface";
import { User } from "./user.model";

export const createUserToDb = async (payload: IUser): Promise<IUser> => {
    try {
      const user = new User(payload);
      await user.save();
      return user;
    } catch (error: any) {
      console.error("Validation Error:", error.errors);
      throw error; 
    }
  };

export const findUserByEmail = async (email: string) => {
  return await User.findOne({ email: email });
}

export const getUsersFromDb = async () => {
    const user = await User.find()
    return user
}
