import './App.css'
import CardContainer from './components/CardContainer/CardContainer'
import Nav from './components/Nav/Nav'
import { useState } from 'react'
import axios from 'axios';
//import Card from './components/Card/Card'



function App() {
   const [characters, setCharacters] = useState([]);
   const APIKEY = 'pi-matiascamba';

   function onSearch(id) {
      axios(`https://rym2.up.railway.app/api/character/${id}?key=${APIKEY}`).then(
         ({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
               console.log(data.name);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         }
      )
   };
   return (
      <div>
         <Nav onSearch={onSearch} />
         <CardContainer characters={characters} />
            
      </div>
   )
}

export default App
