import Head from 'next/head';
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Solution from '../components/Solution';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>PixelRush Sites - Websites That Actually Sell</title>
        <meta name="description" content="PixelRush Sites: Delivered in 3 days. Mobile-first. Made to convert." />
        <link rel="icon" href="/favicon.ico" />
        {/* Add social preview meta tags here using public/social-preview.png */}
        <meta property="og:title" content="PixelRush Sites - Websites That Actually Sell" />
        <meta property="og:description" content="Delivered in 3 days. Mobile-first. Made to convert." />
        <meta property="og:image" content="/social-preview.png" /> {/* Ensure this path is correct */}
        <meta property="og:url" content="https://pixelrush.sites" /> {/* Replace with actual URL */}
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main>
        <Hero />
        <Problem />
        <Solution />
        <Portfolio />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
    </>
  );
} 