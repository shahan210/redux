import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AddProduct,Products,Cart,IndiProduct } from './features/Index'
import { Layout } from './components/Index'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>

            <Route path='/addproduct' element={<AddProduct />} />
            <Route  index element={<Products />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/indiProduct/:id' element={<IndiProduct />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App