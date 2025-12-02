import { User } from '../models/user.model';
import { UserRepository } from '../repositories/user.repository';

export class UserService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async createUser(userData: Partial<User>): Promise<User> {
        const user = await this.userRepository.create(userData);
        return user;
    }

    async getUserById(userId: string): Promise<User | null> {
        const user = await this.userRepository.findById(userId);
        return user;
    }

    async updateUser(userId: string, userData: Partial<User>): Promise<User | null> {
        const updatedUser = await this.userRepository.update(userId, userData);
        return updatedUser;
    }

    async deleteUser(userId: string): Promise<void> {
        await this.userRepository.delete(userId);
    }
}