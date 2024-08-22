import styled from "styled-components";
import { media, rm } from "../../../styles";

export const FllowClaimStyle = styled.div`
    position: relative;
    width: ${rm(605)};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${rm(24)};

    ${media.xsm`
        width: 100%;
        gap: ${rm(12)};
    `}
`