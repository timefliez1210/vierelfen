import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/styles/globals.css';

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
    <html lang="de">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
