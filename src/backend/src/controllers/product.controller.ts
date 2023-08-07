import { ErrorRequestHandler, Request, Response } from "express";
import { productService } from "../services/product.services";

export const productController = {
  addProduct: async (req: Request, res: Response, next: any) => {
    try {
      const data = await productService.createProduct(req.body);
      return res.status(200).json({ data: data.shopId, message: "success" });
    } catch (err) {
      next(err);
    }
  },

  approveProduct: async (req: Request, res: Response, next: any) => {
    try {
      const data = await productService.acceptProduct(req.body);
      return res.status(200).json({ data: data.count, message: "success" });
    } catch (err) {
      next(err);
    }
  },

  searchProduct: async (req: Request, res: Response, next: any) => {
    try {
      const data = await productService.findProduct(req.body);
      return res.status(200).json({ data: data, message: "success" });
    } catch (err) {
      next(err);
    }
  },

  update: async (req: Request, res: Response, next: any) => {
    try {
      const data = await productService.updateProduct(req.body);
      return res.status(200).json({ data: data.count, message: "success" });
    } catch (err) {
      next(err);
    }
  },

  disable: async (req: Request, res: Response, next: any) => {
    try {
      const data = await productService.disableProduct(req.body);
      return res.status(200).json({ data: data.count, message: "success" });
    } catch (err) {
      next(err);
    }
  },
};
