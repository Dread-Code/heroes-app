import React from "react";

export const LoginScreen = ({ history }) => {
  /**
   * History es un propiedad que nos ayuda
   * a accesader a ciertos metodos de nuestro navegador
   * o de react.router
   */
  const handleLOgin = () => {
    // push nos redrecciona a una de las rutas
    history.push("/");
    // replace remplaza el layout y no permitira volver
    // a atras al mismo layout
    history.replace("/");
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
