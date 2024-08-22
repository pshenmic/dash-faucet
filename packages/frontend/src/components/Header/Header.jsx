import { HeaderStyle } from "./style"
import { TLitterAnimation } from "../Animated/Text/Examples/TLetterAnimation"
import { useRouter } from "next/router"
import { dataHeader } from "../../lib/data"
import AnimationY from "../Animated/Block/AnimationY/AnimationY"
import AnimationX from "../Animated/Block/AnimationX/AnimationX"
import ButtonNavigation from "../UI/Button/ButtonNavigation/ButtonNavigation"
import Image from "next/image"

function Header() {
    const router = useRouter()
    const data = dataHeader

    return (
        <HeaderStyle>
            { data?.logo
                ? <AnimationX onClick={() => router.push('/')} className={'LogoContainer'}>
                    {data.logo?.icon ? <Image src={data.logo.icon} width={151} height={40} alt={data.logo?.alt} /> : null}
                    <TLitterAnimation letterCoeff={0.05} className={'LogoSubName'}>{data.logo?.subname || ''}</TLitterAnimation>
                </AnimationX>
                : null
            }
            { data?.socialNetworks?.length > 0
                ? <div className={'ContainerNetworks'}>
                    {data.socialNetworks.map((_, i) => (
                        <AnimationY key={i} delay={i * 1000 / 3}>
                            <ButtonNavigation
                                tag={'a'}
                                target={'_blank'}
                                rel={'noopener noreferrer'}
                                href={_.href || '#'}
                                text={_.name}
                                src={_.src}
                                alt={_.alt}
                                ariaLabel={_.ariaLabel}
                            />
                        </AnimationY>
                    ))}
                </div>
                : null
            }
        </HeaderStyle>
    )
}

export default Header