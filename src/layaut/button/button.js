import React, { useRef } from 'react';

import { useRippleEffect } from '../../hooks/useRippleEffect';
import { ButtonStyled } from './styled';

const Button = ({ children, classes="", color="", fullWidth=false, icon, edge=null, disabled=false, type="button", handleClick=()=>{} }) => {

    const optionRef = useRef(null);

    const [addEffectRipple] = useRippleEffect(optionRef);

    return (
        <ButtonStyled
            className={`${classes} container-ripple`}
            color={color}
            ref={optionRef}
            onMouseDown={addEffectRipple}
            fullWidth={fullWidth}
            edge={edge}
            type={type}
            onClick={handleClick}
            disabled={disabled}
        >
            {edge === 'start' && icon}

            <span>{ children }</span>

            {edge === 'end' && icon}
        </ButtonStyled>
    );
}

export default Button;