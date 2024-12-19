import React from 'react'
import { useState } from 'react'
import AddNote from '../../components/addNote/AddNote.jsx';
import NoteCard from '../../components/noteCard/NoteCard.jsx';
import GroupButton from '../../components/groupButton/GroupButton.jsx';
import { useSelector } from 'react-redux';

function Home() {
    const [isAddNoteVisible, setIsAddNoteVisible] = useState(false);
    const notes = useSelector((state) => state.notes.notes);

    const handleAddNoteVisibility = () => {
        setIsAddNoteVisible(!isAddNoteVisible);
    }

    console.log(notes);

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

            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center"
            >
                {notes?.length > 0 &&
                    notes.map(({ id, title, description, dateTime, category }) => (

                        category !== 'archived' && category !== 'bin' &&
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

        </main>
    )
}

export default Home