import styled from "styled-components";

export const ContactButton = styled('a')`
    cursor: pointer;
    max-width: max-content;
    padding: 10px 7px;
    position: relative;
    text-decoration: none;
    color: #fff;
    font-weight: 600;
    
    padding: 10px 25px;
    border: 2px solid #fff;
    border-radius: 5px;
    transition: all 0.5s ease-in-out, box-shadow .7s;
    
    &:before {
        content: '';
        position: absolute;
        z-index: -1;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: black;
        transform: scaleX(0);
        transform-origin: 0% 50%;
        transition: -webkit-transform 0.6s ease-out;
        transition: transform 0.6s ease-out;
    }
    
    &:hover {
        box-shadow: 4px 4px 5px 0px rgba(0,0,0,0.75);

        border-color: #000000;
        &:before {
            transform: scaleX(1);
        }
    }
`;