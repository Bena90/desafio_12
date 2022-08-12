import React from 'react';
import useProducts from '../../hooks/useProducts';
import ButtonAdmin from '../ButtonAdmin';
import './Product.style.css';

const Product = ({product}) => {
  const {_id, name, price, photo, stock, description} = product;

  return (
    <div className='border rounded-lg p-3 m-auto bg-white'>
        <div className='flex flex-col justify-center m-auto '>
          <img src={`/${photo}.jpg`} alt={photo} />
          <div className='p-3 border-t'>
            <h3 className='text-2xl font-bold'> {name} </h3>
            <p>
              {description}
            </p>
            <p className='mt-2 font-black text-4xl text-amber-500'>
              $ {price}
            </p>
            <div className='border-t mt-3'>
              <button className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-4 px-3 py-1 uppercase font-bold rounded-md">
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