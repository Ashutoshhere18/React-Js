import React, { useState } from 'react'

import {createContext} from 'react'

export const CounterContext= createContext();

export default function CounterProvider({children}) {
    const[count,setCount]=useState(0);
    const[todos,setTodos]=useState([{title:"Walk regularly",isCompleted:false}])

    const increment=()=>{
        setCount(prev=>prev+1);
    }
    const addTodos=(title)=>{
        setTodos((prev)=>{
            [...prev,{id:Date.now(),title,isCompleted:false}]
        })
    }
    const removeTodos=(id)=>{
   setTodos((prev)=>prev.filter((todo)=>todo.id!=id))
    }
  return <CounterContext.Provider value={{count,increment,todos,addTodos,removeTodos}}>
    {children}
  </CounterContext.Provider>
}
