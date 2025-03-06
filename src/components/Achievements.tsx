import { StyledMain, Heading, Content, SubHeadingWrapper } from "./SharedStyles.tsx"
import { useEffect } from "react";

export default function Achievements() {
    useEffect(() => {
        document.title = "Achievements | Resume";
    }, []);

    return (
        <>
            <StyledMain>
                <Heading>Achievements</Heading>
                <Content>
                    <SubHeadingWrapper>
                        <h3>Work Achievements:</h3>
                    </SubHeadingWrapper>
                    <ul>
                        <li>Worked in a team that successful redesigned a client's website, increasing user traffic by 30%.</li>
                        <li>Implemented a performance optimization solution that improved website load speeds by 25%. </li>
                        <li>Collaborated in the design and development of major companies.</li>
                    </ul>

                    <SubHeadingWrapper>
                        <h3>Awards:</h3>
                    </SubHeadingWrapper>
                    <ul>
                        <li>Given the 'Employee of the Year' award in 2024 for major contributions to multiple design projects.</li>
                        <li>Awarded 'Most Creative Designer' in 2024.</li>
                        <li>Awarded 'Outstanding User Interface Design' in 2025.</li>
                    </ul>
                </Content>
            </StyledMain>
        </>
    );
}