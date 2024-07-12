
import React from 'react'
import { useDispatch } from 'react-redux'
import { cartAction } from '../../Store/Slice/CartSlice'
// import pizza from "../../Fake-data/Images/pizza.png"


function Cartitem(props) {

  const { id, price, title, image01, totalprice, quantity } = props.item

  const dispatch = useDispatch()


  const addtocart = () => {
    dispatch(cartAction.addItem({ id, title, image01, price }))
  }

  const removeItem = () => {
    dispatch(cartAction.removeItem({id}))
  }

  const delateItem = () => {
    dispatch(cartAction.delateItem({id}))
  }



  return (
    <div>
      <div className='list-group-item border-0 cart__item'>
        <div className='cart__item-info d-flex gap-2'>
          <img src={image01} alt="jvnfhk"></img>
          <div className='cart__item-info w-100 d-flex align-items-center justify-content-between gap-4'>
            <div>
              <h6 className='cart__product-title'>{title}</h6>
              <p className='d-flex align-items-center gap-5 cart__product-price'>{quantity}<span>${totalprice}</span></p>
              <div className='d-flex align-items-center w-100 justify-content-between increase__decrease-btn'>
                <span className='increase__btn me-2' onClick={addtocart}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg></span>
                <span className='quantity'>{quantity}</span>
                <span className='decrease__btn me-2' onClick={removeItem}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M5 11V13H19V11H5Z"></path></svg></span>
              </div>
            </div>
            <span className='delete__btn'onClick={delateItem}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM13.4142 11L15.8891 8.52513L14.4749 7.11091L12 9.58579L9.52513 7.11091L8.11091 8.52513L10.5858 11L8.11091 13.4749L9.52513 14.8891L12 12.4142L14.4749 14.8891L15.8891 13.4749L13.4142 11Z"></path></svg></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cartitem