import React, { useEffect, useState } from 'react'
import {Input, navbar} from "@nextui-org/react";
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
import _ from 'lodash';
import { TypeAnimation } from 'react-type-animation';
import { FiSearch } from "react-icons/fi";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay, FreeMode } from 'swiper/modules';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getCourseList, getLevelList } from '../actions/courseActions';

const HomeScreen = () => {

    const [keyword, setKeyword] = useState('')
    const [programe, setPrograme] = useState('/programes')
    const [credit, setCredit] = useState('/credits')
    const [award, setAward] = useState('/awards')
    const [faculty, setFaculty] = useState('/faculties')

    const dispatch = useDispatch()
    const history = useNavigate()
    const location = useLocation()

    const levelList = useSelector(state => state.levelList)
    const { error, loading, levels } = levelList

    const courseList = useSelector(state => state.courseList)
    const { error: courseListError, loading: courseListLoading, courses } = courseList

    const facultyList = useSelector(state => state.facultyList)
    const { error:facultyListError, loading:facultyListLoading, faculties } = facultyList
    
    useEffect(() => {
      dispatch(getLevelList())
      dispatch(getCourseList())
    }, [dispatch])

    const submitHandler = () => {
      history(`${faculty}${programe}${award}${credit}${keyword}`)
    } 

    useEffect(() => {
      window.scroll(0,0);
    }, [location]);
    

  return (
    <div className='h-fit w-full flex flex-col gap-12'>
      <section className='h-fit w-full relative overflow-hidden'>
        
        <img src='https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' className='h-[700px] xl:h-[500px] w-full object-cover object-bottom  absolute -z-50'/>

        <div className='h-[700px] xl:h-[500px] w-full px-4 relative -z-10 flex items-center justify-center bg-black/50'>
          
            
        </div>
        <div className='w-full max-w-[1000px] h-[400px] md:h-[200px] mx-auto -mt-[600px] md:-mt-[300px] px-4 flex items-center flex-col justify-center  gap-8'>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'International Educational Business Campus',
                2000
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '2em', color:'white', fontWeight:600, textAlign:'center' }}
              repeat={Infinity}
              className='text-base leading-10'
            />
            <Input
                type="text"
                placeholder="keyword"
                labelPlacement="outside"
                variant="bordered"
                required
                value={keyword} 
                onChange={(e) => setKeyword(e.target.value)} 
                className='w-full shadow-none rounded-none text-white backdrop-blur-2xl '
               
                radius='sm'
                size='lg'
                endContent={
                  <Link to={`/search/${keyword}`}>
                    <FiSearch  />
                  </Link>
                }
              />
          </div>

        <div className='h-fit w-full max-w-[1000px] mx-auto px-6'>
          <form className='bg-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] h-fit w-full z-40 mt-auto  px-6 md:px-12 py-8 flex flex-col gap-4'>
              <div className='flex flex-col md:flex-row  gap-6 items-center justify-between'>
                <div className='w-full max-w-[500px]'>
                  <p className='text-3xl font-bold'>Search Course</p>
                </div>
              </div>
              <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
                <Select
                  variant={'bordered'}
                  required
                  placeholder="Faculty"
                  className='w-full shadow-none rounded-none'
                  radius='sm'
                  size='lg'
                  endContent={
                    <AiFillSignal />
                  }
                >
                  {
                    loading?
                    '':
                    faculties?
                    faculties.map((i) => (
                      <SelectItem onClick={()=> setFaculty(`/${i.slug}`)} value={i.slug} key={i.slug}>
                        {i.name}
                      </SelectItem>
                    ))
                    :
                    ''
                  }
                </Select>

                <Select
                  variant={'bordered'}
                  required
                  placeholder="Programme"
                  className='w-full shadow-none rounded-none'
                  radius='sm'
                  size='lg'
                  endContent={
                    <AiFillSignal />
                  }
                >
                  {
                    loading?
                    '':
                    levels?
                    levels.map((i) => (
                      <SelectItem onClick={()=> setPrograme(`/${i.slug}`)} value={i.slug} key={i.slug}>
                        {i.name}
                      </SelectItem>
                    ))
                    :
                    ''
                  }
                </Select>
                <Select
                  variant={'bordered'}
                  placeholder="Course award"
                  className='w-full shadow-none rounded-none'
                  radius='sm'
                  required
                  size='lg'
                  endContent={
                    <FaAward  />
                  }
                >
                  {
                    courseListLoading?
                    '':
                    courses?
                    _.uniqBy(_.flatMap(courses, 'qualification'), 'id').map((i) => (
                      <SelectItem onClick={()=> setAward(`/${i.slug}`)} value={i.slug} key={i.slug}>
                        {i.name}
                      </SelectItem>
                    ))
                    :
                    ''
                  }
                </Select>
                
                {/* <Button size='lg' isIconOnly variant='solid' className='bg-[#DA0C0C] rounded-md px-4 text-white  min-w-fit justify-center' endContent={<IoSearch className='ml-4'/>}>
                  Search
                </Button> */}
                <Button onClick={() => submitHandler() } color='' radius='sm' className="w-full md:min-w-fit flex bg-[#DA0C0C] font-semibold text-white md:px-4 py-6 text-base">
                    <p>Search</p>
                    <IoSearch className='ml-4'/>
                </Button>
              </div>
          </form>
        </div>
        <div className='h-[25px]'></div>
      </section>

      <section className='h-fit w-full relative overflow-hidden px-4'>
        <div className='h-fit w-full max-w-[800px] mx-auto grid grid-cols-2 md:grid-cols-4 justify-center gap-2 lg:gap-6'>
            <Link to={'/application'} className='w-full h-full flex flex-col items-center justify-center gap-4 bg-red-50 hover:bg-[#DA0C0C] text-black duration-200 cursor-pointer hover:text-white py-8 px-4 rounded-[8px]'>
              <MdOutlineAdsClick className='text-6xl'/>
              <p className='text-sm font-semibold'>Apply</p>
            </Link>
            <div className='w-full h-full flex flex-col items-center justify-center gap-4 bg-red-50 hover:bg-[#DA0C0C] text-black duration-200 cursor-pointer hover:text-white py-8 px-4 rounded-[8px]'>
              <MdOutlineVerified  className='text-6xl'/>
              <p className='text-sm font-semibold'>Verify Certificate</p>
            </div>
            <div className='w-full h-full flex flex-col items-center justify-center gap-4 bg-red-50 hover:bg-[#DA0C0C] text-black duration-200 cursor-pointer hover:text-white py-8 px-4 rounded-[8px]'>
              <FaIdCard  className='text-6xl'/>
              <p className='text-sm font-semibold'>Student Portal</p>
            </div>
            <div className='w-full h-full flex flex-col items-center justify-center gap-4 bg-red-50 hover:bg-[#DA0C0C] text-black duration-200 cursor-pointer hover:text-white py-8 px-4 rounded-[8px]'>
              <MdLibraryBooks  className='text-6xl'/>
              <p className='text-sm font-semibold'>E library</p>
            </div>
        </div>
      </section>

      <section className='h-fit w-full relative overflow-hidden px-4'>
        <div className='h-fit w-full max-w-[1100px] mx-auto justify-center gap-6'>
            <div className='flex flex-col'>
              <p className='uppercase text-xs '>Faculty</p>
              <p className='text-4xl font-bold'>Our Faculty</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 pt-8 gap-8'>
              {
                facultyListLoading?
                ''
                :
                faculties?
                faculties.map(i => (
                  <Link to={`/faculties/${i.slug}`} className='w-full h-[350px] flex flex-col items-center justify-center gap-4 rounded-[8px] relative bg-black'>
                    <img src={i.image} alt='' className='h-full w-full object-cover object-top absolute z-0' />
                    <div className='h-full w-full object-cover absolute  z-20  bg-gradient-to-t from-black to-transparent hover:to-black/10 duration-500' ></div>
                    <div className='h-fit flex flex-col items-center gap-4 mt-auto px-4 py-8 absolute z-30 bottom-0'>
                      <p className='text-2xl font-semibold text-white'>{i.name}</p>
                      <div className='h-[2px] w-full bg-white/50'></div>
                      <div className='flex gap-8'>
                        <div className='flex flex-col items-center'>
                          <p className='font-bold text-[#DA0C0C]'>200+</p>
                          <p className='text-xs text-white'>Courses</p>
                        </div>
                        <div className='flex flex-col items-center'>
                          <p className='font-bold text-[#DA0C0C]'>2000+</p>
                          <p className='text-xs text-white'>Students</p>
                        </div>
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

      <section className='h-fit w-full relative px-4'>
        <div className='h-fit w-full max-w-[1100px] mx-auto justify-center gap-6'>
            <div className='flex flex-col'>
              <p className='uppercase text-xs '>Courses</p>
              <p className='text-4xl font-bold'>Popular courses</p>
            </div>
            <div className='hidden xl:block py-12'>
              <Swiper
                slidesPerView={4}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="w-full"
                autoplay
              >
                {
                  courses?
                  courses.map(i =>(
                    <SwiperSlide className='mb-12 bg-white p-2 h-fit w-[300px] shadow-[0px_4px_25px_rgba(0,0,0,0.05)] rounded-[16px] overflow-hidden'>
                      <Link to={`/courses/${i.slug}`} className='overflow-hidden w-full h-full'>
                        <div className='h-[200px] w-full overflow-hidden rounded-[8px]'>
                          <img src={i.image} alt='' className='h-[200px] w-full rounded-[8px] hover:scale-105 duration-300' />
                        </div>
                        <div className='pt-4 flex flex-col gap-4'>
                          <div className=''>
                            <p className='text-xs text-red-600 font-medium'>{i.qualification.name}</p>
                            <p className='font-semibold text-justify'>{i.name}</p>
                          </div>
                          <div className='h-[1px] w-full bg-black/10 ' ></div>
                          <div className='flex flex-row gap-1 items-center justify-between'>
                            <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<MdOutlineAccessTime  className='text-base'/>}>
                              {i.duration}
                            </Button>
                            <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<MdOutlineBookmarkBorder  className='text-base'/>}>
                              {i.class_on}
                            </Button>
                            <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<FaUsers className='text-base'/>}>
                              3000+
                            </Button>
                          </div>
                            
                        </div>
                      </Link>
                    </SwiperSlide>
                  )):
                  ''
                }
                
              </Swiper>    
            </div>
            <div className='hidden lg:block xl:hidden'>
              <Swiper
                slidesPerView={3}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="w-full"
                autoplay
              >
                {
                  courses?
                  courses.map(i =>(
                    <SwiperSlide className='mb-12 bg-white p-2 h-fit w-[300px] shadow-[0px_4px_25px_rgba(0,0,0,0.05)] rounded-[16px] overflow-hidden'>
                      <Link to={`/courses/${i.slug}`} className='overflow-hidden w-full h-full'>
                        <div className='h-[200px] w-full overflow-hidden rounded-[8px]'>
                          <img src={i.image} alt='' className='h-[200px] w-full rounded-[8px] hover:scale-105 duration-300' />
                        </div>
                        <div className='pt-4 flex flex-col gap-4'>
                          <div className=''>
                            <p className='text-xs text-red-600 font-medium'>{i.qualification.name}</p>
                            <p className='font-semibold text-justify'>{i.name}</p>
                          </div>
                          <div className='h-[1px] w-full bg-black/10 ' ></div>
                          <div className='flex flex-row gap-1 items-center justify-between'>
                            <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<MdOutlineAccessTime  className='text-base'/>}>
                              {i.duration}
                            </Button>
                            <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<MdOutlineBookmarkBorder  className='text-base'/>}>
                              {i.class_on}
                            </Button>
                            <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<FaUsers className='text-base'/>}>
                              3000+
                            </Button>
                          </div>
                            
                        </div>
                      </Link>
                    </SwiperSlide>
                  )):
                  ''
                }
                
              </Swiper>    
            </div>
            <div className='hidden sm:block lg:hidden'>
              <Swiper
                slidesPerView={2}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="w-full"
                autoplay
              >
                {
                  courses?
                  courses.map(i =>(
                    <SwiperSlide className='mb-12 bg-white p-2 h-fit w-[300px] shadow-[0px_4px_25px_rgba(0,0,0,0.05)] rounded-[16px] overflow-hidden'>
                      <Link to={`/courses/${i.slug}`} className='overflow-hidden w-full h-full'>
                        <div className='h-[200px] w-full overflow-hidden rounded-[8px]'>
                          <img src={i.image} alt='' className='h-[200px] w-full rounded-[8px] hover:scale-105 duration-300' />
                        </div>
                        <div className='pt-4 flex flex-col gap-4'>
                          <div className=''>
                            <p className='text-xs text-red-600 font-medium'>{i.qualification.name}</p>
                            <p className='font-semibold text-justify'>{i.name}</p>
                          </div>
                          <div className='h-[1px] w-full bg-black/10 ' ></div>
                          <div className='flex flex-row gap-1 items-center justify-between'>
                            <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<MdOutlineAccessTime  className='text-base'/>}>
                              {i.duration}
                            </Button>
                            <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<MdOutlineBookmarkBorder  className='text-base'/>}>
                              {i.class_on}
                            </Button>
                            <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<FaUsers className='text-base'/>}>
                              3000+
                            </Button>
                          </div>
                            
                        </div>
                      </Link>
                    </SwiperSlide>
                  )):
                  ''
                }
                
              </Swiper>    
            </div>
            <div className='block sm:hidden'>
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="w-full"
                autoplay
              >
                {
                  courses?
                  courses.map(i =>(
                    <SwiperSlide className='mb-12 bg-white p-2 h-fit w-[300px] shadow-[0px_4px_25px_rgba(0,0,0,0.05)] rounded-[16px] overflow-hidden'>
                      <Link to={`/courses/${i.slug}`} className='overflow-hidden w-full h-full'>
                        <div className='h-[200px] w-full overflow-hidden rounded-[8px]'>
                          <img src={i.image} alt='' className='h-[200px] w-full rounded-[8px] hover:scale-105 duration-300' />
                        </div>
                        <div className='pt-4 flex flex-col gap-4'>
                          <div className=''>
                            <p className='text-xs text-red-600 font-medium'>{i.qualification.name}</p>
                            <p className='font-semibold text-justify'>{i.name}</p>
                          </div>
                          <div className='h-[1px] w-full bg-black/10 ' ></div>
                          <div className='flex flex-row gap-1 items-center justify-between'>
                            <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<MdOutlineAccessTime  className='text-base'/>}>
                              {i.duration}
                            </Button>
                            <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<MdOutlineBookmarkBorder  className='text-base'/>}>
                              {i.class_on}
                            </Button>
                            <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<FaUsers className='text-base'/>}>
                              3000+
                            </Button>
                          </div>
                            
                        </div>
                      </Link>
                    </SwiperSlide>
                  )):
                  ''
                }
              </Swiper>    
            </div>
        </div>
      </section>

      <section className='h-fit w-full relative overflow-hidden px-4 bg-red-50 py-16'>
        <div className='h-fit w-full max-w-[1100px] mx-auto justify-center gap-6 '>
          <div className='flex flex-col pb-8'>
            <p className='uppercase text-xs '>Unlock Your Future</p>
            <p className='text-4xl font-bold'>Available Scholarships</p>
          </div>
          <div className='w-fit mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {
              loading?
              ''
              :
              levels?
              levels.map(i => (
                <Link to={`programes/${i.slug}`} key={i.id} className='w-full min-h-[250px] md:min-h-[300px] bg-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] p-6  md:max-w-[300px] gap-8 flex flex-col rounded-[8px] relative overflow-hidden mx-auto hover:bg-[#DA0C0C] duration-500 hover:text-white hover:scale-105'>
                  <div className='w-full flex flex-col relative z-30'>
                    <p className='text-5xl font-bold capitalize'>{i.name}</p>
                  </div>
                  <div className='flex items-center gap-4 relative z-30'>
                    <Button radius='full' isIconOnly variant='solid' className='bg-red-600 text-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] ' startContent={<IoArrowForwardOutline/>}>

                    </Button>
                    <p className='text-xs text-gray-300'>Learn more</p>
                  </div>
                  <div className='h-[300px] w-[300px] bg-[#DA0C0C] absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 rounded-full flex items-start justify-start z-0'>
                    <div className='h-[150px] w-[150px] flex flex-col items-end justify-center text-white text-right pr-4'>
                      <p className='text-4xl font-bold'>25%</p>
                      <p className='text-xs'>Special offer</p>
                    </div>
                  </div>
                </Link>
              ))
              :
              ''
            }
          </div>
        </div>
      </section>

      <section className='h-fit w-full relative overflow-hidden'>
        <div className='h-fit w-full max-w-[1100px] mx-auto px-4 overflow-visible'>
            <div className='flex flex-col pb-8'>
              <p className='uppercase text-xs '>Qualifications</p>
              <p className='text-4xl font-bold'>Our Qualifications</p>
            </div>

            <div className='hidden md:block'>
              <Swiper
                slidesPerView={3}
                spaceBetween={10}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                autoplay
                modules={[FreeMode, Pagination, Autoplay]}
                className=""
              >
                {
                  courseListLoading?
                  '':
                  courses?
                  _.uniqBy(_.flatMap(courses, 'qualification'), 'id').map(i=>(
                    <SwiperSlide key={i.id} className='bg-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] rounded-[8px] mb-8 w-[250px]'>
                      <img src={i.image} alt='' className='h-[150px] w-[200px] object-contain scale-80 mx-auto hover:scale-105 duration-200' />
                      <div className='flex flex-col py-6 gap-4 px-4 '>
                        <div className='flex flex-col-reverse'>
                        <p className='text-xs h-[32px] overflow-hidden text-gray-400'>{i.discription}</p>
                        <p className='text-based uppercase font-semibold'>{i.name}</p>
                        </div>
                        <p className='text-sm text-[#DA0C0C]'>More Details...</p>
                      </div>
                    </SwiperSlide>
                  ))
                  :
                  ''
                }
              </Swiper>
            </div>

            <div className='hidden sm:block md:hidden'>
              <Swiper
                slidesPerView={2}
                spaceBetween={10}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                autoplay
                modules={[FreeMode, Pagination, Autoplay]}
                className=""
              >
                {
                  courseListLoading?
                  '':
                  courses?
                  _.uniqBy(_.flatMap(courses, 'qualification'), 'id').map(i=>(
                    <SwiperSlide key={i.id} className='bg-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] rounded-[8px] mb-8 w-[250px]'>
                      <img src={i.image} alt='' className='h-[150px] w-[200px] object-contain scale-80 mx-auto hover:scale-105 duration-200' />
                      <div className='flex flex-col py-6 gap-4 px-4 '>
                        <div className='flex flex-col-reverse'>
                        <p className='text-xs h-[32px] overflow-hidden text-gray-400'>{i.discription}</p>
                        <p className='text-based uppercase font-semibold'>{i.name}</p>
                        </div>
                        <p className='text-sm text-[#DA0C0C]'>More Details...</p>
                      </div>
                    </SwiperSlide>
                  ))
                  :
                  ''
                }
              </Swiper>
            </div>

            <div className='sm:hidden'>
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                autoplay
                modules={[FreeMode, Pagination, Autoplay]}
                className=""
              >
                {
                  courseListLoading?
                  '':
                  courses?
                  _.uniqBy(_.flatMap(courses, 'qualification'), 'id').map(i=>(
                    <SwiperSlide key={i.id} className='bg-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] rounded-[8px] mb-8 w-[250px]'>
                      <img src={i.image} alt='' className='h-[150px] w-[200px] object-contain scale-80 mx-auto hover:scale-105 duration-200' />
                      <div className='flex flex-col py-6 gap-4 px-4 '>
                        <div className='flex flex-col-reverse'>
                        <p className='text-xs h-[32px] overflow-hidden text-gray-400'>{i.discription}</p>
                        <p className='text-based uppercase font-semibold'>{i.name}</p>
                        </div>
                        <p className='text-sm text-[#DA0C0C]'>More Details...</p>
                      </div>
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