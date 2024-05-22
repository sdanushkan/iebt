import React, { useEffect, useState } from 'react'
import { Button, image } from '@nextui-org/react'
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
import { getCourseList, getLevelList } from '../actions/courseActions';
import { useDispatch, useSelector } from 'react-redux';
import { all } from 'axios';
import {Tabs, Tab} from "@nextui-org/react";
import { VscActivateBreakpoints } from "react-icons/vsc";
import _ from 'lodash';

const CourseFilterScreen = () => {
  const [filter, setFilter] = useState(false);
  const [gridCount, setGridCount] = useState(2);

  const {award} = useParams()
  const {programe} = useParams()
  const {credit} = useParams()
  const {keyword} = useParams()
  const {faculty} = useParams()

  const dispatch = useDispatch()
  const history = useNavigate()
  const location = useLocation()

  const [nFaculty, setNFaculty] = useState('')
  const [nKeyword, setNKeyword] = useState('')
  const [nPrograme, setNPrograme] = useState('')
  const [nCredit, setNCredit] = useState('')
  const [nAward, setNAward] = useState('')

  const levelList = useSelector(state => state.levelList)
  const { error, loading, levels } = levelList

  const courseList = useSelector(state => state.courseList)
  const { error: courseListError, loading: courseListLoading, courses } = courseList

  const facultyList = useSelector(state => state.facultyList)
  const { error: facultyListError, loading:facultyListLoading, faculties } = facultyList
  
  useEffect(() => {
    dispatch(getLevelList())
    dispatch(getCourseList())
  }, [dispatch])

  useEffect(() => {
    if (faculty != "") {
      setNFaculty(faculty)
      
    } else {
      setNFaculty('faculties')
    } 
    if (credit !="") {
      setNCredit(credit)
    } else {
      setNCredit('credits')
    }
    if (programe !="") {
      setNPrograme(programe)
    } else {
      setNPrograme('programes')
    }

    if (award !="") {
      setNAward(award)
    } else {
      setNAward('awards')
    }

    if (keyword !="") {
      setNKeyword(keyword)
    } else {
      setNKeyword('')
    }
  }, [faculty, programe, credit, award, keyword, location])


  useEffect(() => {
    window.scroll(0,0);
  }, [location]);
  return (
    <div className='h-fit w-full md:pt-28 relative'>
      <div className='relative h-fit w-full md:hidden'>
        <div className='h-fit w-full max-w-[1200px] mx-auto px-4 sm:px-6 overflow-hidden'>
          <div className='flex items-center justify-between my-2 font-medium border-2 mt-28 md:mt-0'>
            <div className='max-h-fit flex divide-x-1 overflow-hidden'>
              <Button onClick={() => setFilter(!filter)} endContent={<BiFilterAlt className='text-xl' />} variant='bordered' radius='none' className='text-xs border-0 ' size='md'>Filter</Button>
              <Dropdown>
                <DropdownTrigger>
                <Button endContent={<PiSortAscendingBold className='text-xl'/>} variant='bordered' radius='none' className='text-xs border-0 ' size='md'>Sort</Button>
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
      </div>
      <div className='h-fit w-full max-w-[1200px] flex gap-4 mx-auto md:px-6 pt-4'>

        <div className={
          filter?
          'h-full w-full duration-300  ml-0 md: flex md:block fixed top-0 md:relative z-50':
          'h-full w-full duration-300 -ml-[100%] md:ml-0 md:w-[250px] flex md:block top-0 absolute md:relative z-200'
        }>
          <div className='h-screen md:h-fit w-full bg-white px-4 md:px-0 py-6 md:py-0 divide-y-1 flex flex-col gap-4'>

            <Accordion defaultExpandedKeys={["1", "2", "3","4"]} isCompact className='w-full min-w-full md:w-[250px]'>
              <AccordionItem  className='text-base font-semibold overflow-hidden' key="1" aria-label="Faculties" startContent="Faculties" classNames={'w-full'}>
                <Tabs variant='solid' selectedKey={nFaculty} onSelectionChange={setNFaculty} size='sm' isVertical defaultSelectedKey={nFaculty} fullWidth aria-label="Tabs sizes" color='danger' 
                classNames={{
                  tabList: "",
                  cursor: "bg-[#DA0C0C]",
                  tab: "",
                  tabContent: "group-data-[selected=true]:text-[white]"
                }}
                className='w-[250px]'>
                  {/* <Tab key={'faculties'} title={
                    <div className='flex items-center justify-between space-x-2 text-left'>
                      <VscActivateBreakpoints className='ml-0'/>
                      <p className='ml-auto w-[150px]'>All</p> 
                    </div>
                  }>
                  </Tab> */}
                  {
                    loading?
                    '':
                    faculties?
                    faculties.map(i=>(
                      <Tab key={i.slug} title={
                        <div className='flex items-center justify-between space-x-2 text-left overflow-hidden'>
                          <VscActivateBreakpoints className='ml-0'/>
                          <p className='ml-auto w-[150px]'>{i.name}</p> 
                        </div>
                      }>
                      </Tab>
                    ))
                    :
                    ''
                  }
                </Tabs>
              </AccordionItem>
              
              <AccordionItem  className='text-base font-semibold overflow-hidden' key="2" aria-label="Programes" startContent="Programes" classNames={'w-full'}>
                <Tabs variant='solid' selectedKey={nPrograme} defaultSelectedKey={nPrograme} onSelectionChange={setNPrograme} size='sm' isVertical fullWidth aria-label="Tabs sizes" color='danger' 
                classNames={{
                    tabList: "",
                    cursor: "bg-[#DA0C0C]",
                    tab: "",
                    tabContent: "group-data-[selected=true]:text-[white]"
                  }}
                className='w-[250px]'>
                  {/* <Tab key={'programes'} onClick={() => setNFaculty('programes')} title={
                    <div className='flex items-center justify-between space-x-2 text-left'>
                      <VscActivateBreakpoints className='ml-0'/>
                      <p className='ml-auto w-[150px]'>All</p> 
                    </div>
                  }>
                  </Tab> */}
                  {
                    loading?
                    '':
                    levels?
                    levels.map(i=>(
                      <Tab key={i.slug} title={
                        <div className='flex items-center justify-between space-x-2 text-left overflow-hidden'>
                          <VscActivateBreakpoints className='ml-0'/>
                          <p className='ml-auto w-[150px]'>{i.name}</p> 
                        </div>
                      }>
                      </Tab>
                    ))
                    :
                    ''
                  }
                </Tabs>
              </AccordionItem>

              <AccordionItem  className='text-base font-semibold overflow-hidden' key="3" aria-label="Qualification" startContent="Qualification" classNames={'w-full'}>
                <Tabs variant='solid' selectedKey={nAward} onSelectionChange={setNAward} size='sm' isVertical fullWidth aria-label="Tabs sizes" color='danger' 
                classNames={{
                    tabList: "",
                    cursor: "bg-[#DA0C0C]",
                    tab: "",
                    tabContent: "group-data-[selected=true]:text-[white]"
                  }}
                className='w-[250px]'>
                  {/* <Tab key={'awards'} onClick={() => setNAward('awards')} title={
                    <div className='flex items-center justify-between space-x-2 text-left'>
                      <VscActivateBreakpoints className='ml-0'/>
                      <p className='ml-auto w-[150px]'>All</p> 
                    </div>
                  }>
                  </Tab> */}
                  {
                    loading?
                    '':
                    courses?
                    _.uniqBy(_.flatMap(courses, 'qualification'), 'id').map(i=>(
                      <Tab key={i.slug} title={
                        <div className='flex items-center justify-between space-x-2 text-left overflow-hidden'>
                          <VscActivateBreakpoints className='ml-0'/>
                          <p className='ml-auto w-[150px]'>{i.name}</p> 
                        </div>
                      }>
                      </Tab>
                    ))
                    :
                    ''
                  }
                </Tabs>
              </AccordionItem>

              <AccordionItem  className='text-base font-semibold overflow-hidden' key="4" aria-label="Credits" startContent="Credits" classNames={'w-full'}>
                <Tabs variant='solid' selectedKey={nCredit} isVertical fullWidth onSelectionChange={setNCredit} size='sm' 
                classNames={{
                  tabList: "",
                  cursor: "bg-[#DA0C0C]",
                  tab: "",
                  tabContent: "group-data-[selected=true]:text-[white]"
                }}
                aria-label="Tabs sizes" >
                  {/* <Tab key={'credits'} onClick={() => setNCredit('cresdits')} title={
                    <div className='flex items-center justify-between space-x-2 text-left'>
                      <VscActivateBreakpoints className='ml-0'/>
                      <p className='ml-auto w-[150px]'>All</p> 
                    </div>
                  }>
                  </Tab> */}
                  {
                    loading?
                    '':
                    courses?
                    _.uniqBy(courses, 'course_credit').map(i=>(
                      <Tab key={i.course_credit} title={
                        <div className='flex items-center justify-between space-x-2 text-left overflow-hidden'>
                          <VscActivateBreakpoints className='ml-0'/>
                          <p className='ml-auto w-[150px]'>{i.course_credit}</p> 
                        </div>
                      }>
                      </Tab>
                    ))
                    :
                    <Tab onClick={() => setNPrograme('all')} title={
                      <div className='flex items-center justify-between space-x-2 text-left'>
                        <VscActivateBreakpoints className='ml-0'/>
                        <p className='ml-auto w-[150px]'>All</p> 
                      </div>
                    }>
                    </Tab>
                  }
                </Tabs>
              
               
              </AccordionItem>

            </Accordion>

          </div>
          <button onClick={() => setFilter(!filter)} className={
            filter?
            'h-full w-[20%] opacity-100 duration-300 backdrop-blur-md bg-black bg-opacity-50 md:hidden':
            'h-full w-[20%] opacity-0 duration-300 backdrop-blur-0 bg-black bg-opacity-50 md:hidden'
          }></button>
        </div>
        <div className='h-fit w-full flex flex-col gap-6 relative z-10'>
          <div className={`w-full mx-auto h-fit grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 px-4 md:px-0`}>
           
            {
              courseListLoading?
              '':
              courses?
              courses.filter(f => nFaculty != 'faculties' ? f.faculty.slug == nFaculty : courses).filter(f2=>nPrograme != 'programes' ? f2.programe.slug == nPrograme : courses).filter(f3=> nCredit != 'credits' ? f3.course_credit == nCredit : courses).filter(f4=> nAward != 'awards' ? f4.qualification.slug == nAward : courses).filter(f => nKeyword != '' ? f.faculty.name == nFaculty : courses).map(i => (
                <Link to={`/courses/${i.slug}`} key={i.id} className=' bg-white p-2 h-fit w-full shadow-[0px_4px_25px_rgba(0,0,0,0.05)] rounded-[16px]'>
                  <img src={i.image} alt='' className='h-[200px] w-full rounded-[8px]' />
                  <div className='pt-4 flex flex-col gap-4'>
                    <div className=''>
                      <p className='text-xs text-red-600 font-medium'>Post Graduate course</p>
                      <p className='font-semibold text-justify'>{
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