export const PRICING = {
    party: {
        weekday: {
            label: 'Mo – Do',
            price: 330,
            priceFormatted: '330 €',
        },
        weekend: {
            label: 'Fr – So & Feiertage',
            price: 390,
            priceFormatted: '390 €',
        },
        duration: '4 Stunden',
        maxPersons: 30,
        extraTime: {
            label: 'Jede zusätzliche Viertelstunde',
            price: 30,
            priceFormatted: '30 €',
        },
        deposit: {
            amount: 150,
            amountFormatted: '150 €',
        },
        earlyArrival: '30 Minuten',
    },
    openPlay: {
        duration: '2 Stunden',
        adults: {
            label: 'Erwachsene',
            price: 5,
            priceFormatted: '5 €',
        },
        children: {
            label: 'Kinder',
            price: 10,
            priceFormatted: '10 €',
        },
    },
    addons: [
        {
            name: 'Kaffeemaschine',
            price: '30 €',
            note: 'All you can drink',
        },
        {
            name: 'Popcornmaschine',
            price: '25 €',
            note: null,
        },
        {
            name: 'Bunte Tüten',
            price: 'nach Absprache',
            note: null,
        },
    ],
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
