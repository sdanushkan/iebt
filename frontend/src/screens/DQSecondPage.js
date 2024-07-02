import React, { useEffect, useState } from 'react'
import {Input, Skeleton} from "@nextui-org/react";
import { VscSymbolKeyword } from "react-icons/vsc";
import {Button} from "@nextui-org/button";
import thum from '../assets/thum.png'
import { IoCalendar, IoDocument, IoDocuments, IoSearch } from "react-icons/io5";
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
import {RadioGroup, Radio, useRadio, VisuallyHidden, cn} from "@nextui-org/react";
import { getCountryList, getTestimonialList } from '../actions/abroadActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import WorldMap from '../components/WorldMap';
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { FaCalendarAlt } from "react-icons/fa";
import { IoMdArrowRoundForward } from "react-icons/io";
import {Accordion, AccordionItem} from "@nextui-org/react";
import { GrFormNextLink } from "react-icons/gr";
import {today, isWeekend, getLocalTimeZone} from "@internationalized/date";
import {useLocale} from "@react-aria/i18n";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { setHours, setMinutes, getDay } from 'date-fns';
import WebView from '@luxbit/react-electron-webview'
import YouTube from 'react-youtube';
import  apply  from '../assets/apply.png'
import  dq  from '../assets/dq.jpg'
import  verification  from '../assets/verification.png'
import  sp  from '../assets/sp.png'
import  es  from '../assets/es.png'
import parse from 'html-react-parser';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay, FreeMode } from 'swiper/modules';
import ReactPlayer from 'react-player'
import CountUp from 'react-countup';

import sdv from '../assets/sdv.mp4'

const DQSecondPage = () => {
  return (
    <div>
        <section className='h-fit w-full relative overflow-hidden'>
            <div className='h-[400px] lg:h-[500px] w-full object-cover object-bottom absolute z-0 blur-md'>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                clickable: true,
                }}
                modules={[ Autoplay]}
                className="w-full"
                autoplay
            >
                <SwiperSlide className='w-full h-full object-contain'>
                <img src='https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' className='h-[600px] xl:h-[500px] w-full object-cover object-bottom'/>
                </SwiperSlide>
                <SwiperSlide className='w-full h-full object-contain'>
                <img src='https://media.istockphoto.com/id/1307457391/photo/happy-black-student-raising-arm-to-answer-question-while-attending-class-with-her-university.jpg?s=612x612&w=0&k=20&c=iZaZFyC-WqlqSQc4elqUNPTxLvWPe8P5Tb_YdZnrI9Q=' alt='' className='h-[600px] xl:h-[500px] w-full object-cover object-center'/>
                </SwiperSlide>
                {/* <SwiperSlide className='w-full h-full object-contain'>
                <img src='https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' className='h-[500px] w-full object-cover object-bottom'/>
                </SwiperSlide> */}
            </Swiper>
            </div>

            <div className='h-fit mt-[100px] w-full max-w-[1024px]  relative z-30 px-6 mx-auto object-cover object-bottom flex flex-col md:flex-row items-center py-4'>
            <div className='h-fit w-full max-w-[1024px] mx-auto px-6 gap-2 flex items-center justify-center'>
                <div className='h-fit px-8 py-6 backdrop-blur-2xl rounded-[8px] flex flex-col gap-4'>
                <p className='text-4xl font-bold text-black text-center'>Dual Higher Diploma</p>
                <p className='text-sm text-black opacity-75 text-center'>Level 4 & 5 Diploma in Business Management</p>
                
                </div>
            </div>
            </div>
        </section>
        <section className='h-fit w-full'>
        <div className='h-fit w-full max-w-[1024px] mx-auto py-[50px] px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2'>
        <div className=' w-full h-full flex flex-col capitalize justify-center py-6 px-4 bg-red-50 rounded-[8px]'>
            <p className='text-xs font-medium'>Level 5 diploma in</p>
            <p className='text-sm text-[#DA0C0C] font-bold'>Hospitality and tourism management</p>
        </div>
        <div className=' w-full h-full flex flex-col capitalize justify-center py-6 px-4 bg-red-50 rounded-[8px]'>
            <p className='text-xs font-medium'>Level 5 diploma in</p>
            <p className='text-sm text-[#DA0C0C] font-bold'>marketing</p>
        </div>
        <div className=' w-full h-full flex flex-col capitalize justify-center py-6 px-4 bg-red-50 rounded-[8px]'>
            <p className='text-xs font-medium'>Level 5 diploma in</p>
            <p className='text-sm text-[#DA0C0C] font-bold'>human resource management</p>
        </div>
        <div className=' w-full h-full flex flex-col capitalize justify-center py-6 px-4 bg-red-50 rounded-[8px]'>
            <p className='text-xs font-medium'>Level 5 diploma in</p>
            <p className='text-sm text-[#DA0C0C] font-bold'>logistics and supply chain management</p>
        </div>
        <div className=' w-full h-full flex flex-col capitalize justify-center py-6 px-4 bg-red-50 rounded-[8px]'>
            <p className='text-xs font-medium'>Level 5 diploma in</p>
            <p className='text-sm text-[#DA0C0C] font-bold'>accounting and finance</p>
        </div>
        </div>
        </section>
    </div>
  )
}

export default DQSecondPage