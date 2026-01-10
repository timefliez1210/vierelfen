import { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Impressum',
    description: 'Impressum der Vier Elfen Kinderlounge Hildesheim',
};

export default function Impressum() {
    return (
        <div className={styles.page}>
            <section className={styles.pageHeader}>
                <div className={styles.container}>
                    <h1>Impressum</h1>
                </div>
            </section>

            <section className={styles.content}>
                <div className={styles.container}>
                    <div className={styles.card}>
                        <h2>Angaben gemäß § 5 TMG</h2>

                        <h3>Betreiber</h3>
                        <p>
                            Inh. G. Meinzer<br />
                            Junkersstraße 11a<br />
                            31137 Hildesheim
                        </p>

                        <h3>Vertreten durch</h3>
                        <p>Gabija Meinzer</p>

                        <h3>Kontakt</h3>
                        <p>
                            Telefon: +49 176 59960500<br />
                            E-Mail: hallo@vierelfen.com
                        </p>

                        <h3>Umsatzsteuer-ID</h3>
                        <p>
                            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                            DE323209105
                        </p>

                        <h3>Verbraucherstreitbeilegung/Universalschlichtungsstelle</h3>
                        <p>
                            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
                            vor einer Verbraucherschlichtungsstelle teilzunehmen.
                        </p>
                        <p>
                            Quelle: <a href="https://www.erecht24.de" target="_blank" rel="noopener noreferrer">eRecht24</a>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
