const { useSpring, easings, animated } = require("@react-spring/web")

function AnimationX ({ tag = 'span', delay = 0, duration = 500, children, ...props }) {
    const animationX = useSpring({
        from: {
            x: '-30%',
            opacity: 0
        },
        to: {
            x: '0%',
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
        <Tag style={animationX} {...props}>
            {children}
        </Tag>
    )
}

export default AnimationX
