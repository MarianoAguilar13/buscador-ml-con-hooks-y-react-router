import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { Link, useParams } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Hacé tu búsqueda desde la caja de búsqueda de arriba</h1>
      <Link to={"/search/mate"}>Link a search</Link>
    </div>
  );
}

export { Home };
