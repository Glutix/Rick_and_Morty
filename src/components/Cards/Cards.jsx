import Card from "../Card/Card"
import style from "../Cards/Cards.module.css"

const Cards = ({ characters, onClose }) => {
    return (
        <div className={style.conteiner}>
            {characters.map(({ id, name, status, species, gender, origin, image }) => {
                return (
                    <Card
                        key={id} //! Esto es para el funcionamiento interno de react, sirve para diferenciar los objetos que le pasamos como arg. (el valor de la key siempre debe ser un valor unico del objeto)
                        id={id} //! Este id es para nuestro uso
                        name={name}
                        status={status}
                        species={species}
                        gender={gender}
                        origin={origin.name}
                        image={image}
                        onClose={onClose}
                    />
                )
            })}
        </div>
    );
}

export default Cards;