import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Link, useParams } from "react-router-dom";
import { SearchResultItem } from "../components/SearchResultItem";

function GaleryResult() {
  //este componente es una page y lo que hace es recibir el
  //parametro a buscar por la url y buscar los datos en la api
  //imprimiendolos en otro componente

  const params = useParams();

  const [result, setResult] = useState([]);

  const FetchSearchId = async (id) => {
    // buscar e impactar el state
    console.log("Entro al search", id);

    const promesaML = fetch("https://api.mercadolibre.com/items/" + id);

    try {
      const res = await promesaML;

      const data = await res.json();

      //tengo que hacer esto porque result es si o si un array
      const arrayData = [data];

      console.log("data ml id: ", arrayData);

      setResult(arrayData);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    if (params.id) {
      console.log("aca haría un fetch con params.id: ", params.id);

      FetchSearchId(params.id);
    }
  }, [params.id]);

  return (
    <div>
      {result.map((r) => (
        <div>
          <SearchResultItem
            key={r.title + r.permalink}
            nombre={r.title}
            precio={r.price}
            cantVendido={r.sold_quantity}
            imagen={r.thumbnail}
            link={r.permalink}
          />
        </div>
      ))}
    </div>
  );
}

export { GaleryResult };
