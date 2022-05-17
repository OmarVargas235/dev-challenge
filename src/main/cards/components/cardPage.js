import React from 'react';
import { GoMail } from "react-icons/go";

import { Text } from '../../../layaut/text';
import { Card, Header, Body } from '../styled';

const CardPage = ({ country, isContinent, darkMode }) => (
    <section>
        <Text
            size="25px"
            className='text'
            as="h2"
        >{isContinent ? country.continent.name : country.languages.map(({ name }) => name).join()}</Text>
        
        <Card>
            <Header>
                <GoMail fontSize={20} />
                <span className='card__header-text'>{ country.name }</span>
            </Header>

            <Body>
                <article>
                    <span>Capital:</span>

                    <Text
                        color={darkMode ? "#FFECEC" : "#919191"}
                        as="p"
                        className='ml'
                    >{ country.capital }</Text>
                </article>

                <article>
                    <span>Moneda:</span>

                    <Text
                        color={darkMode ? "#FFECEC" : "#919191"}
                        as="p"
                        className='ml'
                    >{ country.currency }</Text>
                </article>

                <article>
                    <span>Idioma:</span>

                    <Text
                        color={darkMode ? "#FFECEC" : "#919191"}
                        as="p"
                        className='ml'
                    >{ country.native }</Text>
                </article>
            </Body>
        </Card>
    </section>
);

export default CardPage;