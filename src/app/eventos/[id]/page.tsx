// Cambio mínimo para forzar redeploy y limpiar caché en Vercel
import MasInfoEventos from "@/templates/MasInfoEventos";

// El tipo de props es correcto para Next.js App Router
export default function EventoPage({ params }: { params: { id: string } }) {
  return <MasInfoEventos params={params} />;
}
