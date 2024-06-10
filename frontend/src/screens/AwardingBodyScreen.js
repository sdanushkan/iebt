import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { getCourseList, getLevelList } from '../actions/courseActions'
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/react";
import parse from 'html-react-parser';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay, FreeMode } from 'swiper/modules';

import _ from 'lodash';

const AwardingBodyScreen = () => {
    const {name} = useParams()

    const dispatch = useDispatch()
    const history = useNavigate()
    const location = useLocation()

    const courseList = useSelector(state => state.courseList)
    const { error: courseListError, loading: courseListLoading, courses } = courseList

    const levelList = useSelector(state => state.levelList)
    const { error, loading, levels } = levelList

    useEffect(() => {
        dispatch(getCourseList())
        dispatch(getLevelList())
    }, [dispatch])

    useEffect(() => {
        window.scroll(0,0);
      }, [location]);

  return (
    <div className='h-fit w-full flex flex-col gap-12 pb-12'>
        <section className='h-fit w-full relative overflow-hidden'>

            <div className='h-[300px] w-full object-cover object-bottom absolute -z-50'>
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
                    <SwiperSlide className='w-full h-full'>
                    <img src='https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' className='h-[600px] xl:h-[500px] w-full object-cover object-bottom'/>
                    </SwiperSlide>
                    <SwiperSlide className='w-full h-full'>
                    <img src='https://media.istockphoto.com/id/1307457391/photo/happy-black-student-raising-arm-to-answer-question-while-attending-class-with-her-university.jpg?s=612x612&w=0&k=20&c=iZaZFyC-WqlqSQc4elqUNPTxLvWPe8P5Tb_YdZnrI9Q=' alt='' className='h-[600px] xl:h-[500px] w-full object-cover object-center'/>
                    </SwiperSlide>
                    {/* <SwiperSlide className='w-full h-full'>
                    <img src='https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' className='h-[500px] w-full object-cover object-bottom'/>
                    </SwiperSlide> */}
                </Swiper>
            </div>
            <div className='h-[300px] w-full relative z-30 flex flex-col gap-6 md:gap-2 items-center justify-center bg-black/75'>
                <p className='text-white capitalize text-4xl text-center font-bold mt-[65px]'>{name}</p>
                <Breadcrumbs className='dark'>
                    <BreadcrumbItem className='text-sm text-white'>Home</BreadcrumbItem>
                    <BreadcrumbItem className='text-sm font-medium uppercase text-white'>{name}</BreadcrumbItem>
                </Breadcrumbs>
            </div>
        </section>

        {
            courseListLoading?
            '':
            courses?
            courses.filter( f => f.qualification.slug == name).map(i=>(
                <section className='h-fit w-full'>
                    <div className='h-fit w-full max-w-[1024px] mx-auto px-8'>
                        <div className='border-[1px] border-black/15 rounded-[8px] overflow-hidden'>
                            <div>
                                <img src={i.qualification.image} alt='' className='h-fit w-full object-contain' />
                            </div>
                            <div className='p-4 flex flex-col gap-2'>
                                <p className='text-lg font-bold text-left'>{i.qualification.name}</p>
                                <div className='text-sm text-justify opacity-75'>{parse(i.qualification.discription)}</div>
                            </div>
                            
                        </div>
                    </div>
                </section>
            ))[0]:
            ''
        }

        
        <section className='h-fit w-full'>
            <div className='h-fit w-full max-w-[1024px] mx-auto px-8'>
                {
                    loading?
                    ''
                    :
                    levels?
                    levels.map(i => (
                        <div key={i.id} className={
                            courses?
                            courses.filter(f => f.programe.slug == i.slug && f.qualification.slug == name).length == 0?
                            'hidden flex-col gap-2':
                            'flex flex-col gap-2'
                            :
                            'hidden flex-col gap-2'
                        }>
                            <p className='font-semibold capitalize bg-blue-500 py-2 text-white px-4'>{i.name}</p>
                            <div className='p-4 flex flex-col gap-2'>
                                {
                                    courses?
                                    courses.filter(f => f.programe.slug == i.slug && f.qualification.slug == name).map(m => (
                                        <p key={m.id} className='text-sm font-medium capitalize'>{m.name}</p>
                                    ))
                                    :
                                    ""
                                }
                            </div>
                        </div>
                    ))
                    :
                    ''
                }
                
            </div>
        </section>
        
    </div>
  )
}

export default AwardingBodyScreen



// <div className='mt-[300px]'>
//         {
//             courses?
//             courses.filter( f => f.qualification.slug == name).map(i => (
//                 <p className='text-black'>{i.name}</p>
//             )):
//             ''
//         }
//     </div>