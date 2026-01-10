import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Kontakt & Buchung',
    description: 'Kontaktiert die Vier Elfen Kinderlounge Hildesheim für Buchungsanfragen und Fragen zu Kindergeburtstagen.',
};

export default function KontaktLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
