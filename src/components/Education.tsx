import styled from "styled-components";
import { StyledMain, Heading} from "./SharedStyles.tsx"
import { useEffect } from "react";

const MainUnorderedList = styled.ul`
    padding: 0;
`;

const MainListItem = styled.li`
    margin: 4vh 1vw;
    font-size: calc(2px + 1.5vw);
    line-height: calc(2px + 2.3vw);
    border-left: saddlebrown 0.5vw solid;
    padding-left: 0.5vw;
    list-style: none;
    
    @media screen and (max-width: 750px) {
        font-size: calc(2px + 2vw);
    }
`;

const StyledParagraph = styled.p`
    @media screen and (max-width: 750px) {
        margin: 2% 2%;
        font-size: calc(2px + 2vw);
    }
`;

export default function Education() {
    useEffect(() => {
        document.title = "Education | Resume";
    }, []);

    return (
        <>
            <StyledMain>
                <Heading>Educational Background</Heading>
                <MainUnorderedList>
                    <MainListItem>
                        <StyledParagraph>M.S. in Computer Science | Boston University, MA
                            <br/>Graduation: May 2031
                            <br/>GPA - 3.4</StyledParagraph>
                    </MainListItem>
                    <MainListItem>
                        <StyledParagraph>B.A. in Computer Science and Economics | Boston University, MA
                            <br/>Graduation: May 2027
                            <br/>GPA - 3.1</StyledParagraph>
                    </MainListItem>
                    <MainListItem>
                        <StyledParagraph>Benjamin N. Cardozo High School, NY
                            <br/>Graduation May 2023
                            <br/>GPA - 4.0</StyledParagraph>
                    </MainListItem>
                    <MainListItem>
                        <StyledParagraph>Nathaniel N. Hawthorne Middle School, NY
                            <br/>GPA - 4.0</StyledParagraph>
                    </MainListItem>
                </MainUnorderedList>
            </StyledMain>

        </>
    );
}