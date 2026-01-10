import { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Datenschutzerklärung',
    description: 'Datenschutzerklärung der Vier Elfen Kinderlounge Hildesheim',
};

export default function Datenschutz() {
    return (
        <div className={styles.page}>
            <section className={styles.pageHeader}>
                <div className={styles.container}>
                    <h1>Datenschutzerklärung</h1>
                </div>
            </section>

            <section className={styles.content}>
                <div className={styles.container}>
                    <div className={styles.card}>
                        <h2>1. Datenschutz auf einen Blick</h2>

                        <h3>Allgemeine Hinweise</h3>
                        <p>
                            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                            personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
                            Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                        </p>

                        <h3>Datenerfassung auf dieser Website</h3>
                        <p>
                            <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber.
                            Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                        </p>

                        <p>
                            <strong>Wie erfassen wir Ihre Daten?</strong><br />
                            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen.
                            Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                            Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der
                            Website durch unsere IT-Systeme erfasst.
                        </p>

                        <h2>2. Hosting</h2>
                        <p>
                            Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
                        </p>

                        <h3>Netlify</h3>
                        <p>
                            Anbieter ist die Netlify, Inc., 44 Montgomery Street, Suite 300, San Francisco,
                            California 94104, USA. Details entnehmen Sie der Datenschutzerklärung von Netlify:
                            <a href="https://www.netlify.com/privacy/" target="_blank" rel="noopener noreferrer">
                                https://www.netlify.com/privacy/
                            </a>
                        </p>

                        <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>

                        <h3>Datenschutz</h3>
                        <p>
                            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst.
                            Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der
                            gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                        </p>

                        <h3>Hinweis zur verantwortlichen Stelle</h3>
                        <p>
                            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                        </p>
                        <p>
                            Inh. G. Meinzer<br />
                            Junkersstraße 11a<br />
                            31137 Hildesheim<br />
                            Telefon: +49 176 59960500<br />
                            E-Mail: hallo@vierelfen.com
                        </p>

                        <h2>4. Datenerfassung auf dieser Website</h2>

                        <h3>Kontaktformular</h3>
                        <p>
                            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben
                            aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten
                            zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns
                            gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                        </p>
                        <p>
                            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
                            sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur
                            Durchführung vorvertraglicher Maßnahmen erforderlich ist.
                        </p>

                        <h3>Anfrage per E-Mail, Telefon</h3>
                        <p>
                            Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive
                            aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke
                            der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.
                        </p>

                        <h2>5. Ihre Rechte</h2>
                        <p>
                            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger
                            und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben
                            außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
                            Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit
                            an uns wenden.
                        </p>

                        <p className={styles.source}>
                            Quelle: <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer">e-recht24.de</a>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
