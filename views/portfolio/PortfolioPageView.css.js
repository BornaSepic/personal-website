import styled from "styled-components";

export const PortfolioPageContainer = styled('div')`
    height: 100%;
    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    @media only screen and (max-width: 820px) {
        flex-flow: column;
        justify-content: space-around;
        padding: 0 0 0 2vw;
    }  
`;

export const PortfolioInfo = styled('div')`
    max-width: 500px;
`;

export const LogosWrapper = styled('div')`
    svg {
        max-width: 100%;
    }
`;