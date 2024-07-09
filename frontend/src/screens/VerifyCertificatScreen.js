import React from 'react'
import {Input} from "@nextui-org/input";
import { BiSearch } from 'react-icons/bi';

const VerifyCertificatScreen = () => {
  return (
    <div className='min-h-screen py-8 pt-[128px]'>
        <div className='h-fit w-full max-w-[1024px] mx-auto px-6'>
            <Input size={'md'} type="email" variant='flat' className='' placeholder='Enter student id' endContent={<BiSearch/>}/>
        </div>
    </div>
  )
}

export default VerifyCertificatScreen