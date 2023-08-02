import { Router } from "express";
import { articleController } from "../controllers/article.controller";
import errorHandler from "../middlewares/errorHandler.middlewares";

const articleRouter = Router();

articleRouter.post("/upFile", articleController.upFile, errorHandler);

export default articleRouter;
