import { CoinsSentStyle } from "./style"
import { TWordByWord } from "../../../Animated/Text/Examples/TWordByWord"
import ClaimHeader from "../ClaimHeader/ClaimHeader"
import BlueButton from "../../../UI/Button/BlueButton/BlueButton"
import InstantSend from "../../../UI/InstantSend/InstantSend"
import Confirmations from '../Confirmations/Confirmations'
import Line from "../../../UI/Line/Line"
import AnimationY from "../../../Animated/Block/AnimationY/AnimationY"
import { useCallback } from "react"
import { useRouter } from "next/router"

function FaucetCoinsSent ({ data }) {
    const router = useRouter()
    
    const handleLink = useCallback((url) => {
        if (url[0] === '/') {
            router.push(url)
            return
        } 
        window.open(url)
    }, [router])

    return (
        <CoinsSentStyle>
            { data?.claimHeader
                ?  <ClaimHeader
                        firstTitle={data.claimHeader?.firstTitle || ''}
                        secondTitle={data.claimHeader?.secondTitle || ''}
                        description={data.claimHeader?.description || ''}
                    />
                : null
            }
            <Line />
            { data?.title 
                ? <TWordByWord tag={'p'} letterCoeff={0.3} className={'Title'}>{data.title}</TWordByWord>
                : null
            }
            { data?.conditions?.length > 0
                ? data.conditions.map((_, i) => (
                    <div key={i} className={'Conditions'}>
                        <TWordByWord tag={'p'} letterCoeff={0.3} className={'Conditions__Name'}>{_.name}</TWordByWord>
                        <TWordByWord tag={'p'} letterCoeff={0.3} className={'Conditions__Value'}>{_.value}</TWordByWord>
                    </div>
                ))
                : null
            }
            { data?.button?.length > 0
                ? <div className={'WrapperBlueButton'}>
                        { data.button.map((_, i) => (
                            <AnimationY key={i} delay={(i + 1) * 300} duration={1000}>
                                <BlueButton handleClick={() => handleLink(_.url)} name={_.name} ariaLabel={_.ariaLabel}/>
                            </AnimationY>
                        ))}
                  </div>
                : null 
            }
            <div className={'Conditions'}>
                <TWordByWord tag={'p'} letterCoeff={0.3} className={'Conditions__Name'}>{data?.confirmationsName || ''}</TWordByWord>
                <div className={'Conditions__ConfirmationInformation'}>
                    { data?.textInstantSend
                        ? <AnimationY delay={300} duration={1000}>
                            <InstantSend text={data.textInstantSend}/> 
                            </AnimationY>
                        : null
                    }
                    <AnimationY delay={600} duration={1000}>
                        <Confirmations />
                    </AnimationY>
                </div>
            </div>
        </CoinsSentStyle>
    )
}

export default FaucetCoinsSent
