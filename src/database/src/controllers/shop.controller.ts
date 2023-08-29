import { ErrorRequestHandler, Request, Response } from "express";
import { shopService } from "../services/shop.services";

export const shopController = {
  signUp: async (req: Request, res: Response, next: any) => {
    try {
      const data = await shopService.createShop(req.body);
      return res.status(200).json({ data: data.shopId, message: "success" });
    } catch (err) {
      next(err);
    }
  },

  approveShop: async (req: Request, res: Response, next: any) => {
    try {
      const data = await shopService.acceptShop(req.body);
      return res.status(200).json({ data: data, message: "success" });
    } catch (err) {
      next(err);
    }
  },

  searchShop: async (req: Request, res: Response, next: any) => {
    try {
      const data = await shopService.findShop(req.body);
      return res.status(200).json({ data: data, message: "success" });
    } catch (err) {
      next(err);
    }
  },

  update: async (req: Request, res: Response, next: any) => {
    try {
      const data = await shopService.updateShop(req.body);
      return res.status(200).json({ data: data.count, message: "success" });
    } catch (err) {
      next(err);
    }
  },

  disable: async (req: Request, res: Response, next: any) => {
    try {
      const data = await shopService.disableShop(req.body);
      return res.status(200).json({ data: data.count, message: "success" });
    } catch (err) {
      next(err);
    }
  },
};
