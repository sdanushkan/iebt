import React, { useEffect } from 'react'
import {Input} from "@nextui-org/react";
import {Textarea} from "@nextui-org/input";
import { Button } from '@nextui-org/react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoHome, IoPersonCircle } from "react-icons/io5";
import { RiSecurePaymentFill } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa6';

const ContactScreen = () => {
  const dispatch = useDispatch()
    const history = useNavigate()
    const location = useLocation()

  useEffect(() => {
    window.scroll(0,0);
  }, [location]);
  return (
    <div className='flex flex-col gap-14'>
      <section className='relative'>
          <img src={'https://st4.depositphotos.com/21389766/23112/i/450/depositphotos_231122574-stock-photo-contact-contact-write-email-support.jpg'} alt='' className='h-[400px] w-full object-cover relative -z-40' />
          
          <div className='w-full h-fit max-w-[1024px] mx-auto bg-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] -mt-[100px] relative z-10 md:gap-4 p-12 rounded-t-[16px]'>
            <section className='relative'>
            <div className='h-fit w-fit mx-auto px-6 flex items-start gap-8'>
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
                      placeholder="Name"
                      labelPlacement="outside"
                      variant="bordered"
                      startContent={
                        <IoMdMail className="text-lg text-default-400 pointer-events-none flex-shrink-0" />
                      }
                      className='w-full shadow-none rounded-none'
                      radius='sm'
                      size='md'
                      // endContent={
                      //   // <VscSymbolKeyword />
                      // }
                    />
                    <Input
                      type="email"
                      placeholder="Email Address"
                      labelPlacement="outside"
                      variant="bordered"
                      startContent={
                        <IoPersonCircle className="text-lg text-default-400 pointer-events-none flex-shrink-0" />
                      }
                      endContent={
                        <div className="pointer-events-none flex items-center">
                          <span className="text-default-400 text-small">@gmail.com</span>
                        </div>
                      }
                      className='w-full shadow-none rounded-none'
                      radius='sm'
                      size='md'
                      // endContent={
                      //   // <VscSymbolKeyword />
                      // }
                    />
                  </div>
                  <div className=' flex gap-4'>
                    <Input
                      type="number"
                      placeholder="Contact Number"
                      labelPlacement="outside"
                      variant="bordered"
                      maxLength={10}
                      startContent={
                        <div className="pointer-events-none flex items-center">
                          <span className="text-default-400 text-small">+94</span>
                        </div>
                      }
                      className='w-full shadow-none rounded-none'
                      radius='sm'
                      size='md'
                      // endContent={
                      //   // <VscSymbolKeyword />
                      // }
                    />
                    <Input
                      type="text"
                      placeholder="Subject"
                      labelPlacement="outside"
                      variant="bordered"
                      
                      className='w-full shadow-none rounded-none'
                      radius='sm'
                      size='md'
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
      </section>
      
      
    </div>
  )
}

export default ContactScreen