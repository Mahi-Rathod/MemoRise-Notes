import React, { useState } from 'react'
import NoteCard from '../../components/noteCard/NoteCard';
import { useDispatch, useSelector } from 'react-redux'
import GroupButton from '../../components/groupButton/GroupButton';
import WarningBox from '../../components/warningBox/WarningBox';
import { clearBin } from '../../redux/slices/notesSlice.js';
function Bin() {
  const trashedNotes = useSelector(state => state.notes.notes).filter(({ noteState }) => noteState === 'in-bin');
  const [isWarningModalOpen, setIsWarningModalOpen] = useState(false);
  const dispatch = useDispatch();
  const handleWarningModal = () => {
    setIsWarningModalOpen(!isWarningModalOpen);
  }

  const handleClearBin = () => {
    dispatch(clearBin());
    setIsWarningModalOpen(!isWarningModalOpen);
  }
  return (
    <main className='w-[75%] p-5 flex flex-col gap-5'>
      {
        trashedNotes?.length > 1 &&
        <GroupButton
          isVisible={false}
          handleOnClick={handleWarningModal}
          buttonIcon='folder_delete'
          buttonTooltipText="Clear Bin"
          border='border-2'
          isSpinnerVisible={true}
        />
      }
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center align-items-center'>
        {
          trashedNotes?.length > 0 &&
          trashedNotes.map(({ id, title, description, dateTime, category, noteState }) => (
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
        trashedNotes?.length === 0 && (
          <h1 className="text-3xl font-bold"> You Dont have Trashed Notes!</h1>
        )
      }

      {
        isWarningModalOpen && <WarningBox
          handleOk={handleClearBin}
          handleCancel={handleWarningModal}
          mainText="Clear"
          warningMessage='Are you Want to Clear All bin?'
        />
      }
    </main>

  )
}

export default Bin