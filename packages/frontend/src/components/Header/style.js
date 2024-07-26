import { colors, media, rm } from "@/styles";
import { fontMontserrat } from "@/styles/fonts";
import styled from "styled-components";

export const HeaderStyle = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: ${rm(24)};

    ${media.xsm`
        flex-direction: column;
    `}

    .LogoContainer {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        > img {
            position: relative;
            width: auto;
            height: ${rm(40)};
            ${media.xsm`
                height: ${rm(31)};
            `}
        }
    }

    .LogoSubName {
        font-size: ${rm(16)};
        color: ${colors.white100};
        ${fontMontserrat(800, 'italic')}
        
        ${media.xsm`
            font-size: ${rm(12)};
        `}
    }

    .ContainerNetworks {
        position: relative;
        display: flex;
        align-items: center;
        gap: ${rm(12)};
    }
`