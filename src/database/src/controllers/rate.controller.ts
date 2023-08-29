import { ErrorRequestHandler, Request, Response } from "express";
import { rateService } from "../services/rate.services";

export const rateController = {
  rating: async (req: Request, res: Response, next: any) => {
    try {
      const data = await rateService.createRating(req.body);
      return res.status(200).json({ data: data.shopId, message: "success" });
    } catch (err) {
      next(err);
    }
  },

  changeRating: async (req: Request, res: Response, next: any) => {
    try {
      const data = await rateService.updateRating(req.body);
      return res.status(200).json({ data: data.count, message: "success" });
    } catch (err) {
      next(err);
    }
  },
};
