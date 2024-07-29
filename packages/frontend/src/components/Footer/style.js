import styled from "styled-components";
import { colors, media, rm } from "@/styles";
import { fontMontserrat } from "@/styles/fonts";

export const FooterStyle = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${rm(13.3)};

    ${media.xsm`
        flex-direction: column;
        align-items: flex-start;
    `}

    & a, span {
        color: ${colors.white100};
        font-size: ${rm(14)};
        ${fontMontserrat(400)}

        ${media.xsm`
            font-size: ${rm(12)};
        `}
    }

    .WrapperLinkList {
        position: relative;
        display: flex;
        align-items: center;
        gap: ${rm(7)};

        .ContainerLink {
            position: relative;
            display: flex;
            align-items: center;
            gap: ${rm(7)};

            > a {
                text-decoration: underline;
                text-decoration-skip-ink: none;  
                opacity: 1;
                transition: opacity ease 0.5s;
                &:hover {
                    opacity: 0.5;
                }
            }
        }

        > :last-child {
            > :last-child {
                display: none;
            }
        }        
    }
`