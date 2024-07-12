import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import FoodDetails from '../Pages/FoodDetails'
import Cart from '../Pages/Cart'
import Contact from '../Pages/Contact'
import Allfood from '../Pages/Allfood'
import CheckOut from '../Pages/CheckOut'

function Router() {
  return (
    <div>

        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/food/:id' element={<FoodDetails></FoodDetails>}></Route>
            <Route path='/cart' element={<Cart></Cart>}></Route>
            <Route path='/contact' element={<Contact></Contact>}></Route>
            <Route path='/food' element={<Allfood></Allfood>}></Route>
            <Route path='/checkout' element={<CheckOut></CheckOut>}></Route>
        </Routes>
    </div>
  )
}

export default Router