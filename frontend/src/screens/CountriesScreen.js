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
      <section className='h-fit w-full'>
        <img src='https://images.unsplash.com/photo-1518317507427-5346735246ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' className='h-[300px] w-full object-cover object-top' />
      </section>
     

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
          <div className='w-full max-w-[1024px] mx-auto flex justify-between items-center'>
            <div className='flex flex-col pb-8'>
              <p className='uppercase text-xs '>Unlock Your Future</p>
              <p className='text-2xl md:text-4xl font-bold text-[#DA0C0C]'>Our Countries</p>
            </div>
            <div>
              <IoMdArrowRoundForward className='text-[#DA0C0C] text-2xl'/>
            </div>
          </div>
          <div className='h-fit w-full object-cover relative overflow-hidden bg-[#ffecef] py-8'>
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

      <section className='w-full h-fit relative '>
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
      </section>

      <section className='h-fit w-full'>
        <div className='w-full h-fit max-w-[1024px] mx-auto bg-white relative z-10 md:gap-4 px-8'>
          <div className='flex flex-col pb-8'>
            <p className='uppercase text-xs font-semibold opacity-50'>Study Abroad</p>
            <p className='text-2xl md:text-4xl font-bold text-[#DA0C0C] text-left'>MEDICINE</p>
          </div>
          <div className='w-fit mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>

            <div className='min-h-full w-full lg:w-[300px] p-8 bg-red-50 rounded-[8px] flex flex-col gap-4'>
              <p className='text-lg font-semibold'>Admission Requirements</p>
              <div className='px-4 '>
                <li className='text-sm opacity-75'>
                  Institutions set criteria for international students, including English proficiency exams.
                </li>
              </div>
            </div>

            <div className='min-h-full w-full lg:w-[300px] p-8 bg-red-50 rounded-[8px] flex flex-col gap-4'>
              <p className='text-lg font-semibold'>Selection of Universities
              </p>
              <div className='px-4 '>
                <li className='text-sm opacity-75'>
                IEBC aids in choosing suitable institutions based on academic and financial fit.
                </li>
              </div>
            </div>

            <div className='min-h-full w-full lg:w-[300px] p-8 bg-red-50 rounded-[8px] flex flex-col gap-4'>
              <p className='text-lg font-semibold'>Career Counselling
              </p>
              <div className='px-4 '>
                <li className='text-sm opacity-75'>
                Tailored advice on program selection and study abroad decisions for students.
                </li>
              </div>
            </div>

            <div className='min-h-full w-full lg:w-[300px] p-8 bg-red-50 rounded-[8px] flex flex-col gap-4'>
              <p className='text-lg font-semibold'>Accommodation & Travel Arrangement
              </p>
              <div className='px-4 '>
                <li className='text-sm opacity-75'>
                Assistance with visa-approved travel plans and settling in new accommodations abroad.
                </li>
              </div>
            </div>

            <div className='min-h-full w-full lg:w-[300px] p-8 bg-red-50 rounded-[8px] flex flex-col gap-4'>
              <p className='text-lg font-semibold'>Interview Preparation & Pre-departure Briefing

              </p>
              <div className='px-4 '>
                <li className='text-sm opacity-75'>
                  Preparation for challenges of studying abroad, including accommodation and travel 
                  arrangements.
                </li>
              </div>
            </div>

            <div className='min-h-full w-full lg:w-[300px] p-8 bg-red-50 rounded-[8px] flex flex-col gap-4'>
              <p className='text-lg font-semibold'>Document Processing</p>
              <div className='px-4 '>
                <li className='text-sm opacity-75'>
                Guidance on compiling essential documents for visa applications and immigration requirements.
                </li>
              </div>
            </div>

          

          </div>
        </div>
      </section>

      <section className='h-fit w-full'>
        <div className='w-full h-fit max-w-[1024px] mx-auto bg-white relative z-10 md:gap-4 px-8'>
          <div className='flex flex-col pb-8'>
            <p className='uppercase text-xs font-semibold opacity-50'>Study Abroad</p>
            <p className='text-2xl md:text-4xl font-bold text-[#DA0C0C] text-left'>BENEFITS OF STUDYING ABROAD
            </p>
          </div>
          <div className='w-fit mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>

            <div className='min-h-full w-full lg:w-[300px] p-8 bg-red-50 rounded-[8px] flex flex-col gap-4'>
              <p className='text-lg font-semibold'>International Exposure</p>
              <div className='px-4 '>
                <li className='text-sm opacity-75'>
                Gain diverse skills, manage studies and jobs, multicultural learning environment..
                </li>
              </div>
            </div>

            <div className='min-h-full w-full lg:w-[300px] p-8 bg-red-50 rounded-[8px] flex flex-col gap-4'>
              <p className='text-lg font-semibold'>Enhance Your CV
              </p>
              <div className='px-4 '>
                <li className='text-sm opacity-75'>
                Demonstrates adaptability, cultural openness, problem-solving in diverse environments.

                </li>
              </div>
            </div>

            <div className='min-h-full w-full lg:w-[300px] p-8 bg-red-50 rounded-[8px] flex flex-col gap-4'>
              <p className='text-lg font-semibold'>Learn Self-Reliance              </p>
              <div className='px-4 '>
                <li className='text-sm opacity-75'>
                Develop independence, manage finances, navigate daily life in foreign settings.

                </li>
              </div>
            </div>

            <div className='min-h-full w-full lg:w-[300px] p-8 bg-red-50 rounded-[8px] flex flex-col gap-4'>
              <p className='text-lg font-semibold'>Gain a Global Mindset

              </p>
              <div className='px-4 '>
                <li className='text-sm opacity-75'>
                Broaden horizons, understand global issues, cultural awareness, effective communication.
                </li>
              </div>
            </div>

            <div className='min-h-full w-full lg:w-[300px] p-8 bg-red-50 rounded-[8px] flex flex-col gap-4'>
              <p className='text-lg font-semibold'>Top Quality Education
              </p>
              <div className='px-4 '>
                <li className='text-sm opacity-75'>
                Studying abroad exposes you to world-class education systems, fostering academic excellence and global perspectives.
                </li>
              </div>
            </div>

            <div className='min-h-full w-full lg:w-[300px] p-8 bg-red-50 rounded-[8px] flex flex-col gap-4'>
              <p className='text-lg font-semibold'>Career Opportunities</p>
              <div className='px-4 '>
                <li className='text-sm opacity-75'>
                International study enhances your CV, showing employers your adaptability and global mindset, opening doors to diverse career opportunities.
                </li>
              </div>
            </div>

            <div className='min-h-full w-full lg:w-[300px] p-8 bg-red-50 rounded-[8px] flex flex-col gap-4'>
              <p className='text-lg font-semibold'>International Travel
              </p>
              <div className='px-4 '>
                <li className='text-sm opacity-75'>
                Studying abroad isn't just about education; it's a life-changing adventure that broadens your cultural understanding and personal growth through international travel.
                </li>
              </div>
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