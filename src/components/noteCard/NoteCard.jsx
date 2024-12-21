import { useState } from 'react';
import GroupButton from '../groupButton/GroupButton.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { archiveNote, unArchiveNote, addToBin, restoreFromBin, deleteNote, pinNote, unPinNote } from '../../redux/slices/notesSlice.js';
import WarningBox from '../warningBox/WarningBox.jsx';
import { toast } from 'react-toastify';

function NoteCard({
    id,
    title,
    dateTime,
    category,
    description,
    noteState = 'active',
}) {

    const [isWarningModalOpen, setIsWarningModalOpen] = useState(false);

    const dispatch = useDispatch();

    const pinnedNotes = useSelector(state => state.notes.pinnedNotes);
    const isPinned = pinnedNotes.some(note => note.id === id);

    const truncateDescription = (text, maxWords) => {
        const words = text.split(" ");
        if (words.length > maxWords) {
            return words.slice(0, maxWords).join(" ") + "...";
        }
        return text;
    };

    const handleWarningModal = () => {
        setIsWarningModalOpen(!isWarningModalOpen);
    }

    const handlePinNote = () => {
        if (!isPinned) {
            dispatch(pinNote({ id }));
        }
        else {
            dispatch(unPinNote({ id }));
        }
    }

    const handleBin = () => {
        if (isPinned) handlePinNote();
        if (noteState === 'active' || noteState === 'in-archive'){
            toast.success('Note is added in bin!');
            dispatch(addToBin({ id, isPinned }));
        }
        else{
            toast.success('Note is restored from bin!');
            dispatch(restoreFromBin({ id, isPinned }));
        }        
    }

    const handleArchive = () => {
        if (isPinned) handlePinNote();
        if (noteState === 'in-archive') {
            toast.success('Your Note is Un-Archived');
            dispatch(unArchiveNote({ id, isPinned }));
        }
        else {
            toast.success('Your Note is Archived');
            dispatch(archiveNote({ id, isPinned }));
        }

    }

    const handleDelete = () => {
        toast.success('Note Deleted Permanently!');
        dispatch(deleteNote({ id }));
    }


    return (
        <div className={`${category === 'important' ? 'bg-[#fff3cd]' : 'bg-white'} shadow-md border-2 border-gray-500 rounded-md p-4 w-full max-w-md hover:shadow-gray-500`}>
            {/* First Row: Title and Keep Icon */}
            <div className={`flex justify-between items-center ${category === 'important' ? 'text-[#856404]' : 'text-black'}`}>
                <h2 className="text-lg font-semibold">{title}</h2>
                {
                    noteState === 'active' &&
                    <GroupButton
                        isVisible={false}
                        handleOnClick={handlePinNote}
                        buttonIcon={`${isPinned ? 'keep_off' : 'keep'}`}
                        buttonTooltipText={`${isPinned ? 'Unpin Note' : 'Pin Note'}`}
                        height='h-[2rem]'
                        width='w-[2rem]'
                    />
                }
                {
                    noteState === 'in-bin' &&
                    <GroupButton
                        isVisible={false}
                        handleOnClick={handleBin}
                        buttonIcon='restore_from_trash'
                        buttonTooltipText='Restore'
                        height='h-[2rem]'
                        width='w-[2rem]'
                        buttonColor={`${category === 'important' ? 'text-[#e63946]' : 'text-[#e63946]'}`}
                    />
                }
            </div>

            <hr />

            {/* Second Row: Description */}
            <div className="mt-2">
                <p className="text-gray-700">{truncateDescription(description, 10)}</p>
            </div>

            {/* Third Row: DateTime and Buttons */}
            <div className="mt-4 flex justify-between items-center space-x-4">

                <p className={`text-sm ${category === 'important' ? 'text-[#495057]' : 'text-gray-500'}`}>{dateTime}</p>

                <div className='flex gap-2'>
                    {
                        (noteState === 'active' || noteState === 'in-archive') && (
                            <GroupButton
                                isVisible={false}
                                handleOnClick={handleArchive}
                                buttonIcon={`${noteState === 'active' ? 'archive' : 'unarchive'}`}
                                buttonTooltipText={noteState === 'active' ? 'Archive Note!' : 'Unarchive Note!'}
                                height='h-[2rem]'
                                width='w-[2rem]'
                                buttonColor={`${category === 'important' ? 'text-[#007bff]' : 'text-[#007bff]'}`}
                            />
                        )
                    }

                    {
                        noteState !== 'in-bin' && (
                            <GroupButton
                                isVisible={false}
                                handleOnClick={handleBin}
                                buttonIcon='delete'
                                buttonTooltipText='Add note to bin'
                                height='h-[2rem]'
                                width='w-[2rem]'
                                buttonColor={`${category === 'important' ? 'text-[#e63946]' : 'text-[#e63946]'}`}
                            />
                        )
                    }

                    {
                        noteState === 'in-bin' && (
                            <GroupButton
                                isVisible={false}
                                handleOnClick={handleWarningModal}
                                buttonIcon='delete'
                                buttonTooltipText='Delete Permanently'
                                height='h-[2rem]'
                                width='w-[2rem]'
                                buttonColor={`${category === 'important' ? 'text-[#e63946]' : 'text-[#e63946]'}`}
                            />
                        )
                    }

                </div>
            </div>

            {
                isWarningModalOpen && <WarningBox
                    handleOk={handleDelete}
                    handleCancel={handleWarningModal}
                    mainText="Delete"
                    warningMessage='This will permanently delete note?'
                />
            }
        </div>
    )
}

export default NoteCard;