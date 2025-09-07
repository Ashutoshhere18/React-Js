 import React, { useEffect, useState } from "react";

export default function CoinsTable() {
  const [coins, setCoins] = useState([]); 


 const fetchCoins=async()=>{
   fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=12&page=1&sparkline=false').then((res)=>res.json()).then((coinData)=>setCoins(coinData))
 }

  useEffect(() => {
    fetchCoins();
  }, []);

  if (coins.length === 0)
    return <p className="text-center my-5">Loading coins...</p>;

  return (
    <div className="container my-5">
      <h3 className="text-center mb-4">Top Cryptocurrencies</h3>
      <div className="row">
        {coins.map((coin) => (
          <div className="col-md-3 col-sm-6 mb-4" key={coin.id}>
            <div className="card shadow-sm border-0 text-center p-3 h-100">
              <img
                src={coin.image}
                alt={coin.name}
                style={{ width: "50px", height: "50px", margin: "0 auto" }}
              />
              <h5 className="mt-2">{coin.name}</h5>
              <p className="text-muted">{coin.symbol.toUpperCase()}</p>
              <h6 className="fw-bold">${coin.current_price.toLocaleString()}</h6>
              <p
                className={
                  coin.price_change_percentage_24h >= 0
                    ? "text-success mb-0"
                    : "text-danger mb-0"
                }
              >
                {coin.price_change_percentage_24h.toFixed(2)}%
              </p>
              <small className="text-muted">
                MCap: ${coin.market_cap.toLocaleString()}
              </small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
