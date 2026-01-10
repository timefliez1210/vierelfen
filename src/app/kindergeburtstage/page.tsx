import { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Kindergeburtstage & Preise',
    description: 'Kindergeburtstag feiern bei Vier Elfen Hildesheim. Preise, Pakete und alles was im Geburtstagspaket enthalten ist.',
};

export default function Kindergeburtstage() {
    return (
        <div className={styles.page}>
            {/* Page Header */}
            <section className={styles.pageHeader}>
                <div className={styles.container}>
                    <h1>🎉 Kindergeburtstage bei uns</h1>
                    <p>
                        Wir bieten liebevoll gestaltete Kindergeburtstagsfeiern mit verschiedenen
                        Mottos an – ideal zum Spielen, Feiern und Wohlfühlen.
                    </p>
                </div>
            </section>

            {/* Pricing Section */}
            <section className={styles.pricing}>
                <div className={styles.container}>
                    <h2>💶 Preise</h2>
                    <div className={styles.priceCards}>
                        <div className={styles.priceCard}>
                            <div className={styles.priceLabel}>Montag – Donnerstag</div>
                            <div className={styles.priceAmount}>330 €</div>
                            <div className={styles.priceDuration}>4 Stunden</div>
                        </div>
                        <div className={`${styles.priceCard} ${styles.highlighted}`}>
                            <div className={styles.priceLabel}>Freitag – Sonntag & Feiertage</div>
                            <div className={styles.priceAmount}>390 €</div>
                            <div className={styles.priceDuration}>4 Stunden</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What's Included Section */}
            <section className={styles.included}>
                <div className={styles.container}>
                    <h2>🎁 Im Geburtstagspaket enthalten</h2>
                    <div className={styles.includedGrid}>
                        <div className={styles.includedItem}>
                            <span className={styles.icon}>🏠</span>
                            <div>
                                <h4>Exklusive Raumnutzung</h4>
                                <p>Sitzbereich, Spielbereich, Küche & WC – alles nur für euch</p>
                            </div>
                        </div>
                        <div className={styles.includedItem}>
                            <span className={styles.icon}>🎨</span>
                            <div>
                                <h4>Motto eurer Wahl</h4>
                                <p>Das gewählte Kindergeburtstags-Motto</p>
                            </div>
                        </div>
                        <div className={styles.includedItem}>
                            <span className={styles.icon}>🎈</span>
                            <div>
                                <h4>Dekoration</h4>
                                <p>Dekoration mit Ballons</p>
                            </div>
                        </div>
                        <div className={styles.includedItem}>
                            <span className={styles.icon}>🍽️</span>
                            <div>
                                <h4>Eingedeckter Tisch</h4>
                                <p>Liebevoll gedeckter Tisch für die Kinder</p>
                            </div>
                        </div>
                        <div className={styles.includedItem}>
                            <span className={styles.icon}>🥤</span>
                            <div>
                                <h4>Getränke</h4>
                                <p>3 Liter Getränke (Tafelwasser & Apfelschorle)</p>
                            </div>
                        </div>
                        <div className={styles.includedItem}>
                            <span className={styles.icon}>🍿</span>
                            <div>
                                <h4>Knabbereien</h4>
                                <p>Knabbereien-Teller für die Kinder</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Capacity Section */}
            <section className={styles.capacity}>
                <div className={styles.container}>
                    <h2>👨‍👩‍👧‍👦 Kapazität</h2>
                    <div className={styles.capacityCard}>
                        <div className={styles.capacityMain}>
                            <span className={styles.capacityNumber}>30</span>
                            <span className={styles.capacityLabel}>Personen maximal</span>
                        </div>
                        <div className={styles.capacityDetails}>
                            <div className={styles.capacityItem}>
                                <span>👶</span>
                                <span>Höchstens 15 Kinder</span>
                            </div>
                            <div className={styles.capacityItem}>
                                <span>👨‍👩‍👧</span>
                                <span>Höchstens 15 Erwachsene</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Booking Info */}
            <section className={styles.booking}>
                <div className={styles.container}>
                    <h2>🕒 Buchung & Zeiten</h2>
                    <div className={styles.bookingGrid}>
                        <div className={styles.bookingItem}>
                            <h4>Buchungsdauer</h4>
                            <p>4 Stunden</p>
                        </div>
                        <div className={styles.bookingItem}>
                            <h4>Früher kommen</h4>
                            <p>30 Minuten vor der Feier zur Vorbereitung</p>
                        </div>
                        <div className={styles.bookingItem}>
                            <h4>Beginn</h4>
                            <p>Ihr bestimmt selbst – wir richten uns nach euch</p>
                        </div>
                        <div className={styles.bookingItem}>
                            <h4>Öffnungszeiten</h4>
                            <p>Bis 19:00 Uhr (andere Zeiten nach Absprache möglich)</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.cta}>
                <div className={styles.container}>
                    <h2>Bereit zum Feiern?</h2>
                    <p>Kontaktiert uns für eine unverbindliche Anfrage!</p>
                    <a href="/kontakt" className={styles.ctaButton}>
                        Jetzt anfragen 🎉
                    </a>
                </div>
            </section>
        </div>
    );
}
