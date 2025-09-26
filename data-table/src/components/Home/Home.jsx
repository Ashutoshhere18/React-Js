import React, { useState } from 'react'
import data from '../../assets/products/data'
export default function Home() {

  
  return (
    <div>
      
      {
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Order ID</th>
      <th scope="col">Date</th>
      <th scope="col">Customer Name</th>
      <th scope="col">Product</th>
      <th scope="col">Price</th>
      <th scope="col">Payment</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
    {
      data.map((product,index)=>{
      
        let statusclass="";
        if(product.status==="Completed"){
          statusclass="text-success fw-bold"
        }
        else if(product.status==="Pending"){
          statusclass="text-warning fw-bold"
        }
         else if(product.status==="New"){
          statusclass="text-info fw-bold "
        }else{
          statusclass="text-danger fw-bold"
        }

        let paymentClass = "";
    if (product.payment === "Paid") {
      paymentClass = "text-success fw-bold"; 
    } else if (product.payment === "Pending") {
      paymentClass = "text-warning fw-bold"; 
    } else {
      paymentClass = "text-danger fw-bold"; 
    }
         return(
          <tbody key={index}>
    <tr>
      <th scope="row">{product.orderId}</th>
      <td>{product.date}</td>
      <td>{product.customerName}</td>
      <td>{product.product}</td>
      <td>{product.price}</td>
      <td className={paymentClass}>{product.payment}</td>
      <td className={statusclass}>{product.status}</td>
    </tr>
    
  </tbody>
         )
      })
    }
</table>
      }
    </div>
  )
}
  