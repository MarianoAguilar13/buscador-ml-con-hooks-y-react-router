import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SearchForm(props) {
  //aca utilizo el useNavigate, un hook de react-router, que me permite
  //poder ir a otra ruta, en este caso paso el valor ingresado en el input
  //a la url que esta el componente page que se encarga de realizar la busqueda
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const query = e.target.search.value;

    navigate("/search/" + query, { replace: true });
  };

  return (
    <div className="container-form">
      <form className="buscador-form" onSubmit={handleSubmit} action="">
        <input className="input-buscar" type="text" name="search" />
        <button
          className="boton-buscar"
          onClick={() => {
            console.log("me clickearon");
          }}
        >
          Buscar
        </button>
      </form>
    </div>
  );
}

export { SearchForm };
