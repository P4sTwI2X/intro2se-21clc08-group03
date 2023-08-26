import { Router } from "express";
import { rateController } from "../controllers/rate.controller";
import errorHandler from "../middlewares/errorHandler.middlewares";
import authenticate from "../middlewares/authenticate.middlewares";

const ratesRouter = Router();

ratesRouter.post("/rating", rateController.rating, errorHandler);

ratesRouter.post("/changeRating", rateController.changeRating, errorHandler);

export default ratesRouter;
