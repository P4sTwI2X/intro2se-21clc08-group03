import { Rate } from "../interface/rate.interface";
import { compareHashFn, hashFn } from "../utils/helper";
import { prisma } from "./prisma.services";

//--- EXAMPLE ----  https://playground.prisma.io/examples/writing/create/create
export const rateService = {
  createRating: async (rating: Rate) => {
    const response = await prisma.rating_Shop.create({
      data: {
        shopId: rating.shopId,
        userId: rating.userId,
        rate: rating.rate,
      },
    });
    return response;
  },

  updateRating: async (
    rate: Partial<Omit<Rate, "shopId">> & { shopId: string }
  ) => {
    let { userId, shopId, ...rest } = rate;

    const updatedRatingCount = await prisma.rating_Shop.updateMany({
      where: {
        shopId,
        userId,
      },
      data: {
        ...rest,
      },
    });
    return updatedRatingCount;
  },
};
