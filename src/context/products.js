import React from "react";
import axios from "axios";
import url from "../utils/URL";
import {
  featuredProducts,
  flattenProducts,
  filterBass,
  filterGuitars,
  filterAmps,
  filterDrums,
} from "../utils/helpers";

export const ProductContext = React.createContext();

const ProductProvider = ({ children }) => {
  const [loading, setLoading] = React.useState(false);
  const [products, setProducts] = React.useState([]);
  const [featured, setFeatured] = React.useState([]);
  const [guitarlist, setGuitarList] = React.useState([]);
  const [bassList, setBassList] = React.useState([]);
  const [ampsList, setAmpsList] = React.useState([]);
  const [drumsList, setDrumsList] = React.useState([]);

  React.useEffect(() => {
    setLoading(true);
    axios.get(`${url}/products`).then((res) => {
      console.log(res);
      const featured = featuredProducts(flattenProducts(res.data));
      const products = flattenProducts(res.data);
      const guitars = filterGuitars(flattenProducts(res.data));
      const bass = filterBass(flattenProducts(res.data));
      const drums = filterDrums(flattenProducts(res.data));
      const amps = filterAmps(flattenProducts(res.data));
      setGuitarList(guitars);
      setBassList(bass);
      setDrumsList(drums);
      setAmpsList(amps);
      setProducts(products);
      setFeatured(featured);
      setLoading(false);
    });
    return () => {};
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        featured,
        guitarlist,
        bassList,
        ampsList,
        drumsList,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
