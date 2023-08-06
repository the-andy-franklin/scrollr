import { getServerSession } from "next-auth";
import { nextAuthOptions } from "../auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import { prisma } from "../../../dependencies/prisma";

export async function POST(req: Request) {
  const { title, content } = await req.json();
  const session = await getServerSession(nextAuthOptions);

  if (!session?.user?.id) return new NextResponse("failed");

  const result = await prisma.post.create({
    data: {
      title,
      content,
      authorId: session.user.id,
    },
  });

  return new NextResponse(JSON.stringify(result));
}

export async function GET() {
  const session = await getServerSession(nextAuthOptions);

  if (!session?.user?.id) return new NextResponse("failed");

  const posts = await prisma.post.findMany({
    where: {
      authorId: session.user.id,
    },
    include: {
      author: true,
    },
  });

  return NextResponse.json(posts);
}
