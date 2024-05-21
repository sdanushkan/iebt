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
          <img src={'https://t3.ftcdn.net/jpg/05/30/96/04/360_F_530960431_c8fPd3HansYvrSJ4fJxZqp9OhjQmYoll.jpg'} alt='' className='h-[400px] w-full object-cover relative -z-40' />
          
          <div className='w-full h-fit max-w-[1100px] mx-auto bg-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] -mt-[100px] relative z-10 md:gap-1 md:p-4 xl:p-12 grid grid-cols-1 md:grid-cols-5'>
            <section className='w-full relative md:col-span-4'>
              <div className='h-fit w-full mx-auto px-2 sm:px-6 flex items-start gap-8 '>
                <div className='w-full '>
                  <Accordion className='w-full'>
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