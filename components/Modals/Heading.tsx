'use client'
import React from 'react'

type Props = {
    title: string
    center?: boolean
    subtitle?: string
}

const Heading: React.FC<Props> = (props: Props) => {
    const { title, center, subtitle } = props
    return (
        <div className={`${center ? 'text-center' : 'text-start'}`}>
            <div className="text-2xl font-bold">
                {title}
            </div>
            <div className="font-light text-neutral-500 mt-2">
                {subtitle}
            </div>
        </div>
    )
}

export default Heading