import axios from 'axios';
import {useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';


const Detail = () =>{
    const [character,setCharacter] = useState({});
    const {id} = useParams();
    const APIKEY = 'pi-matiascamba';
    useEffect(() => {
        axios(`https://rym2.up.railway.app/api/character/${id}?key=${APIKEY}`).then(
           ({ data }) => {
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
        <div>
            <h1>{character.name}</h1>
        </div>
    )
}

export default Detail;