import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    notes : [],
    pinnedNotes : []
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
                   note.noteState = 'in-archive'; 
                }
            })
        },
        unArchiveNote : (state, action) => {
            state.notes.forEach((note)=>{
                if(note.id === action.payload.id){
                    note.noteState = 'active';
                }
            })
        },
        addToBin : (state, action) =>{
            state.notes.forEach((note)=>{
                if(note.id === action.payload.id){
                    note.noteState = 'in-bin';
                }
            })
        },
        restoreFromBin : (state, action) => {
            state.notes.forEach((note)=>{
                if(note.id === action.payload.id){
                    note.noteState = 'active';
                }
            })
        },
        clearBin: (state) =>{
            state.notes = state.notes.filter(({ noteState })=> noteState !== 'in-bin');
        },
        pinNote : (state, action) => {
            state.pinnedNotes.push(state.notes.find(({id})=> id === action.payload.id));
            state.notes = state.notes.filter(({id})=> id !== action.payload.id);
        },
        unPinNote : (state, action) => {
            state.notes.push(state.pinnedNotes.find(({id})=> id === action.payload.id));
            state.pinnedNotes = state.pinnedNotes.filter(({id})=> id !== action.payload.id);
        }
    }
});


export const { addNote, deleteNote, archiveNote, unArchiveNote, addToBin, restoreFromBin, pinNote, unPinNote, clearBin} = notesSlice.actions;

export default notesSlice.reducer;