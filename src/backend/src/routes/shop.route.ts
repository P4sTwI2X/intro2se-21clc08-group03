import { Router } from "express";
import { shopController } from "../controllers/shop.controller";
import errorHandler from "../middlewares/errorHandler.middlewares";
import authenticate from "../middlewares/authenticate.middlewares";

const shopsRouter = Router();

shopsRouter.post("/signUp", shopController.signUp, errorHandler);

shopsRouter.post(
  "/approveShop",
  authenticate,
  shopController.approveShop,
  errorHandler
);

shopsRouter.post("/searchShop", shopController.searchShop, errorHandler);

shopsRouter.post("/update", shopController.update, errorHandler);

shopsRouter.post(
  "/disable",
  authenticate,
  shopController.disable,
  errorHandler
);

export default shopsRouter;
