import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { LOGIN } from "../../types/types";

export const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext);

  /**
   * History es un propiedad que nos ayuda
   * a accesader a ciertos metodos de nuestro navegador
   * o de react.router
   */
  const handleLOgin = () => {
    const lastPath = localStorage.getItem("lastpath") || "/";

    // push nos redrecciona a una de las rutas
    // history.push("/");
    // replace remplaza el layout y no permitira volver
    // a atras al mismo layout
    dispatch({
      type: LOGIN,
      payload: {
        name: "Lucas",
        email: "lucas@gmail.com",
        id: 23,
      },
    });
    history.replace(lastPath);
  };

  return (
    <div className="container mt-5">
      <h1>LoginScreen</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleLOgin}>
        login
      </button>
    </div>
  );
};
