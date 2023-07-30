import { Status } from "../enum";
import { User } from "../interface/user.interface";
import { hashFn } from "../utils/helper";
import { prisma } from "./prisma.services";

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
};
