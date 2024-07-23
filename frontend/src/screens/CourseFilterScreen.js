import React, { useEffect, useState } from 'react'
import { Button, Skeleton, Spinner, image } from '@nextui-org/react'
import { TfiLayoutGrid2Alt, TfiLayoutGrid3Alt, TfiLayoutGrid4Alt } from "react-icons/tfi";
import {Accordion, AccordionItem} from "@nextui-org/react";
import {Checkbox} from "@nextui-org/react";
import {Slider} from "@nextui-org/slider";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
import { BiFilterAlt } from "react-icons/bi";
import { PiSortAscendingBold } from "react-icons/pi";
import { FaUsers } from "react-icons/fa";
import { MdOutlineBookmarkBorder } from "react-icons/md";
import { MdOutlineAccessTime } from "react-icons/md";
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import {RadioGroup, Radio, useRadio, VisuallyHidden, cn} from "@nextui-org/react";
import { getCourseList, getFilterCourseList, getLevelList } from '../actions/courseActions';
import { useDispatch, useSelector } from 'react-redux';
import { all } from 'axios';
import {Tabs, Tab} from "@nextui-org/react";
import { VscActivateBreakpoints } from "react-icons/vsc";
import _ from 'lodash';

const CourseFilterScreen = () => {
  const [filter, setFilter] = useState(false);
  const [gridCount, setGridCount] = useState(2); 

  const {faculty} = useParams()
  const {programe} = useParams()
  const {qualification} = useParams()
  const {credit} = useParams()

  const dispatch = useDispatch()
  const history = useNavigate()
  const location = useLocation()

  const [nFaculty, setNFaculty] = useState(faculty?faculty:'faculties')
  const [n2Faculty, setN2Faculty] = useState(null)
  const [nPrograme, setNPrograme] = useState(programe?programe:'programes')
  const [nQualification, setNQualification] = useState(qualification?qualification:'qualifications')
  const [nCredits, setNCredits] = useState(credit?credit:'credits')
  const [nCourses, setNCourses] = useState(null)

  useEffect(() => {
    if(faculty){
      setNFaculty(faculty)
    } else{
      setNFaculty('faculties')
    }
    if(programe){
      setNPrograme(programe)
    }else{
      setNPrograme('programes')
    }

    if(qualification){
      setNQualification(qualification)
    }else{
      setNQualification('qualifications')
    }
 
    if(credit){
      setNCredits(credit)
    }else{
      setNCredits('credits')
    }
  }, [faculty, programe, qualification, credit])
  
 
  const levelList = useSelector(state => state.levelList)
  const { error, loading, levels } = levelList

  const courseList = useSelector(state => state.courseList)
  const { error: courseListError, loading: courseListLoading, courses } = courseList

  const courseFilterList = useSelector(state => state.courseFilterList)
  const { error: courseFilterListError, loading: courseFilterListLoading, courses:fCourses } = courseFilterList

  const facultyList = useSelector(state => state.facultyList)
  const { error: facultyListError, loading:facultyListLoading, faculties } = facultyList
  
  useEffect(() => {
    if(!levels){
      dispatch(getLevelList())
    }
    if(courses==null){
      dispatch(getCourseList())
    }
    if(n2Faculty){
      setNFaculty(n2Faculty.anchorKey)
    }
  }, [dispatch, levels, courses, n2Faculty])

  
  // useEffect(() => {
  //   if (faculty) {
  //     setNFaculty(faculty)
  //   } else {
  //     setNFaculty('faculties')
  //   }
  //   if (programe) {
  //     setNPrograme(programe)
  //   } else {
  //     setNPrograme('programes')
  //   }    
  //   if (qualification) {
  //     setNQualification(qualification)
  //   } else{
  //     setNQualification('qualifications')
  //   }
  //   if (credit) {
  //     setNCredits(credit)
  //   }  else{
  //     setNCredits('credits')
  //   }
  // }, [faculty,programe, qualification, credit])

  useEffect(() => {
    dispatch(getFilterCourseList(nFaculty, nPrograme, nQualification, nCredits))
  }, [dispatch, nFaculty, nPrograme, nQualification, nCredits, location])

  
  // useEffect(() => {
  //   if ((courses) && (nPrograme) && (nFaculty)) {
  //     setNCourses(courses.filter(f=> f.faculty.slug == nFaculty.anchorKey && f.programme.slug == nPrograme))
  //   } else if ((courses) && (nPrograme)) {
  //     setNCourses(courses.filter(f=> f.programme.slug == nPrograme))
  //   } else{
  //     setNCourses(courses)
  //   }
  // }, [courses, nFaculty, nPrograme])

  // useEffect(() => {
  //   setNCourses(courses.filter(f=> nFaculty.anchorKey? f.faculty.slug == nFaculty.anchorKey : courses))
  // }, [courses, nPrograme])
  

  useEffect(() => {
    window.scroll(0,0);
  }, [location]);

  return (
    <div className='h-fit w-full md:pt-28 relative pb-12'>
      {/* <div className='relative h-fit w-full md:hidden '>
        <div className='h-fit w-full max-w-[1200px] mx-auto px-4 sm:px-6 overflow-hidden'>
          <div className='flex items-center justify-between my-2 font-medium border-2 mt-28 md:mt-0'>
            <div className='max-h-fit flex divide-x-1 overflow-hidden'>
              <Button onClick={() => setFilter(!filter)} endContent={<BiFilterAlt className='text-xl' />} variant='bordered' radius='none' className='text-xs border-0 ' size='sm'>Filter</Button>
              <Dropdown>
                <DropdownTrigger>
                <Button endContent={<PiSortAscendingBold className='text-xl'/>} variant='bordered' radius='none' className='text-xs border-0 ' size='sm'>Sort</Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                  <DropdownItem key="new">New file</DropdownItem>
                  <DropdownItem key="copy">Copy link</DropdownItem>
                  <DropdownItem key="edit">Edit file</DropdownItem>
                  <DropdownItem key="delete" className="text-danger" color="danger">
                    Delete file
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown> 
              <div className='h-[40px] w-[1px] border-l-2'></div> 
            </div>
            <div className='flex items-center px-2'>
              <Button onClick={() => setGridCount(1) } isIconOnly size='sm' variant='light'>
                <div className='h-[14px] w-[14px] bg-black md:hidden'></div>
              </Button>
              <Button onClick={() => setGridCount(2) } isIconOnly size='sm' variant='light'>
                <TfiLayoutGrid2Alt className='text-[14px] mt-[2px]' />
              </Button>
              <Button onClick={() => setGridCount(3) } isIconOnly size='sm' variant='light' className='hidden md:flex'>
                <TfiLayoutGrid3Alt className='text-[14px]' />
              </Button>
              <Button onClick={() => setGridCount(4) } isIconOnly size='sm' variant='light' className='hidden xl:flex'>
                <TfiLayoutGrid4Alt className='text-[15px] ' />
              </Button>
            </div>
          </div>
        </div>
      </div> */}
      <div className='h-fit w-full max-w-[1200px] flex gap-4 mx-auto md:px-6 pt-4'>

        <div className={
          filter?
          'h-full w-full duration-300  ml-0 md: flex md:block fixed top-0 md:relative z-50':
          'h-full w-full duration-300 -ml-[100%] md:ml-0 md:w-[300px] flex md:block top-0 absolute md:relative z-20'
        }>
          <div className='h-screen md:h-fit w-full bg-white px-4 md:px-0 py-6 md:py-0 divide-y-1 flex flex-col gap-4'>
        
              <Accordion selectedKeys={n2Faculty} onSelectionChange={setN2Faculty} isCompact className='w-full min-w-full md:w-[300px] md:min-w-[300px]'>
                {
                  facultyListLoading? 
                  "":
                  faculties?
                  faculties.map(i =>(
                    <AccordionItem className='text-sm font-semibold overflow-hidden py-2' key={i.slug} aria-label={i.name} startContent={i.name} onClick={()=>setNPrograme('programes')} classNames={'w-full'}>
                      {
                        courseListLoading?
                          <div className='flex flex-col gap-2'>
                            <Skeleton className='rounded-[8px]'>
                              <div className='h-8 w-full'>

                              </div>
                            </Skeleton>
                          </div>
                        :
                        courses?
                        <Tabs variant='solid'  selectedKey={nPrograme} defaultSelectedKey={nPrograme} onSelectionChange={setNPrograme} size='sm' isVertical fullWidth aria-label="Tabs sizes" color='danger' 
                        classNames={{
                            tabList: "",
                            cursor: "bg-[#DA0C0C]",
                            tab: "",
                            tabContent: "group-data-[selected=true]:text-[white]"
                          }}
                        className='w-full'>
                          {
                              courses && levels?
                              _.uniqBy(courses.filter(f => f.faculty.name == i.name), 'programme.id').filter(i1 => levels.some(i2 => i1.programme.slug == i2.slug)).map( i3 =>
                                  ( 
                                    <Tab key={i3.programme.slug} title={
                                      <div className='flex items-center justify-between space-x-2 text-left overflow-hidden'>
                                        <VscActivateBreakpoints className='ml-0'/>
                                        <p className='ml-auto w-[200px]'>{i3.programme.name}</p> 
                                      </div>
                                    }>
                                    </Tab>
                                  )
                                ):
                                ''
                          }

                          {/* {
                            courses && courses.programe && levels?
                            _.uniqBy(courses.filter(f => f.faculty.name === i.name), 'programme.id').filter(i => levels.some(i2 => i.slug == i2.slug)).map( i3 =>
                              <p>{i3.name}</p>
                            ) :
                            ''                         
                          }       */}


                        </Tabs>:
                        ''
                      }
                    </AccordionItem>
                  )):
                  ''
                }
              </Accordion>
              
            {/* <Accordion defaultExpandedKeys={["1","2","3","4"]} isCompact className='w-full min-w-full md:w-[400px] md:min-w-[400px]'>
              <AccordionItem  className='text-base font-semibold overflow-hidden' key="1" aria-label="Faculties" startContent="Faculties" classNames={'w-full'}>
                {
                  facultyListLoading? 
                  "":
                  faculties && nFaculty ?
                  <Tabs variant='solid' selectedKey={nFaculty} onSelectionChange={setNFaculty} size='sm' isVertical defaultSelectedKey={nFaculty} fullWidth aria-label="Tabs sizes" color='danger' 
                  classNames={{
                    tabList: "",
                    cursor: "bg-[#DA0C0C]",
                    tab: "",
                    tabContent: "group-data-[selected=true]:text-[white]"
                  }}
                  className='w-full'>
                    {
                      faculties.map(i=>(
                        <Tab key={i.slug} title={
                          <div className='flex items-center justify-between space-x-2 text-left overflow-hidden'>
                            <VscActivateBreakpoints className='ml-0'/>
                            <p className='ml-auto w-[200px]'>{i.name}</p> 
                          </div>
                        }>
                          <AccordionItem  className='text-base font-semibold overflow-hidden' key="2" aria-label="Level" startContent="Level" classNames={'w-full'}>
                            {
                              loading?
                              '':
                              levelList && nPrograme?
                              <Tabs variant='solid' selectedKey={nPrograme} defaultSelectedKey={nPrograme} onSelectionChange={setNPrograme} size='sm' isVertical fullWidth aria-label="Tabs sizes" color='danger' 
                              classNames={{
                                  tabList: "",
                                  cursor: "bg-[#DA0C0C]",
                                  tab: "",
                                  tabContent: "group-data-[selected=true]:text-[white]"
                                }}
                              className='w-full'>
                                {
                                levels.map(i=>(
                                  <Tab key={i.slug} title={
                                    <div className='flex items-center justify-between space-x-2 text-left overflow-hidden'>
                                      <VscActivateBreakpoints className='ml-0'/>
                                      <p className='ml-auto w-[200px]'>{i.name}</p> 
                                    </div>
                                  }>
                                  </Tab>
                                ))
                                }
                              </Tabs>:
                              ''
                            }
                          </AccordionItem>
                        </Tab>
                      ))
                    }
                  </Tabs>:
                  ''
                }
              </AccordionItem>
              
              

              <AccordionItem  className='text-base font-semibold overflow-hidden' key="3" aria-label="Qualification" startContent="Qualification" classNames={'w-full'}>
                {
                  loading?
                  "":
                  courses && nAward?
                  <Tabs variant='solid' selectedKey={nAward} onSelectionChange={setNAward} size='sm' isVertical fullWidth aria-label="Tabs sizes" color='danger' 
                  classNames={{
                      tabList: "",
                      cursor: "bg-[#DA0C0C]",
                      tab: "",
                      tabContent: "group-data-[selected=true]:text-[white]"
                    }}
                  className='w-full'>
                    {
                      _.uniqBy(_.flatMap(courses, 'qualification'), 'id').map(i=>(
                        <Tab key={i.slug} title={
                          <div className='flex items-center justify-between space-x-2 text-left overflow-hidden'>
                            <VscActivateBreakpoints className='ml-0'/>
                            <p className='ml-auto w-[200px]'>{i.name}</p> 
                          </div>
                        }>
                        </Tab>
                      ))
                    }
                  </Tabs>:
                  ''
                }
              </AccordionItem>

              <AccordionItem  className='text-base font-semibold overflow-hidden' key="4" aria-label="Credits" startContent="Credits" classNames={'w-full'}>
                {
                  loading?
                  '':
                  courses && nCredit?
                  <Tabs variant='solid' selectedKey={nCredit} isVertical fullWidth onSelectionChange={setNCredit} size='sm' 
                  classNames={{
                    tabList: "",
                    cursor: "bg-[#DA0C0C]",
                    tab: "",
                    tabContent: "group-data-[selected=true]:text-[white]"
                  }}
                  aria-label="Tabs sizes" >
                    {
                      loading?
                      '':
                      courses?
                      _.uniqBy(courses, 'course_credit').map(i=>(
                        <Tab key={i.course_credit} title={
                          <div className='flex items-center justify-between space-x-2 text-left overflow-hidden'>
                            <VscActivateBreakpoints className='ml-0'/>
                            <p className='ml-auto w-[200px]'>{i.course_credit}</p> 
                          </div>
                        }>
                        </Tab>
                      ))
                      :
                      <Tab onClick={() => setNPrograme('all')} title={
                        <div className='flex items-center justify-between space-x-2 text-left'>
                          <VscActivateBreakpoints className='ml-0'/>
                          <p className='ml-auto w-[200px]'>All</p> 
                        </div>
                      }>
                      </Tab>
                    }
                  </Tabs>:
                  ''
                }
              </AccordionItem>

            </Accordion> */}

          </div>
          <button onClick={() => setFilter(!filter)} className={
            filter?
            'h-full w-[20%] opacity-100 duration-300 backdrop-blur-md bg-black bg-opacity-50 md:hidden':
            'h-full w-[20%] opacity-0 duration-300 backdrop-blur-0 bg-black bg-opacity-50 md:hidden'
          }></button>
        </div>
        <div className='h-fit w-full flex flex-col gap-6 relative z-10'>
          <div className='py-3'>
            {
              nPrograme?
              <p className='text-lg font-semibold'>All {nPrograme} Courses</p>:
              ''
            }
          </div>
          <div className={`w-full mx-auto h-fit grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 px-4 md:px-0`}>
            {
              courseFilterListLoading?
              <div className='h-fit w-full flex justify-start'>
                <Spinner size="md" />
              </div>
              :
              fCourses?
              fCourses.filter(f=>(
                location.pathname.startsWith(`/header`) ? f.show_in_header==true :
                location.pathname.startsWith(`/faculty`) ? f.show_in_faculty==true : 
                location.pathname.startsWith(`/qualification`) ? f.show_in_qualification==true : 
                location.pathname.startsWith(`/footer`) ? f.show_in_footer==true : fCourses
              )).map(i => (
                <Link to={`/courses/${i.slug}`} key={i.id} className=' bg-white p-2 h-fit w-full shadow-[0px_4px_25px_rgba(0,0,0,0.05)] rounded-[16px]'>
                  <img src={i.image} alt='' className='h-[200px] w-full rounded-[8px]' />
                  <div className='pt-4 flex flex-col gap-4'>
                    <div className=''>
                      <p className='text-xs text-red-600 font-medium'>{i.programme.name}</p>
                      <p className='font-semibold text-left'>{
                        i.name
                      }</p>
                    </div>
                    <div className='h-[1px] w-full bg-black/10' ></div>
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
                </Link>
              ))
              :
              ''
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseFilterScreen