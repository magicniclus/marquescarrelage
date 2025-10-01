import siteConfig from '@/config/site-config.json';

export interface CompanyInfo {
  name: string;
  legalName: string;
  address: string;
  phone: string;
  email: string;
  siret: string;
  ceo: string;
}

export interface HeroConfig {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonHref: string;
  backgroundImage?: string;
  backgroundVideo?: string;
}

export interface AboutSection {
  smallTitle: string;
  title: string;
  subtitle: string;
  content: string;
  image?: string;
  gradientFrom: string;
  gradientTo: string;
  buttonText: string;
  buttonHref: string;
  reversed: boolean;
}

export interface AboutConfig {
  sections: AboutSection[];
}

export interface GalleryImage {
  src: string;
  alt: string;
  title?: string;
}

export interface GalleryConfig {
  title: string;
  subtitle: string;
  initialDisplayCount: number;
  images?: GalleryImage[];
}

export interface ContactConfig {
  title: string;
  subtitle: string;
}

export interface TeamMember {
  name: string;
  position: string;
  description: string;
  photo: string;
}

export interface TeamConfig {
  members: TeamMember[];
}

export interface PartnerLogo {
  src: string;
  alt: string;
  name: string;
}

export interface PartnersConfig {
  logos: PartnerLogo[];
}

export interface ColorsConfig {
  primary: string;
  secondary: string;
  accent: string;
}

export interface SiteConfig {
  company: CompanyInfo;
  hero: HeroConfig;
  about: AboutConfig;
  gallery: GalleryConfig;
  contact: ContactConfig;
  team: TeamConfig;
  partners: PartnersConfig;
  colors: ColorsConfig;
}

// Default configuration fallback
const defaultConfig: SiteConfig = {
  company: {
    name: "Belrhali",
    legalName: "Belrhali",
    address: "Secteurs d'activité : Corrèze, Dordogne, Haute-Vienne, Lot, Gironde, Lot-et-Garonne",
    phone: "06 82 65 45 76",
    email: "contact@belrhali.fr",
    siret: "",
    ceo: "Hicham Belrhali"
  },
  hero: {
    title: "Belrhali - Artisan du bâtiment",
    subtitle: "Spécialiste en maçonnerie, terrassement et menuiserie. Votre partenaire de confiance pour tous vos projets de construction et rénovation en Nouvelle-Aquitaine.",
    buttonText: "Demander un devis",
    buttonHref: "#contact",
    backgroundImage: "/maison-hero.png",
    backgroundVideo: ""
  },
  about: {
    sections: [
      {
        smallTitle: "Notre expertise",
        title: "Maçonnerie et terrassement",
        subtitle: "Des fondations solides pour vos projets",
        content: "Spécialisés dans la maçonnerie traditionnelle et moderne, on réalise tous vos travaux de gros œuvre : fondations, murs porteurs, cloisons, dalles. Notre expertise en terrassement garantit une préparation parfaite de vos terrains pour tout type de construction ou d'aménagement extérieur.",
        image: "/maison-1.png",
        gradientFrom: "#ff7e5f",
        gradientTo: "#feb47b",
        buttonText: "Voir nos réalisations",
        buttonHref: "#realisations",
        reversed: false
      },
      {
        smallTitle: "Nos spécialités",
        title: "Menuiserie, PAC et combles",
        subtitle: "Confort et économies d'énergie",
        content: "Notre double compétence en menuiserie et installation de pompes à chaleur nous permet de vous offrir des solutions complètes pour améliorer votre habitat. On aménage également vos combles pour optimiser votre espace de vie. Certifiés RGE, bénéficiez des aides de l'État pour vos travaux d'économie d'énergie.",
        image: "/maison-2.png",
        gradientFrom: "#667eea",
        gradientTo: "#764ba2",
        buttonText: "En savoir plus sur RGE",
        buttonHref: "#contact",
        reversed: true
      }
    ]
  },
  gallery: {
    title: "Nos Réalisations",
    subtitle: "Découvrez nos derniers chantiers en Nouvelle-Aquitaine",
    initialDisplayCount: 4,
    images: []
  },
  contact: {
    title: "Contactez-nous",
    subtitle: "Parlons de votre projet ensemble"
  },
  team: {
    members: []
  },
  partners: {
    logos: []
  },
  colors: {
    primary: "#ff7e5f",
    secondary: "#667eea",
    accent: "#feb47b"
  }
};

// Export the config directly
export const config = siteConfig;
