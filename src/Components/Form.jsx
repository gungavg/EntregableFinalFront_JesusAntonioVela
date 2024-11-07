import React, { useState } from 'react';
import Card from './Card';

const Form = () => {
    const [usuario, setUsuario] = useState({
        username: "",
        correo: "",
        password: "",
    });
    const [mostrar, setMostrar] = useState(false);
    const [errors, setErrors] = useState({
        username: "",
        password: ""
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            setMostrar(true);
        }
    };

    const validateForm = () => {
        let isValid = true;
        let newErrors = { username: "", password: "" };

        if (usuario.username.length < 3 || usuario.username.startsWith(" ")) {
            newErrors.username = "Por favor chequea que la información sea correcta";
            isValid = false;
        }

        if (usuario.password.length < 6) {
            newErrors.password = "Por favor chequea que la información sea correcta";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <label htmlFor="userName">Nombre de usuario:</label>
                <input
                    type="text"
                    name="userName"
                    id="userName"
                    placeholder="Inserte su nombre de usuario"
                    onChange={(event) =>
                        setUsuario({ ...usuario, username: event.target.value })
                    }
                />
                {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}

                <label htmlFor="correo">Correo:</label>
                <input
                    type="email"
                    name="correo"
                    id="correo"
                    placeholder="Inserte su correo"
                    onChange={(event) =>
                        setUsuario({ ...usuario, correo: event.target.value })
                    }
                />

                <label htmlFor="contraseña">Contraseña:</label>
                <input
                    type="password"
                    name="contraseña"
                    id="contraseña"
                    placeholder="Inserte su contraseña"
                    onChange={(event) =>
                        setUsuario({ ...usuario, password: event.target.value })
                    }
                />
                {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

                <input type="submit" value="Registrarse" />
            </form>
            {mostrar && <Card usuario={usuario} />}
        </div>
    );
};

export default Form;
