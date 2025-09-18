import React from 'react'
import { useNavigate } from 'react-router'
import Navbar from './Navbar';

export default function Home({ products, setcart }) {
  const Navigate = useNavigate();

   
  return (
    <div>
      <Navbar/>
       <div className="container mt-4">
      <div className="row">
        {products && products.length > 0 ? (
          products.map(item => (
            <div className="col-md-4 mb-4" key={item.id}>
              <div className="card h-100 shadow-sm">
                <img 
                  src={item.thumbnail} 
                  className="card-img-top" 
                  alt={item.title} 
                  style={{ height: "200px", objectFit: "cover" }} 
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text text-muted">
                    {item.description.substring(0, 80)}...
                  </p>
                  <p className="fw-bold">₹{item.price}</p>

                  <button 
                    className="btn btn-primary me-2"
                    onClick={() => Navigate("/Productdetails", { state: item })}
                  >
                    View More
                  </button>

                  <button 
                    className="btn btn-success"
                    onClick={()=>{
                      setcart(prev => [...prev, item]);
                            Navigate("/Cart");
                    }}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
    </div>
  )
}
