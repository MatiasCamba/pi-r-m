import {ADD_FAV} from './actionTypes';
import { REMOVE_FAV } from './actionTypes';
import { FILTER_FAVS } from './actionTypes';
import { ORDER_FAVS} from './actionTypes';



export const addFav = (character)=> {
    return {
        type: ADD_FAV,
        payload: character,
    }

}

export const removeFav = (id) => {
    return {
        type: REMOVE_FAV,
        payload: id,
    }

}
export const filterFavs= (gender) =>{
    return {
        type: FILTER_FAVS,
        payload: gender,
    }
}


export const orderFavs = (order) =>{
return{
    type: ORDER_FAVS,
    payload : order,
}
}