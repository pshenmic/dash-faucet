import { useEffect, useState } from "react"
import { AnimatedRouterLayout } from "@/layouts/AnimatedRouterLayout/AnimatedRouterLayout"
import { SmartCSSGrid } from "@/styles"
import { Montserrat } from 'next/font/google'
import { CustomStyles } from "@/styles/customStyles"
import { animated } from "@react-spring/web"
import { ToastContainer } from 'react-toastify';
import { animationEllipse } from "../components/Animated/Block/CommonAnimations/CommonAnimations"
import Head from "next/head"
import GlobalStyles from "@/styles"
import Authorize from "../components/Authorize/Authorize"
import Footer from "@/components/Footer/Footer"
import Image from "next/image"
import Header from "../components/Header/Header"
import Download from "../components/Download/Download"
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router"

export const montserrat = Montserrat({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    style: ['normal', 'italic']
})

export default function App({ Component, pageProps }) {
    const Elipse = animated(Image)
    const [mounted, mount] = useState(false)
    const getLayout = Component.getLayout ?? ((page) => page)
    const router = useRouter()

    useEffect(() => { void document.body.style.removeProperty('opacity'); mount(true) }, [])

    useEffect(() => {
        const dataClear = localStorage.getItem('dataClear')
        const now = new Date()
        if ( dataClear && now.getTime() >= dataClear) {
            localStorage.clear()
        }
        const html = document.querySelector('html')
        if (!html) { return }
        html.style.setProperty('--font-montserrat', montserrat.style.fontFamily)
    }, [])

    const animation = animationEllipse()

    return (
        <>
            <Head>
                <meta name='viewport' content='width=device-width, minimum-scale=1, initial-scale=1.0' />
            </Head>
            <AnimatedRouterLayout>
                <ToastContainer />
                <GlobalStyles />
                <CustomStyles />
                <SmartCSSGrid />
                <Download />
                { mounted ?
                    <div className={'Main'}>
                        <Header />
                        <Authorize />
                        <Elipse
                            style={animation}
                            className={'Ellipse'}
                            src={'/community/ellipse.webp'}
                            alt={'ellipse'}
                            width={1560}
                            height={1560}
                        />
                        { getLayout(<Component {...pageProps} />) }
                        <Footer />
                    </div>
                : null }
            </AnimatedRouterLayout>
        </>
    )
}
