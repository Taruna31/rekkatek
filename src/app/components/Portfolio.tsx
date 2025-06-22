// app/components/Portfolio.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// Data untuk portofolio Anda
// Ganti dengan proyek, deskripsi, dan path gambar Anda sendiri
// Simpan gambar Anda di folder /public/images/
const portfolioData = [
  {
    id: 1,
    title: 'Smart Inclinometer',
    description: 'Mengembangkan Sensor yang dapat mendeteksi kemiringan pada excavator pc-2000',
    placeholderUrl: '/inclino.jpeg',
  },
  {
    id: 2,
    title: 'Chatbot untuk maintanance',
    description: 'Kami mengembangkan chatbot untuk membantu para teknisi dalam melakukan troubbleshoot saat maintanance',
    imageUrl: '/chatbot_port.jpeg',
    placeholderUrl: '/chatbot_port.jpeg',
  },
  {
    id: 3,
    title: 'Sound box',
    description: 'Mendesain pcb, pembuatan software dan aplikasi mobile untuk kontrol',
    placeholderUrl: '/telolet.jpeg',
  },
  //   {
  //   id: 4,
  //   title: 'Website Company Profile Interaktif',
  //   description: 'Mengembangkan website profil perusahaan yang modern dan responsif dengan efek 3D menggunakan Next.js dan Three.js, memberikan kesan pertama yang tak terlupakan bagi pengunjung.',
  //   imageUrl: '/images/portfolio-4.jpg',
  //   placeholderUrl: 'https://placehold.co/1280x720/1a202c/ffffff?text=Company+Profile',
  // },
];

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(portfolioData[0]);

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Portofolio Kami</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Kolom Kiri: Daftar Proyek */}
          <div className="flex flex-col gap-6">
            {portfolioData.map((project) => (
              <div
                key={project.id}
                onMouseOver={() => setActiveProject(project)}
                onClick={() => setActiveProject(project)}
                className={`p-6 rounded-lg cursor-pointer transition-all duration-300 border-l-4 ${
                  activeProject.id === project.id
                    ? 'bg-gray-800 border-cyan-400 scale-105'
                    : 'bg-gray-800/50 border-transparent hover:bg-gray-800'
                }`}
              >
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            ))}
          </div>

          {/* Kolom Kanan: Tampilan Gambar (Sticky) */}
          <div className="lg:sticky lg:top-24">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl shadow-cyan-500/10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    // Gunakan imageUrl Anda jika sudah ada, jika tidak gunakan placeholder
                    src={activeProject.imageUrl || activeProject.placeholderUrl}
                    alt={activeProject.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            <h3 className="text-xl font-bold text-center mt-4 text-white">{activeProject.title}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;