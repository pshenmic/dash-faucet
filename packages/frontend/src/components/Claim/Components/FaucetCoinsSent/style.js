import styled from "styled-components";
import { colors, media, rm } from "../../../../styles";
import { fontMontserrat } from "../../../../styles/fonts";

export const CoinsSentStyle = styled.div`
    position: relative;
    width: ${rm(605)};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${rm(24)};

    ${media.xsm`
        gap: ${rm(12)};
        width: 100%;
    `}

    .Title {
        font-size: ${rm(24)};
        ${fontMontserrat(900)};
        color: ${colors.white100};
        white-space: pre;

        ${media.xsm`
            font-size: ${rm(14)};
        `}
    }

    .Conditions {
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;

        ${media.xsm`
            flex-direction: column;
            gap: ${rm(4)};
            align-items: flex-start;
        `}

        > * {
            flex-shrink: 0;
            color: ${colors.white100};
            word-break: break-all;
        }

        &__Name {
            width: ${rm(277)};
            font-size: ${rm(14)};
            ${fontMontserrat()}

            ${media.xsm`
                width: 100%;
                font-size: ${rm(10)};
            `}
        }

        &__Value {
            flex: 1;
            font-size: ${rm(16)};
            ${fontMontserrat(700)}
            text-align: end;
            justify-content: flex-end;

            ${media.xsm`
                text-align: start;
                flex: 0;
                width: 100%;
                font-size: ${rm(12)};
                justify-content: flex-start;
            `}
        }

        &__ConfirmationInformation {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: ${rm(12)};
            flex: 1;
        }
    }
    
    .WrapperBlueButton{
        width: 100%;
        display: flex;
        justify-content: flex-end;
        gap: ${rm(4)};

        ${media.xsm`
            flex-direction: column;
            gap: ${rm(7)};
            justify-content: flex-start;

            > * {
                width: fit-content;
            }
        `}
    }
`