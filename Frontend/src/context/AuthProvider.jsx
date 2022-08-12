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
            setAuth (data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{

        getAuth();

    }, [])


    const login = async (user) => {
        const credentials = {user}
        try {
            const {data} = await axiosClient.post(`/auth/login`, credentials, {withCredentials: true});
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
            const {data} = await axiosClient(`/auth/logout`)
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
        }}
    >
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;