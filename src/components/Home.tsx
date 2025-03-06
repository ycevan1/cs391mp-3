import styled from "styled-components";
import { StyledMain, Heading } from "./SharedStyles.tsx"
import { useEffect } from "react";

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 2vh 2vw;
    
    @media screen and (max-width: 750px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;

const ImageContainer = styled.div`
    width: 40%;
    margin: 1vh 1vw;
    
    @media screen and (max-width: 750px) {
        margin: 1vh auto;
    }
`;

const StyledImg = styled.img`
    max-width: 100%;
`;

const MainContent = styled.div`
    align-self: center;
    width: 60%;
    margin: 1vh 1vw;

    @media screen and (max-width: 750px) {
        align-self: center;
        width: 100%;
        margin: 1vh 1vw;
    }
`;

const MainText = styled.p`
    margin: 0 1vw;
    font-size: calc(2px + 1.5vw);
    line-height: calc(2px + 2vw);
    
    @media screen and (max-width: 750px) {
        margin: 2% 2%;
        font-size: calc(2px + 2vw);
    }
`;

export default function Home() {
    useEffect(() => {
        document.title = "Home | Resume";
    }, []);

    return (
        <>
            <StyledMain>
                <Heading>Home</Heading>
                <ContentWrapper>
                    <ImageContainer>
                        <StyledImg src="/profile-image.jpg" alt="Yuming Chen" />
                    </ImageContainer>
                    <MainContent>
                        <MainText>Hi, my name is Yuming Chen, and I am currently a full-time Computer Science
                            student at Boston University. I am thrilled to be studying here in the city
                            of Boston and I look forward to advancing my knowledge in Computer Science.
                            Some specific fields that particularly peak my interest include website
                            development/design, cybersecurity, and digital forensics.
                        </MainText>
                    </MainContent>
                </ContentWrapper>
                <MainText>Welcome to my website. Take a look around to learn more about my education,
                    experience, skills, etc.
                </MainText>
            </StyledMain>
        </>
    );
}