import { error } from "console";
import { Status } from "../enum";
import { Article } from "../interface/article.interface";
import { compareHashFn, hashFn } from "../utils/helper";
import { prisma } from "./prisma.services";
import { Prisma } from "@prisma/client";

export const articleService = {
  createArticle: async (article: Article) => {
    const { userId, title, content } = article;
    const articalId = await hashFn(title);
    console.log(content);

    const response = await prisma.artical.create({
      data: {
        userId,
        articalId,
        title,
        content: JSON.stringify(content),
        status: Status.active,
      },
    });
    return response;
  },
};
