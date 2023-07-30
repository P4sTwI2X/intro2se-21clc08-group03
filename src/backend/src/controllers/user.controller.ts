import { ErrorRequestHandler, Request, Response } from "express";
import { userService } from "../services/user.services";

export const userController = {
  signUp: async (req: Request, res: Response, next: any) => {
    try {
      const data = await userService.createUser(req.body);
      return res.status(200).json({ data: data.userId, message: "success" });
    } catch (err) {
      next(err);
    }
  },
};
