import React, { useContext } from 'react';

import SearchInputPage from '../components/searchInputPage';
import { GlobalContext } from '../../../context/globalContext';

const SearchInput = () => {

    const { globalState:{ countries }, setCountriesFilter } = useContext(GlobalContext);

    const handleChange = e => {

        const text = e.target.value;
        const filterCountries = countries.filter(country => country.name.toLowerCase().indexOf(text.toLowerCase()) !== -1 );

        setCountriesFilter(filterCountries);
    }

    return (
        <SearchInputPage
        handleChange={handleChange}
        />
    )
}

export default SearchInput;