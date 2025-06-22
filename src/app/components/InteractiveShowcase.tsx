// app/components/InteractiveShowcase.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGlobe, FaPython, FaChartBar, FaMicrochip } from 'react-icons/fa';
import Image from 'next/image';

const panelsData = [
   {
    id: 1,
    icon: FaGlobe,
    title: "IoT",
    bgColor: 'from-cyan-500 to-blue-600',
    isMain: true, // Tandai ini sebagai panel utama
    content: [
      'Cloud Integration (Monitoring & Control)', 'Edge Computing', 'Real-time Control & Data Acquisition',
    ],
    mainImage: '/iot_service.jpg',
  },
  {
    id: 2,
    icon: FaMicrochip,
    title: 'Embedded System',
    bgColor: 'from-sky-500 to-teal-500',
    content: ['Custom Embedded Design: PCB & firmware', 'Hardware-Software Integration'],
    mainImage: '/embed_service.jpg',
  },
   {
    id: 3,
    title: 'AI & Machine Learning',
    icon: FaPython,
    bgColor: 'from-blue-500 to-cyan-500',
    content: ['Custom chatbot & NLP', 'Computer Vision', 'Voice & Speech Recognition'],
    mainImage: '/ai_service.jpg',
  },
  {
    id: 4,
    icon: FaChartBar,
    title: 'Data Engineering + Analysis',
    bgColor: 'from-teal-500 to-emerald-500',
    content: ['ETL development', 'Data cleaning and preprocessing'],
    mainImage: '/data_service.jpg',
  },
];

const InteractiveShowcase = () => {
  // Panel tengah (indeks 2) aktif secara default
  const [activePanel, setActivePanel] = useState(2);

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
         Rekkatek adalah perusahaan teknologi yang mengkhususkan diri dalam pengembangan solusi Kecerdasan Buatan (AI) dan Embedded Systems. Kami membantu industri, manufaktur, dan sektor publik dalam merancang sistem cerdas yang efisien, terukur, dan siap digunakan di lapangan.
        </p>
        <h2 className="text-4xl font-bold text-white mb-2">Our Service</h2>
        <br />
      </div>
      <div className="w-full max-w-7xl mx-auto h-[60vh] min-h-[500px] flex gap-2 p-2 bg-gray-800 rounded-2xl">
        {panelsData.map((panel, index) => (
          <motion.div
            key={panel.id}
            layout
            // Tentukan flex-grow berdasarkan panel yang aktif
            style={{ flexGrow: activePanel === index ? (panel.isMain ? 4 : 3) : 1 }}
            className={`relative rounded-xl overflow-hidden bg-gradient-to-br ${panel.bgColor}`}
            onMouseEnter={() => setActivePanel(index)}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <div className="relative w-full h-full p-6 flex flex-col justify-between items-center text-white">
              {/* Konten yang selalu terlihat (Ikon) */}
              <div className="w-full flex justify-center">
                 <panel.icon size={32} className="opacity-70" />
              </div>
              
              {/* Konten yang hanya muncul saat panel aktif */}
              <AnimatePresence>
                {activePanel === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.2, delay: 0.05 }}
                    className="w-full h-full flex flex-col justify-center items-center text-center px-4"
                  >
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4">{panel.title}</h3>
                    <ul className="space-y-2 mb-6 list-disc list-inside">
                      {panel.content.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <div className="relative w-[80%] aspect-video rounded-md overflow-hidden border-2 border-white/20 shadow-2xl mb-7">
                       <Image src={panel.mainImage} layout="fill" objectFit="cover" alt={panel.title} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

               {/* Judul yang selalu terlihat di bawah */}
               <AnimatePresence>
                {activePanel !== index && (
                   <motion.h3 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute bottom-6 left-0 right-0 text-center font-bold text-lg writing-mode-vertical-rl"
                    >
                     {panel.title}
                   </motion.h3>
                )}
               </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default InteractiveShowcase;