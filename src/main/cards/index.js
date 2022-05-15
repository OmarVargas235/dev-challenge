import React, { useContext } from 'react';

import { ContainerCards } from './styled';
import CardPage from './components/cardPage';
import { GlobalContext } from '../../context/globalContext';

const Cards = () => {

    const { globalState:{ isContinent, countriesFilter } } = useContext(GlobalContext);

    return (
        <ContainerCards>
            {
                countriesFilter.map((country, index) => (
                    <CardPage
                        key={index}
                        country={country}
                        isContinent={isContinent}
                    />
                ))
            }
        </ContainerCards>
    );
}

export default Cards;