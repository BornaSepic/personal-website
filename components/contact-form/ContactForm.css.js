import styled from "styled-components";

export const ContactIntro = styled('div')`
    max-width: 500px;
    margin-bottom: 20px;
`;

export const FormContainer = styled('div')`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-flow: row;
    
    form {
        max-width: 470px;
        width: 100%;
        padding: 20px;
        border-radius: 20px;
        border: 3px solid;
    }
    
    @media only screen and (max-width: 960px) {
        margin: 20px 2vw;
    }
    
    @media only screen and (max-width: 600px) {
        flex-flow: column;
    }
`;

export const FormItem = styled('div')`
    margin: 10px 0;
    label {
        display: block;
    }
    textarea, input {
        color: white;
        font-size: 18px;
        width: 100%;
        background-color: transparent !important;
        background: none;
        border: 1px solid;
        border-color: transparent transparent white transparent; 
        outline-color: white;
    }
`;

export const FormSubmit = styled('button')`
    cursor: pointer;
    max-width: max-content;
    padding: 8px 30px;
    position: relative;
    color: #fff;
    font-weight: 600;
    background: none;
    float: right;
    font-size: 18px;
    
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
        background: #181818;
        transform: scaleX(0);
        transform-origin: 0% 50%;
        transition: -webkit-transform 0.6s ease-out;
        transition: transform 0.6s ease-out;
    }
    
    &:hover {
        box-shadow: 4px 4px 5px 0px rgba(0,0,0,0.75);

        border-color: #181818;
        &:before {
            transform: scaleX(1);
        }
    }
`;