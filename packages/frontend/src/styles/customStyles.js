import { createGlobalStyle } from "styled-components"
import { colors, media, rm } from "."
import { fontMontserrat } from "./fonts"

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
        align-items: center;

        ${media.xsm`
            padding: ${rm(42)} ${rm(36)} ${rm(27)} ${rm(36)};
        `}
    }

    .WrapperFollow {
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
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

    .Toastify__toast-container--top-right {
        bottom: ${rm(100)};
        top: inherit;
        right: ${rm(42)};
        left: inherit;

        ${media.xsm`
            right: ${rm(16)};
            bottom: ${rm(16)};
        `}
    }

    .Toastify__toast-container {    
        width: ${rm(313)}
    }

    .Toastify__toast-body {
        padding: 0;

        p {
            color: ${colors.white100};
            font-size: ${rm(14)};
            ${fontMontserrat()}
        }

        ${media.xsm`
            gap: ${rm(5)};
        `}
    }

    .Toastify__toast {
        min-height: auto;
        padding: ${rm(6)};
        gap: ${rm(5)};
        border-radius: ${rm(10)}
    }

    .Toastify__toast-icon {
        margin-inline-end: ${rm(2)};
       
        > img {
            width: ${rm(22)};
            height: ${rm(22)};
            position: relative;
        }
    }

    .Toastify__toast--error {
        background: ${colors.red100} !important;
    }

    .Toastify__toast--success {
        background: ${colors.green100} !important;
    }

    .Toastify__toast--warning {
        background: ${colors.yellow150} !important;
    }

    .Toastify__toast--info {
        background: ${colors.blue250} !important;
    }

    .Toastify__toast--close-on-click {
        background: #0A193C !important;
        border-radius: 4px !important;
        line-height: 18px !important;
        font-family: 'Roboto', sans-serif !important;
        font-weight: 400 !important;
    }

    .Toastify__progress-bar-theme--light {
        background-color: ${colors.white100} !important;
    }

    .Toastify__progress-bar--bg {
        opacity: 0;
    }

    .Toastify__progress-bar--wrp {
        height: ${rm(5)}
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