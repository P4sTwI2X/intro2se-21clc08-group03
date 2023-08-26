import { ErrorRequestHandler, Request, Response } from "express";
import { articleService } from "../services/article.services";

export const articleController = {
  upFile: async (req: Request, res: Response, next: any) => {
    try {
      const data = await articleService.createArticle(req.body);
      return res.status(200).json({ data: data.articleId, message: "success" });
    } catch (err) {
      next(err);
    }
  },

  updateFile: async (req: Request, res: Response, next: any) => {
    try {
      const data = await articleService.updateArticle({
        ...req.body,
      });
      return res.status(200).json({ data: data.count, message: "success" });
    } catch (err) {
      next(err);
    }
  },

  searchFile: async (req: Request, res: Response, next: any) => {
    try {
      const { title } = req.query as { title: string };
      const data = await articleService.findArticle({ title });
      return res.status(200).json({ data: data, message: "success" });
    } catch (err) {
      next(err);
    }
  },

  disableFile: async (req: Request, res: Response, next: any) => {
    try {
      const data = await articleService.disableArticle(req.body);
      return res.status(200).json({ data: data.count, message: "success" });
    } catch (err) {
      next(err);
    }
  },
};
