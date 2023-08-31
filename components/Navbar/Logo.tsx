'use client'
import React from 'react'
import PageLogo from '@/public/images/logo.png'
import Image from 'next/image'

type Props = {}

const Logo:React.FC = (props: Props) => {
    return (
        <>
            <Image src={PageLogo} alt='logo' width={100} height={100} />
        </>
    )
}

export default Logo