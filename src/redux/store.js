import { configureStore } from '@reduxjs/toolkit';
import notesReducer from '../redux/slices/notesSlice.js';


const store = configureStore({
    reducer : {
        notes : notesReducer,
    }
})

export {
    store
}