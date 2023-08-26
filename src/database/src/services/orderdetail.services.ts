import { error } from "console";
import { Detail } from "../interface/orderdetail.interface";
import { compareHashFn, hashFn } from "../utils/helper";
import { prisma } from "./prisma.services";
import { equal } from "assert";

//--- EXAMPLE ----  https://playground.prisma.io/examples/writing/create/create
export const detailService = {
  createDetail: async (detail: Detail) => {
    const { productId, quantity } = detail;

    const cost = await prisma.product.findFirstOrThrow({
      where: {
        productId: productId,
      },
    });

    const checkProduct = await prisma.shop.findFirstOrThrow({
      where: {
        shopId: cost.shopId,
      },
    });

    const k = quantity * cost.price;

    const response = await prisma.order_Detail.create({
      data: {
        ...detail,
        price: k,
      },
    });
    return response;
  },
};
