import { error } from "console";
import { Status } from "../enum";
import { Article } from "../interface/article.interface";
import { compareHashFn, hashFn } from "../utils/helper";
import { prisma } from "./prisma.services";
import { Prisma } from "@prisma/client";

export const articleService = {
  createArticle: async (article: Article) => {
    const { userId, title, content } = article;
    const articleId = await hashFn(title);

    const response = await prisma.article.create({
      data: {
        userId,
        articleId,
        title,
        content: JSON.stringify(content),
        status: Status.active,
      },
    });
    return response;
  },

  findArticle: async (news: { title: string }) => {
    const { title } = news;

    const article = await prisma.article.findMany({
      where: {
        title,
        status: Status.active,
      },
    });
    return article;
  },

  updateArticle: async (
    article: Partial<Omit<Article, "articleId">> & { articleId: string }
  ) => {
    let { articleId, title, content } = article;

    const updatedArticleCount = await prisma.article.updateMany({
      where: {
        articleId,
      },
      data: {
        title,
        content: JSON.stringify(content),
      },
    });
    return updatedArticleCount;
  },

  disableArticle: async (
    article: Partial<Omit<Article, "articleId">> & { articleId: string }
  ) => {
    const { articleId } = article;

    const updatedArticleCount = await prisma.article.updateMany({
      where: {
        articleId,
      },
      data: {
        status: Status.deactive,
      },
    });
    return updatedArticleCount;
  },
};
