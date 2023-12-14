import React from "react";
import { useState } from "react";




const SearchBar = ({onSearch}) =>{

    const [id,setId] = useState("");

    const handleChange = (e) =>{
        const {value} = e.target
        
        setId(value); 
    }
    const handleClick = () => {
        onSearch(id);

        setId('');
       
    }
    
    return (
        <div>
            <input value={id} type="search" placeholder="escribi el personaje" onChange={handleChange}/>
            <button onClick={handleClick}>Buscar</button>
        </div>
    )

}

export default SearchBar;