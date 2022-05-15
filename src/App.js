import React from "react";
import styled from 'styled-components';
// import ApolloClient from "apollo-boost";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import Search from './main/search/';
import Cards from './main/cards';

const client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql",
    cache: new InMemoryCache(),
});

const Main = styled.main`
    padding: 0 100px;

    @media (max-width: 426px) {
        padding-left: 30px;
        padding-right: 30px;
    }
`;

const App = () => (
    <ApolloProvider client={client}>
        <Main>
            <Search />
            <Cards />
        </Main>
    </ApolloProvider>
);
export default App;
