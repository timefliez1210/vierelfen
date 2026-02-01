'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/kindergeburtstage', label: 'Preise' },
        { href: '/ablauf', label: 'Regeln' },
        { href: '/kontakt', label: 'Kontakt' },
    ];

    return (
        <header className={styles.header}>
            {/* Top Contact Bar */}
            <div className={styles.topBar}>
                <div className={styles.topBarContent}>
                    <a href="mailto:hallo@vierelfen.com" className={styles.topBarLink}>
                        <span className={styles.icon}>✉️</span>
                        hallo@vierelfen.com
                    </a>
                    <Link href="/faq" className={styles.topBarLink}>
                        Häufig gestellte Fragen
                    </Link>
                    <a href="tel:+4917659960500" className={styles.topBarLink}>
                        <span className={styles.icon}>📞</span>
                        0176 59960500
                    </a>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className={styles.nav}>
                <div className={styles.navContent}>
                    {/* Left Nav Links (Desktop) */}
                    <ul className={styles.navLinksLeft}>
                        {navLinks.slice(0, 2).map((link) => (
                            <li key={link.href}>
                                <Link href={link.href} className={styles.navLink}>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Logo (Center) */}
                    <Link href="/" className={styles.logo}>
                        <Image
                            src="/images/Vier-Elfen-Kinderlounge-Hildesheim-Logo.png"
                            alt="Vier Elfen Kinderlounge"
                            width={160}
                            height={80}
                            priority
                        />
                    </Link>

                    {/* Right Nav Links (Desktop) */}
                    <ul className={styles.navLinksRight}>
                        {navLinks.slice(2).map((link) => (
                            <li key={link.href}>
                                <Link href={link.href} className={styles.navLink}>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        className={styles.menuBtn}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Menu öffnen"
                    >
                        <span className={`${styles.menuIcon} ${isMenuOpen ? styles.open : ''}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
                    <ul className={styles.mobileLinks}>
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={styles.mobileLink}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
}
