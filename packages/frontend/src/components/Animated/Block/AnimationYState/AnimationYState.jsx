const { useSpring, easings, animated } = require("@react-spring/web")

function AnimationYState ({ tag = 'span', delay = 0, duration = 700, children, state, ...props }) {
    const animationY = useSpring({
        to: {
            y: state ? '0%' : '30%',
            opacity: state ? 1 : 0
        },
        config: {
            duration: duration,
            easing: easings.easeOutQuad
        },
        delay: state ? delay : 0,
    })

    const Tag = animated(tag)

    return(
        <Tag style={animationY} {...props}>
            {children}
        </Tag>
    )
}

export default AnimationYState
