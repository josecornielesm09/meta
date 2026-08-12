"use client";

import { useState } from "react";
import Link from "next/link";
import { PLAN } from "@/lib/plan";

export default function PedidoPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const res = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setStatus(res.ok ? "ok" : "error");
    if (res.ok) e.currentTarget.reset();
  }

  return (
    <main className="min-h-screen bg-slate-50 py-12">
      <div className="container-x max-w-lg">
        <Link href="/" className="text-sm text-brand-blue hover:underline">← Volver</Link>
        <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-8 shadow">
          <h1 className="text-2xl font-black text-brand-navy">Contratar {PLAN.name}</h1>
          <p className="mt-1 text-slate-500">
            Inversión única de <strong className="text-brand-green">${PLAN.price}</strong>. Déjanos tus
            datos y te contactamos para comenzar.
          </p>

          {status === "ok" ? (
            <div className="mt-6 rounded-lg bg-green-50 p-6 text-center text-brand-greenDark">
              ✅ ¡Solicitud recibida! Te contactaremos muy pronto.
            </div>
          ) : (
            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <Field name="businessName" label="Nombre del negocio" required />
              <Field name="contactName" label="Tu nombre" required />
              <Field name="email" label="Correo electrónico" type="email" required />
              <Field name="phone" label="Teléfono / WhatsApp" />
              <div>
                <label className="mb-1 block text-sm font-semibold text-slate-700">Mensaje</label>
                <textarea
                  name="message"
                  rows={3}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-brand-blue focus:outline-none"
                  placeholder="Cuéntanos sobre tu negocio..."
                />
              </div>
              <button
                disabled={status === "sending"}
                className="w-full rounded-lg bg-brand-green px-6 py-3 font-bold text-white hover:bg-brand-greenDark disabled:opacity-60"
              >
                {status === "sending" ? "Enviando..." : "Enviar solicitud"}
              </button>
              {status === "error" && (
                <p className="text-center text-sm text-brand-red">
                  Ocurrió un error. Inténtalo de nuevo.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </main>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1 block text-sm font-semibold text-slate-700">
        {label} {required && <span className="text-brand-red">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-brand-blue focus:outline-none"
      />
    </div>
  );
}
