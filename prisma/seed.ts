import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const password = await hash("test", 12);
  const user = await prisma.user.upsert({
    where: { email: "andy@email.com" },
    update: {},
    create: {
      email: "andy@email.com",
      name: "Andy",
      password,
    },
  });

  const post = await prisma.post.upsert({
    where: { id: 1 },
    update: {},
    create: {
      title: "Hello world",
      content: "This is my first post",
      authorId: user.id,
    },
  });
}

main()
  .then(() => {
    prisma.$disconnect();
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
