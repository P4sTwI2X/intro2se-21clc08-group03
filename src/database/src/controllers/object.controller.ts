import { objectService } from "../services/object.services";
import { Request, Response } from "express";

export const objectController = {
  getAll: async (req: Request, res: Response) => {
    const data = await objectService.getAllObjects();
    res.status(200).json({ data: data });
  },
};
