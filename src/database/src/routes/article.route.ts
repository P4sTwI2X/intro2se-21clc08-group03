import { Router } from "express";
import { articleController } from "../controllers/article.controller";
import errorHandler from "../middlewares/errorHandler.middlewares";
import authenticate from "../middlewares/authenticate.middlewares";

const articleRouter = Router();

articleRouter.post("/", authenticate, articleController.upFile, errorHandler);

articleRouter.post(
  "/updateFile",
  authenticate,
  articleController.updateFile,
  errorHandler
);

articleRouter.get("/", articleController.searchFile, errorHandler);

articleRouter.post(
  "/disableFile",
  authenticate,
  articleController.disableFile,
  errorHandler
);

export default articleRouter;
