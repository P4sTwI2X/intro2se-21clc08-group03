import { ErrorRequestHandler, Request, Response } from "express";
import { orderService } from "../services/order.services";

export const orderController = {
  deOrder: async (req: Request, res: Response, next: any) => {
    try {
      const data = await orderService.createOrder(req.body);
      return res.status(200).json({ data: data.orderId, message: "success" });
    } catch (err) {
      next(err);
    }
  },

  confirmOrder: async (req: Request, res: Response, next: any) => {
    try {
      const data = await orderService.acceptOrder(req.body);
      return res.status(200).json({ data: data, message: "success" });
    } catch (err) {
      next(err);
    }
  },

  seenOrder: async (req: Request, res: Response, next: any) => {
    try {
      const data = await orderService.findOrder(req.body);
      return res.status(200).json({ data: data, message: "success" });
    } catch (err) {
      next(err);
    }
  },

  disable: async (req: Request, res: Response, next: any) => {
    try {
      const data = await orderService.disableOrder(req.body);
      return res.status(200).json({ data: data.count, message: "success" });
    } catch (err) {
      next(err);
    }
  },
};
