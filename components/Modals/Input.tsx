'use client'
import React from 'react'
import { UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form'
import { BiDollar } from 'react-icons/bi'

type Props = {
    id: string
    label: string
    type: string
    disabled?: boolean
    formatPrice?: boolean
    register: UseFormRegister<FieldValues>
    errors: FieldErrors
    required?: boolean
}

const Input: React.FC<Props> = (props: Props) => {
    const { id, label, type, disabled, formatPrice, register, errors, required } = props

    return (
        <div className='w-full relative'>
            {formatPrice && <BiDollar className="text-neutral-700 absolute top-5 left-2" size={24} />}
            <input
                className={`
                peer 
                w-full 
                p-4 
                pt-6
                bg-white 
                border-2 
                rounded-md 
                outline-none 
                transition 
                disabled:opacity-70 
                font-light
                ${formatPrice ? 'pl-9' : 'pl-4'} 
                ${errors[id] ? 'border-rose-500 focus:border-rose-500' : 'border-neutral-300 focus:border-black'}
            `} id={id} disabled={disabled} {...register(id, { required })} placeholder='' type={type} />
            <label
                className={`
                        absolute 
                        text-md 
                        duration-500 
                        transform 
                        -translate-y-3 
                        top-5 
                        z-10 
                        origin-[0] 
                        peer-placeholder-shown:scale-100 
                        peer-placeholder-shown:translate-y-0
                        peer-focus:scale-75
                        peer-focus:-translate-y-4 
                        ${errors[id] ? 'text-rose-500' : 'text-zinc-400'} 
                        ${formatPrice ? "left-9" : 'left-4'
                    }`}>
                {label}
            </label>
        </div>
    )
}

export default Input