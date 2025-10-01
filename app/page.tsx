'use client';

import { AnimatePresence } from 'framer-motion';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import TeamSection from '@/components/TeamSection';
import ProjectGallery from '@/components/ProjectGallery';
import ContactSection from '@/components/ContactSection';
import LogoCarousel from '@/components/LogoCarousel';
import ExitIntentPopup from '@/components/ExitIntentPopup';
import { useExitIntent } from '@/hooks/useExitIntent';
import { config } from '@/lib/config';

export default function Home() {
  const { showExitIntent, closeExitIntent } = useExitIntent({
    enabled: true,
    delay: 500,
    sensitivity: 20
  });
  const servicesData = [
    {
      title: "Maçonnerie",
      subtitle: "Gros œuvre & Rénovation",
      content: "Fondations, murs porteurs, cloisons, dalles béton. On réalise tous vos travaux de maçonnerie avec un savoir-faire traditionnel et des techniques modernes.",
      image: "/macon.png",
      gradientFrom: "#ff7e5f",
      gradientTo: "#feb47b"
    },
    {
      title: "Terrassement",
      subtitle: "Préparation de terrain",
      content: "Excavation, nivellement, drainage. On prépare vos terrains pour vos constructions et aménagements extérieurs avec précision.",
      image: "/terrassement.png",
      gradientFrom: "#667eea",
      gradientTo: "#764ba2"
    },
    {
      title: "Menuiserie",
      subtitle: "Sur mesure & Rénovation",
      content: "Fenêtres, portes, placards, escaliers. On conçoit et installe vos menuiseries intérieures et extérieures selon vos besoins.",
      image: "/menuiserie.png",
      gradientFrom: "#10b981",
      gradientTo: "#059669"
    }
  ];



  const contactInfo = {
    address: "Zones d'intervention :\nCorrèze (19), Dordogne (24), haute-Vienne (87)\nLot (46), Gironde (33), Lot-et-Garonne (47)",
    phone: "06 82 65 45 76",
    email: "contact@belrhali.fr",
    mapEmbedUrl: "https://maps.google.com/maps?q=Nouvelle-Aquitaine,France&t=&z=8&ie=UTF8&iwloc=&output=embed"
  };

  return (
    <div>
      <Hero config={config.hero} />
      <LogoCarousel config={config.partners} speed={30} />
      <AboutSection
        id="expertise"
        smallTitle={config.about.sections[0].smallTitle}
        title={config.about.sections[0].title}
        subtitle={config.about.sections[0].subtitle}
        content={config.about.sections[0].content}
        image={config.about.sections[0].image}
        gradientFrom={config.about.sections[0].gradientFrom}
        gradientTo={config.about.sections[0].gradientTo}
        buttonText={config.about.sections[0].buttonText}
        buttonHref={config.about.sections[0].buttonHref}
        reversed={config.about.sections[0].reversed}
      />
      <ServicesSection id="services" cards={servicesData} />
      <ProjectGallery id="realisations" config={config.gallery} />
      <AboutSection
        smallTitle={config.about.sections[1].smallTitle}
        title={config.about.sections[1].title}
        subtitle={config.about.sections[1].subtitle}
        content={config.about.sections[1].content}
        image={config.about.sections[1].image}
        gradientFrom={config.about.sections[1].gradientFrom}
        gradientTo={config.about.sections[1].gradientTo}
        buttonText={config.about.sections[1].buttonText}
        buttonHref={config.about.sections[1].buttonHref}
        reversed={config.about.sections[1].reversed}
      />
      <TeamSection config={config.team} />
      <ContactSection 
        title="Contactez-nous"
        subtitle="Parlons de votre projet de construction ou rénovation en Nouvelle-Aquitaine"
        contactInfo={contactInfo} 
      />

      {/* Exit Intent Popup */}
      <AnimatePresence>
        {showExitIntent && (
          <ExitIntentPopup onClose={closeExitIntent} />
        )}
      </AnimatePresence>
    </div>
  );
}
