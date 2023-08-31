'use client'
import React from 'react'

type Props = {
    children: React.ReactNode
}

const Container: React.FC<Props> = (props: Props) => {
    return (
        <div className='max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 p-4'>
            {props.children}
        </div>
    )
}

export default Container