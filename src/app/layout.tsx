import type { Metadata } from 'next';
import { Nunito, Fredoka } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
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
  openGraph: {
    title: 'Vier Elfen Kinderlounge Hildesheim',
    description: 'Unvergessliche Kindergeburtstage und private Feiern in Hildesheim',
    type: 'website',
    locale: 'de_DE',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${nunito.variable} ${fredoka.variable}`}>
      <body>
        <ScrollToTop />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
