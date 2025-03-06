import { StyledMain, Heading, Content, SubHeadingWrapper } from "./SharedStyles.tsx"
import { useEffect } from "react";

export default function Skills() {
    useEffect(() => {
        document.title = "Skills | Resume";
    }, []);

    return (
        <>
            <StyledMain>
                <Heading>Other Skills</Heading>
                <Content>
                    <SubHeadingWrapper>
                        <h3>Technical Skills:</h3>
                    </SubHeadingWrapper>
                    <ul>
                        <li>Proficient in languages such as HTML, CSS, JavaScript, Python, and Java</li>
                        <li>Proficient in frameworks such as React and Vue.js.</li>
                        <li>Expertise with UI and UX design tools such as Figma and Adobe.</li>
                    </ul>

                    <SubHeadingWrapper>
                        <h3>Soft Skills:</h3>
                    </SubHeadingWrapper>
                    <ul>
                        <li>Language proficiency in Chinese, English, and Spanish</li>
                        <li>Great communication and works well in a team.</li>
                        <li>Excellent adaptability, very easily adjusts to different types of work.</li>
                        <li>Good leadership, looks out for other team members and works very efficiently.</li>
                    </ul>
                </Content>
            </StyledMain>
        </>
    );
}