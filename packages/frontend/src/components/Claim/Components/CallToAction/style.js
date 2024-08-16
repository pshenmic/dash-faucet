import styled from "styled-components";
import { colors, media, rm } from "../../../../styles";
import { fontMontserrat } from "../../../../styles/fonts";
import { animated } from "@react-spring/web";

export const CallToActionStyle = styled(animated.div)`
    position: relative;
    width: 100%;
    padding: ${rm(24)};
    border-radius: ${rm(10)};
    overflow: hidden;

    ${media.xsm`
        padding: ${rm(14)};
    `}

    > :nth-child(1) {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        background-color: ${colors.yellow100};
        z-index: -1;
    }

    & p {
        color: ${colors.black150};
        font-size: ${rm(16)};
        ${fontMontserrat(400)};

        ${media.xsm`
            font-size: ${rm(14)};
        `}
    }
`