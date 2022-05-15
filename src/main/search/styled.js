import styled from 'styled-components';

export const Container = styled.section`
    margin-top: 60px;

    .input {
        width: 100%;
    }

    .text {
        margin-bottom: 20px;
    }
`;

export const ContainerGroupBy = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 700px) {
        display: block;

        .text__group-by {
            margin-bottom: 20px;
            text-align: center;
        }
    }
`;

export const CotainerButton = styled.article`
    display: flex;

    .continent {
        margin-right: 20px;
        color: #494949;
    }

    @media (max-width: 700px) {
        justify-content: center;
    }
`;