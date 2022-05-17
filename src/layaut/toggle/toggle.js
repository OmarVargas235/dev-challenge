import React from 'react';

import { Container } from './styled';

const Toggle = ({ handleClick }) => (
    <Container>
        <input type="checkbox" id="toggle" className="toggle--checkbox" />

        <label htmlFor="toggle" className="toggle--label" onClick={handleClick}>
            <span className="toggle--label-background"></span>
        </label>
    </Container>
);

export default Toggle;