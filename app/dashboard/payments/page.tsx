"use client";
import { useState } from "react";

export default function PaymentsPage() {
  const [amount, setAmount] = useState("");
  const [concept, setConcept] = useState("");
  const link = amount
    ? `https://pay.seolocal.app/c/${encodeURIComponent(concept || "cobro")}-${amount}`
    : "";

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-black text-brand-navy">💳 LocalPayments</h1>
      <p className="mt-1 text-slate-500">Genera enlaces de cobro para compartir con tus clientes.</p>

      <div className="mt-6 grid gap-3 rounded-xl border border-slate-200 bg-white p-6">
        <label className="text-sm font-semibold text-slate-700">Monto (USD)</label>
        <input value={amount} onChange={(e) => setAmount(e.target.value.replace(/[^0-9.]/g, ""))} placeholder="599" className="rounded-lg border border-slate-300 px-3 py-2" />
        <label className="text-sm font-semibold text-slate-700">Concepto</label>
        <input value={concept} onChange={(e) => setConcept(e.target.value)} placeholder="Paquete SEO Local" className="rounded-lg border border-slate-300 px-3 py-2" />

        {link && (
          <div className="mt-2 rounded-lg bg-green-50 p-4">
            <div className="text-xs font-semibold uppercase text-brand-greenDark">Enlace de cobro</div>
            <div className="mt-1 break-all font-mono text-sm text-slate-700">{link}</div>
            <button onClick={() => navigator.clipboard?.writeText(link)} className="mt-3 rounded-lg bg-brand-green px-4 py-2 text-sm font-bold text-white">Copiar enlace</button>
          </div>
        )}
      </div>
      <p className="mt-4 text-xs text-slate-400">Nota: para cobros reales se conecta una pasarela de pago (Stripe, PayPal). Este generador crea el enlace para compartir.</p>
    </div>
  );
}
