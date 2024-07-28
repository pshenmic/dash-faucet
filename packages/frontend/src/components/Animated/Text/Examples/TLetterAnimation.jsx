import TextEngine from "../TextEngine"
import { easings } from "@react-spring/web";
import { useEffect, useState } from "react";

export const TLitterAnimation = ({
    children,
    ...props
}) => {
    const [rerendered, rerender] = useState(false)
    useEffect(() => void setTimeout(() => rerender(true), 100), [])

    return (
        <TextEngine
            enabled={rerendered}
            letterIn={{opacity: 1}} 
            letterOut={{opacity: 0}} 
            letterConfig={{ duration: 500, easing: easings.easeInOutQuad }}
            mode={'once'}
            {...props}
        >
            { children }
        </TextEngine>
    )
}
