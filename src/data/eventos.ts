export interface Evento {
  id: string;
  titulo: string;
  fecha: string;
  ubicacion: string;
  descripcion: string;
  descripcion1?: string;
  descripcion2?: string;
  descripcion3?: string;
  descripcion4?: string;
  descripcion5?: string;
  descripcion6?: string;
  descripcion7?: string;
  imagen?: string;
  imagenes?: string[];
  mostrarEnLanding: boolean;
}

export const eventos: Evento[] = [
{
  id: "1",
  titulo: "Mallorca Rusty Concert: Neil Young 70th",
  fecha: "12 Junio 2015",
  ubicacion: "Lloseta - Mallorca",
  descripcion: "Concierto homenaje a Neil Young con músicos locales de Mallorca.",
  descripcion1: "Organizado por el W&Z Rustie Broken Arrow Club, con Wenry & Josep Zurdo como impulsores del evento.",
  descripcion2: "Evento gratuito, sin ánimo de lucro, con una programación densa y presentado por Jesús Ordovás.",
  descripcion3: "Un homenaje único a Neil Young con participación abierta a bandas afines de la isla.",
  descripcion4: "Celebrado en Lloseta, Mallorca, bajo el espíritu de 'La Playa de Neil'.",
  imagen: "/images/eventos/eventoMallorca.jpeg",
  imagenes: [
    "/images/eventos/eventoMallorca1.jpg",
    "/images/eventos/eventoMallorca2.jpg",
    "/images/eventos/eventoMallorca3.jpg",
    "/images/eventos/eventoMallorca4.jpg"
  ],
  mostrarEnLanding: true
},
{
  id: "2",
  titulo: "40th Aniversario del disco Zuma – Neil Young",
  fecha: "30 Enero 2016",
  ubicacion: "Lloseta - Mallorca",
  descripcion: "Celebración musical del 40º aniversario del emblemático álbum Zuma de Neil Young.",
  descripcion1: "Gracias a Maria Mrtn y Edu (La Red), el evento rindió tributo a este disco esencial tras el éxito del 70TH de Lloseta.",
  descripcion2: "Con entrada gratuita, reunió a una destacada selección de músicos locales y bandas afines.",
  descripcion3: "Actuaciones confirmadas: Toni Monserrat + Xavi Escutia + Toni Vives, Los Malditos, Urtain (con Iván Tobías), Eloy Pardo (Still Morris) + Noah Newille, Roulotte + Noah Newille, Recover, Noah Newille (solo) e Indian Summer.",
  descripcion4: "Un homenaje intenso y cargado de energía, bajo el lema 'Long May U Run'.",
  imagen: "/images/eventos/eventoNeilYoungEnero16.jpg",
  imagenes: [],
  mostrarEnLanding: true
},
{
  id: "3",
  titulo: "Rusty Neil Young Concert – Presentación VII Rust Fest",
  fecha: "17 Junio 2016",
  ubicacion: "Cádiz",
  descripcion: "Tributo musical a Neil Young y presentación del VII Rust Fest en Cádiz.",
  descripcion1: "Concierto especial para los seguidores de Neil Young celebrado en el 14 Rock Bar.",
  descripcion2: "Sirvió como antesala al VII Rust Fest de Bolonia (Cádiz), promoviendo el espíritu rustie.",
  descripcion3: "Un encuentro íntimo, cargado de pasión por la música del canadiense.",
  descripcion4: "Evento gratuito y abierto a la comunidad de fans.",
  imagen:  "/images/eventos/eventoRustyBarJunio16.jpg",
  imagenes: [],
  mostrarEnLanding: true
},
{
  id: "4",
  titulo: "Isladencanta 2001: el día que conocimos a los Strokes",
  fecha: "Julio 2001",
  ubicacion: "Palma de Mallorca",
  descripcion: "Primer festival Isladencanta celebrado en Esporles, Mallorca, con un cartel espectacular que incluyó a bandas internacionales y emergentes como The Strokes, quienes ofrecieron su primer concierto en España.",
  descripcion1: "Tuvimos el privilegio de entrevistar a The Strokes antes de la publicación de su disco debut 'Is This It', en un momento histórico que marcó el inicio de una nueva era para la música indie estatal y local.",
  descripcion2: "Nos encargamos del montaje de escenarios, seguridad, transporte y logística integral, garantizando una organización técnica eficiente y un entorno seguro para artistas y asistentes.",
  descripcion3: "El festival reunió a grandes artistas internacionales y nacionales, como Jon Spencer Blues Explosion, Stereolab, Goldfrapp, La Buena Vida, entre otros, consolidándose como un referente de la escena musical independiente en España.",
  descripcion4: "Isladencanta 2001 fue una experiencia inolvidable que impulsó la cultura musical en Mallorca, fortaleciendo la comunidad de músicos, promotores y fans, y dejando una huella imborrable en la historia local de la música.",
  descripcion5: "La ubicación única en la Serra de Tramuntana, combinando naturaleza y música, añadió un carácter especial al evento, creando una atmósfera mágica que todos los asistentes recuerdan con cariño.",
  imagen: "/images/eventos/eventoIsladencanta2001.jpeg",
  imagenes: [
    "/images/eventos/eventoIsladencanta1.jpg",
    "/images/eventos/eventoIsladencanta2.jpg",
    "/images/eventos/eventoIsladencanta3.jpg"
  ],
  mostrarEnLanding: true,
},
{
  id: "5",
  titulo: "I Freeworld Rockfest",
  fecha: "2 abril 2022",
  ubicacion: "Madrid",
  descripcion: "Festival de rock celebrado en Madrid y Las Rozas, con dos días de conciertos y una amplia variedad de bandas.",
  descripcion1: "El evento se dividió en dos días y dos escenarios diferentes, ofreciendo acceso a ambos días con una única entrada.",
  descripcion2: "El primer día, en la Sala Rompeolas de Madrid, presentó un ambiente íntimo con actuaciones de Lobos Negros, Adhara & Ritman en set semi-acústico, y Nothingman, incluyendo un showcase y firma de discos de Lobos Negros.",
  descripcion3: "El segundo día, en la Sala Aperitoche de Las Rozas, contó con las actuaciones de Neil Dawn & Superowls, Adhara & Ritman, Zuma (homenaje a Neil Young) y Los Deltonos, en una tarde de puro rock'n'roll.",
  descripcion4: "El evento fue retransmitido en streaming con varias cámaras y en alta calidad, permitiendo a los fans disfrutar del festival desde cualquier lugar.",
  descripcion5: "Los asistentes destacaron la organización, la calidad de la música y el ambiente de compañerismo, con comentarios positivos sobre el evento.",
  descripcion6: "La entrada al evento fue gratuita, permitiendo que más personas pudieran disfrutar de la música en vivo.",
  descripcion7: "El festival se llevó a cabo en la Sala Aperitoche, ubicada en el C.C. Copenhague, 10, en Las Rozas, Madrid.",
  imagen: "/images/eventos/eventoFreeWorldRockFest.jpg",
  imagenes: [
    "/images/eventos/eventoFreeWorldRockFest1.jpg",
    "/images/eventos/eventoFreeWorldRockFest2.jpg",
    "/images/eventos/eventoFreeWorldRockFest3.jpg",
    "/images/eventos/eventoFreeWorldRockFest4.jpg"
  ],
  mostrarEnLanding: true
}
];