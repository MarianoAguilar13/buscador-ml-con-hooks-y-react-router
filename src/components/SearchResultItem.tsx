import React from "react";
import ReactDOM from "react-dom";

function SearchResultItem(props) {
  return (
    <div className="contenedor-busquedas" id="producto-nuevo">
      <div className="item-encontrado">
        <img className="imagen-producto" src={props.imagen} />
        <div className="info-producto">
          <h4 className="nombre-producto">{props.nombre}</h4>
          <a
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
            className="link-producto"
          >
            Link a Mercado Libre
          </a>
          <span className="cantidad-vendidos">
            Cantidad Vendidos {props.cantVendido}
          </span>
        </div>
        <div className="precio-producto">{props.precio}</div>
      </div>
    </div>
  );
}

export { SearchResultItem };

/*
  results[]
  
  nombre = results[].title
  
  precio = results[].prices.prices[0].amount
  
  cantVendido = results[].sold_quantity
  
  imagen = results[].thumbnail
  
  link a mercado = results[].permalink
  */
