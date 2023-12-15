import { connect } from 'react-redux'
import { Card } from '../Card/Card'
import { filterFavs,orderFavs } from '../../redux/actions'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import style from './Favorites.module.css'

export const Favorites = (state) => {
    const [aux,setAux] =useState();

    const dispatch = useDispatch();

    const handleOrder = (event) =>{
        dispatch(orderFavs(event.target.value))
        setAux(!aux)
    }
    const handleFilter = (event) =>{
        dispatch(filterFavs(event.target.value))
    }
    return (
        <div className={style.favContainer}>
            <select className={style.favSelect} onChange={handleOrder}>
                <option className={style.favOption} value="A">Ascendente</option>
                <option className={style.favOption} value="D">Descendente</option>
            </select>
            <select className={style.favSelect} onChange={handleFilter}> 
            <option className={style.favOption} value="Male">Masculino</option>
            <option className={style.favOption} value="Female">Femenino</option>
            <option className={style.favOption} value="Genderless">Sin Genero</option>
            <option className={style.favOption} value="unknown">Desconocido</option>
            </select>
           
            {state.myFavorites?.map((favorite) => (
                <Card
                    character={favorite}
                    key={favorite.id}
                />
            )
            )}
        </div>
    )
}

export const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites);