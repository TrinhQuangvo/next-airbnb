'use client'

import React from 'react'
import { Toaster } from 'react-hot-toast'
type Props = {}

const ToastProvider: React.FC<Props> = (props: Props) => {
    return (
        <Toaster />
    )
}

export default ToastProvider