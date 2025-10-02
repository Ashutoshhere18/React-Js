import React, { useState } from "react";
import data from './../../assets/products/data';

export default function Filter() {

   // Step1: state for inputs
  const [search, setSearch] = useState("");
  const [Order, SetOrder] = useState("");
  const [Phone, Setphone] = useState("");
  const [product, Setproducts] = useState("");
  const [payment, SetPayment] = useState("");
  const [status, SetStatus] = useState("All");
  const [Date, SetDate] = useState("");

  //  new state for filtered result
  const [filteredData, setFilteredData] = useState(data)

  const handleSearch = () => {
    let tempData = [...data];

    if (search) {
      tempData = tempData.filter(product =>
        product.customerName.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (Order !== "") {
      tempData = tempData.filter(product =>
        product.orderId.toLowerCase().includes(Order.toLowerCase())
      );
    }

    if (Phone !== "") {
      tempData = tempData.filter(product =>
        product.phoneNumber.includes(Phone)
      );
    }

    if (product !== "") {
      tempData = tempData.filter(p =>
        p.product.toLowerCase().includes(product.toLowerCase())
      );
    }

    if (payment !== "") {
      tempData = tempData.filter(p => p.payment.includes(payment));
    }

    if (status !== "All") {
      tempData = tempData.filter(p =>
        p.status.toLowerCase().includes(status.toLowerCase())
      );
    }

    if (Date !== "") {
      tempData = tempData.filter(p => p.date === Date);
    }

    setFilteredData(tempData);
  };

  // Clear 

   const clearFilters = () => {
    setSearch("");
    SetOrder("");
    Setphone("");
    Setproducts("");
    SetPayment("");
    SetStatus("All");
    SetDate("");
    setFilteredData(data); // reset
  };
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
  <select value={status} onChange={e => SetStatus(e.target.value)}>
    <option value="All">All</option>
    <option value="Delivered">Delivered</option>
    <option value="Pending">Pending</option>
    <option value="Cancelled">Cancelled</option>
  </select>
</div>


        <div className="col">
          <input type="date" value={Date} onChange={e=>SetDate(e.target.value)} />
        </div>

        <div className="col d-flex">
          <div>
            <button className="mx-4 btn btn-primary" onClick={handleSearch}>Search</button>
          </div>
          <div>
            <button className="btn btn-danger" onClick={clearFilters}>Clear Filters</button>
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

