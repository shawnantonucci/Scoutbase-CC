import React from "react";
import Links from "./Links";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const SingleCountry = props => {
    const params = props.match.params.code;
    const code = params.toUpperCase();
    console.log(code);

    const GET_COUNTRY_CODE = gql`
        {
            country(code: "${code}") {
                name
                currency
                phone
            }
        }
    `;

    const SingleCountryView = () => {
        const { data, error, loading } = useQuery(GET_COUNTRY_CODE);
        if (loading) {
            return <div>Loading...</div>;
        }
        if (error) {
            return <div>Error! {error.message}</div>;
        }

        console.log(data);
        return (
            <CountryContainer>
                <p><b>Country: </b>{data.country.name}</p>
                <p><b>Currency: </b>{data.country.currency}</p>
                <p><b>Area Code: </b>{data.country.phone}</p>
            </CountryContainer>
        );
    };

    return (
        <Container>
            <Links />
            <SingleCountryView />
        </Container>
    );
};

export default withRouter(SingleCountry);

const Container = styled.div`
    height: 100vh;
`;

const CountryContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    margin-top: 10%;
    border: 1px solid white;
    color: white;
    width: 25%;
    padding: 25px;

    p {
        margin: 0;
    }
`;
