import React, { useEffect, useRef } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"

type AddCategoryModalProps = {
    categoryModal: Boolean,
    setCategoryModal: (value: boolean) => void;
}

type FormInputs = {
    categoryName: string;
}

const categorySchema = z.object({
    categoryName: z.string().min(1, 'Category name is required').max(15, 'The length of category can be a maximum of 15 characters'),
})

function AddCategoryModal({ categoryModal, setCategoryModal }: AddCategoryModalProps) {
    const modalRef = useRef<HTMLDivElement | null>(null);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<FormInputs>({
        resolver: zodResolver(categorySchema),
    })

    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        console.log(data);
        setCategoryModal(false);
        reset()
    }

    useEffect(() => {
        // Function to handle clicks outside the modal
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setCategoryModal(false);
                reset()
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setCategoryModal]);

    return (
        <>
            {categoryModal ? <div className={`bg-black bg-opacity-60 h-full w-full absolute top-0 right-0 flex justify-center items-center `}>
                <div ref={modalRef}>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-[21px] bg-white p-4 rounded-lg shadow-lg w-[352px] px-6 py-9'>
                        <h1 className="font-normal text-lg text-black">Add Category</h1>
                        <div className='flex flex-col'>
                            <input
                                {...register('categoryName')}
                                type='text'
                                placeholder='Category'
                                className={`border-[1px] py-[14px] px-5 rounded-lg w-full ${errors?.categoryName ? 'border-red-500' : 'bg-custom-bg-white'
                                    }`}
                            />
                            {errors?.categoryName && (
                                <p className='text-red-500 text-xs mt-1'>
                                    {errors.categoryName.message}
                                </p>
                            )}
                        </div>
                        <button className="bg-black rounded-lg text-white text-lg px-5 py-[14px] mt-[9px]" >Save</button>
                    </form>
                </div>
            </div> : null}
        </>

    )
}

export default AddCategoryModal