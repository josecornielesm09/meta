import { cookies } from "next/headers";

const COOKIE = "seo_admin";

export function checkCredentials(user: string, password: string) {
  const u = process.env.ADMIN_USER || "admin";
  const p = process.env.ADMIN_PASSWORD || "admin";
  return user === u && password === p;
}

export function sessionToken() {
  // Token simple derivado de las credenciales; suficiente para un panel interno.
  const secret = `${process.env.ADMIN_USER || "admin"}:${process.env.ADMIN_PASSWORD || "admin"}`;
  return Buffer.from(secret).toString("base64");
}

export function isAuthenticated() {
  return cookies().get(COOKIE)?.value === sessionToken();
}

export const AUTH_COOKIE = COOKIE;
