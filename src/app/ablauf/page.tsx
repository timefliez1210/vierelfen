import { Metadata } from 'next';
import Hero from '@/components/Hero';
import Button from '@/components/Button';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Ablauf & Regeln',
    description: 'Alles zum Ablauf der Buchung, Anzahlung, Vertrag und Hausregeln bei Vier Elfen Kinderlounge Hildesheim.',
};

export default function Ablauf() {
    return (
        <div className={styles.page}>
            <Hero
                title="Ablauf & Regeln"
                subtitle="Alles was ihr über die Buchung, Anzahlung und unsere Regeln wissen müsst"
                backgroundImage="/images/school-party.jpg"
                variant="subpage"
            />

            {/* Deposit Section */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.infoCard}>
                        <div className={styles.infoIcon}>💳</div>
                        <div className={styles.infoContent}>
                            <h2>Anzahlung / Reservierung</h2>
                            <ul>
                                <li>Eine Anzahlung dient als verbindliche Reservierung</li>
                                <li>Die Anzahlung kann vor Ort in bar oder vorab per Überweisung getätigt werden</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contract Section */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.infoCard}>
                        <div className={styles.infoIcon}>📝</div>
                        <div className={styles.infoContent}>
                            <h2>Vertrag & Regeln</h2>
                            <p>
                                Beim Eintreffen zur Feier wird ein Vertrag unterschrieben, in dem ihr euch
                                zur Einhaltung unserer Hausregeln sowie zur ordnungsgemäßen Nutzung der
                                Räumlichkeiten verpflichtet.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cancellation Section */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={`${styles.infoCard} ${styles.important}`}>
                        <div className={styles.infoIcon}>❗</div>
                        <div className={styles.infoContent}>
                            <h2>Stornierung & Krankheit</h2>
                            <div className={styles.cancellationInfo}>
                                <div className={styles.cancellationItem}>
                                    <h4>Stornierung</h4>
                                    <p>Bei einer Stornierung ist keine Rückerstattung der Anzahlung möglich.</p>
                                </div>
                                <div className={styles.cancellationItem}>
                                    <h4>Krankheit</h4>
                                    <p>
                                        Sollte die Feier krankheitsbedingt nicht stattfinden können, bitten wir
                                        um frühestmögliche Information – auch per kurzer SMS in der Nacht.
                                    </p>
                                    <p className={styles.highlight}>
                                        → In diesem Fall finden wir gemeinsam einen neuen Termin
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* House Rules */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>🏠 Unsere Hausregeln</h2>
                    <div className={styles.rulesGrid}>
                        <div className={styles.ruleItem}>
                            <span className={styles.ruleIcon}>👟</span>
                            <p>Bitte Hausschuhe oder Socken mitbringen</p>
                        </div>
                        <div className={styles.ruleItem}>
                            <span className={styles.ruleIcon}>👀</span>
                            <p>Die Aufsichtspflicht liegt bei den begleitenden Erwachsenen</p>
                        </div>
                        <div className={styles.ruleItem}>
                            <span className={styles.ruleIcon}>🚫</span>
                            <p>Rauchen ist draußen erlaubt, jedoch nicht im Beisein bzw. Sichtfeld der Kinder</p>
                        </div>
                        <div className={styles.ruleItem}>
                            <span className={styles.ruleIcon}>🎉</span>
                            <p>Konfetti und Glitzer sind nur nach Absprache erlaubt</p>
                        </div>
                        <div className={styles.ruleItem}>
                            <span className={styles.ruleIcon}>💝</span>
                            <p>Respektvoller Umgang miteinander und mit dem Inventar</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.cta}>
                <div className={styles.container}>
                    <h2>Noch Fragen?</h2>
                    <p>Wir sind für euch da und beantworten gerne alle eure Fragen!</p>
                    <Button href="/kontakt" size="large">
                        Kontakt aufnehmen
                    </Button>
                </div>
            </section>
        </div>
    );
}
