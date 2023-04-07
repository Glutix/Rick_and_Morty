import style from "./Card.module.css"
import { NavLink } from "react-router-dom";

const Card = ({ id, name, status, species, gender, origin, image, onClose }) => {
    return (
        <div className={style.card}>
            <button className={style.button} onClick={() => onClose(id)}>X</button>
            <NavLink className={style.cardName} to={`/detail/${id}`}>{name}</NavLink>
            <h2 className={style.detalles}>Status: {status}</h2>
            <h2 className={style.detalles}>Species: {species}</h2>
            <h2 className={style.detalles}>Gender: {gender}</h2>
            {/* <h2 className={style.detalles}>Origin: {origin}</h2> */}
            <img className={style.img} src={image} alt={name} />
        </div>
    );
}

export default Card;
