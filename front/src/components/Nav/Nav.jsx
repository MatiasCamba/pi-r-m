import SearchBar from "../SearchBar/SearchBar";
import React from "react";
import style from './Nav.module.css'
import logo from '../../assets/Images/logo.png'
import { Link } from "react-router-dom";



const Nav = ({onSearch,logOut}) =>{
    
    function randomCharacter(){
        const random = Math.floor(Math.random()*890) +1;
      
        onSearch(random)
     }
    return (
            <div className={style.navContainer}>
                <img className={style.imgLogo} src={logo} alt="logo de rick y morty" />
                    <div className={style.searchContainer}>
                        <button className={style.randomButton}onClick={logOut}>Cerrar Sesion</button>
                        <button className={style.randomButton}onClick={randomCharacter}>Me siento con suerte</button>
                        <SearchBar onSearch={onSearch}/>
                    </div>
                    <div>
                        <Link to={'/Favorites'}><button>Favoritos</button></Link>
                        <Link to={'/About'}><button>Sobre</button></Link>
                        <Link to={'/Home'}><button>Inicio</button></Link>
                       
                    </div>
            </div>
    )
}

export default Nav;

