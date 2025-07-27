import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Home from './pages/home/Home.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import CartPage from './pages/carts/Cart.jsx'
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="products" element={<div>Products</div>} />
        <Route path="cart" element={<CartPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  </Provider>
)
