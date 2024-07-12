import React from 'react'
import Commonsection from '../Components/Commonsection'

function CheckOut() {
  return (
    <div>
      <Commonsection title="check Out"></Commonsection>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-lg-8'>
            <h4>Shipping Address</h4>
            <form>
              <div className='mt-4'>
                <label>Enter your Name </label>
                <input type="text" className=' border-0 border-bottom border-dark w-100' required></input>
              </div>
              <div className='mt-4'>
                <label>Enter your Email</label>
                <input type="email" className=' border-0 border-bottom border-dark w-100'></input>
              </div>
              <div className='mt-4'>
                <label>Phone Number</label>
                <input type="number" className=' border-0 border-bottom border-dark w-100'></input>
              </div>
              <div className='mt-4'>
                <label>Country</label>
                <input type="text" className=' border-0 border-bottom border-dark w-100'></input>
              </div>
              <div className='mt-4'>
                <label>City</label>
                <input type="text" className=' border-0 border-bottom border-dark w-100'></input>
              </div>
              <div className='mt-4'>
                <label>Code</label>
                <input type="number" className=' border-0 border-bottom border-dark w-100'></input>
              </div>
              <div className='mt-4'>
                <button className='btn btn-danger'>Payment</button>
              </div>

            </form>
          </div>
          <div className='col-lg-4'>
            <div>
              <h6>Subtotal:<span className='ms-3 text-danger'>$CartTotalamount</span></h6>
              <h6>Shipping:<span  className='ms-3 text-danger'>$ShippingCost</span></h6>
              <h6>Total:<span  className='ms-3 text-danger'>totalAmount</span></h6>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckOut