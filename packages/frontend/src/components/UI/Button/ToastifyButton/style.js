import styled from "styled-components";
import { rm } from "../../../../styles";

export const ToastifyButtonStyle = styled.button`
    position: relative;
    width: ${rm(52)};
    height: ${rm(52)};
    background: rgba(255, 255, 255, 0.2);
    border-radius: ${rm(10)};
    opacity: 1;
    transition: opacity ease 0.5s;
    cursor: pointer;
    flex-shrink: 0;
    
    > svg {
        position: absolute;
        left: 50%;
        height: 50%;
        transform: translate(-50%, -50%);
        width: ${rm(16)};
        height: ${rm(16)};
    }

    &:hover {
        opacity: 0.5;
    }
`