import { FC } from "react";

export const ClientFeature: FC = () => {
    return (
        <div className="flex flex-row flex-wrap justify-around gap-2 items-center h-full w-full">
            <button className={`flex flex-col items-center p-2 gap-2 bg-green-400 transition-all duration-75 hover:scale-105 rounded-md hover:shadow-md hover:shadow-neutral-900`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home-plus" width="100" height="100" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19 12h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5.5" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2" /><path d="M16 19h6" /><path d="M19 16v6" /></svg>
                <p>Añadir local</p>
            </button>
            
            <div className="w-3/5 bg-slate-500 h-5/6 rounded-md"></div>
        </div>
    )
}