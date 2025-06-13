import Counter from "@/atoms/counter"; 

export default function Contador() {
  return (
    <main className="h-50 flex items-center justify-center">
      <div className="flex flex-col md:flex-row mt-15 gap-8">
        <Counter to={50} label="Eventos" />
        <Counter to={100} label="Usuarios" />
        <Counter to={200} label="Ventas" />
        <Counter to={35} label="Años" />
      </div>
    </main>
  );
}