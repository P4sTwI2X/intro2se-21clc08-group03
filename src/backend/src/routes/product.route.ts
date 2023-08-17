import { Router } from "express";
import { productController } from "../controllers/product.controller";
import errorHandler from "../middlewares/errorHandler.middlewares";
import authenticate from "../middlewares/authenticate.middlewares";

const productsRouter = Router();

productsRouter.post("/add", productController.addProduct, errorHandler);

productsRouter.post(
  "/approveProduct",
  authenticate,
  productController.approveProduct,
  errorHandler
);

productsRouter.get("/", productController.searchProduct, errorHandler);

productsRouter.post("/update", productController.update, errorHandler);

productsRouter.post("/disable", productController.disable, errorHandler);

export default productsRouter;
