import styled from "styled-components";

export const Sidebar = styled('aside')`
    width: 60px;
    background: #181818;
    height: 100vh;
    
    display: flex;
    align-items: center;
    
    transform: translateX(-60px);
    animation: slideIn 1s ease-in forwards;
    
    @keyframes slideIn {
        to {
            transform: translate(0px, 0px);
        }
    }
    
    @media only screen and (max-width: 425px) {
        width: 100vw;
        height: 60px;
        overflow: hidden;
        
        transform: translate(0px, -60px);
    }
`;