import { prisma } from "@/lib/db";
import { addMessage, toggleMessage } from "./actions";

export const dynamic = "force-dynamic";

const CHANNEL: Record<string, { label: string; color: string }> = {
  whatsapp: { label: "WhatsApp", color: "bg-green-100 text-green-700" },
  web: { label: "Chat web", color: "bg-blue-100 text-blue-700" },
  sms: { label: "SMS", color: "bg-slate-100 text-slate-600" },
};

export default async function MensajesPage() {
  const [messages, clients] = await Promise.all([
    prisma.message.findMany({ orderBy: { createdAt: "desc" }, include: { client: true } }),
    prisma.client.findMany({ orderBy: { businessName: "asc" } }),
  ]);
  const nuevos = messages.filter((m) => m.status === "nuevo").length;

  return (
    <div className="max-w-3xl">
      <h1 className="text-2xl font-black text-brand-navy">💬 LocalChat</h1>
      <p className="mt-1 text-slate-500">Bandeja de mensajes de WhatsApp y chat web. <span className="font-semibold text-brand-green">{nuevos} sin responder.</span></p>

      <form action={addMessage} className="mt-6 grid gap-3 rounded-xl border border-slate-200 bg-white p-5 sm:grid-cols-2">
        <h2 className="font-bold text-brand-navy sm:col-span-2">Registrar mensaje</h2>
        <input name="fromName" placeholder="Nombre de quien escribe" className="rounded-lg border border-slate-300 px-3 py-2" required />
        <select name="channel" className="rounded-lg border border-slate-300 px-3 py-2" defaultValue="whatsapp">
          <option value="whatsapp">WhatsApp</option><option value="web">Chat web</option><option value="sms">SMS</option>
        </select>
        <select name="clientId" className="rounded-lg border border-slate-300 px-3 py-2 sm:col-span-2">
          <option value="">— Sin cliente asignado —</option>
          {clients.map((c) => <option key={c.id} value={c.id}>{c.businessName}</option>)}
        </select>
        <input name="text" placeholder="Mensaje" className="rounded-lg border border-slate-300 px-3 py-2 sm:col-span-2" required />
        <button className="rounded-lg bg-brand-green px-4 py-2 font-bold text-white sm:col-span-2">Guardar</button>
      </form>

      <div className="mt-6 space-y-3">
        {messages.length === 0 && <p className="text-slate-400">Sin mensajes todavía.</p>}
        {messages.map((m) => {
          const ch = CHANNEL[m.channel] ?? CHANNEL.web;
          return (
            <div key={m.id} className={`rounded-xl border bg-white p-4 ${m.status === "nuevo" ? "border-brand-green" : "border-slate-200"}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-brand-navy">{m.fromName}</span>
                  <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${ch.color}`}>{ch.label}</span>
                  {m.client && <span className="text-xs text-slate-400">· {m.client.businessName}</span>}
                </div>
                <form action={toggleMessage}>
                  <input type="hidden" name="id" value={m.id} />
                  <button className="rounded-md px-3 py-1 text-xs font-bold text-white" style={{ background: m.status === "respondido" ? "#94a3b8" : "#16a34a" }}>
                    {m.status === "respondido" ? "Respondido" : "Marcar respondido"}
                  </button>
                </form>
              </div>
              <p className="mt-2 text-sm text-slate-600">{m.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
