import useGlobalStore from "@/store/store"
import { AuthorizeStyle } from "./style"
import { easings, useSpring, animated } from "@react-spring/web"
import Image from "next/image"
import AnimationYState from "../Animated/Block/AnimationYState/AnimationYState"
import { useEffect, useState } from "react"
import BlueButton from "../UI/Button/BlueButton/BlueButton"

const buttonList = [
    { name: 'Github', icon: '/networks/github.svg', alt: 'Github', ariaLabel: 'Sign in via Github' },
    { name: 'X.com', icon: '/networks/twitter.svg', alt: 'twitter', ariaLabel: 'Sign in via Twitter' }
]

function Authorize() {
    const openAuthorizePopUp = useGlobalStore(state => state.openAuthorizePopUp)
    const setOpenAuthorizePopUp = useGlobalStore(state => state.setOpenAuthorizePopUp)
    const [transformValue, setTransformValue] = useState('translate(-50%, -30%)');
    const [pointerEvents, setPointerEvents] = useState('none');

    useEffect(() => {
        if (openAuthorizePopUp) {
            setTransformValue('translate(-50%, -50%)');
            setPointerEvents('all')
        } else {
            setTransformValue('translate(-50%, -70%)');
        }
    }, [openAuthorizePopUp]);

    const animationPopUpWrapper = useSpring({
        to: {
            opacity: openAuthorizePopUp ? '1' : '0',
            pointerEvents: pointerEvents
        },
        config: {
            duration: 400,
            easing: easings.easeOutQuad
        },
        onRest: () => {
            if (!openAuthorizePopUp) {
                setTimeout(() => { setPointerEvents('none') }, 100)
            }
        },
    })
  
    const animationPopUp = useSpring({
        transform: transformValue,
        config: {
            duration: 400,
            easing: easings.easeOutQuad
        },
        onRest: () => {
            if (!openAuthorizePopUp) {
                setTransformValue('translate(-50%, -30%)');
            }
        },
    });

    return (
        <AuthorizeStyle style={animationPopUpWrapper}>
                <div className={'Groundwork'} onClick={() => setOpenAuthorizePopUp(false)}></div>
                <animated.div className={'AuthorizePopUp'} style={ animationPopUp }>
                    <button onClick={() => setOpenAuthorizePopUp(false)} className={'Cross'}>
                        <Image src={'community/cross.svg'} width={59.5} height={59.5} alt={'cross'}/>
                    </button>
                    <AnimationYState tag={'div'} delay={50} state={openAuthorizePopUp} className={'TitleContainer'}>
                        <span>Authorize to claim 1,000 DASH <Image src={'/community/dashLogo.svg'} width={32} height={32} alt={'dash'} /></span>
                    </AnimationYState>
                    <AnimationYState tag={'p'} delay={100} state={openAuthorizePopUp}>Use one of this social network to connect</AnimationYState>
                    {buttonList?.length
                        ? <AnimationYState tag={'div'} delay={150} state={openAuthorizePopUp} className={'WrapperButton'}>
                            {buttonList.map((_, i) => (
                                <BlueButton
                                    key={i}
                                    name={_.name}
                                    ariaLabel={_.ariaLabel}
                                    iconLeft={_.icon}
                                    altIconLeft={_.alt}
                                />
                            ))}
                        </AnimationYState>
                        : null}
                </animated.div>
        </AuthorizeStyle>
    )
}

export default Authorize