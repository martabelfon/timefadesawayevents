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
      es: "12 de junio de 2015",
      en: "June 12, 2015",
      fr: "12 juin 2015",
      de: "12. Juni 2015"
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
  }
];