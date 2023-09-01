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
import useRegisterModal from '@/hooks/useRegisterModal'

type Props = {}

const LoginModal: React.FC<Props> = (props: Props) => {
    const router = useRouter()
    const loginModal = useLoginModal()
    const registerModal = useRegisterModal()

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

    const renderFooter = () => (
        <div className="flex flex-col gap-4 mt-3">
            <hr />
            {/* <Button outline label='Continue With Github' icon={AiFillGithub} onClick={() => signIn('github')} /> */}

            <div className="text-neutral-500 text-center mt-4 font-light">
                <div className="flex flex-row items-center justify-center gap-2">
                    <p>Haven't an Account ? </p>
                    <div onClick={toggle} className='text-neutral-500 hover:underline cursor-pointer'>Create New Account</div>
                </div>
            </div>
        </div>
    ) 

    const toggle = useCallback(() => {
        loginModal.onClose()
        registerModal.onOpen()
    }, [])


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
            footer={renderFooter()}
            body={renderBody()}
            title='Login'
            isOpen={loginModal.isOpen}
            onSubmit={handleSubmit(onSubmit)}
            actionLabel='Login'
            onClose={loginModal.onClose} />
    )

}

export default LoginModal