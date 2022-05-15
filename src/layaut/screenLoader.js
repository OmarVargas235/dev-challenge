import React from 'react';
import styled, { keyframes } from 'styled-components';
import { BiLoaderCircle } from "react-icons/bi";

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

const Container = styled.section`
    background-color: #1E1E1E;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .icon {
        animation: ${rotate} 2s linear infinite;
    }
`;

const ScreenLoader = () => (
    <Container>
        <BiLoaderCircle
            fontSize={100}
            color="white"
            className='icon'
        />
    </Container>
);

export default ScreenLoader;