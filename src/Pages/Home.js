import React, { useEffect, useState } from 'react'
import Slider from "react-slick";

import img1 from "../Fake-data/Images/hero.png";
import img2 from "../Fake-data/Images/location.png"
import img3 from "../Fake-data/Images/network.png"
import img4 from "../Fake-data/Images/service-01.png"
import img5 from "../Fake-data/Images/service-02.png"
import img6 from "../Fake-data/Images/service-03.png"
import img7 from "../Fake-data/Images/category-01.png"
import img8 from "../Fake-data/Images/category-02.png"
import img9 from "../Fake-data/Images/category-03.png"
import img0 from "../Fake-data/Images/category-04.png"
import ava1 from "../Fake-data/Images/ava-1.jpg"
import ava2 from "../Fake-data/Images/ava-2.jpg"
import ava3 from "../Fake-data/Images/ava-3.jpg"
import ProductCard from './Category/ProductCard';
import p1 from "../Fake-data/Images/hamburger.png"
import p2 from "../Fake-data/Images/pizza.png"
import p3 from "../Fake-data/Images/bread.png"
import products from "../Fake-data/products"
import Helmet from '../Components/Helmet';


function Home() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const [hotpizza, sethotPizza] = useState([])
  const [allproducts, setallproducts] = useState(products)
  const [category, setcategory] = useState("All")

  useEffect(() => {
    if (category === "All") {
      setallproducts(products)

    }
    if (category === "pizza") {
      const filterproduct = products.filter(item => item.category === "Pizza");
      setallproducts(filterproduct)
    }
    if (category === "Burger") {
      const filterproduct = products.filter(item => item.category === "Burger");
      setallproducts(filterproduct)
    }
    if (category === "Bread") {
      const filterproduct = products.filter(item => item.category === "Bread");
      setallproducts(filterproduct)
    }
  }, [category])

  useEffect(() => {
    const filterpizza = products.filter(item => item.category === 'Pizza')
    //  console.log(filterpizza);
    const slicepizza = filterpizza.slice(1, 5);
    // console.log(Slicepizza);
    sethotPizza(slicepizza)
  }, [])

  return (
    <div>
      <Helmet title='Home'>
        {/* section 1 */}
        <section>
          <div className='container'>
            <div className='row'>
              <div className='col-12  col-lg-6 my-auto'>
                <p>Easy Way to make an order</p>
                <h2><span className='text-danger'>HUNGRY?</span> Just Wait<br></br> Food at<span className='text-danger'> your door</span></h2>
                <p className='mt-4'>Column widths are set in percentages, so theye always fluid and sized .</p>
                <div className='mt-5'>
                  <button className='me-4 btn btn-danger'>order now </button>
                  <button className='btn btn-light'>See allfoods</button>
                </div>
              </div>

              <div className='col-12 col-lg-6'>
                <img alt="img" src={img1} className="img-fluid "></img>
              </div>
            </div>
          </div>
        </section>
        {/* section 1 end */}


        {/* section 2 */}
        <section>
          <div className='container'>
            <div className='row mt-5'>

              <div className='col-lg-3 col-md-6 col-sm-12 '>
                <div className='bg_color py-2 px-3 rounded'>

                  <img alt="img" src={img7} className="img-fluid me-3 "></img>

                  fast food
                </div>
              </div>
              <div className='col-lg-3 col-md-6 col-sm-12'>
                <div className='bg_color py-2 px-3 rounded'>
                  <img alt="img" src={img8} className="img-fluid me-3"></img>

                  pizza
                </div>
              </div>
              <div className='col-lg-3 col-md-6 col-sm-12 '>
                <div className='bg_color py-2 px-3 rounded'>
                  <img alt="img" src={img9} className="img-fluid me-3"></img>
                  Asian food
                </div>
              </div>
              <div className='col-lg-3 col-md-6 col-sm-12'>
                <div className='bg_color py-2 px-3 rounded'>
                  <img alt="img" src={img0} className="img-fluid me-3"></img>
                  row Meat
                </div>
              </div>

            </div>

          </div>
        </section>
        {/* section 2 end */}


        {/* section 3 */}
        <section>
          <div className='container'>
            <div className='row mt-5'>
              <div className='text-center'>
                <p><span className='text-danger'>What we Serve</span></p>
                <h2>Just Sit back at home <br></br>We Will <span className='text-danger'>tack care</span></h2>
                <p>Column widths are set in percentages, so they re always. </p>
                <p>Column widths are set in percentages, so they re always. </p>
              </div>

            </div>
          </div>
        </section>
        {/* section 3 end */}


        {/* section 4 */}
        <section>
          <div className='container'>
            <div className='row mt-5 text-center'>

              <div className='col-lg-4 col-md-12 col-sm-12 d-flex align-items-center flex-column'>
                <img alt="img" src={img4} className="img-fluid w-25"></img>
                <h5>Quick Delivery</h5>
                <p>Column widths are set in percentages
                  <br></br>Column widths are set.</p>
              </div>
              <div className='col-lg-4 col-md-12 col-sm-12 d-flex align-items-center flex-column'>
                <img alt="img" src={img5} className="img-fluid w-25"></img>
                <h5>Super Dine In</h5>
                <p>Column widths are set in percentages
                  <br></br>Column widths are set.</p>
              </div>
              <div className='col-lg-4 col-md-12 col-sm-12 d-flex align-items-center flex-column'>
                <img alt="img" src={img6} className="img-fluid w-25"></img>
                <h5>Easy Pick UP</h5>
                <p>Column widths are set in percentages
                  <br></br>Column widths are set.</p>
              </div>
            </div>

          </div>
        </section>
        {/* section 4 end */}


        {/* section 5 */}
        <section>
          <div className='container'>
            <div className='col-lg-12'>
              <div className='row mt-5' >
                <div className='text-center'>
                  <h3>Popular Foods</h3>
                </div>

              </div>
              <div className='col-lg-12  mt-5 food_category'>
                <div className='d-flex align-items-center justify-content-center gap-4'>
                  <button className="d-flex align-items-center gap-2 btn btn-light mx-5"><span className='text-danger' onClick={() => setcategory("All")}>All</span></button>
                  <button className='d-flex align-items-center gap-2 btn mx-3 food_category' onClick={() => setcategory("Burger")}><img src={p1} alt='' className='w-25'></img>Burger</button>
                  <button className='d-flex align-items-center gap-2 btn mx-2 food_category' onClick={() => setcategory("pizza")}><img src={p2} alt='' className='w-25'></img>pizza</button>
                  <button className='d-flex align-items-center gap-2 btn food_category' onClick={() => setcategory("Bread")}><img src={p3} alt='' className='w-25'></img>Bread</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section 5 end */}


        {/* section 6 */}
        <section className='container mt-5'>
          <div className=' row g-3'>
            {
              allproducts.map((item) => {
                return <div className="col-lg-3 col-md-6 col-12" key={item.id}>
                  <ProductCard productsitem={item}></ProductCard>
                </div>

              })
            }

          </div>
        </section>
        {/* section 6 end */}


        {/* section 7 */}
        <section>
          <div className='container'>
            <div className='row mt-2 mt-md-3 mt-lg-5'>
              <div className='col-12 col-lg-6 '>
                <img alt="img" src={img2} className="img-fluid "></img>
              </div>
              <div className='col-12 col-lg-6 my-auto'>

                <h4>Why Tasty Treat</h4>
                <p>Rows are wrappers for columns. Each column has horizontal padding (called a gutter) for controlling the space between them. This padding is then counteracted on the rows with negative margins. This way, all the content in your columns is visually aligned down the left side.
                </p>

                <div className='mt-4'>

                  <h6>Fresh and tasty foods</h6>
                  <p>Rows are wrappers for columns. Each column has horizontal</p>
                </div>
                <div className='mt-4'>

                  <h6>Quality suooort</h6>
                  <p>Rows are wrappers for columns. Each column has horizontal</p>
                </div>

                <div className='mt-4'>

                  <h6>Order form any location</h6>
                  <p>Rows are wrappers for columns. Each column has horizontal</p>
                </div>


              </div>
            </div>
          </div>
        </section>
        {/* section 7 end */}


        {/* section 8 */}
        <section>
          <div className='container'>
            <div className='row mt-5' >
              <div className='text-center'>
                <h3>Hot pizza</h3>
                <div className='row '>
                  {
                    hotpizza.map((item) => {
                      return <div className='col-3 mt-5' key={item.id}>
                        <ProductCard productsitem={item}></ProductCard>
                      </div>
                    })
                  }
                </div>

              </div>
            </div>
          </div>
        </section>
        {/* section 8 end */}


        {/* section 9 */}
        <section>
          <div className='container'>
            <div className='row mt-5'>
              <div className='col-12 col-lg-6 my-auto'>
                <h6><span className='text-danger'>Testimonial</span></h6>
                <h3>What Our<span className='text-danger'> Customers </span>are saying</h3>
                <p>Rows are wrappers for columns. Each column has horizontal padding (called a gutter) for controlling the space between them. </p>
                <p className='mt-5'>Rows are wrappers for columns. Each column has horizontal padding (called a gutter) for controlling the space between them. This padding is then counteracted on the rows with negative margins. This way, all the content in your columns is visually aligned down the left side.
                  Fresh and tasty foods</p>

                <Slider {...settings}>

                  <div className='row'>
                    <div className='d-flex align-items-center'>
                      <img alt="img" src={ava1} width={64} className="rounded "></img>
                      <p className='ms-3 mb-0'>Jhon Doe</p>
                    </div>

                  </div>
                  <div className='row'>
                    <div className='d-flex align-items-center'>
                      <img alt="img" src={ava2} width={64} className="rounded"></img>
                      <p className='ms-3 mb-0'>Elena</p>
                    </div>

                  </div>
                  <div className='row'>
                    <div className='d-flex align-items-center'>
                      <img alt="img" src={ava3} width={64} className="rounded"></img>
                      <p className='ms-3 mb-0'>Devin</p>
                    </div>

                  </div>


                </Slider>
              </div>
              <div className='col-12 col-lg-6'>
                <img alt="img" src={img3} className="img-fluid "></img>
              </div>
            </div>
          </div>
        </section>
        {/* section 9 end */}


      </Helmet>


    </div>
  )
}

export default Home