import { useCallback, useRef } from "react"
import ButtonNavigation from "../../../UI/button/ButtonNavigation/ButtonNavigation"
import { easings, useSpring } from "@react-spring/web"
import { TLitterAnimation } from "@/components/Animated/Text/Examples/TLetterAnimation"
import AnimationY from "@/components/Animated/Block/AnimationY/AnimationY"
import { ClaimInputStyle } from "./style"

function ClaimInput({ subtitle, nameButton, handleClick, inputValue, setInputValue, placeholder }) {
    const inputRef = useRef(null)

    const clickFocus = useCallback(() => {
        if (!inputRef.current) { return }
        inputRef.current.focus()
    }, [inputRef])

    const animationInputWrapper = useSpring({
        from: { width: '0%' },
        to: { width: '100%' },
        config: {
            duration: 1000,
            easing: easings.easeOutQuad
        },
    });

    return (
        <ClaimInputStyle style={animationInputWrapper} onClick={clickFocus}>
            <span className={'WrapperInput'}>
                <TLitterAnimation letterCoeff={0.05} letterDelayIn={900} tag={'p'}>{subtitle}</TLitterAnimation>
                <AnimationY tag={'label'} delay={900} duration={500}>
                    <input
                        type={'text'}
                        ref={inputRef}
                        autoFocus={true}
                        placeholder={placeholder}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        aria-label={subtitle}
                        aria-required={'true'}
                    />
                </AnimationY>
            </span>
            <AnimationY delay={1300} duration={500}>
                <ButtonNavigation
                    text={nameButton}
                    handleClick={handleClick}
                    ariaLabel={'submit a form'}
                    className={'Button'}
                />
            </AnimationY>
        </ClaimInputStyle>
    )
}

export default ClaimInput