'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './CookieBanner.module.css';

export default function CookieBanner() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!localStorage.getItem('cookie_consent')) {
            setVisible(true);
        }

        const handleReset = () => setVisible(true);
        window.addEventListener('cookieConsentReset', handleReset);
        return () => window.removeEventListener('cookieConsentReset', handleReset);
    }, []);

    const dispatch = (accepted: boolean) => {
        localStorage.setItem('cookie_consent', accepted ? 'accepted' : 'declined');
        window.dispatchEvent(new CustomEvent('cookieConsent', { detail: { accepted } }));
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className={styles.banner} role="dialog" aria-modal="true" aria-label="Cookie-Einstellungen">
            <div className={styles.inner}>
                <div className={styles.text}>
                    <p className={styles.title}>Cookie-Einstellungen</p>
                    <p className={styles.description}>
                        Wir nutzen Google Analytics, um unsere Website zu verbessern. Ihre IP-Adresse wird
                        anonymisiert und Daten nur mit Ihrer Zustimmung erfasst.{' '}
                        <Link href="/datenschutz" className={styles.link}>Datenschutzerklarung</Link>
                    </p>
                </div>
                <div className={styles.actions}>
                    <button onClick={() => dispatch(false)} className={styles.decline}>
                        Ablehnen
                    </button>
                    <button onClick={() => dispatch(true)} className={styles.accept}>
                        Akzeptieren
                    </button>
                </div>
            </div>
        </div>
    );
}
