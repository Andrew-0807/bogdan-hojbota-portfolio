export type DictionaryKey =
  | "nav_home"
  | "nav_profile"
  | "nav_portfolio"
  | "nav_timeline"
  | "nav_contact"
  | "nav_privacy"
  | "header_artist_role"
  | "header_contact_btn"
  | "header_close_menu"
  | "header_open_menu"
  | "hero_h1"
  | "hero_sub"
  | "hero_cta_contact"
  | "hero_cta_portfolio"
  | "hero_affiliation_label"
  | "hero_affiliation_val"
  | "hero_direct_contact"
  | "hero_artwork_caption"
  | "quote_sub"
  | "featured_heading"
  | "featured_catalog_link"
  | "details"
  | "commissions_heading"
  | "commissions_sub"
  | "commissions_banner_title"
  | "commissions_banner_sub"
  | "commissions_send_msg"
  | "metric_1_val"
  | "metric_1_label"
  | "metric_2_val"
  | "metric_2_label"
  | "metric_3_val"
  | "metric_3_label"
  | "metric_4_val"
  | "metric_4_label"
  | "profile_title"
  | "profile_sub"
  | "profile_caption"
  | "profile_studies_label"
  | "profile_studies_val"
  | "profile_phd_label"
  | "profile_phd_val"
  | "profile_pedagogy_label"
  | "profile_pedagogy_val"
  | "profile_philosophy_heading"
  | "profile_principles_heading"
  | "profile_p1_title"
  | "profile_p1_body"
  | "profile_p2_title"
  | "profile_p2_body"
  | "profile_p3_title"
  | "profile_p3_body"
  | "profile_recognition_heading"
  | "profile_r1_label"
  | "profile_r2_label"
  | "profile_r3_label"
  | "profile_r4_label"
  | "profile_awards_heading"
  | "gallery_heading"
  | "gallery_sub"
  | "gallery_search_placeholder"
  | "gallery_search_aria"
  | "gallery_count"
  | "gallery_no_results_title"
  | "gallery_no_results_sub"
  | "gallery_show_all"
  | "cat_all"
  | "cat_monumental"
  | "cat_atelier"
  | "cat_busturi"
  | "cat_trofee"
  | "cat_conceptual"
  | "detail_back"
  | "detail_caption"
  | "detail_spec_materials"
  | "detail_spec_dimensions"
  | "detail_spec_category"
  | "detail_spec_year"
  | "detail_spec_location"
  | "detail_concept_heading"
  | "detail_commission_heading"
  | "detail_commission_sub"
  | "detail_send_inquiry"
  | "detail_related_heading"
  | "timeline_heading"
  | "timeline_sub"
  | "timeline_filter_all"
  | "timeline_filter_solo"
  | "timeline_filter_group"
  | "timeline_filter_symposium"
  | "timeline_view_timeline"
  | "timeline_view_list"
  | "timeline_type_solo"
  | "timeline_type_group"
  | "timeline_type_commission"
  | "timeline_type_symposium"
  | "contact_heading"
  | "contact_sub"
  | "contact_direct"
  | "contact_phone_sub"
  | "contact_email_sub"
  | "contact_studio"
  | "contact_response_time"
  | "contact_response_val"
  | "contact_form_heading"
  | "contact_form_sub"
  | "contact_form_status_ready"
  | "contact_form_status_sub"
  | "contact_form_status_sending"
  | "contact_form_status_success"
  | "contact_form_status_success_sub"
  | "contact_form_status_error"
  | "contact_form_status_error_sub"
  | "contact_submitting_btn"
  | "contact_field_name"
  | "contact_field_email"
  | "contact_field_phone"
  | "contact_field_type"
  | "contact_field_message"
  | "contact_placeholder_name"
  | "contact_placeholder_email"
  | "contact_placeholder_phone"
  | "contact_placeholder_message"
  | "contact_submit_btn"
  | "contact_type_monumental"
  | "contact_type_bust"
  | "contact_type_atelier"
  | "contact_type_trophy"
  | "contact_type_general"
  | "privacy_heading"
  | "privacy_sub"
  | "privacy_updated"
  | "privacy_sec1_title"
  | "privacy_sec1_body"
  | "privacy_sec2_title"
  | "privacy_sec2_body"
  | "privacy_sec3_title"
  | "privacy_sec3_body"
  | "privacy_sec4_title"
  | "privacy_sec4_body"
  | "privacy_sec5_title"
  | "privacy_sec5_body"
  | "privacy_sec6_title"
  | "privacy_sec6_body"
  | "footer_bio"
  | "footer_quick_nav"
  | "footer_categories"
  | "footer_direct_contact"
  | "footer_form_link"
  | "footer_rights"
  | "footer_tagline"

export const dictionary: Record<DictionaryKey, { ro: string; en: string }> = {
  nav_home: { ro: "Acasă", en: "Home" },
  nav_profile: { ro: "Profil", en: "Profile" },
  nav_portfolio: { ro: "Portofoliu", en: "Portfolio" },
  nav_timeline: { ro: "Cronologie", en: "Timeline" },
  nav_contact: { ro: "Contact", en: "Contact" },
  nav_privacy: { ro: "Confidențialitate", en: "Privacy Policy" },

  header_artist_role: {
    ro: "Sculptor · Prof. Univ. Dr.",
    en: "Sculptor · Prof. Ph.D.",
  },
  header_contact_btn: { ro: "Contactează", en: "Get in Touch" },
  header_close_menu: { ro: "Închide meniul", en: "Close menu" },
  header_open_menu: { ro: "Deschide meniul", en: "Open menu" },

  hero_h1: {
    ro: "Modelând metalul în semnificație",
    en: "Forming Metal into Meaning",
  },
  hero_sub: {
    ro: "Portofoliul oficial al sculptorului Prof. Univ. Dr. Bogdan Severin Hojbotă. Patru decenii de creație monumentală nonfigurativă în oțel inoxidabil, bronz turnat, piatră și monumente de for public.",
    en: "Official portfolio of metal sculptor Prof. Univ. Dr. Bogdan Severin Hojbotă. Four decades of monumental nonfigurative sculpture in stainless steel, cast bronze, stone, and public art.",
  },
  hero_cta_contact: { ro: "Contactează atelierul", en: "Contact Studio" },
  hero_cta_portfolio: { ro: "Explorează portofoliul", en: "Explore Portfolio" },
  hero_affiliation_label: { ro: "Afiliere", en: "Affiliation" },
  hero_affiliation_val: {
    ro: "UAPR Arte Decorative · Prof. univ. dr., UNArte București",
    en: "UAPR Decorative Arts Branch · Professor Ph.D., UNArte Bucharest",
  },
  hero_direct_contact: { ro: "Contact direct", en: "Direct Contact" },
  hero_artwork_caption: {
    ro: "2022 · oțel fasonat și sudat · Buzău",
    en: "2022 · formed and welded steel · Buzău",
  },

  quote_sub: {
    ro: "Profesor universitar doctor, sculptor metalist",
    en: "University Professor Ph.D., Metal Sculptor",
  },

  featured_heading: {
    ro: "Opere sculpturale de referință",
    en: "Key Sculptural Works",
  },
  featured_catalog_link: {
    ro: "Catalogul complet",
    en: "Complete Catalog",
  },
  details: { ro: "Detalii", en: "Details" },

  commissions_heading: { ro: "Comisii sculpturale", en: "Sculptural Commissions" },
  commissions_sub: {
    ro: "Prof. dr. Bogdan Severin Hojbotă preia comisii private, monumente de for public, busturi memoriale și trofee corporative.",
    en: "Prof. Ph.D. Bogdan Severin Hojbotă accepts private commissions, public monuments, commemorative busts, and corporate trophies.",
  },
  commissions_banner_title: {
    ro: "Discutăm direct despre proiect?",
    en: "Discuss Your Project Directly?",
  },
  commissions_banner_sub: {
    ro: "Scrieți-ne pentru a stabili detaliile tehnice ale lucrării.",
    en: "Write to us to outline the technical requirements of your project.",
  },
  commissions_send_msg: { ro: "Trimite un mesaj", en: "Send Message" },

  metric_1_val: { ro: "45+", en: "45+" },
  metric_1_label: {
    ro: "Ani de activitate artistică",
    en: "Years of artistic practice",
  },
  metric_2_val: { ro: "100+", en: "100+" },
  metric_2_label: {
    ro: "Expoziții naționale și internaționale",
    en: "National & international exhibitions",
  },
  metric_3_val: { ro: "20+", en: "20+" },
  metric_3_label: {
    ro: "Simpozioane de sculptură monumentală",
    en: "Monumental sculpture symposia",
  },
  metric_4_val: { ro: "8+", en: "8+" },
  metric_4_label: {
    ro: "Premii și distincții majore",
    en: "Major awards & honors",
  },

  profile_title: { ro: "Profil și biografie", en: "Profile & Biography" },
  profile_sub: {
    ro: "Sculptor metalist · Profesor universitar dr. · Președinte UAPR Arte Decorative",
    en: "Metal Sculptor · Professor Ph.D. · President UAPR Decorative Arts",
  },
  profile_caption: { ro: "Fotografie de atelier", en: "Studio photograph" },
  profile_studies_label: { ro: "Studii", en: "Education" },
  profile_studies_val: {
    ro: "Institutul de Arte Plastice „Nicolae Grigorescu”, 1978",
    en: "Nicolae Grigorescu Institute of Fine Arts, Bucharest, 1978",
  },
  profile_phd_label: { ro: "Doctorat", en: "Doctorate" },
  profile_phd_val: {
    ro: "Doctor în arte vizuale, 2006",
    en: "Ph.D. in Visual Arts, 2006",
  },
  profile_pedagogy_label: { ro: "Pedagogie", en: "Academic Practice" },
  profile_pedagogy_val: {
    ro: "UNArte București, specializarea Metal",
    en: "UNArte Bucharest, Metal Specialization",
  },
  profile_philosophy_heading: {
    ro: "Metalul ca mijloc expresiv nonfigurativ",
    en: "Metal as a Nonfigurative Medium",
  },
  profile_principles_heading: { ro: "Principii artistice", en: "Artistic Principles" },
  profile_p1_title: { ro: "Poli-muzicalitate", en: "Poly-musicality" },
  profile_p1_body: {
    ro: "Limbajul vizual se construiește pe contrapunctul dintre plin și gol, generând o continuitate spațială apropiată de polifonie.",
    en: "The visual language relies on counterpoint between mass and void, generating spatial continuity akin to polyphonic music.",
  },
  profile_p2_title: { ro: "Fluiditate metalică", en: "Metallic Fluidity" },
  profile_p2_body: {
    ro: "Deși lucrează cu materiale grele — oțel, inox, bronz — autorul le imprimă lejeritate și aspirație spre verticalitate.",
    en: "Working with dense industrial alloys—steel, stainless steel, bronze—the artist imparts lightness and upward motion.",
  },
  profile_p3_title: { ro: "Jocul luminii", en: "Interplay of Light" },
  profile_p3_body: {
    ro: "Suprafețele polizate și patinate reflectă și fracționează mediul ambiant, transformând sculptura într-un obiect dinamic.",
    en: "Polished and patinated surfaces capture and refract surrounding light, rendering each volume optically dynamic.",
  },
  profile_recognition_heading: {
    ro: "Realizări instituționale",
    en: "Institutional Record",
  },
  profile_r1_label: {
    ro: "Expoziții naționale și internaționale",
    en: "National and international exhibitions",
  },
  profile_r2_label: {
    ro: "Ani de carieră academică la UNArte",
    en: "Years of academic teaching at UNArte",
  },
  profile_r3_label: {
    ro: "Simpozioane de sculptură monumentală",
    en: "Monumental sculpture symposia",
  },
  profile_r4_label: {
    ro: "Președinte de filială, fost vicepreședinte UAPR",
    en: "UAPR Branch President, former Vice President",
  },
  profile_awards_heading: { ro: "Premii și distincții", en: "Awards & Honors" },

  gallery_heading: { ro: "Portofoliu sculptural", en: "Sculptural Portfolio" },
  gallery_sub: {
    ro: "Întreaga creație a sculptorului Bogdan Severin Hojbotă: monumente urbane de for public, busturi memoriale turnate în bronz, sculpturi de atelier din inox și trofee metalice.",
    en: "The full catalog of works by sculptor Bogdan Severin Hojbotă: public urban monuments, cast bronze memorial busts, stainless steel studio sculptures, and metal trophies.",
  },
  gallery_search_placeholder: {
    ro: "Caută după titlu, material…",
    en: "Search by title, material…",
  },
  gallery_search_aria: { ro: "Caută în portofoliu", en: "Search portfolio" },
  gallery_count: {
    ro: "{filtered} din {total} lucrări",
    en: "{filtered} of {total} works",
  },
  gallery_no_results_title: {
    ro: "Nicio lucrare pe acest criteriu",
    en: "No works match this criteria",
  },
  gallery_no_results_sub: {
    ro: "Căutarea „{query}” nu are corespondent în catalog. Încercați un material („inox”, „bronz”), un oraș sau un an.",
    en: "Search for “{query}” yielded no catalog entries. Try searching for a material (“stainless steel”, “bronze”), city, or year.",
  },
  gallery_show_all: { ro: "Arată tot catalogul", en: "Show full catalog" },

  cat_all: { ro: "Toate Operele", en: "All Works" },
  cat_monumental: { ro: "Sculptură Monumentală", en: "Monumental Sculpture" },
  cat_atelier: { ro: "Sculptură de Atelier", en: "Studio Sculpture" },
  cat_busturi: { ro: "Busturi & Portrete", en: "Busts & Portraits" },
  cat_trofee: { ro: "Trofee & Design Metalic", en: "Trophies & Metal Design" },
  cat_conceptual: { ro: "Cicluri Conceptuale", en: "Conceptual Cycles" },

  detail_back: { ro: "Portofoliu", en: "Portfolio" },
  detail_caption: { ro: "Fotografie de catalog", en: "Catalog photograph" },
  detail_spec_materials: { ro: "Material și tehnică", en: "Material & Technique" },
  detail_spec_dimensions: { ro: "Dimensiuni", en: "Dimensions" },
  detail_spec_category: { ro: "Tipologie", en: "Category" },
  detail_spec_year: { ro: "Datare", en: "Date" },
  detail_spec_location: { ro: "Amplasament", en: "Location" },
  detail_concept_heading: { ro: "Concept", en: "Concept" },
  detail_commission_heading: {
    ro: "O comisie în același registru?",
    en: "Commission a Similar Work?",
  },
  detail_commission_sub: {
    ro: "Puteți comanda o lucrare unicat realizată în aceeași tehnică, sau o piesă comemorativă pentru spațiul dumneavoastră.",
    en: "You can commission a unique piece executed in the same technique, or a commemorative sculpture tailored for your site.",
  },
  detail_send_inquiry: { ro: "Trimite solicitare", en: "Send Request" },
  detail_related_heading: {
    ro: "Alte lucrări din aceeași tipologie",
    en: "Related Works in Category",
  },

  timeline_heading: { ro: "Cronologie", en: "Exhibition Timeline" },
  timeline_sub: {
    ro: "O cronică a participărilor la saloane internaționale, a expozițiilor personale din Germania, Franța, Canada și India, precum și a simpozioanelor monumentale de for public, 1981–2025.",
    en: "Chronicle of participation in international salons, solo exhibitions across Germany, France, Canada, and India, and monumental public art symposia, 1981–2025.",
  },
  timeline_filter_all: { ro: "Toate", en: "All" },
  timeline_filter_solo: { ro: "Personale", en: "Solo Shows" },
  timeline_filter_group: { ro: "De grup", en: "Group Shows" },
  timeline_filter_symposium: { ro: "Simpozioane", en: "Symposia" },
  timeline_view_timeline: { ro: "Cronologie", en: "Timeline View" },
  timeline_view_list: { ro: "Listă", en: "List View" },
  timeline_type_solo: { ro: "Expoziție personală", en: "Solo Exhibition" },
  timeline_type_group: { ro: "Expoziție de grup", en: "Group Exhibition" },
  timeline_type_commission: { ro: "Comisie publică", en: "Public Commission" },
  timeline_type_symposium: { ro: "Simpozion monumental", en: "Monumental Symposium" },

  contact_heading: { ro: "Contact", en: "Contact" },
  contact_sub: {
    ro: "Pentru o sculptură monumentală, un bust omagial, o piesă de atelier sau un trofeu metalic unicat: scrieți direct prin email sau completați formularul de mai jos.",
    en: "For monumental sculptures, memorial busts, studio works, or custom metal trophies, email directly or complete the form below.",
  },
  contact_direct: { ro: "Legătură directă", en: "Direct Contact" },
  contact_phone_sub: {
    ro: "Pentru consultanță rapidă privind o comisie sau disponibilitatea lucrărilor de atelier.",
    en: "For direct inquiry regarding commissions or studio work availability.",
  },
  contact_email_sub: {
    ro: "Pentru detalii tehnice, schițe sau caiete de sarcini.",
    en: "For technical drawings, project briefs, or detailed specifications.",
  },
  contact_studio: { ro: "Atelier", en: "Studio Location" },
  contact_response_time: { ro: "Timp de răspuns", en: "Response Time" },
  contact_response_val: {
    ro: "Mesajele sunt verificate zilnic; răspunsul vine de regulă în 24–48 de ore.",
    en: "Inquiries are checked daily; responses are typically sent within 24–48 hours.",
  },
  contact_form_heading: { ro: "Solicitare Comisie", en: "Commission Inquiry" },
  contact_form_sub: {
    ro: "Completați formularul de mai jos pentru a trimite o solicitare de comision direct sculptorului Bogdan Severin Hojbotă.",
    en: "Complete the form below to submit a commission inquiry directly to sculptor Bogdan Severin Hojbotă.",
  },
  contact_form_status_ready: { ro: "Mesajul este pregătit.", en: "Email draft ready." },
  contact_form_status_sub: {
    ro: "Aplicația de email s-a deschis cu mesajul precompletat. Dacă nu s-a deschis, scrieți direct la contact@bogdanhojbota.ro.",
    en: "Your email application has opened with the pre-filled inquiry. If not, write directly to contact@bogdanhojbota.ro.",
  },
  contact_form_status_sending: { ro: "Se trimite solicitarea...", en: "Sending inquiry..." },
  contact_form_status_success: { ro: "Solicitarea a fost trimisă cu succes!", en: "Inquiry submitted successfully!" },
  contact_form_status_success_sub: {
    ro: "Vă mulțumim! Mesajul dumneavoastră a fost recepționat. Veți primi un răspuns în cel mai scurt timp.",
    en: "Thank you! Your message has been received. You will receive a response shortly.",
  },
  contact_form_status_error: { ro: "Trimiterea a eșuat.", en: "Submission failed." },
  contact_form_status_error_sub: {
    ro: "A apărut o problemă la trimitere. Vă rugăm să reîncercați sau să scrieți direct la contact@bogdanhojbota.ro.",
    en: "An error occurred while sending. Please try again or email contact@bogdanhojbota.ro directly.",
  },
  contact_field_name: { ro: "Nume *", en: "Name *" },
  contact_field_email: { ro: "Email *", en: "Email *" },
  contact_field_phone: { ro: "Telefon (opțional)", en: "Phone (Optional)" },
  contact_field_type: { ro: "Tipul solicitării *", en: "Inquiry Type *" },
  contact_field_message: {
    ro: "Detaliile proiectului sau întrebarea dumneavoastră *",
    en: "Project details or message *",
  },
  contact_placeholder_name: { ro: "Popescu Ion", en: "Jane Doe" },
  contact_placeholder_email: { ro: "nume@domeniu.ro", en: "name@domain.com" },
  contact_placeholder_phone: { ro: "+40 722 ...", en: "+40 722 ..." },
  contact_placeholder_message: {
    ro: "Descrieți amplasamentul, dimensiunile dorite sau materialul preferat (inox, bronz, piatră)...",
    en: "Describe intended site, target dimensions, or preferred medium (stainless steel, bronze, stone)...",
  },
  contact_submit_btn: { ro: "Trimite solicitarea", en: "Send Inquiry" },
  contact_submitting_btn: { ro: "Se trimite...", en: "Sending..." },
  contact_type_monumental: {
    ro: "Sculptură monumentală și spațiu public",
    en: "Monumental & Public Space Sculpture",
  },
  contact_type_bust: {
    ro: "Bust comemorativ / portret în bronz",
    en: "Commemorative Bust / Bronze Portrait",
  },
  contact_type_atelier: {
    ro: "Sculptură de atelier / colecție privată",
    en: "Studio Sculpture / Private Collection",
  },
  contact_type_trophy: {
    ro: "Trofeu metalic comisionat",
    en: "Commissioned Metal Trophy",
  },
  contact_type_general: {
    ro: "Solicitare generală / invitație la expoziție",
    en: "General Inquiry / Exhibition Invitation",
  },

  privacy_heading: {
    ro: "Politica de confidențialitate",
    en: "Privacy Policy",
  },
  privacy_sub: {
    ro: "Acest site este un portofoliu de sculptură. Nu vinde nimic online, nu creează conturi și nu construiește profiluri de vizitatori.",
    en: "This website serves as a sculpture portfolio. It does not process commercial transactions, maintain accounts, or create user profiles.",
  },
  privacy_updated: {
    ro: "Ultima actualizare: august 2026",
    en: "Last updated: August 2026",
  },
  privacy_sec1_title: { ro: "Operatorul de date", en: "Data Controller" },
  privacy_sec1_body: {
    ro: "Acest site este portofoliul personal al lui Prof. Univ. Dr. Bogdan Severin Hojbotă, București, România. Pentru orice întrebare privind datele dumneavoastră, scrieți la contact@bogdanhojbota.ro.",
    en: "This site is the official artist portfolio of Prof. Univ. Dr. Bogdan Severin Hojbotă, Bucharest, Romania. For any inquiries regarding personal data, please contact contact@bogdanhojbota.ro.",
  },
  privacy_sec2_title: { ro: "Formularul de contact", en: "Contact Form" },
  privacy_sec2_body: {
    ro: "Formularul de pe pagina de contact nu trimite date către un server. Câmpurile completate sunt folosite exclusiv în browserul dumneavoastră pentru a compune un mesaj de email, pe care îl deschideți și îl trimiteți din propria aplicație de email. Nicio informație nu este stocată de acest site.",
    en: "The contact form does not submit data to a server database. Filled fields are processed locally in your browser solely to assemble an email draft in your native mail client. No personal data is stored on this site.",
  },
  privacy_sec3_title: { ro: "Statistici de trafic", en: "Traffic Analytics" },
  privacy_sec3_body: {
    ro: "Folosim Vercel Analytics pentru a măsura numărul de vizite și paginile consultate. Serviciul nu plasează cookie-uri, nu urmărește vizitatorii între site-uri și nu colectează adrese IP într-o formă care să permită identificarea dumneavoastră.",
    en: "We utilize Vercel Analytics to measure page views. The service operates without persistent cookies, cross-site tracking, or identifiable IP collection.",
  },
  privacy_sec4_title: { ro: "Cookie-uri", en: "Cookies" },
  privacy_sec4_body: {
    ro: "Site-ul nu plasează cookie-uri de marketing sau de profilare și nu integrează rețele publicitare.",
    en: "This site uses no tracking or marketing cookies and integrates no advertising networks.",
  },
  privacy_sec5_title: { ro: "Găzduire și sub-împuterniciți", en: "Hosting Infrastructure" },
  privacy_sec5_body: {
    ro: "Site-ul este găzduit de Vercel Inc., care procesează cererile HTTP și jurnalele tehnice necesare livrării paginilor. Fonturile sunt servite de pe acest domeniu, fără cereri către terți.",
    en: "Hosted by Vercel Inc., which handles technical HTTP requests required for static asset delivery. Web fonts are self-hosted without third-party requests.",
  },
  privacy_sec6_title: { ro: "Drepturile dumneavoastră", en: "Your Rights" },
  privacy_sec6_body: {
    ro: "Conform GDPR aveți dreptul de acces, rectificare, ștergere, restricționare și opoziție privind datele personale. Întrucât site-ul nu stochează date, aceste drepturi privesc corespondența purtată prin email. Solicitările se trimit la adresa de contact de mai sus.",
    en: "Under GDPR, you retain rights of access, rectification, erasure, and restriction. As no database storage occurs on this site, these rights pertain to direct email correspondence.",
  },

  footer_bio: {
    ro: "Sculptor & Profesor Universitar Doctor, Președintele Filialei de Arte Decorative București UAPR. Specializat în sculptură monumentală din inox, bronz, piatră și cercetare conceptuală.",
    en: "Sculptor & University Professor Ph.D., President of the Decorative Arts Branch Bucharest UAPR. Specializing in monumental stainless steel, bronze, stone sculpture, and conceptual inquiry.",
  },
  footer_quick_nav: { ro: "Navigare Rapidă", en: "Navigation" },
  footer_categories: { ro: "Categorii Opere", en: "Artwork Categories" },
  footer_direct_contact: { ro: "Contact Direct", en: "Direct Contact" },
  footer_form_link: { ro: "Formular de contact", en: "Contact form" },
  footer_rights: {
    ro: "© {year} Prof. Univ. Dr. Bogdan Severin Hojbotă. Toate drepturile rezervate.",
    en: "© {year} Prof. Univ. Dr. Bogdan Severin Hojbotă. All rights reserved.",
  },
  footer_tagline: {
    ro: "Sculptură și artele metalului · UAPR",
    en: "Sculpture & Metal Arts · UAPR",
  },
}
