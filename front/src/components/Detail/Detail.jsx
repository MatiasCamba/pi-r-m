import axios from 'axios';
import {useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
import style from './Detail.module.css'


const Detail = () =>{
    const [character,setCharacter] = useState({});
    const {id} = useParams();
    //const APIKEY = 'pi-matiascamba';
    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
           ({ data }) => {
            console.log(data)
              if (data.name) {
                 setCharacter(data);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           }
        );
        return setCharacter({});
     }, [id]);
    
    return(
        <div className={style.detailContainer}>
            <h1 className={style.detailTitle}>{character.name}</h1>
            <hr />
            <img className={style.detailImage}src={character.image} alt={`imagen de ${character.name} de rick and morty`} />
            <p className={style.details}>{character.status}</p>
        </div>
    )
}

export default Detail;