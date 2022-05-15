import React from "react";
import { useQuery, gql } from "@apollo/client";

const EXCHANGE_RATES = gql`
    query getCharactersWithIdAndName {
        characters {
            results {
                id
                name
                status
            }
        }
    }
`;

const Prueba = () => {

    const { loading, error, data } = useQuery(EXCHANGE_RATES);
    console.log(loading, error, data);

    return (
        <div>
            <h2>
                My first Apollo app{" "}
                
                <span role="img" aria-label="Rocket">
                    🚀
                </span>
            </h2>
        </div>
    );
}

export default Prueba;
