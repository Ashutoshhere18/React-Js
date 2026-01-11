
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../firebase';
import { updateDoc, doc, setDoc, getDocs, collection, deleteDoc } from 'firebase/firestore'


const docIdGenerator = (sender, receiver) => {
    const user = [sender, receiver];
    user.sort();
    const docId = user[0] + "_" + user[1];
    return docId;
}

export const readMessages = createAsyncThunk("chat/read", async ({ sender, receiver }) => {
    const docId = docIdGenerator(sender, receiver);
    const snapshots = await getDocs(collection(db, "chatroom", docId, "chats"))
    const chatList = snapshots.docs.map((snap) => snap.data()).filter(data => data); 
    return chatList;
});

export const sendMessage = createAsyncThunk("chat/send", async ({ message, sender, receiver }) => {
    const docId = docIdGenerator(sender, receiver);
    const chatId = Date.now().toString();
    await setDoc(doc(db, "chatroom", docId, "chats", chatId), {
        chatId: chatId,
        sender: sender,
        message: message,
    });
    return { message, chatId };
});

export const deleteMessage = createAsyncThunk("chat/delete", async ({ sender, receiver, chatId }) => {
    const docId = docIdGenerator(sender, receiver);
    await deleteDoc(doc(db, "chatroom", docId, "chats", chatId));
    return { chatId };
});

export const updateMessage = createAsyncThunk(
    "chat/update",
    async ({ sender, receiver, chatId, newMessage }) => {
        const docId = docIdGenerator(sender, receiver);

        await updateDoc(
            doc(db, "chatroom", docId, "chats", chatId),
            { message: newMessage }
        );

        return { newMessage, chatId };
    }
);


const initialstate = {
    chats: [],
    isLoading: false,
    error: null,
}

const chatSlice = createSlice({
    name: "chats",
    initialState: initialstate,
    extraReducers: (builder) => {
        builder
            // --- SEND MESSAGE ---
            .addCase(sendMessage.pending, (state) => { state.isLoading = true; })
            .addCase(sendMessage.fulfilled, (state) => { state.isLoading = false; })
            .addCase(sendMessage.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || "Failed to send message";
            })
            
            // --- READ MESSAGES ---
            .addCase(readMessages.pending, (state) => { state.isLoading = true; })
            .addCase(readMessages.fulfilled, (state, action) => {
                state.chats = action.payload
                state.isLoading = false;
               
            })
            .addCase(readMessages.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || "chat cant fetched !!";
                console.log(state.error)
            })

            // --- DELETE MESSAGE ---
            .addCase(deleteMessage.pending, (state) => { state.isLoading = true; })
            .addCase(deleteMessage.fulfilled, (state) => { 
                state.isLoading = false;
            })
            .addCase(deleteMessage.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || "Failed to delete message";
                console.error("Delete failed:", state.error);
            })

            // --- UPDATE MESSAGE ---
            .addCase(updateMessage.fulfilled, (state, action) => {
                const { chatId, newMessage } = action.payload;
                const index = state.chats.findIndex(c => c.chatId === chatId);

                if (index !== -1) {
                    state.chats[index].message = newMessage;
                }
            });
    }
})

export default chatSlice.reducer;