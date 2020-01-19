import styled from "styled-components";

export const IntroTextWrapper = styled('div')`
    display: flex;
    flex-flow: column;
        
    #logo {
        max-width: 100%;
        stroke-linecap: square;
    
        & path:nth-child(1) {
            stroke-dasharray: 551.2501220703125;
            stroke-dashoffset: 551.2501220703125;
            animation: lineAnimation 2s ease forwards, fillAnimation 1s ease forwards 1.5s;
        }
        
        & path:nth-child(2) {
            stroke-dasharray: 259.87689208984375;
            stroke-dashoffset: 259.87689208984375;
            animation: lineAnimation 2s ease forwards, fillAnimation 1s ease forwards 1.5s;
        }
        
        & path:nth-child(3) {
            stroke-dasharray: 104.47503662109375;
            stroke-dashoffset: 104.47503662109375;
            animation: lineAnimation 2s ease forwards, fillAnimation 1s ease forwards 1.5s;
        }
        
        & path:nth-child(4) {
            stroke-dasharray: 244.12527465820312;
            stroke-dashoffset: 244.12527465820312;
            animation: lineAnimation 2s ease forwards 0.8s, fillAnimation 1s ease forwards 2.3s;
        }
        
        & path:nth-child(5) {
            stroke-dasharray: 98.97865295410156;
            stroke-dashoffset: 98.97865295410156;
            animation: lineAnimation 2s ease forwards 0.8s, fillAnimation 1s ease forwards 2.3s;
        }
        
        & path:nth-child(6) {
            stroke-dasharray: 633.052001953125;
            stroke-dashoffset: 633.052001953125;
            animation: lineAnimation 2s ease forwards 0.8s, fillAnimation 1s ease forwards 2.3s;
        }
        
        & path:nth-child(7) {
            stroke-dasharray: 592.3864135742188;
            stroke-dashoffset: 592.3864135742188;
            animation: lineAnimation 2s ease forwards 2s;
        }
        
        & path:nth-child(8) {
            stroke-dasharray: 395.88421630859375;
            stroke-dashoffset: 395.88421630859375;
            animation: lineAnimation 2s ease forwards 2.2s;
        }
        
        & path:nth-child(9) {
            stroke-dasharray: 250.59629821777344;
            stroke-dashoffset: 250.59629821777344;
            animation: lineAnimation 2s ease forwards 2.4s;
        }
        
        & path:nth-child(10) {
            stroke-dasharray: 413.71942138671875;
            stroke-dashoffset: 413.71942138671875;
            animation: lineAnimation 2s ease forwards 2.6s;
        }
        
        & path:nth-child(11) {
            stroke-dasharray: 432.7503967285156;
            stroke-dashoffset: 432.7503967285156;
            animation: lineAnimation 2s ease forwards 2.8s;
        }
        
        & path:nth-child(12) {
            stroke-dasharray: 67.95074462890625;
            stroke-dashoffset: 67.95074462890625;
            animation: lineAnimation 2s ease forwards 2.8s, fillAnimation 1s ease forwards 2.3s;
        }
    }
    
    .info--text {
        display: inline-block;
        color: white;
    }
    
    .info--text span {
        opacity: 0;
        transform: translateX(-500px);
        display: block;
        z-index: -1;
        
        &:nth-child(1) {
           animation: popIn 1s ease-in forwards 4s;
        }
        &:nth-child(2) {
           animation: popIn 1s ease-in forwards 4.2s;
        }
        &:nth-child(3) {
           animation: popIn 1s ease-in forwards 4.4s;
        }
    }
    
    @keyframes popIn {
        0% {
            opacity: 0;
            transform: translateX(-500px);
        }
        100% {
            opacity: 1;
            transform: translateX(0px);
        }
    }
    
    @keyframes lineAnimation {
        to {
            stroke-dashoffset: 0;
        }
    }
    
    @keyframes fillAnimation {
        from {
            fill: transparent;
        }
        to {
            fill: white;
        }
    }
`;