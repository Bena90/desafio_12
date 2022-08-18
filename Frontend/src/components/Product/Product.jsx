import React from 'react';
import useProducts from '../../hooks/useProducts';
import ButtonAdmin from '../ButtonAdmin';
import './Product.style.css';

const Product = ({product}) => {
  const {_id, name, price, photo, stock, description} = product;

  return (
    <div className='border rounded-lg p-3 m-auto bg-white'>

        <div className='flex justify-center m-auto gap-5'>
          <div className='w-1/3 border-r'>
            <img 
              className='w-full '
              src={`/${photo}.jpg`} 
              alt={photo} />
          </div>
          <div className='p-3 w-2/3'>
            <h3 className='text-2xl font-bold'> {name} </h3>
            <p>
              {description}
            </p>
            <p className='mt-2 font-black text-4xl text-amber-500'>
              $ {price}
            </p>
            <div className='mt-3'>
              <button className="border-2 border-amber-500 hover:bg-amber-200 text-gray-800 w-1/2 mt-4 px-2 py-1 text-sm uppercase font-bold rounded-md">
                Agregar
              </button>
              <ButtonAdmin product={product}/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Product