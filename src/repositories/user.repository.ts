import { User } from '../models/user.model';

export class UserRepository {
    async createUser(userData: Partial<User>): Promise<User> {
        const user = new User(userData);
        return await user.save();
    }

    async findUserById(userId: string): Promise<User | null> {
        return await User.findById(userId);
    }

    async findUserByEmail(email: string): Promise<User | null> {
        return await User.findOne({ email });
    }

    async updateUser(userId: string, updateData: Partial<User>): Promise<User | null> {
        return await User.findByIdAndUpdate(userId, updateData, { new: true });
    }

    async deleteUser(userId: string): Promise<User | null> {
        return await User.findByIdAndDelete(userId);
    }
}