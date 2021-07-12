import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";

/**
 * isAuthenticated es la bariable con la que sabremos si el usuario
 * esta autenticado o no y depoendiendo deesa mostramos la ruta
 * component es el child que le pasaremos al Route
 * rest esta pasando las props del anterios componente al actual
 */
export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  localStorage.setItem("lastpath", rest.location.pathname);
  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
