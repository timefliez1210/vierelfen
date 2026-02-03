import { Metadata } from 'next';
import Image from 'next/image';
import Hero from '@/components/Hero';
import styles from './page.module.css';
import { PRICING, CAPACITY, OPENING_HOURS } from '@/constants';

export const metadata: Metadata = {
    title: 'Kindergeburtstage & Preise',
    description: 'Kindergeburtstag feiern bei Vier Elfen Hildesheim. Preise, Pakete und alles was im Geburtstagspaket enthalten ist.',
};

export default function Kindergeburtstage() {
    return (
        <div className={styles.page}>
            <Hero
                title="Kindergeburtstage bei uns"
                subtitle="Wir bieten liebevoll gestaltete Kindergeburtstagsfeiern mit verschiedenen Mottos an – ideal zum Spielen, Feiern und Wohlfühlen."
                backgroundImage="/images/showcase-party.jpg"
                variant="subpage"
            />

            {/* Pricing Section */}
            <section className={styles.pricing}>
                <div className={styles.container}>
                    <h2>Preise</h2>
                    <div className={styles.priceCards}>
                        <div className={styles.priceCard}>
                            <div className={styles.priceLabel}>{PRICING.weekday.label}</div>
                            <div className={styles.priceAmount}>{PRICING.weekday.priceFormatted}</div>
                            <div className={styles.priceDuration}>{PRICING.duration}</div>
                        </div>
                        <div className={`${styles.priceCard} ${styles.highlighted}`}>
                            <div className={styles.priceLabel}>{PRICING.weekend.label}</div>
                            <div className={styles.priceAmount}>{PRICING.weekend.priceFormatted}</div>
                            <div className={styles.priceDuration}>{PRICING.duration}</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What's Included Section */}
            <section className={styles.included}>
                <div className={styles.container}>
                    <div className={styles.includedHeader}>
                        <h2>Im Geburtstagspaket enthalten</h2>
                        <p>Alles was ihr für eine unvergessliche Feier braucht</p>
                    </div>
                    <div className={styles.includedImageWrapper}>
                        <Image
                            src="/images/playroom-shop.jpg"
                            alt="Spielbereich mit Kaufladen"
                            fill
                            quality={70}
                            sizes="100vw"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
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
                            <span className={styles.capacityNumber}>{CAPACITY.total}</span>
                            <span className={styles.capacityLabel}>Personen maximal</span>
                        </div>
                        <div className={styles.capacityDetails}>
                            <div className={styles.capacityItem}>
                                <span>👶</span>
                                <span>Höchstens {CAPACITY.maxChildren} Kinder</span>
                            </div>
                            <div className={styles.capacityItem}>
                                <span>👨‍👩‍👧</span>
                                <span>Höchstens {CAPACITY.maxAdults} Erwachsene</span>
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
                            <p>{PRICING.duration}</p>
                        </div>
                        <div className={styles.bookingItem}>
                            <h4>Früher kommen</h4>
                            <p>{PRICING.earlyArrival} vor der Feier zur Vorbereitung</p>
                        </div>
                        <div className={styles.bookingItem}>
                            <h4>Beginn</h4>
                            <p>Ihr bestimmt selbst – wir richten uns nach euch</p>
                        </div>
                        <div className={styles.bookingItem}>
                            <h4>Öffnungszeiten</h4>
                            <p>Bis {OPENING_HOURS.closingTime} ({OPENING_HOURS.note})</p>
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
