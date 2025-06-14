// Archivo de datos de noticias para la web
// Puedes añadir, editar o eliminar noticias aquí

export interface Noticia {
  titulo: string;
  descripcion: string;
  descripcion2?: string;
  imagen: string;
  fecha: string;
  id: string;
}

export const noticias: Noticia[] = [
  {
    id: "1",
    titulo: "Rust Fest celebra su 16ª edición en Mazagón",
    descripcion: "El Rust Fest vuelve los días 4 y 5 de julio a Mazagón con un homenaje al legado de Neil Young y bandas invitadas como Keith Mansfield y Fire Moon.",
    descripcion2: "El Rust Fest 2025 vuelve por todo lo alto los días 4 y 5 de julio en Mazagón (Huelva), en el Chiringuito Costa Colón, un enclave privilegiado a pie de playa. Esta 16ª edición mantiene viva la tradición de rendir homenaje al legado musical de Neil Young, reuniendo a una selección de bandas nacionales que comparten su espíritu folk-rock. El cartel de este año incluye a Keith Mansfield, The Humbuckers, The Harvest Band, Winnie Pegg & The Tractors y Fire Moon, todos ellos preparados para ofrecer dos noches de música auténtica bajo las estrellas. Organizado por el colectivo 'En La Playa de Neil', el Rust Fest se ha consolidado como un evento imprescindible para los amantes del rock clásico y la escena musical independiente en un entorno natural incomparable.",
    imagen: "/images/noticias/Rust-fest.jpg",
    fecha: "4‑5 de julio de 2025"
    }

];
