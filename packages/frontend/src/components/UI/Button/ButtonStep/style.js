import styled from "styled-components";
import { colors, media, rm } from "../../../../styles";
import { fontMontserrat } from "../../../../styles/fonts";

export const ButtonStepStyle = styled.div`
    position: relative;
    overflow: hidden;
    border-radius: ${rm(65)};
    
    > button {
        position: relative;
        padding: ${rm(17)} ${rm(34)};
        width: fit-content;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: ${rm(8)};
        cursor: pointer;
        background-color: ${colors.blue50};
        opacity: 1;
        transition: opacity ease 0.5s;

        ${media.xsm`
            padding: ${rm(12)} ${rm(27)};
            gap: ${rm(4)};
        `}
        
        > p {
            color: ${colors.white100};
            font-size: ${rm(18)};
            ${fontMontserrat(600)}
            z-index: 1;

            ${media.xsm`
                font-size: ${rm(16)};
            `}
        }

        &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0%;
            width: 100%;
            height: 300%;
            border-radius: 50px;
            transform:translate(0%, -100%);
            transition: top ease 0.7s, transform ease 0.7s;
            background-color: ${colors.green100};
        }

        &:hover {
            opacity: 0.8;
        }
    }

    .ButtonActive {
        &::before {
            top: -100% !important;
            transform: translate(0%, 0%) !important;
        }
    }

    .ButtonNoActive {
        opacity: 0.2 !important;
        cursor: not-allowed !important;

        &::before {
            content: '';
            top: 0% !important;
            transform: translate(0%, -120%) !important;
        }
    }

    .Icon {
        position: relative;
        width: ${rm(22)};
        height: ${rm(22)};

        ${media.xsm`
            width: ${rm(16)};
            height: ${rm(16)};
        `}
    }

    .Approved {
        position: relative;
        width: ${rm(18)};
        height: ${rm(18)};

        ${media.xsm`
            width: ${rm(16)};
            height: ${rm(16)};
        `}
    }
`