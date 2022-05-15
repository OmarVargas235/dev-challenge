import React, { useEffect, useReducer, useCallback } from "react";
import { useQuery } from "@apollo/client";

import { GET_COUNTRIES } from '../graphql/queries';
import { GlobalContext } from "./globalContext"
import { globalReducer } from "./globalReducer";
import { DATA_COUNTRIES, DATA_COUNTRIES_FILTER, CONTINENT } from './types';
import Error from '../layaut/error';
import ScreenLoader from '../layaut/screenLoader';

const INITIAL_STATE = {
    countries: [],
    countriesFilter: [],
    isContinent: true,
}

const GlobalProvider = ({ children }) => {

    const { loading, error, data } = useQuery(GET_COUNTRIES);
    
    const [globalState, dispatch] = useReducer(globalReducer, INITIAL_STATE);
    
    const setCountries = useCallback((countries) => {

        dispatch({
            type: DATA_COUNTRIES,
            payload: countries,
        })

    }, [dispatch]);

    const setCountriesFilter = useCallback((countries) => {

        dispatch({
            type: DATA_COUNTRIES_FILTER,
            payload: countries,
        })

    }, [dispatch]);

    useEffect(() => {

        if (loading) return;
        
        const { countries } = data;

        setCountries(countries);
        setCountriesFilter(countries);

    }, [data, loading, error, setCountries, setCountriesFilter]);

    const setContinent = isContinent => dispatch({
        type: CONTINENT,
        payload: isContinent,
    });
    
    return (
        <GlobalContext.Provider value={{
            globalState,
            setCountriesFilter,
            setContinent,
        }}>
            { loading ? <ScreenLoader /> : <>{
                error !== undefined ? <Error /> : children
            }</> }
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;