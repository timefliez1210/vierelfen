export const PRICING = {
    weekday: {
        label: 'Montag – Donnerstag',
        price: 330,
        priceFormatted: '330 €',
    },
    weekend: {
        label: 'Freitag – Sonntag & Feiertage',
        price: 390,
        priceFormatted: '390 €',
    },
    duration: '4 Stunden',
    earlyArrival: '30 Minuten',
} as const;

export const CAPACITY = {
    total: 30,
    maxChildren: 15,
    maxAdults: 15,
} as const;

export const PACKAGE_INCLUDES = {
    rooms: [
        'Sitzbereich',
        'Spielbereich',
        'Küche',
        'WC',
    ],
    extras: [
        'Das gewählte Kindergeburtstags-Motto',
        'Dekoration mit Ballons',
        'Eingedeckter Tisch für die Kinder',
        '3 Liter Getränke (Tafelwasser & Apfelschorle)',
        'Knabbereien-Teller für die Kinder',
    ],
} as const;

export const EVENT_TYPES = [
    { value: 'kindergeburtstag', label: 'Kindergeburtstag' },
    { value: 'babyparty', label: 'Babyparty' },
    { value: 'taufe', label: 'Taufe' },
    { value: 'sonstige', label: 'Sonstige Feier' },
] as const;
