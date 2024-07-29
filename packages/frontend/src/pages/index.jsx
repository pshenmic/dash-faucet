import Head from 'next/head'
import Header from '@/components/Header/Header'
import Image from 'next/image'
import Footer from '@/components/Footer/Footer'
import { useEffect, useState } from "react"
import Authorize from '@/components/Authorize/Authorize'
import { easings, useSpring, animated } from '@react-spring/web'
import Claim from '@/components/Claim/Claim'


export default function Home() {
    const Elipse = animated(Image)
    const [mounted, mount] = useState(false)
    useEffect(() => void mount(true), [])

    const animationEllipse = useSpring({
        from: {
            transform: 'translate(-50%, 100%)',
            opacity: 0
        },
        to: {
            transform: 'translate(-50%, 0%)',
            opacity: 1
        },
        config: {
            duration: 1500,
            easing: easings.easeOutQuad
        },
        delay: 300
    })

    return (
        <>
            <Head>
                <title key={'title'}>DASH Faucet</title>
                <meta name={'viewport'} content={'width=device-width, minimum-scale=1, initial-scale=1.0'} />
            </Head>
            {
                mounted
                    ? <div className={'Main'}>
                        <Header />
                        <Claim />
                        <Authorize />
                        <Elipse
                            style={animationEllipse}
                            className={'Ellipse'}
                            src={'/community/ellipse.webp'}
                            alt={'ellipse'}
                            width={1560}
                            height={1560} />
                        <Footer />
                    </div>
                    : null
            }
        </>
    )
}
