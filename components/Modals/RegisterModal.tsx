'use client'
import React, { useCallback, useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { AiFillGithub } from 'react-icons/ai'
import axios from 'axios'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import useRegisterModal from '@/hooks/useRegisterModal'
import Modal from '.'
import Heading from './Heading'
import Input from './Input'
import { toast } from 'react-hot-toast/headless'
import Button from '../Button'
import { signIn } from 'next-auth/react'
type Props = {}

const RegisterModal: React.FC<Props> = (props: Props) => {
    const registerModal = useRegisterModal()
    const [isLoading, setIsLoading] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)

        axios.post('/api/register', data)
            .then(() => {
                registerModal.onClose()
            })
            .catch(error => {
                toast.error('Something went wrong!')
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    const renderBody = () => (
        <div className='flex flex-col gap-4'>
            <Heading title='Welcome to Airbnb' subtitle='Create an account!' center />
            <Input id="email" type='email' disabled={isLoading} register={register} errors={errors} required={true} label='Email' />
            <Input id="name" type='text' disabled={isLoading} register={register} errors={errors} required={true} label='Name' />
            <Input id="password" type='password' disabled={isLoading} register={register} errors={errors} required={true} label='Password' />
        </div>
    )

    const renderFooter = () => (
        <div className="flex flex-col gap-4 mt-3">
            <hr />
            {/* <Button outline label='Continue With Google' icon={FcGoogle} onClick={() => signIn('google')} /> */}
            <Button outline label='Continue With Github' icon={AiFillGithub} onClick={() => signIn('github')} />

            <div className="text-neutral-500 text-center mt-4 font-light">
                <div className="flex flex-row items-center justify-center gap-2">
                    <p>Already get an Account ? </p>
                    <div onClick={() => registerModal.onClose()} className='text-neutral-500 hover:underline cursor-pointer'>Login</div>
                </div>
            </div>
        </div>
    )

    return (
        <Modal
            footer={renderFooter()}
            body={renderBody()}
            title='Register'
            isOpen={registerModal.isOpen}
            onSubmit={handleSubmit(onSubmit)}
            actionLabel='Continue'
            onClose={registerModal.onClose} />
    )
}

export default RegisterModal 