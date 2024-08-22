import Head from 'next/head'
import Claim from '../components/Claim/Claim'

export default function Home() {
    return (
        <>
            <Head>
                <title key={'title'}>DASH Faucet</title>
                <meta name={'viewport'} content={'width=device-width, minimum-scale=1, initial-scale=1.0'} />
            </Head>
            <Claim />
        </>
    )
}
