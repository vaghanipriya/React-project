import React from 'react'
import { useDispatch } from "react-redux"
import { cartAction } from '../../Store/Slice/CartSlice';
import { Link } from 'react-router-dom';


function ProductCard(props) {
  const { id, title, price, image01 } = props.productsitem;

  const dispatch = useDispatch()

  const addTocart = () => {
    // alert("jjv")
    dispatch(cartAction.addItem({ id, title, price, image01 }))
  }

  return (


    <div className="card d-flex box-shadow">
      <div>
        <Link to={`/food/${id}`}>
          <img src={image01} className="card-img-top img-fliud w-50  mt-3 d-block mx-auto product_card" alt="..." /></Link>
        <div className="card-body text-center">
          <h5 className="card-title fs-6 text-center">{title}</h5>
          <div>
            <span className='text-danger mx-4'>${price}</span>
            <button className="btn btn-danger p-1 px-3" onClick={addTocart}>Add to cart</button>
          </div>
        </div>
      </div>
    </div>


  )
}

export default ProductCard