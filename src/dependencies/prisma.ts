import { PrismaClient } from "@prisma/client";

class PrismaSingleton {
  private static _prisma = new PrismaClient();

  public static get prisma() {
    return this._prisma;
  }
}

const prisma = PrismaSingleton.prisma;
export { prisma };
