import React from 'react'
import { useForm } from 'react-hook-form';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { addNote } from '../../redux/slices/notesSlice.js';

function AddNote({ isAddNoteVisible, handleAddNoteVisibility }) {
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors }, } = useForm({
        defaultValues: {
            reminder: null,
            important: false
        }
    });

    const onSubmit = (data) => {
        data.id = uuid();
        data.category = data.important ? 'important' : 'general';
        data.noteState= 'active';
        
        delete data.important;
        const now = new Date();
        data.dateTime = now.toLocaleString();


        dispatch(addNote(data));
    };

    return (
        <div className={`${isAddNoteVisible ? 'block' : 'hidden'} w-[70%] mx-auto bg-white p-6 rounded-lg shadow-md max`}>
            <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">Add Note</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                {/* First Row: Title and Reminder */}
                <div className="grid grid-cols-2 gap-4">
                    {/* Title Input */}
                    <div>
                        {/* Input Box */}
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                            Title <strong className='text-red-500'>*</strong>
                        </label>
                        <input
                            type="text"
                            id="title"
                            {...register('title', { required: 'Title is required' })}
                            placeholder="Enter title"
                            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-2"
                        />
                        {errors.title && (
                            <p className="text-sm text-red-500 mt-1">{errors.title.message}</p>
                        )}
                    </div>

                    {/* Reminder Input */}
                    <div>
                        <label htmlFor="reminder" className="block text-sm font-medium text-gray-700">
                            Reminder Time
                        </label>
                        <input
                            type="datetime-local"
                            id="reminder"
                            {...register('reminder')}
                            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-2"
                        />
                    </div>
                </div>

                {/* Second Row: Description */}
                <div>
                    {/* Textarea */}
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                        Description <strong className='text-red-500'>*</strong>
                    </label>
                    <textarea
                        id="description"
                        placeholder="Enter description"
                        {...register('description', { required: 'Description is required' })}
                        rows="4"
                        className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:outline-none focus:ring-blue-200 focus:ring-opacity-50 p-2"
                    ></textarea>
                    {errors.description && (
                        <p className="text-sm text-red-500 mt-1">{errors.description.message}</p>
                    )}
                </div>

                <div className='flex gap-3'>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                        Important
                    </label>
                    <input
                        type="checkbox"
                        {...register("important")}
                    />
                </div>

                {/* Add Note Button */}
                <div className="flex justify-end gap-3">
                    <button
                        type="submit"
                        className="py-2 px-4 bg-cyan-500 text-white font-medium text-sm rounded-md shadow-sm hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50"
                    >
                        Add Note
                    </button>
                    <button
                        type="button"
                        className="py-2 px-4 bg-red-500 text-white font-medium text-sm rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                        onClick={handleAddNoteVisibility}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddNote