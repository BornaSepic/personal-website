import styled from "styled-components";

export const LayoutWrapper = styled('div')`
    overflow: hidden;
    background-image: url("/background-pattern.jpg");
    background-size: cover;
    height: 100%;
    min-height: 100vh;
    
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
        overflow: visible;
        grid-template-columns: none;
        grid-template-rows: 40px auto;
        
        aside {
            position: sticky;
            top: 0px;
        }
    }
`;