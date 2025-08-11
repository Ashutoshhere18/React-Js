import React,{useState} from 'react'
import './TextUtils.css'
export default function TextUtils() {
const[Text,SetText]=useState("");
const[Characters,SetCharacters]=useState(0);
const[Words,SetWords]=useState(0);

const HandlerText=(e)=> SetText(e.target.value);
const HandlerCharacterCount=()=>{
    SetCharacters(Text.length);
}
const HandlerWordsCount=()=>{
 const words=Text.split(" ");
 SetWords(words.length);
}




  return (
    <div>
      <input type="text" placeholder='Enter Text.....' onChange={HandlerText} />
        <p>{Text}</p>
        <h2>Total Characters:{Characters}</h2>
        <h2>Total Words:{Words}</h2>
        <button onClick={()=>{
            HandlerCharacterCount();
            HandlerWordsCount();
        }}> Count Characters & Words </button>
    </div>
  )
}
