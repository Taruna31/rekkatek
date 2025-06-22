// app/components/Contact.tsx
'use client';

import { useState } from 'react';

// Impor ikon dari react-icons
import { FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';

// Definisikan tautan media sosial dalam sebuah array
const socialLinks = [
  { 
    name: 'LinkedIn', 
    icon: <FaLinkedinIn className="w-6 h-6" />, 
    href: 'https://www.linkedin.com/in/solusi-rekka-teknindo-480983353' 
  },
  { 
    name: 'GitHub', 
    icon: <FaGithub className="w-6 h-6" />, 
    href: 'https://github.com/your-username' 
  },
  { 
    name: 'Instagram', 
    icon: <FaInstagram className="w-6 h-6" />, 
    href: 'https://www.instagram.com/rekkatek' 
  },
  {
    name: 'Whatsapp',
    icon: <FaWhatsapp className='w-6 h-6' />,
    href: 'wa.me/6285183155942'
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Di sini Anda akan menambahkan logika untuk mengirim form
    // (misalnya, menggunakan fetch ke API endpoint)
    alert(`Terima kasih, ${formData.name}! Pesan Anda telah diterima.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row gap-12">
        {/* Info Kontak */}
        <div className="md:w-1/3">
          <h2 className="text-4xl font-bold mb-4 text-white">Hubungi Kami</h2>
          {/* ========== BAGIAN BARU: IKON MEDIA SOSIAL ========== */}
          <div className="flex space-x-4 mb-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="bg-gray-700 text-white p-3 rounded-full hover:bg-cyan-600 transition-colors duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
          {/* ======================================================== */}
          <div className="space-y-4">
            <p className="text-gray-300"><strong>Email:</strong> solusirekkateknindo@gmail.com</p>
            <p className="text-gray-300"><strong>Alamat:</strong> Puri Bojong Lestari II blok II/17, Bogor, Indonesia</p>
          </div>
        </div>

        {/* Form Kontak */}
        <div className="md:w-2/3">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">Nama </label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="bg-gray-800 border border-gray-600 text-white text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5" placeholder="Nama Anda" required />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Email </label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="bg-gray-800 border border-gray-600 text-white text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5" placeholder="username@example.com" required />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">Pesan </label>
              <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className="bg-gray-800 border border-gray-600 text-white text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5" placeholder="Tulis pesan anda disini" required></textarea>
            </div>
            <button type="submit" className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:ring-cyan-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Kirim Pesan</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;