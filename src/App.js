//! Librerias
import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';

//! Componentes
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form.jsx';

//! Constantes
export const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
export const API_KEY = "e3652765e5ed.1823c21d55c6f19e8b80";


function App() {
    //? Estados
    const [characters, setCharacters] = useState([]);
    const [access, setAccess] = useState(false);
    const EMAIL = "ferreyra.gluti@gmail.com";
    const PASSWORD = "asdasd123";

    //? Routing
    const location = useLocation();
    const navigate = useNavigate();

    //? Funciones
    const login = (userData) => {
        if (userData.password === PASSWORD && userData.email === EMAIL) {
            setAccess(true);
            navigate('/home');
        }

    };

    useEffect(() => {
        !access && navigate('/');
    }, [access, navigate]);


    function onSearch(id) {
        axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(({ data }) => {
            if (data.name) {
                setCharacters((oldChars) => [...oldChars, data]);
            } else {
                alert('¡No hay personajes con este ID!');
            }
        });
    }

    const onClose = (id) => {
        const charactersFilter = characters.filter(character => character.id !== id);
        setCharacters(charactersFilter);
    }

    return (

        <div className='App'>
            {location.pathname !== "/" && <Nav onSearch={onSearch} />}

            <Routes>
                <Route path="/" element={<Form login={login} />} />
                <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
                <Route path="/about" element={<About />} />
                <Route path="/detail/:id" element={<Detail />} />
            </Routes>
        </div>
    );
}

export default App;
