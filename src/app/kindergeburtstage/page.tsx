import { Metadata } from 'next';
import Hero from '@/components/Hero';
import Button from '@/components/Button';
import styles from './page.module.css';
import { PRICING } from '@/constants';

export const metadata: Metadata = {
    title: 'Preise & Angebote',
    description: 'Unsere Preise für Kindergeburtstage, Feiern und offenes Spielen bei Vier Elfen in Hildesheim.',
};

export default function Kindergeburtstage() {
    return (
        <div className={styles.page}>
            <Hero
                title="Unsere Preise"
                subtitle="Ob große Feier oder spontaner Spielspaß – hier findet ihr das passende Angebot für euch."
                backgroundImage="/images/showcase-party.jpg"
                variant="subpage"
            />

            {/* Pricing Grid */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.pricingGrid}>
                        {/* Ich will feiern */}
                        <div className={styles.pricingCard}>
                            <div className={styles.sectionHeader}>
                                <span className={styles.sectionIcon}>🎂</span>
                                <h2>Ich will feiern</h2>
                            </div>
                            <p className={styles.sectionIntro}>
                                Ihr plant eine Party? Bei uns bekommt ihr alles aus einer Hand –
                                von der Deko bis zum Programm.
                            </p>

                            <div className={styles.packageInfo}>
                                <h3>Geschlossene Gesellschaft</h3>
                                <p className={styles.packageDetails}>
                                    Max. {PRICING.party.maxPersons} Personen · {PRICING.party.duration}
                                </p>
                            </div>

                            <div className={styles.priceTable}>
                                <div className={styles.priceRow}>
                                    <span>{PRICING.party.weekday.label}</span>
                                    <span className={styles.price}>{PRICING.party.weekday.priceFormatted}</span>
                                </div>
                                <div className={styles.priceRow}>
                                    <span>{PRICING.party.weekend.label}</span>
                                    <span className={styles.price}>{PRICING.party.weekend.priceFormatted}</span>
                                </div>
                                <div className={styles.priceRow}>
                                    <span>{PRICING.party.extraTime.label}</span>
                                    <span className={styles.price}>{PRICING.party.extraTime.priceFormatted}</span>
                                </div>
                                <div className={`${styles.priceRow} ${styles.deposit}`}>
                                    <span>Anzahlung*</span>
                                    <span className={styles.price}>{PRICING.party.deposit.amountFormatted}</span>
                                </div>
                            </div>

                            <div className={styles.includedPreview}>
                                <h4>Das ist alles dabei:</h4>
                                <ul>
                                    <li>Exklusive Nutzung von Sitz- und Spielbereich, Küche & WC</li>
                                    <li>Motto eurer Wahl mit passender Deko</li>
                                    <li>Liebevoll eingedeckter Tisch</li>
                                    <li>Getränke und Knabbereien für die Kinder</li>
                                </ul>
                            </div>

                            <Button href="/kontakt">
                                Jetzt anfragen
                            </Button>
                        </div>

                        {/* Ich will spielen */}
                        <div className={styles.pricingCard}>
                            <div className={styles.sectionHeader}>
                                <span className={styles.sectionIcon}>🧩</span>
                                <h2>Ich will spielen</h2>
                            </div>
                            <p className={styles.sectionIntro}>
                                Manchmal braucht es keinen besonderen Anlass. Kommt einfach vorbei
                                und lasst eure Kinder in unserem Spielbereich toben.
                            </p>

                            <div className={styles.packageInfo}>
                                <h3>Offenes Spielen</h3>
                                <p className={styles.packageDetails}>Spielzeit: {PRICING.openPlay.duration}</p>
                            </div>

                            <div className={styles.priceTable}>
                                <div className={styles.priceRow}>
                                    <span>{PRICING.openPlay.children.label}</span>
                                    <span className={styles.price}>{PRICING.openPlay.children.priceFormatted}</span>
                                </div>
                                <div className={styles.priceRow}>
                                    <span>{PRICING.openPlay.adults.label}</span>
                                    <span className={styles.price}>{PRICING.openPlay.adults.priceFormatted}</span>
                                </div>
                            </div>

                            <Button href="/kontakt">
                                Jetzt anfragen
                            </Button>
                        </div>

                        {/* Extras */}
                        <div className={`${styles.pricingCard} ${styles.extrasCard}`}>
                            <div className={styles.sectionHeader}>
                                <span className={styles.sectionIcon}>✨</span>
                                <h2>Extras für eure Feier</h2>
                            </div>
                            <p className={styles.sectionIntro}>
                                Ihr möchtet eure Party noch besonderer machen? Diese Extras könnt
                                ihr ganz einfach dazubuchen.
                            </p>

                            <div className={styles.addonsGrid}>
                                {PRICING.addons.map((addon) => (
                                    <div key={addon.name} className={styles.addonCard}>
                                        <h4>{addon.name}</h4>
                                        <span className={styles.addonPrice}>{addon.price}</span>
                                        {addon.note && <span className={styles.addonNote}>{addon.note}</span>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Wichtige Hinweise */}
            <section className={`${styles.section} ${styles.infoSection}`}>
                <div className={styles.container}>
                    <div className={styles.infoBox}>
                        <h3>Gut zu wissen</h3>
                        <p>
                            Für Buchungen bitten wir um eine Anzahlung von {PRICING.party.deposit.amountFormatted}.
                            Falls ihr absagen müsst, wird dieser Betrag nicht zurückerstattet – aber
                            keine Sorge, wir verrechnen ihn gerne mit eurer nächsten Buchung.
                        </p>
                        <p className={styles.highlight}>
                            Ohne Anzahlung ist die Reservierung nicht fest.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <h2>Habt ihr noch Fragen?</h2>
                    <p>Wir beraten euch gerne und finden das passende Angebot für euch.</p>
                    <Button href="/kontakt" size="large">
                        Kontakt aufnehmen
                    </Button>
                </div>
            </section>
        </div>
    );
}
