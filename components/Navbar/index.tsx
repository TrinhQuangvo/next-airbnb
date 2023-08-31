
import React from 'react'
import Container from '../Container'
import Logo from './Logo'
import Search from './Search'
import UserMenu from './UserMenu'
import { User } from '@prisma/client'

type Props = {
    currentUser?: User | null
}

const Navbar: React.FC<Props> = (props: Props) => {
    const { currentUser } = props
    console.log(currentUser)
    return (
        <nav className='fixed w-full bg-white z-10 shadow-sm'>
            <Container>
                <div className='flex flex-row items-center justify-between gap-3 md:gap-0'>
                    <Logo />
                    <Search />
                    <UserMenu currentUser={currentUser} />
                </div>
            </Container>

        </nav>
    )
}

export default Navbar