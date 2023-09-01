'use client'
import React from 'react'
import PageLogo from '@/public/images/logo.png'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

type Props = {}

const Logo: React.FC = (props: Props) => {
    const router = useRouter()
    return (
        <>
            <Image onClick={() => router.push('/')} src={PageLogo} alt='logo' width={100} height={100} className='hidden md:block cursor-pointer' />
        </>
    )
}

export default Logo