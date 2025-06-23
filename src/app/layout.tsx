import React from "react"
import "./globals.css"
import { Fonts } from "@/utils/fonts"
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
            <body className={`${Fonts.inter} ${Fonts.jost} antialiased w-full h-full`}>
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
