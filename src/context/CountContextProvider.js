import {createContext, useReducer} from 'react';
import CountContextReducer from './CountContextReducer';
import {SET_CURRENT, CLEAR_CURRENT, SET_LOADING, GET_DATA, FETCH_LANG_DATA, TOGGLE_MENU, FILTER_BY_BIGGEST} from './types.js'

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

// запрос к API на все страны
    const fetchData = async () => {
        try {
            setLoading();
            const res = await fetch('https://restcountries.eu/rest/v2/all');
            const data = await res.json();
            dispatch({type: GET_DATA, payload: data})
        }
        catch (err) {
            console.log(err.message)
        }

    }

// запрос к API по выбранному языку
    const fetchLangData = async (langcode) => {
        setLoading();
        const res = await fetch(`https://restcountries.eu/rest/v2/lang/${langcode}`);
        const data = await res.json();
        dispatch({type: FETCH_LANG_DATA, payload: data})
        toggleMenu();
   }

// для фильтрации данных по численности населения
   const filterByBiggest = (value) => {
    toggleMenu();
    dispatch({type: FILTER_BY_BIGGEST, payload: value})
}

// отразить информацию по стране. Данные добавляем в current
    const showDetailedInfo = (el) => {
        dispatch({type: SET_CURRENT, payload: el})
    }


// очищаем current
    const clearCurrent = () => {
        dispatch({type: CLEAR_CURRENT})
    }

    const setLoading = () => {
        dispatch({type: SET_LOADING})
    }
    
    const toggleMenu = () => {
        dispatch({type: TOGGLE_MENU})
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