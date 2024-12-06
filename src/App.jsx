
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import View from './Pages/View'
import Wishlist from './Pages/Wishlist'
import Cart from './Pages/Cart'
import Pnf from './Pages/Pnf'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {


  return (
    <>
    <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/view/:id' element={<View/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='**' element={<Pnf/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
