import { ADD_FAV } from './actionTypes'
import { REMOVE_FAV } from './actionTypes'


const initialState = {
    myFavorites: [],

}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload]
            };

        case REMOVE_FAV:
            let favorites = state.myFavorites.filter((character) => {
                return character.id !== parseInt(action.payload);
            })
            return {
                ...state,
                myFavorites: favorites,
            };
            
        default:
            return {
                ...state
            }
    }
}


export default rootReducer