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
import  dqb  from '../assets/dqb.jpg'

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

import Marquee from "react-fast-marquee";
import { getDualQualificationList } from '../actions/courseActions';

const DualQualificationScreen = () => {

    const dispatch = useDispatch()
    const history = useNavigate()
    const location = useLocation()

    const dualQualificationList = useSelector(state => state.dualQualificationList)
    const { error, loading, dualQualifications } = dualQualificationList 

    useEffect(() => {
      dispatch(getDualQualificationList())
    }, [dispatch])

  return (
    <div className='max-w-screen flex flex-col gap-4 pb-12 overflow-x-hidden -mb-[90px]'>
        <div className='h-[75px] w-full mt-[90px] bg-[#DA0C0C] flex items-center justify-center'>      
          <Marquee autoFill={true}  speed={65}>
            <p className='text-white text-2xl font-bold mx-14'>Dual Qualification</p>
          </Marquee>
        </div>
        {
          loading?
          <div className='max-w-screen flex flex-col gap-4 pb-12 overflow-x-hidden'>
              <section className='h-fit w-full relative overflow-hidden '>
                  <div className='h-fit w-full max-w-[1024px] items-center mx-auto px-6 gap-2 grid grid-cols-1 md:grid-cols-2'>
                    <div className='h-fit w-full '>
                        <Skeleton className='rounded-[8px]'>
                          <Link  to={'/dual/learnmore'}>
                            <img src={dq} alt='' className='h-full md:h-[400px] w-full md:w-fit object-contain'  />
                          </Link>
                        </Skeleton>
                    </div>
                    <div className='h-fit flex flex-col gap-4 '>
                      <Skeleton className='rounded-[8px]'>
                        <p className='text-4xl font-bold text-black'>Dual Qualification</p>
                      </Skeleton>
                      <Skeleton className='rounded-[8px]'>
                        <p className='text-xl font-bold text-[#DA0C0C] underline'>BM+ HTM | MRK | HRM |LSCM | AF</p>
                      </Skeleton>
                      <Skeleton className='rounded-[8px]'>
                        <p className='text-sm text-black opacity-75'>Pathway to Expertise The Dual Qualification program offers learners a flexible and comprehensive educational path by combining Level 4 and 5 Higher Diploma studies. Upon completion of Level 4 and 5 Diploma in Business Management, students can choose to specialize in various fields, tailoring their education to their career goals. This innovative Pathway to Expertise marks the program as a pioneering initiative in education.
                        </p>
                      </Skeleton>
                      <Skeleton className='rounded-[8px]'>
                        <Link to={'/dual/learnmore'}>
                          <Button className='bg-[#DA0C0C] w-fit text-white'>
                            Learn more
                          </Button>
                        </Link>
                      </Skeleton>
                    </div>
                  </div>
              </section>
              <div className='h-[75px] w-full bg-[#DA0C0C] flex items-center justify-center'>      
                <Marquee autoFill={true}  speed={65}>
                  <p className='text-white text-2xl font-bold mx-14'>Dual Qualification</p>
                </Marquee>
              </div>
          </div>:
          dualQualifications?
          dualQualifications.map(i => (
            <div key={i.id} className='max-w-screen flex flex-col gap-4 pb-12 overflow-x-hidden'>
              <section className='h-fit w-full relative overflow-hidden '>
                  <div className='h-fit w-full max-w-[1024px] items-center mx-auto px-6 gap-2 grid grid-cols-1 md:grid-cols-2'>
                    <div className='h-fit w-full '>
                        <Link  to={`/dual/${i.slug}`}>
                          <img src={i.image} alt='' className='h-full md:h-[400px] w-full md:w-fit object-contain'  />
                        </Link>
                    </div>
                    <div className='h-fit flex flex-col gap-4 '>
                      <p className='text-4xl font-bold text-black'>Dual Qualification</p>
                      <p className='text-xl font-bold text-[#DA0C0C] underline'>{i.title}</p>
                      <p className='text-sm text-black opacity-75'>{parse(i.description)}</p>
                      <Link to={`/dual/qualification/${i.slug}`}>
                        <Button className='bg-[#DA0C0C] w-fit text-white'>
                          Learn more
                        </Button>
                      </Link>
                    </div>
                  </div>
              </section>
              <div className='h-[75px] w-full bg-[#DA0C0C] flex items-center justify-center'>      
                <Marquee autoFill={true}  speed={65}>
                  <p className='text-white text-2xl font-bold mx-14'>Dual Qualification</p>
                </Marquee>
              </div>
            </div>
          ))
          :
          ''
        }
        {/* <div className='h-[75px] w-full bg-[#DA0C0C] flex items-center justify-center'>      
          <Marquee autoFill={true}  speed={65}>
            <p className='text-white text-2xl font-bold mx-14'>Dual Qualification</p>
          </Marquee>
        </div>
        <section className='h-fit w-full relative overflow-hidden '>
            <div className='h-fit w-full max-w-[1024px] items-center mx-auto px-6 gap-2 grid grid-cols-1 md:grid-cols-2'>
              <div className='h-fit w-full '>
                  <Link  to={'/dual/learnmore'}>
                    <img src={dqb} alt='' className='h-full md:h-[400px] w-full md:w-fit object-contain'  />
                  </Link>
              </div>
              <div className='h-fit flex flex-col gap-4 '>
                <p className='text-4xl font-bold text-black'>Dual Qualification</p>
                <p className='text-xl font-bold text-[#DA0C0C] underline'>TT + ECE | PSY </p>
                <p className='text-sm text-black opacity-75'>Pathway to Expertise The Dual Qualification program offers learners a flexible and comprehensive educational path by combining Level 4 and 5 Higher Diploma studies. Upon completion of Level 4 and 5 Diploma in Teacher Training, students can choose to specialize in related fields such as Psychology and Early Childhood Education, tailoring their education to their career goals. This innovative Pathway to Expertise marks the program as a pioneering initiative in education.</p>
                <Link to={'/dual/learnmore'}>
                  <Button className='bg-[#DA0C0C] w-fit text-white'>
                    Learn more
                  </Button>
                </Link>
              </div>
            </div>
        </section>
        <div className='h-[75px] w-full bg-[#DA0C0C] flex items-center justify-center'>      
          <Marquee autoFill={true}  speed={65}>
            <p className='text-white text-2xl font-bold mx-14'>Dual Qualification</p>
          </Marquee>
        </div> */}
     

        
      
    </div>
  )
}

export default DualQualificationScreen



// <div className='h-[400px] lg:h-[500px] w-full object-cover object-bottom absolute z-0 blur-md'>
//             <Swiper
//               slidesPerView={1}
//               spaceBetween={10}
//               pagination={{
//                 clickable: true,
//               }}
//               modules={[ Autoplay]}
//               className="w-full"
//               autoplay
//             >
//               <SwiperSlide className='w-full h-full object-contain'>
//                 <img src='https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' className='h-[600px] xl:h-[500px] w-full object-cover object-bottom'/>
//               </SwiperSlide>
//               <SwiperSlide className='w-full h-full object-contain'>
//                 <img src='https://media.istockphoto.com/id/1307457391/photo/happy-black-student-raising-arm-to-answer-question-while-attending-class-with-her-university.jpg?s=612x612&w=0&k=20&c=iZaZFyC-WqlqSQc4elqUNPTxLvWPe8P5Tb_YdZnrI9Q=' alt='' className='h-[600px] xl:h-[500px] w-full object-cover object-center'/>
//               </SwiperSlide>
//               {/* <SwiperSlide className='w-full h-full object-contain'>
//                 <img src='https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' className='h-[500px] w-full object-cover object-bottom'/>
//               </SwiperSlide> */}
//             </Swiper>
//           </div>

//           <div className='h-fit mt-[100px] w-full max-w-[1024px]  relative z-30 px-6 mx-auto object-cover object-bottom flex flex-col md:flex-row items-center py-4'>
//             <div className='h-fit w-full max-w-[1024px] items-center mx-auto px-6 gap-2 grid grid-cols-1 md:grid-cols-2'>
//               <div className='h-fit w-full '>
//                   <img src={dq} alt='' className='h-[300px] lg:h-[400px] w-fit object-contain'  />
//               </div>
//               <div className='h-fit px-8 py-6 backdrop-blur-2xl rounded-[8px] flex flex-col gap-4'>
//                 <p className='text-4xl font-bold text-white'>Dual Qualification</p>
//                 <p className='text-sm text-white opacity-75'>Pathway to Expertise
//                 The Dual Qualification program offers learners a flexible and comprehensive educational path by combining Level 4 and 5 Higher Diploma studies. Upon completion, students can choose to specialize in various fields, tailoring their education to their career goals. This innovative Pathway to Expertise marks the program as a pioneering initiative in education.</p>
//                 <Link to={'/dual/learnmore'}>
//                   <Button className='bg-[#DA0C0C] w-fit text-white'>
//                     Learn more
//                   </Button>
//                 </Link>
//               </div>
//             </div>
//           </div>