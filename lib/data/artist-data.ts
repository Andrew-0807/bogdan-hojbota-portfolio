export type Language = "ro" | "en"

export interface ArtworkData {
  id: string
  title: string
  title_en?: string
  year: number
  materials: string
  materials_en?: string
  dimensions: string
  dimensions_en?: string
  category: "Sculptură Monumentală" | "Sculptură de Atelier" | "Busturi & Portrete Comemorative" | "Trofee & Design Metalic" | "Cicluri Conceptual"
  location: string
  location_en?: string
  narrative: string
  narrative_en?: string
  image_url: string
  featured: boolean
}

export interface EventData {
  id: string
  title: string
  title_en?: string
  year: number
  startDate: string
  endDate?: string
  type: "solo_exhibition" | "group_show" | "public_commission" | "symposium"
  location: string
  location_en?: string
  description: string
  description_en?: string
  image_url?: string
}

export interface AwardData {
  id: string
  year: number
  title: string
  title_en?: string
  institution: string
  institution_en?: string
  description?: string
  description_en?: string
}

export interface CommissionCategory {
  id: string
  title: string
  title_en?: string
  description: string
  description_en?: string
  examples: string[]
  examples_en?: string[]
  iconName: string
}

// Canonical origin. Every absolute URL (metadataBase, sitemap, JSON-LD) derives from this one value.
export const SITE_URL = "https://bogdan-hojbota.vercel.app"

export const ARTIST_INFO = {
  name: "Prof. Univ. Dr. Bogdan Severin Hojbotă",
  shortName: "Bogdan Severin Hojbotă",
  title: "Sculptor & Profesor Universitar Dr.",
  title_en: "Sculptor & University Professor Ph.D.",
  role: "Președintele Filialei de Arte Decorative București UAPR",
  role_en: "President of the Decorative Arts Branch Bucharest UAPR",
  birthYear: 1954,
  phone: "+40 722 000 000",
  email: "contact@bogdanhojbota.ro",
  location: "București, România",
  location_en: "Bucharest, Romania",
  unarteDept: "Departamentul Ceramică – Sticlă – Metal (Specializarea Metal), Facultatea de Arte Decorative și Design, UNArte București",
  unarteDept_en: "Department of Ceramics – Glass – Metal (Metal Specialization), Faculty of Decorative Arts and Design, UNArte Bucharest",
  uaprRole: "Fost Vicepreședinte UAPR (1994–2002), Președinte Filiala Arte Decorative București UAPR",
  uaprRole_en: "Former Vice President UAPR (1994–2002), President of the Decorative Arts Branch Bucharest UAPR",
  summaryBio:
    "Profesorul universitar doctor Bogdan Severin Hojbotă (n. 1954) este o figură emblematică a sculpturii contemporane românești și un cadru didactic de referință în învățământul superior artistic. Consacrat din anii 1980, cariera sa este definită prin rigoare tehnică în prelucrarea metalului, explorare conceptuală nonfigurativă și devotament față de învățământul artistic.",
  summaryBio_en:
    "University Professor Ph.D. Bogdan Severin Hojbotă (b. 1954) is a prominent figure in contemporary Romanian sculpture and a distinguished educator in visual arts higher education. Established since the 1980s, his career is defined by technical rigor in metalworking, nonfigurative conceptual inquiry, and academic dedication.",
  fullPhilosophy:
    "Definit de critica de specialitate drept un „metalist convins”, demersul artistic al lui Bogdan Severin Hojbotă refuză mimetismul facil, plasându-se în zona sculpturii nonfigurative și a unui romantism abstract plin de lirism, susținut de rigoare inginerească. Tehnicile sale implică prelucrarea directă a foii de metal, deformarea plastică la rece, debitarea, sudura, brunarea și șlefuirea, utilizând inoxul, bronzul, aluminiul și oțelul, dar și marmura sau lemnul.",
  fullPhilosophy_en:
    "Described by art critics as a dedicated master of metal, Bogdan Severin Hojbotă's work rejects superficial mimesis in favor of nonfigurative sculpture and abstract lyricism grounded in engineering discipline. His techniques encompass direct sheet metal shaping, cold plastic deformation, flame cutting, welding, patinating, and polishing using stainless steel, bronze, aluminum, steel, marble, and wood.",
  quote: "Metalul nu este un bloc opac, ci o structură spațială vie, în care liniile de forță, plinul și golul generează o continuitate muzicală și o aspirație ascensională.",
  quote_en: "Metal is not an opaque mass, but a living spatial structure where lines of force, mass, and void generate musical continuity and upward motion.",
}

export function getArtistInfo(lang: Language = "ro") {
  if (lang === "en") {
    return {
      ...ARTIST_INFO,
      title: ARTIST_INFO.title_en,
      role: ARTIST_INFO.role_en,
      location: ARTIST_INFO.location_en,
      unarteDept: ARTIST_INFO.unarteDept_en,
      uaprRole: ARTIST_INFO.uaprRole_en,
      summaryBio: ARTIST_INFO.summaryBio_en,
      fullPhilosophy: ARTIST_INFO.fullPhilosophy_en,
      quote: ARTIST_INFO.quote_en,
    }
  }
  return ARTIST_INFO
}

export const ARTWORKS: ArtworkData[] = [
  {
    id: "strajer-al-apelor",
    title: "Străjer al Apelor",
    title_en: "Water Guardian",
    year: 2022,
    materials: "Metal / Oțel fasonat și sudat",
    materials_en: "Metal / Formed and welded steel",
    dimensions: "Sculptură monumentală de for public",
    dimensions_en: "Monumental public sculpture",
    category: "Sculptură Monumentală",
    location: "Buzău (Simpozionul Internațional „Memoria Apei”)",
    location_en: "Buzău (International Symposium “Memory of Water”)",
    narrative:
      "Proiectată ca o lucrare monumentală reprezentativă pentru ecologia spațiului urban, sculptura simbolizează misiunea de protecție și veghere asupra celei mai importante resurse ale planetei – apa. Artistul construiește din foi tectonice și muchii metalice o figură tutelară nonfigurativă. Liniile de forță verticale exprimă fermitate și vigilență, în timp ce spațiile goale lasă aerul și mediul înconjurător să treacă prin structura oțelului.",
    narrative_en:
      "Designed as a monumental public sculpture addressing urban ecology, this work symbolizes vigilance over water, Earth's vital resource. Constructed from tectonic steel plates and angular edges, the vertical lines express firmness, while spatial voids allow air and ambient light to pass through the steel structure.",
    image_url: "/images/artworks/strajer-al-apelor.jpg",
    featured: false,
  },
  {
    id: "nelinistea-unui-cerc",
    title: "Neliniștea unui cerc",
    title_en: "Restlessness of a Circle",
    year: 2022,
    materials: "Oțel inoxidabil (inox) deformat la rece, debitat și finisat",
    materials_en: "Cold-formed, cut, and hand-finished stainless steel",
    dimensions: "67 x 68 x 30 cm",
    dimensions_en: "67 x 68 x 30 cm",
    category: "Sculptură de Atelier",
    location: "Colecție privată / WIN Gallery, București",
    location_en: "Private collection / WIN Gallery, Bucharest",
    narrative:
      "Neliniștea unui cerc este un exemplu emblematic pentru stăpânirea tehnologică a inoxului. Pornind de la forma geometrică perfectă a cercului, Bogdan Hojbotă introduce tensiune și mișcare prin torsionarea materialului. Suprafața metalului de o strălucire rece captează și reflectă mediul ambiental în volute dinamice, anulând impresia de masă compactă.",
    narrative_en:
      "Demonstrating command over stainless steel, this studio piece introduces dynamic tension into geometric circularity. By twisting cold-worked steel, the mirror-like metallic surface captures and refracts surrounding light, dismantling the perception of static mass.",
    image_url: "/images/artworks/nelinistea-unui-cerc.png",
    featured: true,
  },
  {
    id: "influorescenta",
    title: "Influorescență",
    title_en: "Influorescence",
    year: 2020,
    materials: "Marmură cioplită și șlefuită",
    materials_en: "Carved and polished marble",
    dimensions: "Sculptură monumentală ambientală",
    dimensions_en: "Environmental monumental sculpture",
    category: "Sculptură Monumentală",
    location: "Craiova (Simpozionul Internațional „Drumuri Brâncușiene”)",
    location_en: "Craiova (International Symposium “Brâncuși Paths”)",
    narrative:
      "Deși consacrat ca metalist, Hojbotă abordează cioplirea în marmură pentru a explora inflorescența și evoluția organică a formei. Lucrarea propune o expansiune a volumelor ce par să răsară din piatră, aducând un omagiu limbajului brâncușian al esențializării.",
    narrative_en:
      "Primarily known for metal sculpture, Hojbotă engages with direct marble carving to explore organic form and growth. The sculpture proposes a gentle expansion of volume emerging from stone, paying homage to the Brancusian tradition of essential form.",
    image_url: "/images/artworks/influorescenta.jpg",
    featured: true,
  },
  {
    id: "trofeul-pietei-de-brokeraj",
    title: "Trofeul Pieței de Brokeraj",
    title_en: "Brokerage Market Trophy",
    year: 2020,
    materials: "Aliaj metalic prelucrat și finisat grafic",
    materials_en: "Machined and graphic-finished metal alloy",
    dimensions: "Design de trofeu simbolic",
    dimensions_en: "Symbolic trophy design",
    category: "Trofee & Design Metalic",
    location: "Gala Premiilor XPRIMM ale Pieței de Brokeraj",
    location_en: "XPRIMM Brokerage Market Awards Gala",
    narrative:
      "Demonstrează aplicabilitatea esteticii metalului în zona obiectului simbolic de prestigiu. Trofeul sintetizează ideile de performanță, echilibru și ascensiune, având caracteristicile minimalismului său sculptural.",
    narrative_en:
      "Translates sculptural minimalism into a prestigious symbolic award. The trophy synthesizes performance, balance, and ascension through clean geometric lines.",
    image_url: "/images/artworks/trofeul-pietei-de-brokeraj.jpg",
    featured: false,
  },
  {
    id: "bustul-vasile-voiculescu",
    title: "Bustul scriitorului Vasile Voiculescu",
    title_en: "Bust of Writer Vasile Voiculescu",
    year: 2018,
    materials: "Bronz turnat, patinat; soclu monumental din piatră",
    materials_en: "Cast patinated bronze; monumental stone pedestal",
    dimensions: "Monument comemorativ figurativ",
    dimensions_en: "Figurative commemorative monument",
    category: "Busturi & Portrete Comemorative",
    location: "Parcul „Vasile Voiculescu”, Buzău",
    location_en: "Vasile Voiculescu Park, Buzău",
    narrative:
      "O lucrare de sinteză portretistică ce dovedește versatilitatea sculptorului în registrul figurativ clasic. Artistul surprinde fizionomia și profilul spiritual ascetic al marelui poet și prozator Vasile Voiculescu cu o modelare sobră și plină de calitate.",
    narrative_en:
      "A portrait study illustrating the sculptor's mastery of classical figurative sculpture. The artist renders the features and spiritual gravity of writer Vasile Voiculescu with austere modeling and restraint.",
    image_url: "/images/artworks/bustul-vasile-voiculescu.jpg",
    featured: true,
  },
  {
    id: "monumentul-romania-100",
    title: "Monumentul simbolic „România 100”",
    title_en: "Symbolic Monument “Romania 100”",
    year: 2018,
    materials: "Piatră cioplită în combinație cu structură metalică",
    materials_en: "Carved stone combined with steel structure",
    dimensions: "Sculptură monumentală comemorativă",
    dimensions_en: "Commemorative monumental sculpture",
    category: "Sculptură Monumentală",
    location: "Parcul Municipal Vest, Ploiești",
    location_en: "West Municipal Park, Ploiești",
    narrative:
      "Creată cu prilejul Centenarului Marii Uniri, lucrarea îmbină masivitatea pietrei cu forța liniei metalice. Compoziția este construită pe ideea de continuitate, stăpânire a spațiului și durabilitate istorică.",
    narrative_en:
      "Created for the Great Union Centenary, this work unites stone mass with steel lines. The composition articulates historical continuity, permanence, and spatial presence.",
    image_url: "/images/artworks/monumentul-romania-100.jpg",
    featured: true,
  },
  {
    id: "ciclul-silueta-cuplu-tors-emily",
    title: "Ciclul Siluetă, Cuplu, Tors, Emily",
    title_en: "Cycle Silhouette, Couple, Torso, Emily",
    year: 2018,
    materials: "Metal, foi de oțel, bronz, tehnici mixte",
    materials_en: "Steel sheet, bronze, mixed metal technique",
    dimensions: "Dimensiuni de atelier",
    dimensions_en: "Studio dimensions",
    category: "Sculptură de Atelier",
    location: "Colecții publice și particulare (România, Germania, Olanda)",
    location_en: "Public and private collections (Romania, Germany, Netherlands)",
    narrative:
      "Latura lirică și senină a creației lui Hojbotă. Formele sugerează subtil conturul corpului uman (Siluetă, Tors), îngemănarea a două volume (Cuplu) sau grația juvenilă (Emily).",
    narrative_en:
      "Represents the lyrical dimension of Hojbotă's studio work. The forms subtly suggest human contours (Silhouette, Torso), paired volumes (Couple), or delicate figurative gestures.",
    image_url: "/images/artworks/ciclul-silueta-cuplu-tors-emily.jpg",
    featured: false,
  },
  {
    id: "ciclul-dantesca-conflict-vibratie",
    title: "Ciclul Dantescă, Conflict, Vibrație",
    title_en: "Cycle Dantesque, Conflict, Vibration",
    year: 2015,
    materials: "Bronz, oțel inoxidabil, aluminiu",
    materials_en: "Bronze, stainless steel, aluminum",
    dimensions: "Sculpturi nonfigurative de medii și mari dimensiuni",
    dimensions_en: "Medium and large nonfigurative sculptures",
    category: "Cicluri Conceptual",
    location: "Muzeul de Artă Craiova / Galeriile UAP (Simeza, Orizont)",
    location_en: "Craiova Art Museum / UAPR Galleries (Simeza, Orizont)",
    narrative:
      "Serie cu o pronunțată încărcătură dramatică și filozofică. Lucrările din ciclul Dantescă sau Conflict folosesc suduri vizibile, unghiuri ascuțite și patine întunecate pentru a exprima confruntarea interiorizată.",
    narrative_en:
      "A series exploring dramatic visual philosophy. Utilizing exposed welds, sharp angles, and dark patinas, these nonfigurative works embody interior tension and spatial resonance.",
    image_url: "/images/artworks/ciclul-dantesca-conflict-vibratie.jpg",
    featured: false,
  },
  {
    id: "sculptura-parcul-titan",
    title: "Sculptură Monumentală Metal – Parcul Titan",
    title_en: "Monumental Metal Sculpture – Titan Park",
    year: 2013,
    materials: "Foi de oțel debitate, deformate la rece și sudate",
    materials_en: "Cold-formed, flame-cut, and welded steel sheets",
    dimensions: "Înălțime cca. 4 metri",
    dimensions_en: "Height approx. 4 meters",
    category: "Sculptură Monumentală",
    location: "Parcul Titan (Parcul Artelor), Sector 3, București",
    location_en: "Titan Park (Arts Park), Sector 3, Bucharest",
    narrative:
      "Realizată în cadrul taberei „Sculptura Mileniului 3”, această operă exemplifică forța industrială transpusă în artă pură. Foaia grea de metal este transformată într-o structură spațială suplă, aeriană, ale cărei muchii ascuțite și decupaje creează perspective schimbătoare.",
    narrative_en:
      "Constructed during the “3rd Millennium Sculpture” symposium at the Republica industrial plant. Heavy steel plates are transformed into an airy spatial structure whose sharp edges and openings offer shifting visual perspectives.",
    image_url: "/images/artworks/sculptura-parcul-titan.jpg",
    featured: true,
  },
  {
    id: "moment-de-zbor",
    title: "Moment de zbor",
    title_en: "Moment of Flight",
    year: 2013,
    materials: "Oțel inoxidabil (inox) polizat și finisat",
    materials_en: "Polished and hand-finished stainless steel",
    dimensions: "Sculptură de atelier",
    dimensions_en: "Studio sculpture",
    category: "Sculptură de Atelier",
    location: "Premiul Muzeului Național de Artă al Moldovei (Saloanele Moldovei)",
    location_en: "National Art Museum of Moldova Award (Moldavia Salons)",
    narrative:
      "Una dintre cele mai rafinate căutări ale artistului pe tema eliberării de gravitație. Utilizând lamele subțiri de inox tăiate cu precizie, Hojbotă esențializează mișcarea ascensională, dizolvând rigoarea materialului dur într-un dinamism muzical.",
    narrative_en:
      "An exploration of gravity and movement in metal. Using precisely cut stainless steel blades, Hojbotă renders upward motion, dissolving the rigidity of hard steel into rhythmic spatial lines.",
    image_url: "/images/artworks/moment-de-zbor.jpg",
    featured: true,
  },
  {
    id: "sculptura-zbor-sangeorz-bai",
    title: "Sculptură Zbor – artFORest",
    title_en: "Flight Sculpture – artFORest",
    year: 2012,
    materials: "Structură din oțel debitat și patinat",
    materials_en: "Flame-cut patinated steel structure",
    dimensions: "Sculptură monumentală ambientală",
    dimensions_en: "Environmental monumental sculpture",
    category: "Sculptură Monumentală",
    location: "Muzeul de Artă Comparată, Sângeorz-Băi",
    location_en: "Museum of Comparative Art, Sângeorz-Băi",
    narrative:
      "Amplasată la intrarea spațiului muzeal din Sângeorz-Băi, lucrarea din oțel funcționează ca o poartă sau introducere simbolică în lumea artei vizuale contemporane, deschizând căi de aspirație spirituală.",
    narrative_en:
      "Installed at the entrance of the Museum of Comparative Art in Sângeorz-Băi, this steel monument serves as a symbolic portal, establishing a dialogue between contemporary metal sculpture and surrounding nature.",
    image_url: "/images/artworks/sculptura-zbor-sangeorz-bai.jpg",
    featured: false,
  },
  // "bustul-paul-bran" (bronz turnat patinat · 2004 · Corpul „Paul Bran”, ASE
  // București) is withheld: the only asset on file for it is a commemorative
  // banner of Paul Bran himself, not a photograph of the bust. Restore the full
  // record from git history once a photograph of the work exists at
  // /images/artworks/bustul-paul-bran.jpg.
]

export function getArtworks(lang: Language = "ro"): ArtworkData[] {
  if (lang === "en") {
    return ARTWORKS.map((art) => ({
      ...art,
      title: art.title_en || art.title,
      materials: art.materials_en || art.materials,
      dimensions: art.dimensions_en || art.dimensions,
      location: art.location_en || art.location,
      narrative: art.narrative_en || art.narrative,
    }))
  }
  return ARTWORKS
}

export function getArtwork(id: string, lang: Language = "ro"): ArtworkData | undefined {
  const artworks = getArtworks(lang)
  return artworks.find((a) => a.id === id)
}

export const EVENTS: EventData[] = [
  {
    id: "snac-2025",
    title: "Salonul Național de Artă Contemporană (SNAC 2025)",
    title_en: "National Salon of Contemporary Art (SNAC 2025)",
    year: 2025,
    startDate: "2025-10-01",
    type: "group_show",
    location: "Muzeul Național al Literaturii Române / Galeria Simeza, București",
    location_en: "National Museum of Romanian Literature / Simeza Gallery, Bucharest",
    description: "Membru în echipa curatorială a SNAC 2025, gestionând selecția lucrărilor din secțiunea dedicată resurselor și surselor creative.",
    description_en: "Member of the SNAC 2025 curatorial committee, coordinating artwork selection for the resources and creative sources section.",
  },
  {
    id: "win-gallery-2024",
    title: "Expoziția „Cultul Detaliului”",
    title_en: "Exhibition “The Cult of Detail”",
    year: 2024,
    startDate: "2024-06-27",
    type: "group_show",
    location: "WIN Gallery, București",
    location_en: "WIN Gallery, Bucharest",
    description: "Expoziție colectivă de artă plastică în care au fost prezentate sculpturi de atelier din inox și bronz.",
    description_en: "Group exhibition presenting stainless steel and bronze studio sculptures.",
  },
  {
    id: "cotroceni-2023",
    title: "Salonul Artelor Decorative (ed. XXI) – Secțiunea New Blood",
    title_en: "Decorative Arts Salon (21st Ed.) – New Blood Section",
    year: 2023,
    startDate: "2023-05-15",
    type: "group_show",
    location: "Muzeul Național Cotroceni, București",
    location_en: "Cotroceni National Museum, Bucharest",
    description: "Coordonator și expozant în cadrul secțiunii New Blood Ceramică și Metal.",
    description_en: "Coordinator and exhibitor in the Ceramics and Metal New Blood section.",
  },
  {
    id: "memoria-apei-2022",
    title: "Simpozionul Internațional „Memoria Apei” (ed. I)",
    title_en: "International Symposium “Memory of Water” (1st Ed.)",
    year: 2022,
    startDate: "2022-08-10",
    type: "symposium",
    location: "Buzău",
    location_en: "Buzău, Romania",
    description: "Realizarea sculpturii monumentale de for public „Străjer al Apelor” din foi de oțel fasonat și sudat.",
    description_en: "Creation of the monumental public steel sculpture “Water Guardian” from formed and welded steel plates.",
  },
  {
    id: "ex-libris-brancusi-2022",
    title: "Expoziția „Ex-Libris Brâncuși”",
    title_en: "Exhibition “Ex-Libris Brâncuși”",
    year: 2022,
    startDate: "2022-03-25",
    type: "group_show",
    location: "Muzeul Național „Constantin Brâncuși”, Târgu Jiu",
    location_en: "Constantin Brâncuși National Museum, Târgu Jiu",
    description: "Expoziție de carte obiect și sculptură dedicată moștenirii brâncușiene.",
    description_en: "Book-object and sculpture exhibition honoring Brâncuși's legacy.",
  },
  {
    id: "secvente-craiova-2021",
    title: "Expoziția „Secvențe – Ceramică / Sticlă / Metal”",
    title_en: "Exhibition “Sequences – Ceramics / Glass / Metal”",
    year: 2021,
    startDate: "2021-09-16",
    type: "group_show",
    location: "Muzeul de Artă Craiova",
    location_en: "Craiova Art Museum",
    description: "Prezentare a creației recente din domeniul artelor metalului alături de alți maeștri ai artelor decorative.",
    description_en: "Survey of recent metal artworks presented alongside prominent decorative arts masters.",
  },
  {
    id: "drumuri-brancusiene-2020",
    title: "Simpozionul Internațional „Drumuri Brâncușiene” (ed. VIII)",
    title_en: "International Symposium “Brâncuși Paths” (8th Ed.)",
    year: 2020,
    startDate: "2020-08-09",
    type: "symposium",
    location: "Craiova",
    location_en: "Craiova, Romania",
    description: "Cioplirea operei monumentale ambientală din marmură intitulate „Influorescență”.",
    description_en: "Direct carving of the environmental marble monumental sculpture “Influorescence”.",
  },
  {
    id: "ipostaze-dramatice-2020",
    title: "Expoziția „Ipostaze dramatice”",
    title_en: "Exhibition “Dramatic Stances”",
    year: 2020,
    startDate: "2020-02-10",
    type: "group_show",
    location: "Teatrul Național „I.L. Caragiale”, București",
    location_en: "I.L. Caragiale National Theatre, Bucharest",
    description: "Expoziție colectivă găzduită în Sala Rotondă a Teatrului Național.",
    description_en: "Group exhibition hosted in the Rotunda Hall of the National Theatre.",
  },
  {
    id: "romania-100-2018",
    title: "Tabăra Națională „România 100”",
    title_en: "National Sculpture Camp “Romania 100”",
    year: 2018,
    startDate: "2018-10-01",
    type: "symposium",
    location: "Parcul Municipal Vest, Ploiești",
    location_en: "West Municipal Park, Ploiești",
    description: "Crearea monumentului simbolic din piatră și metal dedicat Centenarului Marii Uniri.",
    description_en: "Creation of the symbolic stone and steel monument dedicated to the Great Union Centenary.",
  },
  {
    id: "dialogul-luminii-2017",
    title: "Expoziția „Dialogul Luminii” (cu Vasile Soponariu)",
    title_en: "Exhibition “Dialogue of Light” (with Vasile Soponariu)",
    year: 2017,
    startDate: "2017-04-24",
    type: "solo_exhibition",
    location: "Galeria Orizont, București",
    location_en: "Orizont Gallery, Bucharest",
    description: "Expoziție duo concentrată pe efectele luminii reflectate de suprafețele metalice și sticlă.",
    description_en: "Duo exhibition exploring light reflections on metal surfaces and glass.",
  },
  {
    id: "eibab-goa-2016",
    title: "European International Book Art Biennale (EIBAB 4)",
    title_en: "European International Book Art Biennale (EIBAB 4)",
    year: 2016,
    startDate: "2016-11-10",
    type: "group_show",
    location: "Kala Academy Art Gallery, Goa, India",
    location_en: "Kala Academy Art Gallery, Goa, India",
    description: "Reprezentarea României cu sculpturi-obiect experimentale în cadrul bienalei din India.",
    description_en: "Representing Romania with experimental sculpture-objects at the international biennale in India.",
  },
  {
    id: "saloanele-moldovei-2013",
    title: "Saloanele Moldovei",
    title_en: "Moldavia Salons",
    year: 2013,
    startDate: "2013-09-01",
    type: "group_show",
    location: "MNAM Chișinău / Muzeul de Artă Bacău",
    location_en: "MNAM Chișinău / Bacău Art Museum",
    description: "Premierea lucrării „Moment de zbor” cu Premiul Muzeului Național de Artă al Moldovei.",
    description_en: "Awarded the National Art Museum of Moldova Prize for the studio sculpture “Moment of Flight”.",
  },
  {
    id: "sculptura-titan-2013",
    title: "Tabăra „Sculptura Mileniului 3”",
    title_en: "Sculpture Camp “3rd Millennium Sculpture”",
    year: 2013,
    startDate: "2013-08-25",
    type: "symposium",
    location: "Parcul Titan, București",
    location_en: "Titan Park, Bucharest",
    description: "Execuția sculpturii monumentale de metal de 4 metri înălțime la platforma industrială Republica.",
    description_en: "Execution of the 4-meter monumental steel sculpture fabricated at the Republica industrial plant.",
  },
  {
    id: "artforest-2012",
    title: "Simpozionul de Land Art artFORest",
    title_en: "Land Art Symposium artFORest",
    year: 2012,
    startDate: "2012-07-15",
    type: "symposium",
    location: "Muzeul de Artă Comparată, Sângeorz-Băi",
    location_en: "Museum of Comparative Art, Sângeorz-Băi",
    description: "Instalarea sculpturii monumentale din oțel „Zbor” la intrarea muzeului.",
    description_en: "Installation of the monumental steel sculpture “Flight” at the museum entrance.",
  },
  {
    id: "contraste-2012",
    title: "Expoziția „Contraste” (cu Ion Pantilie)",
    title_en: "Exhibition “Contrasts” (with Ion Pantilie)",
    year: 2012,
    startDate: "2012-10-11",
    type: "solo_exhibition",
    location: "Galeria Simeza, București",
    location_en: "Simeza Gallery, Bucharest",
    description: "Expoziție duo de sculptură în metal și pictură.",
    description_en: "Duo exhibition of metal sculpture and painting.",
  },
  {
    id: "nurnberg-1998-2005",
    title: "Serie de 4 Expoziții Personale în Germania",
    title_en: "Series of 4 Solo Exhibitions in Germany",
    year: 2005,
    startDate: "1998-01-01",
    endDate: "2005-12-31",
    type: "solo_exhibition",
    location: "Galeria „Im Altstadthof”, Nürnberg, Germania",
    location_en: "“Im Altstadthof” Gallery, Nuremberg, Germany",
    description: "Ciclu de 4 expoziții personale succesive (1998, 2001, 2003, 2005) dedicat sculpturii în inox și bronz.",
    description_en: "Cycle of four consecutive solo exhibitions (1998, 2001, 2003, 2005) presenting stainless steel and bronze sculptures.",
  },
  {
    id: "koln-1998",
    title: "Expoziție Personală de Sculptură în Metal",
    title_en: "Solo Exhibition of Metal Sculpture",
    year: 1998,
    startDate: "1998-05-01",
    type: "solo_exhibition",
    location: "Centrul European de Cultură, Köln, Germania",
    location_en: "European Cultural Center, Cologne, Germany",
    description: "Prezentare personală a sculpturilor nonfigurative din metal.",
    description_en: "Solo exhibition presenting nonfigurative metal sculptures.",
  },
  {
    id: "nice-1996",
    title: "Salonul Internațional de Artă Contemporană",
    title_en: "International Salon of Contemporary Art",
    year: 1996,
    startDate: "1996-06-01",
    type: "group_show",
    location: "Nisa, Franța",
    location_en: "Nice, France",
    description: "Participare internațională cu sculptură de atelier.",
    description_en: "International exhibition featuring studio sculptures.",
  },
  {
    id: "metalistii-1984",
    title: "Expoziția „Metaliștii”",
    title_en: "Exhibition “The Metalworkers”",
    year: 1984,
    startDate: "1984-04-01",
    type: "group_show",
    location: "Galeria Orizont, București",
    location_en: "Orizont Gallery, Bucharest",
    description: "Expoziție istorică de grup a generației anilor 1980 specializată în artele metalului.",
    description_en: "Historic group exhibition of the 1980s generation specializing in metal arts.",
  },
  {
    id: "montreal-1981",
    title: "Romanian Decorative Art Exhibition",
    title_en: "Romanian Decorative Art Exhibition",
    year: 1981,
    startDate: "1981-09-01",
    type: "group_show",
    location: "Montreal, Canada",
    location_en: "Montreal, Canada",
    description: "Prima mare expoziție internațională de grup după absolvirea facultății.",
    description_en: "First major international group exhibition following university graduation.",
  },
]

export function getEvents(lang: Language = "ro"): EventData[] {
  if (lang === "en") {
    return EVENTS.map((ev) => ({
      ...ev,
      title: ev.title_en || ev.title,
      location: ev.location_en || ev.location,
      description: ev.description_en || ev.description,
    }))
  }
  return EVENTS
}

export const AWARDS: AwardData[] = [
  {
    id: "award-2021",
    year: 2021,
    title: "Premiul Ministerului Culturii al Republicii Moldova",
    title_en: "Ministry of Culture Prize of the Republic of Moldova",
    institution: "Saloanele Moldovei, Bacău / Chișinău",
    institution_en: "Moldavia Salons, Bacău / Chișinău",
    description: "Acordat pentru excelență și contribuție deosebită în artele vizuale.",
    description_en: "Awarded for excellence and contribution to visual arts.",
  },
  {
    id: "award-2018",
    year: 2018,
    title: "Premiul pentru Sculptură",
    title_en: "Prize for Sculpture",
    institution: "Bienala Internațională „Ion Andreescu”, Buzău",
    institution_en: "“Ion Andreescu” International Biennale, Buzău",
    description: "Recunoașterea operei sculpturale monumentale și de atelier.",
    description_en: "Recognition of monumental and studio sculptural practice.",
  },
  {
    id: "award-2016",
    year: 2016,
    title: "Premiul pentru Sculptură al Muzeului Național de Artă al Rep. Moldova",
    title_en: "Sculpture Award of the National Art Museum of Rep. Moldova",
    institution: "MNAM Chișinău",
    institution_en: "MNAM Chișinău",
    description: "Recunoaștere artistică internațională.",
    description_en: "International artistic recognition.",
  },
  {
    id: "award-2014",
    year: 2014,
    title: "Premiul pentru Sculptură",
    title_en: "Prize for Sculpture",
    institution: "Bienala Internațională „Ion Andreescu”, Buzău",
    institution_en: "“Ion Andreescu” International Biennale, Buzău",
  },
  {
    id: "award-2013",
    year: 2013,
    title: "Premiul Muzeului Național de Artă al Moldovei",
    title_en: "National Art Museum of Moldova Prize",
    institution: "Saloanele Moldovei, Chișinău",
    institution_en: "Moldavia Salons, Chișinău",
    description: "Distincție obținută pentru lucrarea de atelier „Moment de zbor”.",
    description_en: "Awarded for the studio sculpture “Moment of Flight”.",
  },
  {
    id: "award-2008",
    year: 2008,
    title: "Diplomă de Excelență pentru Întreaga Activitate Artistică",
    title_en: "Diploma of Excellence for Lifetime Artistic Achievement",
    institution: "Muzeul de Artă din Craiova",
    institution_en: "Craiova Art Museum",
  },
  {
    id: "award-2001",
    year: 2001,
    title: "Premiul UAPR pentru „Artele Focului”",
    title_en: "UAPR Award for “Fire Arts”",
    institution: "Uniunea Artiștilor Plastici din România",
    institution_en: "Romanian Fine Artists' Union (UAPR)",
    description: "Acordat pentru ciclul de sculptură în metal și organizarea manifestărilor consacrate artelor focului.",
    description_en: "Awarded for metal sculpture cycles and curating fire arts exhibitions.",
  },
  {
    id: "award-2000",
    year: 2000,
    title: "Premiul „Ion Andreescu”",
    title_en: "“Ion Andreescu” Prize",
    institution: "Bienala de Artă, Buzău",
    institution_en: "Art Biennale, Buzău",
  },
]

export function getAwards(lang: Language = "ro"): AwardData[] {
  if (lang === "en") {
    return AWARDS.map((aw) => ({
      ...aw,
      title: aw.title_en || aw.title,
      institution: aw.institution_en || aw.institution,
      description: aw.description_en || aw.description,
    }))
  }
  return AWARDS
}

export const COMMISSION_SERVICES: CommissionCategory[] = [
  {
    id: "monumental",
    title: "Sculptură Monumentală & For Public",
    title_en: "Monumental & Public Space Sculpture",
    description:
      "Lucrări de mari dimensiuni din oțel inoxidabil, bronz sau structuri mixte pentru spații urbane, parcuri, sedii de companii și piețe publice.",
    description_en:
      "Large-scale sculptures in stainless steel, bronze, or hybrid materials for urban plazas, public parks, corporate headquarters, and civic spaces.",
    examples: ["Monumente urbane", "Instalații de parcuri", "Simpozioane monumentale"],
    examples_en: ["Urban monuments", "Park installations", "Public art symposia"],
    iconName: "Building2",
  },
  {
    id: "busturi",
    title: "Busturi & Portrete Comemorative",
    title_en: "Commemorative Busts & Portraits",
    description:
      "Portrete sculpturale figurative și busturi omagiale turnate în bronz, montate pe socluri monumentale din piatră pentru universități, instituții și spații publice.",
    description_en:
      "Figurative portrait studies and commemorative busts cast in bronze on stone pedestals for academic institutions, public spaces, and civic venues.",
    examples: ["Busturi academice", "Monumente comemorative", "Portrete în bronz"],
    examples_en: ["Academic busts", "Memorial monuments", "Bronze portraits"],
    iconName: "UserCheck",
  },
  {
    id: "atelier",
    title: "Sculptură de Atelier & Colecții Private",
    title_en: "Studio Sculpture & Private Collections",
    description:
      "Piese unicat de mici și medii dimensiuni din inox polizat, bronz patinat sau aluminiu, ideale pentru galerii, colecționari privați și interioare rafinate.",
    description_en:
      "Unique small-to-medium scale sculptures in polished stainless steel, patinated bronze, or aluminum for art galleries, private collectors, and architectural interiors.",
    examples: ["Sculpturi din inox", "Serii conceptuale (Zbor, Cerc)", "Piese de interior"],
    examples_en: ["Stainless steel sculpture", "Conceptual series (Flight, Circle)", "Architectural pieces"],
    iconName: "Sparkles",
  },
  {
    id: "trofee",
    title: "Trofee & Design Metalic Comisionat",
    title_en: "Commissioned Metal Trophies & Design",
    description:
      "Obiecte simbolic-artistice de prestigiu și trofee metalice customizate pentru gale corporative, gale de premii și distinse evenimente instituționale.",
    description_en:
      "Symbolic metallic art objects and custom award sculptures designed for corporate galas, institutional honors, and distinction ceremonies.",
    examples: ["Trofeul Pieței de Brokeraj", "Premii corporative", "Obiecte simbolice"],
    examples_en: ["Brokerage Market Trophy", "Corporate awards", "Symbolic art objects"],
    iconName: "Award",
  },
]

export function getCommissionServices(lang: Language = "ro"): CommissionCategory[] {
  if (lang === "en") {
    return COMMISSION_SERVICES.map((serv) => ({
      ...serv,
      title: serv.title_en || serv.title,
      description: serv.description_en || serv.description,
      examples: serv.examples_en || serv.examples,
    }))
  }
  return COMMISSION_SERVICES
}

if (process.env.NODE_ENV !== "production") {
  const featured = ARTWORKS.filter((a) => a.featured).map((a) => a.image_url)
  const duplicate = featured.find((url, i) => featured.indexOf(url) !== i)
  if (duplicate) {
    throw new Error(
      `artist-data: două opere "featured" folosesc aceeași imagine (${duplicate}). Fiecare lucrare de pe pagina principală are nevoie de o fotografie proprie.`,
    )
  }
}
