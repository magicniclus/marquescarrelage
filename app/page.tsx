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
import { organizationSchema, servicesSchema } from '@/lib/seo-config';

export default function Home() {
  const { showExitIntent, closeExitIntent } = useExitIntent({
    enabled: true,
    delay: 500,
    sensitivity: 20
  });
  const servicesData = [
    {
      title: "Pose de Carrelage",
      subtitle: "Revêtements sols et murs",
      content: "Spécialisé dans la pose de carrelage pour sols et murs, intérieur et extérieur. 30 ans d'expérience pour des finitions parfaites et durables.",
      image: "/1.jpg",
      gradientFrom: "#ff7e5f",
      gradientTo: "#feb47b"
    },
    {
      title: "Travaux de Peinture",
      subtitle: "Finitions intérieures",
      content: "Peinture intérieure et extérieure, préparation des supports, finitions soignées. Expertise acquise de père en fils pour un rendu professionnel.",
      image: "/2.png",
      gradientFrom: "#667eea",
      gradientTo: "#764ba2"
    },
    {
      title: "Pose de Placo",
      subtitle: "Cloisons et doublages",
      content: "Installation de cloisons en placo, doublages, faux plafonds. Aménagement d'espaces avec une finition impeccable pour tous vos projets de rénovation.",
      image: "/3.png",
      gradientFrom: "#28a745",
      gradientTo: "#20c997"
    }
  ];



  const contactInfo = {
    address: "88 B RUE DE BAS VERNAZ\n74240 GAILLARD\nRayon d'intervention : 300km",
    phone: "0681648237",
    email: "marques.carrelage25@gmail.com",
    mapEmbedUrl: "https://maps.google.com/maps?q=88+B+RUE+DE+BAS+VERNAZ,74240+GAILLARD,France&t=&z=15&ie=UTF8&iwloc=&output=embed"
  };

  return (
    <div>
      {/* Données structurées JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema),
        }}
      />
      
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
        subtitle="Parlons de votre projet de carrelage, peinture ou placo dans un rayon de 300km"
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
