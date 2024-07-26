import Image from "next/image"
import ButtonNavigation from "../ui/button/ButtonNavigation/ButtonNavigation"
import { HeaderStyle } from "./style"
import { TLitterAnimation } from "../Animated/Text/Examples/TLitterAnimation"
import { useCallback } from "react"
import AnimationY from "../Animated/Bock/AnimationY/AnimationY"
import AnimationX from "../Animated/Bock/AnimationX/AnimationX"

const socialNetworks = [
    { name: 'Telegram', href: '', src: '/networks/telegram.svg', alt: 'telegram', ariaLabel: 'Go to Telegram' },
    { name: 'Github', href: 'https://github.com/pshenmic/platform-explorer/', src: '/networks/github.svg', alt: 'github', ariaLabel: 'Go to GitHub' },
    { name: 'X.com', href: 'https://x.com/Dashpay', src: '/networks/twitter.svg', alt: 'twitter', ariaLabel: 'Go to X(twitter)' },
    { name: 'Discord', href: 'https://discord.gg/GeH3ug5G', src: '/networks/discord.svg', alt: 'discord', ariaLabel: 'Go to Discord' }
]

function Header() {
    const clickNetworks = useCallback((href) => {
        if (!href) { return }
        window.open(href)
    }, [socialNetworks])

    return (
        <HeaderStyle>
            <AnimationX className={'LogoContainer'}>
                <Image src={'/community/logoDash.svg'} width={151} height={40} alt={'dash'} />
                <TLitterAnimation letterCoeff={0.15} className={'LogoSubName'}>Testnet</TLitterAnimation>
            </AnimationX>
            <div className={'ContainerNetworks'}>
                {socialNetworks?.length
                    ? socialNetworks.map((_, i) => (
                        <AnimationY key={i} delay={i * 1000 / 3}>
                            <ButtonNavigation
                                text={_.name}
                                src={_.src}
                                alt={_.alt}
                                handleClick={() => clickNetworks(_.href)}
                                ariaLabel={_.ariaLabel}
                            />
                        </AnimationY>
                    ))
                    : null
                }
            </div>
        </HeaderStyle>
    )
}

export default Header