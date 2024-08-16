import TextEngine from "../TextEngine"
import { easings } from "@react-spring/web";
import { useEffect, useState } from "react";

export const TWordByWord = ({
    children,
    ...props
}) => {
    const [rerendered, rerender] = useState(false)
    useEffect(() => void setTimeout(() => rerender(true), 100), [])

    return (
        <TextEngine
            enabled={rerendered}
            wordIn={{opacity: 1}}
            wordOut={{opacity: 0}}
            wordConfig={{ duration: 1000, easing: easings.easeInOutQuad }}
            mode={'once'}
            wordDelayIn={250}
            wordCoeff={0.3}
            {...props}
        >
            { children }
        </TextEngine>
    )
}
