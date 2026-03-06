'use client';

import styles from './CookieSettingsButton.module.css';

export default function CookieSettingsButton() {
    const handleClick = () => {
        localStorage.removeItem('cookie_consent');
        window.dispatchEvent(new Event('cookieConsentReset'));
    };

    return (
        <button onClick={handleClick} className={styles.button}>
            Cookie-Einstellungen
        </button>
    );
}
