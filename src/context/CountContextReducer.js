const CountContextReducer = (state, action) => {
    switch(action.type) {

        case 'GET_DATA':
            return {
                ...state,
                countries: action.payload,
                loading: false
            }

        case 'FILTER_BY_BIGGEST':
            return {
                ...state,
                chosen: null,
                filtered: state.countries.filter(el => {
                    return el.population > action.payload
                })
            }


        case 'FETCH_LANG_DATA':
            return {
                ...state,
                filtered:null,
                chosen: action.payload,
                loading: false
                // filtered: state.countries.filter(el => {
                //     if (el.languages.forEach(newEl => {
                //         newEl.iso639_1 === action.payload
                //     })) {
                //         return el.languages
                //     }
                // })
                // .filter(el => el.languages.iso639_1 === action.payload)
            }    
    
        case 'SET_CURRENT':
            return {
                ...state,
                current: action.payload
            } 
        
        case 'CLEAR_CURRENT':
            return {
                ...state,
                current: null
            } 

        case 'SET_LOADING':
            return {
                ...state,
                loading: true
            } 

        case 'MENU_OPENED':
            return {
                ...state,
                isOpened: !state.isOpened
            }

        default:
            return state
    }

}

export default CountContextReducer 