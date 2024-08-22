import React from 'react'

type AddOptionProps  = {
    setCategoryModal: (value: boolean) => void;
    setAnimalModal: (value: boolean) => void;
}

function AddOption({ setCategoryModal, setAnimalModal }: AddOptionProps ) {
    return (
        <div className='flex justify-center items-center gap-4' >
            <button onClick={() => setAnimalModal(true)} className='border-[1px] border-white text-white py-[14px] px-5 rounded-[100px] w-fit text-lg font-normal'>
                Add Animal
            </button>
            <button onClick={() => setCategoryModal(true)} className='border-[1px] border-white text-white py-[14px] px-5 rounded-[100px] w-fit text-lg font-normal'>
                Add Category
            </button>
        </div>
    )
}

export default AddOption