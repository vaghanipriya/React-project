import React from 'react'

function Commonsection(props) {
  return (
    <div>
        <section className='common_sec mt-5'>
              <div className='container'>
                <div className='row'>
                <h2 className='text-white'>{props.title}</h2> 
                </div>
              </div>
        </section>
    </div>
  )
}

export default Commonsection