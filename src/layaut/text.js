import styled from 'styled-components';

export const Text = styled.div`
    color: ${({ color }) => color || '#3A3A3A'};
    ${({ size }) => size ? `font-size: ${size}` : ''};
`;