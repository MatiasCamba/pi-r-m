import React from "react";
import Card from "../Card/Card";
import './CardContainer.Module.css'

const CardContainer = (props) =>{
    return (
        <div className="cardContainer">
           {props.characters.map((character)=>
            <Card character={character}  key={character.id} onClose={props.onClose}/>
           )}
        </div>
    )
}


export default CardContainer;


