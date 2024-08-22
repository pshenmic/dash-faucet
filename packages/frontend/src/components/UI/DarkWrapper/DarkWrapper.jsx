import { easings, useSpring } from "@react-spring/web";
import { DarkWrapperStyle } from "./style";

function DarkWrapper ({ open, children }) {
    const animationPopUpWrapper = useSpring({
        to: {
            opacity: open ? '1' : '0',
            pointerEvents: open ? 'all' : 'none'
        },
        config: {
            duration: 400,
            easing: easings.easeOutQuad
        }
    })

    return(
        <DarkWrapperStyle style={ animationPopUpWrapper }>
            {children}
        </DarkWrapperStyle>
    )
}

export default DarkWrapper
