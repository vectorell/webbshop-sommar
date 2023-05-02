import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/Root'

import { createHashRouter, RouterProvider } from 'react-router-dom'

const router = createHashRouter([
  {
    path: '',
    element: <Root />,
    children: [
      {
        path: 'products'
        // element: <Products />,
      },
      {
        path: 'products/:id',
        // element: <ProductDetails />,
      },
      {
        path: 'cart',
        // element: <Cart />,
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
    <RouterProvider router={router} />
  </React.StrictMode>,
)
