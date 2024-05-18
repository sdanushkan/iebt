import React from 'react'
import {Input} from "@nextui-org/react";
import {Textarea} from "@nextui-org/input";
import { Button } from '@nextui-org/react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { RiSecurePaymentFill } from "react-icons/ri";

const ContactScreen = () => {
  return (
    <div className='flex flex-col gap-14'>
      <section className='h-fit w-full relative overflow-hidden '>
        
        <img src='https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' className='h-[700px] xl:h-[500px] w-full object-cover object-top  absolute -z-50'/>

        <div className='h-[400px] w-full max-w-[1100px] mx-auto px-6'>

        </div> 
      </section>

      <section className='h-fit w-full'>
        <div className='h-fit w-fit max-w-[1100px] mx-auto px-6 flex items-start gap-8'>
          <div className='flex flex-col gap-4 w-[300px]'>

            <section variant='light' className='border-[1px] w-full border-black/10 py-4 px-4 flex gap-4 rounded-2xl'>
              <Button isIconOnly variant='solid' className='bg-red-100 rounded-full' startContent={<FaPhoneAlt />}></Button>
              <div className='flex flex-col items-start'>
                <p className='font-bold capitalize text-base'>phone Number</p>
                <p className='text-xs text-gray-500'>077 828 9898</p>
                <p className='text-xs text-gray-500'>0117 455 665</p>
              </div>
            </section>
            <section variant='light' className='border-[1px] w-full border-black/10 py-4 px-4 flex gap-4 rounded-2xl'>
              <Button isIconOnly variant='solid' className='bg-red-100 rounded-full' startContent={<IoMdMail/>}></Button>
              <div className='flex flex-col items-start'>
                <p className='font-bold capitalize text-base'>Email</p>
                <p className='text-xs text-gray-500'>info@iebc.lk</p>
              </div>
            </section>

            <section variant='light' className='border-[1px] w-full border-black/10 py-4 px-4 flex gap-4 rounded-2xl'>
              <Button isIconOnly variant='solid' className='bg-red-100 rounded-full' startContent={<IoHome  />}></Button>
              <div className='flex flex-col items-start'>
                <p className='font-bold capitalize text-base'>our Address</p>
                <p className='text-xs text-gray-500'>No. 85 1/3, Galle Road, Dehiwala, Sri Lanka.</p>
              </div>
            </section>
            
          </div>
          <div className=''>
            <div className=''>
              <p className='text-3xl font-bold capitalize'>send message</p>
              <p></p>
            </div>
            <div className='flex flex-col gap-4 py-8'>
              <div className=' flex gap-4'>
                <Input
                  type="text"
                  placeholder="keyword"
                  labelPlacement="outside"
                  variant="bordered"
                  
                  className='w-full shadow-none rounded-none'
                  radius='sm'
                  size='lg'
                  // endContent={
                  //   // <VscSymbolKeyword />
                  // }
                />
                <Input
                  type="text"
                  placeholder="keyword"
                  labelPlacement="outside"
                  variant="bordered"
                  
                  className='w-full shadow-none rounded-none'
                  radius='sm'
                  size='lg'
                  // endContent={
                  //   // <VscSymbolKeyword />
                  // }
                />
              </div>
              <div className=' flex gap-4'>
                <Input
                  type="text"
                  placeholder="keyword"
                  labelPlacement="outside"
                  variant="bordered"
                  
                  className='w-full shadow-none rounded-none'
                  radius='sm'
                  size='lg'
                  // endContent={
                  //   // <VscSymbolKeyword />
                  // }
                />
                <Input
                  type="text"
                  placeholder="keyword"
                  labelPlacement="outside"
                  variant="bordered"
                  
                  className='w-full shadow-none rounded-none'
                  radius='sm'
                  size='lg'
                  // endContent={
                  //   // <VscSymbolKeyword />
                  // }
                />
              </div>
              <Textarea
                isRequired
                labelPlacement="outside"
                placeholder="Enter your description"
                className="w-full"
                variant='bordered'
              />
              <Button color='' className="hidden lg:flex bg-[#DA0C0C] text-white font-medium md:px-6 py-6 rounded-md">
                    <p>Submit</p>
                    <RiSecurePaymentFill  />
                  </Button>
            </div>
          </div>
        </div>
      </section>


      
    </div>
  )
}

export default ContactScreen