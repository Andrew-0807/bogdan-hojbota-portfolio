export interface ArtworkData {
  id: string
  title: string
  year: number
  materials: string
  dimensions: string
  category: "Sculptură Monumentală" | "Sculptură de Atelier" | "Busturi & Portrete Comemorative" | "Trofee & Design Metalic" | "Cicluri Conceptual"
  location: string
  narrative: string
  image_url: string
  featured: boolean
}

export interface EventData {
  id: string
  title: string
  year: number
  startDate: string
  endDate?: string
  type: "solo_exhibition" | "group_show" | "public_commission" | "symposium"
  location: string
  description: string
  image_url?: string
}

export interface AwardData {
  id: string
  year: number
  title: string
  institution: string
  description?: string
}

export interface CommissionCategory {
  id: string
  title: string
  description: string
  examples: string[]
  iconName: string
}

export const ARTIST_INFO = {
  name: "Prof. Univ. Dr. Bogdan Severin Hojbotă",
  shortName: "Bogdan Severin Hojbotă",
  title: "Sculptor & Profesor Universitar Dr.",
  role: "Președintele Filialei de Arte Decorative București UAPR",
  birthYear: 1954,
  phone: "+40 722 000 000",
  email: "contact@bogdanhojbota.ro",
  location: "București, România",
  unarteDept: "Departamentul Ceramică – Sticlă – Metal (Specializarea Metal), Facultatea de Arte Decorative și Design, UNArte București",
  uaprRole: "Fost Vicepreședinte UAPR (1994–2002), Președinte Filiala Arte Decorative București UAPR",
  summaryBio:
    "Profesorul universitar doctor Bogdan Severin Hojbotă (n. 1954) este o figură emblematică a sculpturii contemporane românești și un cadru didactic de referință în învățământul superior artistic. Consacrat din anii 1980, cariera sa este definită prin rigoare tehnică în prelucrarea metalului, explorare conceptuală nonfigurativă și devotament față de învățământul artistic.",
  fullPhilosophy:
    "Definit de critica de specialitate drept un „metalist convins”, demersul artistic al lui Bogdan Severin Hojbotă refuză mimetismul facil, plasându-se în zona sculpturii nonfigurative și a unui romantism abstract plin de lirism, susținut de rigoare inginerească. Tehnicile sale implică prelucrarea directă a foii de metal, deformarea plastică la rece, debitarea, sudura, brunarea și șlefuirea, utilizând inoxul, bronzul, aluminiul și oțelul, dar și marmura sau lemnul.",
  quote: "Metalul nu este un bloc opac, ci o structură spațială vie, în care liniile de forță, plinul și golul generează o continuitate muzicală și o aspirație ascensională.",
}

export const ARTWORKS: ArtworkData[] = [
  {
    id: "strajer-al-apelor",
    title: "Străjer al Apelor",
    year: 2022,
    materials: "Metal / Oțel fasonat și sudat",
    dimensions: "Sculptură monumentală de for public",
    category: "Sculptură Monumentală",
    location: "Buzău (Simpozionul Internațional „Memoria Apei”)",
    narrative:
      "Proiectată ca o lucrare monumentală reprezentativă pentru ecologia spațiului urban, sculptura simbolizează misiunea de protecție și veghere asupra celei mai importante resurse ale planetei – apa. Artistul construiește din foi tectonice și muchii metalice o figură tutelară nonfigurativă. Liniile de forță verticale exprimă fermitate și vigilență, în timp ce spațiile goale lasă aerul și mediul înconjurător să treacă prin structura oțelului.",
    image_url: "/images/artworks/strajer-al-apelor.jpg",
    featured: false,
  },
  {
    id: "nelinistea-unui-cerc",
    title: "Neliniștea unui cerc",
    year: 2022,
    materials: "Oțel inoxidabil (inox) deformat la rece, debitat și finisat",
    dimensions: "67 x 68 x 30 cm",
    category: "Sculptură de Atelier",
    location: "Colecție privată / WIN Gallery, București",
    narrative:
      "Neliniștea unui cerc este un exemplu emblematic pentru stăpânirea tehnologică a inoxului. Pornind de la forma geometrică perfectă a cercului, Bogdan Hojbotă introduce tensiune și mișcare prin torsionarea materialului. Suprafața metalului de o strălucire rece captează și reflectă mediul ambiental în volute dinamice, anulând impresia de masă compactă.",
    image_url: "/images/artworks/nelinistea-unui-cerc.png",
    featured: true,
  },
  {
    id: "influorescenta",
    title: "Influorescență",
    year: 2020,
    materials: "Marmură cioplită și șlefuită",
    dimensions: "Sculptură monumentală ambientală",
    category: "Sculptură Monumentală",
    location: "Craiova (Simpozionul Internațional „Drumuri Brâncușiene”)",
    narrative:
      "Deși consacrat ca metalist, Hojbotă abordează cioplirea în marmură pentru a explora inflorescența și evoluția organică a formei. Lucrarea propune o expansiune a volumelor ce par să răsară din piatră, aducând un omagiu limbajului brâncușian al esențializării.",
    image_url: "/images/artworks/influorescenta.jpg",
    featured: true,
  },
  {
    id: "trofeul-pietei-de-brokeraj",
    title: "Trofeul Pieței de Brokeraj",
    year: 2020,
    materials: "Aliaj metalic prelucrat și finisat grafic",
    dimensions: "Design de trofeu simbolic",
    category: "Trofee & Design Metalic",
    location: "Gala Premiilor XPRIMM ale Pieței de Brokeraj",
    narrative:
      "Demonstrează aplicabilitatea esteticii metalului în zona obiectului simbolic de prestigiu. Trofeul sintetizează ideile de performanță, echilibru și ascensiune, având caracteristicile minimalismului său sculptural.",
    image_url: "/images/artworks/trofeul-pietei-de-brokeraj.jpg",
    featured: false,
  },
  {
    id: "bustul-vasile-voiculescu",
    title: "Bustul scriitorului Vasile Voiculescu",
    year: 2018,
    materials: "Bronz turnat, patinat; soclu monumental din piatră",
    dimensions: "Monument comemorativ figurativ",
    category: "Busturi & Portrete Comemorative",
    location: "Parcul „Vasile Voiculescu”, Buzău",
    narrative:
      "O lucrare de sinteză portretistică ce dovedește versatilitatea sculptorului în registrul figurativ clasic. Artistul surprinde fizionomia și profilul spiritual ascetic al marelui poet și prozator Vasile Voiculescu cu o modelare sobră și plină de gravitate.",
    image_url: "/images/artworks/bustul-vasile-voiculescu.jpg",
    featured: true,
  },
  {
    id: "monumentul-romania-100",
    title: "Monumentul simbolic „România 100”",
    year: 2018,
    materials: "Piatră cioplită în combinație cu structură metalică",
    dimensions: "Sculptură monumentală comemorativă",
    category: "Sculptură Monumentală",
    location: "Parcul Municipal Vest, Ploiești",
    narrative:
      "Creată cu prilejul Centenarului Marii Uniri, lucrarea îmbină masivitatea pietrei cu forța liniei metalice. Compoziția este construită pe ideea de continuitate, stăpânire a spațiului și durabilitate istorică.",
    image_url: "/images/artworks/monumentul-romania-100.jpg",
    featured: true,
  },
  {
    id: "ciclul-silueta-cuplu-tors-emily",
    title: "Ciclul Siluetă, Cuplu, Tors, Emily",
    year: 2018,
    materials: "Metal, foi de oțel, bronz, tehnici mixte",
    dimensions: "Dimensiuni de atelier",
    category: "Sculptură de Atelier",
    location: "Colecții publice și particulare (România, Germania, Olanda)",
    narrative:
      "Latura lirică și senină a creației lui Hojbotă. Formele sugerează subtil conturul corpului uman (Siluetă, Tors), îngemănarea a două volume (Cuplu) sau grația juvenilă (Emily).",
    image_url: "/images/artworks/ciclul-silueta-cuplu-tors-emily.jpg",
    featured: false,
  },
  {
    id: "ciclul-dantesca-conflict-vibratie",
    title: "Ciclul Dantescă, Conflict, Vibrație",
    year: 2015,
    materials: "Bronz, oțel inoxidabil, aluminiu",
    dimensions: "Sculpturi nonfigurative de medii și mari dimensiuni",
    category: "Cicluri Conceptual",
    location: "Muzeul de Artă Craiova / Galeriile UAP (Simeza, Orizont)",
    narrative:
      "Serie cu o pronunțată încărcătură dramatică și filozofică. Lucrările din ciclul Dantescă sau Conflict folosesc suduri vizibile, unghiuri ascuțite și patine întunecate pentru a exprima confruntarea interiorizată.",
    image_url: "/images/artworks/ciclul-dantesca-conflict-vibratie.jpg",
    featured: false,
  },
  {
    id: "sculptura-parcul-titan",
    title: "Sculptură Monumentală Metal – Parcul Titan",
    year: 2013,
    materials: "Foi de oțel debitate, deformate la rece și sudate",
    dimensions: "Înălțime cca. 4 metri",
    category: "Sculptură Monumentală",
    location: "Parcul Titan (Parcul Artelor), Sector 3, București",
    narrative:
      "Realizată în cadrul taberei „Sculptura Mileniului 3”, această operă exemplifică forța industrială transpusă în artă pură. Foaia grea de metal este transformată într-o structură spațială suplă, aeriană, ale cărei muchii ascuțite și decupaje creează perspective schimbătoare.",
    image_url: "/images/artworks/sculptura-parcul-titan.jpg",
    featured: true,
  },
  {
    id: "moment-de-zbor",
    title: "Moment de zbor",
    year: 2013,
    materials: "Oțel inoxidabil (inox) polizat și finisat",
    dimensions: "Sculptură de atelier",
    category: "Sculptură de Atelier",
    location: "Premiul Muzeului Național de Artă al Moldovei (Saloanele Moldovei)",
    narrative:
      "Una dintre cele mai rafinate căutări ale artistului pe tema eliberării de gravitație. Utilizând lamele subțiri de inox tăiate cu precizie, Hojbotă esențializează mișcarea ascensională, dizolvând rigoarea materialului dur într-un dinamism muzical.",
    image_url: "/images/artworks/moment-de-zbor.jpg",
    featured: true,
  },
  {
    id: "sculptura-zbor-sangeorz-bai",
    title: "Sculptură Zbor – artFORest",
    year: 2012,
    materials: "Structură din oțel debitat și patinat",
    dimensions: "Sculptură monumentală ambientală",
    category: "Sculptură Monumentală",
    location: "Muzeul de Artă Comparată, Sângeorz-Băi",
    narrative:
      "Amplasată la intrarea spațiului muzeal din Sângeorz-Băi, lucrarea din oțel funcționează ca o poartă sau introducere simbolică în lumea artei vizuale contemporane, deschizând căi de aspirație spirituală.",
    image_url: "/images/artworks/sculptura-zbor-sangeorz-bai.jpg",
    featured: false,
  },
  {
    id: "bustul-paul-bran",
    title: "Bustul Prof. Univ. Dr. Paul Bran",
    year: 2004,
    materials: "Bronz turnat, patinat",
    dimensions: "Bust comemorativ",
    category: "Busturi & Portrete Comemorative",
    location: "Corpul „Paul Bran”, Academia de Studii Economice (ASE), București",
    narrative:
      "Realizat în amintirea unuia dintre cei mai importanți rectori ai școlii economice românești. Bustul impresionează prin rigoare anatomică și expresivitate psiho-individuală, conferind o notă de noblețe instituțională.",
    image_url: "/images/artworks/bustul-paul-bran.jpg",
    featured: false,
  },
]

/*
  The featured six render as one grid on the home page, so a repeated photograph
  reads as a cataloguing error to anyone comparing plates. Two duplicates shipped
  before this check existed. Dev-only: a placeholder asset should not fail a build.
*/
if (process.env.NODE_ENV !== "production") {
  const featured = ARTWORKS.filter((a) => a.featured).map((a) => a.image_url)
  const duplicate = featured.find((url, i) => featured.indexOf(url) !== i)
  if (duplicate) {
    throw new Error(
      `artist-data: două opere "featured" folosesc aceeași imagine (${duplicate}). Fiecare lucrare de pe pagina principală are nevoie de o fotografie proprie.`,
    )
  }
}

export const EVENTS: EventData[] = [
  {
    id: "snac-2025",
    title: "Salonul Național de Artă Contemporană (SNAC 2025)",
    year: 2025,
    startDate: "2025-10-01",
    type: "group_show",
    location: "Muzeul Național al Literaturii Române / Galeria Simeza, București",
    description: "Membru în echipa curatorială a SNAC 2025, gestionând selecția lucrărilor din secțiunea dedicată resurselor și surselor creative.",
  },
  {
    id: "win-gallery-2024",
    title: "Expoziția „Cultul Detaliului”",
    year: 2024,
    startDate: "2024-06-27",
    type: "group_show",
    location: "WIN Gallery, București",
    description: "Expoziție colectivă de artă plastică în care au fost prezentate sculpturi de atelier din inox și bronz.",
  },
  {
    id: "cotroceni-2023",
    title: "Salonul Artelor Decorative (ed. XXI) – Secțiunea New Blood",
    year: 2023,
    startDate: "2023-05-15",
    type: "group_show",
    location: "Muzeul Național Cotroceni, București",
    description: "Coordonator și expozant în cadrul secțiunii New Blood Ceramică și Metal.",
  },
  {
    id: "memoria-apei-2022",
    title: "Simpozionul Internațional „Memoria Apei” (ed. I)",
    year: 2022,
    startDate: "2022-08-10",
    type: "symposium",
    location: "Buzău",
    description: "Realizarea sculpturii monumentale de for public „Străjer al Apelor” din foi de oțel fasonat și sudat.",
  },
  {
    id: "ex-libris-brancusi-2022",
    title: "Expoziția „Ex-Libris Brâncuși”",
    year: 2022,
    startDate: "2022-03-25",
    type: "group_show",
    location: "Muzeul Național „Constantin Brâncuși”, Târgu Jiu",
    description: "Expoziție de carte obiect și sculptură dedicată moștenirii brâncușiene.",
  },
  {
    id: "secvente-craiova-2021",
    title: "Expoziția „Secvențe – Ceramică / Sticlă / Metal”",
    year: 2021,
    startDate: "2021-09-16",
    type: "group_show",
    location: "Muzeul de Artă Craiova",
    description: "Prezentare a creației recente din domeniul artelor metalului alături de alți maeștri ai artelor decorative.",
  },
  {
    id: "drumuri-brancusiene-2020",
    title: "Simpozionul Internațional „Drumuri Brâncușiene” (ed. VIII)",
    year: 2020,
    startDate: "2020-08-09",
    type: "symposium",
    location: "Craiova",
    description: "Cioplirea operei monumentale ambientală din marmură intitulate „Influorescență”.",
  },
  {
    id: "ipostaze-dramatice-2020",
    title: "Expoziția „Ipostaze dramatice”",
    year: 2020,
    startDate: "2020-02-10",
    type: "group_show",
    location: "Teatrul Național „I.L. Caragiale”, București",
    description: "Expoziție colectivă găzduită în Sala Rotondă a Teatrului Național.",
  },
  {
    id: "romania-100-2018",
    title: "Tabăra Națională „România 100”",
    year: 2018,
    startDate: "2018-10-01",
    type: "symposium",
    location: "Parcul Municipal Vest, Ploiești",
    description: "Crearea monumentului simbolic din piatră și metal dedicat Centenarului Marii Uniri.",
  },
  {
    id: "dialogul-luminii-2017",
    title: "Expoziția „Dialogul Luminii” (cu Vasile Soponariu)",
    year: 2017,
    startDate: "2017-04-24",
    type: "solo_exhibition",
    location: "Galeria Orizont, București",
    description: "Expoziție duo concentrată pe efectele luminii reflectate de suprafețele metalice și sticlă.",
  },
  {
    id: "eibab-goa-2016",
    title: "European International Book Art Biennale (EIBAB 4)",
    year: 2016,
    startDate: "2016-11-10",
    type: "group_show",
    location: "Kala Academy Art Gallery, Goa, India",
    description: "Reprezentarea României cu sculpturi-obiect experimentale în cadrul bienalei din India.",
  },
  {
    id: "saloanele-moldovei-2013",
    title: "Saloanele Moldovei",
    year: 2013,
    startDate: "2013-09-01",
    type: "group_show",
    location: "MNAM Chișinău / Muzeul de Artă Bacău",
    description: "Premierea lucrării „Moment de zbor” cu Premiul Muzeului Național de Artă al Moldovei.",
  },
  {
    id: "sculptura-titan-2013",
    title: "Tabăra „Sculptura Mileniului 3”",
    year: 2013,
    startDate: "2013-08-25",
    type: "symposium",
    location: "Parcul Titan, București",
    description: "Execuția sculpturii monumentale de metal de 4 metri înălțime la platforma industrială Republica.",
  },
  {
    id: "artforest-2012",
    title: "Simpozionul de Land Art artFORest",
    year: 2012,
    startDate: "2012-07-15",
    type: "symposium",
    location: "Muzeul de Artă Comparată, Sângeorz-Băi",
    description: "Instalarea sculpturii monumentale din oțel „Zbor” la intrarea muzeului.",
  },
  {
    id: "contraste-2012",
    title: "Expoziția „Contraste” (cu Ion Pantilie)",
    year: 2012,
    startDate: "2012-10-11",
    type: "solo_exhibition",
    location: "Galeria Simeza, București",
    description: "Expoziție duo de sculptură în metal și pictură.",
  },
  {
    id: "nurnberg-1998-2005",
    title: "Serie de 4 Expoziții Personale în Germania",
    year: 2005,
    startDate: "1998-01-01",
    endDate: "2005-12-31",
    type: "solo_exhibition",
    location: "Galeria „Im Altstadthof”, Nürnberg, Germania",
    description: "Ciclu de 4 expoziții personale succesive (1998, 2001, 2003, 2005) dedicat sculpturii în inox și bronz.",
  },
  {
    id: "koln-1998",
    title: "Expoziție Personală de Sculptură în Metal",
    year: 1998,
    startDate: "1998-05-01",
    type: "solo_exhibition",
    location: "Centrul European de Cultură, Köln, Germania",
    description: "Prezentare personală a sculpturilor nonfigurative din metal.",
  },
  {
    id: "nice-1996",
    title: "Salonul Internațional de Artă Contemporană",
    year: 1996,
    startDate: "1996-06-01",
    type: "group_show",
    location: "Nisa, Franța",
    description: "Participare internațională cu sculptură de atelier.",
  },
  {
    id: "metalistii-1984",
    title: "Expoziția „Metaliștii”",
    year: 1984,
    startDate: "1984-04-01",
    type: "group_show",
    location: "Galeria Orizont, București",
    description: "Expoziție istorică de grup a generației anilor 1980 specializată în artele metalului.",
  },
  {
    id: "montreal-1981",
    title: "Romanian Decorative Art Exhibition",
    year: 1981,
    startDate: "1981-09-01",
    type: "group_show",
    location: "Montreal, Canada",
    description: "Prima mare expoziție internațională de grup după absolvirea facultății.",
  },
]

export const AWARDS: AwardData[] = [
  {
    id: "award-2021",
    year: 2021,
    title: "Premiul Ministerului Culturii al Republicii Moldova",
    institution: "Saloanele Moldovei, Bacău / Chișinău",
    description: "Acordat pentru excelență și contribuție deosebită în artele vizuale.",
  },
  {
    id: "award-2018",
    year: 2018,
    title: "Premiul pentru Sculptură",
    institution: "Bienala Internațională „Ion Andreescu”, Buzău",
    description: "Recunoașterea operei sculpturale monumentale și de atelier.",
  },
  {
    id: "award-2016",
    year: 2016,
    title: "Premiul pentru Sculptură al Muzeului Național de Artă al Rep. Moldova",
    institution: "MNAM Chișinău",
    description: "Recunoaștere artistică internațională.",
  },
  {
    id: "award-2014",
    year: 2014,
    title: "Premiul pentru Sculptură",
    institution: "Bienala Internațională „Ion Andreescu”, Buzău",
  },
  {
    id: "award-2013",
    year: 2013,
    title: "Premiul Muzeului Național de Artă al Moldovei",
    institution: "Saloanele Moldovei, Chișinău",
    description: "Distincție obținută pentru lucrarea de atelier „Moment de zbor”.",
  },
  {
    id: "award-2008",
    year: 2008,
    title: "Diplomă de Excelență pentru Întreaga Activitate Artistică",
    institution: "Muzeul de Artă din Craiova",
  },
  {
    id: "award-2001",
    year: 2001,
    title: "Premiul UAPR pentru „Artele Focului”",
    institution: "Uniunea Artiștilor Plastici din România",
    description: "Acordat pentru ciclul de sculptură în metal și organizarea manifestărilor consacrate artelor focului.",
  },
  {
    id: "award-2000",
    year: 2000,
    title: "Premiul „Ion Andreescu”",
    institution: "Bienala de Artă, Buzău",
  },
]

export const COMMISSION_SERVICES: CommissionCategory[] = [
  {
    id: "monumental",
    title: "Sculptură Monumentală & For Public",
    description:
      "Lucrări de mari dimensiuni din oțel inoxidabil, bronz sau structuri mixte pentru spații urbane, parcuri, sedii de companii și piețe publice.",
    examples: ["Monumente urbane", "Instalații de parcuri", "Simpozioane monumentale"],
    iconName: "Building2",
  },
  {
    id: "busturi",
    title: "Busturi & Portrete Comemorative",
    description:
      "Portrete sculpturale figurative și busturi omagiale turnate în bronz, montate pe socluri monumentale din piatră pentru universități, instituții și spații publice.",
    examples: ["Busturi academice", "Monumente comemorative", "Portrete în bronz"],
    iconName: "UserCheck",
  },
  {
    id: "atelier",
    title: "Sculptură de Atelier & Colecții Private",
    description:
      "Piese unicat de mici și medii dimensiuni din inox polizat, bronz patinat sau aluminiu, ideale pentru galerii, colecționari privați și interioare rafinate.",
    examples: ["Sculpturi din inox", "Serii conceptuale (Zbor, Cerc)", "Piese de interior"],
    iconName: "Sparkles",
  },
  {
    id: "trofee",
    title: "Trofee & Design Metalic Comisionat",
    description:
      "Obiecte simbolic-artistice de prestigiu și trofee metalice customizate pentru gale corporative, gale de premii și distinse evenimente instituționale.",
    examples: ["Trofeul Pieței de Brokeraj", "Premii corporative", "Obiecte simbolice"],
    iconName: "Award",
  },
]
