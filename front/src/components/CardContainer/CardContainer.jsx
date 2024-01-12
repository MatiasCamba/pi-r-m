import React from "react";
import Card from "../Card/Card";
import style from './CardContainer.module.css'

const CardContainer = (props) =>{
    return (
        <div className={style.cardContainer}>
           {props.characters.map((character)=>
            <Card  key={character.id} character={character}  onClose={props.onClose}/>
           )}
        </div>
    )
}


export default CardContainer;


