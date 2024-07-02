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
import  c  from '../assets/c.jpg'
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
            <div className='h-fit mt-[100px] w-full max-w-[1024px]  relative z-30 px-6 mx-auto object-cover object-bottom flex flex-col md:flex-row items-center py-4'>
                <div className='h-fit w-full max-w-[1024px] mx-auto px-6 gap-2 flex items-center justify-center'>
                    <div className='h-fit flex flex-col gap-4'>
                    <p className='text-2xl md:text-4xl font-bold text-black text-center'>Dual Higher Diploma</p>                
                    </div>
                </div>
            </div>
        </section>
        <section className='h-fit w-full'>
            <div className='h-fit w-full max-w-[1024px] mx-auto px-6 flex flex-row lg:flex-col-reverse lg:items-center'>
                <div className='h-[250px] lg:h-[50px] w-[10px] lg:w-[5px] bg-[#DA0C0C] mt-auto'></div>
                <div className='h-fit w-full pl-6 gap-4 flex flex-col'>
                    <div className='h-[200px] md:h-[250px] w-full  bg-gray-50 overflow-hidden'>
                        <img src={c} alt='' className='h-full w-full object-cover' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='text-center text-sm font-medium'>Level 4 and 5 Diploma in Business Management</p>
                        <p className='text-center text-2xl font-bold mt-4'>Earn your secound Higher Diploma</p>
                    </div>
                </div>
            </div>
            <div className='h-fit w-full max-w-[1024px] mx-auto px-6 flex lg:flex-col '>
                <div className='min-h-full w-[10px] lg:min-h-[5px] lg:max-h-[5px] lg:h-[5px] lg:min-w-full lg:w-full bg-[#DA0C0C]'></div>
                <div className='h-fit w-full gap-4 grid grid-cols-1 lg:grid-cols-5 py-8 lg:py-0 lg:pb-8'>

                    <div className='h-fit w-full gap-2 flex lg:flex-col items-center'>
                        <div className='h-[5px] lg:h-[25px] w-[25px] lg:w-[5px] bg-[#DA0C0C]'></div>
                        <div className='h-fit w-full gap-4 flex flex-col'>
                            <div className='h-[200px] lg:h-[150px] w-full  bg-gray-50 rounded-[8px] overflow-hidden'>
                                <img src={c} alt='' className='h-full w-full object-cover' />
                            </div>
                            <p className='text-left text-sm font-medium'>Level 4 and 5 Diploma in Business Management</p>
                        </div>
                    </div>

                    <div className='h-fit w-full gap-2 flex lg:flex-col items-center'>
                        <div className='h-[5px] lg:h-[25px] w-[25px] lg:w-[5px] bg-[#DA0C0C]'></div>
                        <div className='h-fit w-full gap-4 flex flex-col'>
                            <div className='h-[200px] lg:h-[150px] w-full  bg-gray-50 rounded-[8px] overflow-hidden'>
                                <img src={c} alt='' className='h-full w-full object-cover' />
                            </div>
                            <p className='text-left text-sm font-medium'>Level 4 and 5 Diploma in Business Management</p>
                        </div>
                    </div>

                    <div className='h-fit w-full gap-2 flex lg:flex-col items-center'>
                        <div className='h-[5px] lg:h-[25px] w-[25px] lg:w-[5px] bg-[#DA0C0C]'></div>
                        <div className='h-fit w-full gap-4 flex flex-col'>
                            <div className='h-[200px] lg:h-[150px] w-full  bg-gray-50 rounded-[8px] overflow-hidden'>
                                <img src={c} alt='' className='h-full w-full object-cover' />
                            </div>
                            <p className='text-left text-sm font-medium'>Level 4 and 5 Diploma in Business Management</p>
                        </div>
                    </div>

                    <div className='h-fit w-full gap-2 flex lg:flex-col items-center'>
                        <div className='h-[5px] lg:h-[25px] w-[25px] lg:w-[5px] bg-[#DA0C0C]'></div>
                        <div className='h-fit w-full gap-4 flex flex-col'>
                            <div className='h-[200px] lg:h-[150px] w-full  bg-gray-50 rounded-[8px] overflow-hidden'>
                                <img src={c} alt='' className='h-full w-full object-cover' />
                            </div>
                            <p className='text-left text-sm font-medium'>Level 4 and 5 Diploma in Business Management</p>
                        </div>
                    </div>

                    <div className='h-fit w-full gap-2 flex lg:flex-col items-center'>
                        <div className='h-[5px] lg:h-[25px] w-[25px] lg:w-[5px] bg-[#DA0C0C]'></div>
                        <div className='h-fit w-full gap-4 flex flex-col'>
                            <div className='h-[200px] lg:h-[150px] w-full  bg-gray-50 rounded-[8px] overflow-hidden'>
                                <img src={c} alt='' className='h-full w-full object-cover' />
                            </div>
                            <p className='text-left text-sm font-medium'>Level 4 and 5 Diploma in Business Management</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </div>
  )
}

export default DQSecondPage