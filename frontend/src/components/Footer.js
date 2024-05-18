import React from 'react'
import logo from '../assets/Logo.png'
import {Button} from "@nextui-org/react";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='h-fit w-full bg-[#DA0C0C] bg-opacity-10 py-28'>
      <div className='h-fit w-full max-w-[1200px] mx-auto flex flex-col md:flex-row gap-8 '>
        <div className='w-[300px] flex flex-col items-center md:text-start mx-auto'>
          <img src={logo} alt='' className='h-[100px] w-fit object-contain' />
          <p className='text-base font-bold text-[#DA0C0C] uppercase text-center'>International Education and Bussiness campus</p>
          <div className='h-[1px] w-full bg-[#DA0C0C] opacity-10 mt-4'></div>
          <div className='py-4'>
            <Button isIconOnly startContent={<RiInstagramFill className='text-2xl text-[#DA0C0C]'/>} variant='light'>

            </Button>
            <Button isIconOnly startContent={<FaFacebook  className='text-2xl text-[#DA0C0C]'/>} variant='light'>

            </Button>
            <Button isIconOnly startContent={<FaLinkedin  className='text-2xl text-[#DA0C0C]'/>} variant='light'>

            </Button>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-12'>
          <div className='flex flex-col'>
            <div className='flex flex-col justify-center items-center md:items-start md:justify-start '>
              <p className='text-base font-bold border-b-[2px] border-[#DA0C0C] gap-6 h-[60px] flex items-end py-[8px] text-center md:text-left'>PROGRAMMES</p>
              <div className='px-4 flex flex-col gap-2 py-4 order-1 text-center md:text-start'>
                <p className='text-xs font-medium text-gray-600'>UNDERGRADUATE PROGRAMMES</p>
                <p className='text-xs font-medium text-gray-600'>Degree(Full/Top-Up)</p>
                <p className='text-xs font-medium text-gray-600'>POSTGRADUATE PROGRAMMES</p>
                <p className='text-xs font-medium text-gray-600'>Masters(Full/Top-Up)</p>
              </div>
            </div>

            <div className='flex flex-col justify-center items-center md:items-start md:justify-start '>
              <p className='text-base font-bold border-b-[2px] border-[#DA0C0C] gap-6 h-[60px] flex items-end py-[8px] text-center md:text-left'>AWARDING BODY QUALIFICATION</p>
              <div className='px-4 flex flex-col gap-2 py-4 order-1 text-center md:text-start'>
                <p className='text-xs font-medium text-gray-600'>OTHM - UK</p>
                <p className='text-xs font-medium text-gray-600'>QUALIFI - UK</p>
                <p className='text-xs font-medium text-gray-600'>LRN - UK</p>
                <p className='text-xs font-medium text-gray-600'>DLC - SL</p>
              </div>
            </div>
          </div>

          <div className='flex flex-col justify-center items-center md:items-start md:justify-start '>
            <p className='text-base font-bold border-b-[2px] border-[#DA0C0C] gap-6 h-[60px] flex items-end py-[8px] text-center md:text-left'>USE FULL LINKS </p>
            <div className='px-4 flex flex-col gap-2 py-4 order-1 text-center md:text-start'>
              <p className='text-xs font-medium text-gray-600'>PROGRESSION</p>
              <p className='text-xs font-medium text-gray-600'>QUALITY STANDARDS VALID,VALUED LEARNING</p>
              <p className='text-xs font-medium text-gray-600'>FACILITIES</p>
              <p className='text-xs font-medium text-gray-600'>DISTANCE LEARNING</p>
              <p className='text-xs font-medium text-gray-600'>CAREERS</p>
              <p className='text-xs font-medium text-gray-600'>FAQ</p>
              <p className='text-xs font-medium text-gray-600'>TESTIMONIAL</p>
            </div>
          </div>

          <div className='flex flex-col justify-center items-center md:items-start md:justify-start '>
            <p className='text-base font-bold border-b-[2px] border-[#DA0C0C] gap-6 h-[60px] flex items-end py-[8px] text-center md:text-left'>QUICK LINKS</p>
            <div className='px-4 flex flex-col gap-2 py-4 order-1 text-center md:text-start'>
              <p className='text-xs font-medium text-gray-600'>APPLY ONLINE</p>
              <p className='text-xs font-medium text-gray-600'>VERIFY CERTIFICATE</p>
              <p className='text-xs font-medium text-gray-600'>STUDENT PORTAL</p>
              <p className='text-xs font-medium text-gray-600'>PAY ONLINE</p>
              <p className='text-xs font-medium text-gray-600'>EVENT CALENDER</p>
              <p className='text-xs font-medium text-gray-600'>FAQ</p>
              <p className='text-xs font-medium text-gray-600'>TESTIMONIAL</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer