import React, { useState, useEffect, useContext, useRef, useCallback, Suspense, lazy } from 'react';

import { ContainerCards } from './styled';
import { GlobalContext } from '../../context/globals/globalContext';

const CardPage = lazy(() => import('./components/cardPage'));

const Cards = () => {

    const { globalState:{ isContinent, countriesFilter, darkMode } } = useContext(GlobalContext);

    const observer = useRef(null);

    const [loading, setLoading] = useState(true);
    const [limit, setLimit] = useState(10);
    const [data, setData] = useState([]);

    useEffect(() => {

        const cutCountriesFilter = countriesFilter.slice(0, 10);

        setData(cutCountriesFilter);
        setLoading(false);

    }, [countriesFilter]);
    
    useEffect(() => {

        const cutCountriesFilter = countriesFilter.slice(0, limit);
        setData(cutCountriesFilter);

    }, [limit, countriesFilter]);

    const lastDataTableElementRef = useCallback(node => {

        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver(entries => {
            
            entries[0].isIntersecting && setLimit(prevLimit => prevLimit + 10);

        }, { threshold: 0.5 });

        node && observer.current.observe(node);

    }, []);

    return (
        <>
            {
                loading ? <div>Cargando...</div>
                : <ContainerCards>
                        {
                            data.map((country, index) => (
                                <Suspense key={index} fallback={<div>Cargando...</div>}>
                                    <CardPage
                                        country={country}
                                        isContinent={isContinent}
                                        darkMode={darkMode}
                                        lastDataTableElementRef={lastDataTableElementRef}
                                    />
                                </Suspense>
                            ))
                        }
                </ContainerCards>
            }
        </>
    );
}

export default Cards;