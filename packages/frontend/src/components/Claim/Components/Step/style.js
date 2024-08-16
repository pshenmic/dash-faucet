import styled from "styled-components";
import { colors, media, rm } from "../../../../styles";
import { fontMontserrat } from "../../../../styles/fonts";

export const StepStyle = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .Title {
        color: ${colors.white100};
        font-size: ${rm(12)};
        ${fontMontserrat(700)}
        margin-bottom: ${rm(4)};
    }

    .Subtitle {
        color: ${colors.white100};
        font-size: ${rm(16)};
        ${fontMontserrat(400)}
        margin-bottom: ${rm(23)};

        ${media.xsm`
            font-size: ${rm(14)};
            margin-bottom: ${rm(4)};
        `}
    }

    .WrapperButton {
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        gap: ${rm(4)};

        ${media.xsm`
            flex-direction: column;
            align-items: flex-start;
            gap: ${rm(7)};
        `}
    }
`