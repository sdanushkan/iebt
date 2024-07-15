import React, { useEffect, useState } from 'react'
import {Input, Popover, PopoverContent, PopoverTrigger, Skeleton} from "@nextui-org/react";
import { VscSymbolKeyword } from "react-icons/vsc";
import {Button} from "@nextui-org/button";
import thum from '../assets/thum.png'
import { IoCalendar, IoDocument, IoDocuments, IoSearch } from "react-icons/io5";
import { AiFillSignal } from "react-icons/ai";
import { BsBookmarksFill } from "react-icons/bs";
import { FaAward } from "react-icons/fa";
import {Select, SelectItem} from "@nextui-org/react";
import { MdOutlineAdsClick } from "react-icons/md";
import { MdOutlineVerified } from "react-icons/md";
import { FaIdCard } from "react-icons/fa";
import { MdLibraryBooks } from "react-icons/md";
import { MdOutlineAccessTime } from "react-icons/md";
import { MdOutlineBookmarkBorder } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoArrowForwardOutline } from "react-icons/io5";
import {RadioGroup, Radio, useRadio, VisuallyHidden, cn} from "@nextui-org/react";
import { getEuCountryList, getMainCountryList, getMedicineCountryList, getTestimonialList } from '../actions/abroadActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import WorldMap from '../components/WorldMap';
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { FaCalendarAlt } from "react-icons/fa";
import { IoMdArrowRoundForward } from "react-icons/io";
import {Accordion, AccordionItem} from "@nextui-org/react";
import { GrFormNextLink } from "react-icons/gr";
import {today, isWeekend, getLocalTimeZone} from "@internationalized/date";
import {useLocale} from "@react-aria/i18n";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { setHours, setMinutes, getDay } from 'date-fns';
import WebView from '@luxbit/react-electron-webview'
import YouTube from 'react-youtube';
import  apply  from '../assets/apply.png'
import  verification  from '../assets/verification.png'
import  sp  from '../assets/sp.png'
import  es  from '../assets/es.png'
import parse from 'html-react-parser';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay, FreeMode } from 'swiper/modules';
import ReactPlayer from 'react-player'
import CountUp from 'react-countup';

import sdv from '../assets/sdv.mp4'
import { sendBA, sendBAMail, sendSA, sendSAMail } from '../actions/courseActions';

const CountriesScreen = () => {
  const [value, setValue] = useState(new Date());
    const [events, setEvents] = useState([
      { date: new Date(2024, 6, 7), event: 'anniversary' },
      { date: new Date(2024, 7, 13), event: 'anniversary' },
    ]);

    const onChange = (nextValue) => {
      setValue(nextValue);
    };

    const tileContent = ({ date, view }) => {
      const event = events.find(e => e.date.toDateString() === date.toDateString());
      return event && view === 'month' ? <p>{event.event}</p> : null;
    };

  // const WebView = require('@luxbit/react-electron-webview');

  const [selected, setSelected] = React.useState("london");
  const [email, setemail] = useState('')
  const [name, setname] = useState('')
  const [mNumber, setmNumber] = useState('')
  const [YOS, setYOS] = useState('')
  const [destination, setdestination] = useState('')
  const [ndestination, setndestination] = useState('')
  const [nYOS, setnYOS] = useState('')
  const [PS, setPS] = useState('')
  const [nPS, setnPS] = useState('')
  const [SI, setSI] = useState('')
  const [nSI, setnSI] = useState('')

  const [date, setDate] = useState('')
  
  useEffect(() => {
    setnYOS(YOS.anchorKey)

  }, [YOS])

  useEffect(() => {
    setnSI(SI.anchorKey)
  }, [SI])
  useEffect(() => {
    
    setnPS(PS.anchorKey)
  }, [PS])


  useEffect(() => {
    
    setndestination(destination.anchorKey)
  }, [destination])
  


  const dispatch = useDispatch() 
  const history = useNavigate()
  const location = useLocation()

  const mainCountryList = useSelector(state => state.mainCountryList)
  const { error:mainCountryListError, loading:mainCountryListLoaoding, countries:mainCountries } = mainCountryList

  const euCountryList = useSelector(state => state.euCountryList)
  const { error:euCountryListError, loading:euCountryListLoaoding, countries:euCountries } = euCountryList

  const medicineCountryList = useSelector(state => state.medicineCountryList)
  const { error:medicineCountryListError, loading:medicineCountryListLoaoding, countries:medicineCountries } = medicineCountryList

  const testimonialList = useSelector(state => state.testimonialList)
  const { error: testimonialListError, loading: testimonialListLoading, testimonials } = testimonialList

  const sendBA = useSelector(state => state.sendBA)
  const { error: sendBAError, loading: sendBALoading, success:BASuccess } = sendBA

  const sendSA = useSelector(state => state.sendSA)
  const { error: sendSAError, loading: sendSALoading, success:SASuccess } = sendSA

  useEffect(() => {
    if (!mainCountries){
      dispatch(getMainCountryList())
    }

    if (!euCountries){
      dispatch(getEuCountryList())
    }

    if (!medicineCountries){
      dispatch(getMedicineCountryList())
    }

  }, [dispatch, mainCountries, euCountries, medicineCountries])

  useEffect(() => {
    dispatch(getTestimonialList('abroad'))
  }, [])


  const [startDate, setStartDate] = useState(null);

  const filterTime = (time) => {
    const selectedTime = new Date(time);
    const hours = selectedTime.getHours();
    const day = startDate ? getDay(startDate) : null;

    // Allow times between 9 AM and 5 PM on weekdays
    if (hours < 9 || hours > 15) {
      return false;
    }

    // Allow times between 9 AM and 2 PM on Saturdays
    if (day === 6 && hours >= 13) {
      return false;
    }

    return true;
  };

  const filterDate = (date) => {
    const day = getDay(date);
    return day !== 0; // Disable all Sundays
  };

  const sendMail = () =>{
      if((mNumber!='')&& (nPS!='')&& (email!='')&& (nYOS!='')&& (nSI!='')){
        dispatch(sendSAMail({ 
            "mNumber": mNumber,
            "email": email,
            "YOS": nYOS,
            "PS": nPS,
            "SI": nSI,
        }))
        setmNumber('')
        setemail('')
        setYOS('')
        setSI('')
        setPS('')
    }
  }

  const sendMailBA = () =>{
    if((mNumber!='')&& (name!='')&& (email!='')&& (nYOS!='')&&(startDate!='')&& (ndestination!='')&& (nSI!='')){
      dispatch(sendBAMail({ 
        "mNumber": mNumber,
        "name": name,
        "email": email,
        "YOS": nYOS,
        "date": startDate, 
        "destination": ndestination,
        "SI": nSI,
    }))
    setmNumber('')
    setemail('')
    setYOS('')
    setDate('')
    setdestination('')
    setSI('')
    setname('')
    }
  }
 
  return ( 
    <div className='max-w-screen flex flex-col gap-12 pb-12 overflow-x-hidden'>
      {/* <section className='w-full h-fit relative bg-[#ffecef] max-w-screen overflow-hidden'>

        <div className='h-fit md:h-[500px] w-full max-w-[1100px] mx-auto object-cover relative overflow-hidden bg-[#ffecef] py-6 md:py-0 grid grid-cols-1 md:grid-cols-2'>
          <div className='h-[350px] md:h-full w-full flex flex-col justify-center gap-4 px-6 md:px-0'>
            <p className='text-4xl font-black'>Get your free study abroad counselling with IEBC</p>
            <Button className='w-fit font-medium bg-[#DA0C0C] text-white'>
              Acquire your dreams
            </Button>
          </div>
          <div className='h-fit md:h-full w-full md:py-16'>
            <WorldMap className="w-full h-full"/>
          </div>
        </div>

      </section> */}
        <section className='h-fit w-full relative overflow-hidden'>

          <div className='h-[400px] lg:h-[500px] w-full object-cover object-bottom relative md:absolute -z-50'>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              modules={[ Autoplay]}
              className="w-full"
              autoplay
            >
              <SwiperSlide className='w-full h-full object-contain'>
                <img src='https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' className='h-[600px] xl:h-[500px] w-full object-cover object-bottom'/>
              </SwiperSlide>
              <SwiperSlide className='w-full h-full object-contain'>
                <img src='https://media.istockphoto.com/id/1307457391/photo/happy-black-student-raising-arm-to-answer-question-while-attending-class-with-her-university.jpg?s=612x612&w=0&k=20&c=iZaZFyC-WqlqSQc4elqUNPTxLvWPe8P5Tb_YdZnrI9Q=' alt='' className='h-[600px] xl:h-[500px] w-full object-cover object-center'/>
              </SwiperSlide>
              {/* <SwiperSlide className='w-full h-full object-contain'>
                <img src='https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' className='h-[500px] w-full object-cover object-bottom'/>
              </SwiperSlide> */}
            </Swiper>
          </div>

          <div className='h-[400px] lg:h-[500px] w-max-[1024px] mx-auto relative z-30 flex items-start justify-end'>
              <div className='h-full lg:w-[30%]'>
              <div className='h-full w-full flex flex-col justify-center relative bg-black'>
                <img src='https://www.augusta.edu/studyabroad/images/study-abroad-banner.png' alt='' className='h-full w-full absolute object-cover opacity-75'/>

                <div className='h-full w-full flex flex-col justify-center px-8 md:border-l-[10px] border-white gap-4 relative md:mt-24'>
                  <p className='text-2xl font-bold'>Register</p>
                  
                  {
                    
                    SASuccess?
                    <p className='text-xs text-green-500 font-lg '>Message send succefully</p>:
                    <p className='text-xs text-red-500 font-lg '>All fields are required*</p>
                  }
                  <div className='grid grid-cols-1 gap-6'>
                    <Input isClearable  variant='flat' type='email' value={email} 
                            onChange={(e) => setemail(e.target.value)} placeholder='Email'></Input>
                    <Input isClearable  variant='flat' type='number' value={mNumber} 
                            onChange={(e) => setmNumber(e.target.value)} placeholder='Mobile number' startContent={
                      <div className="pointer-events-none flex items-center">
                        <span className="text-default-400 text-small">+94</span>
                      </div>
                    }></Input>
                  </div>
                  <div className='h-fit w-full relative '>
                    <div className='absolute top-1/2  transform right-2 -translate-y-1/2'>
                      <IoCalendar/>
                    </div>
                    <Select 
                      className="w-full" 
                      // selectedKeys={pLocation}
                      // onSelectionChange={setPLocation}
                      variant=''
                      placeholder='Year of Study'
                      required
                      size='md'
                      selectedKeys={YOS}
                      onSelectionChange={setYOS}

                  >
                      <SelectItem key='2025' className=''>
                          2025
                      </SelectItem>
                      <SelectItem key='2027' className=''>
                          2027
                      </SelectItem>
                      <SelectItem key='2028' className=''>
                          2028
                      </SelectItem>
                  </Select>
                  </div>
                  <div className='grid grid-cols-2 gap-6'>
                    <Select 
                        className="w-full" 
                        // selectedKeys={pLocation}
                        // onSelectionChange={setPLocation}
                        variant=''
                        placeholder='Preferred Study Destination'
                        required
                        size='md'
                        selectedKeys={PS}
                        onSelectionChange={setPS}
                    >
                        {
                          mainCountryListLoaoding?
                          "":
                          mainCountries?
                          mainCountries.map(i => (
                            <SelectItem key={i.slug} value={i.slug} className=''>
                                {i.name}
                            </SelectItem>
                          )):''
                        }
                        {
                          euCountryListLoaoding?
                          "":
                          euCountries?
                          euCountries.map(i => (
                            <SelectItem key={i.slug} value={i.slug} className=''>
                                {i.name}
                            </SelectItem>
                          )):''
                        }

{
                          medicineCountryListLoaoding?
                          "":
                          medicineCountries?
                          medicineCountries.map(i => (
                            <SelectItem key={i.slug} value={i.slug} className=''>
                                {i.name}
                            </SelectItem>
                          )):''
                        }
                    </Select>
                    <Select 
                        className="w-full" 
                        // selectedKeys={pLocation}
                        // onSelectionChange={setPLocation}
                        variant=''
                        placeholder='Study Intake'
                        required
                        size='md'
                        selectedKeys={SI}
                        onSelectionChange={setSI}

                    >
                        <SelectItem key='January – March' className=''>
                            January – March
                        </SelectItem>
                        <SelectItem key='July – September' className=''>
                            July – September
                        </SelectItem>
                        <SelectItem key='October – December' className=''>
                            October – December
                        </SelectItem>
                        <SelectItem key='I’m Not Sure' className=''>
                            I’m Not Sure
                        </SelectItem>
                    </Select>
                  </div>
                  <Button variant='solid' color='danger' onClick={sendMail} endContent={
                      <GrFormNextLink />
                  } className='w-fit font-medium bg-[#DA0C0C] text-white mt-4'>
                    Register now
                  </Button>
                </div> 
              </div> 
              </div>
          </div>

          <div className='h-[600px] xl:h-[500px] w-max-[1024px] mx-auto px-8 absolute -z-30 top-0 flex items-start justify-center '>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              direction={'vertical'}
              
              modules={[ Autoplay]}
              className='h-full w-full mt-[100px] flex flex-col justify-center gap-6'
              autoplay
            >
              <SwiperSlide className='w-full h-full flex justify-start object-contain'>
                <div className='h-[400px] xl:h-[300px] w-full md:w-fit px-6 flex flex-col justify-center gap-6'>
                  <div className='h-fit w-full md:w-fit backdrop-blur-md flex flex-col gap-4 p-6 rounded-[16px]'>
                    <div className='flex flex-col gap-2 max-w-[500px] mx-auto'>
                      <p className='text-2xl md:text-4xl font-bold text-white'>International Education and Business Campus</p>
                      <p className='text-white/75 text-xs'>Unleashing Brilliance, Building Community</p>
                    </div>
                    <Button color='' className="flex bg-[#DA0C0C] text-xs lg:text-sm text-white px-4 md:px-5 py-2 md:py-3 rounded-full w-fit">
                      <p>Pay online</p>
                    </Button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='w-full h-full flex justify-start object-contain'>
                <div className='h-[400px] xl:h-[300px] w-full md:w-fit px-6 flex flex-col justify-center gap-6'>
                  <div className='h-fit w-full md:w-fit backdrop-blur-md flex flex-col gap-4 p-6 rounded-[16px]'>
                    <div className='flex flex-col gap-2 max-w-[500px] mx-auto'>
                      <p className='text-2xl md:text-4xl font-bold text-white'>International Education and Business Campus</p>
                      <p className='text-white/75 text-xs'>Unleashing Brilliance, Building Community</p>
                    </div>
                    <Button color='' className="flex bg-[#DA0C0C] text-xs lg:text-sm text-white px-4 md:px-5 py-2 md:py-3 rounded-full w-fit">
                      <p>Pay online</p>
                    </Button>
                  </div>
                </div>
              </SwiperSlide>
              {/* <SwiperSlide className='w-full h-full object-contain'>
                <img src='https://media.istockphoto.com/id/1307457391/photo/happy-black-student-raising-arm-to-answer-question-while-attending-class-with-her-university.jpg?s=612x612&w=0&k=20&c=iZaZFyC-WqlqSQc4elqUNPTxLvWPe8P5Tb_YdZnrI9Q=' alt='' className='h-[600px] xl:h-[500px] w-full object-cover object-center'/>
              </SwiperSlide> */}
              {/* <SwiperSlide className='w-full h-full object-contain'>
                <img src='https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' className='h-[500px] w-full object-cover object-bottom'/>
              </SwiperSlide> */}
            </Swiper>
            
          </div>
        </section>
      
    
      {/* <section className='h-fit w-full relative px-8 bg-[#DA0C0C]'>
        <div className='h-fit w-full max-w-[1100px] mx-auto justify-center gap-6 grid grid-col-2 md:grid-cols-3 lg:grid-cols-4  text-white py-12 rounded-[16px]'>
          <div className='w-full flex flex-col items-center justify-center'>
            <p className='text-4xl font-bold'>100+</p>
            <p className='text-sm font-medium'>Satisfication</p>
          </div>
          <div className='w-full flex flex-col items-center justify-center'>
            <p className='text-4xl font-bold'>40+</p>
            <p className='text-sm font-medium'>Countries</p>
          </div>
          <div className='w-full flex flex-col items-center justify-center'>
            <p className='text-4xl font-bold'>300+</p>
            <p className='text-sm font-medium'>Universities</p>
          </div>
          <div className='w-full flex flex-col items-center justify-center'>
            <p className='text-4xl font-bold'>200+</p>
            <p className='text-sm font-medium'>Success Clients</p>
          </div>
        </div>
      </section> */}

      

      

      <section className='h-fit w-full relative overflow-hidden px-8 py-6'>
        <div className='h-fit md:h-40 w-full max-w-[1024px] mx-auto grid grid-cols-2 md:grid-cols-5 justify-center gap-2 lg:gap-6'>
          <Link to={'/abroad/about'} className='w-full h-36 flex flex-col items-center justify-center gap-2 md:gap-4 hover:bg-white text-black duration-300 cursor-pointer hover:text-[#DA0C0C] p-10 hover:p-8 rounded-[8px] bg-red-50 hover:shadow-[0px_4px_50px_rgba(0,0,0,0.075)]'>
              <img src={sp}  alt='' className='w-full h-full object-contain' />
              <p className='text-base font-bold text-red-900 px-2 text-center'>About us</p>
            </Link>
            <Link to={'/ourservices'} className='w-full h-36 flex flex-col items-center justify-center gap-2 md:gap-4 hover:bg-white text-black duration-300 cursor-pointer hover:text-[#DA0C0C] p-10 hover:p-8 rounded-[8px] bg-red-50 hover:shadow-[0px_4px_50px_rgba(0,0,0,0.075)]'>
              <img src={es}  alt='' className='w-full h-full object-contain' />
              <p className='text-base font-bold text-red-900 px-2 text-center'>Services</p>
            </Link>
            <Link to={'/application'} className='w-full h-36 flex flex-col items-center justify-center gap-2 md:gap-4 hover:bg-white text-black duration-300 cursor-pointer hover:text-[#DA0C0C] p-10 hover:p-8 rounded-[8px] bg-red-50 hover:shadow-[0px_4px_25px_rgba(0,0,0,0.075)] '>
              <img src={apply}  alt='' className='w-full h-full object-contain' />
              <p className='text-base font-bold text-red-900 px-2 text-center'>Apply</p>
            </Link>
            <div className='w-full h-36 flex flex-col items-center justify-center gap-2 md:gap-4 hover:bg-white text-black duration-300 cursor-pointer hover:text-[#DA0C0C] p-10 hover:p-8 rounded-[8px] bg-red-50 hover:shadow-[0px_4px_50px_rgba(0,0,0,0.075)]'>
              <img src={verification}  alt='' className='w-full h-full object-contain' />
              <p className='text-base font-bold text-red-900 px-2 text-center'>Book Appoinment</p>
            </div>

            <Popover placement="bottom" showArrow={true}>
            <PopoverTrigger>
              <div className='w-full h-36 flex flex-col items-center justify-center gap-2 md:gap-4 hover:bg-white text-black duration-300 cursor-pointer hover:text-[#DA0C0C] p-10 hover:p-8 rounded-[8px] bg-red-50 hover:shadow-[0px_4px_50px_rgba(0,0,0,0.075)]'>
              <img src={es}  alt='' className='w-full h-full object-contain' />
              <p className='text-base font-bold text-red-900 px-2 text-center'>Event</p>
            </div>
            </PopoverTrigger>
              <PopoverContent>
                <Calendar
                  onChange={onChange}
                  value={value}
                  tileContent={tileContent}
                />

              </PopoverContent>
            </Popover>
            
        </div>
    </section>

      <section className='h-fit w-full'>
          <div className='w-full h-fit max-w-[1100px] mx-auto bg-white relative z-10 md:gap-4 px-6'>
            <div className='flex flex-col pb-8'>
              <p className='uppercase text-xs font-semibold opacity-50 text-center'>Study Abroad</p>
              <p className='text-2xl md:text-4xl font-bold text-[#DA0C0C] text-center capitalize'>Our Countries</p>
            </div>
            {
              mainCountryListLoaoding?
              <div className='w-fit mx-auto flex flex-wrap items-center justify-center gap-2 md:gap-4 '>

                  <Link className='bg-white w-[40%] sm:w-[175px] h-[125px] border-1 border-gray-200 gap-8 flex flex-col rounded-[8px] relative overflow-hidden duration-500'>
                    <div className='h-full p-6 flex flex-row justify-between'>
                      <div className='flex flex-col relative z-30 gap-1 mt-auto'>
                        <Skeleton className='rounded-[8px]'>
                          <p className='text-xl font-bold text-white'>i.name</p>
                        </Skeleton>
                        <Skeleton className='rounded-[8px]'>
                          <p className='text-xs text-gray-100 opacity-75'>Learn more</p>
                        </Skeleton>
                      </div>
                      <div>
                        <IoMdArrowRoundForward className='text-xl text-white'/>
                      </div>
                    </div>
                    <Skeleton className='rounded-[8px]'>
                      <div className='h-full w-full bg-red-50 absolute rounded-full flex items-start justify-start z-0'>
                        
                        <img src='' alt='' className='h-full w-full object-cover absolute z-0' />
                        <div className='h-full w-full bg-gradient-to-t from-black/75 to-transparent absolute z-30 hover:from-black/100 duration-500'></div>
                      </div>
                    </Skeleton>
                  </Link>

                  <Link className='bg-white w-[40%] sm:w-[175px] h-[125px] border-1 border-gray-200 gap-8 flex flex-col rounded-[8px] relative overflow-hidden duration-500'>
                    <div className='h-full p-6 flex flex-row justify-between'>
                      <div className='flex flex-col relative z-30 gap-1 mt-auto'>
                        <Skeleton className='rounded-[8px]'>
                          <p className='text-xl font-bold text-white'>i.name</p>
                        </Skeleton>
                        <Skeleton className='rounded-[8px]'>
                          <p className='text-xs text-gray-100 opacity-75'>Learn more</p>
                        </Skeleton>
                      </div>
                      <div>
                        <IoMdArrowRoundForward className='text-xl text-white'/>
                      </div>
                    </div>
                    <Skeleton className='rounded-[8px]'>
                      <div className='h-full w-full bg-red-50 absolute rounded-full flex items-start justify-start z-0'>
                        
                        <img src='' alt='' className='h-full w-full object-cover absolute z-0' />
                        <div className='h-full w-full bg-gradient-to-t from-black/75 to-transparent absolute z-30 hover:from-black/100 duration-500'></div>
                      </div>
                    </Skeleton>
                  </Link>

                  <Link className='bg-white w-[40%] sm:w-[175px] h-[125px] border-1 border-gray-200 gap-8 flex flex-col rounded-[8px] relative overflow-hidden duration-500'>
                    <div className='h-full p-6 flex flex-row justify-between'>
                      <div className='flex flex-col relative z-30 gap-1 mt-auto'>
                        <Skeleton className='rounded-[8px]'>
                          <p className='text-xl font-bold text-white'>i.name</p>
                        </Skeleton>
                        <Skeleton className='rounded-[8px]'>
                          <p className='text-xs text-gray-100 opacity-75'>Learn more</p>
                        </Skeleton>
                      </div>
                      <div>
                        <IoMdArrowRoundForward className='text-xl text-white'/>
                      </div>
                    </div>
                    <Skeleton className='rounded-[8px]'>
                      <div className='h-full w-full bg-red-50 absolute rounded-full flex items-start justify-start z-0'>
                        
                        <img src='' alt='' className='h-full w-full object-cover absolute z-0' />
                        <div className='h-full w-full bg-gradient-to-t from-black/75 to-transparent absolute z-30 hover:from-black/100 duration-500'></div>
                      </div>
                    </Skeleton>
                  </Link>

                  <Link className='bg-white w-[40%] sm:w-[175px] h-[125px] border-1 border-gray-200 gap-8 flex flex-col rounded-[8px] relative overflow-hidden duration-500'>
                    <div className='h-full p-6 flex flex-row justify-between'>
                      <div className='flex flex-col relative z-30 gap-1 mt-auto'>
                        <Skeleton className='rounded-[8px]'>
                          <p className='text-xl font-bold text-white'>i.name</p>
                        </Skeleton>
                        <Skeleton className='rounded-[8px]'>
                          <p className='text-xs text-gray-100 opacity-75'>Learn more</p>
                        </Skeleton>
                      </div>
                      <div>
                        <IoMdArrowRoundForward className='text-xl text-white'/>
                      </div>
                    </div>
                    <Skeleton className='rounded-[8px]'>
                      <div className='h-full w-full bg-red-50 absolute rounded-full flex items-start justify-start z-0'>
                        
                        <img src='' alt='' className='h-full w-full object-cover absolute z-0' />
                        <div className='h-full w-full bg-gradient-to-t from-black/75 to-transparent absolute z-30 hover:from-black/100 duration-500'></div>
                      </div>
                    </Skeleton>
                  </Link>

                  <Link className='bg-white w-[40%] sm:w-[175px] h-[125px] border-1 border-gray-200 gap-8 flex flex-col rounded-[8px] relative overflow-hidden duration-500'>
                    <div className='h-full p-6 flex flex-row justify-between'>
                      <div className='flex flex-col relative z-30 gap-1 mt-auto'>
                        <Skeleton className='rounded-[8px]'>
                          <p className='text-xl font-bold text-white'>i.name</p>
                        </Skeleton>
                        <Skeleton className='rounded-[8px]'>
                          <p className='text-xs text-gray-100 opacity-75'>Learn more</p>
                        </Skeleton>
                      </div>
                      <div>
                        <IoMdArrowRoundForward className='text-xl text-white'/>
                      </div>
                    </div>
                    <Skeleton className='rounded-[8px]'>
                      <div className='h-full w-full bg-red-50 absolute rounded-full flex items-start justify-start z-0'>
                        
                        <img src='' alt='' className='h-full w-full object-cover absolute z-0' />
                        <div className='h-full w-full bg-gradient-to-t from-black/75 to-transparent absolute z-30 hover:from-black/100 duration-500'></div>
                      </div>
                    </Skeleton>
                  </Link>
                
              </div>
              :
              mainCountries?
              <div className='w-fit mx-auto flex flex-wrap items-center justify-center gap-2 md:gap-4 '>

                {
                  mainCountries.map(i => (
                    <Link key={i.slug} to={`/countries/${i.slug}`} className='bg-white w-[40%] sm:w-[175px] h-[125px] border-1 border-gray-200 gap-8 flex flex-col rounded-[8px] relative overflow-hidden duration-500'>
                      <div className='h-full p-6 flex flex-row justify-between'>
                        <div className='flex flex-col relative z-30 gap-1 mt-auto'>
                          <p className='text-xl font-bold text-white'>{i.name}</p>
                          <p className='text-xs text-gray-100 opacity-75'>Learn more</p>
                        </div>
                        <div>
                          <IoMdArrowRoundForward className='text-xl text-white'/>
                        </div>
                      </div>
                      <div className='h-full w-full bg-red-50 absolute rounded-full flex items-start justify-start z-0'>
                        
                        <img src={i.image} alt='' className='h-full w-full object-cover absolute z-0' />
                        <div className='h-full w-full bg-gradient-to-t from-black/75 to-transparent absolute z-30 hover:from-black/100 duration-500'></div>
                      </div>
                    </Link>
                  ))
                }

              </div>:
              ''
            }
          </div>
      </section>

      <section className='h-fit w-full'>
          <div className='w-full h-fit max-w-[1100px] mx-auto bg-white relative z-10 md:gap-4 px-6'>
            <div className='flex flex-col pb-8'>
              <p className='uppercase text-xs font-semibold opacity-50 text-center'>Study Abroad</p>
              <p className='text-2xl md:text-4xl font-bold text-[#DA0C0C] text-center capitalize'>european nation countries</p>
            </div>
            {
              euCountryListLoaoding?
              <div className='w-fit mx-auto flex flex-wrap items-center justify-center gap-2 md:gap-4 '>

                  <Link className='bg-white w-[40%] sm:w-[175px] h-[125px] border-1 border-gray-200 gap-8 flex flex-col rounded-[8px] relative overflow-hidden duration-500'>
                    <div className='h-full p-6 flex flex-row justify-between'>
                      <div className='flex flex-col relative z-30 gap-1 mt-auto'>
                        <Skeleton className='rounded-[8px]'>
                          <p className='text-xl font-bold text-white'>i.name</p>
                        </Skeleton>
                        <Skeleton className='rounded-[8px]'>
                          <p className='text-xs text-gray-100 opacity-75'>Learn more</p>
                        </Skeleton>
                      </div>
                      <div>
                        <IoMdArrowRoundForward className='text-xl text-white'/>
                      </div>
                    </div>
                    <Skeleton className='rounded-[8px]'>
                      <div className='h-full w-full bg-red-50 absolute rounded-full flex items-start justify-start z-0'>
                        
                        <img src='' alt='' className='h-full w-full object-cover absolute z-0' />
                        <div className='h-full w-full bg-gradient-to-t from-black/75 to-transparent absolute z-30 hover:from-black/100 duration-500'></div>
                      </div>
                    </Skeleton>
                  </Link>

                  <Link className='bg-white w-[40%] sm:w-[175px] h-[125px] border-1 border-gray-200 gap-8 flex flex-col rounded-[8px] relative overflow-hidden duration-500'>
                    <div className='h-full p-6 flex flex-row justify-between'>
                      <div className='flex flex-col relative z-30 gap-1 mt-auto'>
                        <Skeleton className='rounded-[8px]'>
                          <p className='text-xl font-bold text-white'>i.name</p>
                        </Skeleton>
                        <Skeleton className='rounded-[8px]'>
                          <p className='text-xs text-gray-100 opacity-75'>Learn more</p>
                        </Skeleton>
                      </div>
                      <div>
                        <IoMdArrowRoundForward className='text-xl text-white'/>
                      </div>
                    </div>
                    <Skeleton className='rounded-[8px]'>
                      <div className='h-full w-full bg-red-50 absolute rounded-full flex items-start justify-start z-0'>
                        
                        <img src='' alt='' className='h-full w-full object-cover absolute z-0' />
                        <div className='h-full w-full bg-gradient-to-t from-black/75 to-transparent absolute z-30 hover:from-black/100 duration-500'></div>
                      </div>
                    </Skeleton>
                  </Link>

                  <Link className='bg-white w-[40%] sm:w-[175px] h-[125px] border-1 border-gray-200 gap-8 flex flex-col rounded-[8px] relative overflow-hidden duration-500'>
                    <div className='h-full p-6 flex flex-row justify-between'>
                      <div className='flex flex-col relative z-30 gap-1 mt-auto'>
                        <Skeleton className='rounded-[8px]'>
                          <p className='text-xl font-bold text-white'>i.name</p>
                        </Skeleton>
                        <Skeleton className='rounded-[8px]'>
                          <p className='text-xs text-gray-100 opacity-75'>Learn more</p>
                        </Skeleton>
                      </div>
                      <div>
                        <IoMdArrowRoundForward className='text-xl text-white'/>
                      </div>
                    </div>
                    <Skeleton className='rounded-[8px]'>
                      <div className='h-full w-full bg-red-50 absolute rounded-full flex items-start justify-start z-0'>
                        
                        <img src='' alt='' className='h-full w-full object-cover absolute z-0' />
                        <div className='h-full w-full bg-gradient-to-t from-black/75 to-transparent absolute z-30 hover:from-black/100 duration-500'></div>
                      </div>
                    </Skeleton>
                  </Link>

                  <Link className='bg-white w-[40%] sm:w-[175px] h-[125px] border-1 border-gray-200 gap-8 flex flex-col rounded-[8px] relative overflow-hidden duration-500'>
                    <div className='h-full p-6 flex flex-row justify-between'>
                      <div className='flex flex-col relative z-30 gap-1 mt-auto'>
                        <Skeleton className='rounded-[8px]'>
                          <p className='text-xl font-bold text-white'>i.name</p>
                        </Skeleton>
                        <Skeleton className='rounded-[8px]'>
                          <p className='text-xs text-gray-100 opacity-75'>Learn more</p>
                        </Skeleton>
                      </div>
                      <div>
                        <IoMdArrowRoundForward className='text-xl text-white'/>
                      </div>
                    </div>
                    <Skeleton className='rounded-[8px]'>
                      <div className='h-full w-full bg-red-50 absolute rounded-full flex items-start justify-start z-0'>
                        
                        <img src='' alt='' className='h-full w-full object-cover absolute z-0' />
                        <div className='h-full w-full bg-gradient-to-t from-black/75 to-transparent absolute z-30 hover:from-black/100 duration-500'></div>
                      </div>
                    </Skeleton>
                  </Link>

                  <Link className='bg-white w-[40%] sm:w-[175px] h-[125px] border-1 border-gray-200 gap-8 flex flex-col rounded-[8px] relative overflow-hidden duration-500'>
                    <div className='h-full p-6 flex flex-row justify-between'>
                      <div className='flex flex-col relative z-30 gap-1 mt-auto'>
                        <Skeleton className='rounded-[8px]'>
                          <p className='text-xl font-bold text-white'>i.name</p>
                        </Skeleton>
                        <Skeleton className='rounded-[8px]'>
                          <p className='text-xs text-gray-100 opacity-75'>Learn more</p>
                        </Skeleton>
                      </div>
                      <div>
                        <IoMdArrowRoundForward className='text-xl text-white'/>
                      </div>
                    </div>
                    <Skeleton className='rounded-[8px]'>
                      <div className='h-full w-full bg-red-50 absolute rounded-full flex items-start justify-start z-0'>
                        
                        <img src='' alt='' className='h-full w-full object-cover absolute z-0' />
                        <div className='h-full w-full bg-gradient-to-t from-black/75 to-transparent absolute z-30 hover:from-black/100 duration-500'></div>
                      </div>
                    </Skeleton>
                  </Link>
                
              </div>
              :
              euCountries?
              <div className='w-fit mx-auto flex flex-wrap items-center justify-center gap-2 md:gap-4 '>

                {
                  euCountries.map(i => (
                    <Link key={i.slug} to={`/countries/${i.slug}`} className='bg-white w-[40%] sm:w-[175px] h-[125px] border-1 border-gray-200 gap-8 flex flex-col rounded-[8px] relative overflow-hidden duration-500'>
                      <div className='h-full p-6 flex flex-row justify-between'>
                        <div className='flex flex-col relative z-30 gap-1 mt-auto'>
                          <p className='text-xl font-bold text-white'>{i.name}</p>
                          <p className='text-xs text-gray-100 opacity-75'>Learn more</p>
                        </div>
                        <div>
                          <IoMdArrowRoundForward className='text-xl text-white'/>
                        </div>
                      </div>
                      <div className='h-full w-full bg-red-50 absolute rounded-full flex items-start justify-start z-0'>
                        
                        <img src={i.image} alt='' className='h-full w-full object-cover absolute z-0' />
                        <div className='h-full w-full bg-gradient-to-t from-black/75 to-transparent absolute z-30 hover:from-black/100 duration-500'></div>
                      </div>
                    </Link>
                  ))
                }

              </div>:
              ''
            }
          </div>
      </section>

      <section className='h-fit w-full'>
          <div className='w-full h-fit max-w-[1100px] mx-auto bg-white relative z-10 md:gap-4 px-6'>
            <div className='flex flex-col pb-8'>
              <p className='uppercase text-xs font-semibold opacity-50 text-center'>Study Abroad</p>
              <p className='text-2xl md:text-4xl font-bold text-[#DA0C0C] text-center capitalize'>medicine</p>
            </div>
            {
              medicineCountryListLoaoding?
              <div className='w-fit mx-auto flex flex-wrap items-center justify-center gap-2 md:gap-4 '>

                  <Link className='bg-white w-[40%] sm:w-[175px] h-[125px] border-1 border-gray-200 gap-8 flex flex-col rounded-[8px] relative overflow-hidden duration-500'>
                    <div className='h-full p-6 flex flex-row justify-between'>
                      <div className='flex flex-col relative z-30 gap-1 mt-auto'>
                        <Skeleton className='rounded-[8px]'>
                          <p className='text-xl font-bold text-white'>i.name</p>
                        </Skeleton>
                        <Skeleton className='rounded-[8px]'>
                          <p className='text-xs text-gray-100 opacity-75'>Learn more</p>
                        </Skeleton>
                      </div>
                      <div>
                        <IoMdArrowRoundForward className='text-xl text-white'/>
                      </div>
                    </div>
                    <Skeleton className='rounded-[8px]'>
                      <div className='h-full w-full bg-red-50 absolute rounded-full flex items-start justify-start z-0'>
                        
                        <img src='' alt='' className='h-full w-full object-cover absolute z-0' />
                        <div className='h-full w-full bg-gradient-to-t from-black/75 to-transparent absolute z-30 hover:from-black/100 duration-500'></div>
                      </div>
                    </Skeleton>
                  </Link>

                  <Link className='bg-white w-[40%] sm:w-[175px] h-[125px] border-1 border-gray-200 gap-8 flex flex-col rounded-[8px] relative overflow-hidden duration-500'>
                    <div className='h-full p-6 flex flex-row justify-between'>
                      <div className='flex flex-col relative z-30 gap-1 mt-auto'>
                        <Skeleton className='rounded-[8px]'>
                          <p className='text-xl font-bold text-white'>i.name</p>
                        </Skeleton>
                        <Skeleton className='rounded-[8px]'>
                          <p className='text-xs text-gray-100 opacity-75'>Learn more</p>
                        </Skeleton>
                      </div>
                      <div>
                        <IoMdArrowRoundForward className='text-xl text-white'/>
                      </div>
                    </div>
                    <Skeleton className='rounded-[8px]'>
                      <div className='h-full w-full bg-red-50 absolute rounded-full flex items-start justify-start z-0'>
                        
                        <img src='' alt='' className='h-full w-full object-cover absolute z-0' />
                        <div className='h-full w-full bg-gradient-to-t from-black/75 to-transparent absolute z-30 hover:from-black/100 duration-500'></div>
                      </div>
                    </Skeleton>
                  </Link>

                  <Link className='bg-white w-[40%] sm:w-[175px] h-[125px] border-1 border-gray-200 gap-8 flex flex-col rounded-[8px] relative overflow-hidden duration-500'>
                    <div className='h-full p-6 flex flex-row justify-between'>
                      <div className='flex flex-col relative z-30 gap-1 mt-auto'>
                        <Skeleton className='rounded-[8px]'>
                          <p className='text-xl font-bold text-white'>i.name</p>
                        </Skeleton>
                        <Skeleton className='rounded-[8px]'>
                          <p className='text-xs text-gray-100 opacity-75'>Learn more</p>
                        </Skeleton>
                      </div>
                      <div>
                        <IoMdArrowRoundForward className='text-xl text-white'/>
                      </div>
                    </div>
                    <Skeleton className='rounded-[8px]'>
                      <div className='h-full w-full bg-red-50 absolute rounded-full flex items-start justify-start z-0'>
                        
                        <img src='' alt='' className='h-full w-full object-cover absolute z-0' />
                        <div className='h-full w-full bg-gradient-to-t from-black/75 to-transparent absolute z-30 hover:from-black/100 duration-500'></div>
                      </div>
                    </Skeleton>
                  </Link>

                  <Link className='bg-white w-[40%] sm:w-[175px] h-[125px] border-1 border-gray-200 gap-8 flex flex-col rounded-[8px] relative overflow-hidden duration-500'>
                    <div className='h-full p-6 flex flex-row justify-between'>
                      <div className='flex flex-col relative z-30 gap-1 mt-auto'>
                        <Skeleton className='rounded-[8px]'>
                          <p className='text-xl font-bold text-white'>i.name</p>
                        </Skeleton>
                        <Skeleton className='rounded-[8px]'>
                          <p className='text-xs text-gray-100 opacity-75'>Learn more</p>
                        </Skeleton>
                      </div>
                      <div>
                        <IoMdArrowRoundForward className='text-xl text-white'/>
                      </div>
                    </div>
                    <Skeleton className='rounded-[8px]'>
                      <div className='h-full w-full bg-red-50 absolute rounded-full flex items-start justify-start z-0'>
                        
                        <img src='' alt='' className='h-full w-full object-cover absolute z-0' />
                        <div className='h-full w-full bg-gradient-to-t from-black/75 to-transparent absolute z-30 hover:from-black/100 duration-500'></div>
                      </div>
                    </Skeleton>
                  </Link>

                  <Link className='bg-white w-[40%] sm:w-[175px] h-[125px] border-1 border-gray-200 gap-8 flex flex-col rounded-[8px] relative overflow-hidden duration-500'>
                    <div className='h-full p-6 flex flex-row justify-between'>
                      <div className='flex flex-col relative z-30 gap-1 mt-auto'>
                        <Skeleton className='rounded-[8px]'>
                          <p className='text-xl font-bold text-white'>i.name</p>
                        </Skeleton>
                        <Skeleton className='rounded-[8px]'>
                          <p className='text-xs text-gray-100 opacity-75'>Learn more</p>
                        </Skeleton>
                      </div>
                      <div>
                        <IoMdArrowRoundForward className='text-xl text-white'/>
                      </div>
                    </div>
                    <Skeleton className='rounded-[8px]'>
                      <div className='h-full w-full bg-red-50 absolute rounded-full flex items-start justify-start z-0'>
                        
                        <img src='' alt='' className='h-full w-full object-cover absolute z-0' />
                        <div className='h-full w-full bg-gradient-to-t from-black/75 to-transparent absolute z-30 hover:from-black/100 duration-500'></div>
                      </div>
                    </Skeleton>
                  </Link>
                
              </div>
              :
              medicineCountries?
              <div className='w-fit mx-auto flex flex-wrap items-center justify-center gap-2 md:gap-4 '>

                {
                  medicineCountries.map(i => (
                    <Link key={i.slug} to={`/countries/${i.slug}`} className='bg-white w-[40%] sm:w-[175px] h-[125px] border-1 border-gray-200 gap-8 flex flex-col rounded-[8px] relative overflow-hidden duration-500'>
                      <div className='h-full p-6 flex flex-row justify-between'>
                        <div className='flex flex-col relative z-30 gap-1 mt-auto'>
                          <p className='text-xl font-bold text-white'>{i.name}</p>
                          <p className='text-xs text-gray-100 opacity-75'>Learn more</p>
                        </div>
                        <div>
                          <IoMdArrowRoundForward className='text-xl text-white'/>
                        </div>
                      </div>
                      <div className='h-full w-full bg-red-50 absolute rounded-full flex items-start justify-start z-0'>
                        
                        <img src={i.image} alt='' className='h-full w-full object-cover absolute z-0' />
                        <div className='h-full w-full bg-gradient-to-t from-black/75 to-transparent absolute z-30 hover:from-black/100 duration-500'></div>
                      </div>
                    </Link>
                  ))
                }

              </div>:
              ''
            }
          </div>
      </section>

      <section className='h-fit w-full relative px-8 bg-red-800'>
        <div className='h-fit w-full max-w-[1024px] mx-auto justify-center gap-6 grid grid-col-2 md:grid-cols-3 lg:grid-cols-4 bg-red-800 text-white py-6 rounded-[16px]'>
          <div className='w-full flex flex-col items-center justify-center'>
            

            <p className='text-4xl font-bold'><CountUp duration={5} end={100} />%</p>
            <p className='text-sm font-medium'>Satisfication</p>
          </div>
          <div className='w-full flex flex-col items-center justify-center'>
            <p className='text-4xl font-bold'><CountUp duration={5} end={40} />+</p>
            <p className='text-sm font-medium'>Countries</p>
          </div>
          <div className='w-full flex flex-col items-center justify-center'>
            <p className='text-4xl font-bold'><CountUp duration={5} end={300} />+</p>
            <p className='text-sm font-medium'>Universities</p>
          </div>
          <div className='w-full flex flex-col items-center justify-center'>
            <p className='text-4xl font-bold'><CountUp duration={5} end={60} />+</p>
            <p className='text-sm font-medium'>Success Clients</p>
          </div>
        </div>
      </section>

      {/* <section className='w-full h-fit relative '>
          <div className='w-full max-w-[1100px] mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16 justify-between px-8'>
            <div className='bg-black h-[300px] w-full md:w-[400px]'>
              <div className='bg-black h-[300px] w-full md:w-[400px] '>
                <img src='https://t3.ftcdn.net/jpg/03/17/75/96/360_F_317759691_tOGvURIzTXP5pyHfy33I5cQazw8fxK0g.jpg' alt='' className='h-full w-full object-cover' />
              </div>
            </div>
            <div className='w-fit flex flex-col gap-8'>
              <div className='flex flex-col'>
                <p className='uppercase text-xs font-semibold opacity-50 text-center'>Study Abroad</p>
                <p className='text-2xl md:text-4xl font-bold text-[#DA0C0C] text-center capitalize'>WHY CHOOSE US?</p>
              </div>
              <div className='flex flex-col list-disc gap-1 px-8'>
                <li className='text-base text-black font-medium'>Expert Education Counsellor Services</li>
                <li className='text-base text-black font-medium'>Carrer Counselling </li>
                <li className='text-base text-black font-medium'>University / College Selection </li>
                <li className='text-base text-black font-medium'>Gaining Admission To University / Colleges</li>
                <li className='text-base text-black font-medium'>Visa Assitance</li>
                <li className='text-base text-black font-medium'>Pre-depature Guidence</li>
              </div>
            </div>
          </div>
      </section> */}

      {/* <section className='h-fit w-full '>
        <div className='h-fit w-full max-w-[1100px] mx-auto px-8 flex flex-col'>
          
          <div className='w-full flex flex-col gap-4 text-left'>
            <p className='text-2xl md:text-4xl font-bold text-[#DA0C0C] text-center capitalize'>IMMIGRATION SERVICES</p>
            <div className='flex flex-col gap-4 w-full'>
              
              <Accordion defaultExpandedKeys={["Admission Requirements"]} aria-label="Options">
                <AccordionItem key="Admission Requirements" title={
                  <p className='text-lg font-semibold'>Admission Requirements</p>
                }>
                  <div className='flex flex-col gap-1 bg-gradient-to-b from-red-200 to-transparent py-8 px-4 rounded-[8px] mb-2'>
                      <p className='text-base text-black text-left'>Institutions set criteria for international students, including English proficiency exams.
                      </p>
                  </div>  
                </AccordionItem>
                <AccordionItem key="Selection of Universities" title={
                  <p className='text-lg font-semibold'>Selection of Universities</p>
                }>
                  <div className='flex flex-col gap-1 bg-gradient-to-b from-red-200 to-transparent py-8 px-4 rounded-[8px] mb-2'>
                    <p className='text-base text-black text-left'>IEBC aids in choosing suitable institutions based on academic and financial fit.</p>
                  </div> 
                </AccordionItem>
                <AccordionItem key="Career Counselling" title={
                  <p className='text-lg font-semibold'>Career Counselling</p>
                }>
                  <div className='flex flex-col gap-1 bg-gradient-to-b from-red-200 to-transparent py-8 px-4 rounded-[8px] mb-2'>
                    <p className='text-base text-black text-left'>Tailored advice on program selection and study abroad decisions for students.</p>
                  </div>  
                </AccordionItem>
                <AccordionItem key="Accommodation & Travel Arrangement" title={
                  <p className='text-lg font-semibold'>Accommodation & Travel Arrangement</p>
                }>
                  <div className='flex flex-col gap-1 bg-gradient-to-b from-red-200 to-transparent py-8 px-4 rounded-[8px] mb-2'>
                    <p className='text-base text-black text-left'>Assistance with visa-approved travel plans and settling in new accommodations abroad.</p>
                  </div>
                </AccordionItem>
                <AccordionItem key="Interview Preparation & Pre-departure Briefing" title={
                  <p className='text-lg font-semibold'>Interview Preparation & Pre-departure Briefing</p>
                }>
                  <div className='flex flex-col gap-1 bg-gradient-to-b from-red-200 to-transparent py-8 px-4 rounded-[8px] mb-2'>
                    <p className='text-base text-black text-left'>Preparation for challenges of studying abroad, including accommodation and travel 
                    arrangements.</p>
                  </div>
                </AccordionItem>
                <AccordionItem key="Document Processing" title={
                  <p className='text-lg font-semibold'>Document Processing</p>
                }>
                  <div className='flex flex-col gap-1 bg-gradient-to-b from-red-200 to-transparent py-8 px-4 rounded-[8px] mb-2'>
                    <p className='text-base text-black text-left'>Guidance on compiling essential documents for visa applications and immigration requirements.</p>
                  </div>
                </AccordionItem>
              </Accordion> 
              
            </div>
          </div>
              <Button variant='light' color='danger' endContent={
                  <GrFormNextLink />
              } className=' ml-auto'>
                Learn more
              </Button>
        </div>
      </section> */}

      <section className='h-fit max-w-full bg-white overflow-hidden'>
        <div className='h-fit w-full flex flex-col'>
          
          <div className='w-full mx-auto max-w-[1024px] flex flex-col md:flex-row gap-16 items-center text-left'>
            <div className='flex  flex-col md:flex-row gap-2 w-full overflow-hidden'>
              {/* <div className='lg:max-w-[350px] flex flex-col gap-2'>
                <p className='text-2xl md:text-4xl font-bold text-[#DA0C0C] text-left uppercase'>OUR SERVICES</p>
                <p className='text-sm '>IEBC ensures a smooth travel for your educational purpose abroad. Start with our free counselling first</p>
                <Link to={'/ourservices'}>
                  <Button endContent={
                        <GrFormNextLink />
                    } className='w-fit font-medium bg-[#DA0C0C] text-white mt-4'>
                    Explore our student services
                  </Button>
                </Link>
                
              </div>
              <div className='lg:max-w-[350px] flex flex-col gap-2'>
                <p className='text-2xl md:text-4xl font-bold text-[#DA0C0C] text-left uppercase'>About our consultancy</p>
                <p className='text-sm '>IEBC ensures a smooth travel for your educational purpose abroad. Start with our free counselling first</p>
                <Button endContent={
                      <GrFormNextLink />
                  } className='w-fit font-medium bg-[#DA0C0C] text-white mt-4'>
                  About us
                </Button>
              </div> */}

              {/* <video autoPlay> 
                
                <source src={sdv} type="video/mp4" />
              </video> */}
              <ReactPlayer url={sdv} loop={true} playing={false} controls={true} />

            </div>
            <div className='max-w-screen flex flex-col gap-4 w-full max-w-md relative mx-8 px-4 md:px-0'>
              <img src='https://www.marketsquaredental.com/files/2011/08/book-now.png' alt='' className='absolute w-full h-full opacity-25 object-contain scale-110' />
              <div className='w-full flex flex-col gap-6'>
                <p className='text-2xl font-bold'>Book an Appointment</p>
                {
                    
                    BASuccess?
                    <p className='text-xs text-green-500 font-lg '>Message send succefully</p>:
                    <p className='text-xs text-red-500 font-lg '>All fields are required*</p>
                  }
                <Input isClearable value={name} 
                            onChange={(e) => setname(e.target.value)}  variant='flat' type='text' placeholder='Name'></Input>
                <div className='grid grid-cols-2 gap-6'>
                  <Input isClearable value={email} 
                            onChange={(e) => setemail(e.target.value)}  variant='flat' type='email' placeholder='Email'></Input>
                  <Input isClearable  value={mNumber} 
                            onChange={(e) => setmNumber(e.target.value)} variant='flat' type='number' placeholder='Mobile number' startContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">+94</span>
                    </div>
                  }></Input>
                </div>
                <div className='h-fit w-full relative grid grid-cols-2 gap-6'>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    showTimeSelect
                    filterTime={filterTime}
                    value={date} 
                    
                    filterDate={filterDate}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    timeIntervals={30}
                    minTime={setHours(setMinutes(new Date(), 0), 9)}
                    maxTime={setHours(setMinutes(new Date(), 0), 17)}
                    placeholderText="Select a date and time"
                    className='min-w-[100%] w-full flex py-[10px] px-3 rounded-[12px] text-sm outline-none cursor-pointer bg-gray-100 shadow-sm hover:opacity-50'
                  />
                  <div className='absolute top-1/2  transform right-2 -translate-y-1/2'>
                    <IoCalendar/>
                  </div>
                  <Select 
                    className="w-full" 
                    // selectedKeys={pLocation}
                    // onSelectionChange={setPLocation}
                    variant=''
                    placeholder='Year of Study'
                    required
                    size='md'
                    selectedKeys={YOS}
                    onSelectionChange={setYOS}

                >
                    <SelectItem key='2025' className=''>
                        2025
                    </SelectItem>
                    <SelectItem key='2027' className=''>
                        2027
                    </SelectItem>
                    <SelectItem key='2028' className=''>
                        2028
                    </SelectItem>
                </Select>
                </div>
                <div className='flex gap-6'>
                  <Select 
                      className="w-full" 
                      // selectedKeys={pLocation}
                      // onSelectionChange={setPLocation}
                      variant=''
                      placeholder='Preferred Study Destination'
                      required
                      size='md'
                      selectedKeys={destination}
                    onSelectionChange={setdestination}

                  >
                         {
                          mainCountryListLoaoding?
                          "":
                          mainCountries?
                          mainCountries.map(i => (
                            <SelectItem key={i.slug} value={i.slug} className=''>
                                {i.name}
                            </SelectItem>
                          )):''
                        }
                        {
                          euCountryListLoaoding?
                          "":
                          euCountries?
                          euCountries.map(i => (
                            <SelectItem key={i.slug} value={i.slug} className=''>
                                {i.name}
                            </SelectItem>
                          )):''
                        }

                        {
                          medicineCountryListLoaoding?
                          "":
                          medicineCountries?
                          medicineCountries.map(i => (
                            <SelectItem key={i.slug} value={i.slug} className=''>
                                {i.name}
                            </SelectItem>
                          )):''
                        }
                  </Select>
                  <Select 
                      className="w-full" 
                      // selectedKeys={pLocation}
                      // onSelectionChange={setPLocation}
                      variant=''
                      placeholder='Study Intake'
                      required
                      size='md'
                      selectedKeys={SI}
                    onSelectionChange={setSI}

                  >
                      <SelectItem key='January – March' className=''>
                          January – March
                      </SelectItem>
                      <SelectItem key='July – September' className=''>
                          July – September
                      </SelectItem>
                      <SelectItem key='October – December' className=''>
                          October – December
                      </SelectItem>
                      <SelectItem key='I’m Not Sure' className=''>
                          I’m Not Sure
                      </SelectItem>
                  </Select>
                </div>
                
                <Button onClick={sendMailBA} variant='solid' color='danger' endContent={
                    <GrFormNextLink />
                } className='w-fit font-medium bg-[#DA0C0C] text-white mt-4'>
                  Book now
                </Button>
              </div>             
            </div>
          </div>
        </div>
      </section>

      {/* <section className='h-fit w-full '>
        <div className='h-fit w-full max-w-[1100px] mx-auto px-8 flex flex-col '>
          
          <div className='w-full flex flex-col gap-4 text-left'>
            <p className='text-2xl md:text-4xl font-bold text-[#DA0C0C] text-center capitalize'>BENEFITS OF STUDYING ABROAD</p>
            <div className='flex flex-col gap-4 w-full'>
              
              <Accordion defaultExpandedKeys={["International Exposure "]} aria-label="Options">
                <AccordionItem key="International Exposure " title={
                  <p className='text-lg font-semibold'>International Exposure </p>
                }>
                  <div className='flex flex-col gap-1 bg-gradient-to-b from-red-200 to-transparent py-8 px-4 rounded-[8px] mb-2'>
                      <p className='text-base text-black text-left'>Gain diverse skills, manage studies and jobs, multicultural learning environment.
                      </p>
                  </div>  
                </AccordionItem>
                <AccordionItem key="Enhance Your CV" title={
                  <p className='text-lg font-semibold'>Enhance Your CV</p>
                }>
                  <div className='flex flex-col gap-1 bg-gradient-to-b from-red-200 to-transparent py-8 px-4 rounded-[8px] mb-2'>
                    <p className='text-base text-black text-left'>Demonstrates adaptability, cultural openness, problem-solving in diverse environments..</p>
                  </div> 
                </AccordionItem>
                <AccordionItem key="Learn Self-Reliance" title={
                  <p className='text-lg font-semibold'>Learn Self-Reliance</p>
                }>
                  <div className='flex flex-col gap-1 bg-gradient-to-b from-red-200 to-transparent py-8 px-4 rounded-[8px] mb-2'>
                    <p className='text-base text-black text-left'>Develop independence, manage finances, navigate daily life in foreign settings.</p>
                  </div>  
                </AccordionItem>
                <AccordionItem key="Gain a Global Mindset" title={
                  <p className='text-lg font-semibold'>Gain a Global Mindset</p>
                }>
                  <div className='flex flex-col gap-1 bg-gradient-to-b from-red-200 to-transparent py-8 px-4 rounded-[8px] mb-2'>
                    <p className='text-base text-black text-left'>Broaden horizons, understand global issues, cultural awareness, effective communication.</p>
                  </div>
                </AccordionItem>
                <AccordionItem key="Top Quality Education" title={
                  <p className='text-lg font-semibold'>Top Quality Education</p>
                }>
                  <div className='flex flex-col gap-1 bg-gradient-to-b from-red-200 to-transparent py-8 px-4 rounded-[8px] mb-2'>
                    <p className='text-base text-black text-left'>Studying abroad exposes you to world-class education systems, fostering academic excellence and 
                    global perspectives.</p>
                  </div>
                </AccordionItem>
                <AccordionItem key="Career Opportunities" title={
                  <p className='text-lg font-semibold'>Career Opportunities</p>
                }>
                  <div className='flex flex-col gap-1 bg-gradient-to-b from-red-200 to-transparent py-8 px-4 rounded-[8px] mb-2'>
                    <p className='text-base text-black text-left'>International study enhances your CV, showing employers your adaptability and global mindset, opening doors to diverse career opportunities.</p>
                  </div>
                </AccordionItem>
                <AccordionItem key="International Travel" title={
                  <p className='text-lg font-semibold'>International Travel</p>
                }>
                  <div className='flex flex-col gap-1 bg-gradient-to-b from-red-200 to-transparent py-8 px-4 rounded-[8px] mb-2'>
                    <p className='text-base text-black text-left'>Studying abroad isn't just about education; it's a life-changing adventure that broadens your cultural 
                    understanding and personal growth through international travel.</p>
                  </div>
                </AccordionItem>
              </Accordion> 
              
            </div>
          </div>
              <Button variant='light' color='danger' endContent={
                  <GrFormNextLink />
              } className=' ml-auto'>
                Learn more
              </Button>
        </div>
      </section> */}

      <section className='h-fit w-full relative overflow-hidden px-8'>
        <div className='h-fit w-full max-w-[1024px] mx-auto overflow-visible'>
            {/* <div className='flex flex-col pb-8'>
              <p className='uppercase text-xs text-center'>Resources</p>
              <p className='text-2xl lg:text-4xl font-bold text-center'>Our Resources</p>
            </div> */}

            <div className='hidden md:block'>
              <Swiper
                slidesPerView={3}
                spaceBetween={10}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                autoplay
                modules={[FreeMode, Pagination, Autoplay]}
                className=""
              >
                <SwiperSlide className='h-[300px] w-full relative mt-4 mb-12'>
                  <div className='h-[200px] w-full relative z-10'>
                    <div className='h-fit w-[90%] bg-red-50 mx-auto relative z-10 rounded-[8px] overflow-hidden'>
                    <iframe src="https://www.facebook.com/plugins/video.php?height=316&href=https%3A%2F%2Fweb.facebook.com%2FIEBCGlobal%2Fvideos%2F724979536505482%2F&show_text=false&width=560&t=0" height={'100%'} width={'full'} className='w-full h-full object-cover' frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                    </div>
                  </div>
                  <div className='w-full h-[100px] rounded-[8px] bg-[#DA0C0C] absolute bottom-0 -z-30'>

                  </div>
                </SwiperSlide>
                <SwiperSlide className='h-[300px] w-full relative mt-4 mb-12'>
                  <div className='h-[200px] w-full relative z-10'>
                    <div className='h-fit w-[90%] bg-red-50 mx-auto relative z-10 rounded-[8px] overflow-hidden'>
                    <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2FIEBCGlobal%2Fvideos%2F787360559926806%2F&show_text=false&width=560&t=0" height={'100%'} width={'full'} className='w-full h-full object-cover' frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                    </div>
                  </div>
                  <div className='w-full h-[100px] rounded-[8px] bg-[#DA0C0C] absolute bottom-0 -z-30'>

                  </div>
                </SwiperSlide>
                <SwiperSlide className='h-[300px] w-full relative mt-4 mb-12'>
                  <div className='h-[200px] w-full relative z-10'>
                    <div className='h-fit w-[90%] bg-red-50 mx-auto relative z-10 rounded-[8px] overflow-hidden'>
                    <iframe src="https://www.facebook.com/plugins/video.php?height=420&href=https%3A%2F%2Fweb.facebook.com%2FIEBCGlobal%2Fvideos%2F1063711408132096%2F&show_text=false&width=560&t=0" height={'100%'} width={'full'} className='w-full h-full object-cover' frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                    </div>
                  </div>
                  <div className='w-full h-[100px] rounded-[8px] bg-[#DA0C0C] absolute bottom-0 -z-30'>

                  </div>
                </SwiperSlide>
                <SwiperSlide className='h-[300px] w-full relative mt-4 mb-12'>
                  <div className='h-[200px] w-full relative z-10'>
                    <div className='h-fit w-[90%] bg-red-50 mx-auto relative z-10 rounded-[8px] overflow-hidden'>
                    <iframe src="https://www.facebook.com/plugins/video.php?height=316&href=https%3A%2F%2Fweb.facebook.com%2FIEBCGlobal%2Fvideos%2F1438798656686721%2F&show_text=false&width=560&t=0" height={'100%'} width={'full'} className='w-full h-full object-cover' frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                    </div>
                  </div>
                  <div className='w-full h-[100px] rounded-[8px] bg-[#DA0C0C] absolute bottom-0 -z-30'>

                  </div>
                </SwiperSlide>

                <SwiperSlide className='h-[300px] w-full relative mt-4 mb-12'>
                  <div className='h-[200px] w-full relative z-10'>
                    <div className='h-fit w-[90%] bg-red-50 mx-auto relative z-10 rounded-[8px] overflow-hidden'>
                    <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2FIEBCGlobal%2Fvideos%2F809322143721464%2F&show_text=false&width=560&t=0" height={'100%'} width={'full'} className='w-full h-full object-cover' frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                    </div>
                  </div>
                  <div className='w-full h-[100px] rounded-[8px] bg-[#DA0C0C] absolute bottom-0 -z-30'>

                  </div>
                </SwiperSlide>
                <SwiperSlide className='h-[300px] w-full relative mt-4 mb-12'>
                  <div className='h-[200px] w-full relative z-10'>
                    <div className='h-fit w-[90%] bg-red-50 mx-auto relative z-10 rounded-[8px] overflow-hidden'>
                    <iframe src="https://www.facebook.com/plugins/video.php?height=316&href=https%3A%2F%2Fweb.facebook.com%2FIEBCGlobal%2Fvideos%2F308333668443585%2F&show_text=false&width=560&t=0" height={'100%'} width={'full'} className='w-full h-full object-cover' frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                    </div>
                  </div>
                  <div className='w-full h-[100px] rounded-[8px] bg-[#DA0C0C] absolute bottom-0 -z-30'>

                  </div>
                </SwiperSlide>
                <SwiperSlide className='h-[300px] w-full relative mt-4 mb-12'>
                  <div className='h-[200px] w-full relative z-10'>
                    <div className='h-fit w-[90%] bg-red-50 mx-auto relative z-10 rounded-[8px] overflow-hidden'>
                    <iframe src="https://www.facebook.com/plugins/video.php?height=420&href=https%3A%2F%2Fweb.facebook.com%2FIEBCGlobal%2Fvideos%2F585327600327936%2F&show_text=false&width=560&t=0" height={'100%'} width={'full'} className='w-full h-full object-cover' frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                    </div>
                  </div>
                  <div className='w-full h-[100px] rounded-[8px] bg-[#DA0C0C] absolute bottom-0 -z-30'>

                  </div>
                </SwiperSlide>
                <SwiperSlide className='h-[300px] w-full relative mt-4 mb-12'>
                  <div className='h-[200px] w-full relative z-10'>
                    <div className='h-fit w-[90%] bg-red-50 mx-auto relative z-10 rounded-[8px] overflow-hidden'>
                    <iframe src="https://www.facebook.com/plugins/video.php?height=420&href=https%3A%2F%2Fweb.facebook.com%2FIEBCGlobal%2Fvideos%2F831771447883217%2F&show_text=false&width=560&t=0" height={'100%'} width={'full'} className='w-full h-full object-cover' frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                    </div>
                  </div>
                  <div className='w-full h-[100px] rounded-[8px] bg-[#DA0C0C] absolute bottom-0 -z-30'>

                  </div>
                </SwiperSlide>

                <SwiperSlide className='h-[300px] w-full relative mt-4 mb-12'>
                  <div className='h-[200px] w-full relative z-10'>
                    <div className='h-fit w-[90%] bg-red-50 mx-auto relative z-10 rounded-[8px] overflow-hidden'>
                    <iframe src="https://www.facebook.com/plugins/video.php?height=420&href=https%3A%2F%2Fweb.facebook.com%2FIEBCGlobal%2Fvideos%2F856088048932476%2F&show_text=false&width=560&t=0" height={'100%'} width={'full'} className='w-full h-full object-cover' frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                    </div>
                  </div>
                  <div className='w-full h-[100px] rounded-[8px] bg-[#DA0C0C] absolute bottom-0 -z-30'>

                  </div>
                </SwiperSlide>
                <SwiperSlide className='h-[300px] w-full relative mt-4 mb-12'>
                  <div className='h-[200px] w-full relative z-10'>
                    <div className='h-fit w-[90%] bg-red-50 mx-auto relative z-10 rounded-[8px] overflow-hidden'>
                    <iframe src="https://www.facebook.com/plugins/video.php?height=420&href=https%3A%2F%2Fweb.facebook.com%2FIEBCGlobal%2Fvideos%2F469373541830598%2F&show_text=false&width=560&t=0" height={'100%'} width={'full'} className='w-full h-full object-cover' frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                    </div>
                  </div>
                  <div className='w-full h-[100px] rounded-[8px] bg-[#DA0C0C] absolute bottom-0 -z-30'>

                  </div>
                </SwiperSlide>
                <SwiperSlide className='h-[300px] w-full relative mt-4 mb-12'>
                  <div className='h-[200px] w-full relative z-10'>
                    <div className='h-fit w-[90%] bg-red-50 mx-auto relative z-10 rounded-[8px] overflow-hidden'>
                    <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2FIEBCGlobal%2Fvideos%2F650057759927476%2F&show_text=false&width=560&t=0" height={'100%'} width={'full'} className='w-full h-full object-cover' frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                    </div>
                  </div>
                  <div className='w-full h-[100px] rounded-[8px] bg-[#DA0C0C] absolute bottom-0 -z-30'>

                  </div>
                </SwiperSlide>
                {/* <SwiperSlide className='h-[300px] w-full relative mt-4 mb-12'>
                  <div className='h-[200px] w-full relative z-10'>
                    <div className='h-fit w-[90%] bg-red-50 mx-auto relative z-10 rounded-[8px] overflow-hidden'>
                        <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2Fiebc.lk%2Fvideos%2F390059596804608%2F&show_text=false&width=560&t=0" height={'100%'} width={'full'} className='w-full h-full object-cover' frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                    </div>
                  </div>
                  <div className='w-full h-[100px] rounded-[8px] bg-[#DA0C0C] absolute bottom-0 -z-30'>

                  </div>
                </SwiperSlide>
                <SwiperSlide className='h-[300px] w-full relative mt-4 mb-12'>
                  <div className='h-[200px] w-full relative z-10'>
                    <div className='h-fit w-[90%] bg-red-50 mx-auto relative z-10 rounded-[8px] overflow-hidden'>
                        <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2Fiebc.lk%2Fvideos%2F390059596804608%2F&show_text=false&width=560&t=0" height={'100%'} width={'full'} className='w-full h-full object-cover' frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                    </div>
                  </div>
                  <div className='w-full h-[100px] rounded-[8px] bg-[#DA0C0C] absolute bottom-0 -z-30'>

                  </div>
                </SwiperSlide> */}
              </Swiper>
            </div>

            <div className='hidden sm:block md:hidden'>
              <Swiper
                slidesPerView={2}
                spaceBetween={10}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                autoplay
                modules={[FreeMode, Pagination, Autoplay]}
                className=""
              >
                <SwiperSlide className='h-[300px] w-full relative mt-4 mb-12'>
                  <div className='h-[200px] w-full relative z-10'>
                    <div className='h-fit w-[90%] bg-red-50 mx-auto relative z-10 rounded-[8px] overflow-hidden'>
                        <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2Fiebc.lk%2Fvideos%2F390059596804608%2F&show_text=false&width=560&t=0" height={'100%'} width={'full'} className='w-full h-full object-cover' frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                    </div>
                  </div>
                  <div className='w-full h-[100px] rounded-[8px] bg-[#DA0C0C] absolute bottom-0 -z-30'>

                  </div>
                </SwiperSlide>
                <SwiperSlide className='h-[300px] w-full relative mt-4 mb-12'>
                      <div className='h-[200px] w-full relative z-10'>
                        <div className='h-fit w-[90%] bg-red-50 mx-auto relative z-10 rounded-[8px] overflow-hidden'>
                            <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2Fiebc.lk%2Fvideos%2F390059596804608%2F&show_text=false&width=560&t=0" height={'100%'} width={'full'} className='w-full h-full object-cover' frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                        </div>
                      </div>
                      <div className='w-full h-[100px] rounded-[8px] bg-[#DA0C0C] absolute bottom-0 -z-30'>

                      </div>
                </SwiperSlide>
                <SwiperSlide className='h-[300px] w-full relative mt-4 mb-12'>
                  <div className='h-[200px] w-full relative z-10'>
                    <div className='h-fit w-[90%] bg-red-50 mx-auto relative z-10 rounded-[8px] overflow-hidden'>
                        <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2Fiebc.lk%2Fvideos%2F390059596804608%2F&show_text=false&width=560&t=0" height={'100%'} width={'full'} className='w-full h-full object-cover' frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                    </div>
                  </div>
                  <div className='w-full h-[100px] rounded-[8px] bg-[#DA0C0C] absolute bottom-0 -z-30'>

                  </div>
                </SwiperSlide>
                {/* <SwiperSlide className='h-[300px] w-full relative mt-4 mb-12'>
                  <div className='h-[200px] w-full relative z-10'>
                    <div className='h-fit w-[90%] bg-red-50 mx-auto relative z-10 rounded-[8px] overflow-hidden'>
                        <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2Fiebc.lk%2Fvideos%2F390059596804608%2F&show_text=false&width=560&t=0" height={'100%'} width={'full'} className='w-full h-full object-cover' frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                    </div>
                  </div>
                  <div className='w-full h-[100px] rounded-[8px] bg-[#DA0C0C] absolute bottom-0 -z-30'>

                  </div>
                </SwiperSlide>
                <SwiperSlide className='h-[300px] w-full relative mt-4 mb-12'>
                  <div className='h-[200px] w-full relative z-10'>
                    <div className='h-fit w-[90%] bg-red-50 mx-auto relative z-10 rounded-[8px] overflow-hidden'>
                        <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2Fiebc.lk%2Fvideos%2F390059596804608%2F&show_text=false&width=560&t=0" height={'100%'} width={'full'} className='w-full h-full object-cover' frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                    </div>
                  </div>
                  <div className='w-full h-[100px] rounded-[8px] bg-[#DA0C0C] absolute bottom-0 -z-30'>

                  </div>
                </SwiperSlide> */}
              </Swiper>
            </div>

            <div className='sm:hidden'>
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                autoplay
                modules={[FreeMode, Pagination, Autoplay]}
                className=""
              >
                <SwiperSlide className='h-[300px] w-full relative mt-4 mb-12'>
                  <div className='h-[200px] w-full relative z-10'>
                    <div className='h-fit w-[90%] bg-red-50 mx-auto relative z-10 rounded-[8px] overflow-hidden'>
                      <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2Fiebc.lk%2Fvideos%2F390059596804608%2F&show_text=false&width=560&t=0" height={'100%'} width={'full'} className='w-full h-full object-cover' frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                    </div>
                  </div>
                  <div className='w-full h-[100px] rounded-[8px] bg-[#DA0C0C] absolute bottom-0 -z-30'>

                  </div>
                </SwiperSlide>
                <SwiperSlide className='h-[300px] w-full relative mt-4 mb-12'>
                  <div className='h-[200px] w-full relative z-10'>
                    <div className='h-fit w-[90%] bg-red-50 mx-auto relative z-10 rounded-[8px] overflow-hidden'>
                      <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2Fiebc.lk%2Fvideos%2F390059596804608%2F&show_text=false&width=560&t=0" height={'100%'} width={'full'} className='w-full h-full object-cover' frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                    </div>
                  </div>
                  <div className='w-full h-[100px] rounded-[8px] bg-[#DA0C0C] absolute bottom-0 -z-30'>

                  </div>
                </SwiperSlide>
                <SwiperSlide className='h-[300px] w-full relative mt-4 mb-12'>
                  <div className='h-[200px] w-full relative z-10'>
                    <div className='h-fit w-[90%] bg-red-50 mx-auto relative z-10 rounded-[8px] overflow-hidden'>
                      <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2Fiebc.lk%2Fvideos%2F390059596804608%2F&show_text=false&width=560&t=0" height={'100%'} width={'full'} className='w-full h-full object-cover' frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                    </div>
                  </div>
                  <div className='w-full h-[100px] rounded-[8px] bg-[#DA0C0C] absolute bottom-0 -z-30'>

                  </div>
                </SwiperSlide>
                <SwiperSlide className='h-[300px] w-full relative mt-4 mb-12'>
                  <div className='h-[200px] w-full relative z-10'>
                    <div className='h-fit w-[90%] bg-red-50 mx-auto relative z-10 rounded-[8px] overflow-hidden'>
                      <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2Fiebc.lk%2Fvideos%2F390059596804608%2F&show_text=false&width=560&t=0" height={'100%'} width={'full'} className='w-full h-full object-cover' frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                    </div>
                  </div>
                  <div className='w-full h-[100px] rounded-[8px] bg-[#DA0C0C] absolute bottom-0 -z-30'>

                  </div>
                </SwiperSlide>
                {/* <SwiperSlide className='h-[300px] w-full relative mt-4 mb-12'>
                  <div className='h-[200px] w-full relative z-10'>
                    <div className='h-fit w-[90%] bg-red-50 mx-auto relative z-10 rounded-[8px] overflow-hidden'>
                        <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2Fiebc.lk%2Fvideos%2F390059596804608%2F&show_text=false&width=560&t=0" height={'100%'} width={'full'} className='w-full h-full object-cover' frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                    </div>
                  </div>
                  <div className='w-full h-[100px] rounded-[8px] bg-[#DA0C0C] absolute bottom-0 -z-30'>

                  </div>
                </SwiperSlide>
                <SwiperSlide className='h-[300px] w-full relative mt-4 mb-12'>
                  <div className='h-[200px] w-full relative z-10'>
                    <div className='h-fit w-[90%] bg-red-50 mx-auto relative z-10 rounded-[8px] overflow-hidden'>
                        <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2Fiebc.lk%2Fvideos%2F390059596804608%2F&show_text=false&width=560&t=0" height={'100%'} width={'full'} className='w-full h-full object-cover' frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                    </div>
                  </div>
                  <div className='w-full h-[100px] rounded-[8px] bg-[#DA0C0C] absolute bottom-0 -z-30'>

                  </div>
                </SwiperSlide>
                <SwiperSlide className='h-[300px] w-full relative mt-4 mb-12'>
                  <div className='h-[200px] w-full relative z-10'>
                    <div className='h-fit w-[90%] bg-red-50 mx-auto relative z-10 rounded-[8px] overflow-hidden'>
                        <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2Fiebc.lk%2Fvideos%2F390059596804608%2F&show_text=false&width=560&t=0" height={'100%'} width={'full'} className='w-full h-full object-cover' frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                    </div>
                  </div>
                  <div className='w-full h-[100px] rounded-[8px] bg-[#DA0C0C] absolute bottom-0 -z-30'>

                  </div>
                </SwiperSlide> */}
              </Swiper>
            </div>

        </div>
      </section>

      <section className='h-fit w-full relative overflow-hidden px-8'>
        <div className='h-fit w-full max-w-[1024px] mx-auto overflow-visible'>
            <div className='flex flex-col pb-8'>
              <p className='uppercase text-xs text-center'text-center>Our Students Testimonials</p>
              <p className='text-2xl lg:text-4xl font-bold text-center'>Study abroad Testimonial</p>
            </div>

            {
              testimonialListLoading?
              <div className='h-fit hidden sm:flex'>
                <Swiper
                  slidesPerView={2}
                  spaceBetween={25}
                  freeMode={true}
                  autoplay
                  modules={[FreeMode, Autoplay]}
                  className=""
                >
                  <SwiperSlide className='max-h-[300px] w-full mt-2 mb-12 bg-red-50 p-6 md:p-12 rounded-[8px] relative overflow-hidden '>
                    {/* <div className='h-[100px] w-[100px] absolute top-0 right-0 bg-[#DA0C0C] rotate-45 -z-20'>

                    </div> */}
                    <div className='h-fit flex flex-col'>
                      <p className='text-lg font-bold text-[#DA0C0C] capitalize'>Ayesh hiruni</p>

                      <p className='capitalize text-sm font-medium text-gray-500 '>Selan Bank</p>
                    </div>
                    <div className='h-[1px] w-full bg-red-100 my-4'></div>
                    <div className='max-h-fit py-2'>
                      <p className='text-base font-semibold'>"Lorem ipsum dolor sit amet consectetur. In nisl arcu risus at eu ipsum nunc magnis integer. Tristique aliquam risus mauris vitae adipiscing sit eget tristique."</p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className='max-h-[300px] w-full mt-2 mb-12 bg-red-50 p-6 md:p-12 rounded-[8px] relative overflow-hidden '>
                    {/* <div className='h-[100px] w-[100px] absolute top-0 right-0 bg-[#DA0C0C] rotate-45 -z-20'>

                    </div> */}
                    <div className='h-fit flex flex-col'>
                      <p className='text-lg font-bold text-[#DA0C0C] capitalize'>Ayesh hiruni</p>

                      <p className='capitalize text-sm font-medium text-gray-500 '>Selan Bank</p>
                    </div>
                    <div className='h-[1px] w-full bg-red-100 my-4'></div>
                    <div className='max-h-fit py-2'>
                      <p className='text-base font-semibold'>"Lorem ipsum dolor sit amet consectetur. In nisl arcu risus at eu ipsum nunc magnis integer. Tristique aliquam risus mauris vitae adipiscing sit eget tristique."</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className='max-h-[300px] w-full mt-2 mb-12 bg-red-50 p-6 md:p-12 rounded-[8px] relative overflow-hidden '>
                    {/* <div className='h-[100px] w-[100px] absolute top-0 right-0 bg-[#DA0C0C] rotate-45 -z-20'>

                    </div> */}
                    <div className='h-fit flex flex-col'>
                      <p className='text-lg font-bold text-[#DA0C0C] capitalize'>Ayesh hiruni</p>

                      <p className='capitalize text-sm font-medium text-gray-500 '>Selan Bank</p>
                    </div>
                    <div className='h-[1px] w-full bg-red-100 my-4'></div>
                    <div className='max-h-fit py-2'>
                      <p className='text-base font-semibold'>"Lorem ipsum dolor sit amet consectetur. In nisl arcu risus at eu ipsum nunc magnis integer. Tristique aliquam risus mauris vitae adipiscing sit eget tristique."</p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>:
              testimonials ?
              <div className='h-fit hidden sm:flex'>
                <Swiper
                  slidesPerView={2}
                  spaceBetween={25}
                  freeMode={true}
                  autoplay
                  modules={[FreeMode, Autoplay]}
                  className=""
                >
                  {
                    testimonials.filter(f=>f.university != null).map(i => (
                      <SwiperSlide key={i.id} className='max-h-[300px] w-full mt-2 mb-12 bg-red-50 p-6 md:p-12 rounded-[8px] relative overflow-hidden '>
                      {/* <div className='h-[100px] w-[100px] absolute top-0 right-0 bg-[#DA0C0C] rotate-45 -z-20'>

                      </div> */}
                      <div className='h-fit flex flex-col'>
                        <p className='text-lg font-bold text-[#DA0C0C] capitalize'>{i.name}</p>
  
                        <p className='capitalize text-sm font-medium text-gray-500 '>{i.course?i.course.name:''}</p>
                      </div>
                      <div className='h-[1px] w-full bg-red-100 my-4'></div>
                      <div className='max-h-fit py-2'>
                        <p className='text-base font-semibold'>{parse(i.description)}</p>
                      </div>
                    </SwiperSlide>
                    ))
                  }

                  
                </Swiper>
              </div>:
              ''
            }

            {
              testimonialListLoading?
              <div className='sm:hidden'>
                <Swiper
                  slidesPerView={1}
                  spaceBetween={25}
                  freeMode={true}
                  autoplay
                  modules={[FreeMode, Autoplay]}
                  className=""
                >
                  <SwiperSlide className='max-h-[300px] w-full mt-2 mb-12 bg-red-50 p-6 md:p-12 rounded-[8px] relative overflow-hidden '>
                    {/* <div className='h-[100px] w-[100px] absolute top-0 right-0 bg-[#DA0C0C] rotate-45 -z-20'>

                    </div> */}
                    <div className='flex flex-col'>
                      <p className='text-lg font-bold text-[#DA0C0C] capitalize'>Ayesh hiruni</p>
                      <p className='capitalize text-sm font-medium text-gray-500 '>Selan Bank</p>
                    </div>
                    <div className='h-[1px] w-full bg-red-100 my-4'></div>
                    <div className='max-h-fit py-2'>
                      <p className='text-base font-semibold'>"Lorem ipsum dolor sit amet consectetur. In nisl arcu risus at eu ipsum nunc magnis integer. Tristique aliquam risus mauris vitae adipiscing sit eget tristique."</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className='max-h-[300px] w-full mt-2 mb-12 bg-red-50 p-6 md:p-12 rounded-[8px] relative overflow-hidden '>
                    {/* <div className='h-[100px] w-[100px] absolute top-0 right-0 bg-[#DA0C0C] rotate-45 -z-20'>

                    </div> */}
                    <div className='flex flex-col'>
                      <p className='text-lg font-bold text-[#DA0C0C] capitalize'>Ayesh hiruni</p>
                      <p className='capitalize text-sm font-medium text-gray-500 '>Selan Bank</p>
                    </div>
                    <div className='h-[1px] w-full bg-red-100 my-4'></div>
                    <div className='max-h-fit py-2'>
                      <p className='text-base font-semibold'>"Lorem ipsum dolor sit amet consectetur. In nisl arcu risus at eu ipsum nunc magnis integer. Tristique aliquam risus mauris vitae adipiscing sit eget tristique."</p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className='max-h-[300px] w-full mt-2 mb-12 bg-red-50 p-6 md:p-12 rounded-[8px] relative overflow-hidden '>
                    {/* <div className='h-[100px] w-[100px] absolute top-0 right-0 bg-[#DA0C0C] rotate-45 -z-20'>

                    </div> */}
                    <div className='flex flex-col'>
                      <p className='text-lg font-bold text-[#DA0C0C] capitalize'>Ayesh hiruni</p>
                      <p className='capitalize text-sm font-medium text-gray-500 '>Selan Bank</p>
                    </div>
                    <div className='h-[1px] w-full bg-red-100 my-4'></div>
                    <div className='max-h-fit py-2'>
                      <p className='text-base font-semibold'>"Lorem ipsum dolor sit amet consectetur. In nisl arcu risus at eu ipsum nunc magnis integer. Tristique aliquam risus mauris vitae adipiscing sit eget tristique."</p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>:
              testimonials ?
              <div className='sm:hidden'>
                <Swiper
                  slidesPerView={1}
                  spaceBetween={25}
                  freeMode={true}
                  autoplay
                  modules={[FreeMode, Autoplay]}
                  className=""
                >
                  {
                    testimonials.filter(f=>f.university != null).map(i=>(
                      <SwiperSlide className='max-h-[300px] w-full mt-2 mb-12 bg-red-50 p-6 md:p-12 rounded-[8px] relative overflow-hidden '>
                        {/* <div className='h-[100px] w-[100px] absolute top-0 right-0 bg-[#DA0C0C] rotate-45 -z-20'>

                        </div> */}
                        <div className='flex flex-col'>
                          <p className='text-lg font-bold text-[#DA0C0C] capitalize'>Ayesh hiruni</p>
                          <p className='capitalize text-sm font-medium text-gray-500 '>Selan Bank</p>
                        </div>
                        <div className='h-[1px] w-full bg-red-100 my-4'></div>
                        <div className='max-h-fit py-2'>
                          <p className='text-base font-semibold'>"Lorem ipsum dolor sit amet consectetur. In nisl arcu risus at eu ipsum nunc magnis integer. Tristique aliquam risus mauris vitae adipiscing sit eget tristique."</p>
                        </div>
                      </SwiperSlide>
                    ))
                  }
                  
                </Swiper>
              </div>:
              ''
            }

            <div className='sm:hidden'>
              <Swiper
                slidesPerView={1}
                spaceBetween={25}
                freeMode={true}
                autoplay
                modules={[FreeMode, Autoplay]}
                className=""
              >
                <SwiperSlide className='max-h-[300px] w-full mt-2 mb-12 bg-red-50 p-6 md:p-12 rounded-[8px] relative overflow-hidden '>
                  {/* <div className='h-[100px] w-[100px] absolute top-0 right-0 bg-[#DA0C0C] rotate-45 -z-20'>

                  </div> */}
                  <div className='flex flex-col'>
                    <p className='text-lg font-bold text-[#DA0C0C] capitalize'>Ayesh hiruni</p>
                    <p className='capitalize text-sm font-medium text-gray-500 '>Selan Bank</p>
                  </div>
                  <div className='h-[1px] w-full bg-red-100 my-4'></div>
                  <div className='max-h-fit py-2'>
                    <p className='text-base font-semibold'>"Lorem ipsum dolor sit amet consectetur. In nisl arcu risus at eu ipsum nunc magnis integer. Tristique aliquam risus mauris vitae adipiscing sit eget tristique."</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='max-h-[300px] w-full mt-2 mb-12 bg-red-50 p-6 md:p-12 rounded-[8px] relative overflow-hidden '>
                  {/* <div className='h-[100px] w-[100px] absolute top-0 right-0 bg-[#DA0C0C] rotate-45 -z-20'>

                  </div> */}
                  <div className='flex flex-col'>
                    <p className='text-lg font-bold text-[#DA0C0C] capitalize'>Ayesh hiruni</p>
                    <p className='capitalize text-sm font-medium text-gray-500 '>Selan Bank</p>
                  </div>
                  <div className='h-[1px] w-full bg-red-100 my-4'></div>
                  <div className='max-h-fit py-2'>
                    <p className='text-base font-semibold'>"Lorem ipsum dolor sit amet consectetur. In nisl arcu risus at eu ipsum nunc magnis integer. Tristique aliquam risus mauris vitae adipiscing sit eget tristique."</p>
                  </div>
                </SwiperSlide>

                <SwiperSlide className='max-h-[300px] w-full mt-2 mb-12 bg-red-50 p-6 md:p-12 rounded-[8px] relative overflow-hidden '>
                  {/* <div className='h-[100px] w-[100px] absolute top-0 right-0 bg-[#DA0C0C] rotate-45 -z-20'>

                  </div> */}
                  <div className='flex flex-col'>
                    <p className='text-lg font-bold text-[#DA0C0C] capitalize'>Ayesh hiruni</p>
                    <p className='capitalize text-sm font-medium text-gray-500 '>Selan Bank</p>
                  </div>
                  <div className='h-[1px] w-full bg-red-100 my-4'></div>
                  <div className='max-h-fit py-2'>
                    <p className='text-base font-semibold'>"Lorem ipsum dolor sit amet consectetur. In nisl arcu risus at eu ipsum nunc magnis integer. Tristique aliquam risus mauris vitae adipiscing sit eget tristique."</p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

        </div>
      </section>
      
    </div>

  )
}

export default CountriesScreen



//  <section>
//         <div>
//           <div className='w-full h-fit max-w-[1100px] mx-auto bg-white bg-red-50 shadow-[0px_4px_25px_rgba(0,0,0,0.05)] -mt-[125px] relative z-10 md:gap-4 p-6 rounded-[16px]'>
//             <div className='w-full mx-auto flex items-center justify-around '>

//               <div className='flex flex-col gap-2 items-center justify-center'>
//                 <IoDocuments className='text-2xl text-[#DA0C0C]'/>
//                 <p className='text-lg font-semibold text-[#DA0C0C]'>Apply online</p>
//               </div>

//               <div className='flex flex-col gap-2 items-center justify-center'>
//                 <BiSolidMessageSquareDetail  className='text-2xl text-[#DA0C0C]'/>
//                 <p className='text-lg font-semibold text-[#DA0C0C]'>About Us</p>
//               </div>

//               <div className='flex flex-col gap-2 items-center justify-center'>
//                 <FaCalendarAlt  className='text-2xl text-[#DA0C0C]'/>
//                 <p className='text-lg font-semibold text-[#DA0C0C]'>Calender</p>
//               </div>

                            
//             {
//               loading?
//               "":
//               countries?
//               countries.map(i => (
//                 <Link key={i.slug} to={`/countries/${i.slug}`} className='bg-white min-w-[300px] max-w-[400px] h-[200px] border-1 border-gray-200 gap-8 flex flex-col rounded-[8px] relative overflow-hidden hover:scale-105 duration-500'>
//                   <div className='h-full p-6 flex flex-col justify-between'>
//                     <div className='flex flex-col relative z-30'>
//                       <p className='text-4xl font-bold text-white'>{i.name}</p>
//                     </div>
//                     <div className='flex items-center gap-4 relative z-30'>
//                       <Button radius='full' isIconOnly variant='solid' className='bg-red-600 text-white bg-red-50 shadow-[0px_4px_25px_rgba(0,0,0,0.05)] ' startContent={<IoArrowForwardOutline/>}>

//                       </Button>
//                       <p className='text-xs text-gray-100'>Learn more</p>
//                     </div>
//                   </div>
//                   <div className='h-full w-full bg-red-50 absolute rounded-full flex items-start justify-start z-0'>
                    
//                     <img src={i.image} alt='' className='h-full w-full object-cover absolute z-0' />
//                     <div className='h-full w-full bg-gradient-to-t from-black to-transparent absolute z-30'></div>
//                   </div>
//                 </Link>
//               ))
//               :
//               ""
//             }

//             </div>
//           </div>
//         </div>
//       </section>