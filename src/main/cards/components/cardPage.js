import React from 'react';
import { GoMail } from "react-icons/go";

import { Text } from '../../../layaut/text';
import { Card, Header } from '../styled';

const CardPage = () => (
    <section>
        <Text
            size="25px"
            color="#373737"
            className='text'
            as="h2"
        >Spanish</Text>
        <Card>
            <Header>
                <GoMail />
                <span className='card__header-text'>Chile</span>
            </Header>
            <Text
                color="#979797"
                as="p"
            >textotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotexto</Text>
        </Card>
    </section>
);

export default CardPage;