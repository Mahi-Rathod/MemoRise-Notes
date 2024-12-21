import React from "react";
import { useSelector } from "react-redux";
import NoteCard from '../../components/noteCard/NoteCard.jsx';
import EmptyPage from "../../components/emptyPage/EmptyPage.jsx";

const ArchivedNotes = () => {
  const archivedNotes = useSelector(state => state.notes.notes).filter(({ noteState }) => noteState === 'in-archive');

  return (
    <main className='w-full p-5 flex flex-col gap-5 min-h-[100vh]'>
      {/* Archived Notes Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
        {
          archivedNotes?.length > 0 ? (
            archivedNotes.map(({ id, title, description, dateTime, category, noteState }) => (
              <NoteCard
                key={id}
                id={id}
                title={title}
                description={description}
                dateTime={dateTime}
                category={category}
                noteState={noteState}
              />
            ))
          ) : (
            <div className="flex flex-col items-center justify-center w-full text-center">
              <h1 className="text-3xl font-bold">You don't have Archived Notes!</h1>
              <EmptyPage />
            </div>
          )
        }
      </div>
    </main>
  );
}

export default ArchivedNotes;
