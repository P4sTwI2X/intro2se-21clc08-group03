import { error } from "console";
import { Status, UserType } from "../enum";
import { User } from "../interface/user.interface";
import { compareHashFn, hashFn } from "../utils/helper";
import { prisma } from "./prisma.services";
import { equal } from "assert";

//--- EXAMPLE ----  https://playground.prisma.io/examples/writing/create/create
export const userService = {
  createUser: async (user: User) => {
    const { password, bankAccount, userName } = user;
    const userId = await hashFn(userName);
    const hashedPassword = await hashFn(password);
    const hashedBank = await hashFn(bankAccount);

    const response = await prisma.user.create({
      data: {
        ...user,
        userId,
        password: hashedPassword,
        bankAccount: hashedBank,
        status: Status.active,
        dob: new Date(user.dob),
      },
    });
    return response;
  },

  checkAdmin: async (userId: string) => {
    const user = await prisma.user.findFirstOrThrow({
      where: {
        AND: [
          {
            userId: {
              equals: userId,
            },
          },
          {
            type: {
              equals: UserType.admin,
            },
          },
        ],
      },
    });
    return user;
  },

  findUser: async (member: { userName: string; password: string }) => {
    const { userName, password } = member;

    const user = await prisma.user.findFirstOrThrow({
      where: {
        userName,
        status: Status.active,
      },
    });
    if (await compareHashFn(password, user.password)) {
      return user;
    } else {
      throw new Error("You forgot password !");
    }
  },

  updateUser: async (
    user: Partial<Omit<User, "userId">> & { userId: string }
  ) => {
    let { userId, ...rest } = user;
    if (rest["password"]) {
      rest.password = await hashFn(rest.password);
    }
    if (rest["bankAccount"]) {
      rest.bankAccount = await hashFn(rest.bankAccount);
    }

    const updatedUserCount = await prisma.user.updateMany({
      where: {
        userId,
      },
      data: {
        ...rest,
      },
    });
    return updatedUserCount;
  },

  disableAccount: async (
    user: Partial<Omit<User, "userId">> & { userId: string }
  ) => {
    const { userId } = user;

    const updatedUserCount = await prisma.user.updateMany({
      where: {
        userId,
      },
      data: {
        status: Status.deactive,
      },
    });
    return updatedUserCount;
  },
};
