import React from 'react'
import { Link } from "react-router-dom";
import logo from "../Fake-data/Images/res-logo.png";
import { useDispatch, useSelector } from 'react-redux'
import { cartUiAction } from '../Store/Slice/CartSliceUi';

  function Header() {
  const dispatch = useDispatch();
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const cartToggle = () => {
    // alert('xcfghj')
    dispatch(cartUiAction.toggle())
  }

  return (
    <div>

      {/* Header section */}

      <section className="mx-lg-5 py-2 ">
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <div className="logo d-md-block mx-md-auto">
              <img alt="logo" src={logo} className="img-fluid d-block mx-auto" width={64} height={64}></img>
              <p className="text-center font- fs-5">Testy Treat</p>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse nav"
              id="navbarSupportedContent">
              <ul className="navbar-nav mt-2 d-block mx-auto">
                <li className="nav-item  d-inline-block">
                  <Link className="nav-link   mx-4" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item d-inline-block ">
                  <Link className="nav-link  mx-4" to="/food">
                    Food
                  </Link>
                </li>
                <li className="nav-item d-inline-block ">
                  <Link className="nav-link  mx-4" to="/cart">
                    Cart
                  </Link>
                </li>
                <li className="nav-item d-inline-block  ">
                  <Link className="nav-link  mx-4" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
              <div className=" float-end ">
                <Link  onClick={cartToggle} className="btn  border border-0 bg-transparent  p-0 fs-5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(21,21,21,1)"><path d="M6.00488 9H19.9433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V9ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z"></path></svg>
                </Link>
                <span><sup className='bg-danger border rounded p-1  text-light'>{totalQuantity}</sup></span>

                <Link  className="btn  border border-0 bg-transparent  fs-5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(13,11,11,1)"><path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13Z"></path></svg>

                </Link>
              </div>
            </div>
          </div>
        </nav>
      </section>

      {/* Header section end */}

    </div>
  )
}

export default Header