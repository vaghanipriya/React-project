import React from 'react'
import Helmet from '../Components/Helmet'
import Commonsection from '../Components/Commonsection'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { cartAction } from '../Store/Slice/CartSlice'

function Cart() {
  const Cartitem = useSelector(state => state.cart.cartItem)
  const subtotal = useSelector(state => state.cart.totalAmount)
  const dispatch = useDispatch()

  const delateItem = (id) => {
    dispatch(cartAction.delateItem({ id }))
  }

  return (
    <div>
      <Helmet title="CART">
        <div>
          <Commonsection title="Cart"> </Commonsection>
        </div>



        <div className='container mt-5'>
          <div className='row'>
            <div className='col-lg-12'>

              {
                Cartitem.length === 0 ? (<h3 className='text-center text-danger'>Your cart is Empty.....!!!!!</h3>) : (
                  <div>
                    <table className='table table-bordered'>
                      <thead>
                        <tr>
                          <th>Image</th>
                          <th>Product Title</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          Cartitem.map((item) => {
                            return <Tr key={item.id} delet={() => delateItem(item.id)} items={item}></Tr>
                          })
                        }
                      </tbody>
                    </table>
                  </div>
                )
              }

            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <h4 className='mt-3'>Sub Total : ${subtotal}</h4>
            <h5 className='mt-3'>Taxes and Shipping Will calculate at Checkout.</h5>
            <div className='mt-3'>
              <button className='btn btn-danger me-3'><Link to="/food" className='text-light text-decoration-none'>Continue Shopping</Link></button>
              <button className='btn btn-danger '><Link to="/checkout" className='text-light text-decoration-none'>Process to Checkout</Link> </button>
            </div>
          </div>
        </div>
      </Helmet>
    </div>
  )
}
const Tr = (props) => {
  const { image01, title, price, quantity } = props.items

  return (
    <tr>
      <td className='text-center'><img src={image01} alt='' style={{ width: "40px" }}></img></td>
      <td className='text-center'>{title}</td>
      <td className='text-center'>${price}</td>
      <td className='text-center'>{quantity}</td>
      <td className='text-center'>
        <svg xmlns="http://www.w3.org/2000/svg" onClick={props.delet} viewBox="0 0 24 24" width="30" height="24" fill="currentColor"><path d="M7 6V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7ZM13.4142 13.9997L15.182 12.232L13.7678 10.8178L12 12.5855L10.2322 10.8178L8.81802 12.232L10.5858 13.9997L8.81802 15.7675L10.2322 17.1817L12 15.4139L13.7678 17.1817L15.182 15.7675L13.4142 13.9997ZM9 4V6H15V4H9Z"></path></svg>
      </td>
    </tr>

  )
}

export default Cart