// Archivo de datos de noticias para la web
// Puedes añadir, editar o eliminar noticias aquí

export interface Noticia {
  titulo: {
    es: string;
    en: string;
    fr: string;
    de: string;
  };
  descripcion: {
    es: string;
    en: string;
    fr: string;
    de: string;
  };
  descripcion2?: {
    es: string;
    en: string;
    fr: string;
    de: string;
  };
  imagen: string;
  fecha: {
    es: string;
    en: string;
    fr: string;
    de: string;
  };
  id: string;
}

export const noticias: Noticia[] = [
  {
    id: "1",
    titulo: {
      es: "Rust Fest celebra su 16ª edición en Mazagón",
      en: "Rust Fest celebrates its 16th edition in Mazagón",
      fr: "Rust Fest célèbre sa 16e édition à Mazagón",
      de: "Rust Fest feiert seine 16. Ausgabe in Mazagón"
    },
    descripcion: {
      es: "El Rust Fest vuelve los días 4 y 5 de julio a Mazagón con un homenaje al legado de Neil Young y bandas invitadas como Keith Mansfield y Fire Moon.",
      en: "Rust Fest returns on July 4 and 5 to Mazagón with a tribute to Neil Young's legacy and guest bands such as Keith Mansfield and Fire Moon.",
      fr: "Le Rust Fest revient les 4 et 5 juillet à Mazagón avec un hommage à l'héritage de Neil Young et des groupes invités tels que Keith Mansfield et Fire Moon.",
      de: "Das Rust Fest kehrt am 4. und 5. Juli nach Mazagón zurück, mit einer Hommage an Neil Youngs Vermächtnis und Gastbands wie Keith Mansfield und Fire Moon."
    },
    descripcion2: {
      es: "El Rust Fest 2025 vuelve por todo lo alto los días 4 y 5 de julio en Mazagón (Huelva), en el Chiringuito Costa Colón, un enclave privilegiado a pie de playa. Esta 16ª edición mantiene viva la tradición de rendir homenaje al legado musical de Neil Young, reuniendo a una selección de bandas nacionales que comparten su espíritu folk-rock. El cartel de este año incluye a Keith Mansfield, The Humbuckers, The Harvest Band, Winnie Pegg & The Tractors y Fire Moon, todos ellos preparados para ofrecer dos noches de música auténtica bajo las estrellas. Organizado por el colectivo 'En La Playa de Neil', el Rust Fest se ha consolidado como un evento imprescindible para los amantes del rock clásico y la escena musical independiente en un entorno natural incomparable.",
      en: "Rust Fest 2025 returns in full swing on July 4 and 5 in Mazagón (Huelva), at Chiringuito Costa Colón, a privileged beachfront venue. This 16th edition keeps alive the tradition of honoring Neil Young’s musical legacy, bringing together a selection of national bands that share his folk-rock spirit. This year’s lineup includes Keith Mansfield, The Humbuckers, The Harvest Band, Winnie Pegg & The Tractors, and Fire Moon, all ready to deliver two nights of authentic music under the stars. Organized by the collective 'En La Playa de Neil', Rust Fest has become a must-attend event for lovers of classic rock and the independent music scene in a unique natural setting.",
      fr: "Le Rust Fest 2025 revient en force les 4 et 5 juillet à Mazagón (Huelva), au Chiringuito Costa Colón, un lieu privilégié en bord de mer. Cette 16e édition perpétue la tradition de rendre hommage à l’héritage musical de Neil Young, en réunissant une sélection de groupes nationaux partageant son esprit folk-rock. L'affiche de cette année comprend Keith Mansfield, The Humbuckers, The Harvest Band, Winnie Pegg & The Tractors et Fire Moon, tous prêts à offrir deux nuits de musique authentique sous les étoiles. Organisé par le collectif 'En La Playa de Neil', le Rust Fest s’est imposé comme un rendez-vous incontournable pour les amateurs de rock classique et de musique indépendante dans un cadre naturel exceptionnel.",
      de: "Das Rust Fest 2025 kehrt am 4. und 5. Juli mit voller Kraft nach Mazagón (Huelva) zurück, im Chiringuito Costa Colón, einem privilegierten Ort direkt am Strand. Diese 16. Ausgabe hält die Tradition aufrecht, Neil Youngs musikalisches Erbe zu ehren, und vereint eine Auswahl nationaler Bands, die seinen Folk-Rock-Geist teilen. Das diesjährige Line-up umfasst Keith Mansfield, The Humbuckers, The Harvest Band, Winnie Pegg & The Tractors und Fire Moon – alle bereit, zwei Nächte authentischer Musik unter den Sternen zu bieten. Organisiert vom Kollektiv 'En La Playa de Neil' hat sich das Rust Fest als ein Muss für Liebhaber des klassischen Rocks und der unabhängigen Musikszene in einer einzigartigen natürlichen Umgebung etabliert."
    },
    imagen: "/images/noticias/Rust-fest.jpeg",
    fecha: {
      es: "4‑5 de Julio de 2025",
      en: "July 4–5, 2025",
      fr: "4‑5 Juillet 2025",
      de: "4.–5. Juli 2025"
    }
  }


];
