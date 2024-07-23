import React, { useEffect, useState } from 'react'
import {Tabs, Tab, Input, Link, Button, Card, CardBody, CardHeader, Spinner} from "@nextui-org/react";import { MdAccessTime } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import {Divider} from "@nextui-org/react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";
import { getCourseDetails, getCourseList } from '../actions/courseActions';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { find } from 'lodash';
import parse from 'html-react-parser';
import { Skeleton } from "@nextui-org/react";
import uk from '../assets/ukQualification.png'
import eu from '../assets/euQ.png' 
import  wes  from '../assets/WES.png'
import  ugc  from '../assets/UGC.png'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { EffectFlip, Autoplay, Navigation } from 'swiper/modules';
import { usePDF } from 'react-to-pdf';


import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/react";
import { FaWhatsapp } from 'react-icons/fa';

const downloadFile = (url, filename) => {
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename); // Set the download attribute with the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Clean up the DOM
  };
  

const CourseScreen = () => {

    const {courseSlug} = useParams()

    const dispatch = useDispatch()
    const history = useNavigate()
    const location = useLocation()

    const courseDetails = useSelector(state => state.courseDetails)
    const { error, loading, course } = courseDetails

    const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});

    useEffect(() => {
        window.scroll(0,0);
      }, [location]);

    useEffect(() => {
        if (courseSlug) {
            dispatch(getCourseDetails(courseSlug))
        }
    }, [courseSlug])
    
    const handleDownload = () => {
        if(course){
            downloadFile(course.brochure, 'file.pdf');
        }
      };
    
  return (
    <div ref={targetRef} className='w-full h-fit '>
        {
            loading?
            <div className='h-fit w-full flex justify-start mt-[100px]'>
                <Spinner size="md" />
              </div>:
            course ?
            <section className='relative overflow-hidden pb-12'>
                <img src={course.image} alt='' className='h-[400px] w-full object-cover relative -z-40 hidden lg:flex' />
                <div className='absolute top-0 h-[400px] w-full bg-black/75 z-0 flex flex-col items-center justify-center'>
                    <Breadcrumbs 
                        classNames={{
                            list: "",
                        }}
                        itemClasses={{
                            item: "text-white/60 text-center data-[current=true]:text-white",
                            separator: "text-white/40 text-center",
                        }}
                    className='text-3xl w-fit font-medium  mx-auto'>
                        <BreadcrumbItem className='text-3xl max-w-full' ><p className='text-sm text-center md:text-2xl capitalize font-bold'>{course.faculty.name}</p></BreadcrumbItem>
                        <BreadcrumbItem className='text-3xl max-w-full' ><p className='text-sm text-center md:text-2xl capitalize font-bold'>Course</p></BreadcrumbItem><br/>
                        <BreadcrumbItem className='text-3xl max-w-full' ><p className='text-sm text-center md:text-2xl capitalize font-bold'>{course.name}</p></BreadcrumbItem>
                    </Breadcrumbs>
                </div>
                <div className='w-full h-fit max-w-[1024px] mx-auto bg-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] lg:-mt-[100px] relative z-10 grid grid-cols-1 md:grid-cols-5 gap-4 sm:p-4 lg:p-8 rounded-[16px]'>
                    <div className='w-full h-full md:col-span-3 flex flex-col gap-12'>
                        <div className='w-full h-full md:col-span-3 flex flex-col gap-8'>
                            <img src={course.image} alt='' className='h-[250px] w-full object-cover rounded-[8px] relative z-0' />
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
                                    <BreadcrumbItem className='text-3xl ' ><p className='text-sm text-center md:text-2xl capitalize font-bold'>{course.faculty.name}</p></BreadcrumbItem>
                                    <BreadcrumbItem className='text-3xl ' ><p className='text-sm text-center md:text-2xl capitalize font-bold'>Course</p></BreadcrumbItem><br/>
                                    <BreadcrumbItem className='text-3xl ' ><p className='text-sm text-center md:text-2xl capitalize font-bold'>{course.name}</p></BreadcrumbItem>
                                </Breadcrumbs>
                                <div className='flex gap-2'>
                                    <Button size='sm' radius='full' variant='bordered' className='px-2 py-2 gap-1 border-[#DA0C0C] border-opacity-50 text-[#DA0C0C] ' startContent={<MdAccessTime/>}>
                                        6 months
                                    </Button>
                                    <Button size='sm' radius='full' variant='bordered' className='px-2 py-2 gap-1 border-[#DA0C0C] border-opacity-50 text-[#DA0C0C] ' startContent={<FaRegCircleUser />}>
                                        Online
                                    </Button>
                                </div>
                                <p className='text-3xl font-bold'>{course.name}</p>
                                <div className='flex flex-col sm:flex-row flex-wrap justify-between gap-4 '>
                                    <div className='flex flex-col'>
                                        <p className='text-xs opacity-50'>Level</p>
                                        <p className='text-sm lg:text-xs font-medium capitalize'>{course.programme.name}</p>
                                    </div>
                                    <div className='flex flex-col'>
                                        <p className='text-xs opacity-50'>Class on</p>
                                        <p className='text-sm lg:text-xs font-medium capitalize'>{course.class_on}</p>
                                    </div>
                                    <div className='flex flex-col'>
                                        <p className='text-xs opacity-50'>Faculty</p>
                                        <p className='text-sm lg:text-xs font-medium capitalize'>{course.faculty.name}</p>
                                    </div>
                                    <div className='flex flex-col'>
                                        <p className='text-xs opacity-50'>Awarding by</p>
                                        <p className='text-sm lg:text-xs font-medium capitalize'>{course.qualification.name}</p>
                                    </div>

                                </div>
                            </div>
                            <div className='w-full h-fit px-6 lg:px-0'>
                                <Tabs size='md' aria-label="Options" 
                                classNames={{
                                    tabList: "bg-transparent",
                                    cursor: "bg-[#DA0C0C]",
                                    tab: "",
                                    tabContent: "group-data-[selected=true]:text-[white]"
                                }}>
                                    <Tab key="overview" title="Overview">
                                        <div className='h-fit flex flex-col gap-4 text-sm text-left p-6 border-[1px] border-black/20 rounded-[8px]'>
                                            <div className='flex flex-col gap-4 text-sm'>
                                                {parse(course.overview)}
                                            </div>
                                        </div>
                                    </Tab>
                                    <Tab key="requirements" title="Requirements">
                                        <div className='h-fit flex flex-col gap-4 text-sm text-left p-6 border-[1px] border-black/20 rounded-[8px]'>
                                            <div className='flex flex-col gap-4 text-sm'>
                                                {parse(course.requirements)}
                                            </div>
                                        </div>
                                    </Tab>
                                    <Tab key="units" title="Units">
                                        <div className='h-fit flex flex-col gap-4 text-sm text-left p-6 border-[1px] border-black/20 rounded-[8px]'>
                                            {parse(course.units)}
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
                                                        course && course.units?
                                                        course.units.map(i => (
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
                            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 px-8 md:px-0'>
                                <Button className='w-full h-fit bg-[#0099FF] py-4 rounded-[8px] flex items-center justify-center gap-4 text-white text-lg font-bold hover:text-xl duration-200'>Apply online</Button>
                                <Button className='w-full h-fit bg-[#0099FF] py-4 rounded-[8px] flex items-center justify-center gap-4 text-white text-lg font-bold hover:text-xl duration-200'>Pay online</Button>
                                <Button className='w-full h-fit bg-[#0099FF] py-4 rounded-[8px] flex items-center justify-center gap-4 text-white text-lg font-bold hover:text-xl duration-200'>Inquire</Button>
                                <Button className='w-full h-fit bg-[#0099FF] py-4 rounded-[8px] flex items-center justify-center gap-4 text-white text-lg font-bold hover:text-xl duration-200'>Contact us</Button>
                            </div>
                        </div>  
                    </div>

                    <div className='h-fit w-full px-7 lg:px-0 md:col-span-2'>
                        <div className='w-full h-full  flex flex-col gap-4 border-[1px] border-[#DA0C0C] border-opacity-25 rounded-[8px] p-4'>
                            <img src={course.qualification.image} alt='' className='w-full h-fit bg-cover' />
                            
                            <p className='text-xl font-bold text-[#DA0C0C] text-center' >Qualification Awarded by "{course.qualification.name}"</p>
                            {/* <img src="https://enc.lk/assets/img/lrn/level-6-graduate-diploma-bachelor's-degree.gif" alt='' className='w-full h-fit bg-cover' /> */}
                            <div className='h-[1px] w-full bg-[#da0c0c] bg-opacity-25'>

                            </div>
                            <div className='flex flex-col gap-4 bg-white px-8 py-8 rounded-[8px] border-[1px] border-[#DA0C0C] border-opacity-25'>
                                
                                <div className=' bg-[#DA0C0C] relative'>
                                    <Skeleton className='text-[#DA0C0C] bg-[#DA0C0C]'>
                                        <img src={uk} alt='' className='h-[50px] w-full object-contain'/>
                                    </Skeleton>
                                    {
                                        course.name.includes('EU') ?
                                        <img src={eu} alt='' className='h-[50px] w-full object-cover absolute top-0'/>:
                                        <img src={uk} alt='' className='h-[50px] w-full object-cover absolute top-0'/>
                                    }
                                </div>
                                <div className='max-w-full'>
                                    {
                                        course.programme.slug=='diploma'?
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
                                                        {course.programme.name}
                                                    </p>
                                                    <div className='flex gap-3'>
                                                        
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className='flex flex-col gap-1 justify-center bg-[#DA0C0C] min-h-[150px] rounded-[8px] p-4'>
                                            
                                                    <p className='text-3xl font-bold text-white mx-auto text-center'>Scholarship Available</p>
                                                
                                                </div>
                                            </SwiperSlide>
                                        </Swiper>:
                                        course.programme.slug=='foundation-level-3'?
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
                                                    <p  className='text-lg px-2 font-bold text-white uppercase text-center'>
                                                        {course.programme.name}
                                                    </p>
                                                    <div className='flex gap-3'>
                                                        <div className='bg-white text-black capitalize rounded-[8px] h-fit py-4 px-4 flex items-center justify-center'>
                                                            <p className='font-semibold'>Level 3</p>
                                                        </div>
                                                        <div className='bg-white text-black capitalize rounded-[8px] h-fit py-4 px-4 flex items-center justify-center'>
                                                            <p className='font-semibold'>120 credits</p>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className='flex flex-col gap-1 justify-center bg-[#DA0C0C] min-h-[150px] rounded-[8px] p-4'>
                                            
                                                    <p className='text-3xl font-bold text-white mx-auto text-center'>Scholarship Available</p>
                                                
                                                </div>
                                            </SwiperSlide>
                                        </Swiper>:
                                        course.programme.slug=='higher-diploma-level-4-5'?
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
                                                    <p  className='text-lg px-2 font-bold text-white uppercase text-center'>
                                                        {course.programme.name}
                                                    </p>
                                                    <div className='flex gap-3'>
                                                    <div className='bg-white text-black capitalize rounded-[8px] h-fit py-4 px-4 flex items-center justify-center'>
                                                            <p className='font-semibold'>Level 4 & 5</p>
                                                        </div>
                                                        <div className='bg-white text-black capitalize rounded-[8px] h-fit py-4 px-4 flex items-center justify-center'>
                                                            <p className='font-semibold'>240 credits</p>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className='flex flex-col gap-1 justify-center bg-[#DA0C0C] min-h-[150px] rounded-[8px] p-4'>
                                            
                                                    <p className='text-3xl font-bold text-white mx-auto text-center'>Scholarship Available</p>
                                                
                                                </div>
                                            </SwiperSlide>
                                        </Swiper>:
                                        course.programme.slug=='higher-diploma-level-5'?
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
                                                    <p  className='text-lg px-2 font-bold text-white uppercase text-center'>
                                                        {course.programme.name}
                                                    </p>
                                                    <div className='flex gap-3'>
                                                    <div className='bg-white text-black capitalize rounded-[8px] h-fit py-4 px-4 flex items-center justify-center'>
                                                            <p className='font-semibold'>Level 5</p>
                                                        </div>
                                                        <div className='bg-white text-black capitalize rounded-[8px] h-fit py-4 px-4 flex items-center justify-center'>
                                                            <p className='font-semibold'>120 credits</p>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className='flex flex-col gap-1 justify-center bg-[#DA0C0C] min-h-[150px] rounded-[8px] p-4'>
                                            
                                                    <p className='text-3xl font-bold text-white mx-auto text-center'>Scholarship Available</p>
                                                
                                                </div>
                                            </SwiperSlide>
                                        </Swiper>:
                                        course.programme.slug=='graduate-diploma-level-6'?
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
                                                    <p  className='text-lg px-2 font-bold text-white uppercase text-center'>
                                                        {course.programme.name}
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
                                            
                                                    <p className='text-3xl font-bold text-white mx-auto text-center'>Scholarship Available</p>
                                                
                                                </div>
                                            </SwiperSlide>
                                        </Swiper>:
                                        course.programme.slug=='bachelors-degree'?
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
                                                    <p  className='text-lg px-2 font-bold text-white uppercase text-center'>
                                                        {course.programme.name}
                                                    </p>
                                                    <div className='flex gap-3'>
                                                        <div className='bg-white text-black capitalize rounded-[8px] h-fit py-4 px-4 flex items-center justify-center'>
                                                            <img src={wes} alt='' className='h-12 w-12 object-contain '/>
                                                        </div>
                                                        <div className='bg-white text-black capitalize rounded-[8px] h-fit py-4 px-4 flex items-center justify-center'>
                                                        <img src={ugc}  alt='' className='h-12 w-12 object-contain '/>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className='flex flex-col gap-1 justify-center bg-[#DA0C0C] min-h-[150px] rounded-[8px] p-4'>
                                            
                                                    <p className='text-3xl font-bold text-white mx-auto text-center'>Scholarship Available</p>
                                                
                                                </div>
                                            </SwiperSlide>
                                        </Swiper>:
                                        course.programme.slug=='bachelors-degree-top-up'?
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
                                                    <p  className='text-lg px-2 font-bold text-white uppercase text-center'>
                                                        {course.programme.name}
                                                    </p>
                                                    <div className='flex gap-3'>
                                                        <div className='bg-white text-black capitalize rounded-[8px] h-fit py-4 px-4 flex items-center justify-center'>
                                                            {
                                                                course.f_gif_logo1? (
                                                                <img src={course.f_gif_logo1} alt='' className='h-12 w-12 object-contain '/>
                                                                )
                                                                :
                                                                <p className='font-semibold'>{course.f_1_name}</p>
                                                            }
                                                        </div>
                                                        <div className='bg-white text-black capitalize rounded-[8px] h-fit py-4 px-4 flex items-center justify-center'>
                                                            {
                                                                course.f_gif_logo1? (
                                                                <img src={course.f_gif_logo2} alt='' className='h-12 w-12 object-contain '/>
                                                                )
                                                                :
                                                                <p className='font-semibold'>{course.f_2_name}</p>
                                                            }
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className='flex flex-col gap-1 justify-center bg-[#DA0C0C] min-h-[150px] rounded-[8px] p-4'>
                                            
                                                    <p className='text-3xl font-bold text-white mx-auto text-center'>Scholarship Available</p>
                                                
                                                </div>
                                            </SwiperSlide>
                                        </Swiper>:
                                        course.programme.slug=='post-graduate-diploma-level-7'?
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
                                                    <p  className='text-lg px-2 font-bold text-white uppercase text-center'>
                                                        {course.programme.name}
                                                    </p>
                                                    <div className='flex gap-3'>
                                                    <div className='bg-white text-black capitalize rounded-[8px] h-fit py-4 px-4 flex items-center justify-center'>
                                                            <p className='font-semibold'>Level 3</p>
                                                        </div>
                                                        <div className='bg-white text-black capitalize rounded-[8px] h-fit py-4 px-4 flex items-center justify-center'>
                                                            <p className='font-semibold'>120 credits</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className='flex flex-col gap-1 justify-center bg-[#DA0C0C] min-h-[150px] rounded-[8px] p-4'>
                                            
                                                    <p className='text-3xl font-bold text-white mx-auto text-center'>Scholarship Available</p>
                                                
                                                </div>
                                            </SwiperSlide>
                                        </Swiper>:
                                        course.programme.slug=='masters-degree'?
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
                                                    <p  className='text-lg px-2 font-bold text-white uppercase text-center'>
                                                        {course.programme.name}
                                                    </p>
                                                    <div className='flex gap-3'>
                                                    <div className='bg-white text-black capitalize rounded-[8px] h-fit py-4 px-4 flex items-center justify-center'>
                                                            <img src={wes} alt='' className='h-12 w-12 object-contain '/>
                                                        </div>
                                                        <div className='bg-white text-black capitalize rounded-[8px] h-fit py-4 px-4 flex items-center justify-center'>
                                                        <img src={ugc} alt='' className='h-12 w-12 object-contain '/>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className='flex flex-col gap-1 justify-center bg-[#DA0C0C] min-h-[150px] rounded-[8px] p-4'>
                                            
                                                    <p className='text-3xl font-bold text-white mx-auto text-center'>Scholarship Available</p>
                                                
                                                </div>
                                            </SwiperSlide>
                                        </Swiper>:
                                        course.programme.slug=='masters-degree-top-up'?
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
                                                    <p  className='text-lg px-2 font-bold text-white uppercase text-center'>
                                                        {course.programme.name}
                                                    </p>
                                                    <div className='flex gap-3'>
                                                    <div className='bg-white text-black capitalize rounded-[8px] h-fit py-4 px-4 flex items-center justify-center'>
                                                            <img src={wes} alt='' className='h-12 w-12 object-contain '/>
                                                        </div>
                                                        <div className='bg-white text-black capitalize rounded-[8px] h-fit py-4 px-4 flex items-center justify-center'>
                                                        <img src={ugc} alt='' className='h-12 w-12 object-contain '/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className='flex flex-col gap-1 justify-center bg-[#DA0C0C] min-h-[150px] rounded-[8px] p-4'>
                                            
                                                    <p className='text-3xl font-bold text-white mx-auto text-center'>Scholarship Available</p>
                                                
                                                </div>
                                            </SwiperSlide>
                                        </Swiper>:
                                        course.programme.slug=='doctoral-diploma-level-8'?
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
                                                    <p  className='text-lg px-2 font-bold text-white uppercase text-center'>
                                                        {course.programme.name}
                                                    </p>
                                                    <div className='flex gap-3'>
                                                        <div className='bg-white text-black capitalize rounded-[8px] h-fit py-4 px-4 flex items-center justify-center'>
                                                            {
                                                                course.f_gif_logo1? (
                                                                <img src={course.f_gif_logo1} alt='' className='h-12 w-12 object-contain '/>
                                                                )
                                                                :
                                                                <p className='font-semibold'>{course.f_1_name}</p>
                                                            }
                                                        </div>
                                                        <div className='bg-white text-black capitalize rounded-[8px] h-fit py-4 px-4 flex items-center justify-center'>
                                                            {
                                                                course.f_gif_logo1? (
                                                                <img src={course.f_gif_logo2} alt='' className='h-12 w-12 object-contain '/>
                                                                )
                                                                :
                                                                <p className='font-semibold'>{course.f_2_name}</p>
                                                            }
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className='flex flex-col gap-1 justify-center bg-[#DA0C0C] min-h-[150px] rounded-[8px] p-4'>
                                            
                                                    <p className='text-3xl font-bold text-white mx-auto text-center'>Scholarship Available</p>
                                                
                                                </div>
                                            </SwiperSlide>
                                        </Swiper>:
                                        ''


                                    }
                                </div>
                                <div className=' flex items-center justify-center animate-pulse'>
                                    <img src='https://i.pinimg.com/originals/e7/d1/99/e7d199bc42eeeb001962c6ed63d8b098.gif' alt='' className='h-20 w-h-20' />
                                    <p className='text-lg font-bold text-center '>+94 77 828 9898</p>
                                </div>
                                
                                
                            </div>
                            <Button to={course.image} download={true} 
                            // onClick={() => toPDF()} 
                            onClick={handleDownload}
                            variant='solid' color='danger' className='w-full bg-blue-950 text-white' >
                                <p className='text-2xl font-black'>E</p>
                                <p>Brouchers</p>
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