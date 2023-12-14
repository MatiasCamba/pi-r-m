import { useState } from "react";




const Form = ({onLogin}) => {

    const [userData,setUserData] = useState({
        email: '',
        password : '',
    })

    const [errors,setErrors] = useState({
        
    })

    const handleChange = (event) =>{
        const {name, value} = event.target;
        setUserData(prevState =>({
            ...prevState,
            [name]:value,
        })
        
        )
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
       onLogin(userData);
    }

    return (
        <form action="">
            <label htmlFor="email">Email</label>
                 <input type="email" name="email" value={userData.email} onChange={handleChange}/>

            <label htmlFor="password">Password</label>
                <input type="password" name="password" value={userData.password} onChange={handleChange}/>

            <button onClick={handleSubmit}>Enviar</button>
         
        </form>
    )
}


export default Form;