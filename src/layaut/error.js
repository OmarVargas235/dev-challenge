import React from 'react';
import styled from 'styled-components';
import { GiDoubleFaceMask } from "react-icons/gi";

import { Text } from './text';

const Container = styled.main`
    background-color: #1E1E1E;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    section {
        text-align: center;
    }
`;

const Error = () => (
    <Container>
        <section>
            <GiDoubleFaceMask
                fontSize={300}
                color="#EC852A"
            />

            <Text
                color="#DE650E"
                size="23px"
            >Oops ha ocurrido un error</Text>
        </section>
    </Container>
);

export default Error;