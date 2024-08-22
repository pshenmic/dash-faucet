import { FooterStyle } from "./style"
import AnimationY from "../Animated/Block/AnimationY/AnimationY"
import { useMemo } from "react"
import { dataFooter } from "../../lib/data"

function Footer() {
    const year = useMemo(() => new Date().getFullYear(),[])
    const data = dataFooter(year)

    return (
        <FooterStyle>
            <div className={'WrapperLinkList'}>
                { data?.listLink?.length > 0
                    ? data.listLink.map((_, i) => (
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
                    : null
                }
            </div>
            <AnimationY delay={(data?.listLink?.length + 1) * 100 + 200}>{data?.copyrights || ''}</AnimationY>
        </FooterStyle>
    )
}

export default Footer
