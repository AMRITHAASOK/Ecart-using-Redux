import React, { useEffect, useState } from 'react'
import{MDBBtn} from 'mdb-react-ui-kit'
import useFetch from '../Hooks/useFetch'
import { Link } from 'react-router-dom'

function Home() {
  const [data,setdata]=useState([])
  const result = useFetch('https://dummyjson.com/products')
  console.log(result);//object
  console.log(data);
  useEffect(()=>{
    setdata(result.products)//array
  },[result.products])

  return (
    <div>
      <div className="row">
        {
          data?data.map((product)=>(
            <div className="col-2 shadow border m-5 rounded p-5">
            <img src={product.thumbnail} width={'100%'} alt="" />
            <h3 className='text-center my-3'>{product.title}</h3>
            <div className='text-center'>
              <Link to={`/view/${product.id}`}>
              <MDBBtn color='black'>View Product</MDBBtn>
              </Link>
            </div>
           
        </div>
          )):"Empty list"
        }
      </div>
    </div>
  )
}

export default Home
