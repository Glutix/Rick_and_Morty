//! Librerias
import './App.css';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import axios from 'axios';

//! Componentes
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';

const URL_BASE = "";
const API_KEY = "";


function App() {
    //crear un estado (UN ESTADO ES ALGO INTERNO DEL COMPONENTE -> NO ES UNA VARIABLE NO SE PUEDE USAR PUSH etc..)
    const [characters, setCharacters] = useState([]);   //useState me retorna un array   ->(puede usar cualquier tipo de dato, []{}etc)

    function onSearch(id) {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
                setCharacters((oldChars) => [...oldChars, data]);
            } else {
                alert('¡No hay personajes con este ID!');
            }
        });
    }

    const onClose = (id) => {
        const charactersFilter = characters.filter(character => character.id !== Number(id));
        setCharacters(charactersFilter);
    }

    return (
        <div className='App'>
            <Nav onSearch={onSearch} />       {/* LE PASO LA FUNCION COMO ATRIBUTO */}

            <Routes>
                <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
                <Route path="/about" element={<About />} />
                <Route path="/detail/:id" element={<Detail />} />
            </Routes>
        </div>
    );
}

export default App;
