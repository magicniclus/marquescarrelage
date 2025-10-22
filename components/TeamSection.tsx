'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { TeamConfig, TeamMember } from '@/lib/config';

interface TeamSectionProps {
  config?: TeamConfig;
  title?: string;
  subtitle?: string;
  members?: TeamMember[];
}

export default function TeamSection({
  config,
  title = "Mot du Dirigeant",
  subtitle = "Un message personnel de José Marques",
  members = []
}: TeamSectionProps) {
  // Use config values if provided, otherwise fall back to props or defaults
  const teamTitle = config?.title || title;
  const teamSubtitle = config?.subtitle || subtitle;
  const teamMembers = config?.members || members;
  // Limit to maximum 4 members
  const displayedMembers = teamMembers.slice(0, 4);

  return (
    <section className="py-16 md:py-24 bg-white">
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
            {teamTitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {teamSubtitle}
          </p>
        </motion.div>

        {/* Leader Message */}
        {displayedMembers.length > 0 && (
          <div className="max-w-4xl mx-auto">
            {displayedMembers.map((member, index) => (
              <motion.div
                key={index}
                className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Photo */}
                <motion.div
                  className="relative w-64 h-64 flex-shrink-0 rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 to-transparent" />
                </motion.div>

                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  {/* Name */}
                  <motion.h3
                    className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
                    whileHover={{ color: "#ff7e5f" }}
                    transition={{ duration: 0.2 }}
                  >
                    {member.name}
                  </motion.h3>

                  {/* Position */}
                  <p className="text-orange-500 font-semibold text-xl mb-6">
                    {member.position}
                  </p>

                  {/* Personal Message */}
                  {member.message && (
                    <motion.div
                      className="bg-gray-50 p-6 rounded-xl border-l-4 border-orange-500"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <div className="flex items-start mb-4">
                        <div className="text-orange-500 text-4xl font-serif mr-2">"</div>
                        <p className="text-gray-700 leading-relaxed text-lg italic">
                          {member.message}
                        </p>
                        <div className="text-orange-500 text-4xl font-serif ml-2 self-end">"</div>
                      </div>
                      <div className="text-right">
                        <p className="text-orange-600 font-semibold">— {member.name}</p>
                      </div>
                    </motion.div>
                  )}

                  {/* Description (fallback if no message) */}
                  {!member.message && (
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {member.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
