import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { getCourseList, getLevelList, getOurQualificationDetails } from '../actions/courseActions'
import {Breadcrumbs, BreadcrumbItem, Spinner} from "@nextui-org/react";
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

    const [nCourse, setNCourse] = useState('')


    const ourQualificationDetails = useSelector(state => state.ourQualificationDetails)
    const { error:ourQualificationDetailsError, loading:ourQualificationDetailsLoading, qualification } = ourQualificationDetails

    const levelList = useSelector(state => state.levelList)
    const { error, loading, levels } = levelList

    useEffect(() => {
        if (!levels){
            dispatch(getLevelList())
        }
    }, [dispatch, levels])

    useEffect(() => {
        if (name) {
            dispatch(getOurQualificationDetails(name))
        }
    }, [name])

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
            ourQualificationDetailsLoading?
            <section className='h-fit w-full'>
                <div className='h-fit w-full max-w-[1024px] mx-auto px-8'>
                    <div className='h-fit w-full flex justify-start'>
                        <Spinner size="md"/>
                    </div>
                </div>
            </section>:
            qualification?
            <section className='h-fit w-full'>
                <div className='h-fit w-full max-w-[1024px] mx-auto px-8'>
                    <div className='border-[1px] border-black/15 rounded-[8px] overflow-hidden'>
                        <div>
                            <img src={qualification.image} alt='' className='h-fit w-full object-contain' />
                        </div>
                        <div className='p-4 flex flex-col gap-2'>
                            <p className='text-lg font-bold text-left'>{qualification.name}</p>
                            <div className='text-sm text-left opacity-75'>{parse(qualification.courses_list)}</div>
                        </div>
                        
                    </div>
                </div>
            </section>:
            ''
        }

        {/* <section className='h-fit w-full'>
            <div className='h-fit w-full max-w-[1024px] mx-auto px-8'>
                {
                    loading?
                    <p>jghgcf</p>
                    :
                    levels?
                    levels.map(i => (
                        qualification?
                        <div key={i.id} className='flex flex-col gap-2'>
                            {
                                levels?
                                levels.filter(f => f.programe.slug == i.slug).map(n=>
                                    <div key={i.id} className='flex flex-col gap-2'>
                                        <p className='font-semibold capitalize bg-blue-500 py-2 text-white px-4'>{n.programe.name}</p>
                                        <div className='p-4 flex flex-col gap-2'>
                                            {
                                                qualification.courses?
                                                qualification.courses.filter(f => f.programe.slug == n.slug).map(m => (
                                                    <p key={m.id} className='text-sm font-medium capitalize'>{m.name}</p>
                                                ))
                                                :
                                                ""
                                            }
                                        </div>
                                    </div>
                                ):
                                ''
                            }
                            
                        </div>
                        :
                        ''
                    ))
                    :
                    ''
                }
                
            </div>
        </section> */}

        <section className='h-fit w-full'>
            <div className='h-fit w-full max-w-[1024px] mx-auto px-8'>
               
                {
                    loading?
                    <div className='h-fit w-full flex justify-start'>
                        <Spinner size="md" />
                    </div>
                    :
                    levels && qualification?
                    _.uniqBy(qualification.courses, 'programe.id' ).map((i, index) => (
                        <div>
                            <div>
                                {
                                    i.programe.slug == 'foundation-level-3'?
                                    <div className='flex flex-col gap-1 pt-8 pb-4'>
                                        <p className='text-2xl font-bold capitalize'>Foundation programmes
                                        </p>
                                        <p className='text-sm opacity-50'>Level 3 qualifications enhance subject knowledge and study skills, preparing learners for undergraduate courses at universities.
                                        </p>
                                    </div>:
                                    i.programe.slug == 'higher-diploma-level-4-5' ?
                                    <div className='flex flex-col gap-1 pt-8 pb-4'>
                                        <p className='text-2xl font-bold capitalize'>Undergraduate programmes
                                        </p>
                                        <p className='text-sm opacity-50'>Level 4, 5, and 6 diploma qualifications correspond to the first, second, and final years of a three-year UK Bachelor's degree, respectively, with each level comprising 120 credits. Completing Level 4 and 5 allows learners to progress to the next level or directly to the final year of a Bachelor's degree at a university. Completing Level 6 qualifications enables learners to advance to Master's level studies at a university.

                                        </p>
                                    </div>:
                                    i.programe.slug == 'post-graduate-diploma-level-7'?
                                    <div className='flex flex-col gap-1 pt-8 pb-4'>
                                        <p className='text-2xl font-bold capitalize'>Postgraduate Programs</p>
                                        <p className='text-sm opacity-50'>Postgraduate diplomas are taught courses at Level 7 on the Regulated Qualifications Framework (RQF), equivalent to a Pre-Master's degrees.
                                        </p>
                                    </div>:
                                    i.programe.slug == 'doctoral-diploma-level-8'?
                                    <div className='flex flex-col gap-1 pt-8 pb-4'>
                                        <p className='text-2xl font-bold capitalize'>Doctoral Level Programs            </p>
                                        <p className='text-sm opacity-50'>Level 8 diplomas are taught programs on the Regulated Qualifications Framework (RQF) and are also recognized on the European Qualifications Framework (EQF) at Level 8. This level is equivalent to DF-EHEA third cycle qualifications, comparable to doctorate-level study.

This qualification at Level 8 represent knowledge, skills, and competencies that are recognized academically as comparable to Doctoral Degrees and Vocational Qualifications at Level 8.
                                        </p>
                                    </div>:
                                    i.programe.slug == 'graduate-diploma-level-6'?
                                    '':
                                    ''
                                }
                            </div>
                            <div>
                                <div className='font-semibold capitalize bg-blue-500 py-2 text-white px-4 flex justify-between'>
                                    <p className='font-semibold capitalize bg-blue-500 py-2 text-white px-4'>{i.programe.name}</p>   
                                    <p className='font-semibold capitalize bg-blue-500 py-2 text-white px-4'>{
                                        index+1 == 1?
                                        '1st & 2nd year':
                                        index+1 == 2?
                                        '3rd year':
                                        ''
                                        }</p> 
                                </div> 
                                <ul className='p-4 flex flex-col gap-2'>
                                    {
                                        qualification.courses?
                                        qualification.courses.filter(f => f.programe.slug == i.programe.slug).map(m => (
                                            <Link className='list-disc' to={`/courses/${m.slug}`}>
                                                <li key={m.id} className='text-sm font-medium capitalize'>{m.name}</li>
                                            </Link>
                                        ))
                                        :
                                        ""
                                    }
                                </ul>
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