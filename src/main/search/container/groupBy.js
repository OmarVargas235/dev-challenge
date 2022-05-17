import React, { useState, useContext } from 'react';

import { ContainerGroupBy, CotainerButton } from '../styled';
import { Text } from '../../../layaut/text';
import Button from '../../../layaut/button/button';
import { GlobalContext } from '../../../context/globals/globalContext';

const idContinent = 1;

const GroupBy = () => {

    const { setContinent } = useContext(GlobalContext);

    const [isActiveContinent, setIsActiveContinent] = useState(true);

    const handleClick = id => {

        setIsActiveContinent(id === idContinent);
        setContinent(id === idContinent);
    }

    return <ContainerGroupBy>
        
        <Text as='h2' className='text__group-by'>Group by:</Text>

        <CotainerButton>
            <Button
                classes={`mr ${isActiveContinent ? '' : "continent"}`}
                color={isActiveContinent ? '' : "#E6E6E6"}
                id={1}
                handleClick={handleClick}
            >Continent</Button>

            <Button
                classes={`ml ${isActiveContinent ? 'continent' : ""}`}
                color={isActiveContinent ? '#E6E6E6' : ""}
                id={2}
                handleClick={handleClick}
            >Language</Button>
        </CotainerButton>
    </ContainerGroupBy>
}

export default GroupBy;