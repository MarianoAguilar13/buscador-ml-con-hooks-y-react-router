import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { SearchForm } from "./SearchForm";
import { Outlet } from "react-router-dom";

function Layout(props) {
  //el componente Outlet, significa que ahi van a ir todos los
  //componentes que esten dentro de la rutas en la AppRouter
  //el layout se utiliza cuando se repite mucho, ej: header nav footer, etc

  return (
    <div className="container-layout">
      <SearchForm busqueda={""} />
      <div className="contenido-layout">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export { Layout };
