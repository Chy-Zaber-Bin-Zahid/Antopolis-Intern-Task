"use client"

import AddCategoryModal from "@/app/components/AddCategoryModal";
import AddOption from "@/app/components/AddOption";
import Animal from "@/app/components/Animal";
import Animation from "@/app/components/Animation";
import FIlterOption from "@/app/components/FIlterOption";
import { useState } from "react";

function Main() {
    const [categoryModal, setCategoryModal] = useState<Boolean>(false)
    const [animalModal, setAnimalModal] = useState<Boolean>(false)
    return (
        <>
            <div className="flex justify-between items-center gap-2 mb-[71px]" >
                <FIlterOption />
                <AddOption setCategoryModal={setCategoryModal} setAnimalModal={setAnimalModal} />
            </div>
            <Animal />
            <AddCategoryModal categoryModal={categoryModal} setCategoryModal={setCategoryModal} />
            <Animation/>
        </>
    )
}

export default Main