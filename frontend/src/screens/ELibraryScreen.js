import { Button, Input } from '@nextui-org/react'
import React from 'react'
import { BiSearch } from 'react-icons/bi'

const ELibraryScreen = () => {
  return (
    <div className='min-h-screen py-8 pt-[128px] flex items-center justify-center'>
    <div className='h-fit w-full max-w-[400px] mx-auto px-6 gap-4 flex flex-col'>
        <p className='text-2xl font-bold pb-4'>E library portal</p>
        <Input size={'md'} type="email" label="Student ID" variant='flat' className='' placeholder='Enter Student id'/>
        <Input size={'md'} type="password" label="Password" variant='flat' className='' placeholder='Enter Password'/>
        <Button className='bg-[#DA0C0C] text-white'>
            login
        </Button>
    </div>
</div>
  )
}

export default ELibraryScreen