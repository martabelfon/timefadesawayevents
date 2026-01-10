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
   descripcion3?: {
    es: string;
    en: string;
    fr: string;
    de: string;
  };
   descripcion4?: {
    es: string;
    en: string;
    fr: string;
    de: string;
  };
   descripcion5?: {
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
      es: "El Rust Fest vuelve los días 4 y 5 de julio a Mazagón con un homenaje al legado de Neil Young y bandas invitadas como Fire Moon.",
      en: "Rust Fest returns on July 4 and 5 to Mazagón with a tribute to Neil Young's legacy and guest bands such as Fire Moon.",
      fr: "Le Rust Fest revient les 4 et 5 juillet à Mazagón avec un hommage à l'héritage de Neil Young et des groupes invités tels que Fire Moon.",
      de: "Das Rust Fest kehrt am 4. und 5. Juli nach Mazagón zurück, mit einer Hommage an Neil Youngs Vermächtnis und Gastbands wie Fire Moon."
    },
    descripcion2: {
      es: "El Rust Fest 2025 vuelve por todo lo alto los días 4 y 5 de julio en Mazagón (Huelva), en el Chiringuito Costa Colón, un enclave privilegiado a pie de playa. Esta 16ª edición mantiene viva la tradición de rendir homenaje al legado musical de Neil Young, reuniendo a una selección de bandas nacionales que comparten su espíritu folk-rock. El cartel de este año incluye a The Humbuckers, The Harvest Band, Winnie Pegg & The Tractors y Fire Moon, todos ellos preparados para ofrecer dos noches de música auténtica bajo las estrellas. Organizado por el colectivo 'En La Playa de Neil', el Rust Fest se ha consolidado como un evento imprescindible para los amantes del rock clásico y la escena musical independiente en un entorno natural incomparable.",
      en: "Rust Fest 2025 returns in full swing on July 4 and 5 in Mazagón (Huelva), at Chiringuito Costa Colón, a privileged beachfront venue. This 16th edition keeps alive the tradition of honoring Neil Young’s musical legacy, bringing together a selection of national bands that share his folk-rock spirit. This year’s lineup includes The Humbuckers, The Harvest Band, Winnie Pegg & The Tractors, and Fire Moon, all ready to deliver two nights of authentic music under the stars. Organized by the collective 'En La Playa de Neil', Rust Fest has become a must-attend event for lovers of classic rock and the independent music scene in a unique natural setting.",
      fr: "Le Rust Fest 2025 revient en force les 4 et 5 juillet à Mazagón (Huelva), au Chiringuito Costa Colón, un lieu privilégié en bord de mer. Cette 16e édition perpétue la tradition de rendre hommage à l’héritage musical de Neil Young, en réunissant une sélection de groupes nationaux partageant son esprit folk-rock. L'affiche de cette année comprend The Humbuckers, The Harvest Band, Winnie Pegg & The Tractors et Fire Moon, tous prêts à offrir deux nuits de musique authentique sous les étoiles. Organisé par le collectif 'En La Playa de Neil', le Rust Fest s’est imposé comme un rendez-vous incontournable pour les amateurs de rock classique et de musique indépendante dans un cadre naturel exceptionnel.",
      de: "Das Rust Fest 2025 kehrt am 4. und 5. Juli mit voller Kraft nach Mazagón (Huelva) zurück, im Chiringuito Costa Colón, einem privilegierten Ort direkt am Strand. Diese 16. Ausgabe hält die Tradition aufrecht, Neil Youngs musikalisches Erbe zu ehren, und vereint eine Auswahl nationaler Bands, die seinen Folk-Rock-Geist teilen. Das diesjährige Line-up umfasst The Humbuckers, The Harvest Band, Winnie Pegg & The Tractors und Fire Moon – alle bereit, zwei Nächte authentischer Musik unter den Sternen zu bieten. Organisiert vom Kollektiv 'En La Playa de Neil' hat sich das Rust Fest als ein Muss für Liebhaber des klassischen Rocks und der unabhängigen Musikszene in einer einzigartigen natürlichen Umgebung etabliert."
    },
    imagen: "/images/noticias/Rust-fest.jpeg",
    fecha: {
      es: "4‑5 de Julio de 2025",
      en: "July 4–5, 2025",
      fr: "4‑5 Juillet 2025",
      de: "4.–5. Juli 2025"
    },
  },
  {
    id: "2",
    titulo: {
      es: "Confirmación de recaudación benéfica y rueda de prensa",
      en: "Charity proceeds confirmation and press conference",
      fr: "Confirmation des fonds caritatifs et conférence de presse",
      de: "Bestätigung der Spendeneinnahmen und Pressekonferenz"
    },
    descripcion: {
      es: "Time Fades Away Events  se complace al confirmar con el acuerdo firmado entre ambas partes, en comunicarles/comunicaros, que TODA LA RECAUDACIÓN DE ESTE EVENTO SERÁ RECEPCIONADA para sus necesitados fines benéficos y solidarios.",
      en: "Time Fades Away Events is pleased to confirm, with the agreement signed by both parties, that ALL PROCEEDS FROM THIS EVENT WILL BE RECEIVED for its much-needed charitable and solidarity purposes.",
      fr: "Time Fades Away Events a le plaisir de confirmer, avec l'accord signé entre les deux parties, que TOUS LES FONDS RECUEILLIS LORS DE CET ÉVÉNEMENT SERONT AFFECTÉS à ses nécessaires objectifs caritatifs et solidaires.",
      de: "Time Fades Away Events freut sich, mit der von beiden Parteien unterzeichneten Vereinbarung bestätigen zu können, dass ALLE EINNAHMEN AUS DIESER VERANSTALTUNG für die dringend benötigten wohltätigen und solidarischen Zwecke verwendet werden."
    },
    descripcion2: {
      es: "Gracias, Dª Eva García Socías, por su gentileza y actitud.",
      en: "Thank you, Ms. Eva García Socías, for your kindness and attitude.",
      fr: "Merci, Mme Eva García Socías, pour votre gentillesse et votre attitude.",
      de: "Vielen Dank, Frau Eva García Socías, für Ihre Freundlichkeit und Haltung."
    },
     descripcion3: {
      es: "Nos vemos en la rueda de prensa, de Mallorca, el próximo 24/10/25, en la Sala Zero del local ES GREMI.",
      en: "See you at the press conference in Mallorca on 24/10/25, at the Sala Zero of the ES GREMI venue.",
      fr: "Rendez-vous à la conférence de presse à Majorque le 24/10/25, dans la salle Zero du local ES GREMI.",
      de: "Wir sehen uns auf der Pressekonferenz in Mallorca am 24.10.25 in der Sala Zero des Lokals ES GREMI." 
    },
    descripcion4: {
      es: "Ramón Granado. Alberto Felix Carrasco. Magín Payeras.",
      en: "Ramón Granado. Alberto Felix Carrasco. Magín Payeras.",
      fr: "Ramón Granado. Alberto Felix Carrasco. Magín Payeras.",
      de: "Ramón Granado. Alberto Felix Carrasco. Magín Payeras."
    },
     descripcion5: {
      es: "Un cordial Saludo.",
      en: "Best regards.",
      fr: "Cordialement.",
      de: "Mit freundlichen Grüßen."
    },
    imagen: "/images/logo/asociacioAsperger.png",
    fecha: {
      es: "24 de Octubre de 2025",
      en: "October 24, 2025",
      fr: "24 Octope 2025",
      de: "24. Oktober 2025"
    }
  },


];
