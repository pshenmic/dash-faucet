import styled from "styled-components";
import { rm } from "../../styles";

export const DownloadStyle = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    width: ${rm(64)};
    height: ${rm(64)};
    transform: translate(-50%, -50%);

    > img {
        position: absolute;
        left: 0;
        height: 0;
        width: 100%;
        height: 100%;
        animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`