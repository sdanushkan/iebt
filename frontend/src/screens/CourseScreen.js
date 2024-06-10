import React, { useEffect, useState } from 'react'
import {Tabs, Tab, Input, Link, Button, Card, CardBody, CardHeader} from "@nextui-org/react";import { MdAccessTime } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import {Divider} from "@nextui-org/react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";
import { getCourseList } from '../actions/courseActions';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { find } from 'lodash';
import parse from 'html-react-parser';
import { Skeleton } from "@nextui-org/react";
import uk from '../assets/ukQualification.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { EffectFlip, Autoplay, Navigation } from 'swiper/modules';


import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/react";
import { FaWhatsapp } from 'react-icons/fa';

const CourseScreen = () => {

    const {course} = useParams()

    const [nCourse, setNCourse] = useState('')

    const dispatch = useDispatch()
    const history = useNavigate()
    const location = useLocation()

    const courseList = useSelector(state => state.courseList)
    const { error: courseListError, loading: courseListLoading, courses } = courseList

    useEffect(() => {
        dispatch(getCourseList())
    }, [dispatch])

    // useEffect(() => {
    //     window.scroll(0,0);
    //   }, [location]);

    useEffect(() => {
        if (course) {
            setNCourse(courses.find( f => f.slug == course))
        }
    }, [course])
    
    
  return (
    <div className='w-full h-fit'>
        {
            nCourse?
            <section className='relative'>
                <img src={nCourse.image} alt='' className='h-[400px] w-full object-cover relative -z-40 hidden lg:flex' />
                <div className='absolute top-0 h-[400px] w-full bg-black/50 z-0 flex flex-col items-center justify-center'>
                    <Breadcrumbs 
                        classNames={{
                            list: "",
                        }}
                        itemClasses={{
                            item: "text-white/60 text-center data-[current=true]:text-white",
                            separator: "text-white/40 text-center",
                        }}
                    className='text-3xl font-medium  max-w-fit mx-auto'>
                        <BreadcrumbItem className='text-3xl ' ><p className='text-sm text-center md:text-2xl capitalize font-bold'>{nCourse.faculty.name}</p></BreadcrumbItem>
                        <BreadcrumbItem className='text-3xl ' ><p className='text-sm text-center md:text-2xl capitalize font-bold'>Course</p></BreadcrumbItem><br/>
                        <BreadcrumbItem className='text-3xl ' ><p className='text-sm text-center md:text-2xl capitalize font-bold'>{nCourse.name}</p></BreadcrumbItem>
                    </Breadcrumbs>
                </div>
                <div className='w-full h-fit max-w-[1100px] mx-auto bg-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] lg:-mt-[100px] relative z-10 grid grid-cols-1 md:grid-cols-5 gap-4 sm:p-4 lg:p-8'>
                    <div className='w-full h-full md:col-span-3 flex flex-col gap-12'>
                        <div className='w-full h-full md:col-span-3 flex flex-col gap-8'>
                            <img src={nCourse.image} alt='' className='h-[250px] w-full object-cover' />
                            <div className='flex flex-col gap-6 px-6 lg:px-0'>
                                <Breadcrumbs 
                                    classNames={{
                                        list: "",
                                    }}
                                    itemClasses={{
                                        item: "text-black/60 text-center data-[current=true]:text-black",
                                        separator: "text-black/40 text-center",
                                    }}
                                className='text-3xl font-medium  max-w-fit mx-auto md:hidden'>
                                    <BreadcrumbItem className='text-3xl ' ><p className='text-sm text-center md:text-2xl capitalize font-bold'>{nCourse.faculty.name}</p></BreadcrumbItem>
                                    <BreadcrumbItem className='text-3xl ' ><p className='text-sm text-center md:text-2xl capitalize font-bold'>Course</p></BreadcrumbItem><br/>
                                    <BreadcrumbItem className='text-3xl ' ><p className='text-sm text-center md:text-2xl capitalize font-bold'>{nCourse.name}</p></BreadcrumbItem>
                                </Breadcrumbs>
                                <div className='flex gap-2'>
                                    <Button size='sm' radius='full' variant='bordered' className='px-2 py-2 gap-1 text-gray-500' startContent={<MdAccessTime/>}>
                                        6 months
                                    </Button>
                                    <Button size='sm' radius='full' variant='bordered' className='px-2 py-2 gap-1 text-gray-500' startContent={<FaRegCircleUser />}>
                                        Online
                                    </Button>
                                </div>
                                <p className='text-3xl font-bold'>{nCourse.name}</p>
                                <div className='flex flex-col sm:flex-row flex-wrap justify-between gap-4 '>
                                    <div className='flex flex-col'>
                                        <p className='text-xs opacity-50'>Level</p>
                                        <p className='text-sm lg:text-xs font-medium capitalize'>{nCourse.programe.name}</p>
                                    </div>
                                    <div className='flex flex-col'>
                                        <p className='text-xs opacity-50'>Class on</p>
                                        <p className='text-sm lg:text-xs font-medium capitalize'>{nCourse.class_on}</p>
                                    </div>
                                    <div className='flex flex-col'>
                                        <p className='text-xs opacity-50'>Faculty</p>
                                        <p className='text-sm lg:text-xs font-medium capitalize'>{nCourse.faculty.name}</p>
                                    </div>
                                    <div className='flex flex-col'>
                                        <p className='text-xs opacity-50'>Awarding by</p>
                                        <p className='text-sm lg:text-xs font-medium capitalize'>{nCourse.qualification.name}</p>
                                    </div>

                                </div>
                            </div>
                            <div className='w-full h-fit px-6 lg:px-0'>
                                <Tabs size='md' aria-label="Options">
                                    <Tab key="overview" title="Overview">
                                        <div className='h-fit flex flex-col gap-4 text-sm text-left p-6 border-[1px] border-black/20 rounded-[8px]'>
                                            <div className='flex flex-col gap-4 text-sm'>
                                                {nCourse.overview}
                                            </div>
                                        </div>
                                    </Tab>
                                    <Tab key="requirements" title="Requirements">
                                        <div className='h-fit flex flex-col gap-4 text-sm text-left p-6 border-[1px] border-black/20 rounded-[8px]'>
                                            <div className='flex flex-col gap-4 text-sm'>
                                                {parse(nCourse.requirements)}
                                            </div>
                                        </div>
                                    </Tab>
                                    <Tab key="units" title="Units">
                                        <div className='h-fit flex flex-col gap-4 text-sm text-left p-6 border-[1px] border-black/20 rounded-[8px]'>
                                            {parse(nCourse.units)}
                                            {/* <Table aria-label="Example static collection table">
                                                <TableHeader>
                                                    <TableColumn>Module</TableColumn>
                                                    <TableColumn>Level</TableColumn>
                                                    <TableColumn>Credit</TableColumn>
                                                </TableHeader>
                                                <TableBody>
                                                    {
                                                        courseListLoading?
                                                        '':
                                                        nCourse && nCourse.units?
                                                        nCourse.units.map(i => (
                                                            <TableRow key={i.id}>
                                                                <TableCell>{i.name}</TableCell>
                                                                <TableCell>{i.level.name}</TableCell>
                                                                <TableCell>{i.credit_count}</TableCell>
                                                            </TableRow>
                                                        ))
                                                        :
                                                        ""
                                                    }
                                                </TableBody>
                                            </Table> */}
                                        </div>
                                    </Tab>
                                </Tabs>
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 px-8 md:px-0'>
                                <Button className='w-full h-fit bg-[#0099FF] py-4 rounded-[8px] flex items-center justify-center gap-4 text-white text-lg font-bold hover:text-xl duration-200'>Apply online</Button>
                                <Button className='w-full h-fit bg-[#0099FF] py-4 rounded-[8px] flex items-center justify-center gap-4 text-white text-lg font-bold hover:text-xl duration-200'>Pay online</Button>
                                <Button className='w-full h-fit bg-[#0099FF] py-4 rounded-[8px] flex items-center justify-center gap-4 text-white text-lg font-bold hover:text-xl duration-200'>Inquire</Button>
                                <Button className='w-full h-fit bg-[#0099FF] py-4 rounded-[8px] flex items-center justify-center gap-4 text-white text-lg font-bold hover:text-xl duration-200'>Contact us</Button>
                            </div>
                        </div>  
                    </div>

                    <div className='h-fit w-full px-7 lg:px-0 md:col-span-2'>
                        <div className='w-full h-full  flex flex-col gap-4 border-[1px] border-black/20 rounded-[8px] p-4'>
                            <img src={nCourse.qualification.image} alt='' className='w-full h-fit bg-cover' />
                            <p className='text-xl font-bold text-[#DA0C0C]' >{nCourse.qualification.name}</p>
                            {/* <img src="https://enc.lk/assets/img/lrn/level-6-graduate-diploma-bachelor's-degree.gif" alt='' className='w-full h-fit bg-cover' /> */}
                            <div className='h-[1px] w-full bg-[#da0c0c]'>

                            </div>
                            <div className='flex flex-col gap-4 bg-white px-8 py-8 rounded-[8px] border-[1px] border-[#DA0C0C] border-opacity-10'>
                                
                                <div className=' bg-[#DA0C0C] relative'>
                                    <Skeleton className='text-[#DA0C0C] bg-[#DA0C0C]'>
                                        <img src={uk} alt='' className='h-[50px] w-full object-cover'/>
                                    </Skeleton>
                                    <img src={uk} alt='' className='h-[50px] w-full object-cover absolute top-0'/>
                                </div>
                                <div className='max-w-full'>
                                    <Swiper
                                        effect={'flip'}
                                        grabCursor={true}
                                        autoplay={{
                                            delay: 2000,
                                            disableOnInteraction: false,
                                        }}
                                        modules={[EffectFlip, Autoplay]}
                                    >
                                        <SwiperSlide>
                                        <div className='min-h-[150px] flex flex-col items-center justify-center bg-[#DA0C0C] rounded-[8px] gap-2'>
                                            <p  className='text-2xl font-bold text-white uppercase text-center'>
                                                Graduate diploma
                                            </p>
                                            <div className='flex gap-3'>
                                                <div className='bg-white text-black capitalize rounded-[8px] h-fit py-4 px-4 flex items-center justify-center'>
                                                    <p className='font-semibold'>Level 6</p>
                                                </div>
                                                <div className='bg-white text-black capitalize rounded-[8px] h-fit py-4 px-4 flex items-center justify-center'>
                                                    <p className='font-semibold'>120 credits</p>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='flex flex-col gap-1 justify-center bg-[#DA0C0C] min-h-[150px] rounded-[8px] p-4'>
                                            <p className='text-xl font-semibold text-white '>Up to </p>
                                            <p className='text-6xl font-bold text-white mx-auto'>56%</p>
                                            <p className='text-xl font-semibold text-white ml-auto'>Scholarship</p>
                                        </div>
                                        </SwiperSlide>
                                    </Swiper>

                                </div>
                                <div className=' flex flex-col items-center justify-center gap-2'>
                                    <div className='flex items-center justify-center gap-2 opacity-75'>
                                        <FaWhatsapp className='text-base text-center'/>
                                        <p className='text-base font-medium  text-center'>contact us</p>
                                    </div>
                                    <p className='text-xl font-bold text-center'>+94 77 828 9898</p>
                                </div>
                                
                                
                            </div>
                            <Button variant='bordered'>
                                
                            </Button>
                        </div>
                    </div>
                </div>
            </section>:
            ''
        }
        
    </div>
  )
}

export default CourseScreen