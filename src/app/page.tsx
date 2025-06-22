// app/page.tsx
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
// Impor komponen lain yang sudah Anda buat (About, Portfolio, dll.)

import Portfolio from "./components/Portfolio";
import About from "./components/About";
// import Products from "./components/Products";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      {/* Di sini Anda akan menempatkan komponen lain sesuai urutan.
        Buat file untuk masing-masing (misalnya, About.tsx)
        dengan mengikuti pola dari Services.tsx.
      */}
      <Portfolio />
      <About />
      {/* <Products /> */}
      <Contact />
    </>
  );
}