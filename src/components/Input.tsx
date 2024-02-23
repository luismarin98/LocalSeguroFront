import { InputHTMLAttributes, forwardRef } from "react";
import { Path, UseFormRegister } from "react-hook-form";
import { LocalsRequest } from "../Interfaces/LocalRequest";

type InputProps = {
    title?: string;
    iRegister?: UseFormRegister<LocalsRequest>;
    textRegis?: Path<LocalsRequest>;
    disabled?: boolean | undefined;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => (
    <label className="w-full flex flex-row p-2 gap-3">
        <p className="w-full text-white">{props.title}</p>
        <input className="ring-1 ring-black" type={props.type} {...(typeof props.iRegister === 'function' ? props.iRegister(props.textRegis!) : {})} />
    </label>
));
//<input type={props.type} placeholder={props.text} {...props.inputRegister!(props.textRegis!)} className="ring-1 ring-black w-full p-1 rounded-md text-center transition-all ease-in-out duration-100 focus:scale-105" />