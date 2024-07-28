import { colors, media, rm } from "@/styles";
import { fontMontserrat } from "@/styles/fonts";
import styled from "styled-components";

export const ClaimHeaderStyle = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: fit-content;
    gap: ${rm(25)};

    ${media.xsm`
        flex-direction: column;
        gap: ${rm(16)};
        align-items: flex-start;
        width: ${rm(290)};
    `}

    .Animation {
        position: relative;
        width: ${rm(95)};
        height: ${rm(95)};
        border-radius: ${rm(29)};
        background-color: ${colors.white100};

        >:nth-child(1) {
            position: absolute;
            left: 50%;
            top: 50%;
            width: 100%;
            height: 100%;
            transform: translate(-50%, -50%);
        } 
        
        ${media.xsm`
            width: ${rm(112)};
            height: ${rm(112)};
        `}
    } 

    .WrapperText {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: ${rm(4)};
        align-items: flex-start;

        ${media.xsm`
            gap: ${rm(8)};
        `}

        .Title {
            color: ${colors.white100};
            font-size: ${rm(32)};
            white-space: pre-wrap;
            display: flex;
            align-items: center;

            ${media.xsm`
                font-size: ${rm(24)};
                align-items: flex-start;
                flex-direction: column;

            `}

            > :nth-child(1) {
                ${fontMontserrat(900)}
            }

            > :nth-child(2) {
                ${fontMontserrat(800, 'italic')}
            }
        }

        > p {
            ${fontMontserrat(400)}
            font-size: ${rm(16)};
            color: ${colors.white100};
        }
    }
`