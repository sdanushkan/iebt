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

  //personal Details
  const [name, setName] = useState('')
  const [cNumber, setCNumber] = useState('')
  const [email, setEmail] = useState('')
  const [dob, setDOB] = useState('')
  const [status, setStatus] = useState('')
  const [dependent, setDependent] = useState('')
  const [funds, setFunds] = useState('')

  //Educational Qualification
  //GCE O/L A-1
  const [OLS1A1, setOLS1A1] = useState('')
  const [OLS1A1G, setOLS1A1G] = useState('')

  const [OLS2A1, setOLS2A1] = useState('')
  const [OLS2A1G, setOLS2A1G] = useState('')

  const [OLS3A1, setOLS3A1] = useState('')
  const [OLS3A1G, setOLS3A1G] = useState('')

  const [OLS4A1, setOLS4A1] = useState('')
  const [OLS4A1G, setOLS4A1G] = useState('')

  const [OLS5A1, setOLS5A1] = useState('')
  const [OLS5A1G, setOLS5A1G] = useState('')

  const [OLS6A1, setOLS6A1] = useState('')
  const [OLS6A1G, setOLS6A1G] = useState('')

  const [OLS7A1, setOLS7A1] = useState('')
  const [OLS7A1G, setOLS7A1G] = useState('')

  const [OLS8A1, setOLS8A1] = useState('')
  const [OLS8A1G, setOLS8A1G] = useState('')

  const [OLS9A1, setOLS9A1] = useState('')
  const [OLS9A1G, setOLS9A1G] = useState('')

  //GCE O/L A-1
  const [OLS1A2, setOLS1A2] = useState('')
  const [OLS1A2G, setOLS1A2G] = useState('')

  const [OLS2A2, setOLS2A2] = useState('')
  const [OLS2A2G, setOLS2A2G] = useState('')
  
  const [OLS3A2, setOLS3A2] = useState('')
  const [OLS3A2G, setOLS3A2G] = useState('')
  
  const [OLS4A2, setOLS4A2] = useState('')
  const [OLS4A2G, setOLS4A2G] = useState('')
  
  const [OLS5A2, setOLS5A2] = useState('')
  const [OLS5A2G, setOLS5A2G] = useState('')
  
  const [OLS6A2, setOLS6A2] = useState('')
  const [OLS6A2G, setOLS6A2G] = useState('')
  
  const [OLS7A2, setOLS7A2] = useState('')
  const [OLS7A2G, setOLS7A2G] = useState('')
  
  const [OLS8A2, setOLS8A2] = useState('')
  const [OLS8A2G, setOLS8A2G] = useState('')
  
  const [OLS9A2, setOLS9A2] = useState('')
  const [OLS9A2G, setOLS9A2G] = useState('')

   //GCE A/L A-1
   const [ALS1A1, setALS1A1] = useState('')
   const [ALS1A1G, setALS1A1G] = useState('')
   
   const [ALS2A1, setALS2A1] = useState('')
   const [ALS2A1G, setALS2A1G] = useState('')
   
   const [ALS3A1, setALS3A1] = useState('')
   const [ALS3A1G, setALS3A1G] = useState('')
   
   const [ALS4A1, setALS4A1] = useState('')
   const [ALS4A1G, setALS4A1G] = useState('')

   //GCE A/L A-1
   const [ALS1A2, setALS1A2] = useState('')
   const [ALS1A2G, setALS1A2G] = useState('')

   const [ALS2A2, setALS2A2] = useState('')
   const [ALS2A2G, setALS2A2G] = useState('')

   const [ALS3A2, setALS3A2] = useState('')
   const [ALS3A2G, setALS3A2G] = useState('')

   const [ALS4A2, setALS4A2] = useState('')
   const [ALS4A2G, setALS4A2G] = useState('')

   //Higher Education Qualifications:
   const [HEQ1, setHEQ1] = useState('')
   const [HEQ1G, setHEQ1G] = useState('')

   const [HEQ2, setHEQ2] = useState('')
   const [HEQ2G, setHEQ2G] = useState('')

   const [HEQ3, setHEQ3] = useState('')
   const [HEQ3G, setHEQ3G] = useState('')

   const [HEQ4, setHEQ4] = useState('')
   const [HEQ4G, setHEQ4G] = useState('')

   const [HEQ5, setHEQ5] = useState('')
   const [HEQ5G, setHEQ5G] = useState('')

   //English Language Proficiency 
   const [OLE, setOLE] = useState('')
   const [OLEG, setOLEG] = useState('')

   const [AL, setAL] = useState('')
   const [ALG, setALG] = useState('')

   const [IELTS, setIELTS] = useState('')
   const [IELTSG, setIELTSG] = useState('')

   //Work Experience 
   const [company1, setCompany1] = useState('')
   const [year1, setYear1] = useState('')
   const [position1, setPosition1] = useState('')

   const [company2, setCompany2] = useState('')
   const [year2, setYear2] = useState('')
   const [position2, setPosition2] = useState('')

   const [company3, setCompany3] = useState('')
   const [year3, setYear3] = useState('')
   const [position3, setPosition3] = useState('')

   //Preferred Country
   const [c1, setc1] = useState('')
   const [c2, setc2] = useState('')
   const [c3, setc3] = useState('')
   const [c4, setc4] = useState('')

   //Preferred Intake
   const [i1, seti1] = useState('')
   const [i2, seti2] = useState('')
   const [i3, seti3] = useState('')
   const [i4, seti4] = useState('')
  
  const [GSEOLLSelected, setGSEOLLSelected] = React.useState("");

  useEffect(() => {
    window.scroll(0,0);
  }, [location]);

  const sendMail = () =>{
    window.Email.send({
        Host : "smtp.elasticemail.com",
        Username : "enquiries@iebc.lk",
        Password : "CE31FAADB1ED3AD7CAAE79F32A7C9EA3A2D7",
        To : 'enquiries@iebc.lk',
        From : "danudanushkan31@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
  }

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
          
          <div className='w-full h-fit max-w-[1024px] mx-auto bg-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] -mt-[100px] relative z-10 md:gap-1 md:p-4 xl:p-12 grid grid-cols-1 md:grid-cols-5 rounded-[16px]'>
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
                <RiSecurePaymentFill  onClick={sendMail}/>
              </Button>
            </section>
          </div>
      </section>
      
      
    </div>
  )
}

export default ApplicationScreen