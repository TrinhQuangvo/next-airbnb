'use client'

import React from 'react'
import Container from '../Container'

type Props = {
    children: React.ReactNode
}

const Categories = (props: Props) => {
    return (

        <Container>
            <div className="pt-4 flex flex-row items-center justify-center overflow-x-auto">

                {props.children}
            </div>
        </Container>
    )
}

export default Categories