import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import  {fetchProducts,insertProducts} from '../slices/productSlice'
import {useEffect} from 'react'
export default function Products() {

    const dispatch=useDispatch();

    const {products}=useSelector(state=>state.product)

  useEffect(()=>{dispatch( fetchProducts())},[])
  return (
    <div>
      <button onClick={()=>{
        dispatch(insertProducts({title:"Mobile Display",views:300}))
       }}>Add</button>
      {
       products.map((product,index)=><div key={index}>{product.title.title} 
      
       </div>)
      }
       
    </div>
  )
}
