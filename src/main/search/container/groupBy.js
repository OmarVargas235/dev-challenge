import React from 'react';

import { ContainerGroupBy, CotainerButton } from '../styled';
import { Text } from '../../../layaut/text';
import Button from '../../../layaut/button/button';

const GroupBy = () => {

    return <ContainerGroupBy>
        
        <Text as='h2' className='text__group-by'>Group by:</Text>

        <CotainerButton>
            <Button
                classes="continent"
                color="#E6E6E6"
            >Continent</Button>

            <Button>Language</Button>
        </CotainerButton>
    </ContainerGroupBy>
}

export default GroupBy;