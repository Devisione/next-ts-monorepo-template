import { NextAuth, CredentialsProvider } from "@project/auth/server";

export default NextAuth({
  providers: [
    CredentialsProvider({
      id: "custom",
      name: "custom",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (
          credentials?.password === "test" &&
          credentials?.username === "test"
        ) {
          return { id: "0", name: "Владимир", email: "" };
        }
        throw new Error("user_or_password_incorrect");
      },
    }),
  ],
  callbacks: {
    async jwt(data) {
      return data.token;
    },
    async session(data) {
      return {
        ...data.session,
        user: { name: "Владимир", email: "something@gmail.com" },
      };
    },
  },

  pages: {
    signIn: "/login",
    error: "/login?error=1",
  },
  secret: "anything_else",
});
