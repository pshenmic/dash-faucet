import { ClaimHeaderStyle } from "./style"
import { TLitterAnimation } from "@/components/Animated/Text/Examples/TLetterAnimation"
import SvgAnimation from "./SvgAnimation"
import AnimationX from "../../../Animated/Block/AnimationX/AnimationX"

function ClaimHeader ({ firstTitle, secondTitle, description }) {
    return(
        <ClaimHeaderStyle>
            <AnimationX tag={'div'} duration={1000} className={'Animation'}>
                <SvgAnimation />
            </AnimationX>
            <div className={'WrapperText'}>
                <span className={'Title'}>
                    { firstTitle
                        ? <TLitterAnimation letterCoeff={0.05}>{firstTitle}</TLitterAnimation>
                        : null
                    }
                    { secondTitle 
                        ? <TLitterAnimation letterCoeff={0.05} letterDelayIn={800}>{secondTitle}</TLitterAnimation> 
                        : null 
                    }
                </span>
                { description
                    ? <TLitterAnimation letterCoeff={0.05} tag={'p'}>{description}</TLitterAnimation>
                    : null
                }
            </div>
        </ClaimHeaderStyle>
    )
}

export default ClaimHeader
