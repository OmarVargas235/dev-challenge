import React from 'react';

import { ContainerCards } from './styled';
import CardPage from './components/cardPage';

const Cards = () => (
    <ContainerCards>
        {
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((data, index) => (
                <CardPage
                    key={index}
                />
            ))
        }
    </ContainerCards>
);

export default Cards;