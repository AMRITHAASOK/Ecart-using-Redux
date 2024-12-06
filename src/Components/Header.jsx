import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
  MDBInputGroup
} from 'mdb-react-ui-kit';

import { BsFillBagHeartFill } from "react-icons/bs";
import { LiaLuggageCartSolid } from "react-icons/lia";
import { MDBBadge, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <MDBNavbar light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand>Daily Cart</MDBNavbarBrand>
        <MDBInputGroup tag="form" className='d-flex w-auto mb-3'>
          <input className='form-control mt-2' placeholder="Find Products" aria-label="Search" type='Search' />
          <div className='position-relative d-inline-block'>
      </div>
      <div>
        <Link to={'/wishlist'}>
        <BsFillBagHeartFill  className='fs-2 text-danger ms-3'/>
        <MDBBadge color='danger' notification pill>
          0
        </MDBBadge>
        </Link>
      
      </div>
      <div>
      <Link to={'/cart'}>
      <LiaLuggageCartSolid className='fs-1 ms-3'/> 
        <MDBBadge color='danger' notification pill>
          0
        </MDBBadge>
        </Link>
      </div>
      
         
        </MDBInputGroup>
      </MDBContainer>
    </MDBNavbar>
    </div>
  )
}

export default Header
