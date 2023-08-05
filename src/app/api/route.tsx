import { getServerSession } from "next-auth";
import { NextResponse } from 'next/server';
import { nextAuthOptions } from './auth/[...nextauth]/route';

export async function GET(request: Request) {
  const session = await getServerSession(nextAuthOptions);
  return NextResponse.json({ authenticated: !!session })
}
