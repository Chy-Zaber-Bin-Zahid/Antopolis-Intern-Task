import Add from "@/app/components/Add";
import Animal from "@/app/components/Animal";
import Filter from "@/app/components/FIlter";

export default function Home() {
  return (
    <main className="bg-black min-h-screen h-full px-[135px] py-[102px]">
      <div className="flex justify-between items-center gap-2 mb-[71px]" >
        <Filter/>
        <Add/>
      </div>
      <Animal/>
    </main>
  );
}
