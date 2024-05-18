import React from 'react'
import {Input} from "@nextui-org/react";
import { VscSymbolKeyword } from "react-icons/vsc";
import {Button} from "@nextui-org/button";
import { IoSearch } from "react-icons/io5";
import { AiFillSignal } from "react-icons/ai";
import { BsBookmarksFill } from "react-icons/bs";
import { FaAward } from "react-icons/fa";
import {Select, SelectItem} from "@nextui-org/react";
import { MdOutlineAdsClick } from "react-icons/md";
import { MdOutlineVerified } from "react-icons/md";
import { FaIdCard } from "react-icons/fa";
import { MdLibraryBooks } from "react-icons/md";
import { MdOutlineAccessTime } from "react-icons/md";
import { MdOutlineBookmarkBorder } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoArrowForwardOutline } from "react-icons/io5";

const CountryScreen = () => {
  return (
    <div className='flex flex-col gap-14'>
      <section className='h-fit w-full relative overflow-hidden '>
        
        <img src='https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' className='h-[700px] xl:h-[500px] w-full object-cover object-top  absolute -z-50'/>

        <div className='h-[700px] xl:h-[500px] w-full max-w-[1100px] mx-auto px-6'>

        </div> 
      </section>

      <section className='h-fit w-full relative overflow-hidden px-8'>
        <div className='h-fit w-full max-w-[800px] mx-auto grid grid-cols-2 md:grid-cols-4 justify-center gap-6'>
            <div className='w-full h-full flex flex-col items-center justify-center gap-4 bg-red-50 py-8 px-8 rounded-[8px]'>
              <MdOutlineAdsClick className='text-6xl'/>
              <p className='text-sm font-semibold'>Apply Online</p>
            </div>
            <div className='w-full h-full flex flex-col items-center justify-center gap-4 bg-red-50 py-8 px-8 rounded-[8px]'>
              <MdOutlineVerified  className='text-6xl'/>
              <p className='text-sm font-semibold'>Verify Certificate</p>
            </div>
            <div className='w-full h-full flex flex-col items-center justify-center gap-4 bg-red-50 py-8 px-8 rounded-[8px]'>
              <FaIdCard  className='text-6xl'/>
              <p className='text-sm font-semibold'>Student Portal</p>
            </div>
            <div className='w-full h-full flex flex-col items-center justify-center gap-4 bg-red-50 py-8 px-8 rounded-[8px]'>
              <MdLibraryBooks  className='text-6xl'/>
              <p className='text-sm font-semibold'>E library</p>
            </div>
        </div>
      </section>

      <section className='h-fit w-full relative overflow-hidden px-8'>
        <div className='h-[700px] xl:h-[500px] w-full max-w-[1100px] mx-auto px-6'>
          <div className='w-fit mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

            <div className='bg-white min-w-[300px] max-w-[400px] h-[200px] border-1 border-gray-200 gap-8 flex flex-col rounded-[8px] relative overflow-hidden'>
              <div className='h-full p-6 flex flex-col justify-between'>
                <div className='flex flex-col relative z-30'>
                  <p className='text-4xl font-bold text-white'>Canada</p>
                </div>
                <div className='flex items-center gap-4 relative z-30'>
                  <Button radius='full' isIconOnly variant='solid' className='bg-red-600 text-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] ' startContent={<IoArrowForwardOutline/>}>

                  </Button>
                  <p className='text-xs text-gray-100'>Learn more</p>
                </div>
              </div>
              <div className='h-full w-full bg-red-50 absolute rounded-full flex items-start justify-start z-0'>
                
                <img src='https://adventures.com/media/207686/s-toronto-canada-city-skyline-skyscrapers-buildings-seaside-sunny.jpg' alt='' className='h-full w-full object-cover absolute z-0' />
                <div className='h-full w-full bg-gradient-to-t from-black to-transparent absolute z-30'></div>
              </div>
            </div>
            <div className='bg-white min-w-[300px] max-w-[400px] h-[200px] border-1 border-gray-200 gap-8 flex flex-col rounded-[8px] relative overflow-hidden'>
              <div className='h-full p-6 flex flex-col justify-between'>
                <div className='flex flex-col relative z-30'>
                  <p className='text-4xl font-bold text-white'>United Kingdom</p>
                </div>
                <div className='flex items-center gap-4 relative z-30'>
                  <Button radius='full' isIconOnly variant='solid' className='bg-red-600 text-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] ' startContent={<IoArrowForwardOutline/>}>

                  </Button>
                  <p className='text-xs text-gray-100'>Learn more</p>
                </div>
              </div>
              <div className='h-full w-full bg-red-50 absolute rounded-full flex items-start justify-start z-0'>
                
                <img src='https://img.freepik.com/premium-photo/london-city-skyline-with-big-ben-houses-parliament-cityscape-uk_255553-3505.jpg' alt='' className='h-full w-full object-cover absolute z-0' />
                <div className='h-full w-full bg-gradient-to-t from-black to-transparent absolute z-30'></div>
              </div>
            </div>
            <div className='bg-white min-w-[300px] max-w-[400px] h-[200px] border-1 border-gray-200 gap-8 flex flex-col rounded-[8px] relative overflow-hidden'>
              <div className='h-full p-6 flex flex-col justify-between'>
                <div className='flex flex-col relative z-30'>
                  <p className='text-4xl font-bold text-white'>Australia</p>
                </div>
                <div className='flex items-center gap-4 relative z-30'>
                  <Button radius='full' isIconOnly variant='solid' className='bg-red-600 text-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] ' startContent={<IoArrowForwardOutline/>}>

                  </Button>
                  <p className='text-xs text-gray-100'>Learn more</p>
                </div>
              </div>
              <div className='h-full w-full bg-red-50 absolute rounded-full flex items-start justify-start z-0'>
                
                <img src='https://content.r9cdn.net/rimg/dimg/43/4b/72c43e11-city-2258-17a3a42c3ab.jpg?crop=true&width=1366&height=768&xhint=1597&yhint=1522' alt='' className='h-full w-full object-cover absolute z-0' />
                <div className='h-full w-full bg-gradient-to-t from-black to-transparent absolute z-30'></div>
              </div>
            </div>
            <div className='bg-white min-w-[300px] max-w-[400px] h-[200px] border-1 border-gray-200 gap-8 flex flex-col rounded-[8px] relative overflow-hidden'>
              <div className='h-full p-6 flex flex-col justify-between'>
                <div className='flex flex-col relative z-30'>
                  <p className='text-4xl font-bold text-white'>Canada</p>
                </div>
                <div className='flex items-center gap-4 relative z-30'>
                  <Button radius='full' isIconOnly variant='solid' className='bg-red-600 text-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] ' startContent={<IoArrowForwardOutline/>}>

                  </Button>
                  <p className='text-xs text-gray-100'>Learn more</p>
                </div>
              </div>
              <div className='h-full w-full bg-red-50 absolute rounded-full flex items-start justify-start z-0'>
                
                <img src='https://adventures.com/media/207686/s-toronto-canada-city-skyline-skyscrapers-buildings-seaside-sunny.jpg' alt='' className='h-full w-full object-cover absolute z-0' />
                <div className='h-full w-full bg-gradient-to-t from-black to-transparent absolute z-30'></div>
              </div>
            </div>
            <div className='bg-white min-w-[300px] max-w-[400px] h-[200px] border-1 border-gray-200 gap-8 flex flex-col rounded-[8px] relative overflow-hidden'>
              <div className='h-full p-6 flex flex-col justify-between'>
                <div className='flex flex-col relative z-30'>
                  <p className='text-4xl font-bold text-white'>Canada</p>
                </div>
                <div className='flex items-center gap-4 relative z-30'>
                  <Button radius='full' isIconOnly variant='solid' className='bg-red-600 text-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] ' startContent={<IoArrowForwardOutline/>}>

                  </Button>
                  <p className='text-xs text-gray-100'>Learn more</p>
                </div>
              </div>
              <div className='h-full w-full bg-red-50 absolute rounded-full flex items-start justify-start z-0'>
                
                <img src='https://adventures.com/media/207686/s-toronto-canada-city-skyline-skyscrapers-buildings-seaside-sunny.jpg' alt='' className='h-full w-full object-cover absolute z-0' />
                <div className='h-full w-full bg-gradient-to-t from-black to-transparent absolute z-30'></div>
              </div>
            </div>
            <div className='bg-white min-w-[300px] max-w-[400px] h-[200px] border-1 border-gray-200 gap-8 flex flex-col rounded-[8px] relative overflow-hidden'>
              <div className='h-full p-6 flex flex-col justify-between'>
                <div className='flex flex-col relative z-30'>
                  <p className='text-4xl font-bold text-white'>Canada</p>
                </div>
                <div className='flex items-center gap-4 relative z-30'>
                  <Button radius='full' isIconOnly variant='solid' className='bg-red-600 text-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] ' startContent={<IoArrowForwardOutline/>}>

                  </Button>
                  <p className='text-xs text-gray-100'>Learn more</p>
                </div>
              </div>
              <div className='h-full w-full bg-red-50 absolute rounded-full flex items-start justify-start z-0'>
                
                <img src='https://adventures.com/media/207686/s-toronto-canada-city-skyline-skyscrapers-buildings-seaside-sunny.jpg' alt='' className='h-full w-full object-cover absolute z-0' />
                <div className='h-full w-full bg-gradient-to-t from-black to-transparent absolute z-30'></div>
              </div>
            </div>
            <div className='bg-white min-w-[300px] max-w-[400px] h-[200px] border-1 border-gray-200 gap-8 flex flex-col rounded-[8px] relative overflow-hidden'>
              <div className='h-full p-6 flex flex-col justify-between'>
                <div className='flex flex-col relative z-30'>
                  <p className='text-4xl font-bold text-white'>Canada</p>
                </div>
                <div className='flex items-center gap-4 relative z-30'>
                  <Button radius='full' isIconOnly variant='solid' className='bg-red-600 text-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] ' startContent={<IoArrowForwardOutline/>}>

                  </Button>
                  <p className='text-xs text-gray-100'>Learn more</p>
                </div>
              </div>
              <div className='h-full w-full bg-red-50 absolute rounded-full flex items-start justify-start z-0'>
                
                <img src='https://adventures.com/media/207686/s-toronto-canada-city-skyline-skyscrapers-buildings-seaside-sunny.jpg' alt='' className='h-full w-full object-cover absolute z-0' />
                <div className='h-full w-full bg-gradient-to-t from-black to-transparent absolute z-30'></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      
    </div>
  )
}

export default CountryScreen