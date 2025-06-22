// app/components/About.tsx
import { FaEye, FaBullseye, FaFlagCheckered } from 'react-icons/fa';
import FadeInOnScroll from './FadeInOnScroll';

// Data untuk timeline, fokus pada cerita kemajuan
const timelineData = [
  {
    year: '2022',
    title: 'Kelahiran Ide',
    description: 'Tim berawal dari kampus yang ingin membuat proyek pribadi. Terbentuklah CARE PNJ sebagaibagian dari Pusat Unggulan Terpadu jurusan Teknik Mesin yang berfokus pada sektor IoT, AI, renewable energy, dan EV. '
  },
  {
    year: '2025',
    title: 'Rekkatek',
    description: 'Kami melihat peluang di sektor AI dan IoT, yang kemudian kami putuskan untuk membangun perusahaan yang memberikan solusi untuk implementasi AI dan IoT atas permasalahan yang ada di industri.'
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800 text-white">
      <div className="max-w-screen-xl mx-auto px-4">
        <FadeInOnScroll>
          <h2 className="text-4xl font-bold text-center mb-12">Tentang Kami</h2>
        </FadeInOnScroll>

        {/* Misi dan Visi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          <FadeInOnScroll>
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg h-full">
              <FaBullseye className="text-5xl text-cyan-400 mb-4" />
              <h3 className="text-3xl font-bold mb-3">Misi Kami</h3>
              <p className="text-gray-400">
                Kami berdedikasi untuk mengembangkan solusi teknologi cerdas yang dirancang khusus untuk memenuhi kebutuhan unik industri, manufaktur, dan sektor publik. Dengan mengintegrasikan Kecerdasan Buatan (AI) dan Embedded Systems, kami membantu klien meningkatkan efisiensi operasional, mengurangi biaya, dan mempercepat transformasi digital. Kami percaya bahwa teknologi harus dapat diandalkan, aman, dan mudah diimplementasikan di lapangan, sehingga kami selalu memprioritaskan kualitas dan kepraktisan dalam setiap produk dan layanan yang kami kembangkan.
              </p>
            </div>
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.2}>
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg h-full">
              <FaEye className="text-5xl text-cyan-400 mb-4" />
              <h3 className="text-3xl font-bold mb-3">Visi Kami</h3>
              <p className="text-gray-400">
              Menjadi penggerak utama dalam memajukan penerapan teknologi masa depan di Indonesia melalui inovasi Kecerdasan Buatan (AI) dan Embedded Systems, serta menciptakan solusi cerdas yang mendukung pertumbuhan industri, meningkatkan daya saing bangsa, dan memberikan manfaat bagi masyarakat luas.
              </p>
            </div>
          </FadeInOnScroll>
        </div>

        {/* Journey of Innovation Timeline */}
        <div className="text-center">
            <FadeInOnScroll>
                <h3 className="text-3xl font-bold mb-12">Journey of Innovation</h3>
            </FadeInOnScroll>
        </div>
        <div className="relative max-w-2xl mx-auto">
          {/* Garis Vertikal Timeline */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-cyan-400/50 transform -translate-x-1/2"></div>

          {timelineData.map((item, index) => (
            <FadeInOnScroll key={index}>
              <div className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                <div className="w-5/12"></div>
                {/* Titik di Timeline */}
                <div className="z-10 flex items-center justify-center w-8 h-8 bg-cyan-400 rounded-full shadow-lg">
                  <FaFlagCheckered className="text-gray-900"/>
                </div>
                {/* Kartu Konten Timeline */}
                <div className={`w-5/12 bg-gray-900 p-6 rounded-lg shadow-lg ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                  <p className="font-bold text-lg text-cyan-400">{item.year}</p>
                  <h4 className="font-bold text-xl mb-1">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;