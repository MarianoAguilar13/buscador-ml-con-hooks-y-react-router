import React, { useState, useEffect } from "react";
import { SearchForm } from "../components/SearchForm";
import { SearchResultItem } from "../components/SearchResultItem";

function App() {
  //creo el useStates de results, que van a ser los resultados de la busqueda
  const [results, setResults] = useState([]);

  const handleSearch = async (search) => {
    // buscar e impactar el state
    console.log("Entro al search", search);

    const promesaML = fetch(
      "https://api.mercadolibre.com/sites/MLA/search?q=" + search
    );

    try {
      const res = await promesaML;

      const data = await res.json();

      setResults(data.results);
    } catch (err) {
      alert(err);
    }
  };

  //cuando se clickea, se ejecuta handleSearch
  //hay que ponerle un key para que no se cuelgue cuando haces un map
  //ya que react va chequeando que no se modifiquen esos componentes
  //con la key determinada
  //por cada results del state de app, (estos resultados son todos los buscado
  //en la app) voy a crear un componente con ciertas propiedades que estan
  //en los resultados que devolvio la appi de ml
  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      {results.map((r) => (
        <SearchResultItem
          key={r.title + r.permalink}
          nombre={r.title}
          precio={r.prices.prices[0].amount}
          cantVendido={r.sold_quantity}
          imagen={r.thumbnail}
          link={r.permalink}
        />
      ))}
    </div>
  );
}

export { App };

/*
  results[]
  
  nombre = results[].title
  
  precio = results[].prices.prices[0].amount
  
  cantVendido = results[].sold_quantity
  
  imagen = results[].thumbnail
  
  link = results[].permalink
  */
