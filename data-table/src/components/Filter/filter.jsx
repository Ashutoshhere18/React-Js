import React, { useState } from "react";
import data from './../../assets/products/data';

export default function Filter() {
  // Step1: state for search
  const [search, setSearch] = useState("");

  // Step2: copy of data
  let filteredData = [...data];

  // Step3: filter by customerName
  if (search) {
    filteredData = filteredData.filter(product =>
      product.customerName.toLowerCase().includes(search.toLowerCase())
    );
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
          <input type="text" placeholder="Order ID" />
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
          <input type="tel" maxLength={10} placeholder="Phone" />
        </div>
        <div className="col">
          <input type="text" placeholder="Product" />
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
          <select>
            <option value="">Select</option>
            <option value="Paid" className="text-success">Paid</option>
            <option value="Pending" className="text-warning">Pending</option>
            <option value="Not Paid" className="text-danger">Not Paid</option>
          </select>
        </div>

        <div className="col">
          <div className="dropdown">
            <button
              className="btn btn-outline-primary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Filter Orders
            </button>
            <ul className="dropdown-menu p-2">
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
            <button className="mx-4 btn btn-primary">Search</button>
          </div>
          <div>
            <button className="btn btn-danger">Clear Filters</button>
          </div>
        </div>
      </div>

      {/* Display filtered data */}
      <div className="container mt-4">
        {filteredData.map((product, index) => (
          <div key={index} className="row border-bottom py-2">
            <div className="col">{product.orderId}</div>
            <div className="col">{product.customerName}</div>
            <div className="col">{product.phoneNumber}</div>
            <div className="col">{product.product}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

