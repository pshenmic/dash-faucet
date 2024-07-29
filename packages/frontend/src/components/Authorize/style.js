import { colors, media, rm } from "@/styles";
import { fontMontserrat } from "@/styles/fonts";
import { animated } from "@react-spring/web";
import styled from "styled-components";

export const AuthorizeStyle = styled(animated.div)`
    position: fixed;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.66);
    z-index: 10;

    .Cross{
        position: absolute;
        width: ${rm(59.5)};
        height: ${rm(59.5)};
        top: ${rm(51)};
        right: ${rm(54.5)};
        cursor: pointer;
        z-index: 1;

        ${media.xsm`
            width: ${rm(30)};
            height: ${rm(30)};
            top: ${rm(24)};
            right: ${rm(24)};
        `}

        > * {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            opacity: 1;
            transition: opacity ease 0.5s;
        }

        &:hover {
            > * {
                opacity: 0.6;
            }
        }
    }

    .Groundwork {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }

    .AuthorizePopUp {
        background-color: ${colors.white100};
        padding: ${rm(92)} ${rm(182.5)} ${rm(92)} ${rm(80.5)};
        display: flex;
        flex-direction: column;
        gap: ${rm(23)};
        border-radius: ${rm(90)};
        position: absolute;
        left: 50%;
        top: 50%;
        z-index: 1;

        ${media.xsm`
            padding: ${rm(24)};
            gap: ${rm(20)};
            border-radius: ${rm(20)};
            width: ${rm(380)};
        `}

        .TitleContainer {
            position: relative;
            width: 100%;

            ${media.xsm`
                gap: ${rm(5)};
                padding-right: ${rm(40)};
            `}

            > span {
                font-size: ${rm(32)};
                color: ${colors.black50};
                ${fontMontserrat(900)}
                white-space: nowrap;
                display: flex;
                align-items: center;
                gap: ${rm(10)};

                ${media.xsm`
                    font-size: ${rm(22)};
                    white-space: wrap;
                    display: block;
                `}

                > img {
                    width: ${rm(32)};
                    height: ${rm(32)};
                    position: relative;

                    ${media.xsm`
                        width: ${rm(20)};
                        height: ${rm(20)};
                    `}
                }
            }

            
        }
        > p {
            font-size: ${rm(32)};
            color: ${colors.black50};
            white-space: nowrap;

            ${media.xsm`
                font-size: ${rm(16)};
                white-space: wrap;
            `}
        }

        .WrapperButton {
            display: flex;
            align-items: center;
            gap: ${rm(13)};

            > :nth-child(2) {
                > button {
                    &::before {
                        background-color: ${colors.black100} !important;
                    }
                }
            }
            ${media.xsm`
                flex-direction: column;
                gap: ${rm(10)};
            `}
        }
    }
`