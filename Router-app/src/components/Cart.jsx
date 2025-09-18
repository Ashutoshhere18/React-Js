import React from 'react'
import {useState,useEffect} from 'react'
import Navbar from './Navbar';

export default function Cart({ cart=[] ,setcart}) {
   const [total, setTotal] = useState(0);

    const totalPrice = () => {
        let sum = 0;
        cart.map(carts => {
            sum = sum + carts.price;
        });
        setTotal(sum);
    };
       useEffect(() => {
        totalPrice();
    }, [cart]);

  const RemoveItem=(id)=>{
    setcart(prev => prev.filter((cartproduct) => cartproduct.id != id));
  }
  

  return (
    <div>
      <Navbar/>
      <div className="container mt-4">
      <h2>Cart Total:{total}</h2>
        <div className="row">
          {cart.map((item, index) => (
            <div className="col-md-4 mb-3" key={index}>
              <div className="card h-100">
                
                <img 
                  src={item.thumbnail} 
                  className="card-img-top" 
                  alt={item.title} 
                  style={{ height: "150px", objectFit: "cover" }} 
                />
                <div className="card-body" key={index}>
                  <h5 className="card-title">{item.title}</h5>
                  <p className="fw-bold">₹{item.price}</p>
                   <button className='btn btn-danger' onClick={()=>{RemoveItem(item.id)}}>Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
    </div>
  )
}
