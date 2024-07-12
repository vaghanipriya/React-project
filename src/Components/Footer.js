import React from 'react'
import logo from "../Fake-data/Images/res-logo.png";

function Footer() {
  return (

    <div>

      {/* footer section */}

      <div className='bg_color'>
        <footer className='mt-5 pt-5'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-3 col-md-6 mb-4 mb-md-0'>
                <img alt="logo" src={logo} className="img-fluid " width={64} height={64}></img>
                <p className=" font- fs-5">Testy Treat</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </div>

              <div className='col-lg-3 col-md-6 mb-4 mb-md-0'>
                <h5>Delivery Time</h5>
                <p>sunday-Thursday</p>
                <p>10:00am - 11:00pm</p>
                <p>Friday-Saturday</p>
                <p>Off Day</p>
              </div>

              <div className='col-lg-3 col-md-6 mb-4 mb-md-0'>
                <h5>Contact</h5>
                <p className=''><svg xmlns="http://www.w3.org/2000/svg" className="me-2" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15ZM12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13Z"></path></svg>Location: Xyz, Varachha-395006,Surat.</p>
                <p> <svg xmlns="http://www.w3.org/2000/svg"  className="me-2" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"></path></svg>Phone:874653987</p>
                <p><svg xmlns="http://www.w3.org/2000/svg" className="me-2" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M18.8032 8.4928C19.4663 8.81764 20.2118 9 21 9C21.3425 9 21.6769 8.96557 22 8.89998V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H16.1C16.0344 3.32311 16 3.65753 16 4C16 5.23672 16.449 6.36857 17.1929 7.24142L12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L18.8032 8.4928ZM21 7C19.3431 7 18 5.65685 18 4C18 2.34315 19.3431 1 21 1C22.6569 1 24 2.34315 24 4C24 5.65685 22.6569 7 21 7Z"></path></svg>Email:demo.xyz@gamil.com</p>
              </div>

              <div className='col-lg-3 col-md-6 mb-4 mb-md-0'>
                <h5>Newsletter</h5>
                <p>Subscribe our newsletter</p>
                <div className="form-outline mb-4 position-relative">
                  <input type="email" placeholder='Enter your name' ></input>
                  <span className='position-absolute footer_icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="rgba(248,0,0,1)"><path d="M1.94607 9.31543C1.42353 9.14125 1.4194 8.86022 1.95682 8.68108L21.043 2.31901C21.5715 2.14285 21.8746 2.43866 21.7265 2.95694L16.2733 22.0432C16.1223 22.5716 15.8177 22.59 15.5944 22.0876L11.9999 14L17.9999 6.00005L9.99992 12L1.94607 9.31543Z"></path></svg>

                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center p-3">
           <h6 className='text-danger'> Copyright  :  2024,website made by Priya vaghani, All Rights Reserved.</h6>
          </div>
        </footer>
      </div>
      
      {/* footer section end */}

    </div>
  )
}

export default Footer