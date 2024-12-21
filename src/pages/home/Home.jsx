import React, { useState } from 'react';
import AddNote from '../../components/addNote/AddNote.jsx';
import NoteCard from '../../components/noteCard/NoteCard.jsx';
import GroupButton from '../../components/groupButton/GroupButton.jsx';
import EmptyPage from "../../components/emptyPage/EmptyPage.jsx"

import { useSelector } from 'react-redux';

function Home() {
  const [isAddNoteVisible, setIsAddNoteVisible] = useState(false);
  const notes = useSelector((state) => state.notes.notes).filter(({ noteState }) => noteState === 'active');
  const pinnedNotes = useSelector((state) => state.notes.pinnedNotes).filter(({ noteState }) => noteState === 'active');

  const handleAddNoteVisibility = () => {
    setIsAddNoteVisible(!isAddNoteVisible);
  };

  return (
    <main className='w-full h-full p-5 flex flex-col gap-5'>
      {/* Add Note Button */}
      <GroupButton
        handleOnClick={handleAddNoteVisibility}
        isVisible={isAddNoteVisible}
        buttonIcon='add_notes'
        buttonTooltipText='Add new note!'
        isSpinnerVisible={true}
        border='border-2'
        className="fixed bottom-10 right-10 z-10 sm:right-8 sm:bottom-8" // Positioned as a floating button
      />

      {/* Add Note Modal/Component */}
      <AddNote
        isAddNoteVisible={isAddNoteVisible}
        handleAddNoteVisibility={handleAddNoteVisibility}
      />

      {/* Pinned Notes Section */}
      {pinnedNotes?.length > 0 && <h1 className='text-2xl font-bold'>Pinned Notes</h1>}

      {/* Pinned Notes Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
        {pinnedNotes?.length > 0 &&
          pinnedNotes.map(({ id, title, description, dateTime, category, noteState }) => (
            noteState !== 'in-archive' && noteState !== 'in-bin' && (
              <NoteCard
                key={id}
                id={id}
                title={title}
                description={description}
                dateTime={dateTime}
                category={category}
              />
            )
          ))}
      </div>

      {/* Other Notes Section */}
      {pinnedNotes?.length > 0 && notes?.length > 0 && (
        <>
          <hr />
          <h1 className='text-2xl font-bold'>Other Notes</h1>
        </>
      )}

      {/* Other Notes Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
        {notes?.length > 0 &&
          notes.map(({ id, title, description, dateTime, category, noteState }) => (
            noteState !== 'in-archive' && noteState !== 'in-bin' && (
              <NoteCard
                key={id}
                id={id}
                title={title}
                description={description}
                dateTime={dateTime}
                category={category}
              />
            )
          ))}
      </div>

      {/* Empty State */}
      {notes?.length === 0 && pinnedNotes?.length === 0 && <EmptyPage />}
    </main>
  );
}

export default Home;
