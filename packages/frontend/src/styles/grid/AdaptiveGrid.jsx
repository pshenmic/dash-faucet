// This hook lineary scale fonts

import { useCallback, useEffect, useRef } from "react";

export const interpolateFontSize = (baseFontSize, baseWidth, windowWidth, coef) => {
    const widthPercentageReduction = (baseWidth - windowWidth) / baseWidth * 100;
    const fontSizePercentageReduction = widthPercentageReduction * coef;
    const interpolatedFontSize = baseFontSize - (baseFontSize * fontSizePercentageReduction / 100);
  
    return interpolatedFontSize;
}

export const useGrid = ({ baseWidth, coef = 0.6666 }) => {
    const baseFontSize = 16
    const calculate = useCallback(() => {
        if (!window) { return }
        const dom = document.documentElement
        if (!dom) { return }
        const size = interpolateFontSize(baseFontSize, baseWidth, window.innerWidth, coef)
        if (size>baseFontSize) {
            dom.style.setProperty('font-size', `${size}px`)
        } else {
            dom.style.removeProperty('font-size')
        }
    }, [baseWidth, coef])
    useEffect(() => void calculate(), [])
    return [calculate]
}

export const AdaptiveGrid = ({ baseWidth, coef }) => {
    const [calculate] = useGrid({ baseWidth, coef })
    useResizeLoop(() => calculate())
    return null
}

export const useResizeLoop = (onResize, props) => {
    const width = useRef(0)
    useLoop((time) => {
        if (width.current !== window.innerWidth) {
            onResize && onResize(time)
            width.current = window.innerWidth
        }
    }, props)
}

export const useLoop = (onRender, props) => {
    useEffect(() => {
        let rq
        let startTime = performance.now()
        props?.onMount && props.onMount()
        render(0)
        function render( time ) {
            if (time - startTime > (props?.framerate || 100)) {
                onRender(time)
                startTime = performance.now()
            }
            rq = requestAnimationFrame(render)
        }
        return () =>  { cancelAnimationFrame(rq); props?.onUnMount && props.onUnMount() }
    }, [])
}