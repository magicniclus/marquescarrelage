'use client';

import { AnimatePresence } from 'framer-motion';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import TeamSection from '@/components/TeamSection';
import LogoCarousel from '@/components/LogoCarousel';
import ProjectGallery from '@/components/ProjectGallery';
import ContactSection from '@/components/ContactSection';
import ExitIntentPopup from '@/components/ExitIntentPopup';
import { useExitIntent } from '@/hooks/useExitIntent';

export default function Home() {
  const { showExitIntent, closeExitIntent } = useExitIntent({
    enabled: true,
    delay: 500,
    sensitivity: 20
  });
  const servicesData = [
    {
      title: "Rénovation",
      subtitle: "Intérieure & Extérieure",
      content: "Transformez votre habitat avec nos artisans spécialisés en rénovation complète, de la cuisine à la salle de bain.",
      gradientFrom: "#ff7e5f",
      gradientTo: "#feb47b"
    },
    {
      title: "Construction",
      subtitle: "Neuve & Extension",
      content: "Réalisez vos projets de construction avec notre réseau d'entrepreneurs qualifiés et certifiés.",
      gradientFrom: "#667eea",
      gradientTo: "#764ba2"
    }
  ];

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=800&fit=crop",
      alt: "Rénovation cuisine moderne",
      title: "Cuisine moderne - Paris 16ème"
    },
    {
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop",
      alt: "Salle de bain contemporaine",
      title: "Salle de bain - Neuilly"
    },
    {
      src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=800&fit=crop",
      alt: "Extension maison",
      title: "Extension - Boulogne"
    },
    {
      src: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&h=800&fit=crop",
      alt: "Rénovation salon",
      title: "Salon design - Levallois"
    },
    {
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop",
      alt: "Terrasse aménagée",
      title: "Terrasse - Vincennes"
    },
    {
      src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=800&fit=crop",
      alt: "Combles aménagés",
      title: "Combles - Saint-Cloud"
    }
  ];

  const partnerLogos = [
    {
      src: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop",
      alt: "Partenaire 1",
      name: "Partner 1"
    },
    {
      src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop",
      alt: "Partenaire 2", 
      name: "Partner 2"
    },
    {
      src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=200&h=100&fit=crop",
      alt: "Partenaire 3",
      name: "Partner 3"
    },
    {
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=100&fit=crop",
      alt: "Partenaire 4",
      name: "Partner 4"
    },
    {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&h=100&fit=crop",
      alt: "Partenaire 5",
      name: "Partner 5"
    },
    {
      src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=200&h=100&fit=crop",
      alt: "Partenaire 6",
      name: "Partner 6"
    }
  ];

  const teamMembers = [
    {
      name: "Nicolas Castéra",
      position: "Directeur Général",
      description: "Expert en gestion de projets avec plus de 15 ans d'expérience dans le bâtiment.",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Marie Dubois",
      position: "Responsable Commerciale",
      description: "Spécialisée dans l'accompagnement client et la coordination des équipes d'artisans.",
      photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Pierre Martin",
      position: "Chef de Projet",
      description: "Architecte de formation, il supervise la qualité et le suivi de tous nos chantiers.",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Sophie Laurent",
      position: "Responsable Qualité",
      description: "Garante de l'excellence de nos prestations et de la satisfaction de nos clients.",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const contactInfo = {
    address: "123 Avenue des Champs-Élysées\n75008 Paris, France",
    phone: "01 23 45 67 89",
    email: "contact@trouvermonchantier.fr",
    hours: "Lundi - Vendredi: 9h00 - 18h00\nSamedi: 9h00 - 12h00",
    mapEmbedUrl: "https://maps.google.com/maps?q=123+Avenue+des+Champs-Élysées,75008+Paris,France&t=&z=16&ie=UTF8&iwloc=&output=embed"
  };

  return (
    <div>
      <Hero />
      <ServicesSection cards={servicesData} />
      <AboutSection
        smallTitle="Notre expertise"
        title="Plus de 10 ans d'expérience"
        subtitle="Des professionnels à votre service"
        content="Nous mettons en relation les particuliers avec les meilleurs artisans et entrepreneurs de leur région. Notre réseau de professionnels qualifiés et certifiés vous garantit des travaux de qualité, dans les délais et au meilleur prix. Faites confiance à notre expertise pour tous vos projets de construction et rénovation."
        gradientFrom="#ff7e5f"
        gradientTo="#feb47b"
        buttonText="Demander un devis gratuit"
        buttonHref="#contact"
      />
      <TeamSection members={teamMembers} />
      <LogoCarousel logos={partnerLogos} speed={30} />
      <ProjectGallery images={galleryImages} />
      <AboutSection
        smallTitle="Notre engagement"
        title="Qualité et satisfaction garanties"
        subtitle="Un suivi personnalisé de A à Z"
        content="Chaque projet est unique et mérite une attention particulière. Notre équipe vous accompagne à chaque étape, de la conception à la réalisation. Nous sélectionnons rigoureusement nos partenaires artisans pour vous offrir un service d'excellence et des résultats à la hauteur de vos attentes."
        gradientFrom="#667eea"
        gradientTo="#764ba2"
        buttonText="Découvrir nos garanties"
        buttonHref="#garanties"
        reversed={true}
      />
      <ContactSection contactInfo={contactInfo} />

      {/* Exit Intent Popup */}
      <AnimatePresence>
        {showExitIntent && (
          <ExitIntentPopup onClose={closeExitIntent} />
        )}
      </AnimatePresence>
    </div>
  );
}
