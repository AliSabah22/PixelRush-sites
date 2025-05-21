import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Solution from '../components/Solution';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import PageBreaker from '../components/PageBreaker';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <Hero />
        <PageBreaker />
        <Problem />
        <PageBreaker />
        <Solution />
        <PageBreaker />
        <Portfolio />
        <PageBreaker />
        <Testimonials />
        <PageBreaker />
        <CTA />
      </div>
      <Footer />
    </main>
  );
} 