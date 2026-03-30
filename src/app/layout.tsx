import type { Metadata, Viewport } from 'next';
import { Nunito, Fredoka } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Analytics from '@/components/Analytics';
import CookieBanner from '@/components/CookieBanner';
import '@/styles/globals.css';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-nunito',
  display: 'swap',
});

const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-fredoka',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Vier Elfen Kinderlounge | Kindergeburtstage in Hildesheim',
    template: '%s | Vier Elfen Kinderlounge',
  },
  description:
    'Vier Elfen Kinderlounge Hildesheim - Ihre Location für unvergessliche Kindergeburtstage und private Feiern. Spielbereich, Partyraum und voller Service.',
  keywords: [
    'Kindergeburtstag',
    'Hildesheim',
    'Kinderlounge',
    'Indoor Spielplatz',
    'Geburtstagsfeiern',
    'Vier Elfen',
    'Kinderparty',
  ],
  authors: [{ name: 'Vier Elfen Kinderlounge' }],
  manifest: '/manifest.json',
  verification: {
    google: 'Jus4CppH-8B4u8mi-eFSnba2x7OXA1GZ5ZbphQR8fkA',
  },
  openGraph: {
    title: 'Vier Elfen Kinderlounge Hildesheim',
    description: 'Unvergessliche Kindergeburtstage und private Feiern in Hildesheim',
    type: 'website',
    locale: 'de_DE',
  },
};

export const viewport: Viewport = {
  themeColor: '#69867C',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['LocalBusiness', 'EntertainmentBusiness'],
        name: 'Vier Elfen Kinderlounge',
        description:
          'Exklusive Kinder-Party-Location in Hildesheim für Kindergeburtstage, Babypartys, Taufen und offenes Spielen.',
        url: 'https://www.vierelfen.com',
        telephone: '+491744014141',
        email: 'hallo@vierelfen.com',
        logo: 'https://www.vierelfen.com/images/Vier-Elfen-Kinderlounge-Hildesheim-Logo.png',
        image: 'https://www.vierelfen.com/images/Vier-Elfen-Kinderlounge-Hildesheim-Logo.png',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Junkersstraße 11A',
          addressLocality: 'Hildesheim',
          postalCode: '31137',
          addressCountry: 'DE',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 52.1760507,
          longitude: 9.9455042,
        },
        priceRange: '€€',
        currenciesAccepted: 'EUR',
        paymentAccepted: 'Cash, Bank Transfer',
        areaServed: {
          '@type': 'City',
          name: 'Hildesheim',
        },
        sameAs: [
          'https://www.instagram.com/vier_elfen',
          'https://maps.app.goo.gl/TRvKWYd2GfHTTbUM6',
        ],
      },
      {
        '@type': 'WebSite',
        name: 'Vier Elfen Kinderlounge',
        url: 'https://www.vierelfen.com',
      },
    ],
  };

  return (
    <html lang="de" className={`${nunito.variable} ${fredoka.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <Analytics />
        <CookieBanner />
        <ScrollToTop />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
