const DOMAINES_ESU = {
  SAE: {
    code: "SAE", label: "Sciences Agronomiques et Environnement",
    emoji: "🌾",
    filieres: {
      SA: { label: "Sciences Agronomiques", parcours: ["Production végétale","Production animale","Transformation agro-alimentaire"] },
      DR: { label: "Développement Rural", parcours: ["Planification régionale","Organisation et gestion de développement"] },
      GRN: { label: "Gestion des Ressources Naturelles", parcours: [] },
      AGRO: { label: "Agroforesterie", parcours: [] }
    }
  },
  SEG: {
    code: "SEG", label: "Sciences Économiques et de Gestion",
    emoji: "📈",
    filieres: {
      ECON: { label: "Économie", parcours: ["Économie mathématique","Économie monétaire","Économie publique","Économie rurale","Économie du développement","Économie internationale"] },
      GEST: { label: "Gestion", parcours: ["Finance, Banques et Assurances","Comptabilité et Finance","Microfinance","Gestion des Ressources Humaines","Gestion et administration des projets","Entrepreneuriat"] },
      IG: { label: "Informatique de Gestion", parcours: ["Conception des systèmes informatiques","Informatique appliquée à la gestion des entreprises (IAGE)","Informatique et anglais des affaires"] },
      GOS: { label: "Gestion des Organisations de Santé", parcours: ["Management des services de santé","Logistique de santé","Secrétariat médical"] },
      GEOT: { label: "Gestion et Organisation du Travail (GEOT)", parcours: [] },
      MAN: { label: "Management", parcours: ["Management général"] },
      GCA: { label: "Gestion Commerciale et Administrative", parcours: ["Comptabilité et finance","Banque, microfinance et assurance","Marketing","Fiscalité, douanes et accises","Logistique et transport","Entrepreneuriat et gestion des PME","Gestion des ressources humaines","Informatique de gestion","Secrétaire de direction — comptable et commercial","Secrétaire de direction — diplomatique","Secrétaire de direction — médical","Secrétaire de direction — juridique"] },
      GTH: { label: "Gestion Touristique et Hôtelière", parcours: ["Techniques d'accueil, protocole et relations publiques (TAPRP)","Techniques d'administration du tourisme et évènementiels (TATE)","Techniques des services hôteliers (TSH)","Techniques des services de restauration (TSR)","Techniques de conservation de la nature (TCN)"] }
    }
  },
  SJPA: {
    code: "SJPA", label: "Sciences Juridiques, Politiques et Administratives",
    emoji: "⚖️",
    filieres: {
      SAM: { label: "Science Administrative et Management", parcours: [] },
      SPO: { label: "Sciences Politiques", parcours: [] },
      RI: { label: "Relations Internationales", parcours: [] },
      SJ: { label: "Sciences Juridiques", parcours: ["Droit"] }
    }
  },
  ST: {
    code: "ST", label: "Sciences et Technologie",
    emoji: "💻",
    filieres: {
      ARCH: { label: "Architecture", parcours: [] },
      URB: { label: "Urbanisme", parcours: ["Techniques urbaines"] },
      SI: { label: "Sciences Informatiques", parcours: ["Génie Logiciel","Systèmes informatiques","Intelligence artificielle"] },
      STAT: { label: "Statistique", parcours: [] },
      TELE: { label: "Télécommunications", parcours: [] },
      GEO: { label: "Géomatique et Géodésie", parcours: [] },
      CN: { label: "Communication Numérique", parcours: [] },
      BTP: { label: "Bâtiment et Travaux Publics (BTP)", parcours: ["Ponts et chaussées","Hydrauliques et environnement","Construction industrielle du bâtiment"] }
    }
  },
  SPE: {
    code: "SPE", label: "Sciences Psychologiques et de l'Éducation",
    emoji: "🧠",
    filieres: {
      SP: { label: "Sciences Psychologiques", parcours: ["Sciences psychologiques","Orientation scolaire et professionnelle"] },
      SE: { label: "Sciences de l'Éducation", parcours: [] },
      EMP: { label: "Enseignement Maternel et Primaire", parcours: ["Enseignement maternel","Enseignement primaire"] }
    }
  }
};

const BAREME_LMD = [
  { min: 16, max: 20,    mention: "Très Grande Distinction", code: "TGD",   color: "#00e676" },
  { min: 14, max: 15.99, mention: "Grande Distinction",      code: "GD",    color: "#4ab8ff" },
  { min: 12, max: 13.99, mention: "Distinction",             code: "DIS",   color: "#f5c200" },
  { min: 10, max: 11.99, mention: "Satisfaction",            code: "SAT",   color: "#ff9800" },
  { min:  0, max:  9.99, mention: "Échec",                   code: "ECHEC", color: "#ff4444" }
];
