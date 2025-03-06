import styled from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    padding: 1vh 1vw;
    background-color: #131313;
    color: white;
    
    @media (max-width: 750px) {
        align-items: center;
    }
`;

export default function Header() {
    return (
        <StyledHeader>
            <h1>Yuming Chen</h1>
            <p>My Online Resume</p>
        </StyledHeader>
    );
}