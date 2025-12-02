import { Request, Response } from 'express';
import { UserService } from '../services/user.service';

export class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    public async getUserProfile(req: Request, res: Response): Promise<void> {
        try {
            const userId = req.user.id; // Assuming user ID is stored in req.user
            const userProfile = await this.userService.getUserById(userId);
            res.status(200).json(userProfile);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving user profile', error });
        }
    }

    public async updateUserProfile(req: Request, res: Response): Promise<void> {
        try {
            const userId = req.user.id; // Assuming user ID is stored in req.user
            const updatedData = req.body;
            const updatedUser = await this.userService.updateUser(userId, updatedData);
            res.status(200).json(updatedUser);
        } catch (error) {
            res.status(500).json({ message: 'Error updating user profile', error });
        }
    }
}