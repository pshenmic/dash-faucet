import Image from "next/image"
import { BlueButtonStyle } from "./style"
import useRipple from "@/hooks/useRipple";

function BlueButton({ name, handleClick, ariaLabel, altIconLeft = '', iconLeft, style, ...props }) {
    const rippleRef = useRipple(handleClick);

    return (
        <BlueButtonStyle ref={rippleRef} style={style}>
            <button
                className={`ContainerButton ${props.disabled ? 'ContainerButtonDisabled' : ''}`}
                aria-label={ariaLabel}
                {...props}
                onClick={handleClick}
            >
                {iconLeft
                    ? <Image
                        src={iconLeft}
                        alt={altIconLeft}
                        width={18}
                        height={18}
                    />
                    : null}
                {name}
            </button>
        </BlueButtonStyle>
    )
}

export default BlueButton