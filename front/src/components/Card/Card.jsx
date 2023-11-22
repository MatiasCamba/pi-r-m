import React from "react";


const Card = ({ character }) => {
    console.log("hola")
    return (
        <div>
            <h2>{character.id}</h2>
            <h3>{character.name}</h3>
            <p>{character.status}</p>
            <p>{character.origin.name}</p>
            <img src={character.image} alt="imagen de personaje de rick y morty" />
            <button onClick={() => {
                alert("Cerrando personaje!")
            }}>X</button>
        </div>
    )

}

export default Card;