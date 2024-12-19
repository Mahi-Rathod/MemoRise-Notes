import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    notes : []
};


const notesSlice = createSlice({
    name : 'notes',
    initialState,
    reducers : {
        addNote : (state, action) => {
            state.notes.push(action.payload);
        },
        deleteNote: (state, action) => {
            state.notes = state.notes.filter(({id})=> id !== action.payload.id);
        },
        archiveNote : (state, action) => {
            state.notes.forEach((note)=>{
                if(note.id === action.payload.id){
                   note.category = 'archived'; 
                }
            })
        },
        unArchiveNote : (state, action) => {
            state.notes.forEach((note)=>{
                if(note.id === action.payload.id){
                    note.category = 'general';
                }
            })
        },
        addToBin : (state, action) =>{
            state.notes.forEach((note)=>{
                if(note.id === action.payload.id){
                    note.category = 'bin'
                }
            })
        }
    }
});


export const { addNote, deleteNote, archiveNote, unArchiveNote, addToBin} = notesSlice.actions;

export default notesSlice.reducer;