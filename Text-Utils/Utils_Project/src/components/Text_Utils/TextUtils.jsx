import React,{useState} from 'react'
import './TextUtils.css'
export default function TextUtils() {
const[Text,SetText]=useState("");
const[Characters,SetCharacters]=useState(0);
const[Words,SetWords]=useState(0);
const[UpperCase,SetUpperCase]=useState(0);
const[LowerCase,SetLowerCase]=useState(0);
const[TimeTaken,SetTime]=useState(0);

const HandlerText=(e)=> SetText(e.target.value);
const HandlerCharacterCount=()=>{
    SetCharacters(Text.length);
}
const HandlerWordsCount=()=>{
 const words=Text.split(" ");
 SetWords(words.length);
}

const HandlerUpperCount=()=>{
   const count = (Text.match(/[A-Z]/g) || []).length;
   SetUpperCase(count);
}
const HandlerLowerCount=()=>{
   const count = (Text.match(/[a-z]/g) || []).length;
   SetLowerCase(count);
}
const TimeHandler =()=>{ 
   const time= Words / 200;
    SetTime(time.toFixed(2));
  };

  return (
    <div className='text-utils-container'>
      <h1 className="page-title">📊 Text Analysis Tool</h1>
        <p className="page-subtitle">
        Enter your text below and click <strong>Analyze Text</strong> to get detailed statistics including total characters, words, uppercase, lowercase letters, and estimated reading time.
      </p>

      <textarea type="text" placeholder='Enter Text.....'  value={Text} onChange={HandlerText}></textarea>
        <p>{Text}</p>
         <button className='analyze-btn' onClick={()=>{
              HandlerCharacterCount();
          HandlerWordsCount();
          HandlerUpperCount();
          HandlerLowerCount();
          TimeHandler();
        }}> Analyse Text </button>
             <div className="results">
        <h2>🔍 Analysis Results</h2>
        <p><strong>Total Characters:</strong> {Characters}</p>
        <p><strong>Total Words:</strong> {Words}</p>
        <p><strong>Total Uppercase Letters:</strong> {UpperCase}</p>
        <p><strong>Total Lowercase Letters:</strong> {LowerCase}</p>
        <p><strong>Estimated Reading Time:</strong> {TimeTaken} minutes</p>
      </div>
        
    </div>
  )
}
