'user client';
import About from '@/app/components/About';
import Header from '@/app/components/Header';
import Navbar from '@/app/components/Navbar';
import Services from '@/app/components/Services';
import Work from '@/app/components/Work';
import Contact from './components/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Work />
      <Contact />
    </>
  );
}
