import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import style from "./Nav.module.css";


const Nav = ({ onSearch }) => {
    return (
        <nav className={style.nav}>
            <label className={style.label}>Ricky and Morty</label>


            <SearchBar onSearch={onSearch} />

            <ul className={style.ul}>
                <NavLink className={style.navlink} to="/home">Home</NavLink>
                <NavLink className={style.navlink} to="/about">About</NavLink>
                <NavLink className={style.navlink} to="/">Logout</NavLink>
            </ul>


        </nav>
    );
}

export default Nav;