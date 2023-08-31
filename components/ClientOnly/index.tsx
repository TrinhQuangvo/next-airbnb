'use client'
import React, { useEffect, useState } from 'react'

type Props = {
    children: React.ReactNode
}

const ClientOnly: React.FC<Props> = (props: Props) => {
    const { children } = props 
    const [hasMounted, sethasMounted] = useState(false)

    useEffect(() => {
        sethasMounted(true)


    }, [])

    if (!hasMounted) return null

    return (
        <div>{children}</div>
    )
}

export default ClientOnly