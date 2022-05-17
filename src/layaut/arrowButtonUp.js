import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { AiOutlineArrowUp } from "react-icons/ai";

const Container = styled.section`
    position: fixed;
    z-index: 2;
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    background-color: ${({ theme }) => theme.bg.arrow};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.text.arrow};;
    cursor: pointer;
    font-size: 30px;
    -webkit-box-shadow: 2px -1px 21px -8px rgba(0,0,0,0.75);
    -moz-box-shadow: 2px -1px 21px -8px rgba(0,0,0,0.75);
    box-shadow: 2px -1px 21px -8px rgba(0,0,0,0.75);
    opacity: ${({ isPositionFixed }) => isPositionFixed ? '1' : '0'};
    transition: opacity .5s ease-in-out;
`;

const ArrowButtonUp = () => {

    const [isPositionFixed, setIsPositionFixed] = useState(false);

    useEffect(() => {
		
		function postionFixed() {

            setIsPositionFixed(window.scrollY > 400);
		}

		window.addEventListener('scroll', postionFixed);
	
		return () => window.removeEventListener('scroll', postionFixed);

	}, []);

    const up = () => {

        window.scrollTo(0, 0);
    }

    return (
        <Container
            onClick={up}
            isPositionFixed={isPositionFixed}
        >
            <AiOutlineArrowUp />
        </Container>
    );
}

export default ArrowButtonUp;