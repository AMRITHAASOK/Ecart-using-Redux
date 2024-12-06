import React, { useEffect, useState } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody, MDBBtn } from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { incrementCart, decrementCart, removeFromCart, clearCart } from '../Redux/slices/cartSlice';
import { useNavigate } from 'react-router-dom';  // useNavigate for react-router-dom v6

function Cart() {
  const [grandTotal, setGrandTotal] = useState(0);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // useNavigate for navigation

  useEffect(() => {
    if (cart.length > 0) {
      setGrandTotal(
        cart.map(item => item.totalPrice).reduce((a, b) => a + b, 0)
      );
    } else {
      setGrandTotal(0);  // Reset to 0 when the cart is empty
    }
  }, [cart]);

  // Handle empty cart
  const handleEmptyCart = () => {
    dispatch(clearCart());
  };

  // Handle shop more
  const handleShopMore = () => {
    navigate('/'); // Assuming '/' is the route for the shop page
  }

  // Handle checkout
  const handleCheckout = () => {
  };

  return (
    <div className='p-5'>
      <div className="row">
        <h3>Cart Details</h3>
        <div className="col-8">
          <MDBTable hover className='shadow'>
            <MDBTableHead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Title</th>
                <th scope='col'>Image</th>
                <th scope='col'>Quantity</th>
                <th scope='col'>Price</th>
                <th scope='col'>Action</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {
                cart.length > 0 ? cart.map(item => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>
                      <img src={item.thumbnail} width={'100px'} height={'100px'} alt="" />
                    </td>
                    <td className='d-flex p-5'>
                      <MDBBtn onClick={() => dispatch(decrementCart(item.id))}>-</MDBBtn>
                      <input type="text" value={item.quantity} className='form-control' readOnly style={{ width: '45px' }} />
                      <MDBBtn onClick={() => dispatch(incrementCart(item.id))}>+</MDBBtn>
                    </td>
                    <td>${item.totalPrice}</td>
                    <td>
                      <i onClick={() => dispatch(removeFromCart(item.id))} className='fa-solid fa-trash text-danger fs-4'></i>
                    </td>
                  </tr>
                )) : <tr><td colSpan="6" className="text-center">Empty Cart</td></tr>
              }
            </MDBTableBody>
            <div className='d-flex justify-content-between ms-5 p-4'>
              <MDBBtn onClick={handleEmptyCart} className='me-5' color='danger'>Empty Cart</MDBBtn>
              <MDBBtn onClick={handleShopMore} className='' color='success'>Shop More</MDBBtn>
            </div>
          </MDBTable>
        </div>
        <div className="col-4">
          <div className='border p-5 shadow'>
            <h4>Total Amount : ${grandTotal}</h4>
            <div className='text-center'>
              <MDBBtn onClick={handleCheckout} color='success mt-4'>CheckOut</MDBBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
