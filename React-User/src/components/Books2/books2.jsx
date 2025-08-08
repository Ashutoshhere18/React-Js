import {useState} from 'react';
import './books2.css';
function Books2(){
  const[BooksList,SetBooks]=useState([{
    title:"To Kill a Mockingbird",
    Author:"Harper Lee",
  },])
     
    const[title,SetTitle]=useState("");
    const[Author,SetAuthor]=useState("");
    const[index,Setindex]=useState(0);
   
    const AddBook=()=>{
         if(!title.trim() || !Author.trim()){
           alert("Please Enter Both the details!");
           return;
         }
          const newBook={
            title:title,
            Author:Author
         };
         SetBooks([...BooksList,newBook]);
         SetTitle("");
         SetAuthor("");
       
    }

   const DelBook=(i)=>{
    const temp=[...BooksList];
    temp.splice(i,1);
    SetBooks(temp);
   }

  const EditBook=(i)=>{
      Setindex(i);
      SetTitle(BooksList[i].title);
      SetAuthor(BooksList[i].Author);
  }
    return(
        <div className='BooksLibrary'>
          <input type="text" placeholder='Enter Book Name...' value={title} onChange={(e)=>SetTitle(e.target.value)}/>
          <input type="text" placeholder='Enter Author Name...' value={Author} onChange={(e)=>SetAuthor(e.target.value)} />
          <div className='ButtonGroup'>
             <button className="btn AddBtn" onClick={AddBook}>Add Book</button>
          <button className='btn UpdateBtn' onClick={()=>{
            const temp=[...BooksList];
            temp[index].title=title;
            temp[index].Author=Author;
            SetBooks(temp);
            SetTitle("");
            SetAuthor("");
          }}>Update Book</button>
          </div>
          
          
          
          {
            BooksList.map((Book,i)=>{
            return(
<div className='BookForm'>
                   <p>
                    {Book.title}-{Book.Author}
                     
                   <div className='BookActions'>
                     <button className='btn DelBtn' onClick={()=>DelBook(i)}>Delete</button>
                    <button className='btn EditBtn' onClick={()=>EditBook(i)}>Edit</button>
                   </div>
                     
                </p>
             </div>
            ) 
            })
          }
          

        </div>

        
    )

}
  
 


export default Books2;