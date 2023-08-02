import { ErrorRequestHandler, Request, Response } from "express";
import { articleService } from "../services/article.services";

export const articleController = {
  upFile: async (req: Request, res: Response, next: any) => {
    try {
      console.log(req.body);
      const data = await articleService.createArticle(req.body);
      return res.status(200).json({ data: data.articalId, message: "success" });
    } catch (err) {
      next(err);
    }
  },
};
