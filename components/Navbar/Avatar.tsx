'use client'

import Image from 'next/image'
import React from 'react'

type Props = {
    src?: string
}

const Avatar = (props: Props) => {
    const { src } = props
    return (
        <Image alt='avatar' className='rounded-full' height={30} width={30} src={`${src ? src : '/images/placeholder.jpg'}`} />
    )
}

export default Avatar