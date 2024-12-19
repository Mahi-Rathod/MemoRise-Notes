
import GroupButton from '../groupButton/GroupButton.jsx';
import { useDispatch } from 'react-redux';
import { archiveNote, addToBin } from '../../redux/slices/notesSlice.js';

function NoteCard({ id, title, description, dateTime, category }) {

    const dispatch = useDispatch();

    const truncateDescription = (text, maxWords) => {
        const words = text.split(" ");
        if (words.length > maxWords) {
            return words.slice(0, maxWords).join(" ") + "...";
        }
        return text;
    };

    const addToArchive = () => {
        dispatch(archiveNote({ id }))
    }

    const pinNote = () => {

    }

    const addNotesToBin = () =>{
        dispatch(addToBin({id}));
    }

    return (

        <div className={`${category === 'important' ? 'bg-[#fff3cd]' : 'bg-white'} shadow-md border-2 border-gray-500 rounded-md p-4 w-full max-w-md hover:shadow-gray-500`}>
            {/* First Row: Title and Keep Icon */}
            <div className={`flex justify-between items-center ${category === 'important' ? 'text-[#856404]' : 'text-black'}`}>
                <h2 className="text-lg font-semibold">{title}</h2>
                <GroupButton
                    isVisible={false}
                    handleOnClick={pinNote}
                    buttonIcon='keep'
                    buttonTooltipText='Pin Note'
                    height='h-[2rem]'
                    width='w-[2rem]'
                />
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
                    <GroupButton
                        isVisible={false}
                        handleOnClick={addToArchive}
                        buttonIcon='archive'
                        buttonTooltipText='Archive Note!'
                        height='h-[2rem]'
                        width='w-[2rem]'
                        buttonColor= {`${category === 'important' ? 'text-[#007bff]' : 'text-[#007bff]'}`}
                    />

                    <GroupButton
                        isVisible={false}
                        handleOnClick={addNotesToBin}
                        buttonIcon='delete'
                        buttonTooltipText='Add note to bin'
                        height='h-[2rem]'
                        width='w-[2rem]'
                        buttonColor={`${category === 'important' ? 'text-[#e63946]' : 'text-[#e63946]'}`}
                    />
                </div>
            </div>
        </div>
    )
}

export default NoteCard