import { createGlobalStyle } from "styled-components"
import { printVars } from "./utils"
import { _colors, colors } from "./colors"
import { fontMontserrat } from "./fonts"
import { initSmartCSSGrid } from "@/styles/grid/grid"

const {
    SmartCSSGrid,
    media,
    rm,
    em
} = initSmartCSSGrid({
    fontBase: 16,
    scaleUpCoeff: 0.6666,
    grid: {
        xlg: 1920,
        lg: 1440,
        md: 1024,
        xsm: 576,
    },
    related: {
        xsm: 420
    }
})

// Global css
const GlobalStyles = createGlobalStyle`
    // Variables 
    :root {
        ${printVars(_colors, 'color')}
    }

    // Normalize
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        outline: none;
        border: none;
        text-decoration: none;
        color: inherit;
    }

    img {
        user-select: none;
    }

    span, a {
        display: inline-block;
    }

    button {
        background: none;
    }

    html {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${colors.white100};
        background: ${colors.blue100};
        ${fontMontserrat(300)}
    }

    html, body {
        -webkit-overflow-scrolling: touch;
        position: relative;
        overscroll-behavior-y: none;
        height: calc(var(--vh, 1vh) * 100);
        @media screen and (max-width: 1080px) {
            height: calc(var(--svh, 1vh) * 100);
        }
    }
    body::-webkit-scrollbar { width: 0; }

    #__next {
        height: 100%;
    }

    body {
        animation: 3s fadeIn ease;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }
`

// Exports
export default GlobalStyles
export { colors } from './colors'
export { fonts } from './fonts'
export { SmartCSSGrid, media, rm, em }