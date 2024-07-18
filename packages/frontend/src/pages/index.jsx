import Head from 'next/head'
import { TWordByWord } from '@/components/Animated/Text/Examples/TWordByWord'

export default function Home() {
    return (
        <>
            <Head>
                <title key="title">DASH Faucet</title>
                <meta name='viewport' content='width=device-width, minimum-scale=1, initial-scale=1.0' />
            </Head>
            <TWordByWord tag="h1">Welcome to DASH faucet :p</TWordByWord>
        </>
    )
}
