import React from "react";
import Links from "./Links";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import styled from "styled-components";

const GET_COUNTRIES = gql`
    {
        countries {
            name
            code
            languages {
                name
                native
            }
            continent {
                name
            }
        }
    }
`;

const Country = () => {
    const { data, error, loading } = useQuery(GET_COUNTRIES);
    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error! {error.message}</div>;
    }

    return (
        <CountryContainer>
            {data.countries.map(country => (
                <CountryCard key={country.code}>
                    <li>
                        <b>Continent: </b>
                        {country.continent.name}
                    </li>
                    <li>
                        <b>Country Name: </b>
                        {country.name}
                    </li>
                    <b>Languages spoken:</b>
                    {country.languages.map(language => {
                        return <li key={language.name}>{language.name} {language.native}</li>;
                    })}
                </CountryCard>
            ))}
        </CountryContainer>
    );
};

const Countries = () => {
    return (
        <div>
            <Links />
            <Country />
        </div>
    );
};

export default Countries;

const CountryCard = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    width: 20%;
    height: auto;
    align-items: flex-start;
    margin: 15px;
    padding: 15px;

    div {
        margin: 5px;
    }

    li {
        list-style-type: none;
    }
`;

const CountryContainer = styled.div`
    display: flex;
    justify-content: center;
    border: 1px solid black;
    flex-flow: wrap;
    width: 100%;
`;
