import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contactList: [],
    search: '',
    onlyFavorite: false
}

const contactsReducers = createSlice({
    name: 'contacts',
    initialState: initialState,
    reducers: {
        addNewContact: (state, action) => {
            return {...state, contactList: [...state.contactList, action.payload]}
        },
        deleteContact: (state, action) => {
            return {...state, contactList: state.contactList.filter((item) => item.id !== action.payload)}
        },
        isFavoriteToggle: (state, action) => {
            state.contactList.map(item => item.id === action.payload ? item.isFavorite=!item.isFavorite : item)
        },
        searchContact: (state, action) => {
            state.search = action.payload
        },
        onlyFavoriteChange: (state) => {
            state.onlyFavorite = !state.onlyFavorite;
        } 
    }
})

export const addNewContact = contactsReducers.actions.addNewContact;

export const deleteContact = contactsReducers.actions.deleteContact;

export const isFavoriteToggle = contactsReducers.actions.isFavoriteToggle;

export const searchContact = contactsReducers.actions.searchContact;

export const onlyFavoriteChange = contactsReducers.actions.onlyFavoriteChange;

export const reducer = contactsReducers.reducer;