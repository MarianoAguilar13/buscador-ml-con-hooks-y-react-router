import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Link, useParams } from "react-router-dom";
import { SearchResultItem } from "../components/SearchResultItem";

function ListResult() {
  //este componente es una page y lo que hace es recibir el
  //parametro a buscar por la url y buscar los datos en la api
  //imprimiendolos en otro componente y llamando a una ruta creando un link
  //a la galeria con el id

  //useParams es un hook de react-router, el cual envia params por
  //la url cuando ponemos :algo, podemos llamar a params.algo
  const params = useParams();

  const [results, setResults] = useState([]);

  const FetchSearch = async (search) => {
    console.log("Entro al search", search);

    const promesaML = fetch(
      "https://api.mercadolibre.com/sites/MLA/search?q=" + search
    );

    try {
      const res = await promesaML;

      const data = await res.json();

      console.log("resultados: ", data.results);

      setResults(data.results);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    if (params.busqueda) {
      console.log("aca haría un fetch con params.busqueda: ", params.busqueda);

      FetchSearch(params.busqueda);
    }
  }, [params.busqueda]);

  return (
    <div>
      {results.map((r) => (
        <div>
          <SearchResultItem
            key={r.title + r.permalink}
            nombre={r.title}
            precio={r.price}
            cantVendido={r.sold_quantity}
            imagen={r.thumbnail}
            link={r.permalink}
          />
          <Link to={"/item/" + r.id}>ver mas</Link>
        </div>
      ))}
    </div>
  );
}

export { ListResult };
