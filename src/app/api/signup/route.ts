import { NextResponse } from 'next/server';
import { prisma } from '../../../dependencies/prisma';
import { genSalt, hash } from 'bcrypt';

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const hashedPassword = await hash(password, await genSalt(12));

  const result = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  });

  return new NextResponse(JSON.stringify(result));
}
