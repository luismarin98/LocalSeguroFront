import { MouseEvent } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { keySelector } from "../../../Redux/Key/key.selector";

export const KeyContainer = () => {
    const key = useSelector(keySelector);

    const handleCopy = async (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        await navigator.clipboard.writeText(key!.key);
        toast.success('Texto copiado')
    }

    return <div className="w-full flex flex-row p-2 bg-neutral-100 gap-2 rounded-md justify-center items-center">
        <p>{key!.key}</p>
        <button className="ring-1 ring-black p-1 rounded-md hover:shadow-md hover:shadow-neutral-800 transition-all ease-in-out duration-100 hover:scale-105" onClick={handleCopy}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-copy"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" /><path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" /></svg></button>
    </div>
}