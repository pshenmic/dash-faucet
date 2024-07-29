import { useEffect, useRef } from "react"

function useRipple (handleClick) {
    const ref = useRef(null)

    useEffect(() => {
        if (!ref.current) { return }

        const click = (e) => {
            const
                size = Math.max(ref.current.offsetWidth, ref.current.offsetHeight),
                x = e.offsetX - size / 2,
                y = e.offsetY - size / 2,
                wave = document.createElement('span')
            wave.style.cssText = `
                width:${size}px;
                height:${size}px;
                top:${y}px;
                left:${x}px;
                background: white;
                border-radius: 100%;
                transform: scale(0);
                opacity: 0.5;
                transition: transform .6s ease-in-out, opacity .6s ease-in-out;
                pointer-events: none;
                position: absolute;
                z-index: 20;
            `;
            ref.current.appendChild(wave)

            setTimeout(() => {
                wave.style.transform = 'scale(2)';
                wave.style.opacity = '0';
            }, 30)

            setTimeout(() => wave.remove(), 1000)
             
            if (handleClick) {
                handleClick()
            }
        }

        const element = ref.current;

        if (element) {
            element.addEventListener('click', click);
        }

        return () => {
            if (element) {
                element.removeEventListener('click', click);
            }
        }
    }, [handleClick])

    return ref
}

export default useRipple