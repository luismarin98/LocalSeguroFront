import { MouseEventHandler, ReactNode } from "react";
import { titleDiscStyle } from "./Styles";

export const Disclosure = ({ children, title, clickEvent, isOpen }: { title: string, children: ReactNode, isOpen?: boolean, clickEvent?: MouseEventHandler<HTMLButtonElement> }) => {
    return (
        <div className="w-full md:w-1/2 p-4">
            <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-white bg-opacity-80 rounded-md">
                <button {...titleDiscStyle} onClick={clickEvent}>
                    <span className="font-bold text-sm w-[40vh] md:w-full">{title}</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`icon icon-tabler icons-tabler-outline icon-tabler-corner-right-down ${isOpen && 'rotate-180'} transition-all duration-300 ease-in-out`}
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M6 6h6a3 3 0 0 1 3 3v10l-4 -4m8 0l-4 4" />
                    </svg>
                </button>
                {isOpen && children}
            </div>
        </div>
    )
}