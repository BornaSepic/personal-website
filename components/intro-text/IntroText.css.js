import styled from "styled-components";

export const IntroTextWrapper = styled('div')`
    display: flex;
    flex-flow: column;
        
    #logo {
        max-width: 100%;
        stroke-linecap: square;
    }
    
    #logo path:nth-child(1) {
        stroke-dasharray: 551.2501220703125;
        stroke-dashoffset: 551.2501220703125;
        animation: lineAnimation 2s ease forwards, fillAnimation 1s ease forwards 1.5s;
    }
    
    #logo path:nth-child(2) {
        stroke-dasharray: 259.87689208984375;
        stroke-dashoffset: 259.87689208984375;
        animation: lineAnimation 2s ease forwards, fillAnimation 1s ease forwards 1.5s;
    }
    
    #logo path:nth-child(3) {
        stroke-dasharray: 104.47503662109375;
        stroke-dashoffset: 104.47503662109375;
        animation: lineAnimation 2s ease forwards, fillAnimation 1s ease forwards 1.5s;
    }
    
    #logo path:nth-child(4) {
        stroke-dasharray: 244.12527465820312;
        stroke-dashoffset: 244.12527465820312;
        animation: lineAnimation 2s ease forwards 0.8s, fillAnimation 1s ease forwards 2.3s;
    }
    
    #logo path:nth-child(5) {
        stroke-dasharray: 98.97865295410156;
        stroke-dashoffset: 98.97865295410156;
        animation: lineAnimation 2s ease forwards 0.8s, fillAnimation 1s ease forwards 2.3s;
    }
    
    #logo path:nth-child(6) {
        stroke-dasharray: 633.052001953125;
        stroke-dashoffset: 633.052001953125;
        animation: lineAnimation 2s ease forwards 0.8s, fillAnimation 1s ease forwards 2.3s;
    }
    
    #logo path:nth-child(7) {
        stroke-dasharray: 592.3864135742188;
        stroke-dashoffset: 592.3864135742188;
        animation: lineAnimation 2s ease forwards 2s;
    }
    
    #logo path:nth-child(8) {
        stroke-dasharray: 395.88421630859375;
        stroke-dashoffset: 395.88421630859375;
        animation: lineAnimation 2s ease forwards 2.2s;
    }
    
    #logo path:nth-child(9) {
        stroke-dasharray: 250.59629821777344;
        stroke-dashoffset: 250.59629821777344;
        animation: lineAnimation 2s ease forwards 2.4s;
    }
    
    #logo path:nth-child(10) {
        stroke-dasharray: 413.71942138671875;
        stroke-dashoffset: 413.71942138671875;
        animation: lineAnimation 2s ease forwards 2.6s;
    }
    
    #logo path:nth-child(11) {
        stroke-dasharray: 432.7503967285156;
        stroke-dashoffset: 432.7503967285156;
        animation: lineAnimation 2s ease forwards 2.8s;
    }
    
    #logo path:nth-child(12) {
        stroke-dasharray: 67.95074462890625;
        stroke-dashoffset: 67.95074462890625;
        animation: lineAnimation 2s ease forwards 2.8s, fillAnimation 1s ease forwards 2.3s;
    }
    
    .info--text {
        display: inline-block;
        color: white;
        overflow: hidden;
        transition: all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) 0.1s
    }
    
    .info--text span {
        opacity: 0;
        transform: translateX(-500px);
        display: block;
        animation: popUp 1s ease-in forwards;
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