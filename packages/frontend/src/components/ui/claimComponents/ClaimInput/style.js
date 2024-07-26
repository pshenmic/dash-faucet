import { colors, media, rm } from "@/styles";
import { fontMontserrat } from "@/styles/fonts";
import { animated } from "@react-spring/web";
import styled from "styled-components";

export const ClaimInputStyle = styled(animated.div)`
    position: relative;
    display: flex;
    gap: ${rm(50)};
    padding: ${rm(20)};
    background-color: rgba(255, 255, 255, 0.1);;
    border-radius: ${rm(15)};
    margin-top: ${rm(24)};
    align-items: center;
    cursor: text;
    max-height: ${rm(100)};

    ${media.xsm`
        margin-top: ${rm(16)};
        padding: ${rm(16)};
        gap: ${rm(10)};
    `}

    .WrapperInput {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: ${rm(10)};
        width: ${rm(490)};

        ${media.xsm`
            width: 100%;
            gap: ${rm(6)};
        `}
        
        > p {
            color: ${colors.white100};
            font-size: ${rm(16)};
            ${fontMontserrat(400)}
            pointer-events: none;

            ${media.xsm`
                font-size: ${rm(12)};
            `}
        }
        > label {
            width: 100%;

            > input {
                width: 100%;
                background-color: transparent;
                font-size: ${rm(22)};
                color: ${colors.white100};
                ${fontMontserrat(700)}

                ${media.xsm`
                    font-size: ${rm(14)};
                `}

                &::placeholder {
                    opacity: 0.2;
                    color: ${colors.white100};
                }
            }
        }
    }

    .Button {
        flex-shrink: 0;
        > p {
            font-size: ${rm(16)} !important;
        }
    }
`