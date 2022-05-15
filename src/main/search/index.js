import React from 'react';

import SearchInput from './container/search';
import GroupBy from './container/groupBy';
import { Text } from '../../layaut/text';
import { Container } from './styled';

const Search = () => {

    return (
        <Container>
            <Text as='h1' className='text'>Country Search</Text>

            <SearchInput />

            <GroupBy />
        </Container>
    )
}

export default Search;