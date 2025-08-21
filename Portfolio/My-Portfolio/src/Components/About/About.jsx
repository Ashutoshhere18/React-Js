import React from 'react'
import "./About.css"
export default function About(props) {

    const ReposList=props.Data;

  return (
    <div className="Maindiv">
      {
        ReposList.map((repo)=>{
            return( 
                  <div className="repo">
             <p className='Name'>{repo.name}</p>
             <button><a href={repo.html_url}>Link</a></button>
           </div>
           )
        
        })
      }
    </div>
  )
}
