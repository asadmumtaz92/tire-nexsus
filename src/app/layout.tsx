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
    title: 'Tire Nexsus',
    description: 'This Website design for Tire Nexsus.',
    keywords: [
        'Tire Nexsus',
        'Tyres',
    ],
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
