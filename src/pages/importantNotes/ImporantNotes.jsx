import React from 'react'
import { useSelector } from 'react-redux';
import NoteCard from '../../components/noteCard/NoteCard';

function ImporantNotes() {
  let importantNotes = useSelector(state => state.notes.notes).filter(({ category, noteState }) => (category === 'important' && noteState === 'active'));

  importantNotes = importantNotes.concat(useSelector(state => state.notes.pinnedNotes).filter(({ category, noteState }) => (category === 'important' && noteState === 'active'))).reverse();

  return (
    <main className='w-[75%] p-5 flex flex-col gap-5'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
        {
          importantNotes?.length > 0 &&
          importantNotes.map(({ id, title, description, dateTime, category, noteState }) => (
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
        importantNotes?.length === 0 && (
          <h1 className="text-3xl font-bold"> You Dont have Important Notes!</h1>
        )
      }
    </main>
  )
}

export default ImporantNotes