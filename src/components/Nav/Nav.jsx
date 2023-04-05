import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";


const Nav = ({ onSearch }) => {
    return (
        <nav>
            <button>
                <NavLink to="/home">Home</NavLink>
            </button>

            <button>
                <NavLink to="/about">About</NavLink>
            </button>

            <SearchBar
                onSearch={onSearch}
            />
        </nav>
    );
}

export default Nav;