import styled from "styled-components";
import {Link} from "react-router-dom";

const StyledNav = styled.nav`
    width: 30%;
    
    @media (max-width: 750px) {
        width: 100%;
    }
`;

const StyledUnorderedList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: saddlebrown;
    font-size: calc(2px + 2vw);
    text-align: center;
    list-style: none;
    padding-left: 0;
    
    @media screen and (max-width: 750px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: saddlebrown;
    }
`;

const StyledListItem = styled.li`
    font-size: calc(3px + 3vw);
    width: 90%;
    background-color: maroon;
    padding: 2vh 0;
    margin: 4vh auto;
    
    @media (max-width: 750px) {
        font-size: calc(2px + 1.5vw);
        background-color: maroon;
        padding: 1% .5%;
        margin: 1% .5%;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #D9B382;;
`;

export default function Nav() {
    return (
        <>
            <StyledNav>
                <StyledUnorderedList>
                    <StyledListItem>
                        <StyledLink to={`/`}>Home</StyledLink>
                    </StyledListItem>
                    <StyledListItem>
                        <StyledLink to={`/education`}>Education</StyledLink>
                    </StyledListItem>
                    <StyledListItem>
                        <StyledLink to={`/experience`}>Experience</StyledLink>
                    </StyledListItem>
                    <StyledListItem>
                        <StyledLink to={`/achievements`}>Achievements</StyledLink>
                    </StyledListItem>
                    <StyledListItem>
                        <StyledLink to={`/skills`}>Skills</StyledLink>
                    </StyledListItem>
                    <StyledListItem>
                        <StyledLink to={`/projects`}>Projects</StyledLink>
                    </StyledListItem>
                </StyledUnorderedList>
            </StyledNav>
        </>

    );
}