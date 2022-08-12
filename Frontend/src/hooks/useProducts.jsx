import { useContext } from "react";
import ProductsContext from "../context/ProductsProvider";

const useProducts = () => useContext(ProductsContext);

export default useProducts;