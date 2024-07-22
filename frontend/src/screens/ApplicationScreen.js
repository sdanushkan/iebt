import React, { useEffect, useState } from 'react'
import {Checkbox, Input} from "@nextui-org/react";
import {Textarea} from "@nextui-org/input";
import { Button } from '@nextui-org/react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { RiSecurePaymentFill } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import {Accordion, AccordionItem} from "@nextui-org/accordion";
import { getCourseList, getFacultyList, getFilterCourseList, sendApplication, sendApplicationMail } from '../actions/courseActions';
import {Select, SelectItem} from "@nextui-org/react";
import { AiFillSignal } from "react-icons/ai";
import { FaAward } from "react-icons/fa";
import {RadioGroup, Radio} from "@nextui-org/react";
import {DateInput} from "@nextui-org/date-input";
import {CalendarDate} from "@internationalized/date";
import {parseDate, getLocalTimeZone} from "@internationalized/date";
import {useDateFormatter} from "@react-aria/i18n";

const ApplicationScreen = () => {
  const dispatch = useDispatch()
  const history = useNavigate()
  const location = useLocation()

  const [faculty, setFaculty] = useState()
  const [course, setCourse] = useState()

  const [nfaculty, setnFaculty] = useState()
  const [ncourse, setnCourse] = useState()

  const [GSEOLLSelectedO, setGSEOLLSelectedO] = useState('_')
  
 

  const [isPSP, setIsPSP] = React.useState(false);
  const [isPOQ, setIsPOQ] = React.useState(false);
  const [isBC, setIsBC] = React.useState(false);
  const [isNIC, setIsNIC] = React.useState(false);
  const [isAR, setIsAR] = React.useState(false);

  //personal Details
  const [fullName, setFullName] = useState('')
  const [fName, setFName] = useState('')
  const [lName, setLName] = useState('')
  const [NIC, setNIC] = useState('')
  const [cNumber, setCNumber] = useState('')
  const [sex, setSex] = useState('') 
  const [email, setEmail] = useState('')
  const [dob, setDOB] = useState('')
  const [status, setStatus] = useState('')
  const [dependent, setDependent] = useState('')
  const [funds, setFunds] = useState('')

  //Educational Qualification
  //GCE O/L A-1
  const [OLA1Y, setOLA1Y] = useState('')

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
  const [OLA2Y, setOLA2Y] = useState('')

  const [OLS1A2, setOLS1A2] = useState('')
  const [OLS1A2G, setOLS1A2G] = useState('')

  const [OLA2Y2, setOLA2Y2] = useState('')
  const [OLS2A2, setOLS2A2] = useState('')
  const [OLS2A2G, setOLS2A2G] = useState('')
  
  const [OLA2Y3, setOLA2Y3] = useState('')
  const [OLS3A2, setOLS3A2] = useState('')
  const [OLS3A2G, setOLS3A2G] = useState('')
  
  const [OLA2Y4, setOLA2Y4] = useState('')
  const [OLS4A2, setOLS4A2] = useState('')
  const [OLS4A2G, setOLS4A2G] = useState('')
  
  const [OLA2Y5, setOLA2Y5] = useState('')
  const [OLS5A2, setOLS5A2] = useState('')
  const [OLS5A2G, setOLS5A2G] = useState('')
  
  const [OLA2Y6, setOLA2Y6] = useState('')
  const [OLS6A2, setOLS6A2] = useState('')
  const [OLS6A2G, setOLS6A2G] = useState('')
  
  const [OLA2Y7, setOLA2Y7] = useState('')
  const [OLS7A2, setOLS7A2] = useState('')
  const [OLS7A2G, setOLS7A2G] = useState('')
  
  const [OLA2Y8, setOLA2Y8] = useState('')
  const [OLS8A2, setOLS8A2] = useState('')
  const [OLS8A2G, setOLS8A2G] = useState('')
  
  const [OLA2Y9, setOLA2Y9] = useState('')
  const [OLS9A2, setOLS9A2] = useState('')
  const [OLS9A2G, setOLS9A2G] = useState('')

  //GCE A/L A-1
  const [ALA1Y, setALA1Y] = useState('')

  const [ALS1A1, setALS1A1] = useState('')
  const [ALS1A1G, setALS1A1G] = useState('')
  
  const [ALS2A1, setALS2A1] = useState('')
  const [ALS2A1G, setALS2A1G] = useState('')
  
  const [ALS3A1, setALS3A1] = useState('')
  const [ALS3A1G, setALS3A1G] = useState('')
  
  const [ALS4A1, setALS4A1] = useState('')
  const [ALS4A1G, setALS4A1G] = useState('')

  //GCE A/L A-1
  const [ALA2Y, setALA2Y] = useState('')

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
  const [HEQ1Y, setHEQ1Y] = useState('')
  const [HEQ1G, setHEQ1G] = useState('')

  const [HEQ2, setHEQ2] = useState('')
  const [HEQ2Y, setHEQ2Y] = useState('')
  const [HEQ2G, setHEQ2G] = useState('')

  const [HEQ3, setHEQ3] = useState('')
  const [HEQ3Y, setHEQ3Y] = useState('')
  const [HEQ3G, setHEQ3G] = useState('')

  const [HEQ4, setHEQ4] = useState('')
  const [HEQ4Y, setHEQ4Y] = useState('')
  const [HEQ4G, setHEQ4G] = useState('')

  const [HEQ5, setHEQ5] = useState('')
  const [HEQ5Y, setHEQ5Y] = useState('')
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

  // "Passportsizecolourphotos":isPSP,
      // "Proofofyourqualiﬁcations":isPOQ,
      // "CopyofyourBirthCertiﬁcate":isBC,
      // "CopyofyourNationalIdentityCard":isNIC,
      // "Anyotherrelevantdocuments":isAR,

  const sendMail = () =>{
    dispatch(sendApplicationMail({ 
      "faculty": nfaculty,
      "course": ncourse,

      "sex":sex,

      "fullName": fullName,
      "fName": fName,
      "lName": lName,
      "Number": cNumber,
      "NIC": NIC,
      "Email": email,
      "DOB": value,
      "Sex": sex,
      "Dependents": dependent,
      "Status": status,
      "funds": funds,

      "GSEOLLSelected":GSEOLLSelected,
      "GSEOLLSelectedO":GSEOLLSelectedO,
      "OLA1Y": OLA1Y,
      "funds": funds,
      "OLS1A1": OLS1A1,
      "OLS1A1G": OLS1A1G,
      "OLS2A1": OLS2A1,
      "OLS2A1G": OLS2A1G,
      "OLS3A1": OLS3A1,
      "OLS3A1G": OLS3A1G,
      "OLS4A1": OLS4A1,
      "OLS4A1G": OLS4A1G,
      "OLS5A1": OLS5A1,
      "OLS5A1G": OLS5A1G,
      "OLS6A1": OLS6A1,
      "OLS6A1G": OLS6A1G,
      "OLS7A1": OLS7A1,
      "OLS7A1G": OLS7A1G,
      "OLS8A1": OLS8A1,
      "OLS8A1G": OLS8A1G,
      "OLS9A1": OLS9A1,
      "OLS9A1G": OLS9A1G,

      "OLA2Y": OLA2Y,
      "OLS1A2": OLS1A2,
      "OLS1A2G": OLS1A2G,

      "OLA2Y2": OLA2Y2,
      "OLS2A2": OLS2A2,
      "OLS2A2G": OLS2A2G,

      "OLA2Y3": OLA2Y3,
      "OLS3A2": OLS3A2,
      "OLS3A2G": OLS3A2G,

      "OLA2Y4": OLA2Y4,
      "OLS4A2": OLS4A2,
      "OLS4A2G": OLS4A2G,

      "OLA2Y5": OLA2Y5,
      "OLS5A2": OLS5A2,
      "OLS5A2G": OLS5A2G,

      "OLA2Y6": OLA2Y6,
      "OLS6A2": OLS6A2,
      "OLS6A2G": OLS6A2G,

      "OLA2Y7": OLA2Y7,
      "OLS7A2": OLS7A2,
      "OLS7A2G": OLS7A2G,

      "OLA2Y8": OLA2Y8,
      "OLS8A2": OLS8A2,
      "OLS8A2G": OLS8A2G,

      "OLA2Y9": OLA2Y9,
      "OLS9A2": OLS9A2,
      "OLS9A2G": OLS9A2G,

      "ALA1Y": ALA1Y,
      "ALS1A1": ALS1A1,
      "ALS1A1G": ALS1A1G,
      "ALS2A1": ALS2A1,
      "ALS2A1G": ALS2A1G,
      "ALS3A1": ALS3A1,
      "ALS3A1G": ALS3A1G,
      "ALS4A1": ALS4A1,
      "ALS4A1G": ALS4A1G,
      "ALA2Y": ALA2Y,
      "ALS1A2": ALS1A2,
      "ALS1A2G": ALS1A2G,
      "ALS2A2": ALS2A2,
      "ALS2A2G": ALS2A2G,
      "ALS3A2": ALS3A2,
      "ALS3A2G": ALS3A2G,
      "ALS4A2": ALS4A2,
      "ALS4A2G": ALS4A2G,
      "HEQ1": HEQ1,
      "HEQ1Y": HEQ1Y,
      "HEQ1G": HEQ1G,
      "HEQ2": HEQ2,
      "HEQ2Y": HEQ2Y,
      "HEQ2G": HEQ2G,
      "HEQ3": HEQ3,
      "HEQ3Y": HEQ3Y,
      "HEQ3G": HEQ3G,
      "HEQ4": HEQ4,
      "HEQ4Y": HEQ4Y,
      "HEQ4G": HEQ4G,
      "HEQ5": HEQ5,
      "HEQ5Y": HEQ5Y,
      "HEQ5G": HEQ5G,
      "OLE": OLE,
      "OLEG": OLEG,
      "AL": AL,
      "ALG": ALG,
      "IELTS": IELTS,
      "IELTSG": IELTSG,
      "company1": company1,
      "year1": year1,
      "position1": position1,
      "company2": company2,
      "year2": year2,
      "position2": position2,
      "company3": company3,
      "year3": year3,
      "position3": position3,
      "c1": c1,
      "c2": c2,
      "c3": c3,
      "c4": c4,
      "i1": i1,
      "i2": i2,
      "i3": i3,
      "i4": i4,
  }))
  setFullName('');
setFName('');
setLName('');
setNIC('');
setCNumber('');
setSex('');
setEmail('');
setDOB('');
setStatus('');
setDependent('');
setFunds('');

// GCE O/L A-1
setOLA1Y('');
setOLS1A1('');
setOLS1A1G('');
setOLS2A1('');
setOLS2A1G('');
setOLS3A1('');
setOLS3A1G('');
setOLS4A1('');
setOLS4A1G('');
setOLS5A1('');
setOLS5A1G('');
setOLS6A1('');
setOLS6A1G('');
setOLS7A1('');
setOLS7A1G('');
setOLS8A1('');
setOLS8A1G('');
setOLS9A1('');
setOLS9A1G('');

// GCE O/L A-2
setOLA2Y('');
setOLS1A2('');
setOLS1A2G('');
setOLS2A2('');
setOLS2A2G('');
setOLS3A2('');
setOLS3A2G('');
setOLS4A2('');
setOLS4A2G('');
setOLS5A2('');
setOLS5A2G('');
setOLS6A2('');
setOLS6A2G('');
setOLS7A2('');
setOLS7A2G('');
setOLS8A2('');
setOLS8A2G('');
setOLS9A2('');
setOLS9A2G('');

// GCE A/L A-1
setALA1Y('');
setALS1A1('');
setALS1A1G('');
setALS2A1('');
setALS2A1G('');
setALS3A1('');
setALS3A1G('');
setALS4A1('');
setALS4A1G('');

// GCE A/L A-2
setALA2Y('');
setALS1A2('');
setALS1A2G('');
setALS2A2('');
setALS2A2G('');
setALS3A2('');
setALS3A2G('');
setALS4A2('');
setALS4A2G('');

// Higher Education Qualifications
setHEQ1('');
setHEQ1Y('');
setHEQ1G('');
setHEQ2('');
setHEQ2Y('');
setHEQ2G('');
setHEQ3('');
setHEQ3Y('');
setHEQ3G('');
setHEQ4('');
setHEQ4Y('');
setHEQ4G('');
setHEQ5('');
setHEQ5Y('');
setHEQ5G('');

// English Language Proficiency
setOLE('');
setOLEG('');
setAL('');
setALG('');
setIELTS('');
setIELTSG('');

// Work Experience
setCompany1('');
setYear1('');
setPosition1('');
setCompany2('');
setYear2('');
setPosition2('');
setCompany3('');
setYear3('');
setPosition3('');

// Preferred Country
setc1('');
setc2('');
setc3('');
setc4('');

// Preferred Intake
seti1('');
seti2('');
seti3('');
seti4('');

  }

  const sendApplication = useSelector(state => state.sendApplication)
  const { error: sendApplicationError, loading: sendApplicationLoading, success:CUSuccess } = sendApplication

    const courseFilterList = useSelector(state => state.courseFilterList)
    const { error: courseFilterListError, loading: courseFilterListLoading, courses } = courseFilterList

    const facultyList = useSelector(state => state.facultyList)
    const { error:facultyListError, loading:facultyListLoading, faculties } = facultyList

    useEffect(() => {
     

      if (!faculties) {
        dispatch(getFacultyList())
      }
    }, [dispatch, courses, faculties, ])

    useEffect(() => {
      if (faculty){
        setnFaculty(faculty.anchorKey)
      }
    }, [faculty])  
    
    useEffect(() => {
      if(course){
        setnCourse(course.anchorKey)
      }
    }, [course])

    useEffect(() => {
      if(nfaculty){
        dispatch(getFilterCourseList(nfaculty, 'programes', 'qualifications', 'credits'))
      }
    }, [ nfaculty])

    const [value, setValue] = React.useState(parseDate("2024-04-04"));

  let formatter = useDateFormatter({dateStyle: "full"});

  useEffect(() => {
    window.scroll(0,0);
  }, [location]);
  
  return (
    <div className='flex flex-col gap-14'> 
      <section className='relative'>
          <img src={'https://img.freepik.com/free-vector/futuristic-background-design_23-2148503793.jpg'} alt='' className='h-[400px] w-full object-cover relative -z-40' />
          
          <div className='w-full h-fit max-w-[1024px] mx-auto bg-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] -mt-[100px] relative z-10 md:gap-1 md:p-4 xl:p-12 grid grid-cols-1 md:grid-cols-5 rounded-[16px]'>
            <section className='w-full relative md:col-span-4'>
              <div className='h-fit w-full mx-auto px-2 sm:px-6 flex items-start gap-8 '>
                <div className='w-full '>
                {
                    
                    CUSuccess?
                    <p className='text-xs text-green-500 font-lg '>Message send succefully</p>:
                    <p className='text-xs text-red-500 font-lg '>All fields are required*</p>
                  }                   
                  <Accordion defaultExpandedKeys={['1','2']} selectionMode="multiple" className='w-full'>
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
                          selectedKeys={faculty} 
                          onSelectionChange={setFaculty}
                        
                          endContent={
                            <AiFillSignal />
                          }
                        >
                          {
                            facultyListLoading?
                            '':
                            faculties?
                            faculties.map((i) => (
                              <SelectItem value={i.slug} key={i.slug}>
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
                          // disabled={
                          //   nfaculty==''?
                          //   true:
                          //   false
                          // }
                          selectedKeys={course}
                          onSelectionChange={setCourse}
                          required
                          size='md'
                          endContent={
                            <FaAward  />
                          } 
                        >
                          { 
                            courseFilterListLoading?
                            <SelectItem value={'loading...'} key={'loading...'}>
                                loading...
                              </SelectItem>:
                            courses?
                            courses.map((i) => (
                              <SelectItem value={i.namsluge} key={i.slug}>
                                {i.name}
                              </SelectItem>
                            ))
                            :
                            ''
                          }
                        </Select>
                      </div>
                    </AccordionItem>
                    <AccordionItem key="2"  aria-label="personal details" title={
                      <p className='text-[#DA0C0C] uppercase text-sm font-bold'>
                        Personal Details
                      </p>
                    }>
                      <div className='grid grid-cols-1 gap-4'>
                        <div className='flex flex-col md:flex-row gap-4'>
                          <Input
                            key={'outside'}
                            type="text"
                            label="First Name"
                            placeholder='Enter your fathers name'
                            labelPlacement={'outside'}
                            value={fName} 
                            onChange={(e) => setFName(e.target.value)} 
                            />
                          <Input
                            key={'outside'}
                            type="text"
                            label="Last Name"
                            placeholder='Enter your name'
                            labelPlacement={'outside'}
                            value={lName} 
                            onChange={(e) => setLName(e.target.value)}
                            />
                        </div>
                        <div className='grid grid-cols-1 gap-4'>
                          <Input
                            key={'outside'}
                            type="text"
                            label="Full Name"
                            placeholder='Enter full name'
                            labelPlacement={'outside'}
                            value={fullName} 
                            onChange={(e) => setFullName(e.target.value)} 
                          />
                          <div className='flex flex-col md:flex-row gap-4'>
                            <div className='h-fit w-full '>
                              <RadioGroup
                                size='md'
                                label="Select your favorite city"
                                value={sex} 
                                onChange={(e) => setSex(e.target.value)} 
                              >
                                <Radio value="male">Male</Radio>
                                <Radio value="female">Female</Radio>
                              </RadioGroup>
                            </div>
                            <div className="w-full flex flex-col gap-y-2 max-w-sm">
                              <DateInput label="Date (controlled)" value={value} onChange={setValue} />
                              <p className="text-default-500 text-sm">
                                Selected date: {value ? formatter.format(value.toDate(getLocalTimeZone())) : "--"}
                              </p>
                            </div>
                          </div>
                        </div>
                        <Input
                          key={'outside'}
                          type="text"
                          label="NIC"
                          placeholder='Enter Your nic number'
                          labelPlacement={'outside'}
                          value={NIC} 
                          onChange={(e) => setNIC(e.target.value)} 
                        />
                        {/* <Input
                          key={'outside'}
                          type="text"
                          label="Current Address"
                          placeholder='Enter Current Address'
                          labelPlacement={'outside'}
                          value={address} 
                          onChange={(e) => setAddress(e.target.value)} 
                        /> */}
                        {/* <Input
                          key={'outside'}
                          type="text"
                          label="Natinality"
                          placeholder='Enter Natinality'
                          labelPlacement={'outside'}
                          value={name} 
                          onChange={(e) => setName(e.target.value)} 
                        /> */}
                        <div className='flex flex-col lg:flex-row gap-4'>
                          {/* <Input
                            key={'outside'}
                            type="text"
                            label="Residence"
                            placeholder='Enter number'
                            labelPlacement={'outside'}

                            /> */}
                          <Input
                            key={'outside'}
                            type="text"
                            label="Mobile"
                            placeholder='Enter number'
                            labelPlacement={'outside'}
                            value={cNumber} 
                            onChange={(e) => setCNumber(e.target.value)} 
                            />
                            {/* <Input
                            key={'outside'}
                            type="text"
                            label="Alternate number"
                            placeholder='Enter number'
                            labelPlacement={'outside'}
                            /> */}
                        </div>
                        <Input
                          key={'outside'}
                          type="email"
                          label="Email address"
                          placeholder='Enter Email adress'
                          labelPlacement={'outside'}
                          value={email} 
                          onChange={(e) => setEmail(e.target.value)} 
                        />
                        <div className='flex flex-col md:flex-row gap-4'>
                          {/* <Input
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
                            /> */}
                        </div>
                      </div>
                      
                    </AccordionItem>
                    {/* <AccordionItem key="3" aria-label="Accordion 3" title={
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
                    </AccordionItem> */}
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
                            value={GSEOLLSelectedO} 
                            onChange={(e) => setGSEOLLSelectedO(e.target.value)}
                            
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
                                  value={OLA1Y} 
                                  onChange={(e) => setOLA1Y(e.target.value)} 
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Subject"
                                  placeholder='Subject'
                                  labelPlacement={'outside'}
                                  value={OLS1A1} 
                                  onChange={(e) => setOLS1A1(e.target.value)} 
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Garde"
                                  placeholder='Enter Garde'
                                  labelPlacement={'outside'}
                                  value={OLS1A1G} 
                                  onChange={(e) => setOLS1A1G(e.target.value)}
                                />
                              </div>
                              <div className='flex gap-2'>
                                <Input
                                  key={'outside'}
                                  type="number"
                                  label="Year"
                                  placeholder='Enter year'
                                  labelPlacement={'outside'}
                                  value={OLA1Y} 
                                  onChange={(e) => setOLA1Y(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Subject"
                                  placeholder='Subject'
                                  labelPlacement={'outside'}
                                  value={OLS2A1} 
                                  onChange={(e) => setOLS2A1(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Garde"
                                  placeholder='Enter Garde'
                                  labelPlacement={'outside'}
                                  value={OLS2A1G} 
                                  onChange={(e) => setOLS2A1G(e.target.value)}
                                />
                              </div>
                              <div className='flex gap-2'>
                                <Input
                                  key={'outside'}
                                  type="number"
                                  label="Year"
                                  placeholder='Enter year'
                                  labelPlacement={'outside'}
                                  value={OLA1Y} 
                                  onChange={(e) => setOLA1Y(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Subject"
                                  placeholder='Subject'
                                  labelPlacement={'outside'}
                                  value={OLS3A1} 
                                  onChange={(e) => setOLS3A1(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Garde"
                                  placeholder='Enter Garde'
                                  labelPlacement={'outside'}
                                  value={OLS3A1G} 
                                  onChange={(e) => setOLS3A1G(e.target.value)}
                                />
                              </div>
                              <div className='flex gap-2'>
                                <Input
                                  key={'outside'}
                                  type="number"
                                  label="Year"
                                  placeholder='Enter year'
                                  labelPlacement={'outside'}
                                  value={OLA1Y} 
                                  onChange={(e) => setOLA1Y(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Subject"
                                  placeholder='Subject'
                                  labelPlacement={'outside'}
                                  value={OLS4A1} 
                                  onChange={(e) => setOLS4A1(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Garde"
                                  placeholder='Enter Garde'
                                  labelPlacement={'outside'}
                                  value={OLS4A1G} 
                                  onChange={(e) => setOLS4A1G(e.target.value)}
                                />
                              </div>
                              <div className='flex gap-2'>
                                <Input
                                  key={'outside'}
                                  type="number"
                                  label="Year"
                                  placeholder='Enter year'
                                  labelPlacement={'outside'}
                                  value={OLA1Y} 
                                  onChange={(e) => setOLA1Y(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Subject"
                                  placeholder='Subject'
                                  labelPlacement={'outside'}
                                  value={OLS5A1} 
                                  onChange={(e) => setOLS5A1(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Garde"
                                  placeholder='Enter Garde'
                                  labelPlacement={'outside'}
                                  value={OLS5A1G} 
                                  onChange={(e) => setOLS5A1G(e.target.value)}
                                />
                              </div>
                              <div className='flex gap-2'>
                                <Input
                                  key={'outside'}
                                  type="number"
                                  label="Year"
                                  placeholder='Enter year'
                                  labelPlacement={'outside'}
                                  value={OLA1Y} 
                                  onChange={(e) => setOLA1Y(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Subject"
                                  placeholder='Subject'
                                  labelPlacement={'outside'}
                                  value={OLS6A1} 
                                  onChange={(e) => setOLS6A1(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Garde"
                                  placeholder='Enter Garde'
                                  labelPlacement={'outside'}
                                  value={OLS6A1G} 
                                  onChange={(e) => setOLS6A1G(e.target.value)}
                                />
                              </div>
                              <div className='flex gap-2'>
                                <Input
                                  key={'outside'}
                                  type="number"
                                  label="Year"
                                  placeholder='Enter year'
                                  labelPlacement={'outside'}
                                  value={OLA1Y} 
                                  onChange={(e) => setOLA1Y(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Subject"
                                  placeholder='Subject'
                                  labelPlacement={'outside'}
                                  value={OLS7A1} 
                                  onChange={(e) => setOLS7A1(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Garde"
                                  placeholder='Enter Garde'
                                  labelPlacement={'outside'}
                                  value={OLS7A1G} 
                                  onChange={(e) => setOLS7A1G(e.target.value)}
                                />
                              </div>
                              <div className='flex gap-2'>
                                <Input
                                  key={'outside'}
                                  type="number"
                                  label="Year"
                                  placeholder='Enter year'
                                  labelPlacement={'outside'}
                                  value={OLA1Y} 
                                  onChange={(e) => setOLA1Y(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Subject"
                                  placeholder='Subject'
                                  labelPlacement={'outside'}
                                  value={OLS8A1} 
                                  onChange={(e) => setOLS8A1(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Garde"
                                  placeholder='Enter Garde'
                                  labelPlacement={'outside'}
                                  value={OLS8A1G} 
                                  onChange={(e) => setOLS8A1G(e.target.value)}
                                />
                              </div>
                              <div className='flex gap-2'>
                                <Input
                                  key={'outside'}
                                  type="number"
                                  label="Year"
                                  placeholder='Enter year'
                                  labelPlacement={'outside'}
                                  value={OLA1Y} 
                                  onChange={(e) => setOLA1Y(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Subject"
                                  placeholder='Subject'
                                  labelPlacement={'outside'}
                                  value={OLS9A1} 
                                  onChange={(e) => setOLS9A1(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Garde"
                                  placeholder='Enter Garde'
                                  labelPlacement={'outside'}
                                  value={OLS9A1G} 
                                  onChange={(e) => setOLS9A1G(e.target.value)}
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
                                  value={OLA2Y} 
                                  onChange={(e) => setOLA2Y(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Subject"
                                  placeholder='Subject'
                                  labelPlacement={'outside'}
                                  value={OLS1A2} 
                                  onChange={(e) => setOLS1A2(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Garde"
                                  placeholder='Enter Garde'
                                  labelPlacement={'outside'}
                                  value={OLS1A2G} 
                                  onChange={(e) => setOLS1A2G(e.target.value)}
                                />
                              </div>
                              <div className='flex gap-2'>
                                <Input
                                  key={'outside'}
                                  type="number"
                                  label="Year"
                                  placeholder='Enter year'
                                  labelPlacement={'outside'}
                                  value={OLA2Y2} 
                                  onChange={(e) => setOLA2Y2(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Subject"
                                  placeholder='Subject'
                                  labelPlacement={'outside'}
                                  value={OLS2A2} 
                                  onChange={(e) => setOLS2A2(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Garde"
                                  placeholder='Enter Garde'
                                  labelPlacement={'outside'}
                                  value={OLS2A2G} 
                                  onChange={(e) => setOLS2A2G(e.target.value)}
                                />
                              </div>
                              <div className='flex gap-2'>
                                <Input
                                  key={'outside'}
                                  type="number"
                                  label="Year"
                                  placeholder='Enter year'
                                  labelPlacement={'outside'}
                                  value={OLA2Y3} 
                                  onChange={(e) => setOLA2Y3(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Subject"
                                  placeholder='Subject'
                                  labelPlacement={'outside'}
                                  value={OLS3A2} 
                                  onChange={(e) => setOLS3A2(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Garde"
                                  placeholder='Enter Garde'
                                  labelPlacement={'outside'}
                                  value={OLS3A2G} 
                                  onChange={(e) => setOLS3A2G(e.target.value)}
                                />
                              </div>
                              <div className='flex gap-2'>
                                <Input
                                  key={'outside'}
                                  type="number"
                                  label="Year"
                                  placeholder='Enter year'
                                  labelPlacement={'outside'}
                                  value={OLA2Y4} 
                                  onChange={(e) => setOLA2Y4(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Subject"
                                  placeholder='Subject'
                                  labelPlacement={'outside'}
                                  value={OLS4A2} 
                                  onChange={(e) => setOLS4A2(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Garde"
                                  placeholder='Enter Garde'
                                  labelPlacement={'outside'}
                                  value={OLS4A2G} 
                                  onChange={(e) => setOLS4A2G(e.target.value)}
                                />
                              </div>
                              <div className='flex gap-2'>
                                <Input
                                  key={'outside'}
                                  type="number"
                                  label="Year"
                                  placeholder='Enter year'
                                  labelPlacement={'outside'}
                                  value={OLA2Y5} 
                                  onChange={(e) => setOLA2Y5(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Subject"
                                  placeholder='Subject'
                                  labelPlacement={'outside'}
                                  value={OLS5A2} 
                                  onChange={(e) => setOLS5A2(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Garde"
                                  placeholder='Enter Garde'
                                  labelPlacement={'outside'}
                                  value={OLS5A2G} 
                                  onChange={(e) => setOLS5A2G(e.target.value)}
                                />
                              </div>
                              <div className='flex gap-2'>
                                <Input
                                  key={'outside'}
                                  type="number"
                                  label="Year"
                                  placeholder='Enter year'
                                  labelPlacement={'outside'}
                                  value={OLA2Y6} 
                                  onChange={(e) => setOLA2Y6(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Subject"
                                  placeholder='Subject'
                                  labelPlacement={'outside'}
                                  value={OLS6A2} 
                                  onChange={(e) => setOLS6A2(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Garde"
                                  placeholder='Enter Garde'
                                  labelPlacement={'outside'}
                                  value={OLS6A2G} 
                                  onChange={(e) => setOLS6A2G(e.target.value)}
                                />
                              </div>
                              <div className='flex gap-2'>
                                <Input
                                  key={'outside'}
                                  type="number"
                                  label="Year"
                                  placeholder='Enter year'
                                  labelPlacement={'outside'}
                                  value={OLA2Y7} 
                                  onChange={(e) => setOLA2Y7(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Subject"
                                  placeholder='Subject'
                                  labelPlacement={'outside'}
                                  value={OLS7A2} 
                                  onChange={(e) => setOLS7A2(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Garde"
                                  placeholder='Enter Garde'
                                  labelPlacement={'outside'}
                                  value={OLS7A2G} 
                                  onChange={(e) => setOLS7A2G(e.target.value)}
                                />
                              </div>
                              <div className='flex gap-2'>
                                <Input
                                  key={'outside'}
                                  type="number"
                                  label="Year"
                                  placeholder='Enter year'
                                  labelPlacement={'outside'}
                                  value={OLA2Y8} 
                                  onChange={(e) => setOLA2Y8(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Subject"
                                  placeholder='Subject'
                                  labelPlacement={'outside'}
                                  value={OLS8A2} 
                                  onChange={(e) => setOLS8A2(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Garde"
                                  placeholder='Enter Garde'
                                  labelPlacement={'outside'}
                                  value={OLS8A2G} 
                                  onChange={(e) => setOLS8A2G(e.target.value)}
                                />
                              </div>
                              <div className='flex gap-2'>
                                <Input
                                  key={'outside'}
                                  type="number"
                                  label="Year"
                                  placeholder='Enter year'
                                  labelPlacement={'outside'}
                                  value={OLA2Y9} 
                                  onChange={(e) => setOLA2Y9(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Subject"
                                  placeholder='Subject'
                                  labelPlacement={'outside'}
                                  value={OLS9A2} 
                                  onChange={(e) => setOLS9A2(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Garde"
                                  placeholder='Enter Garde'
                                  labelPlacement={'outside'}
                                  value={OLS9A2G} 
                                  onChange={(e) => setOLS9A2G(e.target.value)}
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
                                  value={ALA1Y} 
                                  onChange={(e) => setALA1Y(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Subject"
                                  placeholder='Subject'
                                  labelPlacement={'outside'}
                                  value={ALS1A1} 
                                  onChange={(e) => setALS1A1(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Garde"
                                  placeholder='Enter Garde'
                                  labelPlacement={'outside'}
                                  value={ALS1A1G} 
                                  onChange={(e) => setALS1A1G(e.target.value)}
                                />
                              </div>
                              <div className='flex gap-2'>
                                <Input
                                  key={'outside'}
                                  type="number"
                                  label="Year"
                                  placeholder='Enter year'
                                  labelPlacement={'outside'}
                                  value={ALA1Y} 
                                  onChange={(e) => setALA1Y(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Subject"
                                  placeholder='Subject'
                                  labelPlacement={'outside'}
                                  value={ALS2A1} 
                                  onChange={(e) => setALS2A1(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Garde"
                                  placeholder='Enter Garde'
                                  labelPlacement={'outside'}
                                  value={ALS2A1G} 
                                  onChange={(e) => setALS2A1G(e.target.value)}
                                />
                              </div>
                              <div className='flex gap-2'>
                                <Input
                                  key={'outside'}
                                  type="number"
                                  label="Year"
                                  placeholder='Enter year'
                                  labelPlacement={'outside'}
                                  value={ALA1Y} 
                                  onChange={(e) => setALA1Y(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Subject"
                                  placeholder='Subject'
                                  labelPlacement={'outside'}
                                  value={ALS3A1} 
                                  onChange={(e) => setALS3A1(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Garde"
                                  placeholder='Enter Garde'
                                  labelPlacement={'outside'}
                                  value={ALS3A1G} 
                                  onChange={(e) => setALS3A1G(e.target.value)}
                                />
                              </div>
                              <div className='flex gap-2'>
                                <Input
                                  key={'outside'}
                                  type="number"
                                  label="Year"
                                  placeholder='Enter year'
                                  labelPlacement={'outside'}
                                  value={ALA1Y} 
                                  onChange={(e) => setALA1Y(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Subject"
                                  placeholder='Subject'
                                  labelPlacement={'outside'}
                                  value={ALS4A1} 
                                  onChange={(e) => setALS4A1(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Garde" 
                                  placeholder='Enter Garde'
                                  labelPlacement={'outside'}
                                  value={ALS4A1G} 
                                  onChange={(e) => setALS4A1G(e.target.value)}
                                />
                              </div>
                              {/* <div className='flex gap-2'>
                                <Input
                                  key={'outside'}
                                  type="number"
                                  label="Year"
                                  placeholder='Enter year'
                                  labelPlacement={'outside'}
                                  value={ALA1Y} 
                                  onChange={(e) => setALA1Y(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Subject"
                                  placeholder='Subject'
                                  labelPlacement={'outside'}
                                  value={ALS5A1} 
                                  onChange={(e) => setALS5A1(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Garde"
                                  placeholder='Enter Garde'
                                  labelPlacement={'outside'}
                                  value={ALS5A1G} 
                                  onChange={(e) => setALS5A1G(e.target.value)}
                                />
                              </div> */}
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
                                  value={ALA2Y} 
                                  onChange={(e) => setALA2Y(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Subject"
                                  placeholder='Subject'
                                  labelPlacement={'outside'}
                                  value={ALS1A2} 
                                  onChange={(e) => setALS1A2(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Garde"
                                  placeholder='Enter Garde'
                                  labelPlacement={'outside'}
                                  value={ALS1A2G} 
                                  onChange={(e) => setALS1A2G(e.target.value)}
                                />
                              </div>
                              <div className='flex gap-2'>
                                <Input
                                  key={'outside'}
                                  type="number"
                                  label="Year"
                                  placeholder='Enter year'
                                  labelPlacement={'outside'}
                                  value={ALA2Y} 
                                  onChange={(e) => setALA2Y(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Subject"
                                  placeholder='Subject'
                                  labelPlacement={'outside'}
                                  value={ALS2A2} 
                                  onChange={(e) => setALS2A2(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Garde"
                                  placeholder='Enter Garde'
                                  labelPlacement={'outside'}
                                  value={ALS2A2G} 
                                  onChange={(e) => setALS2A2G(e.target.value)}
                                />
                              </div>
                              <div className='flex gap-2'>
                                <Input
                                  key={'outside'}
                                  type="number"
                                  label="Year"
                                  placeholder='Enter year'
                                  labelPlacement={'outside'}
                                  value={ALA2Y} 
                                  onChange={(e) => setALA2Y(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Subject"
                                  placeholder='Subject'
                                  labelPlacement={'outside'}
                                  value={ALS3A2} 
                                  onChange={(e) => setALS3A2(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Garde"
                                  placeholder='Enter Garde'
                                  labelPlacement={'outside'}
                                  value={ALS3A2G} 
                                  onChange={(e) => setALS3A2G(e.target.value)}
                                />
                              </div>
                              <div className='flex gap-2'>
                                <Input
                                  key={'outside'}
                                  type="number"
                                  label="Year"
                                  placeholder='Enter year'
                                  labelPlacement={'outside'}
                                  value={ALA2Y} 
                                  onChange={(e) => setALA2Y(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Subject"
                                  placeholder='Subject'
                                  labelPlacement={'outside'}
                                  value={ALS4A2} 
                                  onChange={(e) => setALS4A2(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Garde"
                                  placeholder='Enter Garde'
                                  labelPlacement={'outside'}
                                  value={ALS4A2G} 
                                  onChange={(e) => setALS4A2G(e.target.value)}
                                />
                              </div>
                              {/* <div className='flex gap-2'>
                                <Input
                                  key={'outside'}
                                  type="number"
                                  label="Year"
                                  placeholder='Enter year'
                                  labelPlacement={'outside'}
                                  value={ALA2Y} 
                                  onChange={(e) => setALA2Y(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Subject"
                                  placeholder='Subject'
                                  labelPlacement={'outside'}
                                  value={ALS5A2} 
                                  onChange={(e) => setALS5A2(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Garde"
                                  placeholder='Enter Garde'
                                  labelPlacement={'outside'}
                                  value={ALS5A2G} 
                                  onChange={(e) => setALS5A2G(e.target.value)}
                                />
                              </div> */}
                            </div>
                          </div>
                        </div>
                      
                      </div>
                    </AccordionItem>
                    <AccordionItem key="5" aria-label="Accordion 5" title={
                      <p className='text-[#DA0C0C] uppercase text-sm font-bold'>
                        Qualification (genaral)
                      </p>
                    }>
                      <div className='grid grid-cols-1 gap-4'>
                       

                        <div className='grid grid-cols-1 gap-4'>
                  
                          
                          <div className='flex flex-col md:flex-row gap-8'>
                            <div className='flex flex-col gap-4'>
                              <p className='text-sm font-medium'>Higher Education Qualifications:</p>
                              <div className='flex gap-2'>
                                <Input
                                  key={'outside'}
                                  type="number"
                                  label="Year"
                                  placeholder='Enter year'
                                  labelPlacement={'outside'}
                                  value={HEQ1Y} 
                                  onChange={(e) => setHEQ1Y(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Subject"
                                  placeholder='Subject'
                                  labelPlacement={'outside'}
                                  value={HEQ1} 
                                  onChange={(e) => setHEQ1(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Garde"
                                  placeholder='Enter Garde'
                                  labelPlacement={'outside'}
                                  value={HEQ1G} 
                                  onChange={(e) => setHEQ1G(e.target.value)}
                                />
                              </div>
                              <div className='flex gap-2'>
                                <Input
                                  key={'outside'}
                                  type="number"
                                  label="Year"
                                  placeholder='Enter year'
                                  labelPlacement={'outside'}
                                  value={HEQ2Y} 
                                  onChange={(e) => setHEQ2Y(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Subject"
                                  placeholder='Subject'
                                  labelPlacement={'outside'}
                                  value={HEQ2} 
                                  onChange={(e) => setHEQ2(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Garde"
                                  placeholder='Enter Garde'
                                  labelPlacement={'outside'}
                                  value={HEQ2G} 
                                  onChange={(e) => setHEQ2G(e.target.value)}
                                />
                              </div>
                              <div className='flex gap-2'>
                                <Input
                                  key={'outside'}
                                  type="number"
                                  label="Year"
                                  placeholder='Enter year'
                                  labelPlacement={'outside'}
                                  value={HEQ3Y} 
                                  onChange={(e) => setHEQ3Y(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Subject"
                                  placeholder='Subject'
                                  labelPlacement={'outside'}
                                  value={HEQ3} 
                                  onChange={(e) => setHEQ3(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Garde"
                                  placeholder='Enter Garde'
                                  labelPlacement={'outside'}
                                  value={HEQ3G} 
                                  onChange={(e) => setHEQ3G(e.target.value)}
                                />
                              </div>
                              <div className='flex gap-2'>
                                <Input
                                  key={'outside'}
                                  type="number"
                                  label="Year"
                                  placeholder='Enter year'
                                  labelPlacement={'outside'}
                                  value={HEQ4Y} 
                                  onChange={(e) => setHEQ4Y(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Subject"
                                  placeholder='Subject'
                                  labelPlacement={'outside'}
                                  value={HEQ4} 
                                  onChange={(e) => setHEQ4(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Garde" 
                                  placeholder='Enter Garde'
                                  labelPlacement={'outside'}
                                  value={HEQ4G} 
                                  onChange={(e) => setHEQ4G(e.target.value)}
                                />
                              </div>
                              <div className='flex gap-2'>
                                <Input
                                  key={'outside'}
                                  type="number"
                                  label="Year"
                                  placeholder='Enter year'
                                  labelPlacement={'outside'}
                                  value={HEQ5Y} 
                                  onChange={(e) => setHEQ5Y(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Subject"
                                  placeholder='Subject'
                                  labelPlacement={'outside'}
                                  value={HEQ5} 
                                  onChange={(e) => setHEQ5(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Garde" 
                                  placeholder='Enter Garde'
                                  labelPlacement={'outside'}
                                  value={HEQ5G} 
                                  onChange={(e) => setHEQ5G(e.target.value)}
                                />
                              </div>
                              {/* <div className='flex gap-2'>
                                <Input
                                  key={'outside'}
                                  type="number"
                                  label="Year"
                                  placeholder='Enter year'
                                  labelPlacement={'outside'}
                                  value={ALA1Y} 
                                  onChange={(e) => setALA1Y(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Subject"
                                  placeholder='Subject'
                                  labelPlacement={'outside'}
                                  value={ALS5A1} 
                                  onChange={(e) => setALS5A1(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Garde"
                                  placeholder='Enter Garde'
                                  labelPlacement={'outside'}
                                  value={ALS5A1G} 
                                  onChange={(e) => setALS5A1G(e.target.value)}
                                />
                              </div> */}
                            </div>
                          </div>
                        </div>

                        <div className='grid grid-cols-1 gap-4'>
                  
                      </div>
                  <div className='flex flex-col md:flex-row gap-8'>
                    <div className='flex flex-col gap-4'>
                      <p className='text-sm font-medium'>English Language Proficiency</p>
                      <div className='flex gap-2'>
                  
                          <Checkbox isSelected={OLE} onValueChange={setOLE} >Ordinary Level</Checkbox>
                          <Checkbox isSelected={AL} onValueChange={setAL} >Advanced Level</Checkbox>
                          <Checkbox isSelected={IELTS} onValueChange={setIELTS} >IELTS or PTE</Checkbox>
                      {/* <div className='flex gap-2'>
                        <Input
                          key={'outside'}
                          type="number"
                          label="Year"
                          placeholder='Enter year'
                          labelPlacement={'outside'}
                          value={ALA1Y} 
                          onChange={(e) => setALA1Y(e.target.value)}
                        />
                        <Input
                          key={'outside'}
                          type="text"
                          label="Subject"
                          placeholder='Subject'
                          labelPlacement={'outside'}
                          value={ALS5A1} 
                          onChange={(e) => setALS5A1(e.target.value)}
                        />
                        <Input
                          key={'outside'}
                          type="text"
                          label="Garde"
                          placeholder='Enter Garde'
                          labelPlacement={'outside'}
                          value={ALS5A1G} 
                          onChange={(e) => setALS5A1G(e.target.value)}
                        />
                      </div> */}
                    </div>
                  </div>
                </div>
                      
                      </div>
                    </AccordionItem>

                    <AccordionItem key="6" aria-label="Accordion 5" title={
                      <p className='text-[#DA0C0C] uppercase text-sm font-bold'>
                        Work Experience
                      </p>
                    }>
                      <div className='grid grid-cols-1 gap-4'>
              

                        <div className='grid grid-cols-1 gap-4'>
                  
                          
                          <div className='flex flex-col md:flex-row gap-8'>
                            <div className='flex flex-col gap-4'>
                              <div className='flex gap-2'>
                                <Input
                                  key={'outside'}
                                  type="number"
                                  label="from"
                                  placeholder='Enter year'
                                  labelPlacement={'outside'}
                                  value={year1} 
                                  onChange={(e) => setYear1(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Company"
                                  placeholder='Company'
                                  labelPlacement={'outside'}
                                  value={company1} 
                                  onChange={(e) => setCompany1(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Position"
                                  placeholder='Enter Position'
                                  labelPlacement={'outside'}
                                  value={position1} 
                                  onChange={(e) => setPosition1(e.target.value)}
                                />
                              </div>
                              <div className='flex gap-2'>
                                <Input
                                  key={'outside'}
                                  type="number"
                                  label="from"
                                  placeholder='Enter year'
                                  labelPlacement={'outside'}
                                  value={year2} 
                                  onChange={(e) => setYear2(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Company"
                                  placeholder='Company'
                                  labelPlacement={'outside'}
                                  value={company2} 
                                  onChange={(e) => setCompany2(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Position"
                                  placeholder='Enter Position'
                                  labelPlacement={'outside'}
                                  value={position2} 
                                  onChange={(e) => setPosition2(e.target.value)}
                                />
                              </div>
                              <div className='flex gap-2'>
                                <Input
                                  key={'outside'}
                                  type="number"
                                  label="from"
                                  placeholder='Enter year'
                                  labelPlacement={'outside'}
                                  value={year3} 
                                  onChange={(e) => setYear3(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Company"
                                  placeholder='Company'
                                  labelPlacement={'outside'}
                                  value={company3} 
                                  onChange={(e) => setCompany3(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Position"
                                  placeholder='Enter Position'
                                  labelPlacement={'outside'}
                                  value={position3} 
                                  onChange={(e) => setPosition3(e.target.value)}
                                />
                              </div>
                      
                              {/* <div className='flex gap-2'>
                                <Input
                                  key={'outside'}
                                  type="number"
                                  label="Year"
                                  placeholder='Enter year'
                                  labelPlacement={'outside'}
                                  value={ALA1Y} 
                                  onChange={(e) => setALA1Y(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Subject"
                                  placeholder='Subject'
                                  labelPlacement={'outside'}
                                  value={ALS5A1} 
                                  onChange={(e) => setALS5A1(e.target.value)}
                                />
                                <Input
                                  key={'outside'}
                                  type="text"
                                  label="Garde"
                                  placeholder='Enter Garde'
                                  labelPlacement={'outside'}
                                  value={ALS5A1G} 
                                  onChange={(e) => setALS5A1G(e.target.value)}
                                />
                              </div> */}
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
            <section className='md:col-span-1 w-full flex flex-col gap-4'>
              <Button onClick={sendMail} color='' radius='none' className="w-full hidden lg:flex bg-[#DA0C0C] text-white font-medium ">
                <p>Submit</p>
                <RiSecurePaymentFill  />
              </Button>
              <div className='flex flex-col gap-8'>
                <div className=' flex '>
                    <p className='text-xs'>After the submission, please email the documents to <span className='text-red-500'>enquiries@iebc.lk</span>. If you do not submit these documents, the application will be considered as not submitted.</p>
                </div>
                <div className="flex flex-col gap-4">
                  <Checkbox size='sm'>
                  Passport size colour photos (Maximum File Size 2MB)
                  </Checkbox>
                  <Checkbox size='sm'>
                  Proof of your qualiﬁcations(Maximum File Size 2MB)
                  </Checkbox>

                  <Checkbox size='sm'>
                  Copy of your Birth Certiﬁcate(Maximum File Size 2MB) 
                  </Checkbox>
                  <Checkbox size='sm'>
                  
Copy of your National Identity Card(Maximum File Size 2MB) 
                  </Checkbox>
                  <Checkbox size='sm'>
                  
                  Any other relevant documents (Make ZIP file of all Documnets and Submit Maximum File Size 5MB)                   </Checkbox>
                  {/* <Checkbox isSelected={isPSP} onValueChange={setIsPSP}  className='text-sm' size='sm' >Passport size colour photos (Maximum File Size 2MB)</Checkbox>
                  <Checkbox isSelected={isPOQ} onValueChange={setIsPOQ} className='text-sm' size='sm' >Proof of your qualiﬁcations(Maximum File Size 2MB)</Checkbox>
                  <Checkbox isSelected={isBC} onValueChange={setIsBC} className='text-sm' size='sm' >Copy of your Birth Certiﬁcate(Maximum File Size 2MB) </Checkbox>
                  <Checkbox isSelected={isNIC} onValueChange={setIsNIC} className='text-sm' size='sm' >Copy of your National Identity Card(Maximum File Size 2MB)  </Checkbox>
                  <Checkbox isSelected={isAR} onValueChange={setIsAR} className='text-sm' size='sm' >Any other relevant documents (Make ZIP file of all Documnets and Submit Maximum File Size 5MB) </Checkbox> */}
                </div> 
              </div>
            </section>
          </div>
      </section>
      
      
    </div>
  )
}

export default ApplicationScreen