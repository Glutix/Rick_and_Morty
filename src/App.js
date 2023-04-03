import './App.css';
import Card from './components/Card/Card.jsx';
import Cards from './components/Cards/Cards.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import characters, { Rick } from './data.js';

function App() {
    return (
        <div className='App'>
            <div>
                <SearchBar onSearch={(characterID) => alert(characterID)} />
            </div>

            <div>
                <Cards characters={characters} />
            </div>

            <div>
                <Card
                    id={Rick.id}
                    name={Rick.name}
                    status={Rick.status}
                    species={Rick.species}
                    gender={Rick.gender}
                    origin={Rick.origin.name}
                    image={Rick.image}
                    onClose={() => alert('Emulamos que se cierra la card')}
                />
            </div>
        </div>
    );
}

export default App;
