import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./type";

const initialState = {
    myFavorites: [],
    allCharacters: [],
}

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.allCharacters, payload],
                allCharacters: [...state.allCharacters, payload],
            };

        case REMOVE_FAV:
            return { ...state, myFavorites: state.myFavorites.filter((pj) => pj.id !== payload) };



        // Agrega una opción adicional en el select del filtro para que muestre todos los personajes.
        // Desarrolla la lógica para que ello ocurra.

        case FILTER:
            const allCharactersFilter = state.allCharacters.filter((char) => char.gender === payload);
            return { ...state, myFavorites: allCharactersFilter};

        case ORDER:
            return {
                ...state,
                myFavorites:
                    payload === "Ascendente"
                        ? state.allCharacters.sort((a, b) => a.id - b.id)
                        : state.allCharacters.sort((a, b) => b.id - a.id)
            };

        default:
            return { ...state };
    };
};


export default rootReducer;