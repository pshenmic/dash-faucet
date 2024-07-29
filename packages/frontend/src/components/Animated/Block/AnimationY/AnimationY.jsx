const { useSpring, easings, animated } = require("@react-spring/web")

function AnimationY ({ tag = 'span', delay = 0, initialY='30%', duration = 700, children, ...props }) {
    const animationY = useSpring({
        from: {
            y: initialY,
            opacity: 0
        },
        to: {
            y: '0%',
            opacity: 1
        },
        config: {
            duration: duration,
            easing: easings.easeOutQuad
        },
        delay: delay
    })

    const Tag = animated(tag)

    return(
        <Tag style={animationY} {...props}>
            {children}
        </Tag>
    )
}

export default AnimationY
