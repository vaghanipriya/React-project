import React from 'react'
import { Link } from 'react-router-dom'
import Cartitem from './Cartitem'
import { useDispatch, useSelector } from 'react-redux'
import { cartUiAction } from '../../Store/Slice/CartSliceUi'

function Carts() {

  const dispatch = useDispatch()
  const cartToggle = () => {
    // alert('xcfghj')
    dispatch(cartUiAction.toggle())
  }

  const CartItems = useSelector(state => state.cart.cartItem)
  console.log(CartItems);
  const totalAmount = useSelector(state => state.cart.totalAmount)
  // const cartitems = useSelector(statusbar.Cart)


  return (
    <div>
      <div className='cart__container'>
        <div className='cart list-group'>
          <div className='cart__close' onClick={cartToggle} >
            <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(163,163,163,1)"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 10.5858L14.8284 7.75736L16.2426 9.17157L13.4142 12L16.2426 14.8284L14.8284 16.2426L12 13.4142L9.17157 16.2426L7.75736 14.8284L10.5858 12L7.75736 9.17157L9.17157 7.75736L12 10.5858Z"></path></svg></span>
          </div>
          <div className='cart__item-list'>
            {
              CartItems.length === 0 ? (<h5 className='text-center text-danger my-5'>your cart is empty......!!!</h5>) : (
                CartItems.map((items) => {
                  return <Cartitem item={items}></Cartitem>
                })
              )
            }
          </div>
          <div className='cart__bottom d-flex align-items-center justify-content-between'>
            <h6>Subtotal amount : <span>${totalAmount}</span></h6>
            <button><Link to="/checkout">Checkout</Link></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carts