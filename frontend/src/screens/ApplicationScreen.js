import React, { useEffect, useState } from 'react'
import {Input} from "@nextui-org/react";
import {Textarea} from "@nextui-org/input";
import { Button } from '@nextui-org/react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { RiSecurePaymentFill } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import {Accordion, AccordionItem} from "@nextui-org/accordion";
import { getCourseList } from '../actions/courseActions';
import {Select, SelectItem} from "@nextui-org/react";
import { AiFillSignal } from "react-icons/ai";
import { FaAward } from "react-icons/fa";
import {RadioGroup, Radio} from "@nextui-org/react";
import {DateInput} from "@nextui-org/date-input";
import {CalendarDate} from "@internationalized/date";

const ApplicationScreen = () => {
  const dispatch = useDispatch()
  const history = useNavigate()
  const location = useLocation()

  const [faculty, setFaculty] = useState('')
  const [course, setCourse] = useState('')

  const [GSEOLLSelected, setGSEOLLSelected] = React.useState("");

  useEffect(() => {
    window.scroll(0,0);
  }, [location]);

  const courseList = useSelector(state => state.courseList)
    const { error: courseListError, loading: courseListLoading, courses } = courseList

    const facultyList = useSelector(state => state.facultyList)
    const { error:facultyListError, loading:facultyListLoading, faculties } = facultyList

    useEffect(() => {
      dispatch(getCourseList())
    }, [dispatch])

  return (
    <div className='flex flex-col gap-14'>
      <section className='relative'>
          <img src={'https://img.freepik.com/free-vector/futuristic-background-design_23-2148503793.jpg'} alt='' className='h-[400px] w-full object-cover relative -z-40' />
          
          <div className='w-full h-fit max-w-[1100px] mx-auto bg-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] -mt-[100px] relative z-10 md:gap-1 md:p-4 xl:p-12 grid grid-cols-1 md:grid-cols-5 rounded-[16px]'>
            <section className='w-full relative md:col-span-4'>
              <div className='h-fit w-full mx-auto px-2 sm:px-6 flex items-start gap-8 '>
                <div className='w-full '>
                  <Accordion defaultExpandedKeys={["1","2","3","4"]} className='w-full'>
                    <AccordionItem key="1" aria-label="course applied for" title={
                      <p className='text-[#DA0C0C] uppercase text-sm font-bold'>
                        Course applied for
                      </p>
                    }>
                      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                        <Select
                          variant={'bordered'}
                          required
                          placeholder="Faculty"
                          className='w-full shadow-none rounded-none'
                          radius='sm'
                          size='md'
                          endContent={
                            <AiFillSignal />
                          }
                        >
                          {
                            facultyListLoading?
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
                          placeholder="Course award"
                          className='w-full shadow-none rounded-none'
                          radius='sm'
                          required
                          size='md'
                          endContent={
                            <FaAward  />
                          }
                        >
                          {
                            courseListLoading?
                            '':
                            courses?
                            courses.map((i) => (
                              <SelectItem onClick={()=> setCourse(`/${i.slug}`)} value={i.slug} key={i.slug}>
                                {i.name}
                              </SelectItem>
                            ))
                            :
                            ''
                          }
                        </Select>
                      </div>
                    </AccordionItem>
                    <AccordionItem key="2" aria-label="persona details" title={
                      <p className='text-[#DA0C0C] uppercase text-sm font-bold'>
                        Personal Details
                      </p>
                    }>
                      <div className='grid grid-cols-1 gap-4'>
                        <Input
                          key={'outside'}
                          type="text"
                          label="Full Name"
                          placeholder='Enter full name'
                          labelPlacement={'outside'}
                        />
                        <div className='flex flex-col md:flex-row gap-4'>
                          <Input
                            key={'outside'}
                            type="text"
                            label="First Name"
                            placeholder='Enter your fathers name'
                            labelPlacement={'outside'}
                            />
                          <Input
                            key={'outside'}
                            type="text"
                            label="Last Name"
                            placeholder='Enter your name'
                            labelPlacement={'outside'}
                            />
                        </div>
                        <div className='grid grid-cols-1 gap-4'>
                          <Input
                            key={'outside'}
                            type="text"
                            label="Full Name"
                            placeholder='Enter full name'
                            labelPlacement={'outside'}
                          />
                          <div className='flex flex-col md:flex-row gap-4'>
                            <div className='h-fit w-full '>
                              <RadioGroup
                                size='md'
                                label="Select your favorite city"
                              >
                                <Radio value="buenos-aires">Male</Radio>
                                <Radio value="sydney">Female</Radio>
                              </RadioGroup>
                            </div>
                            <DateInput labelPlacement='outside' label={"Birth date"} placeholderValue={new CalendarDate(1995, 11, 6)} className="max-w-sm" />
                          </div>
                        </div>
                        <Input
                          key={'outside'}
                          type="text"
                          label="Permanent Address"
                          placeholder='Enter Permanent Address'
                          labelPlacement={'outside'}
                        />
                        <Input
                          key={'outside'}
                          type="text"
                          label="Current Address"
                          placeholder='Enter Current Address'
                          labelPlacement={'outside'}
                        />
                        <Input
                          key={'outside'}
                          type="text"
                          label="Natinality"
                          placeholder='Enter Natinality'
                          labelPlacement={'outside'}
                        />
                        <div className='flex flex-col lg:flex-row gap-4'>
                          <Input
                            key={'outside'}
                            type="text"
                            label="Residence"
                            placeholder='Enter number'
                            labelPlacement={'outside'}
                            />
                          <Input
                            key={'outside'}
                            type="text"
                            label="Mobile"
                            placeholder='Enter number'
                            labelPlacement={'outside'}
                            />
                            <Input
                            key={'outside'}
                            type="text"
                            label="Alternate number"
                            placeholder='Enter number'
                            labelPlacement={'outside'}
                            />
                        </div>
                        <Input
                          key={'outside'}
                          type="email"
                          label="Email address"
                          placeholder='Enter Email adress'
                          labelPlacement={'outside'}
                        />
                        <div className='flex flex-col md:flex-row gap-4'>
                          <Input
                            key={'outside'}
                            type="number"
                            label="NIC"
                            placeholder='Enter your NIC number'
                            labelPlacement={'outside'}
                            />
                          <Input
                            key={'outside'}
                            type="number"
                            label="Passport Number"
                            placeholder='Enter Passport number'
                            labelPlacement={'outside'}
                            />
                        </div>
                      </div>
                      
                    </AccordionItem>
                    <AccordionItem key="3" aria-label="Accordion 3" title={
                      <p className='text-[#DA0C0C] uppercase text-sm font-bold'>
                        School's attended
                      </p>
                    }>
                      <div className='grid grid-cols-1 gap-4'>
                        <Input
                          key={'outside'}
                          type="text"
                          label="School name"
                          placeholder='Enter School name'
                          labelPlacement={'outside'}
                        />
                        <Input
                          key={'outside'}
                          type="text"
                          label="School name"
                          placeholder='Enter School name'
                          labelPlacement={'outside'}
                        />
                      
                      </div>
                    </AccordionItem>
                    <AccordionItem key="4" aria-label="Accordion 4" title={
                      <p className='text-[#DA0C0C] uppercase text-sm font-bold'>
                        Qualification (genaral)
                      </p>
                    }>
                      <div className='grid grid-cols-1 gap-4'>
                        <div className='grid grid-cols-1 gap-4'>
                          <RadioGroup
                            label="GCE O/L"
                            orientation="horizontal"
                            value={GSEOLLSelected}
                            onValueChange={setGSEOLLSelected}
                          >
                            <Radio value="local">Local</Radio>
                            <Radio value="tamil">Tamil</Radio>
                            <Radio value="english">English</Radio>
                            <Radio value="others">others</Radio>
                          </RadioGroup>
                          
                          <Input
                            key={'outside'}
                            type="text"
                            label="Language"
                            disabled={
                              GSEOLLSelected == "others"?
                              false:
                              true
                            }
                            
                            placeholder='Enter other language'
                            labelPlacement={'outside'}
                          />
                          
                          <div className='flex flex-col md:flex-row gap-8'>
                            <div className='flex flex-col gap-4'>
                              <p className='text-sm font-medium'>Atempt 1</p>
                              <div className='flex gap-2'>
                                <Input
                                  key={'outside'}
                                  type="number"
                                  label="Year"
                                  placeholder='Enter year'
                                  labelPlacement={'outside'}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Date"
                                  placeholder='Enter Date'
                                  labelPlacement={'outside'}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Garde"
                                  placeholder='Enter Garde'
                                  labelPlacement={'outside'}
                                />
                              </div>
                              <div className='flex gap-2'>
                                <Input
                                  key={'outside'}
                                  type="number"
                                  label="Year"
                                  placeholder='Enter year'
                                  labelPlacement={'outside'}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Date"
                                  placeholder='Enter Date'
                                  labelPlacement={'outside'}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Garde"
                                  placeholder='Enter Garde'
                                  labelPlacement={'outside'}
                                />
                              </div>
                              <div className='flex gap-2'>
                                <Input
                                  key={'outside'}
                                  type="number"
                                  label="Year"
                                  placeholder='Enter year'
                                  labelPlacement={'outside'}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Date"
                                  placeholder='Enter Date'
                                  labelPlacement={'outside'}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Garde"
                                  placeholder='Enter Garde'
                                  labelPlacement={'outside'}
                                />
                              </div>
                              <div className='flex gap-2'>
                                <Input
                                  key={'outside'}
                                  type="number"
                                  label="Year"
                                  placeholder='Enter year'
                                  labelPlacement={'outside'}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Date"
                                  placeholder='Enter Date'
                                  labelPlacement={'outside'}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Garde"
                                  placeholder='Enter Garde'
                                  labelPlacement={'outside'}
                                />
                              </div>
                              <div className='flex gap-2'>
                                <Input
                                  key={'outside'}
                                  type="number"
                                  label="Year"
                                  placeholder='Enter year'
                                  labelPlacement={'outside'}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Date"
                                  placeholder='Enter Date'
                                  labelPlacement={'outside'}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Garde"
                                  placeholder='Enter Garde'
                                  labelPlacement={'outside'}
                                />
                              </div>
                              <div className='flex gap-2'>
                                <Input
                                  key={'outside'}
                                  type="number"
                                  label="Year"
                                  placeholder='Enter year'
                                  labelPlacement={'outside'}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Date"
                                  placeholder='Enter Date'
                                  labelPlacement={'outside'}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Garde"
                                  placeholder='Enter Garde'
                                  labelPlacement={'outside'}
                                />
                              </div>
                              <div className='flex gap-2'>
                                <Input
                                  key={'outside'}
                                  type="number"
                                  label="Year"
                                  placeholder='Enter year'
                                  labelPlacement={'outside'}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Date"
                                  placeholder='Enter Date'
                                  labelPlacement={'outside'}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Garde"
                                  placeholder='Enter Garde'
                                  labelPlacement={'outside'}
                                />
                              </div>
                              <div className='flex gap-2'>
                                <Input
                                  key={'outside'}
                                  type="number"
                                  label="Year"
                                  placeholder='Enter year'
                                  labelPlacement={'outside'}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Date"
                                  placeholder='Enter Date'
                                  labelPlacement={'outside'}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Garde"
                                  placeholder='Enter Garde'
                                  labelPlacement={'outside'}
                                />
                              </div>
                              <div className='flex gap-2'>
                                <Input
                                  key={'outside'}
                                  type="number"
                                  label="Year"
                                  placeholder='Enter year'
                                  labelPlacement={'outside'}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Date"
                                  placeholder='Enter Date'
                                  labelPlacement={'outside'}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Garde"
                                  placeholder='Enter Garde'
                                  labelPlacement={'outside'}
                                />
                              </div>
                            </div>

                            <div className='flex flex-col gap-4'>
                              <p className='text-sm font-medium'>Atempt 2</p>
                              <div className='flex gap-2'>
                                <Input
                                  key={'outside'}
                                  type="number"
                                  label="Year"
                                  placeholder='Enter year'
                                  labelPlacement={'outside'}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Date"
                                  placeholder='Enter Date'
                                  labelPlacement={'outside'}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Garde"
                                  placeholder='Enter Garde'
                                  labelPlacement={'outside'}
                                />
                              </div>
                              <div className='flex gap-2'>
                                <Input
                                  key={'outside'}
                                  type="number"
                                  label="Year"
                                  placeholder='Enter year'
                                  labelPlacement={'outside'}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Date"
                                  placeholder='Enter Date'
                                  labelPlacement={'outside'}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Garde"
                                  placeholder='Enter Garde'
                                  labelPlacement={'outside'}
                                />
                              </div>
                              <div className='flex gap-2'>
                                <Input
                                  key={'outside'}
                                  type="number"
                                  label="Year"
                                  placeholder='Enter year'
                                  labelPlacement={'outside'}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Date"
                                  placeholder='Enter Date'
                                  labelPlacement={'outside'}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Garde"
                                  placeholder='Enter Garde'
                                  labelPlacement={'outside'}
                                />
                              </div>
                              <div className='flex gap-2'>
                                <Input
                                  key={'outside'}
                                  type="number"
                                  label="Year"
                                  placeholder='Enter year'
                                  labelPlacement={'outside'}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Date"
                                  placeholder='Enter Date'
                                  labelPlacement={'outside'}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Garde"
                                  placeholder='Enter Garde'
                                  labelPlacement={'outside'}
                                />
                              </div>
                              <div className='flex gap-2'>
                                <Input
                                  key={'outside'}
                                  type="number"
                                  label="Year"
                                  placeholder='Enter year'
                                  labelPlacement={'outside'}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Date"
                                  placeholder='Enter Date'
                                  labelPlacement={'outside'}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Garde"
                                  placeholder='Enter Garde'
                                  labelPlacement={'outside'}
                                />
                              </div>
                              <div className='flex gap-2'>
                                <Input
                                  key={'outside'}
                                  type="number"
                                  label="Year"
                                  placeholder='Enter year'
                                  labelPlacement={'outside'}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Date"
                                  placeholder='Enter Date'
                                  labelPlacement={'outside'}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Garde"
                                  placeholder='Enter Garde'
                                  labelPlacement={'outside'}
                                />
                              </div>
                              <div className='flex gap-2'>
                                <Input
                                  key={'outside'}
                                  type="number"
                                  label="Year"
                                  placeholder='Enter year'
                                  labelPlacement={'outside'}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Date"
                                  placeholder='Enter Date'
                                  labelPlacement={'outside'}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Garde"
                                  placeholder='Enter Garde'
                                  labelPlacement={'outside'}
                                />
                              </div>
                              <div className='flex gap-2'>
                                <Input
                                  key={'outside'}
                                  type="number"
                                  label="Year"
                                  placeholder='Enter year'
                                  labelPlacement={'outside'}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Date"
                                  placeholder='Enter Date'
                                  labelPlacement={'outside'}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Garde"
                                  placeholder='Enter Garde'
                                  labelPlacement={'outside'}
                                />
                              </div>
                              <div className='flex gap-2'>
                                <Input
                                  key={'outside'}
                                  type="number"
                                  label="Year"
                                  placeholder='Enter year'
                                  labelPlacement={'outside'}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Date"
                                  placeholder='Enter Date'
                                  labelPlacement={'outside'}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Garde"
                                  placeholder='Enter Garde'
                                  labelPlacement={'outside'}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='grid grid-cols-1 gap-4'>
                          <RadioGroup
                            label="GCE A/L"
                            orientation="horizontal"
                          >
                            <Radio value="local">Local</Radio>
                            <Radio value="tamil">Tamil</Radio>
                            <Radio value="english">English</Radio>
                            <Radio value="others">others</Radio>
                          </RadioGroup>
                          
                          <div className='flex flex-col md:flex-row gap-8'>
                            <div className='flex flex-col gap-4'>
                              <p className='text-sm font-medium'>Atempt 1</p>
                              <div className='flex gap-2'>
                                <Input
                                  key={'outside'}
                                  type="number"
                                  label="Year"
                                  placeholder='Enter year'
                                  labelPlacement={'outside'}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Date"
                                  placeholder='Enter Date'
                                  labelPlacement={'outside'}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Garde"
                                  placeholder='Enter Garde'
                                  labelPlacement={'outside'}
                                />
                              </div>
                              <div className='flex gap-2'>
                                <Input
                                  key={'outside'}
                                  type="number"
                                  label="Year"
                                  placeholder='Enter year'
                                  labelPlacement={'outside'}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Date"
                                  placeholder='Enter Date'
                                  labelPlacement={'outside'}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Garde"
                                  placeholder='Enter Garde'
                                  labelPlacement={'outside'}
                                />
                              </div>
                              <div className='flex gap-2'>
                                <Input
                                  key={'outside'}
                                  type="number"
                                  label="Year"
                                  placeholder='Enter year'
                                  labelPlacement={'outside'}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Date"
                                  placeholder='Enter Date'
                                  labelPlacement={'outside'}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Garde"
                                  placeholder='Enter Garde'
                                  labelPlacement={'outside'}
                                />
                              </div>
                              <div className='flex gap-2'>
                                <Input
                                  key={'outside'}
                                  type="number"
                                  label="Year"
                                  placeholder='Enter year'
                                  labelPlacement={'outside'}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Date"
                                  placeholder='Enter Date'
                                  labelPlacement={'outside'}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Garde"
                                  placeholder='Enter Garde'
                                  labelPlacement={'outside'}
                                />
                              </div>
                              <div className='flex gap-2'>
                                <Input
                                  key={'outside'}
                                  type="number"
                                  label="Year"
                                  placeholder='Enter year'
                                  labelPlacement={'outside'}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Date"
                                  placeholder='Enter Date'
                                  labelPlacement={'outside'}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Garde"
                                  placeholder='Enter Garde'
                                  labelPlacement={'outside'}
                                />
                              </div>
                            </div>

                            <div className='flex flex-col gap-4'>
                              <p className='text-sm font-medium'>Atempt 2</p>
                              <div className='flex gap-2'>
                                <Input
                                  key={'outside'}
                                  type="number"
                                  label="Year"
                                  placeholder='Enter year'
                                  labelPlacement={'outside'}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Date"
                                  placeholder='Enter Date'
                                  labelPlacement={'outside'}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Garde"
                                  placeholder='Enter Garde'
                                  labelPlacement={'outside'}
                                />
                              </div>
                              <div className='flex gap-2'>
                                <Input
                                  key={'outside'}
                                  type="number"
                                  label="Year"
                                  placeholder='Enter year'
                                  labelPlacement={'outside'}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Date"
                                  placeholder='Enter Date'
                                  labelPlacement={'outside'}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Garde"
                                  placeholder='Enter Garde'
                                  labelPlacement={'outside'}
                                />
                              </div>
                              <div className='flex gap-2'>
                                <Input
                                  key={'outside'}
                                  type="number"
                                  label="Year"
                                  placeholder='Enter year'
                                  labelPlacement={'outside'}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Date"
                                  placeholder='Enter Date'
                                  labelPlacement={'outside'}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Garde"
                                  placeholder='Enter Garde'
                                  labelPlacement={'outside'}
                                />
                              </div>
                              <div className='flex gap-2'>
                                <Input
                                  key={'outside'}
                                  type="number"
                                  label="Year"
                                  placeholder='Enter year'
                                  labelPlacement={'outside'}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Date"
                                  placeholder='Enter Date'
                                  labelPlacement={'outside'}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Garde"
                                  placeholder='Enter Garde'
                                  labelPlacement={'outside'}
                                />
                              </div>
                              <div className='flex gap-2'>
                                <Input
                                  key={'outside'}
                                  type="number"
                                  label="Year"
                                  placeholder='Enter year'
                                  labelPlacement={'outside'}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Date"
                                  placeholder='Enter Date'
                                  labelPlacement={'outside'}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Garde"
                                  placeholder='Enter Garde'
                                  labelPlacement={'outside'}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      
                      </div>
                    </AccordionItem>
                  </Accordion>
                  <div className='flex flex-col gap-2 pt-12'>
                    <p className='text-lg font-bold'>DECLARATION-1</p>
                    <p className='text-black/50 text-sm'>I understand that the course I have chosen is provided strictly in accordance with the approval 
                    given by the relevant qualification awarding body. My qualification will thus be awarded direct 
                    upon my achieving the minimum academic benchmark set by the awarding body. I have been 
                    made aware that it is my responsibility to confirm the approval and recognition of the 
                    qualification by any other relevant local or international professional bodies. I am further aware 
                    that any changes that may occur in the future pertaining to the approval / recognition of the 
                    qualification would be beyond the control of ENC and hence it cannot be held responsible for 
                    such changes.</p>
                    <p className='text-lg font-bold mt-4'>DECLARATION-2</p>
                    <p className='text-black/50 text-sm'>By <span className='font-bold text-black'>submitting</span> this form, I confirm that to the best of my knowledge, the information given in 
                    this form is correct and accurate. Further, I agree to abide by the rules and regulations of the 
                    college. If any information given here is found to be false, I am aware my application will be 
                    cancelled / admission will be quashed and I shall have no claim whatsoever from the college. I 
                    also understand no refund or batch transfer will be effected after ten days from the start date of 
                    the course.</p>

                  </div>
                </div>
              </div>
            </section>
            <section className='md:col-span-1 w-full'>
              <Button color='' radius='none' className="w-full hidden lg:flex bg-[#DA0C0C] text-white font-medium ">
                <p>Submit</p>
                <RiSecurePaymentFill  />
              </Button>
            </section>
          </div>
      </section>
      
      
    </div>
  )
}

export default ApplicationScreen