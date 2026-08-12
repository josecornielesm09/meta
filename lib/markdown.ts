// Renderizador de markdown minimalista (sin dependencias externas).
function esc(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export function renderMarkdown(md: string): string {
  const lines = md.replace(/\r\n/g, "\n").split("\n");
  const out: string[] = [];
  let inList = false;
  const closeList = () => { if (inList) { out.push("</ul>"); inList = false; } };

  const inline = (t: string) =>
    esc(t)
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-brand-blue underline">$1</a>');

  for (const line of lines) {
    const h = line.match(/^(#{1,4})\s+(.*)$/);
    if (h) {
      closeList();
      const level = h[1].length + 1;
      out.push(`<h${level} class="mt-6 mb-2 font-bold text-brand-navy">${inline(h[2])}</h${level}>`);
      continue;
    }
    if (/^[-*]\s+/.test(line)) {
      if (!inList) { out.push('<ul class="my-3 list-disc pl-6">'); inList = true; }
      out.push(`<li>${inline(line.replace(/^[-*]\s+/, ""))}</li>`);
      continue;
    }
    if (line.trim() === "") { closeList(); continue; }
    closeList();
    out.push(`<p class="my-3 leading-relaxed">${inline(line)}</p>`);
  }
  closeList();
  return out.join("\n");
}
