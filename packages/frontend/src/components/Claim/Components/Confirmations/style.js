import styled from "styled-components";
import { colors, rm } from "../../../../styles";
import { fontMontserrat } from "../../../../styles/fonts";

export const ConfirmationsStyle = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    gap: ${rm(5)};

    > p {
        text-align: right;
        ${fontMontserrat(700)}
        font-size: ${rm(16)};
        color: ${colors.white100};
    }

    .WrapperImgSucseses {
        width: ${rm(18)} !important;
        height: ${rm(18)} !important;
    }

    .WrapperImg {
        position: relative;
        width: ${rm(26)};
        height: ${rm(26)};
        border-radius: 100%;
        overflow: hidden;

        > img {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            transition: opacity 0.5s ease-in-out;
            opacity: 1;
            animation: rotation 1s linear infinite;
        }

        &__FadeOut {
            opacity: 0 !important;
        }

        &__Emergence {
            opacity: 1;
            animation: none !important;
        }
    }

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`
