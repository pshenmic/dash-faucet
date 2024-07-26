import { colors, media, rm } from "@/styles";
import { fontMontserrat } from "@/styles/fonts";
import styled from "styled-components";

export const BlueButtonStyle = styled.span`
    position: relative;
    border-radius: ${rm(65)};
    background: rgba(0, 141, 228, 0.2);
    overflow: hidden;
    opacity: 1;
    transition: opacity ease 0.5s;
    display: flex;

    &:hover {
       opacity: 0.8;
    }

    ${media.xsm`
        width: 100%;
    `}

    .ContainerButtonDisabled{
        opacity: 0.2 !important;
        cursor: not-allowed !important;

        &::before {
            content: '';
            top: 0% !important;
            transform: translate(0%, -120%) !important;
        }
    }

    .ContainerButton {
        position: relative;
        min-width: ${rm(155)};
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: ${rm(18)};
        color: ${colors.white100} !important;
        gap: ${rm(10)};
        padding: ${rm(17)} ${rm(34)};
        ${fontMontserrat(600)}
        cursor: pointer;
        opacity: 1;
        transition: opacity ease 0.5s;
        z-index: 1;

        &::before {
            content: '';
            position: absolute;
            left: 0;
            top: -100%;
            transform: translate(0%, 0%);
            width: 100%;
            height: 300%;
            border-radius: 50px;
            transition: top ease 0.7s, transform ease 0.7s;
            background: ${colors.blue50};
            z-index: -1;
        }

        > img {
            position: relative;
            width: ${rm(18)};
            height: ${rm(18)};
        }
        
        ${media.xsm`
            min-width: 100%;
        `}
    }
`