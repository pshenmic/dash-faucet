import { easings, useSpring, animated } from "@react-spring/web"
import { colors, rm } from "../../../styles"

function Line () {
    const animation = useSpring({
        from: {
          width: '0%',
          backgroundColor: colors.white100,
          height: rm(2),
          opacity: 0.18
        },
        to: {
          width: '100%'
        },
        config: {
          duration: 2000,
          easing: easings.easeOutQuad
        },
        delay: 100
    })

    return(
        <animated.div style={animation}></animated.div>
    )
}

export default Line