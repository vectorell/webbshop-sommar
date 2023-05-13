import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/Root'
import { RecoilRoot } from 'recoil'
import Start from './routes/start/Start'
import Products from './routes/products/Products'
import ProductDetails from './routes/productDetails/ProductDetails'
import Cart from './routes/cart/Cart'
import Admin from './routes/login/Admin'
import AdminProducts from './routes/adminProducts/AdminProducts'
import AdminProductDetails from './routes/adminProductDetails/AdminProductDetails'
import AddProductDetails from './components/addProductDetails/AddProductDetails'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Credits from './routes/credits/Credits'

const router = createHashRouter([
  {
    path: '',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Start />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: `products/:id`,
        element: <ProductDetails />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'admin',
        element: <Admin />,
      },
      {
        path: 'admin/products',
        element: <AdminProducts />,
      },
      {
        path: 'admin/products/:id',
        element: <AdminProductDetails />,
      },
      {
        path: 'admin/products/add-product',
        element: <AddProductDetails />,
      },
      {
        path: 'creds',
        element: <Credits />,
      },
      {
        path: '/*',
        element: <Start />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>,
  // window.location.href = "#/start"
)
