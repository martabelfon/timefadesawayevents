import MasInfoEventos from "@/templates/MasInfoEventos";

export default function EventoPage({ params }: { params: { id: string } }) {
  return <MasInfoEventos params={params} />;
}
