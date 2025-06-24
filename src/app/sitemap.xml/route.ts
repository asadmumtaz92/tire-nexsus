import { NextResponse } from 'next/server'

export async function GET() {

    const baseUrl = 'https://www.tirenexsus.com'
    const lastMod = new Date().toISOString()
    const urls: string[] = []

    const staticRoutes = [
        { loc: '', changefreq: 'monthly', priority: 1 },
        { loc: '#for-suppliers', changefreq: 'weekly', priority: 0.5 },
        { loc: '#for-customers', changefreq: 'weekly', priority: 0.5 },
        { loc: '#contact', changefreq: 'monthly', priority: 0.5 },
    ]

    for (const route of staticRoutes) {
        const defaultUrl = `${baseUrl}/${route.loc}`
        urls.push(`<url>
            <loc>${defaultUrl}</loc>
            <lastmod>${lastMod}</lastmod>
            <changefreq>${route.changefreq}</changefreq>
            <priority>${route.priority}</priority>
        </url>`)
    }

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${urls.join('\n')}
        </urlset>
    `

    return new NextResponse(sitemap, {
        headers: {
            'Content-Type': 'application/xml',
        },
    })
}
