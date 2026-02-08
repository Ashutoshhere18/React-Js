

import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import './ChatPage.css'
import { sendMessage, readMessages, deleteMessage, updateMessage } from '../../slices/ChatSlices'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../slices/userSlices'

export default function ChatPage() {
    const dispatch = useDispatch();
    const currentUser = JSON.parse(localStorage.getItem("user"));
    const { chats } = useSelector((state) => state.chats);

    const [message, setMessage] = useState("");
    const [editId, setEditId] = useState("");

    const location = useLocation();
    const receiver = location.state;

    // Use a variable to store the receiver's email for cleaner dispatch calls
    const receiverEmail = receiver ? receiver.email : null; 
    const senderEmail = currentUser ? currentUser.email : null;

    useEffect(() => {
        if (senderEmail && receiverEmail) {
            dispatch(getUser());
            dispatch(readMessages({ sender: senderEmail, receiver: receiverEmail }));
        }
    }, [dispatch, senderEmail, receiverEmail]);


    const handleSendOrUpdate = () => {
        if (!message.trim() || !senderEmail || !receiverEmail) return; // Prevent empty messages

        if (editId) {
            dispatch(updateMessage({
                sender: senderEmail,
                receiver: receiverEmail,
                chatId: editId,
                newMessage: message
            }));

            setEditId("");
            setMessage("");
        } else {
            dispatch(sendMessage({
                message: message,
                sender: senderEmail,
                receiver: receiverEmail
            }));
            setMessage("");
        }

        // Refresh the messages immediately after sending/updating
        dispatch(readMessages({ sender: senderEmail, receiver: receiverEmail }));
    };

    const handleDeleteMessage = (chat) => {
        // We already check if it's the sender's message by only showing the button
        // But a final check is good practice
        if (chat.sender !== senderEmail) { 
            alert("You can delete only your own messages!");
            return;
        }

        dispatch(deleteMessage({
            sender: senderEmail,
            receiver: receiverEmail,
            chatId: chat.chatId
        }));
        
        // 🔥 FIX: Refresh the message list immediately after deletion to update the UI
        setTimeout(() => {
            dispatch(readMessages({ sender: senderEmail, receiver: receiverEmail }));
        }, 50); 
    };


    const startEditing = (chat) => {
        // No need for alert check, the button is only shown for current user
        setEditId(chat.chatId);
        setMessage(chat.message);
    };

    return (
        <div className="chat-view">
            <div className="chat-page">
                <h3>User: {receiverEmail}</h3>

                {/* Message display area - Consider adding an overflow-y: scroll container */}
                <div className="message-list-container"> 
                    {chats.map((chat, i) => {
                        const isSender = chat.sender === senderEmail;
                        const position = isSender ? "message-end" : "message-start";

                        return (
                            <div
                                key={i}
                                className={`message-div ${position}`}
                                // ❌ Removed onClick and onDoubleClick to use explicit buttons
                            >
                                {/* New wrapper for message + actions */}
                                <div className="message-bubble-wrapper">
                                    <span className="message-box">{chat.message}</span>
                                    
                                    {/* 🛑 Action Buttons (only for sender's messages) 🛑 */}
                                    {isSender && (
                                        <div className="message-actions">
                                            {/* Edit Button */}
                                            <button 
                                                className="action-btn edit-btn" 
                                                onClick={(e) => { e.stopPropagation(); startEditing(chat); }}
                                                title="Edit Message"
                                            >
                                                ✏️
                                            </button>
                                            {/* Delete Button */}
                                            <button 
                                                className="action-btn delete-btn" 
                                                onClick={(e) => { e.stopPropagation(); handleDeleteMessage(chat); }}
                                                title="Delete Message"
                                            >
                                                🗑️
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
                {/* End of message list container */}

                <div className="input-area">
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={(e) => { if (e.key === 'Enter') handleSendOrUpdate(); }} // Added Enter key support
                    />

                    <button onClick={handleSendOrUpdate}>
                        {editId ? "Update" : "Send"}
                    </button>
                </div>
            </div>
        </div>
    );
}