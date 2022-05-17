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
    border: 2px solid ${({ theme }) => theme.bg.borderCard};
    border-radius: 8px;
    padding: 20px;
    background-color: ${({ theme }) => theme.bg.card};
    color: ${({ theme }) => theme.text.primary};
    cursor: pointer;
    transform: scale(1);
    transition: transform .2s ease-in;

    &:hover {
        transform: scale(1.1);
        -webkit-box-shadow: -1px -2px 20px -6px rgba(0,0,0,0.75);
        -moz-box-shadow: -1px -2px 20px -6px rgba(0,0,0,0.75);
        box-shadow: -1px -2px 20px -6px rgba(0,0,0,0.75);
    }
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    .card__header-text {
        margin-left: 10px;
        font-weight: bold;
        font-size: 20px;
        color: ${({ theme }) => theme.text.cardTitle};
    }
`;

export const Body = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    article {
        display: flex;
    }

    .ml {
        margin-left: 5px;
    }

    span {
        font-weight: bold;
    }
`;