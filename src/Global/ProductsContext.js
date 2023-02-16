import { createContext } from "react";
import { useState } from "react";
import collection1 from "../images/collection1.jpg";
import boywatch from "../images/boywatch.jpg";
import bwatch1 from "../images/bwatch1.jpg";
import bwatch2 from "../images/bwatch2.jpg";
import bwatch3 from "../images/bwatch3.jpg";
import bwatch4 from "../images/bwatch4.jpg";
import bwatch5 from "../images/bwatch5.jpg";
import bwatch6 from "../images/bwatch6.jpg";

export const ProductsContext = createContext();

const ProductsContextProvider = () => {
  const [products] = useState([
    {
      id: 1,
      name: "collection1",
      price: 30000,
      image: collection1,
      status: "hot",
    },
    { id: 2, name: "boywatch", price: 3000, image: boywatch, status: "hot" },
    { id: 3, name: "bwatch1", price: 2500, image: bwatch1, status: "hot" },
    { id: 4, name: "bwatch2", price: 4000, image: bwatch2, status: "hot" },
    { id: 5, name: "bwatch3", price: 2000, image: bwatch3, status: "hot" },
    { id: 6, name: "bwatch4", price: 5000, image: bwatch4, status: "hot" },
    { id: 7, name: "bwatch5", price: 6000, image: bwatch5, status: "hot" },
    { id: 8, name: "bwatch6", price: 8000, image: bwatch6, status: "hot" },
  ]);
  return (
    <ProductsContext.Provider value={{ products: [...products] }}>
      {/* {props.children} */}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
