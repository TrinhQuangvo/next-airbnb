
import React from 'react'
import Container from '../Container'
import Logo from './Logo'
import Search from './Search'
import UserMenu from './UserMenu'
import { SafeUser } from '@/app/types/SafeUser'
import Categories from './Categories'

type Props = {
    currentUser?: SafeUser | null
}

const Navbar: React.FC<Props> = (props: Props) => {
    const { currentUser } = props
    return (
        <nav className='fixed w-full bg-white z-10 shadow-sm'>
            <Container>
                <div className='flex flex-row items-center justify-between gap-3 md:gap-0'>
                    <Logo />
                    <Search />
                    <UserMenu currentUser={currentUser} />
                </div>
            </Container>
            <Categories />
        </nav>
    )
}

export default Navbar