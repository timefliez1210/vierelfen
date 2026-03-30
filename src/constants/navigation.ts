export const NAV_LINKS = [
    { href: '/', label: 'Home' },
    { href: '/ideen', label: 'Ideen' },
    { href: '/kindergeburtstage', label: 'Preise' },
    { href: '/ablauf', label: 'Regeln' },
    { href: '/kontakt', label: 'Kontakt' },
] as const;

export const FOOTER_LINKS = {
    info: [
        { href: '/ideen', label: 'Ideenschmiede' },
        { href: '/kindergeburtstage', label: 'Kindergeburtstage' },
        { href: '/ablauf', label: 'Ablauf & Regeln' },
        { href: '/faq', label: 'Häufige Fragen' },
        { href: '/kontakt', label: 'Kontakt & Buchung' },
    ],
    legal: [
        { href: '/impressum', label: 'Impressum' },
        { href: '/datenschutz', label: 'Datenschutz' },
    ],
} as const;

export const ROUTES = {
    home: '/',
    ideen: '/ideen',
    ideenKindergeburtstag: '/ideen/kindergeburtstag',
    ideenFeiern: '/ideen/feiern',
    ideenSpieltermin: '/ideen/spieltermin',
    prices: '/kindergeburtstage',
    rules: '/ablauf',
    contact: '/kontakt',
    faq: '/faq',
    imprint: '/impressum',
    privacy: '/datenschutz',
} as const;
