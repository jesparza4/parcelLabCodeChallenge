import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    .App {        
        padding:  ${({ theme }) => theme.spacing(8)};
        overflow: hidden;
        max-width: 1440px;
        margin: auto;
        max-height: 800px;
        height: 100%;
    }

    @font-face {
        font-family: 'Nohemi';
        src: local('Nohemi'), url(fonts/Nohemi/Nohemi-Medium.woff) format('woff');
        font-weight: bold;
    }

    @font-face {
        font-family: 'Nohemi';
        src: local('Nohemi'), url(fonts/Nohemi/Nohemi-Thin.woff) format('woff');
        font-weight: 100;
    }
    
     @font-face {
        font-family: 'Nohemi';
        src: local('Nohemi'), url(fonts/Nohemi/Nohemi-Light.woff) format('woff');
        font-weight: normal;
    }

    * {
        font-family: "Nohemi";
        color: ${({ theme }) => theme.palette.common.black};
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.palette.gray[100]};
        height: 100vh;
    }

    #root {
        height:100%;
    }

    hr {
        margin-left: 0;
        margin-right: 0;
        opacity: 0.3;
        border-top-color: ${({ theme }) => theme.palette.gray[100]};
}
`;
