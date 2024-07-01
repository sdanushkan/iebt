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


const DualQualificationScreen = () => {
  return (
    <div className='max-w-screen flex flex-col gap-12 pb-12 overflow-x-hidden'>

        <section className='h-fit w-full relative overflow-hidden'>

          <div className='h-[400px] lg:h-[500px] w-full object-cover object-bottom relative'>
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

         
        </section>
        <section className='h-fit w-full'>
            <div className='h-fit w-full max-w-[1024px] mx-auto py-[50px] px-6 flex flex-col gap-2'>
              <p className='text-4xl font-bold text-black'>Summary</p>
              <p className='text-sm opacity-50'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </section>

        <section className='h-fit w-full'>
            <div className='h-fit w-full max-w-[1024px] mx-auto py-[50px] px-6 grid grid-cols-2 lg:grid-cols-5 gap-2'>
              <div className=' w-full h-full flex items-center capitalize text-center py-6 px-4 bg-red-50 rounded-[8px]'>
                <p className='text-[#DA0C0C] font-semibold text-center'>Hospitality and tourism management</p>
              </div>
              <div className=' w-full h-full flex items-center capitalize text-center py-6 px-4 bg-red-50 rounded-[8px]'>
                <p className='text-[#DA0C0C] font-semibold text-center'>marketing</p>
              </div>
              <div className=' w-full h-full flex items-center capitalize text-center py-6 px-4 bg-red-50 rounded-[8px]'>
                <p className='text-[#DA0C0C] font-semibold text-center'>human resource management</p>
              </div>
              <div className=' w-full h-full flex items-center capitalize text-center py-6 px-4 bg-red-50 rounded-[8px]'>
                <p className='text-[#DA0C0C] font-semibold text-center'>logistics and supply chain management</p>
              </div>
              <div className=' w-full h-full flex items-center capitalize text-center py-6 px-4 bg-red-50 rounded-[8px]'>
                <p className='text-[#DA0C0C] font-semibold text-center'>accounting and finance</p>
              </div>
            </div>
        </section>
      
    </div>
  )
}

export default DualQualificationScreen