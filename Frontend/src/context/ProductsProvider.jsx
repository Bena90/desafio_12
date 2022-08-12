import { createContext, useState, useEffect } from 'react';
import axiosClient from '../config/axiosClient';

const ProductsContext = createContext();

export const ProductsProvider = ({children}) => {
  const [ products, setProducts ] = useState([])
  const [ isLoading, setIsLoading ] = useState(false)
  const [ productModal, setProductModal ] = useState(false)
  const [ productModalDelete, setProductModalDelete ] = useState(false)
  const [ currentProduct, setCurrentProduct ] = useState({})
  
  const getProducts = async () => {
    setIsLoading(true)
    try {
      const {data} = await axiosClient('/products')
      setProducts(data.products)
      setIsLoading(false)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getProducts();
  }, []);

// Products:
  const addProduct = async (product) => {
    console.log('Agregar', product)
    
    try{
      const {data} = await axiosClient.post('/products', product);
      const newProducts = [...products, data]
      setProducts (newProducts);
      setProductModal(false);
    } catch (error){
      console.log(error)
    }
  };
  
  const updateProduct = async (product, id) => {
    try {
      const {data} = await axiosClient.put(`/products/${id}`, product)
      console.log(data);
      const updateProducts = products.map(prod => prod._id === id ? data : prod )
      console.log(updateProducts)
      setProducts (updateProducts);
      setProductModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (product) => {
    try {
      const {data} = await axiosClient.delete(`/products/${product._id}`)
      const productsUpdated = products.filter(prod => prod._id !== product._id)
      setProducts(productsUpdated);
      setProductModalDelete(false);
      setCurrentProduct('')
    } catch (error) {
      console.log(error)
    }
  };

// Cart:

// Modal:

  const handleProductModal = (product) =>{

    if(productModal){
      setCurrentProduct({})
    }
    setProductModal(!productModal);
    if (product){
      setCurrentProduct(product)
    }
  }

  const handleProductModalDelete = (product) => {
    setProductModalDelete(!productModalDelete);
    setCurrentProduct(product);
  }

  return (
    <ProductsContext.Provider
      value={{
        products,
        addProduct,
        deleteProduct,
        updateProduct,
        isLoading,
        handleProductModal,
        productModal,
        productModalDelete,
        handleProductModalDelete,
        currentProduct,
    }}>
        {children}
    </ProductsContext.Provider>
  )
}

export default ProductsContext;