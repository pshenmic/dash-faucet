import TextEngine from "../TextEngine"
import { easings } from "@react-spring/web";
import { useEffect, useState } from "react";

export const TWordByWord = ({
    children,
    ...props
}) => {
    const [rerendered, rerender] = useState(false)
    useEffect(() => void setTimeout(() => rerender(true), 10), [])

    return (
        <TextEngine
            enabled={rerendered}
            wordIn={{opacity: 1}} 
            wordOut={{opacity: 0}} 
            wordCoeff={0.5}
            wordConfig={{ duration: 700, easing: easings.easeInOutQuad }}
            mode={'once'}
            {...props}
        >
            { children }
        </TextEngine>
    )
}
