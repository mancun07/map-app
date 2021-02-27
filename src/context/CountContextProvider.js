import {createContext, useState} from 'react';

export const CountContext = createContext();

const CountContextProvider = (props) => {

    const [countries, setCountries] = useState(null);
    const [loading, setLoading] = useState(false);
    const [current, setCurrent] = useState(null);

    const fetchData = async () => {
        const res = await fetch('https://restcountries.eu/rest/v2/all');
        const data = await res.json();
        setCountries(data)
    }

    const showDetailedInfo = (el) => {
            setCurrent(el)
    }

    const clearCurrent = () => {
        setCurrent(null);
    }

    return (
        <CountContext.Provider value={{
            countries: countries,
            loading: loading,
            current,
            fetchData,
            showDetailedInfo,
            clearCurrent        
            
            }}>

            {props.children}
        </CountContext.Provider>
    )
}

export default CountContextProvider;