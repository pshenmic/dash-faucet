import { FooterStyle } from "./style"
import AnimationY from "../Animated/Block/AnimationY/AnimationY"
import { useMemo } from "react"

const listLink = [
    { name: 'Dash Mainnet', href: '', ariaLabel: 'Go to Dash Mainnet' },
    { name: 'Privacy Policy', href: '', ariaLabel: 'Go to Privacy Policy' },
    { name: 'Tearm of Use', href: '', ariaLabel: 'Go to Terms of Use' }
]

function Footer() {
    const data = useMemo(() => new Date().getFullYear(),[])

    return (
        <FooterStyle>
            <div className={'WrapperLinkList'}>
                {listLink?.length
                    ? listLink.map((_, i) => (
                        <AnimationY key={i} className={'ContainerLink'} delay={(i + 1) * 200}>
                            <a
                                href={_.href || '#'}
                                target={'_blank'}
                                rel={'noopener noreferrer'}
                                tag={'a'}
                                aria-label={_.ariaLabel}>
                                {_.name}
                            </a>
                            <p>·</p>
                        </AnimationY>
                    ))
                    : null}
            </div>
            <AnimationY delay={(listLink.length + 1) * 100 + 200}>©{data} · Dash Testnet Faucet</AnimationY>
        </FooterStyle>
    )
}

export default Footer
