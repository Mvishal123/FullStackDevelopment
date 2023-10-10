import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { Provider } from "next-auth/providers";

const authHandler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.NEXT_GOOGLE_CLIENT_SECRET || "",
    }),
  ] as Provider[],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  jwt: {
    encryption: true,
  },
});

export { authHandler as GET, authHandler as POST };
