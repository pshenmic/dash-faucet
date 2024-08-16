import styled from "styled-components";
import { colors, media, rm } from "../../../../styles";
import { fontMontserrat } from "../../../../styles/fonts";

export const AuthorizeWithStyle = styled.div`
    position: relative;
    display: flex;
    align-items: center;

    ${media.xsm`
        justify-content: space-between;
        gap: ${rm(14)};
    `}

    .Arrow {
        border-radius: 100%;
        overflow: hidden;
        margin-right: ${rm(24)};

        > :nth-child(1) {
            padding: ${rm(20.5)};
        }

        ${media.xsm`
            margin-right: 0;
        `}
    }

    .Text {
        ${fontMontserrat(900)}
        font-size: ${rm(24)};
        color: ${colors.white100};
        margin-right: ${rm(12)};

        ${media.xsm`
            margin-right: 0;
            font-size: ${rm(16)};
        `}
    }

    & img {
        position: relative;
        width: ${rm(35)};
        height: ${rm(35)};

        ${media.xsm`
            width: ${rm(20)};
            height: ${rm(20)};
        `}
    }
`