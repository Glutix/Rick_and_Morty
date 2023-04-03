import Card from "../Card/Card"
import style from "../Cards/Cards.module.css"

const Cards = ({ characters }) => {
    const onClose = () => alert('Emulamos que se cierra la card');
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

/* Por cada uno de ellos deberás renderizar un componente Card pasándole todas las propiedades que ya mencionamos en el ejercicio anterior */