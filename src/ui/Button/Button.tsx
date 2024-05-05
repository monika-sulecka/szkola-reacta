import { type MouseEventHandler, type ComponentProps } from "react";

type Props ={
    label: string;
    // onClick: MouseEventHandler<HTMLButtonElement>
} & ComponentProps<'button'>

export const Button = ({ label, className, onClick, ...rest }:Props) => {
    return <button 
    className={`px-4 py-1 text-sm text-white bg-blue-600 rounded-full border cursor-pointer border-blue-200 hover:bg-blue-500 disabled:bg-slate-400 ${className}`}
    {...rest}
    >
    {label}
    </button>
}