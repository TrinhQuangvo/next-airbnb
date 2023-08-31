
import React from 'react'
import Container from '../Container'
import Logo from './Logo'
import Search from './Search'
import UserMenu from './UserMenu'

type Props = {}

const Navbar: React.FC = (props: Props) => {
    return (
        <nav className='fixed w-full bg-white z-10 shadow-sm'>
            <Container>
                <div className='flex flex-row items-center justify-between gap-3 md:gap-0'>
                    <Logo />
                    <Search />
                    <UserMenu />
                </div>
            </Container>

        </nav>
    )
}

export default Navbar