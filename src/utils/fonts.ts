import { Inter, Jost, } from 'next/font/google'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

const jost = Jost({
    subsets: ['latin'],
    variable: '--font-jost',
})

export const Fonts = {
    'inter': inter.className,
    'jost': jost.variable,
}
