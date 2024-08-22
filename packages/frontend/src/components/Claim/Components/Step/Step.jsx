import AnimationY from "../../../Animated/Block/AnimationY/AnimationY";
import { TLitterAnimation } from "../../../Animated/Text/Examples/TLetterAnimation";
import ButtonStep from "../../../UI/Button/ButtonStep/ButtonStep";
import { StepStyle } from "./style";

function Step ({ title, subtitle, dataButton, numbeOfUncompletedTasks, handleTaskCompletion }) {
    return(
        <StepStyle>
            <TLitterAnimation tag={'p'} letterCoeff={0.05} className={'Title'}>{title}</TLitterAnimation>
            <TLitterAnimation tag={'p'} letterCoeff={0.05} className={'Subtitle'}>{subtitle}</TLitterAnimation>
            <div className={'WrapperButton'}>
                {dataButton.map((_, i) => (
                    <AnimationY key={i} delay={(i + 1) * 300} duration={1000}>
                        <ButtonStep
                            numbeOfUncompletedTasks={numbeOfUncompletedTasks}
                            handleTaskCompletion={handleTaskCompletion}
                            text={_.text}
                            leftIcon={_.leftIcon || null}
                            rightIcon={_.rightIcon || null}
                            handleClick={_.handleClick}
                            ariaLabel={_.ariaLabel}
                            finished={_.finished}
                            executed={_.executed}
                        />
                    </AnimationY>
                ))}
            </div>
        </StepStyle>
    )
}

export default Step
