import React, { useContext } from 'react'
import {CounterContext} from '../context/CounterProvider'
export default function Todos() {
    const{todos,addTodos,removeTodos}=useContext(CounterContext)
 
  return(
    <div>
        <div>
            <input type="text" />
            <button  >Add Todos</button>
        </div>
       
       {
        todos.map((todo)=><div key={todo.id}>
            {todo.title}
            <button onClick={()=>removeTodos(todo.id)}>Remove Todos</button>
        </div>)
       }
    </div>
  )
}
