import {ADD_FAV} from './actionTypes';
import { REMOVE_FAV } from './actionTypes';
import { FILTER_FAVS } from './actionTypes';
import { ORDER_FAVS} from './actionTypes';
import axios from 'axios';


const URL = 'http://localhost:3001/rickandmorty/fav'

export const addFav = (character) => {
    return (dispatch) => {
       axios.post(URL, character).then(({ data }) => {
          return dispatch({
             type: ADD_FAV,
             payload: data,
          });
       });
    };
 };

 export const removeFav = (id) => {
    
    return (dispatch) => {
       axios.delete(`${URL}/${id}`).then(({ data }) => {
          return dispatch({
             type: REMOVE_FAV,
             payload: data,
       });
       });
    };
 };
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