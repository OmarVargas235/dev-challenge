import React, { useState } from 'react';
import { ContainerTextField, Input, ContainerInput, Label } from './styled';

const TextField = ({ classes="", icon=null, edge=null, placeholder="", label, type="text", name, handleChange, isError=false }) => {

    const [isFocus, setIsFocus] = useState(false);

    return <ContainerTextField
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
    >

        { label ? <Label>{label}</Label> : null }

        <ContainerInput
            isFocus={isFocus}
            edge={edge}
            isError={isError}
            className={classes}
        >
            { edge === 'start' ? icon : null }

            <Input
                placeholder={placeholder}
                type={type}
                name={name}
                onChange={handleChange}
            />

            { edge === 'end' ? icon : null }
        </ContainerInput>
    </ContainerTextField>
}

export default TextField;