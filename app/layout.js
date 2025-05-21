import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://pixelrush.sites'),
  title: {
    default: 'PixelRush | High-Converting Website Design & Development',
    template: '%s | PixelRush'
  },
  description: 'Transform your business with our high-converting, mobile-first websites. Get a professional website in just 3 days with our expert design and development services.',
  keywords: ['web design', 'web development', 'high-converting websites', 'mobile-first design', '3-day delivery', 'business websites', 'conversion optimization'],
  authors: [{ name: 'PixelRush Team' }],
  creator: 'PixelRush',
  publisher: 'PixelRush',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pixelrush.sites',
    siteName: 'PixelRush',
    title: 'PixelRush | High-Converting Website Design & Development',
    description: 'Transform your business with our high-converting, mobile-first websites. Get a professional website in just 3 days with our expert design and development services.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PixelRush - High-Converting Website Design & Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PixelRush | High-Converting Website Design & Development',
    description: 'Transform your business with our high-converting, mobile-first websites. Get a professional website in just 3 days with our expert design and development services.',
    images: ['/twitter-image.jpg'],
    creator: '@pixelrush',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
    yandex: 'your-yandex-verification',
    yahoo: 'your-yahoo-verification',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://pixelrush.sites" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
} 