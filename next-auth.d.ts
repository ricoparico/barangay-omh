import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface User extends DefaultUser {
    is_verified?: boolean;
    email_type?: string;
    role?: "user" | "admin" | "super-admin";
  }

  interface Session {
    user: User;
  }

  interface JWT {
    is_verified?: boolean;
    email_type?: string;
    role?: "user" | "admin" | "super-admin";
  }
}
