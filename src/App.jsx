import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Products from './features/pages/Products'
import Cart from './features/pages/Cart'
import AddProduct from './features/pages/AddProduct'
import { Layout } from './components/Index'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>

            <Route index element={<AddProduct />} />
            <Route path='product' element={<Products />} />
            <Route path='cart' element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App