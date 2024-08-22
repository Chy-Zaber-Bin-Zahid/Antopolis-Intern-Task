"use client"

import AddCategoryModal from "@/app/components/AddCategoryModal";
import AddOption from "@/app/components/AddOption";
import Animal from "@/app/components/Animal";
import FIlterOption from "@/app/components/FIlterOption";
import { useState } from "react";

export default function Home() {
  const [categoryModal, setCategoryModal] = useState<Boolean>(false)
  const [animalModal, setAnimalModal] = useState<Boolean>(false)

  return (
    <main className="bg-black min-h-screen h-full px-[135px] py-[102px] relative">
      <div className="flex justify-between items-center gap-2 mb-[71px]" >
        <FIlterOption/>
        <AddOption setCategoryModal={setCategoryModal} setAnimalModal={setAnimalModal}/>
      </div>
      <Animal/>
      <AddCategoryModal categoryModal={categoryModal} setCategoryModal={setCategoryModal}/>
    </main>
  );
}
