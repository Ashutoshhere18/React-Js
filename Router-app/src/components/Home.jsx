
import React from 'react'

import product from '../json/json'
export default function Home() {

  return (
    <div>

     {
      product.map(product=>{
        <div>
          <p>{product.id}</p>
        </div>
      })
     }
    </div>
  )
}