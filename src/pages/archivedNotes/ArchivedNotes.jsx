import React from "react";
import { useDispatch, useSelector } from "react-redux";
import NoteCard from '../../components/noteCard/NoteCard.jsx';


const ArchivedNotes = () => {
  const archivedNotes = useSelector(state => state.notes.notes).filter(({ noteState }) => noteState === 'in-archive');


  return (
    <main className='w-[75%] p-5 flex flex-col gap-5'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
        {
          archivedNotes?.length > 0 &&
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
        }
      </div>
      {
        archivedNotes?.length === 0 && (
          <h1 className="text-3xl font-bold"> You Dont have Archived Notes!</h1>
        )
      }
    </main>
  )
}

export default ArchivedNotes;
