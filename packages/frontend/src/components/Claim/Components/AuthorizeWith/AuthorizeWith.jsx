import { AuthorizeWithStyle } from "./style";
import { TLitterAnimation } from "@/components/Animated/Text/Examples/TLetterAnimation"
import { useCallback } from "react";
import { destroyCookie, parseCookies } from "nookies";
import { useRouter } from "next/router";
import { stepHeader } from "../../../../lib/stepData";
import Image from "next/image";
import ButtonNavigation from "../../../UI/Button/ButtonNavigation/ButtonNavigation";
import useGlobalStore from "../../../../store/store";
import AnimationX from "../../../Animated/Block/AnimationX/AnimationX";

function AuthorizeWith() {
    const setOpenAuthorizePopUp = useGlobalStore(state => state.setOpenAuthorizePopUp)
    const router = useRouter()
    const cookies = parseCookies()
    const data = stepHeader(cookies.authMethodDashFaucet)
    
    const deauthorize = useCallback(() => {
        destroyCookie(null, 'jwtDashFaucet')
        destroyCookie(null, 'authMethodDashFaucet')
        router.push('/')
        setOpenAuthorizePopUp(true)
    },[])

    return (
        <AuthorizeWithStyle>
            <AnimationX duration={1000}>
                <ButtonNavigation src={'/community/arrow.svg'} className={'Arrow'} ariaLabel={'deauthorize'} handleClick={deauthorize}/>
            </AnimationX>
            {data?.text ? 
                <TLitterAnimation className={'Text'} letterCoeff={0.1}>{data.text}</TLitterAnimation>
            : null}
            {data?.src ?
            <AnimationX delay={2150} duration={1000}>
                <Image src={data.src} width={33} height={33} alt={data.alt}/>
            </AnimationX>
            : null}
        </AuthorizeWithStyle>
    )
}

export default AuthorizeWith