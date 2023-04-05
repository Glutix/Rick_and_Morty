import style from "./Card.module.css"
import { NavLink } from "react-router-dom";

const Card = ({ id, name, status, species, gender, origin, image, onClose }) => {
    return (
        <div>
            <button onClick={() => onClose(id)}>X</button>
            <NavLink to={`/detail/${id}`}>
                <h3 className="card-name">{name}</h3>
            </NavLink>

            <h2>Status: {status}</h2>
            <h2>Species: {species}</h2>
            <h2>Gender: {gender}</h2>
            <h2>Origin: {origin}</h2>
            <img src={image} alt={name} />
        </div>
    );
}

export default Card;
