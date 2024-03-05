import { InputHTMLAttributes, forwardRef } from "react";
import { Path, UseFormRegister } from "react-hook-form";
import { LocalsRequest } from "../Interfaces/LocalRequest";
import { MotosRequest } from "../Interfaces/MotosRequest";

type InputProps = {
    title?: string;
    iRegister?: UseFormRegister<LocalsRequest>;
    textRegis?: Path<LocalsRequest>;
    disabled?: boolean | undefined;
} & InputHTMLAttributes<HTMLInputElement>;

type MotoInputProps = {
    title?: string;
    iRegister?: UseFormRegister<MotosRequest>;
    textRegis?: Path<MotosRequest>;
    disabled?: boolean | undefined;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => (
    <label className="w-full flex flex-row p-2 gap-3">
        <p className="w-full text-white">{props.title}</p>
        <input className="ring-1 ring-black text-black" type={props.type} {...(typeof props.iRegister === 'function' ? props.iRegister(props.textRegis!) : {})} />
    </label>
));

export const MotoInput = forwardRef<HTMLInputElement, MotoInputProps>((props, ref) => (
    <label className="w-full flex flex-row p-2 gap-3">
        <p className="w-full text-white">{props.title}</p>
        <input className="ring-1 ring-black text-black" type={props.type} {...(typeof props.iRegister === 'function' ? props.iRegister(props.textRegis!) : {})} />
    </label>
));