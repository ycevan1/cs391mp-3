import {StyledMain, Heading} from "./SharedStyles.tsx";
import Calculator from "./Calculator";
import { useEffect } from "react";

export default function Projects() {
    useEffect(() => {
        document.title = "Projects | Resume";
    }, []);

    return (
        <>
            <StyledMain>
                <Heading>Projects</Heading>
                <Calculator />
            </StyledMain>
        </>
    );
}