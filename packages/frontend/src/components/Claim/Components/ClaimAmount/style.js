import { colors, media, rm } from "@/styles";
import { fontMontserrat } from "@/styles/fonts";
import styled from "styled-components";

export const ClaimAmountStyle = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    margin-top: ${rm(32)};
    width: 100%;
    justify-content: space-between;
    gap: ${rm(100)};

    ${media.xsm`
        margin-top: ${rm(16)};
        gap: ${rm(16)};
        flex-direction: column;

        > * {
            width: 100%;
        }
    `}

    .Amount {
        position: relative;
        display: flex;
        align-items: center;
        gap: ${rm(12)};
        border-radius: ${rm(10)};

        > p {
            font-size: ${rm(16)};
            color: ${colors.white100};
            ${media.xsm`
                font-size: ${rm(14)};
            `}
        }

        .CustomRadio {
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            position: relative;
            user-select: none;
            border-radius: ${rm(10)};
            overflow: hidden;
        }

        .RadioInput {
            display: none;
        }

        .RadioButton {
            position: relative;
            padding: ${rm(10)} ${rm(20)};
            background-color: rgba(255, 255, 255, 0.1);
            opacity: 1;
            transition: background-color ease 0.5s, opacity ease 0.5s;
            border-radius: ${rm(10)};

            > p {
                position: relative;
                z-index: 2;
                color: ${colors.white100}; 
                ${fontMontserrat(700)};
                transition: color ease 0.5s;
            }

            &:hover {
                opacity: 0.8;
            }

            ${media.xsm`
                padding: ${rm(12)} ${rm(16)};
            `}
        }

        .RadioInput:checked + .RadioButton {
            > p {
                color: ${colors.blue150} !important; 
            }
            opacity: 1;
        }
    }
`