import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Solution from '../components/Solution';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import PageBreaker from '../components/PageBreaker';
import Script from 'next/script';

export const metadata = {
  title: 'High-Converting Website Design & Development | PixelRush',
  description: 'Transform your business with our high-converting, mobile-first websites. Get a professional website in just 3 days with our expert design and development services.',
};

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'PixelRush',
    url: 'https://pixelrush.sites',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://pixelrush.sites/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'PixelRush',
    url: 'https://pixelrush.sites',
    logo: 'https://pixelrush.sites/logo.png',
    sameAs: [
      'https://facebook.com/pixelrush',
      'https://x.com/pixelrush',
      'https://linkedin.com/company/pixelrush',
      'https://instagram.com/pixelrush'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-PIXRUSH',
      contactType: 'customer service',
      email: 'hello@pixelrush.sites',
      areaServed: 'US',
      availableLanguage: ['English']
    }
  };

  return (
    <>
      <Script
        id="website-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Script
        id="organization-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
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
    </>
  );
} 