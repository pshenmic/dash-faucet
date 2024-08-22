import styled from "styled-components";
import { rm, colors } from '@/styles';
import { fontMontserrat } from "../../styles/fonts";
import { media } from "../../styles";

export const PaginationStyle = styled.div`
    position: relative;
    width: fit-content;
    gap: ${rm(200)};
    display: flex;
    align-items: center;
    margin-bottom: ${rm(130)};

    ${media.xsm`
        width: 100%;
        gap: 0;
        justify-content: space-between;
        margin-bottom: ${rm(25)};
    `}

    .Circle {
        position: relative;
        width: ${rm(11)};
        height: ${rm(11)};
        border-radius: 100%;
        background-color: ${colors.white150};
        z-index: 1;
        transition: background-color ease 0.5s;

        ${media.xsm`
            width: ${rm(10)};
            height: ${rm(10)};
        `}

        > p {
            position: absolute;
            left: 50%;
            bottom: calc(-100% + ${rm(-15)});
            letter-spacing: 0.01em;
            line-height: 110%;
            text-align: center;
            font-size: ${rm(16)};
            ${fontMontserrat()}
            opacity: 0.6;
            color: ${colors.white100};
            white-space: nowrap;
            transform: translate(-50%, 0%);

            ${media.xsm`
                display: none;
            `}
        }
    }

    .Line {
        position: absolute;
        width: 100%;
        left: 0%;
        top: 50%;
        transform: translate(0%, -50%);
        height: ${rm(2)};
        background-color: ${colors.white150};

        &__Green {
            position: absolute;
            width: 0%;
            left: 0%;
            top: 0%;
            height: 100%;
            background-color: ${colors.green100};
        }
    }
`