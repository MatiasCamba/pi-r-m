import './App.css'
import CardContainer from './components/CardContainer/CardContainer'
import Nav from './components/Nav/Nav'
import { useState , useEffect} from 'react'
import axios from 'axios';
import { Route, Routes ,useNavigate} from 'react-router-dom';
import Detail from './components/Detail/Detail';
import About from './components/About/About';
import Form from './components/Form/Form';
import { useLocation } from 'react-router-dom';
import Favorites from './components/Favorites/Favorites'




function App() {
   const [characters, setCharacters] = useState([]);
   //const APIKEY = 'pi-matiascamba';
   const location = useLocation();
   const [access, setAccess] = useState(false);
   const email = "";
   const password = "";
   const navigate = useNavigate();
   

   function onSearch(id) {
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
         ({ data }) => {
            const repeated = characters.some(characters => characters.id === data.id)
            if (data.name && !repeated) {
               setCharacters((oldChars) => [...oldChars, data]);
               console.log(data.name);
            } else if (repeated) {
               window.alert('Ese personaje ya esta en tu lista!')
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         }
      )
   }

   function onClose(id) {
      const deleted = characters.filter(characters => characters.id !== parseInt(id))
      setCharacters(deleted)
   }

   function login(userData){
      
     if(userData.email === email && userData.password === password){
      setAccess(true)
      navigate('/Home');
     }else{
      alert("usuario invalido!")
     }
      

   }
   function logOut(){
      setAccess(false);
      navigate('/');
   }
   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   return (
      <div>
          {location.pathname !== '/' && <Nav onSearch={onSearch} logOut={logOut}/>}
         <Routes>
            <Route path='/' element={<Form onLogin={login}/>}/>
            <Route path='/Home' element={<CardContainer characters={characters} onClose={onClose} />} />
            <Route path='Detail/:id' element={<Detail />} />
            <Route path='About' element={<About />} />
            <Route path='Favorites' element={<Favorites/>}/>
           
         </Routes>


      </div>
   )
}

export default App
