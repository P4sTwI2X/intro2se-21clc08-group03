import { Router } from "express";
import { detailController } from "../controllers/orderdetail.controller";
import errorHandler from "../middlewares/errorHandler.middlewares";
import authenticate from "../middlewares/authenticate.middlewares";

const detailRouter = Router();

detailRouter.post("/addDetail", detailController.addDetail, errorHandler);

export default detailRouter;
