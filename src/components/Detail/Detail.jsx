import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Detail = () => {

    const { id } = useParams(); //* useParams nos devuelve un objeto, y dentro de ese objeto hay una propiedad id

    //? Estado local
    const [character, setCharacter] = useState({}); //* useState es un array de 2 posiciones. [estado, fn()] la fn es la que me permite modificar el estado

    //? Peticion
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => { //* axios me trae un objeto gigante donde guarda la peticion en el propiedad data por eso hacemos destructuring de data
            if (data.name) {
                setCharacter(data);
            } else {
                alert('No hay personajes con ese ID');
            }
        });
        return setCharacter({}); //* Cuando se desmonta el componente setea el estado en VACIO
    }, [id]); //* CUANDO CAMBIE EL ID SE EJECUTA EL AXIOS, (Este array de dependencias es el estado de update)

    return (
        //* Nota: si intento renderizar algo que no existe se rompe todo. por lo tanto hay que comprobar si existe la informacion
        //* Se puede usar varios forma de renderizar un componente de forma condicional
        //* Tenemos las siguientes opciones: operador ternario. o un valor booleano, o condicional chaining
        <div>
            <h1>----- Details ----</h1>
            <h2>Name | {character?.name}</h2>
            <h2>Status | {character?.status}</h2>
            <h2>Specie | {character?.specie}</h2>
            <h2>Gender | {character?.gender}</h2>
            <h2>Origin | {character?.origin?.name}</h2>
            <img src={character?.image} alt={character?.name} />
        </div>
    );
};


export default Detail;