import styled from 'styled-components';

export const Text = styled.div`
    color: ${({ color, theme }) => color || theme.text.primary};
    ${({ size }) => size ? `font-size: ${size}` : ''};
`;