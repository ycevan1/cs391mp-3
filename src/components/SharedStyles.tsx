import styled from 'styled-components';

export const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    width: 70%;
    background-color: cornsilk;
    
    @media screen and (max-width: 750px) {
        width: 100%;
        height: 100vh;
        background-color: cornsilk;
    }
`;

export const Heading = styled.h2`
    margin: 2vw 0;
    text-align: center;
    font-size: calc(2px + 2vw);
    color: saddlebrown;
`;

export const Content = styled.div`
    margin: 0 1vw;
    font-size: calc(2px + 1.5vw);
    line-height: calc(2px + 2.3vw);
    
    @media screen and (max-width: 750px) {
        font-size: calc(2px + 2vw);
    }
`;

export const SubHeadingWrapper = styled.div`
    border-left: saddlebrown 0.5vw solid;
    padding-left: 0.5vw;
    margin-top: 4vh;
    margin-bottom: 1vw;
`;
