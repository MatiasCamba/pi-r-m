import { ADD_FAV, FILTER_FAVS, ORDER_FAVS } from './actionTypes'
import { REMOVE_FAV } from './actionTypes'


const initialState = {
    myFavorites: [],
    allCharacters: [],

}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload],
                allCharacters: [...state.allCharacters, action.payload]
            };

        case REMOVE_FAV:
            let favoritesFiltered = state.allCharacters.filter((character) => {
                return character.id !== parseInt(action.payload);
            })
            return {
                ...state,
                myFavorites: favoritesFiltered,
                allCharacters: favoritesFiltered,
            };
        case FILTER_FAVS:
            let copyFilter = [...state.allCharacters];
            let filteredFavs = copyFilter.filter((character) => {
                return character.gender === action.payload;
            })
            return {
                ...state,
                myFavorites: filteredFavs,
            }
        case ORDER_FAVS:
            let copyOrder = [...state.allCharacters];
            return {
                ...state,
                myFavorites: copyOrder.sort((a, b) => {
                    return action.payload === 'A' ? a.id - b.id : b.id - a.id;
                })
            }

        default:
            return {
                ...state
            }
    }
}


export default rootReducer