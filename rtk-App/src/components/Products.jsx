import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import  {fetchProducts} from '../slices/productSlice'
import {useEffect} from 'react'
export default function Products() {

    const dispatch=useDispatch();

    const {products}=useSelector(state=>state.product)

  useEffect(()=>{dispatch( fetchProducts())},[])
  return (
    <div>
      {
       products.map((product,index)=><div key={index}>{product.title}</div>)
      }
    </div>
  )
}
