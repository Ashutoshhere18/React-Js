import React, { useState } from "react";
import data from './../../assets/products/data';

export default function Filter() {
  // Step1: state for search
  const [search, setSearch] = useState("");
  const[Order,SetOrder]=useState("");
  const[Phone,Setphone]=useState("");
  const[product,Setproducts]=useState("");
  const[payment,SetPayment]=useState("");
  const[status,SetStatus]=useState("");
  // Step2: copy of data
  let filteredData = [...data];

  // Step3: filter by customerName
  if (search) {
    filteredData = filteredData.filter(product =>
      product.customerName.toLowerCase().includes(search.toLowerCase())
    );
  }

  if(Order!=""){
   filteredData=filteredData.filter(product=>product.orderId.toLowerCase().includes(Order.toLowerCase()));
  }
   if(Phone!=""){
  filteredData=filteredData.filter(product=>product.phoneNumber.includes(Phone));
   }

   if(product!=""){
    filteredData=filteredData.filter(Product=>Product.product.toLowerCase().includes(product.toLowerCase()));
   }

    if(payment!=""){
    filteredData=filteredData.filter(Product=>Product.payment.includes(payment));
   }
  if(status!=""){
    filteredData=filteredData.filter(Product=>Product.status.includes(status));
  }

  return (
    <div className="container text-center mt-4">
      <div className="row">
        <div className="col">Order ID</div>
        <div className="col">Customer</div>
        <div className="col">Phone Number</div>
        <div className="col">Product</div>
      </div>

      <div className="row mb-4">
        <div className="col">
          <input type="text" placeholder="Order ID" value={Order} onChange={e=>SetOrder(e.target.value)} />
        </div>
        <div className="col">
          <input
            type="text"
            placeholder="Customer Name"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className="col">
          <input type="tel" maxLength={10} placeholder="Phone" value={Phone} onChange={e=>Setphone(e.target.value)} />
        </div>
        <div className="col">
          <input type="text" placeholder="Product" value={product} onChange={e=>Setproducts(e.target.value)} />
        </div>
      </div>

      <div className="row">
        <div className="col">Payment</div>
        <div className="col">Status</div>
        <div className="col">Date</div>
        <div className="col"></div>
      </div>

      <div className="row mb-4">
        <div className="col">
          <select value={payment} onChange={e=>SetPayment(e.target.value)}>
            <option value="">Select</option>
            <option value="Paid" className="text-success">Paid</option>
            <option value="Pending" className="text-warning">Pending</option>
            <option value="Not Paid" className="text-danger">Not Paid</option>
          </select>
        </div>

        <div className="col">
          <div className="dropdown" value={status}
              onChange={e=>SetStatus(e.target.value)}>
            <button
              className="btn btn-outline-primary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              
            >
              Filter Orders
            </button>
            <ul className="dropdown-menu p-2" >
              <li>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="allOrders" />
                  <label className="form-check-label fw-bold" htmlFor="allOrders">All</label>
                </div>
              </li>
              <li>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="newOrders" />
                  <label className="form-check-label text-info fw-bold" htmlFor="newOrders">New</label>
                </div>
              </li>
              <li>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="completedOrders" />
                  <label className="form-check-label text-success fw-bold" htmlFor="completedOrders">Completed</label>
                </div>
              </li>
              <li>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="pendingOrders" />
                  <label className="form-check-label text-warning fw-bold" htmlFor="pendingOrders">Pending</label>
                </div>
              </li>
              <li>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="cancelledOrders" />
                  <label className="form-check-label text-danger fw-bold" htmlFor="cancelledOrders">Cancelled</label>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="col">
          <input type="date" />
        </div>

        <div className="col d-flex">
          <div>
            <button className="mx-4 btn btn-primary" onClick={()=>{
              setSearch((e)=>e.target.value)
            }}>Search</button>
          </div>
          <div>
            <button className="btn btn-danger">Clear Filters</button>
          </div>
        </div>
      </div>

      {/* Display filtered data */}
      <div className="container mt-4">
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
      <th scope="col">Phone Number</th>
    </tr>
  </thead>
    {
      filteredData.map((product,index)=>{
      
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
      <td>{product.phoneNumber}</td>
    </tr>
    
  </tbody>
         )
      })
    }
</table>
      </div>
    </div>
  );
}

