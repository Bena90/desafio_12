import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth'

const Register = () => {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ firstName, setFirstName ] = useState('')
    const [ lastName, setLastName ] = useState('')
    
    const { register } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            username,
            password,
            email,
            firstName,
            lastName,
        }

        register(userData)
    }

  return (
    <>
            <form
                onSubmit={handleSubmit}
                className='border bg-gray-200 p-5 rounded-md shadow-md'
            >
                <div className='mb-5 text-3xl font-bold text-emerald-500'>Registro</div>
                <div>
                    <label className='text-xl font-semibold text-gray-800'> Usuario</label>
                    <input type="text" 
                        className='border rounded-md p-1 my-2 w-full text-gray-700'
                        name='username'
                        placeholder='Elija un nombre de usuario'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label className='text-xl font-semibold text-gray-800'> Constraseña </label>
                    <input type="password" 
                        className='border rounded-md p-1 my-2 w-full text-gray-700'
                        name='password'
                        placeholder='Elija una contraseña'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label className='text-xl font-semibold text-gray-800'> Email </label>
                    <input type="email" 
                        className='border rounded-md p-1 my-2 w-full text-gray-700'
                        name='email'
                        placeholder='Ingrese su email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label className='text-xl font-semibold text-gray-800'> Nombre </label>
                    <input type="text" 
                        className='border rounded-md p-1 my-2 w-full text-gray-700'
                        name='firstName'
                        placeholder='Ingrese su nombre'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label className='text-xl font-semibold text-gray-800'> Apellido </label>
                    <input type="text" 
                        className='border rounded-md p-1 my-2 w-full text-gray-700'
                        name='lastName'
                        placeholder='Ingrese su apellido'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </div>
                <input
                    type="submit"
                    value="Login"
                    className='w-full border border-emerald-400 py-1 mt-5 bg-emerald-500 rounded-md hover:bg-emerald-700 text-gray-800 text-lg font-bold'
                />                
            </form>
        <button className='text-gray-200 font-semibold' onClick={()=> navigate('/')}> {'>'} Loguearse </button>
    </>
  )
}

export default Register