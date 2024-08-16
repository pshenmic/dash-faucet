import styled from "styled-components";
import { colors, rm } from "../../../styles";
import { fontMontserrat } from "../../../styles/fonts";

export const InstantSendStyle = styled.div`
    position: relative;
    width: fit-content;
    padding: ${rm(5)} ${rm(10)};
    display: flex;
    align-items: center;
    gap: ${rm(2)};
    border-radius: ${rm(5)};
    background: rgba(255, 255, 255, 0.1);

    > img {
        position: relative;
        width: ${rm(18)};
        height: ${rm(18)};
    }

    > p {
        text-align: right;
        font-size: ${rm(12)};
        color: ${colors.white100};
        ${fontMontserrat()}
    }
`