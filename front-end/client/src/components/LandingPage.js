import React from "react";
import Links from "./Links";
import styled from "styled-components";

const LandingPage = () => {
    return (
        <Container>
            <Links />
            <p>
                Click the Countries tab in the navbar to display all countries
                with the relevent data
            </p>
            <p>
                To access an individual country with the relevent data add to the
                url /countries/code
            </p>
            <p>example: /countries/ad</p>
        </Container>
    );
};

export default LandingPage;

const Container = styled.div`
    height: 100vh;

    p {
        color: white;
    }
`;
