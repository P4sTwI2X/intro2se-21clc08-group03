import { Router } from "express";
import { userController } from "../controllers/user.controller";
import errorHandler from "../middlewares/errorHandler.middlewares";

const userRouter = Router();

userRouter.post("/signUp", userController.signUp, errorHandler);

userRouter.post("/signIn", userController.signIn, errorHandler);

userRouter.patch("/update", userController.update, errorHandler);

userRouter.patch("/disable", userController.disable, errorHandler);

export default userRouter;
