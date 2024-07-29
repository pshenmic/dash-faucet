import { useWindowSize } from "@react-hook/window-size"
import { forwardRef, useEffect, useImperativeHandle, useMemo, useState } from "react"
import styled from "styled-components"
import { animated, useSpring } from "@react-spring/web"

const StyledContainer = styled.div`
    position: fixed;
    top: 0; left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 100;
    pointer-events: none;
    z-index: 99999;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0;
`

export const TransitionBg = forwardRef(({}, outerRef) => {
    const [mounted, mount] = useState(false)
    useEffect(() => void mount(true), [])
    const [opened, open] = useState(false)
    useImperativeHandle(outerRef, () => ({ 
        show: (callback) => {
            open(true)
            setTimeout(() => {
                callback && callback()
            }, effectDuration)
        }, hide: () => open(false) 
    }))
    const size = useWindowSize()
    const [count, cubeSize] = useMemo(() => {
        const width = size[0]
        const height = size[1]
        const countX = (function () {
            if (width > 1360) return 15
            if (width > 700) return 10
            return 4
        })()
        const sizeX = width / countX
        const countY = Math.ceil(height / sizeX)
        const count = countY * countX
        return [count, 100 / countX]
    }, [size])

    if (!count || !mounted) { return null }
    return (
        <StyledContainer style={{pointerEvents: opened ? 'all' : 'none',}}>
            {[...new Array(count)].map((_, i) => <Block key={i} opened={opened} id={i} count={count} size={cubeSize}></Block>)}
        </StyledContainer>
    )
})
TransitionBg.displayName = 'TransitionBg'

const StyledBlock = styled(animated.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e6e6e6;
    opacity: 0;
`

// 2000ms - Hole time for appear
const effectDuration = 1500
const cubeDuration = 600
const randomDuration = 200 // random time for more noise effect
const deltaDuration = effectDuration - cubeDuration
function Block({ children, id, size, count, opened }) {
    const random = useMemo(() => Math.random() * randomDuration, [])
    const deltaDelay = useMemo(() => deltaDuration / count, [count])

    const values = useSpring({
        opacity: opened ? 1 : 0,
        delay: ((count - id) * deltaDelay + random),
        config: {
            duration: cubeDuration,
        }
    })

    return (
        <StyledBlock
            style={{ width: `${size}vw`, height: `${size}vw`, ...values }}
        >
            {children}
        </StyledBlock>
    )
}