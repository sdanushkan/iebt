import React, { useEffect, useState } from 'react'
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

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay, FreeMode } from 'swiper/modules';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { getCourseList, getLevelList } from '../actions/courseActions';


const HomeScreen = () => {

    const [keyword, setKeyword] = useState('')
    const [programe, setPrograme] = useState('')
    const [credit, setCredit] = useState('')
    const [award, setAward] = useState('')

    const dispatch = useDispatch()
    const history = useNavigate()
    const location = useLocation()

    const levelList = useSelector(state => state.levelList)
    const { error, loading, levels } = levelList

    const courseList = useSelector(state => state.courseList)
    const { error: courseListError, loading: courseListLoading, courses } = courseList
    
    useEffect(() => {
      dispatch(getLevelList())
      dispatch(getCourseList())
    }, [dispatch])

    const submitHandler = () => {
      history(`${credit}${award}${programe}${keyword}`)
    } 

    

  return (
    <div className='h-fit w-full flex flex-col gap-12'>
      <section className='h-fit w-full relative overflow-hidden '>
        
        <img src='https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' className='h-[700px] xl:h-[500px] w-full object-cover object-top  absolute -z-50'/>

        <div className='h-[700px] xl:h-[500px] w-full max-w-[1100px] mx-auto px-6'>

        </div>

        <div className='h-fit w-full max-w-[1000px] mx-auto -mt-[300px] md:-mt-[100px] px-6'>
          <form className='bg-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] h-fit w-full z-0 mt-auto  px-6 md:px-12 py-12 flex flex-col gap-6'>
              <div className='flex flex-col md:flex-row  gap-6 items-center justify-between'>
                <div className='w-full max-w-[500px]'>
                  <p className='text-3xl font-semibold'>Search Course</p>
                </div>
                <Input
                  type="text"
                  placeholder="keyword"
                  labelPlacement="outside"
                  variant="bordered"
                  required
                  value={keyword} 
                  onChange={(e) => setKeyword(e.target.value)} 
                  className='w-full shadow-none rounded-none'
                  radius='sm'
                  required
                  size='lg'
                  endContent={
                    <VscSymbolKeyword />
                  }
                />
              </div>
              <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
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
                      <SelectItem onClick={()=> setPrograme(`/${i.name}`)} value={i.name} key={i.id}>
                        {i.name}
                      </SelectItem>
                    ))
                    :
                    ''
                  }
                </Select>
                <Select
                  variant={'bordered'}
                  placeholder="Course credit"
                  className='w-full shadow-none rounded-none'
                  radius='sm'
                  required
                  size='lg'
                  endContent={
                    <BsBookmarksFill  />
                  }
                >
                  {
                    courseListLoading?
                    '':
                    courses?
                    courses.map((i) => (
                      <SelectItem onClick={()=> setCredit(`/${i.course_credit}`)} value={i.course_credit} key={i.id}>
                        {i.course_credit}
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
                    courses.qualification && courses?
                    courses.map((i) => (
                      <SelectItem onClick={()=> setAward(`/${i.qualification.name}`)} value={i.qualification.name} key={i.id}>
                        {i.qualification.name}
                      </SelectItem>
                    ))
                    :
                    ''
                  }
                </Select>
                
                {/* <Button size='lg' isIconOnly variant='solid' className='bg-[#DA0C0C] rounded-md px-4 text-white  min-w-fit justify-center' endContent={<IoSearch className='ml-4'/>}>
                  Search
                </Button> */}
                <Button onClick={() => submitHandler() } color='' radius='sm' className="min-w-fit flex bg-[#DA0C0C] font-medium text-white md:px-6 py-6">
                    <p>Search</p>
                    <IoSearch className='ml-4'/>
                </Button>
              </div>
          </form>
        </div>
        <div className='h-[25px]'></div>
      </section>

      <section className='h-fit w-full relative overflow-hidden px-8'>
        <div className='h-fit w-full max-w-[800px] mx-auto grid grid-cols-2 md:grid-cols-4 justify-center gap-6'>
            <div className='w-full h-full flex flex-col items-center justify-center gap-4 bg-red-50 hover:bg-[#DA0C0C] text-black duration-200 cursor-pointer hover:text-white py-8 px-8 rounded-[8px]'>
              <MdOutlineAdsClick className='text-6xl'/>
              <p className='text-sm font-semibold'>Apply Online</p>
            </div>
            <div className='w-full h-full flex flex-col items-center justify-center gap-4 bg-red-50 hover:bg-[#DA0C0C] text-black duration-200 cursor-pointer hover:text-white py-8 px-8 rounded-[8px]'>
              <MdOutlineVerified  className='text-6xl'/>
              <p className='text-sm font-semibold'>Verify Certificate</p>
            </div>
            <div className='w-full h-full flex flex-col items-center justify-center gap-4 bg-red-50 hover:bg-[#DA0C0C] text-black duration-200 cursor-pointer hover:text-white py-8 px-8 rounded-[8px]'>
              <FaIdCard  className='text-6xl'/>
              <p className='text-sm font-semibold'>Student Portal</p>
            </div>
            <div className='w-full h-full flex flex-col items-center justify-center gap-4 bg-red-50 hover:bg-[#DA0C0C] text-black duration-200 cursor-pointer hover:text-white py-8 px-8 rounded-[8px]'>
              <MdLibraryBooks  className='text-6xl'/>
              <p className='text-sm font-semibold'>E library</p>
            </div>
        </div>
      </section>

      <section className='h-fit w-full relative overflow-hidden px-8'>
        <div className='h-fit w-full max-w-[1100px] mx-auto justify-center gap-6'>
            <div className='flex flex-col'>
              <p className='uppercase text-xs '>Faculty</p>
              <p className='text-4xl font-bold'>Our Faculty</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 pt-8 gap-8'>
              <div className='w-full h-[350px] flex flex-col items-center justify-center gap-4 rounded-[8px] relative bg-black'>
                <img src='https://static.sliit.lk/wp-content/uploads/2019/01/24121140/SLIIT-Faculty-of-Computing.jpg' alt='' className='h-full w-full object-cover object-top absolute z-0' />
                <div className='h-full w-full object-cover absolute  z-20  bg-gradient-to-t from-black to-transparent' ></div>
                <div className='h-fit flex flex-col items-center gap-4 mt-auto px-4 py-8 absolute z-30 bottom-0'>
                  <p className='text-2xl font-semibold text-white'>Faculty of Computing</p>
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
              </div>
              <div className='w-full h-[350px] flex flex-col items-center justify-center gap-4 rounded-[8px] relative bg-black'>
                <img src='https://static.sliit.lk/wp-content/uploads/2019/01/24121140/SLIIT-Faculty-of-Computing.jpg' alt='' className='h-full w-full object-cover object-top absolute z-0' />
                <div className='h-full w-full object-cover absolute  z-20  bg-gradient-to-t from-black to-transparent' ></div>
                <div className='h-fit flex flex-col items-center gap-4 mt-auto px-4 py-8 absolute z-30 bottom-0'>
                  <p className='text-2xl font-semibold text-white'>Faculty of Computing</p>
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
              </div>
              <div className='w-full h-[350px] flex flex-col items-center justify-center gap-4 rounded-[8px] relative bg-black'>
                <img src='https://static.sliit.lk/wp-content/uploads/2019/01/24121140/SLIIT-Faculty-of-Computing.jpg' alt='' className='h-full w-full object-cover object-top absolute z-0' />
                <div className='h-full w-full object-cover absolute  z-20  bg-gradient-to-t from-black to-transparent' ></div>
                <div className='h-fit flex flex-col items-center gap-4 mt-auto px-4 py-8 absolute z-30 bottom-0'>
                  <p className='text-2xl font-semibold text-white'>Faculty of Computing</p>
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
              </div>
              <div className='w-full h-[350px] flex flex-col items-center justify-center gap-4 rounded-[8px] relative bg-black'>
                <img src='https://static.sliit.lk/wp-content/uploads/2019/01/24121140/SLIIT-Faculty-of-Computing.jpg' alt='' className='h-full w-full object-cover object-top absolute z-0' />
                <div className='h-full w-full object-cover absolute  z-20  bg-gradient-to-t from-black to-transparent' ></div>
                <div className='h-fit flex flex-col items-center gap-4 mt-auto px-4 py-8 absolute z-30 bottom-0'>
                  <p className='text-2xl font-semibold text-white'>Faculty of Computing</p>
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
              </div>
            </div>
        </div>
      </section>

      <section className='h-fit w-full relative px-8'>
        <div className='h-fit w-full max-w-[1100px] mx-auto justify-center gap-6'>
            <div className='flex flex-col'>
              <p className='uppercase text-xs '>Courses</p>
              <p className='text-4xl font-bold'>Popular courses</p>
            </div>
            <div className='hidden xl:block py-12'>
              <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="w-full"
                autoplay
              >
                <SwiperSlide className='mb-12 bg-white p-2 h-fit w-[300px] shadow-[0px_4px_25px_rgba(0,0,0,0.05)] rounded-[16px]'>
                  <img src='https://www.napier.ac.uk/-/media/images/course-images/computing-square.ashx?h=380&w=500&hash=158762B9468D74A404C70E3E968CD12B' alt='' className='h-[200px] w-full rounded-[8px]' />
                  <div className='pt-4 flex flex-col gap-4'>
                    <div className=''>
                      <p className='text-xs text-red-600 font-medium'>Post Graduate course</p>
                      <p className='font-semibold text-justify'>Level 7 Diploma in Health and Social Care Management (Postgraduate Diploma)</p>
                    </div>
                    <div className='h-[1px] w-full bg-black/10 ' ></div>
                    <div className='flex flex-row gap-1 items-center justify-between'>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<MdOutlineAccessTime  className='text-base'/>}>
                        4 months
                      </Button>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<MdOutlineBookmarkBorder  className='text-base'/>}>
                        Online
                      </Button>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<FaUsers className='text-base'/>}>
                        3000+
                      </Button>
                    </div>
                      
                  </div>
                </SwiperSlide>
                <SwiperSlide className='mb-12 bg-white p-2 h-fit w-[300px] shadow-[0px_4px_25px_rgba(0,0,0,0.05)] rounded-[16px]'>
                  <img src='https://www.napier.ac.uk/-/media/images/course-images/computing-square.ashx?h=380&w=500&hash=158762B9468D74A404C70E3E968CD12B' alt='' className='h-[200px] w-full rounded-[8px]' />
                  <div className='pt-4 flex flex-col gap-4'>
                    <div className=''>
                      <p className='text-xs text-red-600 font-medium'>Post Graduate course</p>
                      <p className='font-semibold text-justify'>Level 7 Diploma in Health and Social Care Management (Postgraduate Diploma)</p>
                    </div>
                    <div className='h-[1px] w-full bg-black/10 ' ></div>
                    <div className='flex flex-row gap-1 items-center justify-between'>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<MdOutlineAccessTime  className='text-base'/>}>
                        4 months
                      </Button>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<MdOutlineBookmarkBorder  className='text-base'/>}>
                        Online
                      </Button>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<FaUsers className='text-base'/>}>
                        3000+
                      </Button>
                    </div>
                      
                  </div>
                </SwiperSlide>
                <SwiperSlide className='mb-12 bg-white p-2 h-fit w-[300px] shadow-[0px_4px_25px_rgba(0,0,0,0.05)] rounded-[16px]'>
                  <img src='https://www.napier.ac.uk/-/media/images/course-images/computing-square.ashx?h=380&w=500&hash=158762B9468D74A404C70E3E968CD12B' alt='' className='h-[200px] w-full rounded-[8px]' />
                  <div className='pt-4 flex flex-col gap-4'>
                    <div className=''>
                      <p className='text-xs text-red-600 font-medium'>Post Graduate course</p>
                      <p className='font-semibold text-justify'>Level 7 Diploma in Health and Social Care Management (Postgraduate Diploma)</p>
                    </div>
                    <div className='h-[1px] w-full bg-black/10 ' ></div>
                    <div className='flex flex-row gap-1 items-center justify-between'>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<MdOutlineAccessTime  className='text-base'/>}>
                        4 months
                      </Button>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<MdOutlineBookmarkBorder  className='text-base'/>}>
                        Online
                      </Button>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<FaUsers className='text-base'/>}>
                        3000+
                      </Button>
                    </div>
                      
                  </div>
                </SwiperSlide>
                <SwiperSlide className='mb-12 bg-white p-2 h-fit w-[300px] shadow-[0px_4px_25px_rgba(0,0,0,0.05)] rounded-[16px]'>
                  <img src='https://www.napier.ac.uk/-/media/images/course-images/computing-square.ashx?h=380&w=500&hash=158762B9468D74A404C70E3E968CD12B' alt='' className='h-[200px] w-full rounded-[8px]' />
                  <div className='pt-4 flex flex-col gap-4'>
                    <div className=''>
                      <p className='text-xs text-red-600 font-medium'>Post Graduate course</p>
                      <p className='font-semibold text-justify'>Level 7 Diploma in Health and Social Care Management (Postgraduate Diploma)</p>
                    </div>
                    <div className='h-[1px] w-full bg-black/10 ' ></div>
                    <div className='flex flex-row gap-1 items-center justify-between'>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<MdOutlineAccessTime  className='text-base'/>}>
                        4 months
                      </Button>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<MdOutlineBookmarkBorder  className='text-base'/>}>
                        Online
                      </Button>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<FaUsers className='text-base'/>}>
                        3000+
                      </Button>
                    </div>
                      
                  </div>
                </SwiperSlide>
                <SwiperSlide className='mb-12 bg-white p-2 h-fit w-[300px] shadow-[0px_4px_25px_rgba(0,0,0,0.05)] rounded-[16px]'>
                  <img src='https://www.napier.ac.uk/-/media/images/course-images/computing-square.ashx?h=380&w=500&hash=158762B9468D74A404C70E3E968CD12B' alt='' className='h-[200px] w-full rounded-[8px]' />
                  <div className='pt-4 flex flex-col gap-4'>
                    <div className=''>
                      <p className='text-xs text-red-600 font-medium'>Post Graduate course</p>
                      <p className='font-semibold text-justify'>Level 7 Diploma in Health and Social Care Management (Postgraduate Diploma)</p>
                    </div>
                    <div className='h-[1px] w-full bg-black/10 ' ></div>
                    <div className='flex flex-row gap-1 items-center justify-between'>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<MdOutlineAccessTime  className='text-base'/>}>
                        4 months
                      </Button>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<MdOutlineBookmarkBorder  className='text-base'/>}>
                        Online
                      </Button>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<FaUsers className='text-base'/>}>
                        3000+
                      </Button>
                    </div>
                      
                  </div>
                </SwiperSlide>
                <SwiperSlide className='mb-12 bg-white p-2 h-fit w-[300px] shadow-[0px_4px_25px_rgba(0,0,0,0.05)] rounded-[16px]'>
                  <img src='https://www.napier.ac.uk/-/media/images/course-images/computing-square.ashx?h=380&w=500&hash=158762B9468D74A404C70E3E968CD12B' alt='' className='h-[200px] w-full rounded-[8px]' />
                  <div className='pt-4 flex flex-col gap-4'>
                    <div className=''>
                      <p className='text-xs text-red-600 font-medium'>Post Graduate course</p>
                      <p className='font-semibold text-justify'>Level 7 Diploma in Health and Social Care Management (Postgraduate Diploma)</p>
                    </div>
                    <div className='h-[1px] w-full bg-black/10 ' ></div>
                    <div className='flex flex-row gap-1 items-center justify-between'>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<MdOutlineAccessTime  className='text-base'/>}>
                        4 months
                      </Button>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<MdOutlineBookmarkBorder  className='text-base'/>}>
                        Online
                      </Button>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<FaUsers className='text-base'/>}>
                        3000+
                      </Button>
                    </div>
                      
                  </div>
                </SwiperSlide>
              </Swiper>    
            </div>
            <div className='hidden lg:block xl:hidden'>
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="w-full"
                autoplay
              >
                <SwiperSlide className='mb-12 bg-white p-2 h-fit w-[300px] shadow-[0px_4px_25px_rgba(0,0,0,0.05)] rounded-[16px]'>
                  <img src='https://www.napier.ac.uk/-/media/images/course-images/computing-square.ashx?h=380&w=500&hash=158762B9468D74A404C70E3E968CD12B' alt='' className='h-[200px] w-full rounded-[8px]' />
                  <div className='pt-4 flex flex-col gap-4'>
                    <div className=''>
                      <p className='text-xs text-red-600 font-medium'>Post Graduate course</p>
                      <p className='font-semibold text-justify'>Level 7 Diploma in Health and Social Care Management (Postgraduate Diploma)</p>
                    </div>
                    <div className='h-[1px] w-full bg-black/10 ' ></div>
                    <div className='flex flex-row gap-1 items-center justify-between'>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<MdOutlineAccessTime  className='text-base'/>}>
                        4 months
                      </Button>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<MdOutlineBookmarkBorder  className='text-base'/>}>
                        Online
                      </Button>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<FaUsers className='text-base'/>}>
                        3000+
                      </Button>
                    </div>
                      
                  </div>
                </SwiperSlide>
                <SwiperSlide className='mb-12 bg-white p-2 h-fit w-[300px] shadow-[0px_4px_25px_rgba(0,0,0,0.05)] rounded-[16px]'>
                  <img src='https://www.napier.ac.uk/-/media/images/course-images/computing-square.ashx?h=380&w=500&hash=158762B9468D74A404C70E3E968CD12B' alt='' className='h-[200px] w-full rounded-[8px]' />
                  <div className='pt-4 flex flex-col gap-4'>
                    <div className=''>
                      <p className='text-xs text-red-600 font-medium'>Post Graduate course</p>
                      <p className='font-semibold text-justify'>Level 7 Diploma in Health and Social Care Management (Postgraduate Diploma)</p>
                    </div>
                    <div className='h-[1px] w-full bg-black/10 ' ></div>
                    <div className='flex flex-row gap-1 items-center justify-between'>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<MdOutlineAccessTime  className='text-base'/>}>
                        4 months
                      </Button>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<MdOutlineBookmarkBorder  className='text-base'/>}>
                        Online
                      </Button>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<FaUsers className='text-base'/>}>
                        3000+
                      </Button>
                    </div>
                      
                  </div>
                </SwiperSlide>
                <SwiperSlide className='mb-12 bg-white p-2 h-fit w-[300px] shadow-[0px_4px_25px_rgba(0,0,0,0.05)] rounded-[16px]'>
                  <img src='https://www.napier.ac.uk/-/media/images/course-images/computing-square.ashx?h=380&w=500&hash=158762B9468D74A404C70E3E968CD12B' alt='' className='h-[200px] w-full rounded-[8px]' />
                  <div className='pt-4 flex flex-col gap-4'>
                    <div className=''>
                      <p className='text-xs text-red-600 font-medium'>Post Graduate course</p>
                      <p className='font-semibold text-justify'>Level 7 Diploma in Health and Social Care Management (Postgraduate Diploma)</p>
                    </div>
                    <div className='h-[1px] w-full bg-black/10 ' ></div>
                    <div className='flex flex-row gap-1 items-center justify-between'>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<MdOutlineAccessTime  className='text-base'/>}>
                        4 months
                      </Button>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<MdOutlineBookmarkBorder  className='text-base'/>}>
                        Online
                      </Button>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<FaUsers className='text-base'/>}>
                        3000+
                      </Button>
                    </div>
                      
                  </div>
                </SwiperSlide>
                <SwiperSlide className='mb-12 bg-white p-2 h-fit w-[300px] shadow-[0px_4px_25px_rgba(0,0,0,0.05)] rounded-[16px]'>
                  <img src='https://www.napier.ac.uk/-/media/images/course-images/computing-square.ashx?h=380&w=500&hash=158762B9468D74A404C70E3E968CD12B' alt='' className='h-[200px] w-full rounded-[8px]' />
                  <div className='pt-4 flex flex-col gap-4'>
                    <div className=''>
                      <p className='text-xs text-red-600 font-medium'>Post Graduate course</p>
                      <p className='font-semibold text-justify'>Level 7 Diploma in Health and Social Care Management (Postgraduate Diploma)</p>
                    </div>
                    <div className='h-[1px] w-full bg-black/10 ' ></div>
                    <div className='flex flex-row gap-1 items-center justify-between'>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<MdOutlineAccessTime  className='text-base'/>}>
                        4 months
                      </Button>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<MdOutlineBookmarkBorder  className='text-base'/>}>
                        Online
                      </Button>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<FaUsers className='text-base'/>}>
                        3000+
                      </Button>
                    </div>
                      
                  </div>
                </SwiperSlide>
                <SwiperSlide className='mb-12 bg-white p-2 h-fit w-[300px] shadow-[0px_4px_25px_rgba(0,0,0,0.05)] rounded-[16px]'>
                  <img src='https://www.napier.ac.uk/-/media/images/course-images/computing-square.ashx?h=380&w=500&hash=158762B9468D74A404C70E3E968CD12B' alt='' className='h-[200px] w-full rounded-[8px]' />
                  <div className='pt-4 flex flex-col gap-4'>
                    <div className=''>
                      <p className='text-xs text-red-600 font-medium'>Post Graduate course</p>
                      <p className='font-semibold text-justify'>Level 7 Diploma in Health and Social Care Management (Postgraduate Diploma)</p>
                    </div>
                    <div className='h-[1px] w-full bg-black/10 ' ></div>
                    <div className='flex flex-row gap-1 items-center justify-between'>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<MdOutlineAccessTime  className='text-base'/>}>
                        4 months
                      </Button>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<MdOutlineBookmarkBorder  className='text-base'/>}>
                        Online
                      </Button>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<FaUsers className='text-base'/>}>
                        3000+
                      </Button>
                    </div>
                      
                  </div>
                </SwiperSlide>
                <SwiperSlide className='mb-12 bg-white p-2 h-fit w-[300px] shadow-[0px_4px_25px_rgba(0,0,0,0.05)] rounded-[16px]'>
                  <img src='https://www.napier.ac.uk/-/media/images/course-images/computing-square.ashx?h=380&w=500&hash=158762B9468D74A404C70E3E968CD12B' alt='' className='h-[200px] w-full rounded-[8px]' />
                  <div className='pt-4 flex flex-col gap-4'>
                    <div className=''>
                      <p className='text-xs text-red-600 font-medium'>Post Graduate course</p>
                      <p className='font-semibold text-justify'>Level 7 Diploma in Health and Social Care Management (Postgraduate Diploma)</p>
                    </div>
                    <div className='h-[1px] w-full bg-black/10 ' ></div>
                    <div className='flex flex-row gap-1 items-center justify-between'>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<MdOutlineAccessTime  className='text-base'/>}>
                        4 months
                      </Button>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<MdOutlineBookmarkBorder  className='text-base'/>}>
                        Online
                      </Button>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<FaUsers className='text-base'/>}>
                        3000+
                      </Button>
                    </div>
                      
                  </div>
                </SwiperSlide>
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
                <SwiperSlide className='mb-12 bg-white p-2 h-fit w-[300px] shadow-[0px_4px_25px_rgba(0,0,0,0.05)] rounded-[16px]'>
                  <img src='https://www.napier.ac.uk/-/media/images/course-images/computing-square.ashx?h=380&w=500&hash=158762B9468D74A404C70E3E968CD12B' alt='' className='h-[200px] w-full rounded-[8px]' />
                  <div className='pt-4 flex flex-col gap-4'>
                    <div className=''>
                      <p className='text-xs text-red-600 font-medium'>Post Graduate course</p>
                      <p className='font-semibold text-justify'>Level 7 Diploma in Health and Social Care Management (Postgraduate Diploma)</p>
                    </div>
                    <div className='h-[1px] w-full bg-black/10 ' ></div>
                    <div className='flex flex-row gap-1 items-center justify-between'>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<MdOutlineAccessTime  className='text-base'/>}>
                        4 months
                      </Button>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<MdOutlineBookmarkBorder  className='text-base'/>}>
                        Online
                      </Button>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<FaUsers className='text-base'/>}>
                        3000+
                      </Button>
                    </div>
                      
                  </div>
                </SwiperSlide>
                <SwiperSlide className='mb-12 bg-white p-2 h-fit w-[300px] shadow-[0px_4px_25px_rgba(0,0,0,0.05)] rounded-[16px]'>
                  <img src='https://www.napier.ac.uk/-/media/images/course-images/computing-square.ashx?h=380&w=500&hash=158762B9468D74A404C70E3E968CD12B' alt='' className='h-[200px] w-full rounded-[8px]' />
                  <div className='pt-4 flex flex-col gap-4'>
                    <div className=''>
                      <p className='text-xs text-red-600 font-medium'>Post Graduate course</p>
                      <p className='font-semibold text-justify'>Level 7 Diploma in Health and Social Care Management (Postgraduate Diploma)</p>
                    </div>
                    <div className='h-[1px] w-full bg-black/10 ' ></div>
                    <div className='flex flex-row gap-1 items-center justify-between'>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<MdOutlineAccessTime  className='text-base'/>}>
                        4 months
                      </Button>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<MdOutlineBookmarkBorder  className='text-base'/>}>
                        Online
                      </Button>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<FaUsers className='text-base'/>}>
                        3000+
                      </Button>
                    </div>
                      
                  </div>
                </SwiperSlide>
                <SwiperSlide className='mb-12 bg-white p-2 h-fit w-[300px] shadow-[0px_4px_25px_rgba(0,0,0,0.05)] rounded-[16px]'>
                  <img src='https://www.napier.ac.uk/-/media/images/course-images/computing-square.ashx?h=380&w=500&hash=158762B9468D74A404C70E3E968CD12B' alt='' className='h-[200px] w-full rounded-[8px]' />
                  <div className='pt-4 flex flex-col gap-4'>
                    <div className=''>
                      <p className='text-xs text-red-600 font-medium'>Post Graduate course</p>
                      <p className='font-semibold text-justify'>Level 7 Diploma in Health and Social Care Management (Postgraduate Diploma)</p>
                    </div>
                    <div className='h-[1px] w-full bg-black/10 ' ></div>
                    <div className='flex flex-row gap-1 items-center justify-between'>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<MdOutlineAccessTime  className='text-base'/>}>
                        4 months
                      </Button>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<MdOutlineBookmarkBorder  className='text-base'/>}>
                        Online
                      </Button>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<FaUsers className='text-base'/>}>
                        3000+
                      </Button>
                    </div>
                      
                  </div>
                </SwiperSlide>
                <SwiperSlide className='mb-12 bg-white p-2 h-fit w-[300px] shadow-[0px_4px_25px_rgba(0,0,0,0.05)] rounded-[16px]'>
                  <img src='https://www.napier.ac.uk/-/media/images/course-images/computing-square.ashx?h=380&w=500&hash=158762B9468D74A404C70E3E968CD12B' alt='' className='h-[200px] w-full rounded-[8px]' />
                  <div className='pt-4 flex flex-col gap-4'>
                    <div className=''>
                      <p className='text-xs text-red-600 font-medium'>Post Graduate course</p>
                      <p className='font-semibold text-justify'>Level 7 Diploma in Health and Social Care Management (Postgraduate Diploma)</p>
                    </div>
                    <div className='h-[1px] w-full bg-black/10 ' ></div>
                    <div className='flex flex-row gap-1 items-center justify-between'>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<MdOutlineAccessTime  className='text-base'/>}>
                        4 months
                      </Button>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<MdOutlineBookmarkBorder  className='text-base'/>}>
                        Online
                      </Button>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<FaUsers className='text-base'/>}>
                        3000+
                      </Button>
                    </div>
                      
                  </div>
                </SwiperSlide>
                <SwiperSlide className='mb-12 bg-white p-2 h-fit w-[300px] shadow-[0px_4px_25px_rgba(0,0,0,0.05)] rounded-[16px]'>
                  <img src='https://www.napier.ac.uk/-/media/images/course-images/computing-square.ashx?h=380&w=500&hash=158762B9468D74A404C70E3E968CD12B' alt='' className='h-[200px] w-full rounded-[8px]' />
                  <div className='pt-4 flex flex-col gap-4'>
                    <div className=''>
                      <p className='text-xs text-red-600 font-medium'>Post Graduate course</p>
                      <p className='font-semibold text-justify'>Level 7 Diploma in Health and Social Care Management (Postgraduate Diploma)</p>
                    </div>
                    <div className='h-[1px] w-full bg-black/10 ' ></div>
                    <div className='flex flex-row gap-1 items-center justify-between'>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<MdOutlineAccessTime  className='text-base'/>}>
                        4 months
                      </Button>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<MdOutlineBookmarkBorder  className='text-base'/>}>
                        Online
                      </Button>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<FaUsers className='text-base'/>}>
                        3000+
                      </Button>
                    </div>
                      
                  </div>
                </SwiperSlide>
                <SwiperSlide className='mb-12 bg-white p-2 h-fit w-[300px] shadow-[0px_4px_25px_rgba(0,0,0,0.05)] rounded-[16px]'>
                  <img src='https://www.napier.ac.uk/-/media/images/course-images/computing-square.ashx?h=380&w=500&hash=158762B9468D74A404C70E3E968CD12B' alt='' className='h-[200px] w-full rounded-[8px]' />
                  <div className='pt-4 flex flex-col gap-4'>
                    <div className=''>
                      <p className='text-xs text-red-600 font-medium'>Post Graduate course</p>
                      <p className='font-semibold text-justify'>Level 7 Diploma in Health and Social Care Management (Postgraduate Diploma)</p>
                    </div>
                    <div className='h-[1px] w-full bg-black/10 ' ></div>
                    <div className='flex flex-row gap-1 items-center justify-between'>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<MdOutlineAccessTime  className='text-base'/>}>
                        4 months
                      </Button>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<MdOutlineBookmarkBorder  className='text-base'/>}>
                        Online
                      </Button>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<FaUsers className='text-base'/>}>
                        3000+
                      </Button>
                    </div>
                      
                  </div>
                </SwiperSlide>
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
                <SwiperSlide className='mb-12 bg-white p-2 h-fit w-[300px] shadow-[0px_4px_25px_rgba(0,0,0,0.05)] rounded-[16px]'>
                  <img src='https://www.napier.ac.uk/-/media/images/course-images/computing-square.ashx?h=380&w=500&hash=158762B9468D74A404C70E3E968CD12B' alt='' className='h-[200px] w-full rounded-[8px]' />
                  <div className='pt-4 flex flex-col gap-4'>
                    <div className=''>
                      <p className='text-xs text-red-600 font-medium'>Post Graduate course</p>
                      <p className='font-semibold text-justify'>Level 7 Diploma in Health and Social Care Management (Postgraduate Diploma)</p>
                    </div>
                    <div className='h-[1px] w-full bg-black/10 ' ></div>
                    <div className='flex flex-row gap-1 items-center justify-between'>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<MdOutlineAccessTime  className='text-base'/>}>
                        4 months
                      </Button>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<MdOutlineBookmarkBorder  className='text-base'/>}>
                        Online
                      </Button>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<FaUsers className='text-base'/>}>
                        3000+
                      </Button>
                    </div>
                      
                  </div>
                </SwiperSlide>
                <SwiperSlide className='mb-12 bg-white p-2 h-fit w-[300px] shadow-[0px_4px_25px_rgba(0,0,0,0.05)] rounded-[16px]'>
                  <img src='https://www.napier.ac.uk/-/media/images/course-images/computing-square.ashx?h=380&w=500&hash=158762B9468D74A404C70E3E968CD12B' alt='' className='h-[200px] w-full rounded-[8px]' />
                  <div className='pt-4 flex flex-col gap-4'>
                    <div className=''>
                      <p className='text-xs text-red-600 font-medium'>Post Graduate course</p>
                      <p className='font-semibold text-justify'>Level 7 Diploma in Health and Social Care Management (Postgraduate Diploma)</p>
                    </div>
                    <div className='h-[1px] w-full bg-black/10 ' ></div>
                    <div className='flex flex-row gap-1 items-center justify-between'>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<MdOutlineAccessTime  className='text-base'/>}>
                        4 months
                      </Button>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<MdOutlineBookmarkBorder  className='text-base'/>}>
                        Online
                      </Button>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<FaUsers className='text-base'/>}>
                        3000+
                      </Button>
                    </div>
                      
                  </div>
                </SwiperSlide>
                <SwiperSlide className='mb-12 bg-white p-2 h-fit w-[300px] shadow-[0px_4px_25px_rgba(0,0,0,0.05)] rounded-[16px]'>
                  <img src='https://www.napier.ac.uk/-/media/images/course-images/computing-square.ashx?h=380&w=500&hash=158762B9468D74A404C70E3E968CD12B' alt='' className='h-[200px] w-full rounded-[8px]' />
                  <div className='pt-4 flex flex-col gap-4'>
                    <div className=''>
                      <p className='text-xs text-red-600 font-medium'>Post Graduate course</p>
                      <p className='font-semibold text-justify'>Level 7 Diploma in Health and Social Care Management (Postgraduate Diploma)</p>
                    </div>
                    <div className='h-[1px] w-full bg-black/10 ' ></div>
                    <div className='flex flex-row gap-1 items-center justify-between'>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<MdOutlineAccessTime  className='text-base'/>}>
                        4 months
                      </Button>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<MdOutlineBookmarkBorder  className='text-base'/>}>
                        Online
                      </Button>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<FaUsers className='text-base'/>}>
                        3000+
                      </Button>
                    </div>
                      
                  </div>
                </SwiperSlide>
                <SwiperSlide className='mb-12 bg-white p-2 h-fit w-[300px] shadow-[0px_4px_25px_rgba(0,0,0,0.05)] rounded-[16px]'>
                  <img src='https://www.napier.ac.uk/-/media/images/course-images/computing-square.ashx?h=380&w=500&hash=158762B9468D74A404C70E3E968CD12B' alt='' className='h-[200px] w-full rounded-[8px]' />
                  <div className='pt-4 flex flex-col gap-4'>
                    <div className=''>
                      <p className='text-xs text-red-600 font-medium'>Post Graduate course</p>
                      <p className='font-semibold text-justify'>Level 7 Diploma in Health and Social Care Management (Postgraduate Diploma)</p>
                    </div>
                    <div className='h-[1px] w-full bg-black/10 ' ></div>
                    <div className='flex flex-row gap-1 items-center justify-between'>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<MdOutlineAccessTime  className='text-base'/>}>
                        4 months
                      </Button>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<MdOutlineBookmarkBorder  className='text-base'/>}>
                        Online
                      </Button>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<FaUsers className='text-base'/>}>
                        3000+
                      </Button>
                    </div>
                      
                  </div>
                </SwiperSlide>
                <SwiperSlide className='mb-12 bg-white p-2 h-fit w-[300px] shadow-[0px_4px_25px_rgba(0,0,0,0.05)] rounded-[16px]'>
                  <img src='https://www.napier.ac.uk/-/media/images/course-images/computing-square.ashx?h=380&w=500&hash=158762B9468D74A404C70E3E968CD12B' alt='' className='h-[200px] w-full rounded-[8px]' />
                  <div className='pt-4 flex flex-col gap-4'>
                    <div className=''>
                      <p className='text-xs text-red-600 font-medium'>Post Graduate course</p>
                      <p className='font-semibold text-justify'>Level 7 Diploma in Health and Social Care Management (Postgraduate Diploma)</p>
                    </div>
                    <div className='h-[1px] w-full bg-black/10 ' ></div>
                    <div className='flex flex-row gap-1 items-center justify-between'>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<MdOutlineAccessTime  className='text-base'/>}>
                        4 months
                      </Button>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<MdOutlineBookmarkBorder  className='text-base'/>}>
                        Online
                      </Button>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<FaUsers className='text-base'/>}>
                        3000+
                      </Button>
                    </div>
                      
                  </div>
                </SwiperSlide>
                <SwiperSlide className='mb-12 bg-white p-2 h-fit w-[300px] shadow-[0px_4px_25px_rgba(0,0,0,0.05)] rounded-[16px]'>
                  <img src='https://www.napier.ac.uk/-/media/images/course-images/computing-square.ashx?h=380&w=500&hash=158762B9468D74A404C70E3E968CD12B' alt='' className='h-[200px] w-full rounded-[8px]' />
                  <div className='pt-4 flex flex-col gap-4'>
                    <div className=''>
                      <p className='text-xs text-red-600 font-medium'>Post Graduate course</p>
                      <p className='font-semibold text-justify'>Level 7 Diploma in Health and Social Care Management (Postgraduate Diploma)</p>
                    </div>
                    <div className='h-[1px] w-full bg-black/10 ' ></div>
                    <div className='flex flex-row gap-1 items-center justify-between'>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<MdOutlineAccessTime  className='text-base'/>}>
                        4 months
                      </Button>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<MdOutlineBookmarkBorder  className='text-base'/>}>
                        Online
                      </Button>
                      <Button size='sm' variant='light' className='w-fit px-2 gap-1 text-xs text-gray-500' startContent={<FaUsers className='text-base'/>}>
                        3000+
                      </Button>
                    </div>
                      
                  </div>
                </SwiperSlide>
              </Swiper>    
            </div>
        </div>
      </section>

      <section className='h-fit w-full relative overflow-hidden px-8'>
        <div className='h-fit w-full max-w-[1100px] mx-auto justify-center gap-6 '>
          <div className='flex flex-col pb-8'>
            <p className='uppercase text-xs '>Unlock Your Future</p>
            <p className='text-4xl font-bold'>Available Scholarships</p>
          </div>
          <div className='w-fit mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='bg-white border-1 border-gray-200 p-6 max-w-[300px] gap-8 flex flex-col rounded-[8px] relative overflow-hidden'>
              <div className='flex flex-col relative z-30'>
                <p className='text-5xl font-bold capitalize'>Certificate</p>
                <p className='text-sm text-gray-500'>lorem ipsum somekindof text i like most</p>
              </div>
              <div className='flex items-center gap-4 relative z-30'>
                <Button radius='full' isIconOnly variant='solid' className='bg-red-600 text-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] ' startContent={<IoArrowForwardOutline/>}>

                </Button>
                <p className='text-xs text-gray-500'>Learn more</p>
              </div>
              <div className='h-[300px] w-[300px] bg-red-50 absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 rounded-full flex items-start justify-start z-0'>
                <div className='h-[150px] w-[150px] flex flex-col items-end justify-center text-[#DA0C0C] text-right pr-4'>
                  <p className='text-4xl font-bold'>25%</p>
                  <p className='text-xs'>Special offer</p>
                </div>
              </div>
            </div>
            <div className='bg-white border-1 border-gray-200 p-6 max-w-[300px] gap-8 flex flex-col rounded-[8px] relative overflow-hidden'>
              <div className='flex flex-col relative z-30'>
                <p className='text-5xl font-bold capitalize'>Diploma</p>
                <p className='text-sm text-gray-500'>lorem ipsum somekindof text i like most</p>
              </div>
              <div className='flex items-center gap-4 relative z-30'>
                <Button radius='full' isIconOnly variant='solid' className='bg-red-600 text-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] ' startContent={<IoArrowForwardOutline/>}>

                </Button>
                <p className='text-xs text-gray-500'>Learn more</p>
              </div>
              <div className='h-[300px] w-[300px] bg-red-50 absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 rounded-full flex items-start justify-start z-0'>
                <div className='h-[150px] w-[150px] flex flex-col items-end justify-center text-[#DA0C0C] text-right pr-4'>
                  <p className='text-4xl font-bold'>35%</p>
                  <p className='text-xs'>Special offer</p>
                </div>
              </div>
            </div>
            <div className='bg-white border-1 border-gray-200 p-6 max-w-[300px] gap-8 flex flex-col rounded-[8px] relative overflow-hidden'>
              <div className='flex flex-col relative z-30'>
                <p className='text-5xl font-bold capitalize'>Foundation</p>
                <p className='text-sm text-gray-500'>lorem ipsum somekindof text i like most</p>
              </div>
              <div className='flex items-center gap-4 relative z-30'>
                <Button radius='full' isIconOnly variant='solid' className='bg-red-600 text-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] ' startContent={<IoArrowForwardOutline/>}>

                </Button>
                <p className='text-xs text-gray-500'>Learn more</p>
              </div>
              <div className='h-[300px] w-[300px] bg-red-50 absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 rounded-full flex items-start justify-start z-0'>
                <div className='h-[150px] w-[150px] flex flex-col items-end justify-center text-[#DA0C0C] text-right pr-4'>
                  <p className='text-4xl font-bold'>15%</p>
                  <p className='text-xs'>Special offer</p>
                </div>
              </div>
            </div>
            <div className='bg-white border-1 border-gray-200 p-6 max-w-[300px] gap-8 flex flex-col rounded-[8px] relative overflow-hidden'>
              <div className='flex flex-col relative z-30'>
                <p className='text-5xl font-bold capitalize'>Higher Diploma</p>
                <p className='text-sm text-gray-500'>lorem ipsum somekindof text i like most</p>
              </div>
              <div className='flex items-center gap-4 relative z-30'>
                <Button radius='full' isIconOnly variant='solid' className='bg-red-600 text-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] ' startContent={<IoArrowForwardOutline/>}>

                </Button>
                <p className='text-xs text-gray-500'>Learn more</p>
              </div>
              <div className='h-[300px] w-[300px] bg-red-50 absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 rounded-full flex items-start justify-start z-0'>
                <div className='h-[150px] w-[150px] flex flex-col items-end justify-center text-[#DA0C0C] text-right pr-4'>
                  <p className='text-4xl font-bold'>5%</p>
                  <p className='text-xs'>Special offer</p>
                </div>
              </div>
            </div>
            <div className='bg-white border-1 border-gray-200 p-6 max-w-[300px] gap-8 flex flex-col rounded-[8px] relative overflow-hidden'>
              <div className='flex flex-col relative z-30'>
                <p className='text-5xl font-bold capitalize'>Graduate diploma</p>
                <p className='text-sm text-gray-500'>lorem ipsum somekindof text i like most</p>
              </div>
              <div className='flex items-center gap-4 relative z-30'>
                <Button radius='full' isIconOnly variant='solid' className='bg-red-600 text-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] ' startContent={<IoArrowForwardOutline/>}>

                </Button>
                <p className='text-xs text-gray-500'>Learn more</p>
              </div>
              <div className='h-[300px] w-[300px] bg-red-50 absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 rounded-full flex items-start justify-start z-0'>
                <div className='h-[150px] w-[150px] flex flex-col items-end justify-center text-[#DA0C0C] text-right pr-4'>
                  <p className='text-4xl font-bold'>55%</p>
                  <p className='text-xs'>Special offer</p>
                </div>
              </div>
            </div>
            <div className='bg-white border-1 border-gray-200 p-6 max-w-[300px] gap-8 flex flex-col rounded-[8px] relative overflow-hidden'>
              <div className='flex flex-col relative z-30'>
                <p className='text-5xl font-bold capitalize'>Post graduate diploma</p>
                <p className='text-sm text-gray-500'>lorem ipsum somekindof text i like most</p>
              </div>
              <div className='flex items-center gap-4 relative z-30'>
                <Button radius='full' isIconOnly variant='solid' className='bg-red-600 text-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] ' startContent={<IoArrowForwardOutline/>}>

                </Button>
                <p className='text-xs text-gray-500'>Learn more</p>
              </div>
              <div className='h-[300px] w-[300px] bg-red-50 absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 rounded-full flex items-start justify-start z-0'>
                <div className='h-[150px] w-[150px] flex flex-col items-end justify-center text-[#DA0C0C] text-right pr-4'>
                  <p className='text-4xl font-bold'>55%</p>
                  <p className='text-xs'>Special offer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='h-fit w-full relative overflow-hidden bg-red-50 py-14'>
        <div className='h-fit w-full max-w-[1100px] mx-auto px-8'>
            <div className='flex flex-col pb-8'>
              <p className='uppercase text-xs '>Qualifications</p>
              <p className='text-4xl font-bold'>Our Qualifications</p>
            </div>

            <div className='hidden md:block'>
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                autoplay
                modules={[FreeMode, Pagination, Autoplay]}
                className=""
              >
                <SwiperSlide className='bg-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] rounded-[8px] mb-8 w-[250px]'>
                  <img src='https://kingsedu.ac/wp-content/uploads/2021/02/OTHM-logo.jpg' alt='' className='h-[150px] w-[200px] object-contain scale-80 mx-auto' />
                  <div className='flex flex-col py-6 gap-4 px-8 '>
                    <div className='flex flex-col-reverse'>
                    <p className='text-xs text-gray-400'>OTHM is uk based awarding orgazization</p>
                    <p className='text-based uppercase font-semibold'>othm ienc sri lanka</p>
                    </div>
                    <p className='text-sm text-[#DA0C0C]'>More Details...</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='bg-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] rounded-[8px] mb-8 w-[250px]'>
                  <img src='https://kingsedu.ac/wp-content/uploads/2021/02/OTHM-logo.jpg' alt='' className='h-[150px] w-[200px] object-contain scale-80 mx-auto' />
                  <div className='flex flex-col py-6 gap-4 px-8 '>
                    <div className='flex flex-col-reverse'>
                    <p className='text-xs text-gray-400'>OTHM is uk based awarding orgazization</p>
                    <p className='text-based uppercase font-semibold'>othm ienc sri lanka</p>
                    </div>
                    <p className='text-sm text-[#DA0C0C]'>More Details...</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='bg-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] rounded-[8px] mb-8 w-[250px]'>
                  <img src='https://kingsedu.ac/wp-content/uploads/2021/02/OTHM-logo.jpg' alt='' className='h-[150px] w-[200px] object-contain scale-80 mx-auto' />
                  <div className='flex flex-col py-6 gap-4 px-8 '>
                    <div className='flex flex-col-reverse'>
                    <p className='text-xs text-gray-400'>OTHM is uk based awarding orgazization</p>
                    <p className='text-based uppercase font-semibold'>othm ienc sri lanka</p>
                    </div>
                    <p className='text-sm text-[#DA0C0C]'>More Details...</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='bg-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] rounded-[8px] mb-8 w-[250px]'>
                  <img src='https://kingsedu.ac/wp-content/uploads/2021/02/OTHM-logo.jpg' alt='' className='h-[150px] w-[200px] object-contain scale-80 mx-auto' />
                  <div className='flex flex-col py-6 gap-4 px-8 '>
                    <div className='flex flex-col-reverse'>
                    <p className='text-xs text-gray-400'>OTHM is uk based awarding orgazization</p>
                    <p className='text-based uppercase font-semibold'>othm ienc sri lanka</p>
                    </div>
                    <p className='text-sm text-[#DA0C0C]'>More Details...</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='bg-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] rounded-[8px] mb-8 w-[250px]'>
                  <img src='https://kingsedu.ac/wp-content/uploads/2021/02/OTHM-logo.jpg' alt='' className='h-[150px] w-[200px] object-contain scale-80 mx-auto' />
                  <div className='flex flex-col py-6 gap-4 px-8 '>
                    <div className='flex flex-col-reverse'>
                    <p className='text-xs text-gray-400'>OTHM is uk based awarding orgazization</p>
                    <p className='text-based uppercase font-semibold'>othm ienc sri lanka</p>
                    </div>
                    <p className='text-sm text-[#DA0C0C]'>More Details...</p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            <div className='hidden sm:block md:hidden'>
              <Swiper
                slidesPerView={2}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                autoplay
                modules={[FreeMode, Pagination, Autoplay]}
                className=""
              >
                <SwiperSlide className='bg-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] rounded-[8px] mb-8 w-[250px]'>
                  <img src='https://kingsedu.ac/wp-content/uploads/2021/02/OTHM-logo.jpg' alt='' className='h-[150px] w-[200px] object-contain scale-80 mx-auto' />
                  <div className='flex flex-col py-6 gap-4 px-8 '>
                    <div className='flex flex-col-reverse'>
                    <p className='text-xs text-gray-400'>OTHM is uk based awarding orgazization</p>
                    <p className='text-based uppercase font-semibold'>othm ienc sri lanka</p>
                    </div>
                    <p className='text-sm text-[#DA0C0C]'>More Details...</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='bg-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] rounded-[8px] mb-8 w-[250px]'>
                  <img src='https://kingsedu.ac/wp-content/uploads/2021/02/OTHM-logo.jpg' alt='' className='h-[150px] w-[200px] object-contain scale-80 mx-auto' />
                  <div className='flex flex-col py-6 gap-4 px-8 '>
                    <div className='flex flex-col-reverse'>
                    <p className='text-xs text-gray-400'>OTHM is uk based awarding orgazization</p>
                    <p className='text-based uppercase font-semibold'>othm ienc sri lanka</p>
                    </div>
                    <p className='text-sm text-[#DA0C0C]'>More Details...</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='bg-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] rounded-[8px] mb-8 w-[250px]'>
                  <img src='https://kingsedu.ac/wp-content/uploads/2021/02/OTHM-logo.jpg' alt='' className='h-[150px] w-[200px] object-contain scale-80 mx-auto' />
                  <div className='flex flex-col py-6 gap-4 px-8 '>
                    <div className='flex flex-col-reverse'>
                    <p className='text-xs text-gray-400'>OTHM is uk based awarding orgazization</p>
                    <p className='text-based uppercase font-semibold'>othm ienc sri lanka</p>
                    </div>
                    <p className='text-sm text-[#DA0C0C]'>More Details...</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='bg-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] rounded-[8px] mb-8 w-[250px]'>
                  <img src='https://kingsedu.ac/wp-content/uploads/2021/02/OTHM-logo.jpg' alt='' className='h-[150px] w-[200px] object-contain scale-80 mx-auto' />
                  <div className='flex flex-col py-6 gap-4 px-8 '>
                    <div className='flex flex-col-reverse'>
                    <p className='text-xs text-gray-400'>OTHM is uk based awarding orgazization</p>
                    <p className='text-based uppercase font-semibold'>othm ienc sri lanka</p>
                    </div>
                    <p className='text-sm text-[#DA0C0C]'>More Details...</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='bg-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] rounded-[8px] mb-8 w-[250px]'>
                  <img src='https://kingsedu.ac/wp-content/uploads/2021/02/OTHM-logo.jpg' alt='' className='h-[150px] w-[200px] object-contain scale-80 mx-auto' />
                  <div className='flex flex-col py-6 gap-4 px-8 '>
                    <div className='flex flex-col-reverse'>
                    <p className='text-xs text-gray-400'>OTHM is uk based awarding orgazization</p>
                    <p className='text-based uppercase font-semibold'>othm ienc sri lanka</p>
                    </div>
                    <p className='text-sm text-[#DA0C0C]'>More Details...</p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            <div className='sm:hidden'>
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                autoplay
                modules={[FreeMode, Pagination, Autoplay]}
                className=""
              >
                <SwiperSlide className='bg-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] rounded-[8px] mb-8 w-[250px]'>
                  <img src='https://kingsedu.ac/wp-content/uploads/2021/02/OTHM-logo.jpg' alt='' className='h-[150px] w-[200px] object-contain scale-80 mx-auto' />
                  <div className='flex flex-col py-6 gap-4 px-8 '>
                    <div className='flex flex-col-reverse'>
                    <p className='text-xs text-gray-400'>OTHM is uk based awarding orgazization</p>
                    <p className='text-based uppercase font-semibold'>othm ienc sri lanka</p>
                    </div>
                    <p className='text-sm text-[#DA0C0C]'>More Details...</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='bg-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] rounded-[8px] mb-8 w-[250px]'>
                  <img src='https://kingsedu.ac/wp-content/uploads/2021/02/OTHM-logo.jpg' alt='' className='h-[150px] w-[200px] object-contain scale-80 mx-auto' />
                  <div className='flex flex-col py-6 gap-4 px-8 '>
                    <div className='flex flex-col-reverse'>
                    <p className='text-xs text-gray-400'>OTHM is uk based awarding orgazization</p>
                    <p className='text-based uppercase font-semibold'>othm ienc sri lanka</p>
                    </div>
                    <p className='text-sm text-[#DA0C0C]'>More Details...</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='bg-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] rounded-[8px] mb-8 w-[250px]'>
                  <img src='https://kingsedu.ac/wp-content/uploads/2021/02/OTHM-logo.jpg' alt='' className='h-[150px] w-[200px] object-contain scale-80 mx-auto' />
                  <div className='flex flex-col py-6 gap-4 px-8 '>
                    <div className='flex flex-col-reverse'>
                    <p className='text-xs text-gray-400'>OTHM is uk based awarding orgazization</p>
                    <p className='text-based uppercase font-semibold'>othm ienc sri lanka</p>
                    </div>
                    <p className='text-sm text-[#DA0C0C]'>More Details...</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='bg-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] rounded-[8px] mb-8 w-[250px]'>
                  <img src='https://kingsedu.ac/wp-content/uploads/2021/02/OTHM-logo.jpg' alt='' className='h-[150px] w-[200px] object-contain scale-80 mx-auto' />
                  <div className='flex flex-col py-6 gap-4 px-8 '>
                    <div className='flex flex-col-reverse'>
                    <p className='text-xs text-gray-400'>OTHM is uk based awarding orgazization</p>
                    <p className='text-based uppercase font-semibold'>othm ienc sri lanka</p>
                    </div>
                    <p className='text-sm text-[#DA0C0C]'>More Details...</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='bg-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] rounded-[8px] mb-8 w-[250px]'>
                  <img src='https://kingsedu.ac/wp-content/uploads/2021/02/OTHM-logo.jpg' alt='' className='h-[150px] w-[200px] object-contain scale-80 mx-auto' />
                  <div className='flex flex-col py-6 gap-4 px-8 '>
                    <div className='flex flex-col-reverse'>
                    <p className='text-xs text-gray-400'>OTHM is uk based awarding orgazization</p>
                    <p className='text-based uppercase font-semibold'>othm ienc sri lanka</p>
                    </div>
                    <p className='text-sm text-[#DA0C0C]'>More Details...</p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

        </div>
      </section>

      <section className='h-fit w-full relative overflow-hidden bg-white py-14'>
        <div className='h-fit w-full max-w-[1100px] mx-auto px-8'>
            <div className='flex flex-col pb-8'>
              <p className='uppercase text-xs '>Qualifications</p>
              <p className='text-4xl font-bold'>Our Qualifications</p>
            </div>

            <div className='hidden md:block'>
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                autoplay
                modules={[FreeMode, Pagination, Autoplay]}
                className=""
              >
                <SwiperSlide className='bg-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] rounded-[8px] mb-8 w-[250px]'>
                  <img src='https://kingsedu.ac/wp-content/uploads/2021/02/OTHM-logo.jpg' alt='' className='h-[150px] w-[200px] object-contain scale-80 mx-auto' />
                  <div className='flex flex-col py-6 gap-4 px-8 '>
                    <div className='flex flex-col-reverse'>
                    <p className='text-xs text-gray-400'>OTHM is uk based awarding orgazization</p>
                    <p className='text-based uppercase font-semibold'>othm ienc sri lanka</p>
                    </div>
                    <p className='text-sm text-[#DA0C0C]'>More Details...</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='bg-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] rounded-[8px] mb-8 w-[250px]'>
                  <img src='https://iebc.lk/wp-content/uploads/2021/08/logos.jpg' alt='' className='h-[150px] w-[200px] object-contain scale-80 mx-auto' />
                  <div className='flex flex-col py-6 gap-4 px-8 '>
                    <div className='flex flex-col-reverse'>
                    <p className='text-xs text-gray-400'>OTHM is uk based awarding orgazization</p>
                    <p className='text-based uppercase font-semibold'>othm ienc sri lanka</p>
                    </div>
                    <p className='text-sm text-[#DA0C0C]'>More Details...</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='bg-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] rounded-[8px] mb-8 w-[250px]'>
                  <img src='https://iebc.lk/wp-content/uploads/2021/08/logos.jpg' alt='' className='h-[150px] w-[200px] object-contain scale-80 mx-auto' />
                  <div className='flex flex-col py-6 gap-4 px-8 '>
                    <div className='flex flex-col-reverse'>
                    <p className='text-xs text-gray-400'>OTHM is uk based awarding orgazization</p>
                    <p className='text-based uppercase font-semibold'>othm ienc sri lanka</p>
                    </div>
                    <p className='text-sm text-[#DA0C0C]'>More Details...</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='bg-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] rounded-[8px] mb-8 w-[250px]'>
                  <img src='https://kingsedu.ac/wp-content/uploads/2021/02/OTHM-logo.jpg' alt='' className='h-[150px] w-[200px] object-contain scale-80 mx-auto' />
                  <div className='flex flex-col py-6 gap-4 px-8 '>
                    <div className='flex flex-col-reverse'>
                    <p className='text-xs text-gray-400'>OTHM is uk based awarding orgazization</p>
                    <p className='text-based uppercase font-semibold'>othm ienc sri lanka</p>
                    </div>
                    <p className='text-sm text-[#DA0C0C]'>More Details...</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='bg-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] rounded-[8px] mb-8 w-[250px]'>
                  <img src='https://kingsedu.ac/wp-content/uploads/2021/02/OTHM-logo.jpg' alt='' className='h-[150px] w-[200px] object-contain scale-80 mx-auto' />
                  <div className='flex flex-col py-6 gap-4 px-8 '>
                    <div className='flex flex-col-reverse'>
                    <p className='text-xs text-gray-400'>OTHM is uk based awarding orgazization</p>
                    <p className='text-based uppercase font-semibold'>othm ienc sri lanka</p>
                    </div>
                    <p className='text-sm text-[#DA0C0C]'>More Details...</p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            <div className='hidden sm:block md:hidden'>
              <Swiper
                slidesPerView={2}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                autoplay
                modules={[FreeMode, Pagination, Autoplay]}
                className=""
              >
                <SwiperSlide className='bg-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] rounded-[8px] mb-8 w-[250px]'>
                  <img src='https://kingsedu.ac/wp-content/uploads/2021/02/OTHM-logo.jpg' alt='' className='h-[150px] w-[200px] object-contain scale-80 mx-auto' />
                  <div className='flex flex-col py-6 gap-4 px-8 '>
                    <div className='flex flex-col-reverse'>
                    <p className='text-xs text-gray-400'>OTHM is uk based awarding orgazization</p>
                    <p className='text-based uppercase font-semibold'>othm ienc sri lanka</p>
                    </div>
                    <p className='text-sm text-[#DA0C0C]'>More Details...</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='bg-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] rounded-[8px] mb-8 w-[250px]'>
                  <img src='https://kingsedu.ac/wp-content/uploads/2021/02/OTHM-logo.jpg' alt='' className='h-[150px] w-[200px] object-contain scale-80 mx-auto' />
                  <div className='flex flex-col py-6 gap-4 px-8 '>
                    <div className='flex flex-col-reverse'>
                    <p className='text-xs text-gray-400'>OTHM is uk based awarding orgazization</p>
                    <p className='text-based uppercase font-semibold'>othm ienc sri lanka</p>
                    </div>
                    <p className='text-sm text-[#DA0C0C]'>More Details...</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='bg-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] rounded-[8px] mb-8 w-[250px]'>
                  <img src='https://kingsedu.ac/wp-content/uploads/2021/02/OTHM-logo.jpg' alt='' className='h-[150px] w-[200px] object-contain scale-80 mx-auto' />
                  <div className='flex flex-col py-6 gap-4 px-8 '>
                    <div className='flex flex-col-reverse'>
                    <p className='text-xs text-gray-400'>OTHM is uk based awarding orgazization</p>
                    <p className='text-based uppercase font-semibold'>othm ienc sri lanka</p>
                    </div>
                    <p className='text-sm text-[#DA0C0C]'>More Details...</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='bg-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] rounded-[8px] mb-8 w-[250px]'>
                  <img src='https://kingsedu.ac/wp-content/uploads/2021/02/OTHM-logo.jpg' alt='' className='h-[150px] w-[200px] object-contain scale-80 mx-auto' />
                  <div className='flex flex-col py-6 gap-4 px-8 '>
                    <div className='flex flex-col-reverse'>
                    <p className='text-xs text-gray-400'>OTHM is uk based awarding orgazization</p>
                    <p className='text-based uppercase font-semibold'>othm ienc sri lanka</p>
                    </div>
                    <p className='text-sm text-[#DA0C0C]'>More Details...</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='bg-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] rounded-[8px] mb-8 w-[250px]'>
                  <img src='https://kingsedu.ac/wp-content/uploads/2021/02/OTHM-logo.jpg' alt='' className='h-[150px] w-[200px] object-contain scale-80 mx-auto' />
                  <div className='flex flex-col py-6 gap-4 px-8 '>
                    <div className='flex flex-col-reverse'>
                    <p className='text-xs text-gray-400'>OTHM is uk based awarding orgazization</p>
                    <p className='text-based uppercase font-semibold'>othm ienc sri lanka</p>
                    </div>
                    <p className='text-sm text-[#DA0C0C]'>More Details...</p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            <div className='sm:hidden'>
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                autoplay
                modules={[FreeMode, Pagination, Autoplay]}
                className=""
              >
                <SwiperSlide className='bg-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] rounded-[8px] mb-8 w-[250px]'>
                  <img src='https://kingsedu.ac/wp-content/uploads/2021/02/OTHM-logo.jpg' alt='' className='h-[150px] w-[200px] object-contain scale-80 mx-auto' />
                  <div className='flex flex-col py-6 gap-4 px-8 '>
                    <div className='flex flex-col-reverse'>
                    <p className='text-xs text-gray-400'>OTHM is uk based awarding orgazization</p>
                    <p className='text-based uppercase font-semibold'>othm ienc sri lanka</p>
                    </div>
                    <p className='text-sm text-[#DA0C0C]'>More Details...</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='bg-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] rounded-[8px] mb-8 w-[250px]'>
                  <img src='https://kingsedu.ac/wp-content/uploads/2021/02/OTHM-logo.jpg' alt='' className='h-[150px] w-[200px] object-contain scale-80 mx-auto' />
                  <div className='flex flex-col py-6 gap-4 px-8 '>
                    <div className='flex flex-col-reverse'>
                    <p className='text-xs text-gray-400'>OTHM is uk based awarding orgazization</p>
                    <p className='text-based uppercase font-semibold'>othm ienc sri lanka</p>
                    </div>
                    <p className='text-sm text-[#DA0C0C]'>More Details...</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='bg-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] rounded-[8px] mb-8 w-[250px]'>
                  <img src='https://kingsedu.ac/wp-content/uploads/2021/02/OTHM-logo.jpg' alt='' className='h-[150px] w-[200px] object-contain scale-80 mx-auto' />
                  <div className='flex flex-col py-6 gap-4 px-8 '>
                    <div className='flex flex-col-reverse'>
                    <p className='text-xs text-gray-400'>OTHM is uk based awarding orgazization</p>
                    <p className='text-based uppercase font-semibold'>othm ienc sri lanka</p>
                    </div>
                    <p className='text-sm text-[#DA0C0C]'>More Details...</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='bg-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] rounded-[8px] mb-8 w-[250px]'>
                  <img src='https://kingsedu.ac/wp-content/uploads/2021/02/OTHM-logo.jpg' alt='' className='h-[150px] w-[200px] object-contain scale-80 mx-auto' />
                  <div className='flex flex-col py-6 gap-4 px-8 '>
                    <div className='flex flex-col-reverse'>
                    <p className='text-xs text-gray-400'>OTHM is uk based awarding orgazization</p>
                    <p className='text-based uppercase font-semibold'>othm ienc sri lanka</p>
                    </div>
                    <p className='text-sm text-[#DA0C0C]'>More Details...</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='bg-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] rounded-[8px] mb-8 w-[250px]'>
                  <img src='https://kingsedu.ac/wp-content/uploads/2021/02/OTHM-logo.jpg' alt='' className='h-[150px] w-[200px] object-contain scale-80 mx-auto' />
                  <div className='flex flex-col py-6 gap-4 px-8 '>
                    <div className='flex flex-col-reverse'>
                    <p className='text-xs text-gray-400'>OTHM is uk based awarding orgazization</p>
                    <p className='text-based uppercase font-semibold'>othm ienc sri lanka</p>
                    </div>
                    <p className='text-sm text-[#DA0C0C]'>More Details...</p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

        </div>
      </section>


    </div>
  )
}

export default HomeScreen