import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

const LinkStyle: AnchorHTMLAttributes<HTMLAnchorElement> = { className: "rounded-md flex items-center p-2 justify-center focus:ring-1 bg-neutral-700 text-white hover:scale-105 transition-all ease-in-out duration-100" };
const butonStyle: ButtonHTMLAttributes<HTMLButtonElement> = { className: "rounded-md cursor-pointer gap-3 flex p-2 justify-center focus:ring-1 bg-neutral-700 text-white hover:scale-105 transition-all ease-in-out duration-100" };
const titleDiscStyle: ButtonHTMLAttributes<HTMLButtonElement> = { className: "w-full rounded-md flex items-center p-2 justify-center bg-neutral-50 text-black scale-105 flex flex-row justify-between items-center" };
const buttonUploadStyle: ButtonHTMLAttributes<HTMLButtonElement> = { className: "rounded-md cursor-pointer w-[17vh] gap-3 flex flex-row items-center p-2 justify-center focus:ring-1 bg-neutral-700 text-white hover:scale-105 transition-all ease-in-out duration-100" };

export { LinkStyle, butonStyle, titleDiscStyle, buttonUploadStyle };