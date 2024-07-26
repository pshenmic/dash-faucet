import { useEffect, useRef } from "react"

export const useWaveEffect = (active, style) => {
    const ref = useRef(null)
    const size = useRef(0)
    const rippleRef = useRef(null)
    const animatingRef = useRef(false)

    // Generate Wave
    useEffect(() => {
        if (!ref.current) { return }
        rippleRef.current = document.createElement('span');
        size.current = Math.max(ref.current.offsetWidth, ref.current.offsetHeight);
        rippleRef.current.style.cssText = `
            position: absolute;
            border-radius: 100%;
            background: white;
            pointer-events: none;
            z-index: -1;
            transform: scale(0);
            opacity: 0;
            transition: transform .6s ease-in-out, opacity .6s ease-in-out;
            width: ${size.current}px;
            height: ${size.current}px;
            ${style}
        `;
        ref.current.appendChild(rippleRef.current);
        return () => {
            if (rippleRef.current) {
                rippleRef.current.remove()
            }
        }
    }, [])

    // Move Wave
    useEffect(() => {
        const moveWave = (e) => {
            if (!rippleRef.current || !ref.current || animatingRef.current) { return }
            const size =  Math.max(ref.current.offsetWidth, ref.current.offsetHeight);
            e.preventDefault();
            const x = e.offsetX - size / 2;
            const y = e.offsetY - size / 2;
            rippleRef.current.style.setProperty('top', `${y}px`);
            rippleRef.current.style.setProperty('left', `${x}px`);
        }
        ref.current.addEventListener('mousemove', moveWave);
        return () => {
            ref.current.removeEventListener('mousemove', moveWave);
        }
    }, [])

    // Toggle Wave
    useEffect(() => {
        if (!rippleRef.current) { return }
        if (active) {
            animatingRef.current = true
            rippleRef.current.style.setProperty('transform', 'scale(3)');
            rippleRef.current.style.setProperty('opacity', '1');
        } else {
            animatingRef.current = false
            rippleRef.current.style.setProperty('transform', 'scale(0)');
            rippleRef.current.style.setProperty('opacity', '0');
        }
    }, [active])

    return ref
}

export default useWaveEffect