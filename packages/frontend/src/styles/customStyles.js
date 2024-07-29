import { createGlobalStyle } from "styled-components"
import { media, rm } from "."

export const CustomStyles = createGlobalStyle`
    .Main {
        position: relative;
        width: 100%;
        padding: ${rm(45)} ${rm(45)} ${rm(30)} ${rm(45)};
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 100%;
        height: auto;
        gap: ${rm(30)};

        ${media.xsm`
            padding: ${rm(42)} ${rm(36)} ${rm(27)} ${rm(36)};
        `}
    }

    .Ellipse {
        position: fixed;
        top: 40%;
        left: 50%;
        width: 1560px;
        height: 1560px;
        pointer-events: none;
    }

    .Drop {
        animation: drop 4s infinite linear;
    }

    @keyframes drop {
        0% {
            transform: translateY(0%);
            opacity: 1;
        }
        100% {
            transform: translateY(100%);
            opacity: 0;
        }
    }
`