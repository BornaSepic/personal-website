import styled from "styled-components";

export const LayoutWrapper = styled('div')`
    background-image: url("/pattern-purple.png");
    background-size: cover;
    height: 100vh;
    
    display: grid;
    grid-template-columns: 60px auto;
    
    aside {
        position: relative;
        z-index: 5;
    }
    
    main {
        position: relative;
        z-index: 2;
    }
    
    @media only screen and (max-width: 425px) {
        grid-template-columns: none;
        grid-template-rows: 60px auto;
    }
`;