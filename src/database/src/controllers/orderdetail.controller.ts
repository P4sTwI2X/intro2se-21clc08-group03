import { ErrorRequestHandler, Request, Response } from "express";
import { detailService } from "../services/orderdetail.services";

export const detailController = {
  addDetail: async (req: Request, res: Response, next: any) => {
    try {
      const data = await detailService.createDetail(req.body);
      return res.status(200).json({ data: data, message: "success" });
    } catch (err) {
      next(err);
    }
  },
};
