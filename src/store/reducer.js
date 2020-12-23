import { USERNAME_CHANGE,
        CHAR_ORIGIN_CHANGE
        } from './actionNames';

const reducer = (state, action) => {

    switch(action.type) {
        
        case USERNAME_CHANGE: 
        return {
            ...state,
            userName: action.payload
        }

        case CHAR_ORIGIN_CHANGE:
            return {
                ...state,
                currentOrigin: action.payload
            }
        
        default:
            return state;
    }
}

export default reducer;