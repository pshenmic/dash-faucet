import { AuthorizeStyle } from "./style"
import { useCallback } from "react"
import { useRouter } from "next/router"
import { authorization } from "../../tests/authorization"
import { showToast } from "../../lib/showToast"
import { dataAuthorize } from "../../lib/data"
import { animationPopUp } from "../Animated/Block/CommonAnimations/CommonAnimations"
import AnimationYState from "../Animated/Block/AnimationYState/AnimationYState"
import DarkWrapper from "../UI/DarkWrapper/DarkWrapper"
import useGlobalStore from "@/store/store"
import BlueButton from "../UI/Button/BlueButton/BlueButton"
import Image from "next/image"

function Authorize() {
    const data = dataAuthorize
    const openAuthorizePopUp = useGlobalStore(state => state.openAuthorizePopUp)
    const setOpenAuthorizePopUp = useGlobalStore(state => state.setOpenAuthorizePopUp)
    const selectedRadioValue = useGlobalStore(state => state.selectedRadioValue)
    const setLoader = useGlobalStore(state => state.setLoader)
    const router = useRouter()
   
    const transitions = animationPopUp(openAuthorizePopUp)
   
    const auth = useCallback( async (method) => {
        setLoader(true)
        setOpenAuthorizePopUp(false)
        const dashMissionAccomplished = localStorage.getItem('dashMissionAccomplished');
        await authorization(method)
            .then((_) => {
                setLoader(false)
                if (_) {
                    if (!dashMissionAccomplished && selectedRadioValue !== '1') {
                        router.push('/follow')
                    } else {
                        router.push('/faucet')
                    }
                    showToast('success', 'Github authorised')
                }
            })
            .catch((error) => {
                //TODO error handling
                console.error(error)
                setLoader(false)
            })
    }, [selectedRadioValue])

    return (
        <DarkWrapper open={openAuthorizePopUp} click={() => setOpenAuthorizePopUp(false)}>
            { transitions((style, item) =>
                item 
                ? <AuthorizeStyle key={openAuthorizePopUp ? 'open' : 'closed'} className={'AuthorizePopUp'} style={style}>
                    <button onClick={() => setOpenAuthorizePopUp(false)} className={'Cross'}>
                        <Image loading={'eager'} src={'community/cross.svg'} width={59.5} height={59.5} alt={'cross'} />
                    </button>
                    {data?.title
                        ? <AnimationYState tag={'div'} delay={50} state={openAuthorizePopUp} className={'TitleContainer'}>
                            <span>
                                {data.title}
                                {data?.iconDash?.src
                                    ? <Image loading={'eager'} src={data.iconDash.src} width={32} height={32} alt={data.iconDash?.alt || ''} />
                                    : null
                                }
                            </span>
                        </AnimationYState>
                        : null
                    }
                    {data?.subtitle
                        ? <AnimationYState tag={'p'} delay={100} state={openAuthorizePopUp}>{data.subtitle}</AnimationYState>
                        : null
                    }
                    {data?.buttonList?.length > 0
                        ? <AnimationYState tag={'div'} delay={150} state={openAuthorizePopUp} className={'WrapperButton'}>
                            {data.buttonList.map((_, i) => (
                                <BlueButton
                                    handleClick={() => auth(_.name)}
                                    key={i}
                                    name={_.name}
                                    ariaLabel={_.ariaLabel}
                                    iconLeft={_.icon}
                                    altIconLeft={_.alt}
                                />
                            ))}
                        </AnimationYState>
                        : null
                    }
                </AuthorizeStyle>
                : null
            )}
        </DarkWrapper>
    )
}

export default Authorize
