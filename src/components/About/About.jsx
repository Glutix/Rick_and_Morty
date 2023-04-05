import style from "./About.module.css"

const About = () => {
    return (
        <div className={style.container}>
            <h1 className = {style.title}>Glutix</h1>
            <img className = {style.image} src={require("../../img/Perfil.jpg")} alt="Foto de perfil" />
            <p className = {style.parrafo}>TENGO QUE ESCRIBIR MAS COSAS SOBRE</p>
            <p className = {style.parrafo}>ESTE ABOUT PARA COMPLETAR LAS HW</p>
            <p className = {style.parrafo}>DEBERIA IR INFORMACION MIA ACA</p>
            <p className = {style.parrafo}>PARA QUE LOS USUARIOS ME CONOZCAN</p>
            <p className = {style.parrafo}> XDDDDDDDDDDDDDDDD </p>
        </div>


    );
};
export default About;