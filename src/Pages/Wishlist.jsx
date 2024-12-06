import React from 'react'
import{MDBBtn} from 'mdb-react-ui-kit'
import { TbHeartX } from "react-icons/tb";
import { FaCartPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishlist } from '../Redux/slices/wishlistSlice';

function Wishlist() {
    const wishlist = useSelector((state)=>state.wishlist)
    const dispatch=useDispatch()
  return (
    <div>
     <div className="row">
        {
          wishlist.length>0?wishlist.map(item=>(
            <div className="col-2 shadow border m-5 rounded p-5">
            <img  src={item.thumbnail} width={'100%'} alt="" />

            <h3 className='text-center my-3'>{item.title}</h3>
            <div className='text-center'>
            <MDBBtn color='light' onClick={()=>dispatch(removeFromWishlist(item.id))}><TbHeartX  className='fs-3'/></MDBBtn>
            <MDBBtn color='light'><FaCartPlus className='fs-3 ms-1' /></MDBBtn>

            </div>
           
        </div>
          )):"Empty wishlist"
        }
      </div>
      {/* empty wishlist */}
      <div className='text-center p-5 m-5'>
        <img src="https://freddysjewelry.com/assets/images/empty-wishlist.png " width={'600px'} alt="" />
        <p className='text-center fw-bolder my-3'>Your wishlist was empty</p>
            <Link to={'/'}>
            <MDBBtn>Shop More</MDBBtn>
            </Link>
      </div>
    </div>
  )
}

export default Wishlist
