import { media } from '@/styles';
import styled from 'styled-components';

export const ClaimStyle = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .Container {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: fit-content;

        ${media.xsm`
            width: 100%;
        `}
    }
`