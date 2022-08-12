import { Fragment, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import useProducts from '../../hooks/useProducts'

const ProductModal = () => {
    const [ name, setName ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ code, setCode ] = useState('')
    const [ photo, setPhoto ] = useState('')
    const [ price, setPrice ] = useState('')
    const [ stock, setStock ] = useState('')

    const { handleProductModal, productModal, addProduct, currentProduct, updateProduct } = useProducts();

    useEffect (()=>{
        if(currentProduct?._id){
            setName(currentProduct.name)
            setDescription(currentProduct.description);
            setCode(currentProduct.code);
            setPhoto (currentProduct.photo);
            setPrice(currentProduct.price);
            setStock(currentProduct.stock);
            return
        }
        setName('')
        setDescription('');
        setCode('');
        setPhoto ('');
        setPrice('');
        setStock('');

    }, [currentProduct]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            name,
            description,
            code,
            photo,
            price,
            stock
        }
        if(currentProduct._id){
            updateProduct(newProduct, currentProduct._id)
        } else{
            addProduct(newProduct);
        }

        setName ('');
        setDescription ('');
        setCode ('');
        setPhoto ('');
        setPrice ('');
        setStock ('');
    }

  return (
      <Transition.Root show={ productModal } as={Fragment}>
          <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={ ()=>handleProductModal () }>
              <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                  <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                  >
                      <Dialog.Overlay 
                          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" 
                      />
                  </Transition.Child>

                  {/* This element is to trick the browser into centering the modal contents. */}
                  <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                      &#8203;
                  </span>

                  <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                      enterTo="opacity-100 translate-y-0 sm:scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                      leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  >
                          <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">


                          <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                              <button
                                  type="button"
                                  className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                  onClick={()=>handleProductModal()}
                              >
                              <span className="sr-only">Cerrar</span>
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                  </svg>
                              </button>
                          </div>


                          <div className="sm:flex sm:items-start">
                              <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                                  <Dialog.Title as="h3" className="text-xl leading-6 font-bold text-gray-700 mb-2">
                                      Agregar Producto
                                  </Dialog.Title>
                                
                                <form className='' onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor='name' className='font-bold text-gray-700'> Nombre del producto: </label>
                                            <input 
                                                id='name'
                                                name='name'
                                                type="text"
                                                className=' border rounded-md p-1 my-2 w-full text-gray-700'
                                                placeholder='Nombre del Producto'
                                                value={name}
                                                onChange={(e)=> setName(e.target.value)}
                                            />
                                        
                                    </div>
                                    <div>
                                        <label htmlFor='description' className='font-bold text-gray-700'> Descripción:</label>
                                            <input 
                                                id='description'
                                                name='description'
                                                type="text"
                                                className=' border rounded-md p-1 my-2 w-full text-gray-700'
                                                placeholder='Descripción'
                                                value={description}
                                                onChange={(e)=> setDescription(e.target.value)}
                                            />
                                    </div>
                                    <div>
                                        <label htmlFor='code' className='font-bold text-gray-700'> Código:</label>
                                            <input 
                                                id='code'
                                                name='code'
                                                type="text"
                                                className=' border rounded-md p-1 my-2 w-full text-gray-700'
                                                placeholder='Código de producto'
                                                value={code}
                                                onChange={(e)=> setCode(e.target.value)}
                                            />
                                    </div>
                                    <div>
                                        <label htmlFor='photo' className='font-bold text-gray-700'> Foto de Producto:</label>
                                            <input 
                                                id='photo'
                                                name='photo'
                                                type="text"
                                                className=' border rounded-md p-1 my-2 w-full text-gray-700'
                                                placeholder='Ej.: guitarra_01, guitarra_02, etc'
                                                value={photo}
                                                onChange={(e)=> setPhoto(e.target.value)}
                                            />
                                    </div>
                                    <div>
                                        <label htmlFor='price' className='font-bold text-gray-700'> Precio:</label>
                                            <input 
                                                id='price'
                                                name='price'
                                                type="number"
                                                className=' border rounded-md p-1 my-2 w-full text-gray-700'
                                                placeholder='Precio del producto'
                                                value={price}
                                                onChange={(e)=> setPrice(e.target.value)}
                                            />
                                    </div>
                                    <div>
                                        <label htmlFor='stock' className='font-bold text-gray-700'> Stock:</label>
                                            <input 
                                                id='stock'
                                                name='stock'
                                                type="number"
                                                className=' border rounded-md p-1 my-2 w-full text-gray-700'
                                                placeholder='Precio del producto'
                                                value={stock}
                                                onChange={(e)=> setStock(e.target.value)}
                                            />
                                    </div>
                                    <input
                                        type="submit"
                                        value="Crear"
                                        className='bg-amber-600 hover:bg-amber-800 text-white w-full mt-4 px-3 py-1 uppercase font-bold rounded-md shadow-md'
                                    />
                                </form>



                              </div>
                          </div>
                      </div>
                  </Transition.Child>
              </div>
          </Dialog>
      </Transition.Root>
  )
}

export default ProductModal