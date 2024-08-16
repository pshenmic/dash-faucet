import { easings, useSpring, animated } from "@react-spring/web";
import { CallToActionStyle } from "./style";

function CallToAction({ children }) {
    const animationCallToAction = useSpring({
        from: { width: '0%' },
        to: { width: '100%' },
        config: {
            duration: 1000,
            easing: easings.easeOutQuad
        }
    });

    return (
        <CallToActionStyle>
            <animated.div style={animationCallToAction}></animated.div>
            {children}
        </CallToActionStyle>
    )
}

export default CallToAction
