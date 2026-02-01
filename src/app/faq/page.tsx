import styles from './page.module.css';

export default function FAQ() {
    return (
        <div className={styles.page}>
            {/* Page Header */}
            <section className={styles.pageHeader}>
                <div className={styles.container}>
                    <h1>Kindergeburtstage bei uns</h1>
                    <p>
                        Wir bieten liebevoll gestaltete Kindergeburtstagsfeiern mit verschiedenen
                        Mottos an – ideal zum Spielen, Feiern und Wohlfühlen.
                    </p>
                </div>
            </section>

            {/* FAQ Content */}
            <section className={styles.faqSection}>
                <div className={styles.container}>
                    <div className={styles.faqGrid}>
                        {/* Buchung & Zeiten */}
                        <div className={styles.faqCard}>
                            <h2>Buchung & Zeiten</h2>
                            <ul className={styles.faqList}>
                                <li><strong>Buchungsdauer:</strong> 4 Stunden</li>
                                <li>Ihr könnt 30 Minuten früher zur Vorbereitung kommen</li>
                                <li>Beginn der Feier bestimmt ihr selbst – wir richten uns nach euch</li>
                                <li><strong>Wichtig:</strong> Unser Laden ist bis 19:00 Uhr geöffnet</li>
                                <li><em>(andere Zeiten sind nach Absprache möglich)</em></li>
                            </ul>
                        </div>

                        {/* Preise */}
                        <div className={styles.faqCard}>
                            <h2>Preise</h2>
                            <div className={styles.priceList}>
                                <div className={styles.priceItem}>
                                    <span className={styles.priceLabel}>Montag bis Donnerstag</span>
                                    <span className={styles.priceValue}>330 €</span>
                                </div>
                                <div className={styles.priceItem}>
                                    <span className={styles.priceLabel}>Freitag bis Sonntag & Feiertage</span>
                                    <span className={styles.priceValue}>390 €</span>
                                </div>
                            </div>
                        </div>

                        {/* Kapazität */}
                        <div className={styles.faqCard}>
                            <h2>Kapazität</h2>
                            <div className={styles.capacityInfo}>
                                <div className={styles.capacityMain}>Maximal 30 Personen</div>
                                <div className={styles.capacityDetail}>
                                    davon höchstens 15 Kinder und 15 Erwachsene
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
                                        <li>Sitzbereich</li>
                                        <li>Spielbereich</li>
                                        <li>Küche</li>
                                        <li>WC</li>
                                    </ul>
                                </div>
                                <div className={styles.packageSection}>
                                    <h3>Zusätzlich inklusive:</h3>
                                    <ul className={styles.checkList}>
                                        <li>Das gewählte Kindergeburtstags-Motto</li>
                                        <li>Dekoration mit Ballons</li>
                                        <li>Eingedeckter Tisch für die Kinder</li>
                                        <li>3 Liter Getränke (Tafelwasser & Apfelschorle)</li>
                                        <li>Knabbereien-Teller für die Kinder</li>
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
