const validation = (userData) => {
    const errors = {};
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const ragexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,10}$/;

    //validar campo email...
    if (!userData.email) {
        errors.email = "Se requiere un email";
    } else if (!regexEmail.test(userData.email)) {
        errors.email = "Ingrese un email valido";
    }

    //validar campo de password...
    if (!userData.password) {
        errors.password = "Se requiere una password";
    } else if (!ragexPassword.test(userData.password)) {
        errors.password = "Debe tener entre 6 y 10 carácter";
    }

    return errors;
};

export default validation;