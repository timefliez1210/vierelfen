import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Kindergeburtstag anfragen & buchen in Hildesheim | Vier Elfen',
    description: 'Kindergeburtstag oder Spieltermin bei Vier Elfen in Hildesheim anfragen. Einfach per Formular, Telefon oder E-Mail melden und Termin vereinbaren.',
};

export default function KontaktLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
