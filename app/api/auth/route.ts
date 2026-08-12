import { NextResponse } from "next/server";
import { checkCredentials, sessionToken, AUTH_COOKIE } from "@/lib/auth";

export async function POST(req: Request) {
  const { user, password } = await req.json();
  if (!checkCredentials(String(user || ""), String(password || ""))) {
    return NextResponse.json({ error: "Credenciales incorrectas." }, { status: 401 });
  }
  const res = NextResponse.json({ ok: true });
  res.cookies.set(AUTH_COOKIE, sessionToken(), {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  return res;
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.delete(AUTH_COOKIE);
  return res;
}
