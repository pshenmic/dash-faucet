import { colors, media, rm } from "@/styles";
import { fontMontserrat } from "@/styles/fonts";
import styled from "styled-components";

export const ButtonNavigationStyle = styled.div`
        position: relative;
        overflow: hidden;
        border-radius: ${rm(10)};

    > :first-child {
        position: relative;
        background: rgba(255, 255, 255, 0.1);
        cursor: pointer;
        height: fit-content;
    }

    .ButtonNavigationStyleMobileImage {
        ${media.xsm`
            padding: ${rm(16)} !important;
            
            > p {
                display: none !important;
            }

            > img {
                width: ${rm(24.11)} !important;
                height: ${rm(24.11)} !important;
            }
        `}
    }

    .ButtonNavigationStyleNoImage {
        > p {
            ${fontMontserrat(700)};
            letter-spacing: 0em;
        }
        ${media.xsm`
            padding: ${rm(8)} ${rm(16)} !important;
            > p {
               font-size: ${rm(14)} !important;
            }
        `}
    }

    .Container {
        position: relative;
        display: flex;
        align-items: center;
        gap: ${rm(10)};
        padding: ${rm(10)} ${rm(20)};
        
        > p {
            letter-spacing: 0.01em;
            font-size: ${rm(16)};
            color: ${colors.white100};
            z-index: 1;
            pointer-events: none;
        }

        > img {
            position: relative;
            width: ${rm(18.5)};
            height: ${rm(18.5)};
            flex-shrink: 0;
            pointer-events: none;
        }
    }
`