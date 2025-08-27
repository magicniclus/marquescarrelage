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
    name: "Trouver Mon Chantier",
    legalName: "Trouver Mon Chantier SARL",
    address: "123 Rue de la Construction, 75001 Paris",
    phone: "01 23 45 67 89",
    email: "contact@trouvermonchantier.fr",
    siret: "12345678901234",
    ceo: "Jean Dupont"
  },
  hero: {
    title: "Trouvez les meilleurs artisans près de chez vous",
    subtitle: "Nous mettons en relation particuliers et professionnels pour tous vos projets de construction et rénovation",
    buttonText: "Trouver un artisan",
    buttonHref: "#contact"
  },
  about: {
    sections: [
      {
        smallTitle: "Notre expertise",
        title: "Plus de 10 ans d'expérience",
        subtitle: "Des professionnels à votre service",
        content: "Nous mettons en relation les particuliers avec les meilleurs artisans et entrepreneurs de leur région. Notre réseau de professionnels qualifiés et certifiés vous garantit des travaux de qualité, dans les délais et au meilleur prix. Faites confiance à notre expertise pour tous vos projets de construction et rénovation.",
        gradientFrom: "#ff7e5f",
        gradientTo: "#feb47b",
        buttonText: "Demander un devis gratuit",
        buttonHref: "#contact",
        reversed: false
      },
      {
        smallTitle: "Notre engagement",
        title: "Qualité et satisfaction garanties",
        subtitle: "Un suivi personnalisé de A à Z",
        content: "Chaque projet est unique et mérite une attention particulière. Notre équipe vous accompagne à chaque étape, de la conception à la réalisation. Nous sélectionnons rigoureusement nos partenaires artisans pour vous offrir un service d'excellence et des résultats à la hauteur de vos attentes.",
        gradientFrom: "#667eea",
        gradientTo: "#764ba2",
        buttonText: "Découvrir nos garanties",
        buttonHref: "#garanties",
        reversed: true
      }
    ]
  },
  gallery: {
    title: "Nos Réalisations",
    subtitle: "Découvrez quelques-uns de nos projets récents",
    initialDisplayCount: 4,
    images: []
  },
  contact: {
    title: "Contactez-nous",
    subtitle: "Parlons de votre projet"
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

// Merge config with defaults
function mergeWithDefaults(config: any, defaults: any): any {
  const result = { ...defaults };
  
  for (const key in config) {
    if (config[key] && typeof config[key] === 'object' && !Array.isArray(config[key])) {
      result[key] = mergeWithDefaults(config[key], defaults[key] || {});
    } else if (config[key] !== undefined && config[key] !== null) {
      result[key] = config[key];
    }
  }
  
  return result;
}

export const config: SiteConfig = mergeWithDefaults(siteConfig, defaultConfig);
