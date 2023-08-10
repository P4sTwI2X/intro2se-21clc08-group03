import { Router } from "express";
import { orderController } from "../controllers/order.controller";
import errorHandler from "../middlewares/errorHandler.middlewares";
import authenticate from "../middlewares/authenticate.middlewares";

const orderRouter = Router();

orderRouter.post("/order", orderController.deOrder, errorHandler);

orderRouter.post("/acceptOrder", orderController.confirmOrder, errorHandler);

orderRouter.post("/review", orderController.seenOrder, errorHandler);

orderRouter.post("/disable", orderController.disable, errorHandler);

export default orderRouter;
