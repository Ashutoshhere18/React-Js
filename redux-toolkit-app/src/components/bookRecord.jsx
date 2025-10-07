import React, { useRef } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {AddBook,RemoveBook} from '../slices/BooksSlice'
export default function Books() {
  const nameRef=useRef();
  const priceRef=useRef();
  const dispatch=useDispatch();
  const handleAddBook=()=>{

    const names=nameRef.current.value;
  const price=priceRef.current.value
  
    dispatch(AddBook({names,price}))
    nameRef.current.value="";
    priceRef.current.value="";
  }

     const{books}=useSelector((state)=>state.Book);
  return (
    <div>
      <div>
         <input type="text" ref={nameRef} placeholder='Enter Book Name'/>
            <input type="text" ref={priceRef} placeholder='enter price' />
            <button onClick={handleAddBook}>Add Book</button>
      </div>
      {
        books.map((book,index)=><div key={index}>
         <div> <p>{book.names}-{book.price}</p>
          <button onClick={()=>{
            dispatch(RemoveBook(index))
          }}>-</button></div>
        </div>)
      }
    </div>
  )
}
