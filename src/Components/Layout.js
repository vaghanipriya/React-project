import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Router from '../Routes/Router'
import Cart from '../Pages/Cart'
import Carts from '../Pages/Cart/Carts'
import { useSelector } from 'react-redux'

function Layout() {
    const cart= useSelector(state => state.cartUi.cartVisible )
    return (
        <div>
            {
                cart=== true? <Carts></Carts>:null
            }
            <Header></Header>
            <div>
                
                <Router></Router>

            </div>
            <Footer></Footer>
        </div>
    )
}

export default Layout