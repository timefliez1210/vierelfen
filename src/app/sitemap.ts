import { MetadataRoute } from 'next';

const BASE_URL = 'https://www.vierelfen.com';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        // Core pages
        {
            url: `${BASE_URL}/`,
            lastModified: new Date('2026-03-06'),
        },
        {
            url: `${BASE_URL}/kindergeburtstage`,
            lastModified: new Date('2026-03-06'),
        },
        {
            url: `${BASE_URL}/ablauf`,
            lastModified: new Date('2026-02-17'),
        },
        {
            url: `${BASE_URL}/kontakt`,
            lastModified: new Date('2026-02-17'),
        },
        {
            url: `${BASE_URL}/faq`,
            lastModified: new Date('2026-02-17'),
        },
        {
            url: `${BASE_URL}/impressum`,
            lastModified: new Date('2026-03-03'),
        },
        {
            url: `${BASE_URL}/datenschutz`,
            lastModified: new Date('2026-02-17'),
        },
        // Ideenschmiede hub + articles
        {
            url: `${BASE_URL}/ideen`,
            lastModified: new Date('2026-03-30'),
        },
        {
            url: `${BASE_URL}/ideen/kindergeburtstag`,
            lastModified: new Date('2026-03-30'),
        },
        {
            url: `${BASE_URL}/ideen/feiern`,
            lastModified: new Date('2026-03-30'),
        },
        {
            url: `${BASE_URL}/ideen/spieltermin`,
            lastModified: new Date('2026-03-30'),
        },
    ];
}
