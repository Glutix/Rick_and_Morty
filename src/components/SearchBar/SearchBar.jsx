import { useState } from "react";
import style from "./SearchBar.module.css"

const SearchBar = ({ onSearch }) => {  //ESTA RECIBIENDO LA PROPS LA FUNCION onSearch (nota: Quien envia esta info es NAV)

    const [id, setId] = useState("");

    const hundleChange = (event) => {
        setId(event.target.value); //? revisar en el navegador para mas info
    }

    return (
        /* Recibe por props una función onSearch. La función onSearch se debe ejecutar cuando se haga click en el botón Agregar. */
        <div className={style.conteiner}>
            <input className={style.input} type='search' onChange={hundleChange} value={id} placeholder="Ingresar un id..."/>    {/* VALUE DEBE SER IGUAL AL ID Y EL ID DEBE SER IGUAL AL VALUE */}
            <button className={style.button} onClick={() => { onSearch(id); setId("") }}>Agregar</button>                  {/* Al hacer un click se dispara la funcion onSearch */}
            {/* PARA PASAR UN ARGUMENTO A UNA FUNCION TENEMOS QUE USAR UN CALLBACK --> SI NO USAMOS UN CALLBACK LA FUNCION SE EJECTURA AUTOMATICAMENTE*/}
        </div>
    );
};

export default SearchBar;
