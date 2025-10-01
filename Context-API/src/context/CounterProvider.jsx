import React, { useState } from 'react'

import {createContext} from 'react'

export const CounterContext= createContext();

export default function CounterProvider({children}) {
    const[count,setCount]=useState(0);

    const increment=()=>{
        setCount(prev=>prev+1);
    }
  return <CounterContext.Provider value={{count,increment}}>
    {children}
  </CounterContext.Provider>
}
