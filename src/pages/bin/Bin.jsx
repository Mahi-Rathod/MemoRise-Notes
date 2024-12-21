import React, { useState } from 'react'
import NoteCard from '../../components/noteCard/NoteCard';
import { useDispatch, useSelector } from 'react-redux'
import GroupButton from '../../components/groupButton/GroupButton';
import WarningBox from '../../components/warningBox/WarningBox';
import { clearBin } from '../../redux/slices/notesSlice.js';
import EmptyPage from '../../components/emptyPage/EmptyPage.jsx';

function Bin() {
  const trashedNotes = useSelector(state => state.notes.notes).filter(({ noteState }) => noteState === 'in-bin');
  const dispatch = useDispatch();

  const [isWarningModalOpen, setIsWarningModalOpen] = useState(false);
  const handleWarningModal = () => {
    setIsWarningModalOpen(!isWarningModalOpen);
  }

  const handleClearBin = () => {
    dispatch(clearBin());
    setIsWarningModalOpen(!isWarningModalOpen);
  }

  return (
    <main className='w-full p-5 flex flex-col gap-5'>
      {/* Group Button for Clearing Bin */}
      {trashedNotes.length > 0 && (
        <GroupButton
          isVisible={true}  // Shows only if trashedNotes exist
          handleOnClick={handleWarningModal}
          buttonIcon='folder_delete'
          buttonTooltipText="Clear Bin"
          border='border-2'
          isSpinnerVisible={false}
          className="w-full sm:w-auto mx-auto"  // Adjust width for mobile and desktop
        />
      )}

      {/* Note Cards Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
        {trashedNotes.length > 0 ? (
          trashedNotes.map(({ id, title, description, dateTime, category, noteState }) => (
            <NoteCard
              key={id}
              id={id}
              title={title}
              description={description}
              dateTime={dateTime}
              category={category}
              noteState={noteState}
              className="w-full sm:w-[45%] lg:w-[30%]"  // Adjust card width for different screen sizes
            />
          ))
        ) : (
          <div className="text-center w-full">
            <h1 className="text-3xl font-bold">Bin is Empty!</h1>
            <EmptyPage />
          </div>
        )}
      </div>

      {/* Warning Modal */}
      {isWarningModalOpen && (
        <WarningBox
          handleOk={handleClearBin}
          handleCancel={handleWarningModal}
          mainText="Clear"
          warningMessage="Are you sure you want to clear all items in the bin?"
        />
      )}
    </main>
  )
}

export default Bin