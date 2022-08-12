import { BrowserRouter, Routes, Route } from 'react-router-dom'

// layouts:
import AuthRoute from './layouts/AuthRoute';
import PrivateRoute from './layouts/PrivateRoute';

// pages:
import Login from './pages/Login';
import Products from './pages/Products/Products';

// context:
import {ProductsProvider} from './context/ProductsProvider';
import { AuthProvider } from './context/AuthProvider';

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <ProductsProvider>

          <Routes>

            <Route path='/' element={<AuthRoute/>}>
              <Route index element={<Login/>}/>
            </Route>

            <Route path='/home' element={<PrivateRoute/>}>
              <Route index element={<Products/>} />
            </Route>

          </Routes>

        </ProductsProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
