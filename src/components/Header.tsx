'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';
import { CONTACT, NAV_LINKS, ROUTES } from '@/constants';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isHelpOpen, setIsHelpOpen] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);
    const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const helpWrapperRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolling(true);

            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }

            scrollTimeoutRef.current = setTimeout(() => {
                setIsScrolling(false);
            }, 150);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (isHelpOpen && helpWrapperRef.current && !helpWrapperRef.current.contains(event.target as Node)) {
                setIsHelpOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isHelpOpen]);

    const navLinks = NAV_LINKS;

    return (
        <header className={styles.header}>
            {/* Top Contact Bar (Desktop only) */}
            <div className={styles.topBar}>
                <div className={styles.topBarContent}>
                    <a href={`mailto:${CONTACT.email}`} className={styles.topBarLink}>
                        <span className={styles.icon}>✉️</span>
                        {CONTACT.email}
                    </a>
                    <Link href={ROUTES.faq} className={styles.topBarLink}>
                        Häufig gestellte Fragen
                    </Link>
                    <a href={`tel:${CONTACT.phoneLink}`} className={styles.topBarLink}>
                        <svg className={styles.iconSvg} viewBox="0 0 24 24" fill="currentColor">
                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                        </svg>
                        {CONTACT.phone}
                    </a>
                </div>
            </div>

            {/* Floating Help Button (Mobile only) */}
            <div className={styles.helpButtonWrapper} ref={helpWrapperRef}>
                <button
                    className={`${styles.helpButton} ${isHelpOpen ? styles.open : ''} ${isScrolling && !isHelpOpen ? styles.pulsing : ''}`}
                    onClick={() => setIsHelpOpen(!isHelpOpen)}
                    aria-label="Hilfe"
                >
                    <span className={styles.helpIcon}>{isHelpOpen ? '✕' : '?'}</span>
                </button>
                <div className={`${styles.helpMenu} ${isHelpOpen ? styles.open : ''}`}>
                    <Link
                        href={ROUTES.faq}
                        className={styles.helpLink}
                        onClick={() => setIsHelpOpen(false)}
                    >
                        <span className={styles.helpLinkIcon}>❓</span>
                        Häufig gestellte Fragen
                    </Link>
                    <a href={`tel:${CONTACT.phoneLink}`} className={styles.helpLink}>
                        <svg className={styles.helpLinkSvg} viewBox="0 0 24 24" fill="currentColor">
                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                        </svg>
                        {CONTACT.phone}
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
                            quality={80}
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
