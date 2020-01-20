import styled from "styled-components";

export const LayoutWrapper = styled('div')`
    overflow: hidden;
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
        
        > div {
            height: 100%;
        }
    }
    
    
    .page-transition-enter {
        transform: translateX(100vw);
    }
    .page-transition-enter-active {
        transform: translateX(0);
        transition: transform 500ms;
    }
    .page-transition-exit {
        transform: translateX(0);
    }
        .page-transition-exit-active {
        transform: translateX(-100vw);
        transition: transform 500ms;
    }
    
    @media only screen and (max-width: 425px) {
        grid-template-columns: none;
        grid-template-rows: 60px auto;
    }
`;