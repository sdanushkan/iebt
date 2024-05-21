import React, { useEffect, useState } from 'react'
import {Tabs, Tab, Input, Link, Button, Card, CardBody, CardHeader} from "@nextui-org/react";import { MdAccessTime } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import {Divider} from "@nextui-org/react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";
import { getCourseList } from '../actions/courseActions';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { find } from 'lodash';

import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/react";

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

    useEffect(() => {
        window.scroll(0,0);
      }, [location]);

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
                <img src={nCourse.image} alt='' className='h-[400px] w-full object-cover relative -z-40' />
                <div className='absolute top-0 h-[400px] w-full bg-black/50 z-0 flex flex-col items-center justify-center'>
                    <Breadcrumbs 
                        classNames={{
                            list: "",
                        }}
                        itemClasses={{
                            item: "text-white/60 data-[current=true]:text-white",
                            separator: "text-white/40",
                        }}
                    className='text-3xl font-medium'>
                        <BreadcrumbItem className='text-3xl ' ><p className='text-base md:text-2xl capitalize font-bold'>{nCourse.faculty.name}</p></BreadcrumbItem>
                        <BreadcrumbItem className='text-3xl ' ><p className='text-base md:text-2xl capitalize font-bold'>Course</p></BreadcrumbItem><br/>
                        <BreadcrumbItem className='text-3xl ' ><p className='text-base md:text-2xl capitalize font-bold'>{nCourse.name}</p></BreadcrumbItem>
                    </Breadcrumbs>
                </div>
                <div className='w-full h-fit max-w-[1100px] mx-auto bg-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] -mt-[100px] relative z-10 grid grid-cols-1 md:grid-cols-5 md:gap-4 sm:p-4 lg:p-8'>
                    <div className='w-full h-full md:col-span-3 flex flex-col gap-12'>
                        <div className='w-full h-full md:col-span-3  flex flex-col gap-2'>
                            <img src={nCourse.image} alt='' className='h-[250px] w-full object-cover' />
                            <div className='flex'>
                                <Button size='sm' radius='full' variant='light' className=' px-2 py-2 gap-1 text-gray-500' startContent={<MdAccessTime/>}>
                                    6 months
                                </Button>
                                <Button size='sm' radius='full' variant='light' className=' px-2 py-2 gap-1 text-gray-500' startContent={<FaRegCircleUser />}>
                                    Online
                                </Button>
                            </div>
                            <p className='text-xl font-semibold'>{nCourse.name}</p>
                            <div className='flex flex-col sm:flex-row justify-between gap-8 '>
                                <div className='flex flex-col'>
                                    <p className='text-sm opacity-50'>Level</p>
                                    <p className='text-sm font-medium'>{nCourse.programe.name}</p>
                                </div>
                                <div className='flex flex-col'>
                                    <p className='text-sm opacity-50'>Class on</p>
                                    <p className='text-sm font-medium'>{nCourse.class_on}</p>
                                </div>
                                <div className='flex flex-col'>
                                    <p className='text-sm opacity-50'>faculty</p>
                                    <p className='text-sm font-medium'>{nCourse.faculty.name}</p>
                                </div>
                                <div className='flex flex-col'>
                                    <p className='text-sm opacity-50'>Awarding by</p>
                                    <p className='text-sm font-medium'>{nCourse.qualification.name}</p>
                                </div>

                            </div>
                        </div>
                        
                        <Tabs aria-label="Options">
                            <Tab key="overview" title="Overview">
                            <Card className='p-4'>
                                <CardBody className='flex flex-col gap-4'>
                                    <div className='flex flex-col gap-4'>
                                        <p className='text-sm font-semibold'>OverView</p>
                                        <p className='text-xs text-gray-500'>The Level 7 Postgraduate Diploma in Psychology offers an advanced curriculum designed to deepen understanding and proficiency in various psychological theories and practices. Students gain a comprehensive insight into the complexities of human behavior and mental processes. This postgraduate level qualification equips graduates with advanced knowledge and skills necessary for pursuing careers in areas such as counselling, psychology, research, and academia.</p>
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                        <p className='text-sm font-semibold'>Course Entry Requriments</p>
                                        <p className='text-xs text-gray-500'>Level 6/GD/First Degree in Psychology or 5 years of experience in Psychology </p>
                                    </div>
                                </CardBody>
                            </Card>  
                            </Tab>
                            <Tab key="units" title="Units">
                            <Card className='p-4'>
                                <CardBody>
                                    <div className='flex flex-col gap-4'>
                                        <p className='text-sm font-semibold'>Course unit</p>
                                        <Table aria-label="Example static collection table">
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
                                        </Table>
                                    </div>
                                </CardBody>
                            </Card>  
                            </Tab>
                        </Tabs>
                        
                    </div>

                    <div className='w-full h-full md:col-span-2 flex flex-col gap-4 border-[1px] p-4'>
                        <img src={nCourse.qualification.image} alt='' className='w-full h-fit bg-cover' />
                        <p className='text-xl font-semibold text-[#DA0C0C]' >{nCourse.qualification.name}</p>
                    </div>
                </div>
            </section>:
            ''
        }
        
    </div>
  )
}

export default CourseScreen