import React from "react";
import styled from 'styled-components';
import { ApolloProvider } from "@apollo/client";

import GlobalProvider from './context/globals/globalProvider';
import ThemeProvider from './context/themeProvider';
import Search from './main/search/';
import Cards from './main/cards';
import { client } from './graphql/apolloClient';
import Toggle from './layaut/toggle/toggle';
import ArrowButtonUp from './layaut/arrowButtonUp';
import { useTheme } from './hooks/useTheme';

const Main = styled.main`
    padding: 0 100px;
    background-color: ${({ theme }) => theme.bg.primary};
    min-height: 100vh;

    @media (max-width: 426px) {
        padding-left: 30px;
        padding-right: 30px;
    }
`;

const App = () => {

    const { darkMode, toggleTheme } = useTheme();
    
    return (
        <ApolloProvider client={client}>
            <ThemeProvider darkMode={darkMode}>
                <GlobalProvider darkMode={darkMode}>
                    <ArrowButtonUp />

                    <Main>
                        <Toggle
                            handleClick={toggleTheme}
                        />
        
                        <Search />
                        <Cards />
                    </Main>
                </GlobalProvider>
            </ThemeProvider>
        </ApolloProvider>
    );
}

export default App;
