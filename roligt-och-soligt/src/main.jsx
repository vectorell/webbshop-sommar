import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/Root'
import { RecoilRoot } from 'recoil'
import Products from './routes/products/Products'
import ProductDetails from './routes/productDetails/ProductDetails'
import Cart from './routes/cart/Cart'

import { createHashRouter, RouterProvider } from 'react-router-dom'

const router = createHashRouter([
  {
    path: '',
    element: <Root />,
    children: [
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
        // element: <Admin />,
      },
      {
        path: 'admin/products',
        // element: <AdminProducts />,
      },
      {
        path: 'admin/users',
        // element: <AdminUsers />,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>,
)
