import { error } from "console";
import { Status, UserType } from "../enum";
import { Product } from "../interface/product.interface";
import { compareHashFn, hashFn } from "../utils/helper";
import { prisma } from "./prisma.services";
import { equal } from "assert";

//--- EXAMPLE ----  https://playground.prisma.io/examples/writing/create/create
export const productService = {
  createProduct: async (product: Product) => {
    const { productName } = product;
    const productId = await hashFn(productName);

    const response = await prisma.product.create({
      data: {
        ...product,
        productId,
        status: Status.in_process,
      },
    });
    return response;
  },

  acceptProduct: async (
    product: Partial<Omit<Product, "productId">> & { productId: string }
  ) => {
    const { productId } = product;

    const updatedProductCount = await prisma.product.updateMany({
      where: {
        productId,
      },
      data: {
        status: Status.active,
      },
    });
    return updatedProductCount;
  },

  findProduct: async (goods: { productName: string }) => {
    const { productName } = goods;

    const product = await prisma.product.findFirstOrThrow({
      where: {
        productName,
        status: Status.active,
      },
    });
    return product;
  },

  updateProduct: async (
    product: Partial<Omit<Product, "productId">> & { productId: string }
  ) => {
    let { productId, ...rest } = product;

    const updatedProductCount = await prisma.product.updateMany({
      where: {
        productId,
      },
      data: {
        ...rest,
      },
    });
    return updatedProductCount;
  },

  disableProduct: async (
    product: Partial<Omit<Product, "productId">> & {
      productId: string;
      userId: string;
    }
  ) => {
    const { productId, userId } = product;

    const user = await prisma.user.findFirstOrThrow({
      where: {
        AND: [
          {
            userId: {
              equals: userId,
            },
          },
          {
            OR: [
              {
                type: {
                  equals: UserType.admin,
                },
              },
              {
                type: {
                  equals: UserType.shop,
                },
              },
            ],
          },
        ],
      },
    });

    if (user.type == "Admin") {
      const updatedProductCount = await prisma.product.updateMany({
        where: {
          productId,
        },
        data: {
          status: Status.deactive,
        },
      });
      return updatedProductCount;
    } else {
      const shop = await prisma.shop.findFirstOrThrow({
        where: {
          userId: user.userId,
        },
      });

      const updatedProductCount = await prisma.product.updateMany({
        where: {
          productId,
          shopId: shop.shopId,
        },
        data: {
          status: Status.deactive,
        },
      });
      return updatedProductCount;
    }
  },
};
