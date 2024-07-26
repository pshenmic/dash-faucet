import { FooterStyle } from "./style"
import AnimationY from "../Animated/Bock/AnimationY/AnimationY"

const listLink = [
    { name: 'Dash Mainnet', href: '', ariaLabel: 'Go to Dash Mainnet' },
    { name: 'Privacy Poslicy', href: '', ariaLabel: 'Go to Privacy Poslicy' },
    { name: 'Terms of use', href: '', ariaLabel: 'Go to Terms of use' }
]

function Footer() {
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
            <AnimationY delay={(listLink.length + 1) * 100 + 200}>©2024 · Dash Testnet Faucet</AnimationY>
        </FooterStyle>
    )
}

export default Footer
