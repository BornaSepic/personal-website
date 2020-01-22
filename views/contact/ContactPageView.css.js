import styled from "styled-components";

export const ContactPageMapWrapper = styled('div')`
    position: relative;
`;

export const ContactPageContainer = styled('div')`
    height: 100%;
    width: 100%;
    
    display: grid;
    grid-template-columns: 40vw 60vw;
    
    & > div > div:last-child {
        width: 100% !important;
    }
    
    @media only screen and (max-width: 960px) {
        grid-template-columns: none;
        grid-template-rows: 60vh 40vh;
    }
`;

export const ContactPageInfo = styled('div')`
    position: absolute;
    z-index: 1000;
    top: 0px;
    left: 0px;
    background: #181818;
    padding: 20px;  
    color: white;
    
    a {
        color: white;
    }
`;

export const ContactAtSign = styled('span')`
    color: #a837c2;
    font-weight: bold;
`;