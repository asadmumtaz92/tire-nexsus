import type { Metadata } from "next"
import "./globals.css"
import { Fonts } from "@/utils/fonts"

export const metadata: Metadata = {
    title: 'Tire Nexsus',
    description: 'This Website design for Tire Nexsus.',
    keywords: [
        'Tire Nexsus',
        'Tyres',
    ],
}

interface RootLayoutProps {
    readonly children: React.ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
    return (
        <html lang="en">
            <body className={`${Fonts.inter} ${Fonts.jost} antialiased`}>
                {children}
            </body>
        </html>
    );
}

export default RootLayout
