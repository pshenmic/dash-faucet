import { animated } from "@react-spring/web";
import styled from "styled-components";

export const DarkWrapperStyle = styled(animated.div)`
    position: fixed;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    left: 0;
    top: 0;
    z-index: 10;
    background: rgba(0, 0, 0, 0.66);
`