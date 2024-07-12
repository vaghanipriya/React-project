import React, { useState } from 'react'
import Commonsection from '../Components/Commonsection'
import ProductCard from './Category/ProductCard'
import products from '../Fake-data/products'
import Helmet from '../Components/Helmet'
import ReactPaginate from 'react-paginate'


function Allfood() {


  const [searchProduct, setsearchProduct] = useState('');

  const [allproducts, setallproducts] = useState(products)

  
  const [pagenumber, setpagenumber] = useState(0)
  const pageperproduct = 4
  const visitedproduct = pagenumber * pageperproduct
  const showproduct = allproducts.slice(visitedproduct, visitedproduct + pageperproduct)


  const pageCount = Math.ceil(products.length / pageperproduct)

  const onPageChange = ({ selected }) => {
    setpagenumber(selected)
  }
  return (

    <div>
      <Helmet title="all products">
        <Commonsection title="ALL FOODS"></Commonsection>

        <section className='container mt-5'>
          <div className='justify-content-between d-flex'>
            <div className=''>
              <input type='text' placeholder=" Im looking for.... " value={searchProduct} onChange={((e) => setsearchProduct(e.target.value))}></input>
            </div>
            <div>
              <div className='rounded-1'>
                <select className='pe-4 '>
                  <option value="Default">Default</option>
                  <option value="Alphabetically, A-Z">Alphabetically, A-Z</option>
                  <option value="Alphabetically, Z-A">Alphabetically, Z-A</option>
                  <option value="High Price">High Price</option>
                  <option value="Low Price">Low Price</option>
                </select>
              </div>
            </div>
          </div>
        </section>


        <section className='container mt-5'>
          <div className=' row g-3'>
            {
              (searchProduct === "" ? showproduct : products.filter((item) => {
                if (item.title.toLowerCase().includes(searchProduct.toLowerCase())) {
                  return item;
                }

              })).map((item) => {

                return <div className="col-lg-3 col-md-6 col-12" key={item.id}>
                  <ProductCard productsitem={item}></ProductCard>
                </div>

              })
            }

          </div>
          <div>
            <ReactPaginate pageCount={pageCount} onPageChange={onPageChange} className='paginationBttns' >

            </ReactPaginate>
          </div>
        </section>
      </Helmet>
    </div>
  )
}

export default Allfood