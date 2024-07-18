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
            wordCoeff={0.25}
            wordConfig={{ duration: 1500, easing: easings.easeInOutQuad }}
            {...props}
        >
            { children }
        </TextEngine>
    )
}