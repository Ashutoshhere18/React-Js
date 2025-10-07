import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
export default function Products() {

    const dispatch=useDispatch();

    const {products}=useSelector(state=>state.product)

  return (
    <div>
      {
       products.map((product,index)=><div key={index}>{product.title}</div>)
      }
    </div>
  )
}
