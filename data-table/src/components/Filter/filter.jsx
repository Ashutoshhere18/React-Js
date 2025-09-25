import React from "react";

export default function Filter() {
  return (
    <div class="container text-center mt-4">
      <div class="row">
        <div class="col">Order ID</div>
        <div class="col">Customer</div>
        <div class="col">Phone Number</div>
        <div class="col">Product</div>
      </div>
      <div class="row mb-4">
        <div class="col">
          <input type="text" />
        </div>
        <div class="col">
          <input type="text" />
        </div>
        <div class="col">
          <input type="tel" maxLength={10} />
        </div>
        <div class="col">
          <input type="text" />
        </div>
      </div>
      <div class="row">
        <div class="col">Payment</div>
        <div class="col">Status</div>
        <div class="col">Date</div>
        <div class="col"></div>
      </div>
      <div class="row">
        <div class="col">
          <select name="" id="">
            <option value="">Select</option>
            <option value="" class="text-success">
              Paid
            </option>
            <option value="" class="text-warning">
              Pending
            </option>
            <option value="" class="text-danger">
              Not paid
            </option>
          </select>
        </div>
        <div class="col">
  <div class="dropdown">
    <button class="btn btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Filter Orders
    </button>
    <ul class="dropdown-menu p-2">
      <li>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="allOrders" />
          <label class="form-check-label fw-bold" for="allOrders">All</label>
        </div>
      </li>
      <li>
        <div class="form-check">
          <input class="form-check-input " type="checkbox" id="newOrders" />
          <label class="form-check-label text-info fw-bold" for="newOrders">New</label>
        </div>
      </li>
      <li>
        <div class="form-check">
          <input class="form-check-input " type="checkbox" id="completedOrders" />
          <label class="form-check-label text-success fw-bold" for="completedOrders">Completed</label>
        </div>
      </li>
      <li>
        <div class="form-check">
          <input class="form-check-input " type="checkbox" id="pendingOrders" />
          <label class="form-check-label text-warning fw-bold" for="pendingOrders">Pending</label>
        </div>
      </li>
      <li>
        <div class="form-check">
          <input class="form-check-input " type="checkbox" id="cancelledOrders" />
          <label class="form-check-label text-danger fw-bold" for="cancelledOrders">Cancelled</label>
        </div> 
      </li>
    </ul>
  </div>
</div>

        <div class="col">
        <input type="date"  />
        </div>
        <div class="col d-flex">
          {" "}
          <div>
            <button class="mx-4 btn btn-primary">Search</button>
          </div>{" "}
          <div>
            <button class="btn btn-danger">Clear Filters</button>
          </div>
        </div>
      </div>
      
    </div>
    
  );
}
