'use client'
import React, { useCallback, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import Avatar from './Avatar'
import MenuItem from './MenuItem'
import useRegisterModal from '@/hooks/useRegisterModal'
import useLoginModal from '@/hooks/useLoginModal'
import { signOut } from 'next-auth/react'
import { SafeUser } from '@/app/types/SafeUser'
import useRentModal from '@/hooks/useRentModal'

type Props = {
    currentUser?: SafeUser | null
}

const UserMenu: React.FC<Props> = (props: Props) => {
    const { currentUser } = props

    const [isOpen, setIsOpen] = useState(false)
    const registerModal = useRegisterModal()
    const loginModal = useLoginModal()
    const rentModal = useRentModal()

    const toggleOpen = useCallback(() => {
        setIsOpen(prev => !prev)
    }, [])

    const onRent = useCallback(() => {
        if (!currentUser)
            return loginModal.onOpen()  
        rentModal.onOpen()
 
    }, [currentUser, loginModal, rentModal])

    return (
        <div className='relative'>
            <div className="flex flex-row items-center gap-3">
                <div onClick={onRent} className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">
                    {currentUser?.name || "Airbnb Your Home"}
                </div>
                <div onClick={() => toggleOpen()} className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
                    <AiOutlineMenu />
                </div>
                <div className="hidden md:block">
                    <Avatar src={currentUser?.image || undefined} />
                </div>
            </div>
            {isOpen && (
                <div className='absolute rounded-xl shadow-md w-[40vm] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm'>
                    <div className="flex flex-col cursor-pointer">
                        {currentUser ? <>
                            <MenuItem label='My trips' onClick={() => { }} />
                            <MenuItem label='Favorites' onClick={() => { }} />
                            <MenuItem label='Properties' onClick={() => { }} />
                            <MenuItem label='My Home' onClick={rentModal.onOpen} />
                            <MenuItem label='Log Out' onClick={() => signOut()} />
                        </>
                            : <>
                                <MenuItem label='Login' onClick={loginModal.onOpen} />
                                <MenuItem label='Register' onClick={registerModal.onOpen} />
                            </>
                        }

                    </div>
                </div>
            )
            }
        </div >
    )
}

export default UserMenu