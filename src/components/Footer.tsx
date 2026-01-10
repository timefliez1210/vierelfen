import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.footerTop}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        {/* Contact Info */}
                        <div className={styles.column}>
                            <h4>Kontakt</h4>
                            <ul className={styles.contactList}>
                                <li>
                                    <span className={styles.icon}>📍</span>
                                    <span>Junkersstraße 11A<br />31137 Hildesheim</span>
                                </li>
                                <li>
                                    <a href="tel:+4917659960500">
                                        <span className={styles.icon}>📞</span>
                                        <span>0176 59960500</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:hallo@vierelfen.com">
                                        <span className={styles.icon}>✉️</span>
                                        <span>hallo@vierelfen.com</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Quick Links */}
                        <div className={styles.column}>
                            <h4>Informationen</h4>
                            <ul className={styles.linkList}>
                                <li><Link href="/kindergeburtstage">Kindergeburtstage</Link></li>
                                <li><Link href="/ablauf">Ablauf & Regeln</Link></li>
                                <li><Link href="/kontakt">Kontakt & Buchung</Link></li>
                            </ul>
                        </div>

                        {/* Opening Hours */}
                        <div className={styles.column}>
                            <h4>Öffnungszeiten</h4>
                            <ul className={styles.hoursList}>
                                <li>
                                    <span>Feiern & Events</span>
                                    <span>Nach Vereinbarung</span>
                                </li>
                                <li>
                                    <span>Geburtstage</span>
                                    <span>Bis 19:00 Uhr</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className={styles.footerBottom}>
                <div className={styles.container}>
                    <p>&copy; {currentYear} Vier Elfen Kinderlounge Hildesheim</p>
                    <nav className={styles.legalLinks}>
                        <Link href="/impressum">Impressum</Link>
                        <Link href="/datenschutz">Datenschutz</Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
}
