import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "../../../../dependencies/prisma";
import { compare } from "bcrypt";

export const nextAuthOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "andy@email.com",
        },
        password: { label: "Password", type: "password", placeholder: "test" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          // return null;
          // this is to make logging in easier for guests, but it's absolutely not secure
          credentials = {
            email: "andy@email.com",
            password: "test",
          };
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });
        if (!user) return null;

        const isPasswordValid = await compare(credentials.password, user.password);
        if (!isPasswordValid) return null;

        return {
          id: user.id.toString(),
          email: user.email,
          name: user.name,
        };
      },
    }),
  ],
  callbacks: {
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: Number(token.id),
        },
      };
    },
    jwt: ({ token, user }) => {
      if (user) {
        return {
          ...token,
          id: Number(user.id),
        };
      }

      return token;
    },
  },
};

const handler = NextAuth(nextAuthOptions);
export { handler as GET, handler as POST };
