import React, { useEffect, useState } from 'react'
import {Input} from "@nextui-org/react";
import { VscSymbolKeyword } from "react-icons/vsc";
import {Button} from "@nextui-org/button";
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
import { getCountryList } from '../actions/abroadActions';
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

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay, FreeMode } from 'swiper/modules';
import ReactPlayer from 'react-player'


const CountriesScreen = () => {
  // const WebView = require('@luxbit/react-electron-webview');

  const [selected, setSelected] = React.useState("london");

  const dispatch = useDispatch()
  const history = useNavigate()
  const location = useLocation()

  const countryList = useSelector(state => state.countryList)
  const { error, loading, countries } = countryList

  useEffect(() => {
    dispatch(getCountryList())
  }, [dispatch])


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

  return ( 
    <div className='flex flex-col gap-12 pb-12'>
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

      <section className='w-full h-fit relative bg-[#ffecef] '>

          <div className='h-fit md:h-[500px] w-full max-w-[1100px] mx-auto object-cover relative overflow-hidden bg-[#ffecef] py-6 md:py-0 grid grid-cols-1 md:grid-cols-10'>
            <div className='h-[350px] md:h-full w-full md:col-span-4 flex flex-col justify-center gap-4 '>
              <p className='text-4xl font-black'>Get your free study abroad counselling with IEBC</p>
              <Button className='w-fit font-medium bg-[#DA0C0C] text-white'>
                Acquire your dreams
              </Button>
            </div>
            <div className='h-fit md:h-full w-full md:col-span-6 md:py-16'>
              <WorldMap className="w-full h-full"/>
            </div>
          </div>

      </section>

      <section className='h-fit w-full'>
          <div className='w-full h-fit max-w-[1100px] mx-auto bg-white relative z-10 md:gap-4 px-6'>
            <div className='flex flex-col pb-8'>
              <p className='uppercase text-xs font-semibold opacity-50 text-center'>Study Abroad</p>
              <p className='text-2xl md:text-4xl font-bold text-[#DA0C0C] text-center'>Our Countries</p>
            </div>
            <div className='w-fit mx-auto grid-cols-2 sm:flex flex-wrap items-center justify-center gap-4'>

            {
              loading?
              "":
              countries?
              countries.filter(f => f.category.slug == 'main').map(i => (
                <Link key={i.slug} to={`/countries/${i.slug}`} className='bg-white w-full sm:w-[175px] h-[125px] border-1 border-gray-200 gap-8 flex flex-col rounded-[8px] relative overflow-hidden duration-500'>
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
              :
              ""
            }

            </div>
          </div>
      </section>

      <section className='h-fit w-full'>
          <div className='w-full h-fit max-w-[1100px] mx-auto bg-white relative z-10 md:gap-4 px-8'>
            <div className='flex flex-col pb-8'>
              <p className='uppercase text-xs font-semibold opacity-50 text-center'>Study Abroad</p>
              <p className='text-2xl md:text-4xl font-bold text-[#DA0C0C] text-center'>EU COUNTRIES
              </p>
            </div>
            <div className='w-fit mx-auto flex flex-wrap items-center justify-center gap-4 md:gap-6'>

            {
              loading?
              "":
              countries?
              countries.filter(f => f.category.slug == 'eu').map(i => (
                <Link key={i.slug} to={`/countries/${i.slug}`} className='bg-white w-full sm:w-[200px] h-[150px] border-1 border-gray-200 gap-8 flex flex-col rounded-[8px] relative overflow-hidden duration-500'>
                  <div className='h-full p-6 flex flex-row justify-between'>
                    <div className='flex flex-col relative z-30 gap-1 mt-auto'>
                      <p className='text-2xl font-bold text-white'>{i.name}</p>
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
              :
              ""
            }

            </div>
          </div>
      </section>

      <section className='h-fit w-full'>
          <div className='w-full h-fit max-w-[1100px] mx-auto bg-white relative z-10 md:gap-4 px-8'>
            <div className='flex flex-col pb-8'>
              <p className='uppercase text-xs font-semibold opacity-50 text-center'>Study Abroad</p>
              <p className='text-2xl md:text-4xl font-bold text-[#DA0C0C] text-center'>MEDICINE</p>
            </div>
            <div className='w-fit mx-auto flex flex-wrap items-center justify-center gap-4 md:gap-6'>

            {
              loading?
              "":
              countries?
              countries.filter(f => f.category.slug == 'medicine').map(i => (
                <Link key={i.slug} to={`/countries/${i.slug}`} className='bg-white w-full sm:w-[200px] h-[150px] border-1 border-gray-200 gap-8 flex flex-col rounded-[8px] relative overflow-hidden duration-500'>
                  <div className='h-full p-6 flex flex-row justify-between'>
                    <div className='flex flex-col relative z-30 gap-1 mt-auto'>
                      <p className='text-2xl font-bold text-white'>{i.name}</p>
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
              :
              ""
            }

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
                <p className='text-2xl md:text-4xl font-bold text-[#DA0C0C] text-center'>WHY CHOOSE US?</p>
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
          
          <div className='w-full flex flex-col gap-4 text-justify'>
            <p className='text-2xl md:text-4xl font-bold text-[#DA0C0C] text-center'>IMMIGRATION SERVICES</p>
            <div className='flex flex-col gap-4 w-full'>
              
              <Accordion defaultExpandedKeys={["Admission Requirements"]} aria-label="Options">
                <AccordionItem key="Admission Requirements" title={
                  <p className='text-lg font-semibold'>Admission Requirements</p>
                }>
                  <div className='flex flex-col gap-1 bg-gradient-to-b from-red-200 to-transparent py-8 px-4 rounded-[8px] mb-2'>
                      <p className='text-base text-black text-justify'>Institutions set criteria for international students, including English proficiency exams.
                      </p>
                  </div>  
                </AccordionItem>
                <AccordionItem key="Selection of Universities" title={
                  <p className='text-lg font-semibold'>Selection of Universities</p>
                }>
                  <div className='flex flex-col gap-1 bg-gradient-to-b from-red-200 to-transparent py-8 px-4 rounded-[8px] mb-2'>
                    <p className='text-base text-black text-justify'>IEBC aids in choosing suitable institutions based on academic and financial fit.</p>
                  </div> 
                </AccordionItem>
                <AccordionItem key="Career Counselling" title={
                  <p className='text-lg font-semibold'>Career Counselling</p>
                }>
                  <div className='flex flex-col gap-1 bg-gradient-to-b from-red-200 to-transparent py-8 px-4 rounded-[8px] mb-2'>
                    <p className='text-base text-black text-justify'>Tailored advice on program selection and study abroad decisions for students.</p>
                  </div>  
                </AccordionItem>
                <AccordionItem key="Accommodation & Travel Arrangement" title={
                  <p className='text-lg font-semibold'>Accommodation & Travel Arrangement</p>
                }>
                  <div className='flex flex-col gap-1 bg-gradient-to-b from-red-200 to-transparent py-8 px-4 rounded-[8px] mb-2'>
                    <p className='text-base text-black text-justify'>Assistance with visa-approved travel plans and settling in new accommodations abroad.</p>
                  </div>
                </AccordionItem>
                <AccordionItem key="Interview Preparation & Pre-departure Briefing" title={
                  <p className='text-lg font-semibold'>Interview Preparation & Pre-departure Briefing</p>
                }>
                  <div className='flex flex-col gap-1 bg-gradient-to-b from-red-200 to-transparent py-8 px-4 rounded-[8px] mb-2'>
                    <p className='text-base text-black text-justify'>Preparation for challenges of studying abroad, including accommodation and travel 
                    arrangements.</p>
                  </div>
                </AccordionItem>
                <AccordionItem key="Document Processing" title={
                  <p className='text-lg font-semibold'>Document Processing</p>
                }>
                  <div className='flex flex-col gap-1 bg-gradient-to-b from-red-200 to-transparent py-8 px-4 rounded-[8px] mb-2'>
                    <p className='text-base text-black text-justify'>Guidance on compiling essential documents for visa applications and immigration requirements.</p>
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

      <section className='h-fit w-full bg-red-50 py-8 lg:py-12'>
        <div className='h-fit w-full max-w-[1100px] mx-auto px-8 flex flex-col'>
          
          <div className='w-full flex flex-col md:flex-row gap-8 text-justify md:justify-between'>
            <div className='lg:max-w-[350px] flex flex-col gap-2'>
              <p className='text-2xl md:text-4xl font-bold text-[#DA0C0C] text-left'>IMMIGRATION SERVICES</p>
              <p className=''>IEBC ensures a smooth travel for your educational purpose abroad. Start with our free counselling first</p>
              <Button endContent={
                    <GrFormNextLink />
                } className='w-fit font-medium bg-[#DA0C0C] text-white mt-4'>
                Explore our student services
              </Button>
            </div>
            <div className='flex flex-col gap-4 w-full max-w-md'>
              <p className='text-xl font-semibold'>Book an Appointment</p>
              <div className='w-full flex flex-col gap-4 '>
                <Input isClearable  variant='flat' type='text' placeholder='Name'></Input>
                <Input isClearable  variant='flat' type='email' placeholder='Email'></Input>
                <Input isClearable  variant='flat' type='number' placeholder='Mobile number' startContent={
                  <div className="pointer-events-none flex items-center">
                    <span className="text-default-400 text-small">+94</span>
                  </div>
                }></Input>
                <div className='h-fit w-fit relative flex'>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    showTimeSelect
                    filterTime={filterTime}
                    filterDate={filterDate}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    timeIntervals={30}
                    minTime={setHours(setMinutes(new Date(), 0), 9)}
                    maxTime={setHours(setMinutes(new Date(), 0), 17)}
                    placeholderText="Select a date and time"
                    className='min-w-[100%] w-full flex py-3 px-2 rounded-[8px] text-sm outline-none cursor-pointer bg-gray-100 shadow-sm hover:opacity-50'
                  />
                  <div className='absolute top-1/2  transform right-2 -translate-y-1/2'>
                    <IoCalendar/>
                  </div>
                </div>
                <Select 
                    className="w-full" 
                    // selectedKeys={pLocation}
                    // onSelectionChange={setPLocation}
                    variant=''
                    placeholder='Preferred Study Destination'
                    required
                    size='md'

                >
                    {
                      loading?
                      "":
                      countries?
                      countries.map(i => (
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
                    placeholder='Year of Study'
                    required
                    size='md'

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
                <Select 
                    className="w-full" 
                    // selectedKeys={pLocation}
                    // onSelectionChange={setPLocation}
                    variant=''
                    placeholder='Study Intake'
                    required
                    size='md'

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
                <Button variant='solid' color='danger' endContent={
                    <GrFormNextLink />
                } className='w-fit font-medium bg-[#DA0C0C] text-white mt-4'>
                  Book now
                </Button>
              </div>             
            </div>
          </div>
        </div>
      </section>

      <section className='h-fit w-full '>
        <div className='h-fit w-full max-w-[1100px] mx-auto px-8 flex flex-col '>
          
          <div className='w-full flex flex-col gap-4 text-justify'>
            <p className='text-2xl md:text-4xl font-bold text-[#DA0C0C] text-center'>BENEFITS OF STUDYING ABROAD</p>
            <div className='flex flex-col gap-4 w-full'>
              
              <Accordion defaultExpandedKeys={["International Exposure "]} aria-label="Options">
                <AccordionItem key="International Exposure " title={
                  <p className='text-lg font-semibold'>International Exposure </p>
                }>
                  <div className='flex flex-col gap-1 bg-gradient-to-b from-red-200 to-transparent py-8 px-4 rounded-[8px] mb-2'>
                      <p className='text-base text-black text-justify'>Gain diverse skills, manage studies and jobs, multicultural learning environment.
                      </p>
                  </div>  
                </AccordionItem>
                <AccordionItem key="Enhance Your CV" title={
                  <p className='text-lg font-semibold'>Enhance Your CV</p>
                }>
                  <div className='flex flex-col gap-1 bg-gradient-to-b from-red-200 to-transparent py-8 px-4 rounded-[8px] mb-2'>
                    <p className='text-base text-black text-justify'>Demonstrates adaptability, cultural openness, problem-solving in diverse environments..</p>
                  </div> 
                </AccordionItem>
                <AccordionItem key="Learn Self-Reliance" title={
                  <p className='text-lg font-semibold'>Learn Self-Reliance</p>
                }>
                  <div className='flex flex-col gap-1 bg-gradient-to-b from-red-200 to-transparent py-8 px-4 rounded-[8px] mb-2'>
                    <p className='text-base text-black text-justify'>Develop independence, manage finances, navigate daily life in foreign settings.</p>
                  </div>  
                </AccordionItem>
                <AccordionItem key="Gain a Global Mindset" title={
                  <p className='text-lg font-semibold'>Gain a Global Mindset</p>
                }>
                  <div className='flex flex-col gap-1 bg-gradient-to-b from-red-200 to-transparent py-8 px-4 rounded-[8px] mb-2'>
                    <p className='text-base text-black text-justify'>Broaden horizons, understand global issues, cultural awareness, effective communication.</p>
                  </div>
                </AccordionItem>
                <AccordionItem key="Top Quality Education" title={
                  <p className='text-lg font-semibold'>Top Quality Education</p>
                }>
                  <div className='flex flex-col gap-1 bg-gradient-to-b from-red-200 to-transparent py-8 px-4 rounded-[8px] mb-2'>
                    <p className='text-base text-black text-justify'>Studying abroad exposes you to world-class education systems, fostering academic excellence and 
                    global perspectives.</p>
                  </div>
                </AccordionItem>
                <AccordionItem key="Career Opportunities" title={
                  <p className='text-lg font-semibold'>Career Opportunities</p>
                }>
                  <div className='flex flex-col gap-1 bg-gradient-to-b from-red-200 to-transparent py-8 px-4 rounded-[8px] mb-2'>
                    <p className='text-base text-black text-justify'>International study enhances your CV, showing employers your adaptability and global mindset, opening doors to diverse career opportunities.</p>
                  </div>
                </AccordionItem>
                <AccordionItem key="International Travel" title={
                  <p className='text-lg font-semibold'>International Travel</p>
                }>
                  <div className='flex flex-col gap-1 bg-gradient-to-b from-red-200 to-transparent py-8 px-4 rounded-[8px] mb-2'>
                    <p className='text-base text-black text-justify'>Studying abroad isn't just about education; it's a life-changing adventure that broadens your cultural 
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
      </section>

      <section className='h-fit w-full '>
        <div className='h-fit w-full max-w-[1100px] mx-auto px-8 flex flex-col gap-6'>
          <p className='text-2xl md:text-4xl font-bold text-[#DA0C0C] text-center'>LANGUAGE ENTRY TEST</p>
          <div className='h-fit w-full flex flex-col md:flex-row gap-6 lg:gap-12'>      
            
            <div className='w-full flex flex-col gap-4 text-justify'>
              
                <p>For students aspiring to study abroad in English-taught programs, proving English language proficiency is a crucial requirement. Numerous standardized tests are recognized globally to assess non-native speakers'English skills. These exams are designed to evaluate the ability to understand lectures, participate in discussions, and complete academic assignments.
                </p>

                <p>
                Commonly accepted English proficiency tests include IELTS Academic, TOEFL iBT, PTE Academic, C1 Advanced, and B2 First. While these tests share similarities, each has unique features and formats. 

                </p>

                <p>Each test has specific scoring criteria and expiration policies, typically requiring scores to be recent (within two years). Prospective students should verify the specific test requirements of their chosen universities to ensure they meet the necessary standards. Preparation resources, including practice tests, are available online to help candidates choose the best test for their needs.</p>
            </div>

          </div>
        </div>
      </section>

      <section className='h-fit w-full '>
        <div className='h-fit w-full max-w-[1100px] mx-auto px-8 flex flex-col gap-6'>
          <p className='text-2xl md:text-4xl font-bold text-[#DA0C0C] text-center'>LIVING ABROAD</p>
          {/* <div className='h-fit max-w-full grid grid-cols-1 md:grid-cols-2 gap-4'>
            <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2Fiebc.lk%2Fvideos%2F390059596804608%2F&show_text=false&width=560&t=0" className='w-full h-[300px] object-cover' frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
            
            <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2Fiebc.lk%2Fvideos%2F1113865666370498%2F&show_text=false&width=560&t=0" className='w-full h-[300px] object-cover' frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>

            <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2Fiebc.lk%2Fvideos%2F1113865666370498%2F&show_text=false&width=560&t=0" className='w-full h-[300px] object-cover' frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>

            <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2FIEBCGlobal%2Fvideos%2F137729791776490%2F&show_text=false&width=560&t=0" className='w-full h-[300px] object-cover' frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
          </div> */}
          <div className='h-fit w-full flex flex-col md:flex-row gap-6 lg:gap-12'>      
            
            <div className='w-full flex flex-col gap-4 text-justify'>
              
                <p>
                  Adjusting to life abroad involves navigating a new culture, managing daily responsibilities, and building a support network. Initially, acclimating to a different culture, language, and traditions can be both challenging and exciting, and culture shock is a common experience that can be overwhelming for some.
                </p>
                <p>
                  Living abroad also means taking on various responsibilities, such as doing your laundry, cooking meals, and balancing studies, often while working part-time. Tackling these tasks with a positive attitude and organizational skills is crucial.
                </p>
                <p>
                  Lastly, creating a support network by making friends, engaging in communal activities, and embracing the opportunities of student life abroad helps you feel more comfortable and at home in your new environment. This sense of belonging can make the experience so fulfilling that you may not want to leave.
                </p>
            </div>

          </div>
        </div>
      </section>
    </div>

  )
}

export default CountriesScreen



//  <section>
//         <div>
//           <div className='w-full h-fit max-w-[1100px] mx-auto bg-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] -mt-[125px] relative z-10 md:gap-4 p-6 rounded-[16px]'>
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
//                       <Button radius='full' isIconOnly variant='solid' className='bg-red-600 text-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] ' startContent={<IoArrowForwardOutline/>}>

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