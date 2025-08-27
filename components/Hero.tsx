'use client';

import { motion } from 'framer-motion';
import { Check, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  backgroundImage?: string;
  backgroundVideo?: string;
  title?: string;
  description?: string;
  bulletPoints?: string[];
  googleReviewsWidget?: string;
}

export default function Hero({
  backgroundImage,
  backgroundVideo,
  title = "Trouvez le professionnel idéal pour vos travaux",
  description = "Mettez en relation avec des artisans qualifiés et obtenez des devis gratuits pour tous vos projets de construction et rénovation.",
  bulletPoints = [
    "Artisans certifiés et vérifiés",
    "Devis gratuits sous 24h",
    "Accompagnement personnalisé"
  ],
  googleReviewsWidget
}: HeroProps) {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    motif: '',
    rgpd: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const isFormValid = () => {
    return formData.nom && 
           formData.prenom && 
           formData.email && 
           formData.telephone && 
           formData.motif && 
           formData.rgpd;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid()) {
      console.log('Form submitted:', formData);
      // Handle form submission here
    }
  };

  // Background styles
  const getBackgroundStyle = () => {
    if (backgroundVideo) {
      return {};
    }
    if (backgroundImage) {
      return {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      };
    }
    // Default gradient
    return {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    };
  };

  return (
    <section className="relative min-h-screen md:min-h-[calc(100vh-80px)] md:h-[calc(100vh-81px)] flex items-center overflow-hidden md:py-0 py-40">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={getBackgroundStyle()}
      >
        {backgroundVideo && (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        )}
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <motion.div
            className="text-white space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Title */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {title}
            </motion.h1>

            {/* Description */}
            <motion.p 
              className="text-xl md:text-2xl text-gray-200 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {description}
            </motion.p>

            {/* Bullet Points */}
            <motion.ul 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {bulletPoints.map((point, index) => (
                <motion.li 
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                >
                  <div className="bg-orange-500 rounded-full p-1 flex-shrink-0">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-lg text-gray-100">{point}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Google Reviews Widget */}
            {googleReviewsWidget && (
              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                dangerouslySetInnerHTML={{ __html: googleReviewsWidget }}
              />
            )}
          </motion.div>

          {/* Right Section - Form */}
          <motion.div
            id="contact-form"
            className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.h2 
              className="text-2xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Demandez votre devis gratuit
            </motion.h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Nom & Prénom */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">
                    Nom *
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-1">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    id="prenom"
                    name="prenom"
                    value={formData.prenom}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Téléphone */}
              <div>
                <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-1">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Motif */}
              <div>
                <label htmlFor="motif" className="block text-sm font-medium text-gray-700 mb-1">
                  Motif de la demande *
                </label>
                <textarea
                  id="motif"
                  name="motif"
                  rows={4}
                  value={formData.motif}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                  placeholder="Décrivez votre projet..."
                  required
                />
              </div>

              {/* RGPD */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="rgpd"
                  name="rgpd"
                  checked={formData.rgpd}
                  onChange={handleInputChange}
                  className="mt-1 h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
                  required
                />
                <label htmlFor="rgpd" className="text-sm text-gray-600">
                  J'accepte que mes données personnelles soient utilisées pour me recontacter dans le cadre de ma demande. *
                </label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={!isFormValid()}
                className={`w-full py-3 text-white font-semibold rounded-lg transition-all duration-300 ${
                  isFormValid()
                    ? 'bg-orange-500 hover:bg-orange-600 shadow-lg hover:shadow-xl'
                    : 'bg-gray-300 cursor-not-allowed'
                }`}
              >
                Envoyer ma demande
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.div
          className="flex flex-col items-center text-white cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: 'smooth'
            });
          }}
        >
          <span className="text-sm mb-2 opacity-80">Découvrir</span>
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors duration-300">
            <ChevronDown className="h-6 w-6" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
