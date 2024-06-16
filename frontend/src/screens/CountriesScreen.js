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
      <section>
        <div>
          <div className='w-full h-fit max-w-[1024px] mx-auto bg-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] -mt-[125px] relative z-10 md:gap-4 p-12 rounded-[16px]'>
            <div className='w-full mx-auto flex items-center justify-around gap-8'>

              <div className='flex flex-col gap-2 items-center justify-center'>
                <IoDocuments className='text-6xl text-[#DA0C0C]'/>
                <p className='text-xl font-semibold text-[#DA0C0C]'>Apply online</p>
              </div>

              <div className='flex flex-col gap-2 items-center justify-center'>
                <BiSolidMessageSquareDetail  className='text-6xl text-[#DA0C0C]'/>
                <p className='text-xl font-semibold text-[#DA0C0C]'>About Us</p>
              </div>

              <div className='flex flex-col gap-2 items-center justify-center'>
                <FaCalendarAlt  className='text-6xl text-[#DA0C0C]'/>
                <p className='text-xl font-semibold text-[#DA0C0C]'>Calender</p>
              </div>

                            
            {/* {
              loading?
              "":
              countries?
              countries.map(i => (
                <Link key={i.slug} to={`/countries/${i.slug}`} className='bg-white min-w-[300px] max-w-[400px] h-[200px] border-1 border-gray-200 gap-8 flex flex-col rounded-[8px] relative overflow-hidden hover:scale-105 duration-500'>
                  <div className='h-full p-6 flex flex-col justify-between'>
                    <div className='flex flex-col relative z-30'>
                      <p className='text-4xl font-bold text-white'>{i.name}</p>
                    </div>
                    <div className='flex items-center gap-4 relative z-30'>
                      <Button radius='full' isIconOnly variant='solid' className='bg-red-600 text-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] ' startContent={<IoArrowForwardOutline/>}>

                      </Button>
                      <p className='text-xs text-gray-100'>Learn more</p>
                    </div>
                  </div>
                  <div className='h-full w-full bg-red-50 absolute rounded-full flex items-start justify-start z-0'>
                    
                    <img src={i.image} alt='' className='h-full w-full object-cover absolute z-0' />
                    <div className='h-full w-full bg-gradient-to-t from-black to-transparent absolute z-30'></div>
                  </div>
                </Link>
              ))
              :
              ""
            } */}

            </div>
          </div>
        </div>
      </section>

      <section className='h-fit w-full relative px-8 bg-[#DA0C0C]'>
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
      </section>

      <section className='w-full h-fit relative '>
          <div className='w-full max-w-[1024px] mx-auto flex justify-between items-center'>
            <div className='flex flex-col pb-8 px-8'>
              <p className='uppercase text-xs '>Unlock Your Future</p>
              <p className='text-2xl md:text-4xl font-bold text-[#DA0C0C]'>Our Countries</p>
            </div>
            <div>
              <IoMdArrowRoundForward className='text-[#DA0C0C] text-2xl'/>
            </div>
          </div>
          <div className='h-fit w-full object-cover relative overflow-hidden bg-[#5a2c33]'>
            <WorldMap className="w-full"/>
          </div>

      </section>

      <section className='h-fit w-full'>
          <div className='flex flex-col pb-8 px-8'>
            <p className='text-2xl md:text-4xl font-bold text-[#DA0C0C] text-center'>Our Countries</p>
          </div>
          <div className='w-full h-fit max-w-[1024px] mx-auto bg-white relative z-10 md:gap-4 px-8'>
            <div className='w-fit mx-auto flex flex-wrap items-center justify-center gap-8'>

            {
              loading?
              "":
              countries?
              countries.map(i => (
                <Link key={i.slug} to={`/countries/${i.slug}`} className='bg-white min-w-[300px] max-w-[400px] h-[150px] border-1 border-gray-200 gap-8 flex flex-col rounded-[8px] relative overflow-hidden duration-500'>
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
                    <div className='h-full w-full bg-gradient-to-t from-black/75 to-transparent absolute z-30 hover:from-black duration-500'></div>
                  </div>
                </Link>
              ))
              :
              ""
            }

            </div>
          </div>
      </section>
    </div>

  )
}

export default CountriesScreen