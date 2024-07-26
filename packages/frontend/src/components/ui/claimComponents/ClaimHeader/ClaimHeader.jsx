import { ClaimHeaderStyle } from "./style"
import { TLitterAnimation } from "@/components/Animated/Text/Examples/TLitterAnimation"
import SvgAnimation from "./SvgAnimation"

function ClaimHeader ({ firstTitle, secondTitle, description }) {
    return(
        <ClaimHeaderStyle>
            <div className={'Animation'}>
                <SvgAnimation />
            </div>
            <div className={'WrapperText'}>
                <span className={'Title'}>
                    <TLitterAnimation letterCoeff={0.1}>{firstTitle}</TLitterAnimation>
                    <TLitterAnimation letterCoeff={0.1} letterDelayIn={800}>{secondTitle}</TLitterAnimation>
                </span>
                <TLitterAnimation letterCoeff={0.05} tag={'p'}>{description}</TLitterAnimation>
            </div>
        </ClaimHeaderStyle>
    )
}

export default ClaimHeader