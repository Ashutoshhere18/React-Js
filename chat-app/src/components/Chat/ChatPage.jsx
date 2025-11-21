import React, { useEffect } from 'react'
import {useLocation} from 'react-router'
import {useDispatch,useSelector} from 'react-redux'
import {sendMessege} from '../../slices/ChatSlices'
import {getUser} from '../../slices/userSlices'

import './ChatPage.css'
export default function ChatPage() {
  useEffect(()=>{
    dispatch(getUser())
  },[])
  const currentUser=useSelector(state=>state.user)
    const location=useLocation();
    const receiver=location.state;
    const dispatch=useDispatch();

    const handleSendMessege=()=>{
      dispatch(sendMessege({sender:currentUser.email,receiver:receiver.email}))
    }
  return (
    <div className='chat-box'>
    <h3>User:{receiver.email}</h3>
      <div className='chat-view'></div>
      <div className='input-box'>
        <input type="text" className='input' />
        <button className='button' onClick={handleSendMessege}>Send</button>
      </div>
    </div>
  )
}
