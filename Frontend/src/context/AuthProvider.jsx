import {createContext, useState, useEffect} from 'react';
import axiosClient from '../config/axiosClient';
import {useNavigate} from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({})
    const navigate = useNavigate();

    const getAuth = async () => {
        try {
            const {data} = await axiosClient('/auth', {withCredentials: true})
            console.log(data)
            setAuth (data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{

        getAuth();

    }, [])

    const register = async (useData) => {
        try {
            const {data} = await axiosClient.post('/auth/register', useData, {withCredentials: true})

            console.log(data)

        } catch (error) {
            if (error.response.status === 500){
                console.log('Invalid Credentials');
            }
            
        }
    }

    const login = async (user) => {
        try {
            const {data} = await axiosClient.post(`/auth/login`, user, {withCredentials: true});
            setAuth(data)
            if(data.admin){
                navigate('/home', { replace: true });
            }
        } catch (error) {
            console.log(error);
        }
    };

    const logout = async () => {
        try {
            setAuth({admin: false});
            navigate('/', {replace: true});
        } catch (error) {
            console.log(error);
        }
    };

  return (
    <AuthContext.Provider
        value={{
            login,
            auth,
            logout, 
            register           
        }}
    >
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;