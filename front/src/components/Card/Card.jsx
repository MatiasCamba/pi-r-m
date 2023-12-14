import React from "react";
import style from './Card.Module.css';
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions'
import { useState, useEffect } from "react";
import { connect } from 'react-redux';



export const Card = ({ character, onClose, addFav, removeFav, myFavorites}) => {
    const [isFav, setIsFav] = useState(false);

    const handleFavorite = () => {
        if (isFav) {
            setIsFav(false);
            removeFav(character.id)
        } else {
            setIsFav(true);
            addFav(character);
        }
    }
    useEffect(() => {
        myFavorites.forEach((fav) => {
           if (fav.id === character.id) {
              setIsFav(true);
           }
        });
     }, [myFavorites]);
    
    return (

        <div className={style.cardContainer}>
            {
                isFav ? (
                    <button onClick={handleFavorite}>❤️</button>
                ) : (
                    <button onClick={handleFavorite}>🤍</button>
                )
            }
            <h2>{character.id}</h2>
            <Link to={`/Detail/${character.id}`}>
                <h3>{character.name}</h3>
            </Link>
            <p>{character.status}</p>
            <p>{character.origin.name}</p>
            <img src={character.image} alt="imagen de personaje de rick y morty" />
            <button onClick={() => onClose(character.id)}>X</button>
        </div>
    )

}

export const mapDispatchToProps = (dispatch) => {
    return {
        addFav: (character) => {
            dispatch(addFav(character))
        },

        removeFav: (id) => {
            dispatch(removeFav(id))
        },
    }
}

export const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);