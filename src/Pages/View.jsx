import React from 'react'
import{MDBBtn} from 'mdb-react-ui-kit'
import { FaStar } from "react-icons/fa6";
import { useParams } from 'react-router-dom';
import useFetch from '../Hooks/useFetch';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist } from '../Redux/slices/wishlistSlice';
import { addTocart } from '../Redux/slices/cartSlice';

function View() {
  const {id}= useParams()
  console.log(id); //id 
  const product = useFetch(`https://dummyjson.com/products/${id}`)
  console.log(product);//object?

  const wishlist = useSelector((state)=>state.wishlist)
  const cart = useSelector((state)=>state.cart)

  const dispatch = useDispatch()


  const handleAddToWishlist=()=>{
    console.log(wishlist);
    
    const alreadyInWishlist = wishlist.find((item)=>item.id==product.id)
    if(alreadyInWishlist){
      alert("product already in wishlist ")
    }
    else{
      dispatch(addToWishlist(product))
      alert("Product added your wishlist")
    }
   
  }
  const handleAddToCart=()=>{
    console.log(cart);
    
    const alreadyInCart = cart.find((item)=>item.id==product.id)
    if(alreadyInCart){
      alert("product already in cart ")
    }
    else{
      dispatch(addTocart(product))
      alert("Product added your cart")
    }
   
  }
  return (
    <>
    <div className="row">
        <div className="col-6 p-5 text-center">
        <img  src={product.thumbnail} width={'500px'} height={'500px'} alt="" />
        <div className="d-flex justify-content-between m-4">
            <MDBBtn color='black' onClick={handleAddToWishlist}>Add To Wishlist</MDBBtn>
            <MDBBtn color='black' onClick={handleAddToCart}>Add To Cart</MDBBtn>
        </div>
        </div >
        <div className="col-6 p-5">
        <p>PID : {product.id}</p>
        <h3>{product.title} </h3>
            <h4>$ {product.price} </h4>
                <h5>Brand : {product.brand} </h5>
                <h5>Category : {product.category} </h5>
                <h6>
                Description : {product.description} 

                </h6>
                <div className='mt-4'>
                    <h6>Clients Review</h6>
                    <div className='border p-2 w-75 shadow '>
                    <h6>Liam Garcia : Very satisfied!</h6>
                    <h6>Rating : 4 <FaStar className='text-warning' /></h6>
                    </div>
                </div>


        </div>
    </div>
     
    </>
  )
}

export default View
