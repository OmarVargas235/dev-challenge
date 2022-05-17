import { DATA_COUNTRIES, DATA_COUNTRIES_FILTER, CONTINENT, DARK_MODE } from './types';

export const globalReducer = (state, { type, payload }) => {

    switch (type) {

        case DATA_COUNTRIES:
            return { ...state, countries: payload };

        case DATA_COUNTRIES_FILTER:
                return { ...state, countriesFilter: payload };

        case CONTINENT:
            return { ...state, isContinent: payload };

        case DARK_MODE:
            return { ...state, darkMode: payload };

        default:
            return state;
    }
}