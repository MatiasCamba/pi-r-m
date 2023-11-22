import React from "react";
import Card from "../Card/Card";

const CardContainer = (props) =>{
    return (
        <div>
           {props.characters.map((character)=>{
            <Card character={character}  key={character.id}/>
           })}
        </div>
    )
}


export default CardContainer;


/* import Card from "./Card.jsx"
 import "./App.css";

const Cards = (props) => {
    
       return (
        <div className="card-container"> 
              {props.characters.map((c) => (
                <Card character={c} key={c.id} onClose={props.onClose} />
              ))}
            </div>
          );
        };


export default Cards */