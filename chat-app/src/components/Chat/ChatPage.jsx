import React from 'react'
import {useLocation} from 'react-router-dom'
import './ChatPage.css'
export default function ChatPage() {
    const location=useLocation();
    const receiver=location.state;
  return (
    <div className='chat-box'>
    <h3>User:{receiver.email}</h3>
      <div className='chat-view'></div>
      <div className='input-box'>
        <input type="text" className='input' />
        <button className='button'>Send</button>
      </div>
    </div>
  )
}
