export const loadNotesFromLocalStorage = () => {
  const notesData = localStorage.getItem("notes");
  return notesData ? JSON.parse(notesData) : { notes: [], pinnedNotes: [] };
};

export const saveNotesToLocalStorage = (state) => {
  localStorage.setItem(
    "notes",
    JSON.stringify({
      notes: state.notes,
      pinnedNotes: state.pinnedNotes,
    })
  );
};

// Simulate network delay with a Promise
export const fetchNotesFromLocalStorage = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(loadNotesFromLocalStorage());
    }, 1000); // Simulating 1 second delay
  });
};
