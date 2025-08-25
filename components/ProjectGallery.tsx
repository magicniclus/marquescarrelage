'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from '@/components/ui/carousel';
import { useEffect } from 'react';

interface GalleryImage {
  src: string;
  alt: string;
  title?: string;
}

interface ProjectGalleryProps {
  title?: string;
  subtitle?: string;
  images: GalleryImage[];
  initialDisplayCount?: number;
}

export default function ProjectGallery({
  title = "Nos Réalisations",
  subtitle = "Découvrez quelques-uns de nos projets récents",
  images,
  initialDisplayCount = 4
}: ProjectGalleryProps) {
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  const displayedImages = images.slice(0, displayCount);
  const hasMoreImages = displayCount < images.length;

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };

  const [direction, setDirection] = useState(0);

  const nextImage = () => {
    setDirection(1);
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setDirection(-1);
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const showMoreImages = () => {
    setDisplayCount(images.length);
  };

  useEffect(() => {
    if (!carouselApi) return;

    const onSelect = () => {
      setCurrentImageIndex(carouselApi.selectedScrollSnap());
    };

    carouselApi.on("select", onSelect);
    onSelect();

    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi]);

  return (
    <>
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          </motion.div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                {image.title && (
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white font-medium">{image.title}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Show More Button */}
          {hasMoreImages && (
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={showMoreImages}
              >
                Voir plus de réalisations ({images.length - displayCount} restantes)
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox Modal with Carousel */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 z-[110] text-white hover:text-gray-300 transition-colors"
              onClick={closeLightbox}
            >
              <X className="h-8 w-8" />
            </button>

            {/* Carousel Container */}
            <motion.div
              className="relative w-full h-full flex items-center justify-center p-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Carousel 
                className="w-full max-w-4xl"
                setApi={setCarouselApi}
                opts={{
                  align: "center",
                  loop: true,
                  startIndex: currentImageIndex,
                  duration: 15,
                  dragFree: true,
                }}
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {images.map((image, index) => (
                    <CarouselItem key={index} className="pl-2 md:pl-4 flex items-center justify-center">
                      <div className="relative w-full aspect-square max-w-[70vw] max-h-[70vh] transition-transform duration-300 ease-out">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-contain rounded-lg"
                          priority={index === currentImageIndex}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30 hover:text-white" />
                <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30 hover:text-white" />
              </Carousel>
            </motion.div>

            {/* Image Info */}
            {images[currentImageIndex].title && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
                <p className="text-white text-lg font-medium">
                  {images[currentImageIndex].title}
                </p>
                <p className="text-gray-300 text-sm">
                  {currentImageIndex + 1} / {images.length}
                </p>
              </div>
            )}

            {/* Image Counter */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white text-sm">
              {currentImageIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
