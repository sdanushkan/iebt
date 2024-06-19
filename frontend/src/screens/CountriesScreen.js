import React, { useEffect } from 'react'
import {Input} from "@nextui-org/react";
import { VscSymbolKeyword } from "react-icons/vsc";
import {Button} from "@nextui-org/button";
import { IoDocument, IoDocuments, IoSearch } from "react-icons/io5";
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

const CountriesScreen = () => {
  const [selected, setSelected] = React.useState("london");

  const dispatch = useDispatch()
  const history = useNavigate()
  const location = useLocation()

  const countryList = useSelector(state => state.countryList)
  const { error, loading, countries } = countryList

  useEffect(() => {
    dispatch(getCountryList())
  }, [dispatch])
  
  return ( 
    <div className='flex flex-col gap-12 pb-12'>
      {/* <section className='h-fit w-full relative px-8 bg-[#DA0C0C]'>
        <div className='h-fit w-full max-w-[1024px] mx-auto justify-center gap-6 grid grid-col-2 md:grid-cols-3 lg:grid-cols-4  text-white py-12 rounded-[16px]'>
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

      <section className='w-full h-fit relative '>

          <div className='h-fit w-full object-cover relative overflow-hidden bg-[#ffecef] py-16'>
            <WorldMap className="w-full"/>
          </div>

      </section>

      <section className='h-fit w-full'>
          <div className='w-full h-fit max-w-[1024px] mx-auto bg-white relative z-10 md:gap-4 px-8'>
            <div className='flex flex-col pb-8'>
              <p className='uppercase text-xs font-semibold opacity-50'>Study Abroad</p>
              <p className='text-2xl md:text-4xl font-bold text-[#DA0C0C] text-left'>Our Countries</p>
            </div>
            <div className='w-fit mx-auto flex flex-wrap items-center justify-center gap-8'>

            {
              loading?
              "":
              countries?
              countries.filter(f => f.category.slug == 'main').map(i => (
                <Link key={i.slug} to={`/countries/${i.slug}`} className='bg-white min-w-[200px] max-w-[400px] h-[150px] border-1 border-gray-200 gap-8 flex flex-col rounded-[8px] relative overflow-hidden duration-500'>
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
          <div className='w-full h-fit max-w-[1024px] mx-auto bg-white relative z-10 md:gap-4 px-8'>
            <div className='flex flex-col pb-8'>
              <p className='uppercase text-xs font-semibold opacity-50'>Study Abroad</p>
              <p className='text-2xl md:text-4xl font-bold text-[#DA0C0C] text-left'>EU COUNTRIES
              </p>
            </div>
            <div className='w-fit mx-auto flex flex-wrap items-center justify-center gap-8'>

            {
              loading?
              "":
              countries?
              countries.filter(f => f.category.slug == 'eu').map(i => (
                <Link key={i.slug} to={`/countries/${i.slug}`} className='bg-white min-w-[200px] max-w-[400px] h-[150px] border-1 border-gray-200 gap-8 flex flex-col rounded-[8px] relative overflow-hidden duration-500'>
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
          <div className='w-full h-fit max-w-[1024px] mx-auto bg-white relative z-10 md:gap-4 px-8'>
            <div className='flex flex-col pb-8'>
              <p className='uppercase text-xs font-semibold opacity-50'>Study Abroad</p>
              <p className='text-2xl md:text-4xl font-bold text-[#DA0C0C] text-left'>MEDICINE</p>
            </div>
            <div className='w-fit mx-auto flex flex-wrap items-center justify-center gap-8'>

            {
              loading?
              "":
              countries?
              countries.filter(f => f.category.slug == 'medicine').map(i => (
                <Link key={i.slug} to={`/countries/${i.slug}`} className='bg-white min-w-[200px] max-w-[400px] h-[150px] border-1 border-gray-200 gap-8 flex flex-col rounded-[8px] relative overflow-hidden duration-500'>
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
          <div className='w-full max-w-[1024px] mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16 justify-between px-8'>
            <div className='bg-black h-[300px] w-full md:w-[400px]'>
              <div className='bg-black h-[300px] w-full md:w-[400px] '>
                <img src='https://t3.ftcdn.net/jpg/03/17/75/96/360_F_317759691_tOGvURIzTXP5pyHfy33I5cQazw8fxK0g.jpg' alt='' className='h-full w-full object-cover' />
              </div>
            </div>
            <div className='w-fit flex flex-col gap-8'>
              <div className='flex flex-col'>
                <p className='uppercase text-xs font-semibold opacity-50'>Study Abroad</p>
                <p className='text-2xl md:text-4xl font-bold text-[#DA0C0C]'>WHY CHOOSE US?</p>
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

      <section className='h-fit w-full bg-gradient-to-b from-red-100 to-transparent pt-12'>
        <div className='h-fit w-full max-w-[1024px] mx-auto px-8 flex flex-col'>
          
          <div className='w-full flex flex-col gap-4'>
            <p className='text-2xl md:text-4xl font-bold text-[#DA0C0C]'>IMMIGRATION SERVICES</p>
            <div className='flex flex-col gap-4 w-full'>
              
              <Accordion defaultExpandedKeys={["Admission Requirements"]} aria-label="Options">
                <AccordionItem key="Admission Requirements" title={
                  <p className='text-base font-medium'>Admission Requirements</p>
                }>
                  <div className='flex flex-col gap-1'>
                      <p className='text-sm text-black opacity-50 text-justify'>Institutions set criteria for international students, including English proficiency exams.
                      </p>
                  </div>  
                </AccordionItem>
                <AccordionItem key="Selection of Universities" title={
                  <p className='text-base font-medium'>Selection of Universities</p>
                }>
                  <div className='flex flex-col gap-1'>
                    <p className='text-sm text-black opacity-50 text-justify'>IEBC aids in choosing suitable institutions based on academic and financial fit.</p>
                  </div> 
                </AccordionItem>
                <AccordionItem key="Career Counselling" title={
                  <p className='text-base font-medium'>Career Counselling</p>
                }>
                  <div className='flex flex-col gap-1'>
                    <p className='text-sm text-black opacity-50 text-justify'>Tailored advice on program selection and study abroad decisions for students.</p>
                  </div>  
                </AccordionItem>
                <AccordionItem key="Accommodation & Travel Arrangement" title={
                  <p className='text-base font-medium'>Accommodation & Travel Arrangement</p>
                }>
                  <div className='flex flex-col gap-1'>
                    <p className='text-sm text-black opacity-50 text-justify'>Assistance with visa-approved travel plans and settling in new accommodations abroad.</p>
                  </div>
                </AccordionItem>
                <AccordionItem key="Interview Preparation & Pre-departure Briefing" title={
                  <p className='text-base font-medium'>Interview Preparation & Pre-departure Briefing</p>
                }>
                  <div className='flex flex-col gap-1'>
                    <p className='text-sm text-black opacity-50 text-justify'>Preparation for challenges of studying abroad, including accommodation and travel 
                    arrangements.</p>
                  </div>
                </AccordionItem>
                <AccordionItem key="Document Processing" title={
                  <p className='text-base font-medium'>Document Processing</p>
                }>
                  <div className='flex flex-col gap-1'>
                    <p className='text-sm text-black opacity-50 text-justify'>Guidance on compiling essential documents for visa applications and immigration requirements.</p>
                  </div>
                </AccordionItem>
              </Accordion> 
              
            </div>
          </div>
                <Button variant='light' color='danger' className='w-fit mx-auto'>
                Lern more
              </Button>
        </div>
      </section>

      <section className='h-fit w-full bg-gradient-to-b from-red-100 to-transparent pt-12'>
        <div className='h-fit w-full max-w-[1024px] mx-auto px-8 flex flex-col '>
          
          <div className='w-full flex flex-col gap-4'>
            <p className='text-2xl md:text-4xl font-bold text-[#DA0C0C]'>BENEFITS OF STUDYING ABROAD</p>
            <div className='flex flex-col gap-4 w-full'>
              
              <Accordion defaultExpandedKeys={["International Exposure "]} aria-label="Options">
                <AccordionItem key="International Exposure " title={
                  <p className='text-base font-medium'>International Exposure </p>
                }>
                  <div className='flex flex-col gap-1'>
                      <p className='text-sm text-black opacity-50 text-justify'>Gain diverse skills, manage studies and jobs, multicultural learning environment.
                      </p>
                  </div>  
                </AccordionItem>
                <AccordionItem key="Enhance Your CV" title={
                  <p className='text-base font-medium'>Enhance Your CV</p>
                }>
                  <div className='flex flex-col gap-1'>
                    <p className='text-sm text-black opacity-50 text-justify'>Demonstrates adaptability, cultural openness, problem-solving in diverse environments..</p>
                  </div> 
                </AccordionItem>
                <AccordionItem key="Learn Self-Reliance" title={
                  <p className='text-base font-medium'>Learn Self-Reliance</p>
                }>
                  <div className='flex flex-col gap-1'>
                    <p className='text-sm text-black opacity-50 text-justify'>Develop independence, manage finances, navigate daily life in foreign settings.</p>
                  </div>  
                </AccordionItem>
                <AccordionItem key="Gain a Global Mindset" title={
                  <p className='text-base font-medium'>Gain a Global Mindset</p>
                }>
                  <div className='flex flex-col gap-1'>
                    <p className='text-sm text-black opacity-50 text-justify'>Broaden horizons, understand global issues, cultural awareness, effective communication.</p>
                  </div>
                </AccordionItem>
                <AccordionItem key="Top Quality Education" title={
                  <p className='text-base font-medium'>Top Quality Education</p>
                }>
                  <div className='flex flex-col gap-1'>
                    <p className='text-sm text-black opacity-50 text-justify'>Studying abroad exposes you to world-class education systems, fostering academic excellence and 
                    global perspectives.</p>
                  </div>
                </AccordionItem>
                <AccordionItem key="Career Opportunities" title={
                  <p className='text-base font-medium'>Career Opportunities</p>
                }>
                  <div className='flex flex-col gap-1'>
                    <p className='text-sm text-black opacity-50 text-justify'>International study enhances your CV, showing employers your adaptability and global mindset, opening doors to diverse career opportunities.</p>
                  </div>
                </AccordionItem>
                <AccordionItem key="International Travel" title={
                  <p className='text-base font-medium'>International Travel</p>
                }>
                  <div className='flex flex-col gap-1'>
                    <p className='text-sm text-black opacity-50 text-justify'>Studying abroad isn't just about education; it's a life-changing adventure that broadens your cultural 
                    understanding and personal growth through international travel.</p>
                  </div>
                </AccordionItem>
              </Accordion> 
              
            </div>
          </div>
                <Button variant='light' color='danger' className='w-fit mx-auto'>
                Lern more
              </Button>
        </div>
      </section>

      <section className='h-fit w-full bg-gradient-to-b from-red-100 to-transparent pt-12'>
        <div className='h-fit w-full max-w-[1024px] mx-auto px-8 flex flex-col gap-6'>
          <p className='text-2xl md:text-4xl font-bold text-[#DA0C0C] text-center'>LANGUAGE ENTRY TEST</p>
          <div className='h-fit w-full flex flex-col md:flex-row gap-6 lg:gap-12'>      
            
            <div className='w-full flex flex-col gap-4'>
              
                <p>For students aspiring to study abroad in English-taught programs, proving English language proficiency is a crucial requirement. Numerous standardized tests are recognized globally to assess non-native speakers'English skills. These exams are designed to evaluate the ability to understand lectures, participate in discussions, and complete academic assignments.
                </p>

                <p>
                Commonly accepted English proficiency tests include IELTS Academic, TOEFL iBT, PTE Academic, C1 Advanced, and B2 First. While these tests share similarities, each has unique features and formats. 

                </p>

                <p>Each test has specific scoring criteria and expiration policies, typically requiring scores to be recent (within two years). Prospective students should verify the specific test requirements of their chosen universities to ensure they meet the necessary standards. Preparation resources, including practice tests, are available online to help candidates choose the best test for their needs</p>
            </div>

          </div>
        </div>
      </section>
      <section className='h-fit w-full bg-gradient-to-b from-red-100 to-transparent pt-12'>
        <div className='h-fit w-full max-w-[1024px] mx-auto px-8 flex flex-col gap-6'>
          <p className='text-2xl md:text-4xl font-bold text-[#DA0C0C] text-center'>LIVING ABROAD</p>
          <div className='h-fit w-full flex flex-col md:flex-row gap-6 lg:gap-12'>      
            
            <div className='w-full flex flex-col gap-4'>
              
                <p>Adjusting to life abroad involves navigating a new culture, managing daily responsibilities, and building a support network. Initially, acclimating to a different culture, language, and traditions can be both challenging and exciting, and culture shock is a common experience that can be overwhelming for some.

                </p>

                <p>
                Living abroad also means taking on various responsibilities, such as doing your laundry, cooking meals, and balancing studies, often while working part-time. Tackling these tasks with a positive attitude and organizational skills is crucial.
                </p>

                <p>Lastly, creating a support network by making friends, engaging in communal activities, and embracing the opportunities of student life abroad helps you feel more comfortable and at home in your new environment. This sense of belonging can make the experience so fulfilling that you may not want to leave</p>
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
//           <div className='w-full h-fit max-w-[1024px] mx-auto bg-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] -mt-[125px] relative z-10 md:gap-4 p-6 rounded-[16px]'>
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