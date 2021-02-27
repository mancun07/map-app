import {createContext, useReducer} from 'react';
import CountContextReducer from './CountContextReducer';

export const CountContext = createContext();

const CountContextProvider = (props) => {

    const initialState = {
        countries: [],
        loading: false,
        current: null
    }

    const [state, dispatch] = useReducer(CountContextReducer, initialState);

    const fetchData = async () => {
        setLoading();
        const res = await fetch('https://restcountries.eu/rest/v2/all');
        const data = await res.json();
        dispatch({type: 'GET_DATA', payload: data})
    }

    
    const showDetailedInfo = (el) => {
        dispatch({type: 'SET_CURRENT', payload: el})
    }

    const clearCurrent = () => {
        dispatch({type: 'CLEAR_CURRENT'})
    }

    const setLoading = () => {
        dispatch({type: 'SET_LOADING'})
    }



    return (
        <CountContext.Provider value={{
            countries: state.countries,
            loading: state.loading,
            current: state.current,
            fetchData,
            showDetailedInfo,
            clearCurrent        
            
            }}>

            {props.children}
        </CountContext.Provider>
    )
}

export default CountContextProvider;