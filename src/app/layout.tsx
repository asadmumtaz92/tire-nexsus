import React from "react"
import "./globals.css"
import { Inter, Jost, } from 'next/font/google'
const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})
const jost = Jost({
    subsets: ['latin'],
    variable: '--font-jost',
})

import type { Metadata } from "next"
export const metadata: Metadata = {
    title: 'Tire Nexsus | Buy new tires online at affordable prices',
    description: 'Buy new tyres online at Tire Nexsus. Affordable prices, fast shipping across USA, and a wide selection of premium brands for every vehicle type.',
    keywords: [
        'TireNexsus',
        'Tire Nexsus',
        'Buy new tyres online',
        'Affordable car tyres in USA',
        'Cheap winter tyres for sale',
        'Premium summer tyres',
        'Tyres with fast delivery',
        'Order tyres online Europe',
        'All-season tyres for cars',
        'TireNexsus online tyre shop',
    ],
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
    alternates: {
        canonical: `https://www.tirenexsus.com`,
        languages: {
            'en-US': 'https://www.tirenexsus.com',
        },
    },
    openGraph: {
        title: `Tire Nexsus - Buy Tyres Online`,
        description: `Buy affordable prices, fast delivery of quality tyres across United State America.`,
        url: 'https://www.tirenexsus.com',
        siteName: 'Tire Nexsus',
        locale: 'en_US',
        type: 'website',
        images: [
            {
                url: 'https://www.tirenexsus.com/og-image.jpg',
                width: 1200,
                height: 630,
                alt: `Tire Nexsus`,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: `Tire Nexsus - Buy Tyres Online`,
        description: `Buy affordable prices, fast delivery of quality tyres across United State America.`,
        images: ['https://www.tirenexsus.com/og-image.jpg'],
    },
}

import Header from "@/components/header/page"
import Footer from "@/components/footer/page"

interface RootLayoutProps {
    readonly children: React.ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {

    return (
        <html lang="en">
            <body className={`${inter.className} ${jost.variable} antialiased w-full h-full`}>
                <Header />
                <div className="flex flex-col w-full min-h-screen">
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    )
}

export default RootLayout
