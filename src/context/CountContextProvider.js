import {createContext, useReducer} from 'react';
import CountContextReducer from './CountContextReducer';

export const CountContext = createContext();

const CountContextProvider = (props) => {

    const initialState = {
        countries: [],
        loading: false,
        current: null,
        filtered:null,
        chosen: null,
        langlist: []
    }

    const [state, dispatch] = useReducer(CountContextReducer, initialState);

    const fetchData = async () => {
        setLoading();
        const res = await fetch('https://restcountries.eu/rest/v2/all');
        const data = await res.json();
        dispatch({type: 'GET_DATA', payload: data})
    }

    const fetchDataReduced = async () => {
        setLoading();
        const res = await fetch('https://restcountries.eu/rest/v2/all?fields=name;languages;');
        const data = await res.json();
        dispatch({type: 'GET_LANGUAGES', payload: data})
    }

    const fetchLangData = async (langcode) => {
        setLoading();
        const res = await fetch(`https://restcountries.eu/rest/v2/lang/${langcode}`);
        const data = await res.json();
        dispatch({type: 'FETCH_LANG_DATA', payload: data})
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

    const filterByBiggest = (value) => {
        dispatch({type: 'FILTER_BY_BIGGEST', payload: value})
    }

 



    return (
        <CountContext.Provider value={{
            countries: state.countries,
            loading: state.loading,
            current: state.current,
            countriesbylanguage: state.countriesbylanguage,
            langlist: state.langlist,
            filtered: state.filtered,
            chosen: state.chosen,
            fetchData,
            showDetailedInfo,
            clearCurrent,
            filterByBiggest,
            fetchDataReduced,
            fetchLangData 
       
          
          
            
            }}>

            {props.children}
        </CountContext.Provider>
    )
}

export default CountContextProvider;