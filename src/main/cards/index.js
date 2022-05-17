import React, { useContext } from 'react';

import { ContainerCards } from './styled';
import CardPage from './components/cardPage';
import { GlobalContext } from '../../context/globals/globalContext';

const Cards = () => {

    const { globalState:{ isContinent, countriesFilter, darkMode } } = useContext(GlobalContext);

    return (
        <ContainerCards>
            {
                countriesFilter.map((country, index) => (
                    <CardPage
                        key={index}
                        country={country}
                        isContinent={isContinent}
                        darkMode={darkMode}
                    />
                ))
            }
        </ContainerCards>
    );
}

export default Cards;