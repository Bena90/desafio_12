import React from 'react'
import Product from '../../components/Product/Product';
import ProductModal from '../../components/ProductModal/ProductModal';
import ProductModalDelete from '../../components/ProductModal/ProductModalDelete';
import useProducts from '../../hooks/useProducts';
import './Products.style.css'

const Products = () => {
  const { handleProductModal, products, isLoading } = useProducts();

  if (isLoading) return <p>Cargando...</p>

  return (
    <section className='mx-20'>
        <div className='product-title my-10'>
            <h2 className='text-3xl font-bold text-gray-100'>Productos: </h2>

            <button
              className='border font-bold text-md rounded-md px-3 py-2 text-gray-100 hover:bg-orange-600 hover:text-gray-200 shadow-md'
              onClick={()=>handleProductModal ()}
            >
              AGREGAR PRODUCTO
            </button>
        </div>

        <div className='mx-auto grid gap-6 grid-cols-1 md:grid-cols-3 xl:grid-cols-2 2xl:grid-cols-3 w-3/4'>
          {products?.map(product => (<Product key={product._id} product={product}/>))}
        </div>

      <ProductModal/>
      <ProductModalDelete/>
    </section>
  )
}

export default Products;

//<Product key={product._id} product={product}/>