import { Router } from "express";
import { userController } from "../controllers/user.controller";
import errorHandler from "../middlewares/errorHandler.middlewares";

const userRouter = Router();

userRouter.post("/signUp", userController.signUp, errorHandler);

export default userRouter;
