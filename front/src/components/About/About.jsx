import style from './About.module.css'

const About = () => {
    return (
        <div className={style.aboutContainer}>
            <h1 className={style.aboutTitle}>Hola soy Matias Camba {":)"} </h1>
            <hr />
            <p className={style.aboutText}>Estudiante de la plataforma</p>
            <p className={style.aboutText}>Con ganas de aprender... </p>


        </div>
    )
}

export default About;