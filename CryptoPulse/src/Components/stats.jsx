import React, { useEffect, useState } from 'react'

export default function Stats() {
  const [Coin, SetCoin] = useState(null);

  const FetchApi = async () => {
    const res = await fetch('https://api.coingecko.com/api/v3/global');
    const datas = await res.json();
    SetCoin(datas.data);
  };

  useEffect(() => {
    FetchApi(); // ✅ call the function here
  }, []);

  if (!Coin) return <p className="text-center my-5">Loading stats...</p>; // ✅ keep this

  return (
    <div className="container my-5">
      <div className="row text-center">
        <div className="col-md-3 col-sm-6 mb-3">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h4 className="fw-bold">
                ${Coin.total_market_cap.usd.toLocaleString()}
              </h4>
              <p className="text-muted">Market Cap</p>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 mb-3">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h4 className="fw-bold">
                ${Coin.total_volume.usd.toLocaleString()}
              </h4>
              <p className="text-muted">24h Volume</p>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 mb-3">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h4 className="fw-bold">
                {Coin.market_cap_percentage.btc.toFixed(1)}%
              </h4>
              <p className="text-muted">BTC Dominance</p>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 mb-3">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h4 className="fw-bold">
                {Coin.active_cryptocurrencies.toLocaleString()}
              </h4>
              <p className="text-muted">Active Coins</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
