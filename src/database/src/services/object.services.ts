import { prisma } from "./prisma.services";

//--- EXAMPLE ----
export const objectService = {
  getAllObjects: async () => {
    return await prisma.object.findMany();
  },
};
