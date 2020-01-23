import styled from "styled-components";

export const LinkTooltip = styled('p')`
    transition: all 0.5s;
    z-index: -1;
    position: absolute;
    top: 50%;
    transform: translate(-150px, -50%);
    background: #181818;
    padding: 7px;
    color: white;
    font-size: 0.8rem;
    border-radius: 5px;
    
    &:after {
        content: "";
        position: absolute;
        top: calc(50% - 9px);
        left: -18px;
        border: 10px solid;
        border-color: transparent #181818 transparent transparent;
    }
`;

export const SidebarLink = styled('a')`
    cursor: pointer;
    display: block;
    text-decoration: none;
    color: #4d4d4e;
    svg {
        width: 100%;
        margin: 15px 0;
        height: 32px;
        
        circle {
            transition: all 0.5s ease-out;
            r: 0;               
        }
    }
    
    &.active-link {
        circle {
            r: 500;               
        }
    }
    
    &:hover {      
        circle {
            r: 500;               
        }
    }
    
    @media only screen and (max-width: 425px) {
        display: flex;
        align-items: center;
        height: 100%;
        svg {
            margin: auto;
            height: 24px;
        }
    }
`;

export const SidebarNavigation = styled('nav')`
    display: flex;
    flex-flow: column;
    width: 100%;
    
    > div {
        position: relative;
        background: #181818;

        &:hover {
            ${LinkTooltip} {
                transform: translate(80px, -50%);
            }
        }
    }
    
    
    @media only screen and (max-width: 425px) {
        flex-flow: row;
        height: 100%;
    }
`;