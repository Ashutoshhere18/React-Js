
import React, { useEffect, useState } from 'react'

export default function Albums() {
   const[News,SetNews]=useState([])
    
   const FetchApi=()=>{
    fetch("https://newsapi.org/v2/everything?q=apple&from=2025-09-02&to=2025-09-02&sortBy=popularity&apiKey=6fea80e79c9c4e8a99098086cf432f42").then(res=>res.json()).then(data=>SetNews(data.articles));
   }

  useEffect(()=>{FetchApi()},[]);
    return (
  <div className="albums py ">
    <div className='container'>
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 '>
        
      {
        News.map((album,index)=>{
          return(
            <div className="col" key={index}>
  <div className="card shadow-sm">
   <img src={album.urlToImage} alt="" />
    <div className="card-body">
      <p className="card-text">
      {album.description}
      </p>
      <div className="d-flex justify-content-between align-items-center">
        <div className="btn-group">
          <button type="button" className="btn btn-sm btn-outline-secondary">
            <a href={album.url} className=''> Learn More</a>
          </button>
          <button type="button" className="btn btn-sm btn-outline-secondary">
            Edit
          </button>
        </div>
        <small className="text-muted">{album.publishedAt}</small>
      </div>
    </div>
  </div>
</div>
           
          )
        })
      }
      </div>
    </div>
  </div>
  )
}


// password: zVw!.28#ieK5LHv
// key : 6fea80e79c9c4e8a99098086cf432f42