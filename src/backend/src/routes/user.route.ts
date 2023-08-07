import { Router } from "express";
import { userController } from "../controllers/user.controller";
import errorHandler from "../middlewares/errorHandler.middlewares";
import authenticate from "../middlewares/authenticate.middlewares";

const userRouter = Router();

userRouter.post("/signUp", userController.signUp, errorHandler);

userRouter.post("/signIn", userController.signIn, errorHandler);

userRouter.post("/update", userController.update, errorHandler);

userRouter.post("/disable", authenticate, userController.disable, errorHandler);

export default userRouter;
