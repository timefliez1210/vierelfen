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

            {/* Floating Social & Help Buttons */}
            <div className={styles.floatingButtons}>
                {/* Instagram Button */}
                <a
                    href="https://www.instagram.com/vier_elfen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialButton}
                    aria-label="Instagram"
                >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                </a>

                {/* WhatsApp Button */}
                <a
                    href={`https://api.whatsapp.com/send?phone=${CONTACT.phoneLink.replace('+', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialButton}
                    aria-label="WhatsApp"
                >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                </a>

                {/* Help Button */}
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
