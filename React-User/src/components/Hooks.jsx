import {useState} from 'react';
export default function Counter() {
    const [count,Setcount]= useState(0);
    const add=()=>{
        let temp= count;
        temp++;
        Setcount(temp);
    }

    const sub=()=>{
        let temp=count;
        temp--;
        Setcount(temp);
    }

    const mul=()=>{
      let temp=count;
      temp*=2;
      Setcount(temp);
    }
    const Div=()=>{
      let temp=count;
      temp/=2;
      Setcount(temp);
    }
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={add}>++</button>
      <button onClick={sub}>--</button>
      <button onClick={mul}> 2 x</button>
      <button onClick={Div}>/ 2</button>
    </div>
  )
}
