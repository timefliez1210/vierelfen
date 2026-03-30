import { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import Button from '@/components/Button';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Ideenschmiede: Ideen für Kindergeburtstage & Feiern in Hildesheim',
    description: 'Inspiration für Kindergeburtstage, Taufen, Babypartys und Spieltermine in Hildesheim. Tipps und Ideen von Vier Elfen Kinderlounge.',
};

const cards = [
    {
        href: '/ideen/kindergeburtstag',
        icon: '🎂',
        title: 'Kindergeburtstag',
        description: 'Dein Kind träumt von der perfekten Geburtstagsfeier? Hier findet ihr Ideen für Mottos, Abläufe und alles, was eine Kinderparty unvergesslich macht.',
    },
    {
        href: '/ideen/feiern',
        icon: '🎊',
        title: 'Taufe, Babyparty & mehr',
        description: 'Besondere Familienfeiern verdienen einen besonderen Rahmen. Alles über Taufen, Babypartys und andere Feste mit Kindern in entspannter Atmosphäre.',
    },
    {
        href: '/ideen/spieltermin',
        icon: '☕',
        title: 'Spieltermin & Kaffeepause',
        description: 'Kein Geburtstag, kein Anlass. Mit Freundinnen einen Termin vereinbaren, die Kinder spielen lassen und bei einem Kaffee gemeinsam durchatmen.',
    },
];

export default function Ideenschmiede() {
    return (
        <div className={styles.page}>
            <Hero
                title="Ideenschmiede"
                subtitlePrefix="Inspiration für "
                subtitlePhrases={[
                    'Kindergeburtstage',
                    'Familienfeiern',
                    'entspannte Spieltermine',
                    'unvergessliche Momente',
                ]}
                backgroundImage="/images/vier-elfen-blocks.jpg"
                backgroundImageAlt="Bunte Bausteine und Spielzeuge in der Vier Elfen Kinderlounge Hildesheim"
                variant="subpage"
            />

            <section className={styles.intro}>
                <div className={styles.container}>
                    <p className={styles.introText}>
                        Ob Geburtstagsfeier, Taufe, Babyparty oder ein geplanter Spielnachmittag:
                        In unserer Ideenschmiede findet ihr Inspiration, Tipps und alles Wissenswerte
                        rund ums Feiern mit Kindern in Hildesheim.
                    </p>
                </div>
            </section>

            <section className={styles.cardsSection}>
                <div className={styles.container}>
                    <div className={styles.cardsGrid}>
                        {cards.map((card) => (
                            <Link key={card.href} href={card.href} className={styles.card}>
                                <span className={styles.cardIcon}>{card.icon}</span>
                                <h2 className={styles.cardTitle}>{card.title}</h2>
                                <p className={styles.cardDescription}>{card.description}</p>
                                <span className={styles.cardLink}>{card.title} lesen &rarr;</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.cta}>
                <div className={styles.container}>
                    <h2 className={styles.ctaTitle}>Bereit zum Feiern?</h2>
                    <p className={styles.ctaText}>
                        Ihr habt euren Anlass gefunden? Meldet euch bei uns und wir planen gemeinsam etwas Unvergessliches.
                    </p>
                    <Button href="/kontakt" size="large">Jetzt Termin anfragen</Button>
                </div>
            </section>
        </div>
    );
}
