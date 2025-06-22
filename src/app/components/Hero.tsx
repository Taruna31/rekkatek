// app/components/Hero.tsx
'use client'; 

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface VantaEffect {
  destroy: () => void;
}

interface VantaOptions {
  el: HTMLElement | null;
  mouseControls: boolean;
  touchControls: boolean;
  gyroControls: boolean;
  minHeight: number;
  minWidth: number;
  scale: number;
  scaleMobile: number;
  color: number;
  backgroundColor: number;
  maxDistance: number;
}
type VantaConstructor = (options: VantaOptions) => VantaEffect;

let NET: VantaConstructor | null = null;

const Hero = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState<VantaEffect | null>(null);

  // Muat Vanta secara dinamis di sisi klien
  useEffect(() => {
    const loadVanta = async () => {
      // Pastikan window ada (hanya di browser)
      if (typeof window !== 'undefined') {
        const vanta = await import('vanta/dist/vanta.net.min'); // Menggunakan efek NET
        NET = vanta.default;

        if (vantaRef.current && !vantaEffect && NET) {
          setVantaEffect(
            NET({
              el: vantaRef.current,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.0,
              minWidth: 200.0,
              scale: 1.0,
              scaleMobile: 1.0,
              color: 0x0087fe, // Warna utama jaring (biru terang)
              backgroundColor: 0x000000, // Latar belakang hitam
              maxDistance: 17.0, // Jarak maksimum antar titik
            })
          );
        }
      }
    };
    loadVanta();

    // Fungsi cleanup untuk menghentikan efek Vanta saat komponen di-unmount
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]); // Jalankan efek ini sekali saat komponen dimuat

  return (
    <section ref={vantaRef} id="hero" className="relative flex items-center justify-center h-screen">
      <div className="relative z-10 text-center p-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold text-white mb-4"
        >
          Empowering Innovation with Intelligent Solutions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
        >
          AI, Embedded, IoT: Your Pathway to Digital Transformation.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;