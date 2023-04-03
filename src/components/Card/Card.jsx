import style from "./Card.module.css"

const Card = ({ name, status, species, gender, origin, image, onClose }) => {
    return (
        <div className={style.divConteiner}>
            <button onClick={onClose}>X</button>
            <h2 className={style.nombre}>Name: {name}</h2>
            <h2 className={style.descripcion}>Status: {status}</h2>
            <h2 className={style.descripcion}>Species: {species}</h2>
            <h2 className={style.descripcion}>Gender: {gender}</h2>
            <h2 className={style.descripcion}>Origin: {origin}</h2>
            <img className={style.ima} src={image} alt='f imagen' />
        </div>
    );
}

export default Card;
