import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Links = () => {
    return (
        <NavBar>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/countries/">Countries</NavLink>
        </NavBar>
    );
};

export default Links;

const NavBar = styled.nav`
    display: flex;
    align-items: center;
    height: 50px;
`;

const NavLink = styled(Link)`
    margin: 0 3% 0 3%;
    text-decoration: none;
    color: black;

    :hover {
        color: red;
    }
`;
