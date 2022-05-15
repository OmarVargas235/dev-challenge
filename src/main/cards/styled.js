import styled from 'styled-components';

export const ContainerCards = styled.section`
    margin-top: 60px;
    margin-bottom: 20px;
    display: grid;
    gap: 30px;
    overflow-wrap: anywhere;

    .text {
        font-weight: bold;
        margin-bottom: 15px;
    }

    @media (min-width: 700px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 1440px) {
        grid-template-columns: repeat(5, 1fr);
    }

    @media (min-width: 2000px) {
        grid-template-columns: repeat(6, 1fr);
    }

    @media (min-width: 2300px) {
        grid-template-columns: repeat(7, 1fr);
    }
`;

export const Card = styled.div`
    border: 2px solid #7A7A7A;
    border-radius: 8px;
    padding: 20px;
    background-color: white;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    .card__header-text {
        margin-left: 10px;
    }
`;