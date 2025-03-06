import styled from "styled-components";
import { StyledMain, Heading, Content, SubHeadingWrapper } from "./SharedStyles.tsx"
import { useEffect } from "react";

const CompanyName = styled.p`
    font-style: italic;

    @media screen and (max-width: 750px) {
        margin: 2% 2%;
        font-size: calc(2px + 2vw);
    }
`;

export default function Experience() {
    useEffect(() => {
        document.title = "Experience | Resume";
    }, []);

    return (
        <>
            <StyledMain>
                <Heading>Experience</Heading>
                <Content>
                    <SubHeadingWrapper>
                        <h3>Junior Web Developer</h3>
                        <CompanyName>WebDev Craft, Boston, MA (2025-Now)</CompanyName>
                    </SubHeadingWrapper>
                    <ul>
                        <li>Developed responsive and static websites using HTML, CSS, Javascript, and React.</li>
                        <li>Collaborated with designers to create functional web pages.</li>
                        <li>Maintained and updated current websites.</li>
                        <li>Conduct testing and apply updates to remove bugs.</li>
                    </ul>

                    <SubHeadingWrapper>
                        <h3>Web Designer</h3>
                        <CompanyName>Pixel Perfect Designers, Boston, MA (2023-2025)</CompanyName>
                    </SubHeadingWrapper>
                    <ul>
                        <li>Design visually appealing and user-friendly website layouts and interfaces.</li>
                        <li>Collaborated with developers to ensure proper functionality of web pages.</li>
                        <li>Collaborated with developers to ensure proper implementation of design elements.</li>
                        <li>Conduct surveys and update design elements using user feedback.</li>
                        <li>Collaborate with graphic designers to create suitable color schemes.</li>
                    </ul>
                </Content>
            </StyledMain>
        </>
    );
}