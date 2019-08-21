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
                    <b>Country Name: </b>
                    <li>{country.name}</li>
                    <b>Continent: </b>
                    <li>{country.continent.name}</li>
                    <div>
                        <b>Languages : </b>
                        <b>Native Language</b>
                    </div>
                    {country.languages.map(language => {
                        return (
                            <li key={language.name}>
                                {language.name} - {language.native}
                            </li>
                        );
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

const CountryContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 0;
    margin-top: 25px;
    flex-flow: wrap;
    width: 100%;
`;

const CountryCard = styled.div`
    border: 1px solid white;
    display: flex;
    flex-direction: column;
    width: auto;
    height: fit-content;
    align-items: flex-start;
    margin: 15px;
    padding: 15px;
    border-radius: 10px;

    li {
        list-style-type: none;
        white-space: nowrap;
        color: white;
    }

    b {
        color: green;
    }
`;
