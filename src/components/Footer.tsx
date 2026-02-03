import Link from 'next/link';
import styles from './Footer.module.css';
import { CONTACT, OPENING_HOURS, FOOTER_LINKS } from '@/constants';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.footerTop}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        {/* Contact Info */}
                        <div className={styles.column}>
                            <h3>Kontakt</h3>
                            <ul className={styles.contactList}>
                                <li>
                                    <span className={styles.icon}>📍</span>
                                    <span>{CONTACT.address.street}<br />{CONTACT.address.zip} {CONTACT.address.city}</span>
                                </li>
                                <li>
                                    <a href={`tel:${CONTACT.phoneLink}`}>
                                        <span className={styles.icon}>📞</span>
                                        <span>{CONTACT.phone}</span>
                                    </a>
                                </li>
                                <li>
                                    <a href={`mailto:${CONTACT.email}`}>
                                        <span className={styles.icon}>✉️</span>
                                        <span>{CONTACT.email}</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Quick Links */}
                        <div className={styles.column}>
                            <h3>Informationen</h3>
                            <ul className={styles.linkList}>
                                {FOOTER_LINKS.info.map((link) => (
                                    <li key={link.href}>
                                        <Link href={link.href}>{link.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Opening Hours */}
                        <div className={styles.column}>
                            <h3>Öffnungszeiten</h3>
                            <ul className={styles.hoursList}>
                                <li>
                                    <span>Feiern & Events</span>
                                    <span>{OPENING_HOURS.events}</span>
                                </li>
                                <li>
                                    <span>Geburtstage</span>
                                    <span>Bis {OPENING_HOURS.closingTime}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className={styles.footerBottom}>
                <div className={styles.container}>
                    <p>&copy; {currentYear} {CONTACT.fullName}</p>
                    <nav className={styles.legalLinks}>
                        {FOOTER_LINKS.legal.map((link) => (
                            <Link key={link.href} href={link.href}>{link.label}</Link>
                        ))}
                    </nav>
                </div>
            </div>
        </footer>
    );
}
