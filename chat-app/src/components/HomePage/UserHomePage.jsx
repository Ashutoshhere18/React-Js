
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser ,getUser} from '../../slices/userSlices'
import {useNavigate} from 'react-router'
import '../HomePage/UserHomePage.css' 

export default function UserHomePage() {
    const navigate=useNavigate();
    let { users, currentUser } = useSelector(state => state.user);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUser());
        dispatch(fetchUser());
    }, [])
    
    return (
       
        <div className="app-wrapper"> 
            
            
            <div className="side-panel"> 
                
                
                <div className="header-info">
                    <h2 className="header-title">Welcome, <span className="neon-name">{currentUser.email}</span></h2>
                </div>

               
                <div className="thread-list-container">
                    
                    <ol className="thread-list"> 
                        {users.map((user, index) => {
                            if(user.email !== currentUser.email){
                                return(
                                 
                                    <li 
                                        key={index} 
                                        onClick={() => navigate("/chat", {state: user})} 
                                        className="thread-item"
                                    >
                                        
                                        <div className="thread-details">
                                            
                                            <div className="thread-name">{user.email}</div>
                                            
                                            <div className="thread-message">Tap to start chat...</div>
                                        </div>
                                        
                                        <span className="unread-badge">14</span> 
                                    </li>
                                )
                            }
                            return null;
                        })}
                    </ol>
                </div>
            </div>
            
           
            <div className="main-view">
                <p>Select a user to begin chatting!</p>
            </div>
        </div>
    )
}