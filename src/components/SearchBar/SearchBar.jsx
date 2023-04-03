const SearchBar = ({onSearch}) => {
    return (
        /* Recibe por props una función onSearch. La función onSearch se debe ejecutar cuando se haga click en el botón Agregar. */
        <div>
            <input id="input" type='search' />
            <button id="button" onClick={onSearch}>Agregar</button>     {/* onClick={(id) => onSearch(id)} */}
        </div>
    );
}

export default SearchBar;
