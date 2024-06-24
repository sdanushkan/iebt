import { Button } from '@nextui-org/react'
import React from 'react'

const OurServicesScreen = () => {
  return (
    <div className='h-fit w-full flex flex-col gap-12 pb-12'>
        <section className='h-fit w-full relative bg-black'>
            <img src={'https://t4.ftcdn.net/jpg/05/08/80/19/360_F_508801991_UTsCAOorx25USitqonfRADueJlzyjhDq.jpg'} alt='' className='h-[400px] w-full object-cover relative z-0 opacity-50' />
            <div className='h-[400px] w-full flex items-center max-w-[1024px] mx-auto px-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pt-16'>
                <div className='flex flex-col'>
                    <p className='text-3xl  text-[#DA0C0C] font-bold'>Get your free study abroad</p>
                    <p className='text-2xl  text-white font-bold'>Counselling with IEBC</p>
                    <Button color='' className="flex bg-[#DA0C0C] text-xs lg:text-sm text-white px-4 md:px-5 py-2 md:py-3 rounded-full w-fit mt-6">
                        <p>Follow your dreams.</p>
                    </Button>
                </div>
            </div>
        </section>
    </div>
  )
}

export default OurServicesScreen