// app/components/Footer.tsx
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="max-w-screen-xl mx-auto py-8 px-4 text-center text-gray-400">
        <p>&copy; {currentYear} REKKATEK. Semua Hak Cipta Dilindungi.</p>
        {/* <div className="mt-4">
          <Link href="#" className="mx-2 hover:text-white">Privacy Policy</Link>
          <span className="text-gray-600">|</span>
          <Link href="#" className="mx-2 hover:text-white">Terms of Service</Link>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;