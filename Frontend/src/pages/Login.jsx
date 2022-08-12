import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const Login = () => {
    const [ user, setUser ] = useState('')
    const { login } = useAuth();

    const navigate = useNavigate ()

    const handleSubmit = e => {
        e.preventDefault();

        login(user);
    }

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className='border bg-gray-200 p-5 rounded-md shadow-md'
            >
                <div className='mb-5 text-3xl font-bold text-emerald-500'>Login</div>
                <div>
                    <label className='text-xl font-semibold text-gray-800'> Usuario</label>
                    <input type="text" 
                        className='border rounded-md p-1 my-2 w-full text-gray-700'
                        name='user'
                        placeholder='Enter your username'
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                        required
                    />
                </div>
                <input
                    type="submit"
                    value="Login"
                    className='w-full border border-emerald-400 py-1 mt-5 bg-emerald-500 rounded-md hover:bg-emerald-700 text-gray-800 text-lg font-bold'
                />                
            </form>
            <button onClick={()=> navigate('/home')}> Entrar </button>
        </>
    )
}

export default Login;