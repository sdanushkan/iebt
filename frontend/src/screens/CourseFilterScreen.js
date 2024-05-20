import React, { useEffect, useState } from 'react'
import { Button } from '@nextui-org/react'
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
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import {RadioGroup, Radio, useRadio, VisuallyHidden, cn} from "@nextui-org/react";
import { getCourseList, getLevelList } from '../actions/courseActions';
import { useDispatch, useSelector } from 'react-redux';
import { all } from 'axios';

const CourseFilterScreen = () => {
  const [filter, setFilter] = useState(false);
  const [gridCount, setGridCount] = useState(2);

  const {award} = useParams()
  const {programe} = useParams()
  const {credit} = useParams()
  const {keyword} = useParams()

  const dispatch = useDispatch()
  const history = useNavigate()
  const location = useLocation()

  const [faculty, setFaculty] = useState('')
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


  return (
    <div className='h-fit w-full md:pt-28 relative'>
      <div className='relative h-fit w-full'>
        <div className='h-fit w-full max-w-[1200px] mx-auto px-4 sm:px-6 overflow-hidden'>
          <div className='flex items-center justify-between my-2 font-medium border-2 mt-24 md:mt-0'>
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
      <div className='h-[500px] w-full max-w-[1200px] flex gap-4 mx-auto md:px-6 pt-4'>
        <div className={
          filter?
          'h-full w-full duration-300  ml-0 md:w-[250px] flex md:block absolute top-0 md:relative z-30':
          'h-full w-full duration-300 -ml-[100%] md:ml-0 md:w-[250px] flex md:block top-0 absolute md:relative z-200'
        }>
          <div className='h-screen md:h-fit w-full bg-white px-4 md:px-0 py-6 md:py-0 divide-y-1 flex flex-col gap-4'>

            <RadioGroup
              label={`Select programe`}
              className='text-base font-medium'
              value={nPrograme}
              onValueChange={setNPrograme}
            >
              {
                loading?
                '':
                levels?
                levels.map(i=>(
                  <Radio size='sm' value={i.name}>{i.name}</Radio>
                ))
                :
                ''
              }
            </RadioGroup>

            <RadioGroup
              label={`Select Qualification`}
              className='text-base font-medium'
              value={nAward}
              onValueChange={setNAward}
            >
              {
                courseListLoading?
                '':
                courses?
                courses.map(i=>(
                  <Radio size='sm' value={i.qualification.name}>{i.qualification.name}</Radio>
                ))
                :
                ''
              }
            </RadioGroup>

            <RadioGroup
              label={`Select Faculty`}
              className='text-base font-medium'
              value={faculty}
              onValueChange={setFaculty}
            >
              {
                facultyListLoading?
                '':
                faculties?
                faculties.map(i=>(
                  <Radio size='sm' value={i.name}>{i.name}</Radio>
                ))
                :
                ''
              }
            </RadioGroup>


          </div>
          <button onClick={() => setFilter(!filter)} className={
            filter?
            'h-full w-[20%] opacity-100 duration-300 backdrop-blur-md bg-black bg-opacity-50 md:hidden':
            'h-full w-[20%] opacity-0 duration-300 backdrop-blur-0 bg-black bg-opacity-50 md:hidden'
          }></button>
        </div>
        <div className='h-fit w-full'>
          <div className={`w-fit mx-auto h-fit grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-4 px-4 md:px-0`}>
           
            {
              courseListLoading?
              '':
              courses && faculties?
              courses.filter(f => faculty != ''? faculties.map(nf => nf.name == f.faculty.name): all).map(i => (
                <div key={i.id} className=' bg-white p-2 h-fit w-full shadow-[0px_4px_25px_rgba(0,0,0,0.05)] rounded-[16px]'>
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
                </div>
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