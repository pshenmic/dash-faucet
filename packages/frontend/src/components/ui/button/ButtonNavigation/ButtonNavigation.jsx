import useRipple from "@/hooks/useRipple";
import useWaveEffect from "@/hooks/useWaveEffect";
import { colors } from "@/styles";
import { useState } from "react";

const { default: Image } = require("next/image");
const { ButtonNavigationStyle } = require("./style");

function ButtonNavigation({ text, src, alt = '', handleClick, ariaLabel = '', ...props }) {
    const [hover, setHover] = useState(false)
    const rippleRefHover = useWaveEffect(hover, `background: ${colors.blue50};`)
    const rippleRefClick = useRipple(handleClick)

    return (
        <ButtonNavigationStyle {...props} aria-label={ariaLabel} ref={rippleRefHover} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <div ref={rippleRefClick} className={`Container ${src ? 'ButtonNavigationStyleMobileImage' : 'ButtonNavigationStyleNoImage'}`}>
                <p>{text}</p>
                {src
                    ? <Image src={src} width={15.5} height={15.5} alt={alt} />
                    : null
                }
            </div>
        </ButtonNavigationStyle>
    )
}

export default ButtonNavigation
