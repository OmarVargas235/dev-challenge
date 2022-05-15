import { DATA_COUNTRIES, DATA_COUNTRIES_FILTER, CONTINENT } from './types';

export const globalReducer = (state, { type, payload }) => {

    switch (type) {

        case DATA_COUNTRIES:
            return { ...state, countries: payload };

        case DATA_COUNTRIES_FILTER:
                return { ...state, countriesFilter: payload };

        case CONTINENT:
            return { ...state, isContinent: payload };

        default:
            return state;
    }
}