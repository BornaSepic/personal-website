import styled from "styled-components";

export const IndexPageContainer = styled('div')`
    height: 100%;
    width: 100%;
    
    display: flex;
    flex-flow: column;
    justify-content: center;
    padding: 0 0 0 10vw;
    
    @media only screen and (max-width: 1120px) {
        flex-flow: column;
        justify-content: center;
        padding: 0 0 0 2vw;
    }  
`;