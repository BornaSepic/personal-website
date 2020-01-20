import styled from "styled-components";

export const AboutPageContainer = styled('div')`
    height: 100%;
    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    svg {
        max-width: 100%;
    }
    
    @media only screen and (max-width: 1120px) {
        flex-flow: column;
        justify-content: space-around;
        padding: 0 0 0 2vw;
    }  
`;

export const AboutContent = styled('div')`
    max-width: 500px;
`;
