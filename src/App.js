import React from "react";
import styled from 'styled-components';
import { ApolloProvider } from "@apollo/client";

import GlobalProvider from './context/globalProvider';
import Search from './main/search/';
import Cards from './main/cards';
import { client } from './graphql/apolloClient';

const Main = styled.main`
    padding: 0 100px;

    @media (max-width: 426px) {
        padding-left: 30px;
        padding-right: 30px;
    }
`;

const App = () => (
    <ApolloProvider client={client}>
        <GlobalProvider>
            <Main>
                <Search />
                <Cards />
            </Main>
        </GlobalProvider>
    </ApolloProvider>
);
export default App;
