"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) router.push("/dashboard");
    else setError("Credenciales incorrectas.");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100">
      <form onSubmit={onSubmit} className="w-full max-w-sm rounded-2xl bg-white p-8 shadow">
        <h1 className="text-xl font-black text-brand-navy">Panel de administración</h1>
        <p className="mb-6 text-sm text-slate-500">Acceso interno</p>
        <input name="user" placeholder="Usuario" className="mb-3 w-full rounded-lg border border-slate-300 px-3 py-2" />
        <input name="password" type="password" placeholder="Contraseña" className="mb-4 w-full rounded-lg border border-slate-300 px-3 py-2" />
        {error && <p className="mb-3 text-sm text-brand-red">{error}</p>}
        <button className="w-full rounded-lg bg-brand-navy px-4 py-2 font-bold text-white">Entrar</button>
      </form>
    </main>
  );
}
