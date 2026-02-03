import Hero from '@/components/Hero';
import styles from './page.module.css';
import { PRICING, CAPACITY, OPENING_HOURS, PACKAGE_INCLUDES } from '@/constants';

export default function FAQ() {
    return (
        <div className={styles.page}>
            <Hero
                title="Häufig gestellte Fragen"
                subtitle="Alle wichtigen Infos zu Buchung, Preisen und Ablauf auf einen Blick"
                backgroundImage="/images/vier-elfen-blocks.jpg"
                variant="subpage"
            />

            {/* FAQ Content */}
            <section className={styles.faqSection}>
                <div className={styles.container}>
                    <div className={styles.faqGrid}>
                        {/* Buchung & Zeiten */}
                        <div className={styles.faqCard}>
                            <h2>Buchung & Zeiten</h2>
                            <ul className={styles.faqList}>
                                <li><strong>Buchungsdauer:</strong> {PRICING.party.duration}</li>
                                <li>Ihr könnt {PRICING.party.earlyArrival} früher zur Vorbereitung kommen</li>
                                <li>Beginn der Feier bestimmt ihr selbst – wir richten uns nach euch</li>
                                <li><strong>Wichtig:</strong> Unser Laden ist bis {OPENING_HOURS.closingTime} geöffnet</li>
                                <li><em>({OPENING_HOURS.note})</em></li>
                            </ul>
                        </div>

                        {/* Preise */}
                        <div className={styles.faqCard}>
                            <h2>Preise</h2>
                            <div className={styles.priceList}>
                                <div className={styles.priceItem}>
                                    <span className={styles.priceLabel}>{PRICING.party.weekday.label}</span>
                                    <span className={styles.priceValue}>{PRICING.party.weekday.priceFormatted}</span>
                                </div>
                                <div className={styles.priceItem}>
                                    <span className={styles.priceLabel}>{PRICING.party.weekend.label}</span>
                                    <span className={styles.priceValue}>{PRICING.party.weekend.priceFormatted}</span>
                                </div>
                            </div>
                        </div>

                        {/* Kapazität */}
                        <div className={styles.faqCard}>
                            <h2>Kapazität</h2>
                            <div className={styles.capacityInfo}>
                                <div className={styles.capacityMain}>Maximal {CAPACITY.total} Personen</div>
                                <div className={styles.capacityDetail}>
                                    davon höchstens {CAPACITY.maxChildren} Kinder und {CAPACITY.maxAdults} Erwachsene
                                </div>
                            </div>
                        </div>

                        {/* Im Geburtstagspaket enthalten */}
                        <div className={`${styles.faqCard} ${styles.faqCardWide}`}>
                            <h2>Im Geburtstagspaket enthalten</h2>
                            <div className={styles.packageContent}>
                                <div className={styles.packageSection}>
                                    <h3>Exklusive Nutzung unseres gesamten Raumes:</h3>
                                    <ul className={styles.checkList}>
                                        {PACKAGE_INCLUDES.rooms.map((room) => (
                                            <li key={room}>{room}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className={styles.packageSection}>
                                    <h3>Zusätzlich inklusive:</h3>
                                    <ul className={styles.checkList}>
                                        {PACKAGE_INCLUDES.extras.map((extra) => (
                                            <li key={extra}>{extra}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Anzahlung / Reservierung */}
                        <div className={styles.faqCard}>
                            <h2>Anzahlung / Reservierung</h2>
                            <ul className={styles.faqList}>
                                <li>Eine Anzahlung dient als verbindliche Reservierung</li>
                                <li>Die Anzahlung kann vor Ort in bar oder vorab per Überweisung getätigt werden</li>
                            </ul>
                        </div>

                        {/* Vertrag & Regeln */}
                        <div className={styles.faqCard}>
                            <h2>Vertrag & Regeln</h2>
                            <p className={styles.faqText}>
                                Beim Eintreffen zur Feier wird ein Vertrag unterschrieben, in dem ihr euch
                                zur Einhaltung unserer Hausregeln sowie zur ordnungsgemäßen Nutzung der
                                Räumlichkeiten verpflichtet.
                            </p>
                        </div>

                        {/* Stornierung & Krankheit */}
                        <div className={`${styles.faqCard} ${styles.faqCardWide}`}>
                            <h2>Stornierung & Krankheit</h2>
                            <ul className={styles.faqList}>
                                <li>Bei einer Stornierung ist keine Rückerstattung der Anzahlung möglich</li>
                                <li>
                                    Sollte die Feier krankheitsbedingt nicht stattfinden können, bitten wir
                                    um frühestmögliche Information – auch per kurzer SMS in der Nacht
                                </li>
                                <li className={styles.highlight}>
                                    In diesem Fall finden wir gemeinsam einen neuen Termin
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
