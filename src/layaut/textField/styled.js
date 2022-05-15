import styled from "styled-components";

const styles = () => (`
    padding: 12px;
    display: inline-block;
    border: 1px solid #9A9A9A;
    border-radius: 3px;
    box-sizing: border-box;
    outline: none;
    transition: border .1s ease-in-out;
    font-size: 14px;
    color: #424242;
    background-color: white;
`);

export const ContainerTextField = styled.div`
    span {
        margin-bottom: 10px;
        display: block;
    }
`;

export const Input = styled.input`
    ${styles()}
    border: none;

    &:focus {
        border: none;
    }
`;

export const ContainerInput = styled.div`
    ${styles()}
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 25ch;
    ${({ edge }) => edge && (edge === 'start' ? 'padding-left: 12px' : 'padding-right: 12px')};

    border: 2px solid ${({ isFocus, isError }) => isFocus
    ? (isError ? '#D32F2F' : '#3A3A3A')
    : (isError ? '#D32F2F' : '#9A9A9A') };

    svg {
        cursor: pointer;
    }

    input {
        width: 100%;
        color: ${({ isError }) => isError ? '#D32F2F' : '#424242'};
    }
`;