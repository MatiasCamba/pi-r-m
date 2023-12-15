import React from "react";
import { useState } from "react";
import style from './SearchBar.module.css'




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
        <div className={style.searchContainer}>
            <input className={style.searchInput}value={id} type="search" placeholder="escribi el personaje" onChange={handleChange}/>
            <button className={style.searchButton} onClick={handleClick}>Buscar</button>
        </div>
    )

}

export default SearchBar;