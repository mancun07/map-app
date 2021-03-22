import {SET_CURRENT, CLEAR_CURRENT, SET_LOADING, GET_DATA, FETCH_LANG_DATA, TOGGLE_MENU, FILTER_BY_BIGGEST} from './types.js'

const CountContextReducer = (state, action) => {
    switch(action.type) {

        case GET_DATA:
            return {
                ...state,
                countries: action.payload.filter(el => {
                    return el.population !== 300
                }),
                loading: false
            }

        case FILTER_BY_BIGGEST:
            return {
                ...state,
                filtered: state.countries.filter(el => {
                    return el.population > action.payload
                })
            }


        case FETCH_LANG_DATA:
            return {
                ...state,
                filtered: action.payload.filter(el => {
                    return el.population !== 300
                }),
                loading: false
            }    
    
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            } 
        
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            } 

        case SET_LOADING:
            return {
                ...state,
                loading: true
            } 

        case TOGGLE_MENU:
            return {
                ...state,
                isOpened: !state.isOpened
            }

        default:
            return state
    }

}

export default CountContextReducer 