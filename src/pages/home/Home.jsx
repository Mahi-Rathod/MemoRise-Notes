import React, { useState } from 'react'
import AddNote from '../../components/addNote/AddNote.jsx';
import NoteCard from '../../components/noteCard/NoteCard.jsx';
import GroupButton from '../../components/groupButton/GroupButton.jsx';

import { useSelector } from 'react-redux';

function Home() {
    const [isAddNoteVisible, setIsAddNoteVisible] = useState(false);
    const notes = useSelector((state) => state.notes.notes).filter(({ noteState })=> noteState === 'active');
    const pinnedNotes = useSelector((state) => state.notes.pinnedNotes);

    const handleAddNoteVisibility = () => {
        setIsAddNoteVisible(!isAddNoteVisible);
    }

    return (
        <main className='w-[75%] p-5 flex flex-col gap-5'>
            {/* add notes */}
            <GroupButton
                handleOnClick={handleAddNoteVisibility}
                isVisible={isAddNoteVisible}
                buttonIcon='add_notes'
                buttonTooltipText='Add new note!'
                isSpinnerVisible={true}
                border='border-2'
            />

            <AddNote
                isAddNoteVisible={isAddNoteVisible}
                handleAddNoteVisibility={handleAddNoteVisibility}
            />

            {
                pinnedNotes?.length > 0 && (
                    <h1 className='text-2xl font-bold'> Pinned Notes</h1>
                )
            }
            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center"
            >
                {pinnedNotes?.length > 0 &&
                    pinnedNotes.map(({ id, title, description, dateTime, category, noteState }) => (

                        noteState !== 'in-archive' && noteState !== 'in-bin' &&
                        <NoteCard
                            key={id}
                            id={id}
                            title={title}
                            description={description}
                            dateTime={dateTime}
                            category={category}
                        />
                    ))
                }
            </div>


            {
                pinnedNotes?.length > 0 && notes?.length > 0 && (
                    <>
                        <hr />
                        <h1 className='text-2xl font-bold'> Other Notes</h1>
                    </>
                )
            }
            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center"
            >
                {notes?.length > 0 &&
                    notes.map(({ id, title, description, dateTime, category, noteState }) => (

                        noteState !== 'in-archive' && noteState !== 'in-bin' &&
                        <NoteCard
                            key={id}
                            id={id}
                            title={title}
                            description={description}
                            dateTime={dateTime}
                            category={category}
                        />
                    ))}
            </div>
            {
                notes?.length === 0 && (
                    <h1 className="text-3xl font-bold w-1/4"> You Dont have any notes! <hr className='mt-2'/> Start adding notes</h1>
                )
            }
        </main>
    )
}

export default Home