'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

const GA_ID = 'G-H1JJ6X28SL';

export default function Analytics() {
    const [consent, setConsent] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('cookie_consent') === 'accepted') {
            setConsent(true);
        }

        const handler = (e: Event) => {
            setConsent((e as CustomEvent<{ accepted: boolean }>).detail.accepted);
        };
        window.addEventListener('cookieConsent', handler);
        return () => window.removeEventListener('cookieConsent', handler);
    }, []);

    if (!consent) return null;

    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">{`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { anonymize_ip: true });
            `}</Script>
        </>
    );
}
