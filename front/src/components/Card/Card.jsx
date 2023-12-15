import React from "react";
import style from './Card.module.css';
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions'
import { useState, useEffect } from "react";
import { connect } from 'react-redux';



export const Card = ({ character, onClose, addFav, removeFav, myFavorites }) => {
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
        myFavorites?.forEach((fav) => {
            if (fav.id === character.id) {
                setIsFav(true);
            }
        });
    }, [myFavorites]);

    return (

        <div className={`${style.cardContainer} ${style.card}`}>

            {
                isFav ? (
                    <button className={style.favButton} onClick={handleFavorite}>❤️</button>
                ) : (
                    <button className={style.favButton} onClick={handleFavorite}>🤍</button>
                )
            }
            <h2 className={style.cardId}>{character.id}</h2>
            <Link to={`/Detail/${character.id}`}>
                <h3 className={style.cardName}>{character.name}</h3>
            </Link>

            <p className={style.cardStatus}>{character.status}</p>
            <p className={style.cardOrigin}>{character.origin.name}</p>

            <img className={style.cardImage} src={character.image} alt="imagen de personaje de rick y morty" />
            <hr />
            <button className={style.cardButton} onClick={() => onClose(character.id)}>X</button>
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