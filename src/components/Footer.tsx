import styled from "styled-components";
import {Link} from "react-router-dom";

const StyledFooter = styled.footer`
    background-color: #131313;
    color: #dcdcdc;
    padding: 1vh 1vw;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

const StyledFooterLink = styled(Link)`
    color: #dcdcdc;
`;

export default function Footer() {
    return (
        <StyledFooter>
            <p>
                All Rights Reserved by Yuming Chen <StyledFooterLink to={``}>Credits</StyledFooterLink> &copy;
            </p>
        </StyledFooter>
    );
}