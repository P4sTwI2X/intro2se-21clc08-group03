import { error } from "console";
import { Status, UserType } from "../enum";
import { Order } from "../interface/order.interface";
import { compareHashFn, hashFn } from "../utils/helper";
import { prisma } from "./prisma.services";
import { equal } from "assert";
import { v4 as uuidv4 } from "uuid";

//--- EXAMPLE ----  https://playground.prisma.io/examples/writing/create/create
export const orderService = {
  createOrder: async (order: Order) => {
    const orderId = uuidv4();

    const response = await prisma.order.create({
      data: {
        ...order,
        orderId,
        status: Status.in_process,
      },
    });
    return response;
  },

  findOrder: async (u_order: { userId: string }) => {
    const { userId } = u_order;

    const order = await prisma.order.findMany({
      where: {
        userId,
      },
    });
    return order;
  },

  acceptOrder: async (
    order: Partial<Omit<Order, "orderId">> & { orderId: string; shopId: string }
  ) => {
    const { orderId, shopId } = order;

    const shop = await prisma.shop.findFirstOrThrow({
      where: {
        shopId: shopId,
      },
    });

    const user = await prisma.user.findFirstOrThrow({
      where: {
        userId: shop.userId,
      },
    });

    const updatedOrderCount = await prisma.order.updateMany({
      where: {
        orderId: orderId,
      },
      data: {
        status: Status.active,
      },
    });
    return updatedOrderCount;
  },

  disableOrder: async (
    order: Partial<Omit<Order, "orderId">> & { orderId: string; shopId: string }
  ) => {
    const { orderId, shopId } = order;

    const shop = await prisma.shop.findFirstOrThrow({
      where: {
        shopId: shopId,
      },
    });

    const user = await prisma.user.findFirstOrThrow({
      where: {
        userId: shop.userId,
      },
    });

    const updatedOrderCount = await prisma.order.updateMany({
      where: {
        orderId: orderId,
      },
      data: {
        status: Status.deactive,
      },
    });
    return updatedOrderCount;
  },
};
