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
        color: #494949;
    }

    .mr {
        margin-right: 15px;
    }

    .ml {
        margin-left: 15px;
    }

    @media (max-width: 700px) {
        justify-content: center;
    }
`;