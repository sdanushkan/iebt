import React, { useEffect, useState } from 'react'
import {Input, Popover, PopoverContent, PopoverTrigger, Skeleton, navbar} from "@nextui-org/react";
import { VscSymbolKeyword, VscVerifiedFilled } from "react-icons/vsc";
import {Button} from "@nextui-org/button";
import { IoSearch } from "react-icons/io5";
import { AiFillSignal } from "react-icons/ai";
import { BsBookmarksFill } from "react-icons/bs";
import { Faqualification, FaHandHoldingUsd, FaSearchLocation } from "react-icons/fa";
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
import _ from 'lodash';
import { TypeAnimation } from 'react-type-animation';
import { FiSearch } from "react-icons/fi";
import  apply  from '../assets/apply.png'
import  verification  from '../assets/verification.png'
import  sp  from '../assets/sp.png'
import  es  from '../assets/es.png'
import {Tooltip} from "@nextui-org/react";
import ReactWhatsapp from 'react-whatsapp';
import parse from 'html-react-parser';
import YouTube from 'react-youtube';
import { format } from 'date-fns';
import ugc from '../assets/UGC.png'
import wes from '../assets/WES.png'
import inquiry from '../assets/inquiry.svg'
import ofqual from '../assets/Ofqual.svg'

import h2 from '../assets/h2.jpg'
import sa1 from '../assets/sa1.jpg'
import sa2 from '../assets/sa2.jpg'

import BANNER01 from '../assets/BANNER-01.jpg'
import BANNER02 from '../assets/BANNER-02.jpg'
import BANNER03 from '../assets/BANNER-03.jpg'
import BANNER04 from '../assets/BANNER-04.jpg'
import BANNER05 from '../assets/BANNER-05.jpg'
import BANNER06 from '../assets/BANNER-06.jpg'
import BANNER07 from '../assets/BANNER-07.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import {  Autoplay, FreeMode } from 'swiper/modules';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getpopularCourseList, getLevelList, getPopularpopularCourseList, getPopularCourseList, getOurQualificationList, getEventList } from '../actions/courseActions';
import { FaArrowRightArrowLeft } from 'react-icons/fa6';
import { getTestimonialList } from '../actions/abroadActions';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const HomeScreen = () => {
    const [keyword, setKeyword] = useState('')
    const [faculty, setFaculty] = useState('faculties')
    const [programe, setPrograme] = useState('programes')
    const [qualification, setQualification] = useState('qualifications')
    const [credit, setCredit] = useState('credits')

    const [value, setValue] = useState(new Date());
    const [events, setEvents] = useState([
      { date: new Date(2024, 6, 7), event: 'anniversary' },
      { date: new Date(2024, 7, 13), event: 'anniversary' },
    ]);

    const onChange = (nextValue) => {
      setValue(nextValue);
    };

    const tileContent = ({ date, view }) => {
      const event = events.find(e => e.date.toDateString() === date.toDateString());
      return event && view === 'month' ? <p>{event.event}</p> : null;
    };

    const dispatch = useDispatch()
    const history = useNavigate()
    const location = useLocation()

    const eventList = useSelector(state => state.eventList)
    const { error: eventListError, loading: eventListLoading, eventse } = eventList

    const levelList = useSelector(state => state.levelList)
    const { error, loading, levels } = levelList

    const testimonialList = useSelector(state => state.testimonialList)
    const { error: testimonialListError, loading: testimonialListLoading, testimonials } = testimonialList

    const popularCourseList = useSelector(state => state.popularCourseList)
    const { error: popularCourseListError, loading: popularCourseListLoading, courses } = popularCourseList

    const facultyList = useSelector(state => state.facultyList)
    const { error:facultyListError, loading:facultyListLoading, faculties } = facultyList

    const ourQualificationList = useSelector(state => state.ourQualificationList)
    const { error:ourQualificationListError, loading:ourQualificationListLoading, qualifications } = ourQualificationList
    
    useEffect(() => {
      if(!courses){
        dispatch(getPopularCourseList())
      }

      

      if(!qualifications){
        dispatch(getOurQualificationList())
      }

      if(!eventse){
        dispatch(getEventList('home')) 
      }
            
    }, [dispatch, courses, testimonials, qualifications, eventse])


    useEffect(() => {
      dispatch(getTestimonialList('home'))
    }, [dispatch])
    

    const opts = {
      height: '200',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        controls:0,
      },
    };

    // const submitHandler = () => {
    //   history(`${faculty}/${programe}/${qualification}/${credit}`)
    // } 

    useEffect(() => {
      window.scroll(0,0);
    }, [location]);
    

  return (
    <div className='w-full flex flex-col gap-2 pt-[85px]'>
      
      <section className='w-full relative overflow-hidden'>

        <div className='w-full object-cover object-bottom '>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            modules={[ Autoplay]}
            className="h-fit w-full"
            autoplay
          >
            <SwiperSlide className='max-h-fit w-full object-contain'>
              <img src={BANNER01} alt='' className='max-h-fit w-full object-contain object-center'/>
            </SwiperSlide>

            <SwiperSlide className='max-h-fit w-full object-contain'>
              <img src={BANNER02} alt='' className='max-h-fit w-full object-contain object-center'/>
            </SwiperSlide> 

            <SwiperSlide className='max-h-fit w-full object-contain'>
              <img src={BANNER03} alt='' className='max-h-fit w-full object-contain object-center'/>
            </SwiperSlide>

            <SwiperSlide className='max-h-fit w-full object-contain'>
              <img src={BANNER04} alt='' className='max-h-fit w-full object-contain object-center'/>
            </SwiperSlide> 

            <SwiperSlide className='max-h-fit w-full object-contain'>
              <img src={BANNER05} alt='' className='max-h-fit w-full object-contain object-center'/>
            </SwiperSlide> 

            <SwiperSlide className='max-h-fit w-full object-contain'>
              <img src={BANNER06} alt='' className='max-h-fit w-full object-contain object-center'/>
            </SwiperSlide>

            <SwiperSlide className='max-h-fit w-full object-contain'>
              <img src={BANNER07} alt='' className='max-h-fit w-full object-contain object-center'/>
            </SwiperSlide>
            
          </Swiper>
        </div>

      </section>

      <section className='w-full relative overflow-hidden '>
        <div className='h-fit w-full max-w-[1024px] mx-auto relative pt-[20px]'>
          <form className='bg-white shadow-[0px_5px_25px_rgba(0,0,0,0.05)] h-fit w-full z-20 mt-auto  px-6 md:px-12 py-8 flex flex-col gap-4 rounded-[8px]'>
              <div className='flex flex-row  gap-6 items-center justify-between'>
                <div className='w-full max-w-[500px]'>
                  <p className='text-xl font-bold text-[#DA0C0C] text-left'>Search Course</p>
                  <p className='text-xs text-gray-500'>Search And Filter our courses</p>
                </div>
                <div>
                  <Link to={`courses/${faculty}/${programe}/${qualification}/${credit}`} color='' className="flex bg-[#DA0C0C] text-xs lg:text-sm text-white px-4 md:px-5 py-2 md:py-3 rounded-full w-fit">
                    <p>Search</p>
                  </Link>
                </div>
              </div>
              <div className='flex flex-col md:flex-row items-center justify-between gap-2'>
                <div className='w-full grid grid-cols-2 md:flex lg:flex-row gap-2'>
                  <Select
                    variant={'flat'}
                    required
                    placeholder="Faculty"
                    className='w-full shadow-none rounded-none outline-none'
                    radius='sm'
                    size='md'
                    
                  >
                    {
                      loading?
                      '':
                      faculties?
                      faculties.map((i) => (
                        <SelectItem onClick={()=> setFaculty(`${i.slug}`)} value={i.slug} key={i.slug}>
                          {i.name}
                        </SelectItem>
                      ))
                      :
                      ''
                    }
                  </Select>

                  <Select
                    variant={'flat'}
                    required
                    placeholder="Programme"
                    className='w-full shadow-none rounded-none outline-none'
                    radius='sm'
                    size='md'
                    
                  >
                    {
                      loading?
                      '':
                      levels?
                      levels.map((i) => (
                        <SelectItem onClick={()=> setPrograme(`${i.slug}`)} value={i.slug} key={i.slug}>
                          {i.name}
                        </SelectItem>
                      ))
                      :
                      ''
                    }
                  </Select>
                </div>
                <div className='w-full flex lg:flex-row gap-2'>
                  <Select
                    variant={'flat'}
                    placeholder="Course qualification"
                    className='w-full shadow-none rounded-none outline-none'
                    radius='sm'
                    size='md'
                  >
                    {
                      ourQualificationListLoading?
                      '':
                      qualifications?
                      qualifications.map((i) => (
                        <SelectItem onClick={()=> setQualification(`${i.slug}`)} value={i.slug} key={i.slug}>
                          {i.name}
                        </SelectItem>
                      ))
                      :
                      ''
                    }
                  </Select>
                  <Select
                    variant={'flat'}
                    placeholder="Course credits"
                    className='w-full shadow-none rounded-none outline-none'
                    radius='sm'
                    size='md'
                  
                  >
                    {
                      popularCourseListLoading?
                      '':
                      courses?
                      _.uniqBy(courses, 'course_credit').map((i) => (
                        <SelectItem onClick={()=> setQualification(`${i.slug}`)} value={i.slug} key={i.slug}>
                          {i.course_credit}
                        </SelectItem>
                      ))
                      :
                      ''
                    }
                  </Select>
                </div>
              </div>
          </form>
        </div>
      </section>

      <section className='h-fit w-full relative overflow-hidden py-2'>
        <div className='h-fit w-full max-w-[1024px] mx-auto grid grid-cols-2 md:flex justify-center px-6 lg:px-0 gap-2 lg:gap-6'>
            <Link to={'/application'} className='w-full max-w-1/2 md:max-w-1/3 lg:max-w-1/5  h-full md:h-48 flex flex-col items-center justify-center gap-4 bg-white text-black duration-200 cursor-pointer hover:text-[#DA0C0C] p-10 rounded-[8px] shadow-[0px_4px_25px_rgba(0,0,0,0.05)] hover:shadow-[0px_4px_25px_rgba(0,0,0,0.075)] '>
              <img src={apply}  alt='' className='w-16 object-contain' />
              <p className='text-xs lg:text-sm font-semibold px-2 text-center'>Apply</p>
            </Link>
            <Link to={'/verify'} className='w-full max-w-1/2 md:max-w-1/3 lg:max-w-1/5  h-full md:h-48 flex flex-col items-center justify-center gap-4 bg-white text-black duration-200 cursor-pointer hover:text-[#DA0C0C] p-10 rounded-[8px] shadow-[0px_4px_25px_rgba(0,0,0,0.05)] hover:shadow-[0px_4px_50px_rgba(0,0,0,0.075)]'>
              <img src={verification}  alt='' className='w-16 object-contain' />
              <p className='text-xs lg:text-sm font-semibold px-2 text-center'>Verify Certificate</p>
            </Link>
            <Link to={'/student/portal'} className='w-full max-w-1/2 md:max-w-1/3 lg:max-w-1/5  h-full md:h-48 flex flex-col items-center justify-center gap-4 bg-white text-black duration-200 cursor-pointer hover:text-[#DA0C0C] p-10 rounded-[8px] shadow-[0px_4px_25px_rgba(0,0,0,0.05)] hover:shadow-[0px_4px_50px_rgba(0,0,0,0.075)]'>
              <img src={sp}  alt='' className='w-16 object-contain' />
              <p className='text-xs lg:text-sm font-semibold px-2 text-center'>Student Portal</p>
            </Link>
            <Link to={'/e_library'} className='w-full max-w-1/2 md:max-w-1/3 lg:max-w-1/5  h-full md:h-48 flex flex-col items-center justify-center gap-4 bg-white text-black duration-200 cursor-pointer hover:text-[#DA0C0C] p-10 rounded-[8px] shadow-[0px_4px_25px_rgba(0,0,0,0.05)] hover:shadow-[0px_4px_50px_rgba(0,0,0,0.075)]'>
              <img src={es}  alt='' className='w-16 object-contain' />
              <p className='text-xs lg:text-sm font-semibold px-2 text-center'>E library</p>
            </Link>             
        </div>
      </section>

      <section className='h-fit w-full relative overflow-hidden px-8'>
        <div className='h-fit w-full max-w-[1024px] mx-auto justify-center gap-2'>
            <div className='flex flex-col'>
              <p className='uppercase text-xs text-center'>Faculty</p>
              <p className='text-2xl lg:text-4xl font-bold text-center'>Our Faculty</p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-8 gap-4'>
              {
                facultyListLoading?
                ''
                :
                faculties?
                faculties.map(i => (
                  <Link to={`faculty/courses/${i.slug}/programes/awards/credits`} className='h-[150px] md:h-[200px] w-full bg-black relative rounded-[16px] overflow-hidden'>
                    <img src={i.image} alt='' className='h-full w-full relative z-0' />
                    <div className='w-full h-full bg-black/20 absolute z-30 top-0 hover:bg-black/30 duration-200'>
                    </div>
                    <div className='h-fit w-full py-2 px-2 absolute bottom-0 z-40'>
                      <div className='h-fit w-full p-2 backdrop-blur-md rounded-[8px]'>
                        <p className='text-white font-medium text-xs sm:text-sm capitalize'>Faculty of</p>
                        <p className='text-white font-bold sm:text-lg capitalize'>{i.name}</p>
                      </div>
                    </div>
                  </Link>
                ))
                :
                ""
              }
            </div>
        </div>
      </section>

      <section className='h-fit w-full relative px-8'>
        <div className='h-fit w-full max-w-[1024px] mx-auto justify-center gap-6'>
            <div className='flex flex-col'>
              <p className='uppercase text-xs text-center'>Courses</p>
              <p className='text-2xl lg:text-4xl font-bold text-center'>Popular courses</p>
            </div>
            {
              popularCourseListLoading?
              '':
              courses?
              <div className='hidden xl:block'>
                <Swiper
                  slidesPerView={4}
                  spaceBetween={10}
                  
                  modules={[ Autoplay]}
                  className="w-full"
                  autoplay
                >
                  {
                    courses.map(i =>(
                      <SwiperSlide className='bg-red-50 rounded-[16px] mt-[24px] mb-[48px] '>
                        <Link to={`/courses/${i.slug}`} className='flex flex-col min-w-full p-2 gap-2'>
                          <div className='h-[150px] w-full overflow-hidden rounded-[8px]'>
                            <img src={i.image} alt='' className='h-[150px] hover:scale-105 duration-200 w-full object-cover rounded-[8px] border-[1px]' />
                          </div>
                          <div className='flex flex-col py-2 gap-2 px-1'>
                            <p className='text-sm font-medium capitalize text-gray-500'>{i.programme.name}</p>
                            <p className='font-bold capitalize'>{i.name}</p>
                            <p className='font-semibold text-xs uppercase text-[#DA0C0C]'>{i.qualification.name}</p>
                          </div>
                          <div className='flex flex-wrap gap-1'>
                            <div className='flex bg-white text-sm text-gray-500 px-2 md:px-5 py-2 md:py-2 rounded-full capitalize'>
                              online
                            </div>
                            <div className='flex bg-white text-sm text-gray-500 px-2 md:px-5 py-2 md:py-2 rounded-full capitalize'>
                              4 months
                            </div>
                          </div>
                        </Link>
                      </SwiperSlide>
                    ))
                  }
                  
                </Swiper>    
              </div>:
              ''
              }

            {
              popularCourseListLoading?
              '':
              courses?
              <div className='hidden lg:block xl:hidden'>
                <Swiper
                  slidesPerView={3}
                  spaceBetween={10}
                  
                  modules={[ Autoplay]}
                  className="w-full"
                  autoplay
                >
                  {
                    courses.map(i =>(
                      <SwiperSlide className='bg-red-50 rounded-[16px] mt-[24px] mb-[48px] '>
                        <Link to={`/courses/${i.slug}`} className='flex flex-col min-w-full p-2 gap-2'>
                          <div className='h-[150px] w-full overflow-hidden rounded-[8px]'>
                            <img src={i.image} alt='' className='h-[150px] hover:scale-105 duration-200 w-full object-cover rounded-[8px] border-[1px]' />
                          </div>
                          <div className='flex flex-col py-2 gap-2 px-1'>
                            <p className='text-sm font-medium capitalize text-gray-500'>{i.programme.name}</p>
                            <p className='font-bold capitalize'>{i.name}</p>
                            <p className='font-semibold text-xs uppercase text-[#DA0C0C]'>{i.qualification.name}</p>
                          </div>
                          <div className='flex flex-wrap gap-1'>
                            <div className='flex bg-white text-sm text-gray-500 px-2 md:px-5 py-2 md:py-2 rounded-full capitalize'>
                              online
                            </div>
                            <div className='flex bg-white text-sm text-gray-500 px-2 md:px-5 py-2 md:py-2 rounded-full capitalize'>
                              4 months
                            </div>
                          </div>
                        </Link>
                      </SwiperSlide>
                    ))
                  }
                  
                </Swiper>    
              </div>:
              ''
            }
            

            {
              popularCourseListLoading?
              '':
              courses?
              <div className='hidden sm:block lg:hidden'>
                <Swiper
                  slidesPerView={2}
                  spaceBetween={10}
                  
                  modules={[ Autoplay]}
                  className="w-full"
                  autoplay
                >
                  {
                    courses.map(i =>(
                      <SwiperSlide className='bg-red-50 rounded-[16px] mt-[24px] mb-[48px] '>
                        <Link to={`/courses/${i.slug}`} className='flex flex-col min-w-full p-2 gap-2'>
                          <div className='h-[150px] w-full overflow-hidden rounded-[8px]'>
                            <img src={i.image} alt='' className='h-[150px] hover:scale-105 duration-200 w-full object-cover rounded-[8px] border-[1px]' />
                          </div>
                          <div className='flex flex-col py-2 gap-2 px-1'>
                            <p className='text-sm font-medium capitalize text-gray-500'>{i.programme.name}</p>
                            <p className='font-bold capitalize'>{i.name}</p>
                            <p className='font-semibold text-xs uppercase text-[#DA0C0C]'>{i.qualification.name}</p>
                          </div>
                          <div className='flex flex-wrap gap-1'>
                            <div className='flex bg-white text-sm text-gray-500 px-2 md:px-5 py-2 md:py-2 rounded-full capitalize'>
                              online
                            </div>
                            <div className='flex bg-white text-sm text-gray-500 px-2 md:px-5 py-2 md:py-2 rounded-full capitalize'>
                              4 months
                            </div>
                          </div>
                        </Link>
                      </SwiperSlide>
                    ))
                  }
                  
                </Swiper>    
              </div>:
              ''
            }
            

            {
              popularCourseListLoading?
              '':
              courses?
              <div className='block sm:hidden'>
                <Swiper
                  slidesPerView={1}
                  spaceBetween={10}
                  
                  modules={[ Autoplay]}
                  className="w-full"
                  autoplay
                >
                  {
                    courses.map(i =>(
                      <SwiperSlide className='bg-red-50 rounded-[16px] mt-[24px] mb-[48px] '>
                        <Link to={`/courses/${i.slug}`} className='flex flex-col min-w-full p-2 gap-2'>
                          <div className='h-[150px] w-full overflow-hidden rounded-[8px]'>
                            <img src={i.image} alt='' className='h-[150px] hover:scale-105 duration-200 w-full object-cover rounded-[8px] border-[1px]' />
                          </div>
                          <div className='flex flex-col py-2 gap-2 px-1'>
                            <p className='text-sm font-medium capitalize text-gray-500'>{i.programme.name}</p>
                            <p className='font-bold capitalize'>{i.name}</p>
                            <p className='font-semibold text-xs uppercase text-[#DA0C0C]'>{i.qualification.name}</p>
                          </div>
                          <div className='flex flex-wrap gap-1'>
                            <div className='flex bg-white text-sm text-gray-500 px-2 md:px-5 py-2 md:py-2 rounded-full capitalize'>
                              online
                            </div>
                            <div className='flex bg-white text-sm text-gray-500 px-2 md:px-5 py-2 md:py-2 rounded-full capitalize'>
                              4 months
                            </div>
                          </div>
                        </Link>
                      </SwiperSlide>
                    ))
                  }
                </Swiper>    
              </div>:
              ''
            }
        </div>
      </section>

      <section className='h-fit w-full relative overflow-hidden px-6 bg-red-50 py-4 lg:py-12'>
        <div className='h-fit w-full max-w-[1024px] mx-auto justify-center gap-6 '>
          <div className='flex flex-col pb-8'>
            <p className='uppercase text-xs text-center'>Unlock Your Future</p>
            <p className='text-2xl lg:text-4xl font-bold text-[#DA0C0C] text-center'>Available Scholarships</p>
          </div>
          <div className='w-fit mx-auto flex flex-wrap justify-center gap-2 sm:gap-4'>
            {
              loading?
              ''
              :
              levels?
              levels.map(i => (
                <ReactWhatsapp number="+94778289898" message={`${i.name}`} className='h-fit w-fit mx-auto flex flex-col items-center relative '>
                   <div className='h-[72px] w-16 sm:w-28 flex flex-col items-center justify-center bg-white rounded-[8px] relative z-30 hover:scale-105 duration-300'>
                      <p className='text-[#DA0C0C] text-center text-2xl font-bold'>{i.offers}</p>
                      <p className='text-[#DA0C0C] text-center text-xs font-medium'>Special offer</p>
                    </div> 
                    <div className='h-16 w-24 md:w-36 sm:w-40 flex items-center justify-center text-white font-bold text-center relative z-30 text-xs px-4'>
                        {i.name}
                    </div>
                    <button className='h-[90px] w-full bg-[#DA0C0C] hover:h-full duration-500 absolute bottom-0 z-10 rounded-[8px]'>

                    </button>
                </ReactWhatsapp>
                // <Link to={`programes/${i.slug}`} key={i.id} className='w-full min-h-[250px] md:min-h-[300px] bg-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] hover:shadow-[0px_4px_50px_rgba(0,0,0,0.05)] p-6  md:max-w-[300px] gap-8 flex flex-col rounded-[8px] relative overflow-hidden mx-auto hover:bg-[#DA0C0C] duration-500 hover:text-[#DA0C0C] hover:scale-105'>
                //   <div className='w-full flex flex-col relative z-30'>
                //     <p className='text-5xl font-bold capitalize'>{i.name}</p>
                //   </div>
                //   <div className='flex items-center gap-4 relative z-30'>
                //     <Button radius='full' isIconOnly variant='solid' className='bg-red-600 text-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] hover:shadow-[0px_4px_50px_rgba(0,0,0,0.05)] ' startContent={<IoArrowForwardOutline/>}>

                //     </Button>
                //     <p className='text-xs text-gray-300'>Learn more</p>
                //   </div>
                //   <div className='h-[300px] w-[300px] bg-[#DA0C0C] absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 rounded-full flex items-start justify-start z-0'>
                //     <div className='h-[150px] w-[150px] flex flex-col items-end justify-center text-white text-right pr-4'>
                //       <p className='text-4xl font-bold'>25%</p>
                //       <p className='text-xs'>Special offer</p>
                //     </div>
                //   </div>
                // </Link>
              ))
              :
              ''
            }
          </div>
        </div>
      </section>

      <section className='min-h-fit h-[500px] w-full relative px-8 lg:py-6 bg-cover bg-bottom ' >
        <img src='https://upload.wikimedia.org/wikipedia/commons/c/cd/University-of-Alabama-EngineeringResearchCenter-01.jpg' alt='' className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-full z-0 opacity-25' />
        <div className='h-fit min-h-fit w-full max-w-[900px] mx-auto justify-center gap-6 grid grid-col-1 lg:grid-cols-2 divide-y-1 lg:divide-x-1 lg:divide-y-0 divide-[#DA0C0C] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'>
          <div className='w-full h-fit flex-col gap-4 pt-4 lg:pt-0 hidden lg:flex my-auto'>
            <p className='text-2xl font-bold text-[#DA0C0C] text-center '>IEBC Provides an extensive number of Programmes from Foundation to Masters which is regulated by UK Government qualificationing Body</p>
          </div>
          <div className='w-full h-fit flex flex-col gap-4  px-6 pt-4 lg:pt-0 lg:pl-12'>
            <p className='text-2xl font-bold text-center '>Your inspiration our Motivation</p>
            <p className='text-sm text-gray-700 font-medium text-left'>Students deserve to dream, to be inspired and gain knowledge, as a  college it is our duty to fulfill our student’s inspirations. IEBC is  here to guide students all the way through their studies and career.  Your Inspiration is our motivation.Students deserve to dream, to be inspired and gain knowledge, as a  college it is our duty to fulfill our student’s inspirations. IEBC is  here to guide students all the way through their studies and career.  Your Inspiration is our motivation.</p>
          </div>
          <div className='w-full h-fit flex flex-col gap-4 pt-4 lg:pt-0 lg:hidden'>
            <p className='text-2xl font-bold text-[#DA0C0C] text-center '>IEBC Provides an extensive number of Programmes from Foundation to Masters which is regulated by UK Government qualificationing Body</p>
          </div>
        </div>
      </section>

      <section className='h-fit w-full relative overflow-hidden px-8 bg-red-50 py-12 lg:py-16'>
        <div className='h-fit w-full max-w-[1024px] mx-auto justify-center gap-6 '>
          <div className='flex flex-col pb-8'>
            <p className='uppercase text-xs text-center'>Questions</p> 
            <p className='text-2xl lg:text-4xl font-bold text-center'>Why Learn with us?</p>
          </div>
          <div className='hidden w-full mx-auto lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-4 place-content-evenly'>

            <Tooltip showArrow={true} content={
              <div className='p-4 max-w-[500px] '>
                University pathway programmes are designed to help our students transition smoothly into higher education. These programmes offer tailored support in academic skills, English language proficiency,and cultural adaptation, ensuring students are well-prepared for their chosen degree courses.
              </div>
            } placement='bottom'>
              <div className='h-[175px] w-full min-w-full border-[1px] border-gray-300 rounded-[8px] flex  flex-col items-center justify-center gap-2 px-8 mx-auto'>
                <img src='https://d65ixtnmlqq6w.cloudfront.net/wp-content/uploads/2023/11/diploma_12608865.webp' alt='' className='h-[40px] md:h-[80px] w-[40px] md:w-[80px] object-cover'/>
                <p className='text-sm md:text-base font-bold text-center '>University Pathway Programmes</p>
              </div>
            </Tooltip>

            <Tooltip showArrow={true} content={
              <div className='p-4 max-w-[500px] '>
                Our professional development resources provide students with access to workshops, seminars, and online courses aimed at enhancing their career skills. Topics include leadership, project management, and industry-specific knowledge, all designed to support continuous learning and career advancement.
              </div>
            } placement='bottom'>
              <div className='h-[175px] w-full min-w-full border-[1px] border-gray-300 rounded-[8px] flex  flex-col items-center justify-center gap-2 px-8 mx-auto'>
                <img src='https://d65ixtnmlqq6w.cloudfront.net/wp-content/uploads/2023/11/businessman_998412.webp' alt='' className='h-[40px] md:h-[80px] w-[40px] md:w-[80px] object-cover'/>
                <p className='text-sm md:text-base font-bold text-center '>Professional Development Resources</p>
              </div>
            </Tooltip>

            <Tooltip showArrow={true} content={
              <div className='p-4 max-w-[500px] '>
                We offer a range of accredited courses that meet industry standards and are recognized globally. These courses ensure students receive quality education and credentials that enhance their employability and career prospects.
              </div>
            } placement='bottom'>
              <div className='h-[175px] w-full min-w-full border-[1px] border-gray-300 rounded-[8px] flex  flex-col items-center justify-center gap-2 px-8 mx-auto'>
                <img src='https://d65ixtnmlqq6w.cloudfront.net/wp-content/uploads/2023/11/policy.webp' alt='' className='h-[40px] md:h-[80px] w-[40px] md:w-[80px] object-cover'/>
                <p className='text-sm md:text-base font-bold text-center '>Accredited Courses</p>
              </div>
            </Tooltip>

            <Tooltip showArrow={true} content={
              <div className='p-4 max-w-[500px] '>
                Students can gain memberships to relevant professional bodies, providing networking opportunities, industry insights, and professional recognition. This membership supports career development and enhances professional credibility.
              </div>
            } placement='bottom'>
              <div className='h-[175px] w-full min-w-full border-[1px] border-gray-300 rounded-[8px] flex  flex-col items-center justify-center gap-2 px-8 mx-auto'>
                <img src='https://d65ixtnmlqq6w.cloudfront.net/wp-content/uploads/2023/11/membership.webp' alt='' className='h-[40px] md:h-[80px] w-[40px] md:w-[80px] object-cover'/>
                <p className='text-sm md:text-base font-bold text-center '>Professional Body Membership</p>
              </div>
            </Tooltip>

            <Tooltip showArrow={true} content={
              <div className='p-4 max-w-[500px] '>
                Our digital platforms ensure students have 24/7 access to educational resources, support services, and communication tools. This flexibility allows learning and support to happen anytime, anywhere, on any device, making education more accessible and convenient.
              </div>
            } placement='bottom'>
              <div className='h-[175px] w-full min-w-full border-[1px] border-gray-300 rounded-[8px] flex  flex-col items-center justify-center gap-2 px-8 mx-auto'>
                <img src='https://d65ixtnmlqq6w.cloudfront.net/wp-content/uploads/2023/11/24-hours.webp' alt='' className='h-[40px] md:h-[80px] w-[40px] md:w-[80px] object-cover'/>
                <p className='text-sm md:text-base font-bold text-center '>24/7 Connection. Anytime, Anywhere, Any Device</p>
              </div>
            </Tooltip>

            <Tooltip showArrow={true} content={
              <div className='p-4 max-w-[500px] '>
                Our digital platforms ensure students have 24/7 access to educational resources, support services, and communication tools. This flexibility allows learning and support to happen anytime, anywhere, on any device, making education more accessible and convenient.
              </div>
            } placement='bottom'>
              <div className='h-[175px] w-full min-w-full border-[1px] border-gray-300 rounded-[8px] flex  flex-col items-center justify-center gap-2 px-8 mx-auto'>
                <img src='https://d65ixtnmlqq6w.cloudfront.net/wp-content/uploads/2023/11/businessman_998412.webp' alt='' className='h-[40px] md:h-[80px] w-[40px] md:w-[80px] object-cover'/>
                <p className='text-sm md:text-base font-bold text-center '>Educational Counselling                </p>
              </div>
            </Tooltip>

            
          </div>

          <div className='w-full mx-auto grid grid-cols-2 lg:grid-cols-3 justify-center gap-4 place-content-evenly lg:hidden'>

            <Popover>
              <PopoverTrigger>
              <div className='h-[175px] w-full min-w-full border-[1px] border-gray-300 rounded-[8px] flex  flex-col items-center justify-center gap-2 px-8 mx-auto'>
                        <img src='https://d65ixtnmlqq6w.cloudfront.net/wp-content/uploads/2023/11/diploma_12608865.webp' alt='' className='h-[40px] md:h-[80px] w-[40px] md:w-[80px] object-cover'/>
                        <p className='text-sm md:text-base font-bold text-center '>University Pathway Programmes</p>
                      </div>
              </PopoverTrigger>
              <PopoverContent>
                <div className='p-4 max-w-[500px] '>
                    University pathway programmes are designed to help our students transition smoothly into higher education. These programmes offer tailored support in academic skills, English language proficiency,and cultural adaptation, ensuring students are well-prepared for their chosen degree courses.

                  </div>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger>
              <div className='h-[175px] w-full min-w-full border-[1px] border-gray-300 rounded-[8px] flex  flex-col items-center justify-center gap-2 px-8 mx-auto'>
                          <img src='https://d65ixtnmlqq6w.cloudfront.net/wp-content/uploads/2023/11/businessman_998412.webp' alt='' className='h-[40px] md:h-[80px] w-[40px] md:w-[80px] object-cover'/>
                          <p className='text-sm md:text-base font-bold text-center '>Professional Development Resources</p>
                        </div>
              </PopoverTrigger>
              <PopoverContent>
              <div className='p-4 max-w-[500px] '>
                    Our professional development resources provide students with access to workshops, seminars, and online courses aimed at enhancing their career skills. Topics include leadership, project management, and industry-specific knowledge, all designed to support continuous learning and career advancement.
                  </div>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger>
              <div className='h-[175px] w-full min-w-full border-[1px] border-gray-300 rounded-[8px] flex  flex-col items-center justify-center gap-2 px-8 mx-auto'>
                    <img src='https://d65ixtnmlqq6w.cloudfront.net/wp-content/uploads/2023/11/policy.webp' alt='' className='h-[40px] md:h-[80px] w-[40px] md:w-[80px] object-cover'/>
                    <p className='text-sm md:text-base font-bold text-center '>Accredited Courses</p>
                  </div>
                  </PopoverTrigger>
                  <PopoverContent>
              <div className='p-4 max-w-[500px] '>
                We offer a range of accredited courses that meet industry standards and are recognized globally. These courses ensure students receive quality education and credentials that enhance their employability and career prospects.
              </div>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger>
              <div className='h-[175px] w-full min-w-full border-[1px] border-gray-300 rounded-[8px] flex  flex-col items-center justify-center gap-2 px-8 mx-auto'>
                    <img src='https://d65ixtnmlqq6w.cloudfront.net/wp-content/uploads/2023/11/membership.webp' alt='' className='h-[40px] md:h-[80px] w-[40px] md:w-[80px] object-cover'/>
                    <p className='text-sm md:text-base font-bold text-center '>Professional Body Membership</p>
                  </div>
                  </PopoverTrigger>
                  <PopoverContent>
              <div className='p-4 max-w-[500px] '>
                Students can gain memberships to relevant professional bodies, providing networking opportunities, industry insights, and professional recognition. This membership supports career development and enhances professional credibility.
              </div>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger>
              <div className='h-[175px] w-full min-w-full border-[1px] border-gray-300 rounded-[8px] flex  flex-col items-center justify-center gap-2 px-8 mx-auto'>
                    <img src='https://d65ixtnmlqq6w.cloudfront.net/wp-content/uploads/2023/11/24-hours.webp' alt='' className='h-[40px] md:h-[80px] w-[40px] md:w-[80px] object-cover'/>
                    <p className='text-sm md:text-base font-bold text-center '>24/7 Connection. Anytime, Anywhere, Any Device</p>
                  </div>
              </PopoverTrigger>
              <PopoverContent>
              <div className='p-4 max-w-[500px] '>
                Our digital platforms ensure students have 24/7 access to educational resources, support services, and communication tools. This flexibility allows learning and support to happen anytime, anywhere, on any device, making education more accessible and convenient.
              </div>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger>
              <div className='h-[175px] w-full min-w-full border-[1px] border-gray-300 rounded-[8px] flex  flex-col items-center justify-center gap-2 px-8 mx-auto'>
                    <img src='https://d65ixtnmlqq6w.cloudfront.net/wp-content/uploads/2023/11/businessman_998412.webp' alt='' className='h-[40px] md:h-[80px] w-[40px] md:w-[80px] object-cover'/>
                    <p className='text-sm md:text-base font-bold text-center '>Educational Counselling                </p>
                  </div>
              </PopoverTrigger>
              <PopoverContent>
              <div className='p-4 max-w-[500px] '>
                Our digital platforms ensure students have 24/7 access to educational resources, support services, and communication tools. This flexibility allows learning and support to happen anytime, anywhere, on any device, making education more accessible and convenient.
              </div>
              </PopoverContent>
            </Popover>

            
          </div>
        </div>
      </section>

      <section className='h-fit w-full relative px-8 '>
        <div className='h-fit w-full max-w-[1024px] mx-auto justify-center gap-12 grid grid-cols-1 grid-col-2 md:grid-cols-3 lg:grid-cols-5 bg-[#DA0C0C] text-white py-12 rounded-[16px]'>
          <div className='w-full flex flex-col items-center justify-center'>
            <p className='text-4xl font-bold'>100+</p>
            <p className='text-sm font-medium'>Acadamic members</p>
          </div>
          <div className='w-full flex flex-col items-center justify-center'>
            <p className='text-4xl font-bold'>60+</p>
            <p className='text-sm font-medium'>Courses</p>
          </div>
          <div className='w-full flex flex-col items-center justify-center'>
            <p className='text-4xl font-bold'>99+</p>
            <p className='text-sm font-medium'>Student succes rate</p>
          </div>
          <div className='w-full flex flex-col items-center justify-center'>
            <p className='text-4xl font-bold'>3000+</p>
            <p className='text-sm font-medium'>Graduates</p>
          </div>
          <div className='w-full flex flex-col items-center justify-center'>
            <p className='text-4xl font-bold'>5000+</p>
            <p className='text-sm font-medium'>E books</p>
          </div>
        </div>
      </section>

      <section className='h-fit w-full relative overflow-hidden px-8'>
        <div className='h-fit w-full max-w-[1024px] mx-auto overflow-visible'>
            <div className='flex flex-col pb-8'>
              <p className='uppercase text-xs text-center'>News and events</p>
              <p className='text-2xl lg:text-4xl font-bold text-center'>News and events</p>
            </div>

            <div className='hidden lg:block'>
                <Swiper
                  slidesPerView={3}
                  spaceBetween={10}
                  freeMode={true}
                  
                  autoplay
                  modules={[FreeMode,  Autoplay]}
                  className="h-fit"
                >

                    

                  {
                    eventListLoading?
                    '':
                    eventse?
                    eventse.map(i=>(
                      <SwiperSlide key={i.slug} className='bg-white border-[1px] border-red-100 rounded-[8px] mb-12 w-full '>
                         <Popover placement="bottom" showArrow={true} backdrop="opaque">
                            <PopoverTrigger>
                            <div className='bg-white rounded-[8px] w-full p-4'>
                              <img src={i.image? i.image:'https://ucarecdn.com/c49a7d0c-089f-4ac3-854f-d2b2d815c01d/-/crop/750x422/0,39/-/preview/-/format/auto/-/format/auto/-/quality/smart_retina/-/resize/824x/'} alt='' className='object-cover rounded-[6px] h-[150px] w-full mx-auto hover:scale-105 duration-200' />
                              <div className='flex flex-col pt-6 gap-4'>
                                <div className='flex flex-col'>
                                
                                <p className='text-sm opacity-75'>{i.event}</p>
                                <p className='text-lg text-[#DA0C0C] font-bold'>{format(new Date(i.date), 'dd MMMM yyyy')}</p>
                                
                                </div>
                              </div>
                            </div>
                          </PopoverTrigger>
                          <PopoverContent>
                            <p className='text-sm opacity-75 max-w-[400px] w-full p-4'>{parse(i.description)}</p>
                          </PopoverContent>
                        </Popover>
                        
                      </SwiperSlide>
                    ))
                    :
                    ''
                  }
                </Swiper>
              </div>

              <div className='lg:hidden'>
                <Swiper
                  slidesPerView={1}
                  spaceBetween={10}
                  freeMode={true}
                  
                  autoplay
                  modules={[FreeMode,  Autoplay]}
                  className="h-fit"
                >

                    

                  {
                    eventListLoading?
                    '':
                    eventse?
                    eventse.map(i=>(
                      <SwiperSlide key={i.slug} className='bg-white border-[1px] border-red-100 rounded-[8px] mb-12 w-full '>
                         <Popover placement="bottom" showArrow={true} backdrop="opaque">
                            <PopoverTrigger>
                            <div className='bg-white rounded-[8px] w-full p-4'>
                              <img src={i.image? i.image:'https://ucarecdn.com/c49a7d0c-089f-4ac3-854f-d2b2d815c01d/-/crop/750x422/0,39/-/preview/-/format/auto/-/format/auto/-/quality/smart_retina/-/resize/824x/'} alt='' className='object-cover rounded-[6px] h-[150px] w-full mx-auto hover:scale-105 duration-200' />
                              <div className='flex flex-col pt-6 gap-4'>
                                <div className='flex flex-col'>
                                
                                <p className='text-sm opacity-75'>{i.event}</p>
                                <p className='text-lg text-[#DA0C0C] font-bold'>{format(new Date(i.date), 'dd MMMM yyyy')}</p>
                                
                                </div>
                              </div>
                            </div>
                          </PopoverTrigger>
                          <PopoverContent>
                            <p className='text-sm opacity-75 max-w-[400px] w-full p-4'>{parse(i.description)}</p>
                          </PopoverContent>
                        </Popover>
                        
                      </SwiperSlide>
                    ))
                    :
                    ''
                  }
                </Swiper>
              </div>

        
      


        </div>
      </section>

      <section className='h-fit w-full relative overflow-hidden px-8'>
        <div className='h-fit w-full max-w-[1024px] mx-auto overflow-visible'>
            <div className='flex flex-col pb-8'>
              <p className='uppercase text-xs text-center'text-center>Our Students Testimonials</p>
              <p className='text-2xl lg:text-4xl font-bold text-center'>What Our Students Say About Us </p>
            </div>

            {
              testimonialListLoading?
              <div className='h-fit hidden sm:flex'>
                <Swiper
                  slidesPerView={2}
                  spaceBetween={25}
                  freeMode={true}
                  autoplay
                  modules={[FreeMode, Autoplay]}
                  className=""
                >
                  <SwiperSlide className='max-h-[300px] w-full mt-2 mb-12 bg-red-50 p-6 md:p-12 rounded-[8px] relative overflow-hidden '>
                    {/* <div className='h-[100px] w-[100px] absolute top-0 right-0 bg-[#DA0C0C] rotate-45 -z-20'>

                    </div> */}
                    <div className='h-fit flex flex-col'>
                      <Skeleton>
                        <p className='text-lg font-bold text-[#DA0C0C] capitalize'>Ayesh hiruni</p>
                      </Skeleton>

                      <Skeleton>
                        <p className='capitalize text-sm font-medium text-gray-500 '>Selan Bank</p>
                      </Skeleton>
                    </div>
                    <div className='h-[1px] w-full bg-red-100 my-4'></div>
                    <div className='max-h-fit py-2'>
                     <Skeleton>
                       <p className='text-base font-semibold'>"Lorem ipsum dolor sit amet consectetur. In nisl arcu risus at eu ipsum nunc magnis integer. Tristique aliquam risus mauris vitae adipiscing sit eget tristique."</p>
                     </Skeleton>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className='max-h-[300px] w-full mt-2 mb-12 bg-red-50 p-6 md:p-12 rounded-[8px] relative overflow-hidden '>
                    {/* <div className='h-[100px] w-[100px] absolute top-0 right-0 bg-[#DA0C0C] rotate-45 -z-20'>

                    </div> */}
                    <div className='h-fit flex flex-col'>
                      <Skeleton>
                        <p className='text-lg font-bold text-[#DA0C0C] capitalize'>Ayesh hiruni</p>
                      </Skeleton>

                      <Skeleton>
                        <p className='capitalize text-sm font-medium text-gray-500 '>Selan Bank</p>
                      </Skeleton>
                    </div>
                    <div className='h-[1px] w-full bg-red-100 my-4'></div>
                    <div className='max-h-fit py-2'>
                     <Skeleton>
                       <p className='text-base font-semibold'>"Lorem ipsum dolor sit amet consectetur. In nisl arcu risus at eu ipsum nunc magnis integer. Tristique aliquam risus mauris vitae adipiscing sit eget tristique."</p>
                     </Skeleton>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className='max-h-[300px] w-full mt-2 mb-12 bg-red-50 p-6 md:p-12 rounded-[8px] relative overflow-hidden '>
                    {/* <div className='h-[100px] w-[100px] absolute top-0 right-0 bg-[#DA0C0C] rotate-45 -z-20'>

                    </div> */}
                    <div className='h-fit flex flex-col'>
                      <Skeleton>
                        <p className='text-lg font-bold text-[#DA0C0C] capitalize'>Ayesh hiruni</p>
                      </Skeleton>

                      <Skeleton>
                        <p className='capitalize text-sm font-medium text-gray-500 '>Selan Bank</p>
                      </Skeleton>
                    </div>
                    <div className='h-[1px] w-full bg-red-100 my-4'></div>
                    <div className='max-h-fit py-2'>
                     <Skeleton>
                       <p className='text-base font-semibold'>"Lorem ipsum dolor sit amet consectetur. In nisl arcu risus at eu ipsum nunc magnis integer. Tristique aliquam risus mauris vitae adipiscing sit eget tristique."</p>
                     </Skeleton>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>:
              testimonials ?
              <div className='h-fit hidden sm:flex'>
                <Swiper
                  slidesPerView={2}
                  spaceBetween={25}
                  freeMode={true}
                  autoplay
                  modules={[FreeMode, Autoplay]}
                  className="w-full"
                >
                  {
                    testimonials.filter(f=>f.page.slug == 'home').map(i => (
                      <SwiperSlide key={i.id} className='max-h-[300px] w-full mt-2 mb-12 bg-red-50 p-6 md:p-12 rounded-[8px] relative overflow-hidden '>
                      {/* <div className='h-[100px] w-[100px] absolute top-0 right-0 bg-[#DA0C0C] rotate-45 -z-20'>

                      </div> */}
                      <div className='h-fit flex flex-col'>
                        <p className='text-lg font-bold text-[#DA0C0C] capitalize'>{i.name}</p>
  
                        <p className='capitalize text-sm font-medium text-gray-500 '>{i.course?i.course.name:''}</p>
                      </div>
                      <div className='h-[1px] w-full bg-red-100 my-4'></div>
                      <div className='max-h-fit py-2'>
                        <p className='text-base font-semibold'>{parse(i.description)}</p>
                      </div>
                    </SwiperSlide>
                    ))
                  }

                  
                </Swiper>
              </div>:
              ''
            }

            {
              testimonialListLoading?
              <div className='sm:hidden'>
                <Swiper
                  slidesPerView={1}
                  spaceBetween={25}
                  freeMode={true}
                  autoplay
                  modules={[FreeMode, Autoplay]}
                  className=""
                >
                  <SwiperSlide className='max-h-[300px] w-full mt-2 mb-12 bg-red-50 p-6 md:p-12 rounded-[8px] relative overflow-hidden '>
                    {/* <div className='h-[100px] w-[100px] absolute top-0 right-0 bg-[#DA0C0C] rotate-45 -z-20'>

                    </div> */}
                    <div className='flex flex-col'>
                      <Skeleton>
                        <p className='text-lg font-bold text-[#DA0C0C] capitalize'>Ayesh hiruni</p>
                      </Skeleton>
                      <Skeleton>
                        <p className='capitalize text-sm font-medium text-gray-500 '>Selan Bank</p>
                      </Skeleton>
                    </div>
                    <div className='h-[1px] w-full bg-red-100 my-4'></div>
                    <div className='max-h-fit py-2'>
                     <Skeleton>
                       <p className='text-base font-semibold'>"Lorem ipsum dolor sit amet consectetur. In nisl arcu risus at eu ipsum nunc magnis integer. Tristique aliquam risus mauris vitae adipiscing sit eget tristique."</p>
                     </Skeleton>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className='max-h-[300px] w-full mt-2 mb-12 bg-red-50 p-6 md:p-12 rounded-[8px] relative overflow-hidden '>
                    {/* <div className='h-[100px] w-[100px] absolute top-0 right-0 bg-[#DA0C0C] rotate-45 -z-20'>

                    </div> */}
                    <div className='flex flex-col'>
                      <Skeleton>
                        <p className='text-lg font-bold text-[#DA0C0C] capitalize'>Ayesh hiruni</p>
                      </Skeleton>
                      <Skeleton>
                        <p className='capitalize text-sm font-medium text-gray-500 '>Selan Bank</p>
                      </Skeleton>
                    </div>
                    <div className='h-[1px] w-full bg-red-100 my-4'></div>
                    <div className='max-h-fit py-2'>
                     <Skeleton>
                       <p className='text-base font-semibold'>"Lorem ipsum dolor sit amet consectetur. In nisl arcu risus at eu ipsum nunc magnis integer. Tristique aliquam risus mauris vitae adipiscing sit eget tristique."</p>
                     </Skeleton>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className='max-h-[300px] w-full mt-2 mb-12 bg-red-50 p-6 md:p-12 rounded-[8px] relative overflow-hidden '>
                    {/* <div className='h-[100px] w-[100px] absolute top-0 right-0 bg-[#DA0C0C] rotate-45 -z-20'>

                    </div> */}
                    <div className='flex flex-col'>
                      <Skeleton>
                        <p className='text-lg font-bold text-[#DA0C0C] capitalize'>Ayesh hiruni</p>
                      </Skeleton>
                      <Skeleton>
                        <p className='capitalize text-sm font-medium text-gray-500 '>Selan Bank</p>
                      </Skeleton>
                    </div>
                    <div className='h-[1px] w-full bg-red-100 my-4'></div>
                    <div className='max-h-fit py-2'>
                     <Skeleton>
                       <p className='text-base font-semibold'>"Lorem ipsum dolor sit amet consectetur. In nisl arcu risus at eu ipsum nunc magnis integer. Tristique aliquam risus mauris vitae adipiscing sit eget tristique."</p>
                     </Skeleton>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>:
              testimonials ?
              <div className='sm:hidden'>
                <Swiper
                  slidesPerView={1}
                  spaceBetween={25}
                  freeMode={true}
                  autoplay
                  modules={[FreeMode, Autoplay]}
                  className="w-full"
                >
                  {
                    testimonials.filter(f=>f.page.slug == 'home').map(i=>(
                      <SwiperSlide className='max-h-[300px] w-full mt-2 mb-12 bg-red-50 p-6 md:p-12 rounded-[8px] relative overflow-hidden '>
                        {/* <div className='h-[100px] w-[100px] absolute top-0 right-0 bg-[#DA0C0C] rotate-45 -z-20'>

                        </div> */}
                        <div className='flex flex-col'>
                          <Skeleton>
                            <p className='text-lg font-bold text-[#DA0C0C] capitalize'>Ayesh hiruni</p>
                          </Skeleton>
                          <Skeleton>
                            <p className='capitalize text-sm font-medium text-gray-500 '>Selan Bank</p>
                          </Skeleton>
                        </div>
                        <div className='h-[1px] w-full bg-red-100 my-4'></div>
                        <div className='max-h-fit py-2'>
                         <Skeleton>
                           <p className='text-base font-semibold'>"Lorem ipsum dolor sit amet consectetur. In nisl arcu risus at eu ipsum nunc magnis integer. Tristique aliquam risus mauris vitae adipiscing sit eget tristique."</p>
                         </Skeleton>
                        </div>
                      </SwiperSlide>
                    ))
                  }
                  
                </Swiper>
              </div>:
              ''
            }

        

        </div>
      </section>
      
      <section className='h-fit w-full relative overflow-hidden px-8'>
        <div className='h-fit w-full max-w-[1024px] mx-auto overflow-visible'>
            {/* <div className='flex flex-col pb-8'>
              <p className='uppercase text-xs text-center'>Resources</p>
              <p className='text-2xl lg:text-4xl font-bold text-center'>Our Resources</p>
            </div> */}

            <div className='hidden md:block'>
              <Swiper
                slidesPerView={3}
                spaceBetween={10}
                freeMode={true}
                
                autoplay
                modules={[FreeMode,  Autoplay]}
                className="h-fit"
              >
                <SwiperSlide className='h-[300px] w-full relative mt-4 mb-12'>
                  <div className='h-[200px] w-full relative z-10'>
                    <div className='h-fit w-[90%] bg-red-50 mx-auto relative z-10 rounded-[8px] overflow-hidden'>
                    <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2Fiebc.lk%2Fvideos%2F390059596804608%2F&show_text=false&width=560&t=0" height={'100%'} width={'full'} className='w-full h-full object-cover' frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                    </div>
                  </div>
                  <div className='w-full h-[100px] rounded-[8px] bg-[#DA0C0C] absolute bottom-0 -z-30'>

                  </div>
                </SwiperSlide>
                <SwiperSlide className='h-[300px] w-full relative mt-4 mb-12'>
                  <div className='h-[200px] w-full relative z-10'>
                    <div className='h-fit w-[90%] bg-red-50 mx-auto relative z-10 rounded-[8px] overflow-hidden'>
                      <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2Fiebc.lk%2Fvideos%2F1113865666370498%2F&show_text=false&width=560&t=0" height={'100%'} width={'full'} className='w-full h-full object-cover' frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                    </div>
                  </div>
                  <div className='w-full h-[100px] rounded-[8px] bg-[#DA0C0C] absolute bottom-0 -z-30'>

                  </div>
                </SwiperSlide>
                <SwiperSlide className='h-[300px] w-full relative mt-4 mb-12'>
                  <div className='h-[200px] w-full relative z-10'>
                    <div className='h-fit w-[90%] bg-red-50 mx-auto relative z-10 rounded-[8px] overflow-hidden'>
                    <iframe src="https://www.facebook.com/plugins/video.php?height=311&href=https%3A%2F%2Fwww.facebook.com%2FIEBCGlobal%2Fvideos%2F2909785615957489%2F&show_text=false&width=560&t=0" height={'100%'} width={'full'} className='w-full h-full object-cover' frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                    </div>
                  </div>
                  <div className='w-full h-[100px] rounded-[8px] bg-[#DA0C0C] absolute bottom-0 -z-30'>

                  </div>
                </SwiperSlide>
                <SwiperSlide className='h-[300px] w-full relative mt-4 mb-12'>
                  <div className='h-[200px] w-full relative z-10'>
                    <div className='h-fit w-[90%] bg-red-50 mx-auto relative z-10 rounded-[8px] overflow-hidden'>
                      <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2FIEBCGlobal%2Fvideos%2F137729791776490%2F&show_text=false&width=560&t=0" height={'100%'} width={'full'} className='w-full h-full object-cover' frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                    </div>
                  </div>
                  <div className='w-full h-[100px] rounded-[8px] bg-[#DA0C0C] absolute bottom-0 -z-30'>

                  </div>
                </SwiperSlide>
                
              </Swiper>
            </div>

            <div className='hidden sm:block md:hidden'>
              <Swiper
                slidesPerView={2}
                spaceBetween={10}
                freeMode={true}
                
                autoplay
                modules={[FreeMode,  Autoplay]}
                className="h-fit"
              >
                <SwiperSlide className='h-[300px] w-full relative mt-4 mb-12'>
                  <div className='h-[200px] w-full relative z-10'>
                    <div className='h-fit w-[90%] bg-red-50 mx-auto relative z-10 rounded-[8px] overflow-hidden'>
                    <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2Fiebc.lk%2Fvideos%2F390059596804608%2F&show_text=false&width=560&t=0" height={'100%'} width={'full'} className='w-full h-full object-cover' frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                    </div>
                  </div>
                  <div className='w-full h-[100px] rounded-[8px] bg-[#DA0C0C] absolute bottom-0 -z-30'>

                  </div>
                </SwiperSlide>
                <SwiperSlide className='h-[300px] w-full relative mt-4 mb-12'>
                  <div className='h-[200px] w-full relative z-10'>
                    <div className='h-fit w-[90%] bg-red-50 mx-auto relative z-10 rounded-[8px] overflow-hidden'>
                      <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2Fiebc.lk%2Fvideos%2F1113865666370498%2F&show_text=false&width=560&t=0" height={'100%'} width={'full'} className='w-full h-full object-cover' frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                    </div>
                  </div>
                  <div className='w-full h-[100px] rounded-[8px] bg-[#DA0C0C] absolute bottom-0 -z-30'>

                  </div>
                </SwiperSlide>
                <SwiperSlide className='h-[300px] w-full relative mt-4 mb-12'>
                  <div className='h-[200px] w-full relative z-10'>
                    <div className='h-fit w-[90%] bg-red-50 mx-auto relative z-10 rounded-[8px] overflow-hidden'>
                    <iframe src="https://www.facebook.com/plugins/video.php?height=311&href=https%3A%2F%2Fwww.facebook.com%2FIEBCGlobal%2Fvideos%2F2909785615957489%2F&show_text=false&width=560&t=0" height={'100%'} width={'full'} className='w-full h-full object-cover' frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                    </div>
                  </div>
                  <div className='w-full h-[100px] rounded-[8px] bg-[#DA0C0C] absolute bottom-0 -z-30'>

                  </div>
                </SwiperSlide>
                <SwiperSlide className='h-[300px] w-full relative mt-4 mb-12'>
                  <div className='h-[200px] w-full relative z-10'>
                    <div className='h-fit w-[90%] bg-red-50 mx-auto relative z-10 rounded-[8px] overflow-hidden'>
                      <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2FIEBCGlobal%2Fvideos%2F137729791776490%2F&show_text=false&width=560&t=0" height={'100%'} width={'full'} className='w-full h-full object-cover' frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                    </div>
                  </div>
                  <div className='w-full h-[100px] rounded-[8px] bg-[#DA0C0C] absolute bottom-0 -z-30'>

                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            <div className='sm:hidden'>
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                freeMode={true}
                
                autoplay
                modules={[FreeMode,  Autoplay]}
                className="h-fit"
              >
                <SwiperSlide className='h-[300px] w-full relative mt-4 mb-12'>
                  <div className='h-[200px] w-full relative z-10'>
                    <div className='h-fit w-[90%] bg-red-50 mx-auto relative z-10 rounded-[8px] overflow-hidden'>
                    <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2Fiebc.lk%2Fvideos%2F390059596804608%2F&show_text=false&width=560&t=0" height={'100%'} width={'full'} className='w-full h-full object-cover' frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                    </div>
                  </div>
                  <div className='w-full h-[100px] rounded-[8px] bg-[#DA0C0C] absolute bottom-0 -z-30'>

                  </div>
                </SwiperSlide>
                <SwiperSlide className='h-[300px] w-full relative mt-4 mb-12'>
                  <div className='h-[200px] w-full relative z-10'>
                    <div className='h-fit w-[90%] bg-red-50 mx-auto relative z-10 rounded-[8px] overflow-hidden'>
                      <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2Fiebc.lk%2Fvideos%2F1113865666370498%2F&show_text=false&width=560&t=0" height={'100%'} width={'full'} className='w-full h-full object-cover' frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                    </div>
                  </div>
                  <div className='w-full h-[100px] rounded-[8px] bg-[#DA0C0C] absolute bottom-0 -z-30'>

                  </div>
                </SwiperSlide>
                <SwiperSlide className='h-[300px] w-full relative mt-4 mb-12'>
                  <div className='h-[200px] w-full relative z-10'>
                    <div className='h-fit w-[90%] bg-red-50 mx-auto relative z-10 rounded-[8px] overflow-hidden'>
                    <iframe src="https://www.facebook.com/plugins/video.php?height=311&href=https%3A%2F%2Fwww.facebook.com%2FIEBCGlobal%2Fvideos%2F2909785615957489%2F&show_text=false&width=560&t=0" height={'100%'} width={'full'} className='w-full h-full object-cover' frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                    </div>
                  </div>
                  <div className='w-full h-[100px] rounded-[8px] bg-[#DA0C0C] absolute bottom-0 -z-30'>

                  </div>
                </SwiperSlide>
                <SwiperSlide className='h-[300px] w-full relative mt-4 mb-12'>
                  <div className='h-[200px] w-full relative z-10'>
                    <div className='h-fit w-[90%] bg-red-50 mx-auto relative z-10 rounded-[8px] overflow-hidden'>
                      <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2FIEBCGlobal%2Fvideos%2F137729791776490%2F&show_text=false&width=560&t=0" height={'100%'} width={'full'} className='w-full h-full object-cover' frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                    </div>
                  </div>
                  <div className='w-full h-[100px] rounded-[8px] bg-[#DA0C0C] absolute bottom-0 -z-30'>

                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

        </div>
      </section>

      <section className='h-fit w-full relative overflow-hidden px-8'>
        <div className='h-fit w-full max-w-[1024px] mx-auto overflow-visible'>
            <div className='flex flex-col pb-8'>
              <p className='uppercase text-xs text-center'>Qualifications</p>
              <p className='text-2xl lg:text-4xl font-bold text-center'>Our Qualifications</p>
            </div>

            <div className='hidden lg:block'>
                <Swiper
                  slidesPerView={4}
                  spaceBetween={10}
                  freeMode={true}
                  
                  autoplay
                  modules={[FreeMode,  Autoplay]}
                  className="h-fit"
                >

                    

                  {
                    ourQualificationListLoading?
                    '':
                    qualifications?
                    qualifications.map(i=>(
                      <SwiperSlide key={i.slug} className='bg-white border-[1px] border-red-100 rounded-[8px] mb-12 w-[250px]'>
                        <Link to={`/awarding-body/${i.slug}`} className='bg-white border-[1px] border-red-100 rounded-[8px] mb-12 w-[250px]'>
                          <img src={i.image} alt='' className='h-[150px] w-[200px] object-contain scale-80 mx-auto hover:scale-105 duration-200' />
                          <div className='flex flex-col py-6 gap-4 px-4 '>
                            <div className='flex flex-col-reverse'>
                            <p className='text-xs h-[32px] overflow-hidden text-gray-400'>{parse(i.courses_list)}</p>
                            <p className='text-based uppercase font-semibold'>{i.name}</p>
                            </div>
                            <p className='text-sm text-[#DA0C0C]'>More Details...</p>
                          </div>
                        </Link>
                      </SwiperSlide>
                    ))
                    :
                    ''
                  }
                </Swiper>
              </div>

              <div className='hidden sm:block lg:hidden'>
                <Swiper
                  slidesPerView={1}
                  spaceBetween={10}
                  freeMode={true}
                  
                  autoplay
                  modules={[FreeMode,  Autoplay]}
                  className="h-fit"
                >

                    

                  {
                    ourQualificationListLoading?
                    '':
                    qualifications?
                    qualifications.map(i=>(
                      <SwiperSlide key={i.slug} className='bg-white border-[1px] border-red-100 rounded-[8px] mb-12 w-[250px]'>
                        <Link to={`/awarding-body/${i.slug}`} className='bg-white border-[1px] border-red-100 rounded-[8px] mb-12 w-[250px]'>
                          <img src={i.image} alt='' className='h-[150px] w-[200px] object-contain scale-80 mx-auto hover:scale-105 duration-200' />
                          <div className='flex flex-col py-6 gap-4 px-4 '>
                            <div className='flex flex-col-reverse'>
                            <p className='text-xs h-[32px] overflow-hidden text-gray-400'>{parse(i.courses_list)}</p>
                            <p className='text-based uppercase font-semibold'>{i.name}</p>
                            </div>
                            <p className='text-sm text-[#DA0C0C]'>More Details...</p>
                          </div>
                        </Link>
                      </SwiperSlide>
                    ))
                    :
                    ''
                  }
                </Swiper>
              </div>

              <div className='md:hidden'>
                <Swiper
                  slidesPerView={1}
                  spaceBetween={10}
                  freeMode={true}
                  
                  autoplay
                  modules={[FreeMode,  Autoplay]}
                  className="h-fit"
                >

                    

                  {
                    ourQualificationListLoading?
                    '':
                    qualifications?
                    qualifications.map(i=>(
                      <SwiperSlide key={i.slug} className='bg-white border-[1px] border-red-100 rounded-[8px] mb-12 w-[250px]'>
                        <Link to={`/awarding-body/${i.slug}`} className='bg-white border-[1px] border-red-100 rounded-[8px] mb-12 w-[250px]'>
                          <img src={i.image} alt='' className='h-[150px] w-[200px] object-contain scale-80 mx-auto hover:scale-105 duration-200' />
                          <div className='flex flex-col py-6 gap-4 px-4 '>
                            <div className='flex flex-col-reverse'>
                            <p className='text-xs h-[32px] overflow-hidden text-gray-400'>{parse(i.courses_list)}</p>
                            <p className='text-based uppercase font-semibold'>{i.name}</p>
                            </div>
                            <p className='text-sm text-[#DA0C0C]'>More Details...</p>
                          </div>
                        </Link>
                      </SwiperSlide>
                    ))
                    :
                    ''
                  }
                </Swiper>
              </div>

        
      


        </div>
      </section>

      

    </div>
  )
}

export default HomeScreen