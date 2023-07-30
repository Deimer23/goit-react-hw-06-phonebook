import Notiflix from "notiflix";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {contacts:[]}

const contactSlice = createSlice({
    name:'contact',
    initialState,
    reducers:{

        addContact(state, action){
            const newContactId = action.payload.id;            
            const existingContact = state.contacts.find(contact=> contact.id === newContactId);
            if(existingContact){
                Notiflix.Notify.failure(action.payload.id + ' is already in contacts');
            }else{                
                state.contacts.push(action.payload);  
                console.log(state.contacts[0])             
            }
        },

        addStorage(state, action){
            state.contacts = [...action.payload];
        },

        removeContact(state, action){
            state.contacts = state.contacts.filter(contact=>contact.id !== action.payload)
        }
    }
})

export const {addContact, removeContact, addStorage} = contactSlice.actions;
export const contactReducer = contactSlice.reducer;