import { UserRepository } from '../repositories/user.repository';
import { hashPassword, comparePassword } from '../utils/hash';
import { generateToken } from '../utils/jwt';
import { User } from '../models/user.model';

export class AuthService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async registerUser(email: string, password: string): Promise<User> {
        const hashedPassword = await hashPassword(password);
        const newUser = await this.userRepository.createUser({ email, password: hashedPassword });
        return newUser;
    }

    async loginUser(email: string, password: string): Promise<string | null> {
        const user = await this.userRepository.findUserByEmail(email);
        if (user && await comparePassword(password, user.password)) {
            return generateToken(user);
        }
        return null;
    }

    async validateUser(email: string): Promise<User | null> {
        return await this.userRepository.findUserByEmail(email);
    }
}