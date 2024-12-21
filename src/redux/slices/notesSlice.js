import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchNotesFromLocalStorage, saveNotesToLocalStorage } from "../../services/noteService";

const initialState = {
  notes: [],
  pinnedNotes: [],
};

export const fetchNotes = createAsyncThunk('notes/fetchNotes', async () =>{
    const data = await fetchNotesFromLocalStorage();
    return data;
})

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.notes.unshift(action.payload);
      saveNotesToLocalStorage(state);
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter(({ id }) => id !== action.payload.id);
      saveNotesToLocalStorage(state);
    },
    archiveNote: (state, action) => {
      state.notes.forEach((note) => {
        if (note.id === action.payload.id) {
          note.noteState = "in-archive";
        }
      });
      saveNotesToLocalStorage(state);
    },
    unArchiveNote: (state, action) => {
      state.notes.forEach((note) => {
        if (note.id === action.payload.id) {
          note.noteState = "active";
        }
      });
      saveNotesToLocalStorage(state);
    },
    addToBin: (state, action) => {
      state.notes.forEach((note) => {
        if (note.id === action.payload.id) {
          note.noteState = "in-bin";
        }
      });
      saveNotesToLocalStorage(state);
    },
    restoreFromBin: (state, action) => {
      state.notes.forEach((note) => {
        if (note.id === action.payload.id) {
          note.noteState = "active";
        }
      });
      saveNotesToLocalStorage(state);
    },
    clearBin: (state) => {
      state.notes = state.notes.filter(
        ({ noteState }) => noteState !== "in-bin"
      );
      saveNotesToLocalStorage(state);
    },
    pinNote: (state, action) => {
      state.pinnedNotes.push(
        state.notes.find(({ id }) => id === action.payload.id)
      );
      state.notes = state.notes.filter(({ id }) => id !== action.payload.id);
      saveNotesToLocalStorage(state);
    },
    unPinNote: (state, action) => {
      state.notes.push(
        state.pinnedNotes.find(({ id }) => id === action.payload.id)
      );
      state.pinnedNotes = state.pinnedNotes.filter(
        ({ id }) => id !== action.payload.id
      );
      saveNotesToLocalStorage(state);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNotes.fulfilled, (state, action) => {
        state.loading = false;
        state.notes = action.payload.notes;
        state.pinnedNotes = action.payload.pinnedNotes;
      })
      .addCase(fetchNotes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  addNote,
  deleteNote,
  archiveNote,
  unArchiveNote,
  addToBin,
  restoreFromBin,
  pinNote,
  unPinNote,
  clearBin,
} = notesSlice.actions;

export default notesSlice.reducer;
