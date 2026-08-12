import Anthropic from "@anthropic-ai/sdk";

export type GeneratedPost = {
  title: string;
  excerpt: string;
  content: string;
  keywords: string[];
};

const MODEL = "claude-opus-4-8";

export function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 80);
}

// Genera un artículo de blog optimizado para SEO local usando Claude.
export async function generateBlogPost(input: {
  businessName: string;
  city?: string | null;
  keywords?: string | null;
  topic?: string | null;
}): Promise<GeneratedPost> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) throw new Error("Falta ANTHROPIC_API_KEY en el entorno.");

  const client = new Anthropic({ apiKey });

  const prompt = `Eres un redactor experto en SEO local. Escribe un artículo de blog en español optimizado para posicionar en Google.

Negocio: ${input.businessName}
Ciudad: ${input.city ?? "(local)"}
Palabras clave objetivo: ${input.keywords ?? "servicios locales"}
Tema sugerido: ${input.topic ?? "consejos útiles relacionados con el negocio"}

Requisitos:
- 500-700 palabras, tono cercano y profesional.
- Integra las palabras clave de forma natural.
- Incluye subtítulos.
- Termina con una llamada a la acción para contactar al negocio.

Responde ÚNICAMENTE con un objeto JSON válido (sin texto adicional, sin bloques de código) con esta forma:
{"title": "...", "excerpt": "resumen de 1-2 frases", "content": "artículo en markdown", "keywords": ["...", "..."]}`;

  const msg = await client.messages.create({
    model: MODEL,
    max_tokens: 2000,
    messages: [{ role: "user", content: prompt }],
  });

  const raw = msg.content
    .filter((b): b is Anthropic.TextBlock => b.type === "text")
    .map((b) => b.text)
    .join("")
    .trim();

  const jsonText = raw.replace(/^```(?:json)?/i, "").replace(/```$/, "").trim();
  const parsed = JSON.parse(jsonText) as GeneratedPost;
  return parsed;
}
