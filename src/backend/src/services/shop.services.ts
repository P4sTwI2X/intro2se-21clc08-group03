import { Status, UserType } from "../enum";
import { Shop } from "../interface/shop.interface";
import { compareHashFn, hashFn } from "../utils/helper";
import { prisma } from "./prisma.services";

//--- EXAMPLE ----  https://playground.prisma.io/examples/writing/create/create
export const shopService = {
  createShop: async (shop: Shop) => {
    const { shopName } = shop;
    const shopId = await hashFn(shopName);

    const response = await prisma.shop.create({
      data: {
        ...shop,
        shopId,
        status: Status.in_process,
      },
    });
    return response;
  },

  acceptShop: async (
    shop: Partial<Omit<Shop, "shopId">> & { shopId: string }
  ) => {
    const { shopId } = shop;

    const updatedShopStatus = await prisma.shop.updateMany({
      where: {
        shopId,
      },
      data: {
        status: Status.active,
      },
    });

    const updatedUserType = await prisma.user.updateMany({
      where: {
        userId: shop.userId,
      },
      data: {
        type: UserType.shop,
      },
    });

    return { updatedShopStatus, updatedUserType };
  },

  findShop: async (store: { shopName: string }) => {
    const { shopName } = store;

    const shop = await prisma.shop.findFirstOrThrow({
      where: {
        shopName,
        status: Status.active,
      },
    });

    const averageRate = await prisma.rating_Shop.aggregate({
      where: {
        shopId: shop.shopId,
      },
      _avg: { rate: true },
    });

    const totalProduct = await prisma.product.aggregate({
      _count: { productId: true },
      where: { shopId: shop.shopId },
    });

    return { ...shop, ...averageRate, ...totalProduct };
  },

  updateShop: async (
    shop: Partial<Omit<Shop, "shopId">> & { shopId: string }
  ) => {
    let { userId, shopId, ...rest } = shop;

    const updatedShopCount = await prisma.shop.updateMany({
      where: {
        shopId,
      },
      data: {
        ...rest,
      },
    });
    return updatedShopCount;
  },

  disableShop: async (
    shop: Partial<Omit<Shop, "shopId">> & { shopId: string }
  ) => {
    const { shopId } = shop;

    const updatedShopCount = await prisma.shop.updateMany({
      where: {
        shopId,
      },
      data: {
        status: Status.deactive,
      },
    });
    return updatedShopCount;
  },
};
