'use client'

import useLoginModal from '@/hooks/useLoginModal'
import React, { useState, useCallback } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import Modal from '.'
import { toast } from 'react-hot-toast'
import Heading from './Heading'
import Input from './Input'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

type Props = {}

const LoginModal: React.FC<Props> = (props: Props) => {
    const router = useRouter()
    const loginModal = useLoginModal()

    const [isLoading, setIsLoading] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const renderBody = () => (
        <div className='flex flex-col gap-4'>
            <Heading title='Login' subtitle='Create an account!' center />
            <Input id="email" type='email' disabled={isLoading} register={register} errors={errors} required={true} label='Email' />
            <Input id="password" type='password' disabled={isLoading} register={register} errors={errors} required={true} label='Password' />
        </div>
    )


    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)

        signIn('credentials', {
            ...data,
            redirect: false
        }).then(callback => { 
            setIsLoading(false)
            if (callback?.ok) {
                toast.success('Loged In')
                router.refresh()
                loginModal.onClose()
            }

            if (callback?.error)
                toast.error('Error, something went wrong')

        })
    }
    return (
        <Modal
            body={renderBody()}
            title='Login'
            isOpen={loginModal.isOpen}
            onSubmit={handleSubmit(onSubmit)}
            actionLabel='Login'
            onClose={loginModal.onClose} />
    )

}

export default LoginModal