const CountContextReducer = (state, action) => {
    switch(action.type) {

        case 'GET_DATA':
            return {
                ...state,
                countries: action.payload,
                loading: false
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

        default:
            return state
    }

}

export default CountContextReducer 