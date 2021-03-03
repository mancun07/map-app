import {createContext, useReducer} from 'react';
import CountContextReducer from './CountContextReducer';

export const CountContext = createContext();

const CountContextProvider = (props) => {

    const initialState = {
        countries: [],
        loading: false,
        current: null,
        filtered:null,
        isOpened: false
    }

    const [state, dispatch] = useReducer(CountContextReducer, initialState);

    const fetchData = async () => {
        try {
            setLoading();
            const res = await fetch('https://restcountries.eu/rest/v2/all');
            const data = await res.json();
            dispatch({type: 'GET_DATA', payload: data})
        }

        catch (err) {
            console.log(err.message)
        }

    }


    const fetchLangData = async (langcode) => {
        setLoading();
        const res = await fetch(`https://restcountries.eu/rest/v2/lang/${langcode}`);
        const data = await res.json();
        dispatch({type: 'FETCH_LANG_DATA', payload: data})
        toggleMenu();
   }

   const filterByBiggest = (value) => {
    toggleMenu();
    dispatch({type: 'FILTER_BY_BIGGEST', payload: value})
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

    const toggleMenu = () => {
        dispatch({type: 'MENU_OPENED'})
    }


    return (
        <CountContext.Provider value={{
            countries: state.countries,
            loading: state.loading,
            current: state.current,
            filtered: state.filtered,
            isOpened: state.isOpened,
            fetchData,
            showDetailedInfo,
            clearCurrent,
            filterByBiggest,
            fetchLangData,
            toggleMenu
       
            }}>

            {props.children}
        </CountContext.Provider>
    )
}

export default CountContextProvider;