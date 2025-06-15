import { sign } from './../../node_modules/@types/three/src/Three.TSL.d';
export interface Evento {
  id: string;
  titulo: {
    es: string;
    en: string;
    fr: string;
    de: string;
  };
  fecha: {
    es: string;
    en: string;
    fr: string;
    de: string;
  };
  ubicacion: {
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
  descripcion1?: {
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
  descripcion6?: {
    es: string;
    en: string;
    fr: string;
    de: string;
  };
  descripcion7?: {
    es: string;
    en: string;
    fr: string;
    de: string;
  };
  descripcion8?: {
    es: string;
    en: string;
    fr: string;
    de: string;
  };
  descripcion9?: {
    es: string;
    en: string;
    fr: string;
    de: string;
  };
  imagen?: string;
  imagenes?: string[];
  mostrarEnLanding: boolean;
}

export const eventos: Evento[] = [
  {
    id: "1",
    titulo: {
      es: "Mallorca Rusty Concert: Neil Young 70th",
      en: "Mallorca Rusty Concert: Neil Young 70th",
      fr: "Mallorca Rusty Concert : Neil Young 70e anniversaire",
      de: "Mallorca Rusty Concert: Neil Young 70. Geburtstag"
    },
   fecha: {
      es: "28 de Noviembre de 2015",
      en: "November 28, 2015",
      fr: "28 Novembre 2015",
      de: "28. November 2015"
    },
    ubicacion: {
      es: "Lloseta - Mallorca",
      en: "Lloseta - Mallorca",
      fr: "Lloseta - Majorque",
      de: "Lloseta - Mallorca"
    },
    descripcion: {
      es: "Concierto homenaje a Neil Young con músicos locales de Mallorca.",
      en: "Tribute concert to Neil Young with local musicians from Mallorca.",
      fr: "Concert hommage à Neil Young avec des musiciens locaux de Majorque.",
      de: "Tributkonzert für Neil Young mit lokalen Musikern aus Mallorca."
    },
    descripcion1: {
      es: "Organizado por el W&Z Rustie Broken Arrow Club, con Wenry & Josep Zurdo como impulsores del evento.",
      en: "Organized by the W&Z Rustie Broken Arrow Club, with Wenry & Josep Zurdo as promoters of the event.",
      fr: "Organisé par le W&Z Rustie Broken Arrow Club, avec Wenry & Josep Zurdo comme promoteurs de l'événement.",
      de: "Organisiert vom W&Z Rustie Broken Arrow Club, mit Wenry & Josep Zurdo als Initiatoren der Veranstaltung."
    },
    descripcion2: {
      es: "Evento gratuito, sin ánimo de lucro, con una programación densa y presentado por Jesús Ordovás.",
      en: "Free, non-profit event with a dense program and presented by Jesús Ordovás.",
      fr: "Événement gratuit, à but non lucratif, avec un programme dense et présenté par Jesús Ordovás.",
      de: "Kostenlose, gemeinnützige Veranstaltung mit dichtem Programm, präsentiert von Jesús Ordovás."
    },
    descripcion3: {
      es: "Un homenaje único a Neil Young con participación abierta a bandas afines de la isla.",
      en: "A unique tribute to Neil Young with open participation for like-minded bands from the island.",
      fr: "Un hommage unique à Neil Young avec la participation ouverte de groupes locaux partageant le même esprit.",
      de: "Eine einzigartige Hommage an Neil Young mit offener Teilnahme für gleichgesinnte Bands von der Insel."
    },
    descripcion4: {
      es: "Celebrado en Lloseta, Mallorca, bajo el espíritu de 'La Playa de Neil'.",
      en: "Held in Lloseta, Mallorca, under the spirit of 'La Playa de Neil'.",
      fr: "Organisé à Lloseta, Majorque, sous l'esprit de 'La Playa de Neil'.",
      de: "Abgehalten in Lloseta, Mallorca, im Geiste von 'La Playa de Neil'."
    },
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
    titulo: {
      es: "40th Aniversario del disco Zuma – Neil Young",
      en: "40th Anniversary of the Zuma album – Neil Young",
      fr: "40e anniversaire de l'album Zuma – Neil Young",
      de: "40. Jahrestag des Zuma-Albums – Neil Young"
    },
    fecha: {
      es: "30 de enero de 2016",
      en: "January 30, 2016",
      fr: "30 janvier 2016",
      de: "30. Januar 2016"
    },
    ubicacion: {
      es: "Lloseta - Mallorca",
      en: "Lloseta - Mallorca",
      fr: "Lloseta - Majorque",
      de: "Lloseta - Mallorca"
    },
    descripcion: {
      es: "Celebración musical del 40º aniversario del emblemático álbum Zuma de Neil Young.",
      en: "Musical celebration of the 40th anniversary of Neil Young's iconic album Zuma.",
      fr: "Célébration musicale du 40e anniversaire de l'album emblématique Zuma de Neil Young.",
      de: "Musikalische Feier zum 40. Jahrestag des ikonischen Zuma-Albums von Neil Young."
    },
    descripcion1: {
      es: "Gracias a Maria Mrtn y Edu (La Red), el evento rindió tributo a este disco esencial tras el éxito del 70TH de Lloseta.",
      en: "Thanks to Maria Mrtn and Edu (La Red), the event paid tribute to this essential album after the success of the 70TH in Lloseta.",
      fr: "Grâce à Maria Mrtn et Edu (La Red), l'événement a rendu hommage à cet album essentiel après le succès du 70TH à Lloseta.",
      de: "Dank Maria Mrtn und Edu (La Red) ehrte die Veranstaltung dieses wesentliche Album nach dem Erfolg des 70TH in Lloseta."
    },
    descripcion2: {
      es: "Con entrada gratuita, reunió a una destacada selección de músicos locales y bandas afines.",
      en: "With free entry, it brought together a select group of local musicians and like-minded bands.",
      fr: "Avec une entrée gratuite, il a réuni un groupe sélectionné de musiciens locaux et de groupes partageant les mêmes idées.",
      de: "Mit freiem Eintritt versammelte es eine ausgewählte Gruppe lokaler Musiker und gleichgesinnter Bands."
    },
    descripcion3: {
      es: "Actuaciones confirmadas: Toni Monserrat + Xavi Escutia + Toni Vives, Los Malditos, Urtain (con Iván Tobías), Eloy Pardo (Still Morris) + Noah Newille, Roulotte + Noah Newille, Recover, Noah Newille (solo) e Indian Summer.",
      en: "Confirmed performances: Toni Monserrat + Xavi Escutia + Toni Vives, Los Malditos, Urtain (with Iván Tobías), Eloy Pardo (Still Morris) + Noah Newille, Roulotte + Noah Newille, Recover, Noah Newille (solo) and Indian Summer.",
      fr: "Performances confirmées : Toni Monserrat + Xavi Escutia + Toni Vives, Los Malditos, Urtain (avec Iván Tobías), Eloy Pardo (Still Morris) + Noah Newille, Roulotte + Noah Newille, Recover, Noah Newille (solo) et Indian Summer.",
      de: "Bestätigte Auftritte: Toni Monserrat + Xavi Escutia + Toni Vives, Los Malditos, Urtain (mit Iván Tobías), Eloy Pardo (Still Morris) + Noah Newille, Roulotte + Noah Newille, Recover, Noah Newille (solo) und Indian Summer."
    },
    descripcion4: {
      es: "Un homenaje intenso y cargado de energía, bajo el lema 'Long May U Run'.",
      en: "An intense and energetic tribute, under the slogan 'Long May U Run'.",
      fr: "Un hommage intense et énergique, sous le slogan 'Long May U Run'.",
      de: "Eine intensive und energiegeladene Hommage unter dem Slogan 'Long May U Run'."
    },
    imagen: "/images/eventos/eventoNeilYoungEnero16.jpg",
    imagenes: [],
    mostrarEnLanding: true
  },
  {
    id: "3",
    titulo: {
      es: "Rusty Neil Young Concert – Presentación VII Rust Fest",
      en: "Rusty Neil Young Concert – Presentation VII Rust Fest",
      fr: "Concert Rusty Neil Young – Présentation du VII Rust Fest",
      de: "Rusty Neil Young Konzert – Präsentation des VII Rust Fest"
    },
    fecha: {
      es: "17 de junio de 2016",
      en: "June 17, 2016",
      fr: "17 juin 2016",
      de: "17. Juni 2016"
    },
    ubicacion: {
      es: "Cádiz",
      en: "Cádiz",
      fr: "Cádiz",
      de: "Cádiz"
    },
    descripcion: {
      es: "Tributo musical a Neil Young y presentación del VII Rust Fest en Cádiz.",
      en: "Musical tribute to Neil Young and presentation of the VII Rust Fest in Cádiz.",
      fr: "Hommage musical à Neil Young et présentation du VII Rust Fest à Cádiz.",
      de: "Musikalische Hommage an Neil Young und Präsentation des VII Rust Fest in Cádiz."
    },
    descripcion1: {
      es: "Concierto especial para los seguidores de Neil Young celebrado en el 14 Rock Bar.",
      en: "Special concert for Neil Young followers held at the 14 Rock Bar.",
      fr: "Concert spécial pour les fans de Neil Young, organisé au 14 Rock Bar.",
      de: "Sonderkonzert für Neil Young-Fans im 14 Rock Bar."
    },
    descripcion2: {
      es: "Sirvió como antesala al VII Rust Fest de Bolonia (Cádiz), promoviendo el espíritu rustie.",
      en: "Served as a prelude to the VII Rust Fest in Bolonia (Cádiz), promoting the rustie spirit.",
      fr: "A servi de prélude au VII Rust Fest à Bolonia (Cádiz), promouvant l'esprit rustie.",
      de: "Diente als Vorspiel zum VII Rust Fest in Bolonia (Cádiz), förderte den rustie Geist."
    },
    descripcion3: {
      es: "Un encuentro íntimo, cargado de pasión por la música del canadiense.",
      en: "An intimate meeting, filled with passion for the music of the Canadian.",
      fr: "Une rencontre intime, remplie de passion pour la musique du Canadien.",
      de: "Ein intimes Treffen, erfüllt von Leidenschaft für die Musik des Kanadiers."
    },
    descripcion4: {
      es: "Evento gratuito y abierto a la comunidad de fans.",
      en: "Free event open to the fan community.",
      fr: "Événement gratuit et ouvert à la communauté des fans.",
      de: "Kostenlose Veranstaltung, die der Fangemeinde offen steht."
    },
    imagen:  "/images/eventos/eventoRustyBarJunio16.jpg",
    imagenes: [],
    mostrarEnLanding: true
  },
  {
    id: "4",
    titulo: {
      es: "Isladencanta 2001: el día que conocimos a los Strokes",
      en: "Isladencanta 2001: the day we met the Strokes",
      fr: "Isladencanta 2001 : le jour où nous avons rencontré les Strokes",
      de: "Isladencanta 2001: der Tag, an dem wir die Strokes trafen"
    },
    fecha: {
      es: "julio de 2001",
      en: "July 2001",
      fr: "juillet 2001",
      de: "Juli 2001"
    },
    ubicacion: {
      es: "Palma de Mallorca",
      en: "Palma de Mallorca",
      fr: "Palma de Majorque",
      de: "Palma de Mallorca"
    },
    descripcion: {
      es: "Primer festival Isladencanta celebrado en Esporles, Mallorca, con un cartel espectacular que incluyó a bandas internacionales y emergentes como The Strokes, quienes ofrecieron su primer concierto en España.",
      en: "First Isladencanta festival held in Esporles, Mallorca, with an amazing lineup including international and emerging bands like The Strokes, who played their first concert in Spain.",
      fr: "Premier festival Isladencanta organisé à Esporles, Majorque, avec une programmation incroyable incluant des groupes internationaux et émergents comme The Strokes, qui ont donné leur premier concert en Espagne.",
      de: "Erstes Isladencanta-Festival in Esporles, Mallorca, mit einem erstaunlichen Line-up internationaler und aufstrebender Bands wie The Strokes, die ihr erstes Konzert in Spanien gaben."
    },
    descripcion1: {
      es: "Tuvimos el privilegio de entrevistar a The Strokes antes de la publicación de su disco debut 'Is This It', en un momento histórico que marcó el inicio de una nueva era para la música indie estatal y local.",
      en: "We had the privilege of interviewing The Strokes before the release of their debut album 'Is This It', at a historic moment that marked the beginning of a new era for state and local indie music.",
      fr: "Nous avons eu le privilège d'interviewer The Strokes avant la sortie de leur premier album 'Is This It', à un moment historique qui a marqué le début d'une nouvelle ère pour la musique indie locale et nationale.",
      de: "Wir hatten das Privileg, The Strokes vor der Veröffentlichung ihres Debütalbums 'Is This It' zu interviewen, in einem historischen Moment, der den Beginn einer neuen Ära für die staatliche und lokale Indie-Musik markierte."
    },
    descripcion2: {
      es: "Nos encargamos del montaje de escenarios, seguridad, transporte y logística integral, garantizando una organización técnica eficiente y un entorno seguro para artistas y asistentes.",
      en: "We took care of stage setup, security, transport, and comprehensive logistics, ensuring efficient technical organization and a safe environment for artists and attendees.",
      fr: "Nous avons pris en charge le montage des scènes, la sécurité, le transport et la logistique complète, garantissant une organisation technique efficace et un environnement sûr pour les artistes et les participants.",
      de: "Wir kümmerten uns um den Bühnenaufbau, die Sicherheit, den Transport und die umfassende Logistik und gewährleisteten so eine effiziente technische Organisation und eine sichere Umgebung für Künstler und Teilnehmer."
    },
    descripcion3: {
      es: "El festival reunió a grandes artistas internacionales y nacionales, como Jon Spencer Blues Explosion, Stereolab, Goldfrapp, La Buena Vida, entre otros, consolidándose como un referente de la escena musical independiente en España.",
      en: "The festival brought together major international and national artists, such as Jon Spencer Blues Explosion, Stereolab, Goldfrapp, La Buena Vida, among others, becoming a benchmark of the independent music scene in Spain.",
      fr: "Le festival a réuni de grands artistes internationaux et nationaux, tels que Jon Spencer Blues Explosion, Stereolab, Goldfrapp, La Buena Vida, parmi d'autres, devenant un référence de la scène musicale indépendante en Espagne.",
      de: "Das Festival vereinte große internationale und nationale Künstler wie Jon Spencer Blues Explosion, Stereolab, Goldfrapp, La Buena Vida und andere und wurde zu einem Maßstab der unabhängigen Musikszene in Spanien."
    },
    descripcion4: {
      es: "Isladencanta 2001 fue una experiencia inolvidable que impulsó la cultura musical en Mallorca, fortaleciendo la comunidad de músicos, promotores y fans, y dejando una huella imborrable en la historia local de la música.",
      en: "Isladencanta 2001 was an unforgettable experience that boosted the music culture in Mallorca, strengthening the community of musicians, promoters, and fans, and leaving an indelible mark on the local music history.",
      fr: "Isladencanta 2001 a été une expérience inoubliable qui a dynamisé la culture musicale à Majorque, renforçant la communauté des musiciens, des promoteurs et des fans, et laissant une empreinte indélébile dans l'histoire musicale locale.",
      de: "Isladencanta 2001 war eine unvergessliche Erfahrung, die die Musikkultur auf Mallorca stärkte, die Gemeinschaft von Musikern, Promotern und Fans festigte und einen bleibenden Eindruck in der lokalen Musikgeschichte hinterließ."
    },
    descripcion5: {
      es: "La ubicación única en la Serra de Tramuntana, combinando naturaleza y música, añadió un carácter especial al evento, creando una atmósfera mágica que todos los asistentes recuerdan con cariño.",
      en: "The unique location in the Serra de Tramuntana, combining nature and music, added a special character to the event, creating a magical atmosphere that all attendees remember fondly.",
      fr: "L'emplacement unique dans la Serra de Tramuntana, alliant nature et musique, a ajouté un caractère spécial à l'événement, créant une atmosphère magique que tous les participants se souviennent avec affection.",
      de: "Der einzigartige Standort in der Serra de Tramuntana, der Natur und Musik kombiniert, verlieh der Veranstaltung einen besonderen Charakter und schuf eine magische Atmosphäre, an die sich alle Teilnehmer gerne erinnern."
    },
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
    titulo: {
      es: "I Freeworld Rockfest",
      en: "I Freeworld Rockfest",
      fr: "I Freeworld Rockfest",
      de: "I Freeworld Rockfest"
    },
    fecha: {
      es: "2 de abril de 2022",
      en: "April 2, 2022",
      fr: "2 avril 2022",
      de: "2. April 2022"
    },
    ubicacion: {
      es: "Madrid",
      en: "Madrid",
      fr: "Madrid",
      de: "Madrid"
    },
    descripcion: {
      es: "Festival de rock celebrado en Madrid y Las Rozas, con dos días de conciertos y una amplia variedad de bandas.",
      en: "Rock festival held in Madrid and Las Rozas, with two days of concerts and a wide variety of bands.",
      fr: "Festival de rock organisé à Madrid et Las Rozas, avec deux jours de concerts et une grande variété de bands.",
      de: "Rockfestival in Madrid und Las Rozas, mit zwei Tagen Konzerten und einer großen Vielfalt an Bands."
    },
    descripcion1: {
      es: "El evento se dividió en dos días y dos escenarios diferentes, ofreciendo acceso a ambos días con una única entrada.",
      en: "The event was divided into two days and two different stages, offering access to both days with a single ticket.",
      fr: "L'événement était divisé en deux jours et deux scènes différentes, offrant un accès aux deux jours avec un seul billet.",
      de: "Die Veranstaltung war in zwei Tage und zwei verschiedene Bühnen unterteilt, die den Zugang zu beiden Tagen mit einem einzigen Ticket ermöglichten."
    },
    descripcion2: {
      es: "El primer día, en la Sala Rompeolas de Madrid, presentó un ambiente íntimo con actuaciones de Lobos Negros, Adhara & Ritman en set semi-acústico, y Nothingman, incluyendo un showcase y firma de discos de Lobos Negros.",
      en: "The first day, at the Rompeolas Hall in Madrid, offered an intimate atmosphere with performances by Lobos Negros, Adhara & Ritman in a semi-acoustic set, and Nothingman, including a showcase and signing session with Lobos Negros.",
      fr: "Le premier jour, à la salle Rompeolas de Madrid, a offert une atmosphère intime avec des performances de Lobos Negros, Adhara & Ritman dans un set semi-acoustique, et Nothingman, y compris un showcase et une séance de dédicaces avec Lobos Negros.",
      de: "Der erste Tag, in der Rompeolas-Halle in Madrid, bot eine intime Atmosphäre mit Auftritten von Lobos Negros, Adhara & Ritman in einem semi-akustischen Set und Nothingman, einschließlich eines Showcases und einer Autogrammstunde mit Lobos Negros."
    },
    descripcion3: {
      es: "El segundo día, en la Sala Aperitoche de Las Rozas, contó con las actuaciones de Neil Dawn & Superowls, Adhara & Ritman, Zuma (homenaje a Neil Young) y Los Deltonos, en una tarde de puro rock'n'roll.",
      en: "The second day, at the Aperitoche Hall in Las Rozas, featured performances by Neil Dawn & Superowls, Adhara & Ritman, Zuma (tribute to Neil Young) and Los Deltonos, in an afternoon of pure rock'n'roll.",
      fr: "Le deuxième jour, à la salle Aperitoche de Las Rozas, a présenté des performances de Neil Dawn & Superowls, Adhara & Ritman, Zuma (hommage à Neil Young) et Los Deltonos, lors d'un après-midi de pur rock'n'roll.",
      de: "Der zweite Tag, in der Aperitoche-Halle in Las Rozas, bot Auftritte von Neil Dawn & Superowls, Adhara & Ritman, Zuma (Tribut an Neil Young) und Los Deltonos, an einem Nachmittag voller purem Rock'n'Roll."
    },
    descripcion4: {
      es: "El evento fue retransmitido en streaming con varias cámaras y en alta calidad, permitiendo a los fans disfrutar del festival desde cualquier lugar.",
      en: "The event was streamed live with multiple cameras and in high quality, allowing fans to enjoy the festival from anywhere.",
      fr: "L'événement a été diffusé en direct avec plusieurs caméras et en haute qualité, permettant aux fans de profiter du festival depuis n'importe où.",
      de: "Die Veranstaltung wurde live mit mehreren Kameras und in hoher Qualität gestreamt, sodass die Fans das Festival von überall aus genießen konnten."
    },
    descripcion5: {
      es: "Los asistentes destacaron la organización, la calidad de la música y el ambiente de compañerismo, con comentarios positivos sobre el evento.",
      en: "Attendees praised the organization, the quality of the music, and the camaraderie, with positive feedback about the event.",
      fr: "Les participants ont loué l'organisation, la qualité de la musique et l'ambiance de camaraderie, avec des retours positifs sur l'événement.",
      de: "Die Teilnehmer lobten die Organisation, die Qualität der Musik und die Kameradschaft, mit positiven Rückmeldungen zur Veranstaltung."
    },
    descripcion6: {
      es: "La entrada al evento fue gratuita, permitiendo que más personas pudieran disfrutar de la música en vivo.",
      en: "Entry to the event was free, allowing more people to enjoy live music.",
      fr: "L'entrée à l'événement était gratuite, permettant à plus de personnes de profiter de la musique live.",
      de: "Der Eintritt zur Veranstaltung war kostenlos, sodass mehr Menschen Live-Musik genießen konnten."
    },
    descripcion7: {
      es: "El festival se llevó a cabo en la Sala Aperitoche, ubicada en el C.C. Copenhague, 10, en Las Rozas, Madrid.",
      en: "The festival took place in the Aperitoche Hall, located at C.C. Copenhague, 10, in Las Rozas, Madrid.",
      fr: "Le festival a eu lieu dans la salle Aperitoche, située au C.C. Copenhague, 10, à Las Rozas, Madrid.",
      de: "Das Festival fand in der Aperitoche-Halle statt, die sich im C.C. Kopenhagen, 10, in Las Rozas, Madrid, befindet."
    },
    imagen: "/images/eventos/eventoFreeWorldRockFest.jpg",
    imagenes: [
      "/images/eventos/eventoFreeWorldRockFest1.jpg",
      "/images/eventos/eventoFreeWorldRockFest2.jpg",
      "/images/eventos/eventoFreeWorldRockFest3.jpg",
      "/images/eventos/eventoFreeWorldRockFest4.jpg"
    ],
    mostrarEnLanding: true
  },
  {
  id: "6",
  titulo: {
    es: "Homenaje solidario a Neil Young por su 80º cumpleaños",
    en: "Solidarity Tribute to <span style=\"color:var(--color-principal)\">Neil Young</span> for His 80th Birthday",
    fr: "Hommage solidaire à <span style=\"color:var(--color-principal)\">Neil Young</span> pour ses 80 ans",
    de: "Solidaritäts‑Tribut an <span style=\"color:var(--color-principal)\">Neil Young</span> zu seinem 80. Geburtstag"
  },
  fecha: {
    es: "7 de noviembre de 2025",
    en: "November 7, 2025",
    fr: "7 novembre 2025",
    de: "7. November 2025"
  },
  ubicacion: {
    es: "Teatro de Lloseta, Mallorca",
    en: "Lloseta Theatre, Mallorca",
    fr: "Théâtre de Lloseta, Majorque",
    de: "Theater von Lloseta, Mallorca"
  },
  descripcion: {
    es: "La Asociación Cultural <span style=\"color:var(--color-principal)\">“Outoftheblueintotheblack”</span>, sin ánimo de lucro y representada por <span style=\"color:var(--color-principal)\">Timefadesawayevents</span>, anuncia con entusiasmo la celebración de un <span style=\"color:var(--color-principal)\">doble evento benéfico</span> en homenaje a <span style=\"color:var(--color-principal)\">Neil Young</span>, con motivo de su 80º aniversario.",
    en: "The non‑profit Cultural Association <span style=\"color:var(--color-principal)\">“Outoftheblueintotheblack”</span>, represented by <span style=\"color:var(--color-principal)\">Timefadesawayevents</span>, enthusiastically announces a <span style=\"color:var(--color-principal)\">double charity event</span> paying tribute to <span style=\"color:var(--color-principal)\">Neil Young</span> on the occasion of his 80th birthday.",
    fr: "L’association culturelle à but non lucratif <span style=\"color:var(--color-principal)\">“Outoftheblueintotheblack”</span>, représentée par <span style=\"color:var(--color-principal)\">Timefadesawayevents</span>, annonce avec enthousiasme un <span style=\"color:var(--color-principal)\">double événement caritatif</span> en hommage à <span style=\"color:var(--color-principal)\">Neil Young</span> à l’occasion de ses 80 ans.",
    de: "Der gemeinnützige Kulturverein <span style=\"color:var(--color-principal)\">„Outoftheblueintotheblack“</span>, repräsentiert von <span style=\"color:var(--color-principal)\">Timefadesawayevents</span>, kündigt mit Begeisterung eine <span style=\"color:var(--color-principal)\">doppelte Wohltätigkeits‑Veranstaltung</span> zum Gedenken an <span style=\"color:var(--color-principal)\">Neil Young</span> anlässlich seines 80. Geburtstags an."
  },
  descripcion1: {
    es: "Fieles a nuestro compromiso, organizamos <span style=\"color:var(--color-principal)\">eventos culturales solidarios</span>, con el objetivo de <span style=\"color:var(--color-principal)\">visibilizar y apoyar a colectivos con disfunción física o psíquica</span>, así como a entidades centradas en la <span style=\"color:var(--color-principal)\">mejora de la calidad de vida</span> y la <span style=\"color:var(--color-principal)\">ayuda social</span>. La defensa de la naturaleza, los animales y el entorno, es también parte esencial de nuestra misión.",
    en: "True to our commitment, we organize <span style=\"color:var(--color-principal)\">solidarity cultural events</span> aimed at <span style=\"color:var(--color-principal)\">raising awareness and supporting groups with physical or mental dysfunction</span>, as well as organizations focused on <span style=\"color:var(--color-principal)\">improving quality of life</span> and <span style=\"color:var(--color-principal)\">social aid</span>. Defending nature, animals and the environment is also an essential part of our mission.",
    fr: "Fidèles à notre engagement, nous organisons des <span style=\"color:var(--color-principal)\">événements culturels solidaires</span> visant à <span style=\"color:var(--color-principal)\">sensibiliser et soutenir des groupes en situation de handicap physique ou mental</span>, ainsi que des structures axées sur <span style=\"color:var(--color-principal)\">l’amélioration de la qualité de vie</span> et <span style=\"color:var(--color-principal)\">l’aide sociale</span>. La défense de la nature, des animaux et de l’environnement fait également partie intégrante de notre mission.",
    de: "Getreu unserem Engagement veranstalten wir <span style=\"color:var(--color-principal)\">kulturelle Solidaritäts‑Events</span>, um <span style=\"color:var(--color-principal)\">Bewusstsein zu schaffen und Gruppen mit körperlicher oder geistiger Beeinträchtigung zu unterstützen</span>, sowie Organisationen, die sich auf <span style=\"color:var(--color-principal)\">Verbesserung der Lebensqualität</span> und <span style=\"color:var(--color-principal)\">soziale Hilfe</span> konzentrieren. Der Schutz der Natur, der Tiere und der Umwelt ist ebenfalls ein wesentlicher Teil unserer Mission."
  },
  descripcion2: {
    es: "<span style=\"color:var(--color-principal)\">Un homenaje a la coherencia y el compromiso</span>",
    en: "<span style=\"color:var(--color-principal)\">A Tribute to Integrity and Commitment</span>",
    fr: "<span style=\"color:var(--color-principal)\">Un hommage à la cohérence et à l’engagement</span>",
    de: "<span style=\"color:var(--color-principal)\">Eine Hommage an Integrität und Engagement</span>"
  },
  descripcion3: {
    es: "Neil Young, figura legendaria y referente musical, representa también una actitud de vida comprometida con las causas sociales, medioambientales y humanas. Lejos del estereotipo del artista distante, Young ha sabido mantener una trayectoria basada en la coherencia, el activismo y la independencia, huyendo de la manipulación y la politización banal. <p>Es por ello que <span style=\"color:var(--color-principal)\">su 80º cumpleaños</span> nos ofrece una oportunidad única para rendirle tributo a través de la música y la solidaridad.</p>",
    en: "Neil Young, a legendary figure and musical icon, also embodies a life dedicated to social, environmental and humanitarian causes. Far from the stereotype of a detached artist, Young has maintained a career rooted in integrity, activism and independence, steering clear of manipulation and trivial politicking.<p>That is why his <span style=\"color:var(--color-principal)\">80th birthday</span> presents a unique opportunity to honor him through music and solidarity.</p>",
    fr: "Neil Young, figure légendaire et icône musicale, incarne également un engagement de vie envers des causes sociales, environnementales et humaines. Loin du stéréotype de l’artiste éloigné, Young a su conserver une trajectoire fondée sur la cohérence, l’activisme et l’indépendance, fuyant la manipulation et la politisation superficielle.<p>C’est pourquoi son <span style=\"color:var(--color-principal)\">80e anniversaire</span> nous offre une occasion unique de lui rendre hommage par la musique et la solidarité.</p>",
    de: "Neil Young, eine legendäre Figur und musikalische Ikone, verkörpert ebenso eine Haltung des Lebens, die sich sozialen, ökologischen und humanitären Anliegen widmet. Weit entfernt vom Klischee des abgehobenen Künstlers hat Young stets eine Laufbahn der Integrität, des Aktivismus und der Unabhängigkeit bewahrt und sich von Manipulation und oberflächlicher Politisierung ferngehalten.<p>Deshalb bietet sein <span style=\"color:var(--color-principal)\">80. Geburtstag</span> eine einzigartige Gelegenheit, ihm durch Musik und Solidarität Tribut zu zollen.</p>"
  },
  descripcion4: {
    es: "<span style=\"color:var(--color-principal); font-weight:bold;\">DOBLE CITA SOLIDARIA</span><br></br><p><span style=\"color:var(--color-principal)\">Teatro de Lloseta (Mallorca)</span><br></br></p><p><span style=\"color:var(--color-principal)\">Fecha: 7 de noviembre de 2025</span></p><p>Volvemos al escenario que ya nos acogió en 2015. Una jornada de aproximadamente cuatro horas con <span style=\"color:var(--color-principal)\">formaciones musicales diversas</span>, de orígenes distintos, todas profundamente implicadas en la causa.</p>",
    en: "<span style=\"color:var(--color-principal); font-weight:bold;\">DOUBLE SOLIDARITY EVENT</span><br></br><p><span style=\"color:var(--color-principal)\">Lloseta Theatre (Mallorca)</span><br></br></p><p><span style=\"color:var(--color-principal)\">Date: November 7, 2025</span></p><p>We return to the stage that hosted us in 2015. A roughly four‑hour program featuring <span style=\"color:var(--color-principal)\">diverse musical ensembles</span> from varied backgrounds, all deeply committed to the cause.</p>",
    fr: "<span style=\"color:var(--color-principal); font-weight:bold;\">DOUBLE RENCONTRE SOLIDAIRE</span><br></br><p><span style=\"color:var(--color-principal)\">Théâtre de Lloseta (Majorque)</span><br></br></p><p><span style=\"color:var(--color-principal)\">Date : 7 novembre 2025</span><p>Nous retrouvons la scène qui nous a accueillis en 2015. Une journée d’environ quatre heures avec des <span style=\"color:var(--color-principal)\">formations musicales diverses</span>, d’origines multiples, toutes profondément investies dans la cause.",
    de: "<span style=\"color:var(--color-principal); font-weight:bold;\">DOPPELTE SOLIDARITÄTS‑VERANSTALTUNG</span><br></br><p><span style=\"color:var(--color-principal)\">Theater von Lloseta (Mallorca)</span><br></br></p><p><span style=\"color:var(--color-principal)\">Datum: 7. November 2025</span></p><p>Wir kehren zurück auf die Bühne, die uns bereits 2015 beherbergte. Ein etwa vierstündiges Programm mit <span style=\"color:var(--color-principal)\">verschiedenen Musikformationen</span> aus unterschiedlichsten Hintergründen, die alle tief mit der Sache verbunden sind.</p>"
  },
  descripcion5: {
    es: "<span style=\"color:var(--color-principal)\">Fecha y recinto: en proceso de confirmación</span> <p>Debido a la gran acogida en redes sociales y la demanda popular, estamos ultimando los detalles para un evento de gran formato en Madrid.</p><p>Contaremos con artistas de primer nivel y un aforo previsto de más de <span style=\"color:var(--color-principal)\">500 personas</span>.</p>",
    en: "<span style=\"color:var(--color-principal)\">Date and venue: pending confirmation</span><p>Due to the overwhelming response on social media and popular demand, we are finalizing details for a large‑scale event in Madrid.</p><p>We will feature top‑level artists and expect an audience of over <span style=\"color:var(--color-principal)\">500 people</span>.</p>",
    fr: "<span style=\"color:var(--color-principal)\">Date et lieu : en cours de confirmation</span><p>En raison de l’accueil enthousiaste sur les réseaux sociaux et de la forte demande, nous finalisons les détails d’un événement de grande envergure à Madrid.</p><p>Nous accueillerons des artistes de premier plan et prévoyons une affluence de plus de <span style=\"color:var(--color-principal)\">500 personnes</span>.</p>",
    de: "<span style=\"color:var(--color-principal)\">Datum und Veranstaltungsort: noch nicht bestätigt</span><p>Aufgrund der großen Resonanz in den sozialen Medien und der hohen Nachfrage finalisieren wir die Details für ein Großformat‑Event in Madrid.</p><p>Wir werden Künstler/innen auf höchstem Niveau präsentieren und rechnen mit mehr als <span style=\"color:var(--color-principal)\">500 Personen</span>.</p>"
  },
  descripcion6: {
    es: "<span style=\"color:var(--color-principal)\">Un evento 100 % benéfico</span><br></br><p><span style=\"color:var(--color-principal)\">La recaudación íntegra</span> de ambos conciertos será destinada a <span style=\"color:var(--color-principal)\">asociaciones y colectivos que trabajan activamente con personas en situación de vulnerabilidad</span>, ya sea física, mental o social. Esta acción busca f<span style=\"color:var(--color-principal)\">ortalecer su labor</span>, darles visibilidad y generar un impacto positivo directo.</p>",
    en: "<span style=\"color:var(--color-principal)\">A 100 % charity event</span><br></br><p><span style=\"color:var(--color-principal)\">All proceeds</span> from both concerts will go to <span style=\"color:var(--color-principal)\">associations and groups working actively with vulnerable people</span>, whether physically, mentally or socially disadvantaged. This initiative seeks to <span style=\"color:var(--color-principal)\">strengthen their work</span>, raise visibility and generate a direct positive impact.</p>",
    fr: "<span style=\"color:var(--color-principal)\">Un événement 100 % caritatif</span><br></br><p><span style=\"color:var(--color-principal)\">L’ensemble des recettes</span> des deux concerts sera destiné à <span style=\"color:var(--color-principal)\">des associations et groupes œuvrant activement auprès de personnes vulnérables</span>, sur les plans physique, mental ou social. Cette action vise à <span style=\"color:var(--color-principal)\">renforcer leur travail</span>, à augmenter leur visibilité et à générer un impact positif direct.</p>",
    de: "<span style=\"color:var(--color-principal)\">Ein zu 100 % gemeinnütziges Event</span><br></br><p><span style=\"color:var(--color-principal)\">Der gesamte Erlös</span> beider Konzerte geht an <span style=\"color:var(--color-principal)\">Vereine und Initiativen, die aktiv mit schutzbedürftigen Menschen arbeiten</span>, sei es körperlich, psychisch oder sozial benachteiligt. Diese Aktion zielt darauf ab, ihre Arbeit zu <span style=\"color:var(--color-principal)\">stärken</span>, ihre Sichtbarkeit zu erhöhen und eine direkte positive Wirkung zu erzeugen.</p>",
  },
  descripcion7: {
    es: "<span style=\"color:var(--color-principal); font-weight:bold;\">Para más información y entrevistas:</span>",
    en: "<span style=\"color:var(--color-principal); font-weight:bold;\">For more information and interviews:</span>",
    fr: "<span style=\"color:var(--color-principal); font-weight:bold;\">Pour plus d’informations et interviews :</span>",
    de: "<span style=\"color:var(--color-principal); font-weight:bold;\">Für weitere Informationen und Interviews:</span>",
  },
  descripcion8: {
    es: "<span style=\"color:var(--color-principal)\">Web oficial:</span> www.timefadesawayevents.com</p><p><span style=\"color:var(--color-principal)\">Correo de contacto:</span> info@timefadesawayevents.com</p><p><span style=\"color:var(--color-principal)\">Facebook:</span> Time Fades Away Events</p><p><span style=\"color:var(--color-principal)\">Instagram:</span> @timefadesawayevents",
    en: "<span style=\"color:var(--color-principal)\">For more information and interviews:</span><p><span style=\"color:var(--color-principal)\">Official website:</span> www.timefadesawayevents.com</p><p><span style=\"color:var(--color-principal)\">Contact email:</span> info@timefadesawayevents.com</p><p><span style=\"color:var(--color-principal)\">Facebook:</span> Time Fades Away Events</p><p><span style=\"color:var(--color-principal)\">Instagram:</span> @timefadesawayevents",
    fr: "<span style=\"color:var(--color-principal)\">Pour plus d’informations et interviews :</span><p><span style=\"color:var(--color-principal)\">Site officiel :</span> www.timefadesawayevents.com</p><p><span style=\"color:var(--color-principal)\">Email de contact :</span> info@timefadesawayevents.com</p><p><span style=\"color:var(--color-principal)\">Facebook :</span> Time Fades Away Events</p><p><span style=\"color:var(--color-principal)\">Instagram :</span> @timefadesawayevents",
    de: "<span style=\"color:var(--color-principal)\">Für weitere Informationen und Interviews:</span><p><span style=\"color:var(--color-principal)\">Offizielle Website:</span> www.timefadesawayevents.com</p><p><span style=\"color:var(--color-principal)\">Kontakt‑E‑Mail:</span> info@timefadesawayevents.com</p><p><span style=\"color:var(--color-principal)\">Facebook:</span> Time Fades Away Events</p><p><span style=\"color:var(--color-principal)\">Instagram:</span> @timefadesawayevents"
  },
  descripcion9: {
    es: "<span style=\"color:var(--color-principal)\">Invitamos a medios, instituciones y ciudadanía</span> a sumarse a esta iniciativa, a difundirla y a participar activamente en un homenaje que une música, conciencia social y esperanza.</p><p><span style=\"color:var(--color-principal)\">Porque la cultura puede, y debe, ser una herramienta de cambio.</span></p>",
    en: "<span style=\"color:var(--color-principal)\">We invite media, institutions and the public</span> to join this initiative, spread the word and actively participate in a tribute that brings together music, social awareness and hope.</p><p><span style=\"color:var(--color-principal)\">Because culture can, and must, be a tool for change.</span></p>",
    fr: "<span style=\"color:var(--color-principal)\">Nous invitons les médias, institutions et le public</span> à rejoindre cette initiative, la diffuser et participer activement à un hommage qui unit musique, conscience sociale et espoir.</p><p><span style=\"color:var(--color-principal)\">Parce que la culture peut, et doit, être un outil de changement.</span></p>",
    de: "<span style=\"color:var(--color-principal)\">Wir laden Medien, Institutionen und die Öffentlichkeit</span> ein, sich dieser Initiative anzuschließen, sie zu verbreiten und aktiv an einem Tribut teilzunehmen, der Musik, soziales Bewusstsein und Hoffnung vereint.</p><p><span style=\"color:var(--color-principal)\">Weil Kultur ein Werkzeug des Wandels sein kann und muss.</span></p>"
  },
  imagen: "/images/eventos/neilYoung.jpg",
  imagenes: [],
  mostrarEnLanding: true
}
];