import { useState } from "react";
import style from './Form.module.css'




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
        <form action="" className={style.formContainer}>
            <label className={style.formText} htmlFor="email">Email</label>
                 <input  className={style.formEmail} type="email" name="email" value={userData.email} onChange={handleChange}/>

            <label className={style.formText} htmlFor="password">Password</label>
                <input className={style.formPassword}type="password" name="password" value={userData.password} onChange={handleChange}/>

            <button className={style.formButton} onClick={handleSubmit}>Enviar</button>
         
        </form>
    )
}


export default Form;