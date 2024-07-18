import Head from "next/head"
import { useEffect } from "react"

import { AnimatedRouterLayout } from "@/layouts/AnimatedRouterLayout/AnimatedRouterLayout"

import GlobalStyles from "@/styles"
import { SmartCSSGrid } from "@/styles"

import { Montserrat } from 'next/font/google'

export const montserrat = Montserrat({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    style: ['normal', 'italic']
})

export default function App({ Component, pageProps }) {
    useEffect(() => void document.body.style.removeProperty('opacity'), [])
    useEffect(() => {
        const html = document.querySelector('html')
        if (!html) { return }
        html.style.setProperty('--font-montserrat', montserrat.style.fontFamily)
    }, [])
    return (
        <>
            <Head>
                <meta name='viewport' content='width=device-width, minimum-scale=1, initial-scale=1.0' />
            </Head>
            <AnimatedRouterLayout>
                {/* Normalize & Global Styles */}
                <GlobalStyles />

                {/* Grid to scale sizes, configure it in styles/index.ts */}
                <SmartCSSGrid />

                <Component {...pageProps} />
            </AnimatedRouterLayout>
        </>
    )
}
