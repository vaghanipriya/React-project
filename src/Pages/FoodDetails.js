import React, { useEffect, useState } from 'react'
import Commonsection from '../Components/Commonsection'
import { useParams } from 'react-router-dom'
import products from '../Fake-data/products'


function FoodDetails() {

  const { id } = useParams()
  console.log(id);

  const product = products.find(item => item.id === id)
  console.log(product);

  const { title, image01, image02, image03, price, category, desc } = product
  const [image, setimage] = useState(image01)

  const [tab, setTab] = useState('desc')

  useEffect(() => {
    setimage(image01)
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Commonsection title={title}></Commonsection>
      <section>
        <div className='container mt-5'>
          <div className='row'>
            <div className='col-lg-2'>
              <div>
                <img alt='' onClick={() => setimage(image01)} src={image01} className='img-fluid w-75 py-2'></img>
              </div>
              <div>
                <img alt='' onClick={() => setimage(image02)} src={image02} className='img-fluid  w-75 py-2'></img>
              </div>
              <div>
                <img alt='' onClick={() => setimage(image03)} src={image03} className='img-fluid  w-75 py-2'></img>
              </div>
            </div>
            <div className='col-lg-5'>
              <img alt='' src={image} className='img-fluid w-75'></img>
            </div>
            <div className='col-lg-5'>
              <h1 className='mt-5'>{title}</h1>

              <h6 className='text-danger my-3'>Price: ${price}</h6>
              <h6>category : <span>{category}</span></h6>
              <button className='btn btn-danger'>Add to cart</button>

            </div>

          </div>
        </div>
      </section>
      <section className='container'>
        <div className='row'>
          <p className='text-danger d-inline' onClick={() => setTab('desc')}>Description</p>
          <p className='' onClick={() => setTab('review')}>Review</p>


          {
            tab === "desc" ? (
              <div>
                <p>{desc}</p>
              </div>) : (
              <div>
                <div>
                  <h4>priya</h4>
                  <p>priya@gmail.com</p>
                  <h6>Great Product</h6>
                </div>
                <div>
                  <h4>priya</h4>
                  <p>priya@gmail.com</p>
                  <h6>Great Product</h6>
                </div>
                <div>
                  <h4>priya</h4>
                  <p>priya@gmail.com</p>
                  <h6>Great Product</h6>
                </div>
                <section className='container'>
                  <div className='row'>
                    <form className='form'>
                      <div className='bg_color w-50 mx-auto d-block'>
                        <input type="text" placeholder='Enter Name' className='my-2 mx-auto d-block' required></input><br></br>
                        <input type="email" placeholder='Enter Email' className='my-2 mx-auto d-block' required></input><br></br>
                        <input type="number" placeholder='Number' className='my-2 mx-auto d-block' required></input>
                        <button className='btn btn-danger my-4 mx-auto d-block'>Submit</button>
                      </div>
                    </form>
                  </div>
                </section>
              </div>

            )

          }



        </div>
      </section>


    </div>
  )
}

export default FoodDetails