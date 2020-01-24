import styled from "styled-components";

export const ContactPageMapWrapper = styled('div')`
    position: relative;
    
    @media only screen and (max-width: 960px) {
        min-height: 360px;
    }
`;

export const ContactPageContainer = styled('div')`
    height: 100%;
    width: 100%;
    
    display: grid;
    grid-template-rows: 70vh 30vh;
    
    & > div > div:last-child {
        width: 100% !important;
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
    
    @media only screen and (max-width: 960px) {
        position: relative;
    }
`;

export const ContactAtSign = styled('span')`
    color: #a837c2;
    font-weight: bold;
`;