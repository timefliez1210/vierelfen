import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/forms-detection'],
            },
        ],
        sitemap: 'https://www.vierelfen.com/sitemap.xml',
    };
}
