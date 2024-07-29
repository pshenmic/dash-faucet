import useRipple from "@/hooks/useRipple";
import useWaveEffect from "@/hooks/useWaveEffect";
import { colors } from "@/styles";
import { useState } from "react";
import { ButtonNavigationStyle } from "./style";
import Image from "next/image";
import { animated } from "@react-spring/web";

function ButtonNavigation({ tag = 'button', text, src, alt = '', handleClick, ariaLabel = '', ...props }) {
    const [hover, setHover] = useState(false)
    const rippleRefHover = useWaveEffect(hover, `background: ${colors.blue50};`)
    const rippleRefClick = useRipple(handleClick)
    const Tag = animated(tag)

    return (
        <ButtonNavigationStyle ref={rippleRefHover}>
            <Tag {...props} aria-label={ariaLabel} ref={rippleRefClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <div  className={`Container ${src ? 'ButtonNavigationStyleMobileImage' : 'ButtonNavigationStyleNoImage'}`}>
                    <p>{text}</p>
                    {src
                        ? <Image src={src} width={15.5} height={15.5} alt={alt} />
                        : null
                    }
                </div>
            </Tag>
        </ButtonNavigationStyle>
    )
}

export default ButtonNavigation
