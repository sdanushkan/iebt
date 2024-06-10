import React, { useEffect } from 'react'
import {Input} from "@nextui-org/react";
import { VscSymbolKeyword } from "react-icons/vsc";
import {Button} from "@nextui-org/button";
import { IoSearch } from "react-icons/io5";
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
        <img src='https://images.unsplash.com/photo-1518317507427-5346735246ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' className='h-[400px] w-full object-cover object-top' />
      </section>
      <section>
        <div>
          <div className='w-full h-fit max-w-[1100px] mx-auto bg-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] -mt-[100px] relative z-10 md:gap-4 p-12'>
            <div className='w-fit mx-auto flex items-center justify-center gap-8'>

              <div className=''>
                <img src='https://media.istockphoto.com/id/916628666/vector/canada-flag-background.jpg?s=612x612&w=0&k=20&c=x7MS12w_WZ4xWAuRz_IIjMUZJWsNrqLh32TDfg19HTE=' alt='' className='h-[75px] w-[75px] rounded-full' />
              </div>
              <div className=''>
                <img src='https://t4.ftcdn.net/jpg/06/14/59/87/360_F_614598759_joekTPT7QvzTyL80b0FaYLP73zbnoG9L.jpg' alt='' className='h-[75px] w-[75px] rounded-full' />
              </div>

              <div className=''>
                <img src='https://images.pexels.com/photos/4386429/pexels-photo-4386429.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4386429.jpg&fm=jpg' alt='' className='h-[75px] w-[75px] rounded-full' />
              </div>

              <div className=''>
                <img src='https://media.istockphoto.com/id/882457870/photo/new-zealand-flag-a-series-of-flags-of-the-world.jpg?s=612x612&w=0&k=20&c=GLg_paFGm3iP82TcUFSNUzGVBcoT2dTVNQHn6b7tCBs=' alt='' className='h-[75px] w-[75px] rounded-full' />
              </div>
              <div className=''>
                <img src='https://carversreach.com.au/wp-content/uploads/2023/02/netherland-flag.jpg' alt='' className='h-[75px] w-[75px] rounded-full' />
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
      <section className='relative '>
          <div className='max-w-[1024px] mx-auto flex flex-col pb-8 px-8'>
            <p className='uppercase text-xs '>Unlock Your Future</p>
            <p className='text-2xl font-bold text-[#DA0C0C]'>Our Countries</p>
          </div>
          <div className='h-fit w-full object-cover relative overflow-hidden bg-[#ffecef] py-4'>
            <WorldMap className="w-full"/>
          </div>

      </section>

      <section className='h-fit w-full'>
          <div className='w-full h-fit max-w-[1100px] mx-auto bg-white relative z-10 md:gap-4 px-8'>
            <div className='w-fit mx-auto flex items-center justify-center gap-8'>

            {
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
            }

            </div>
          </div>
      </section>
    </div>

  )
}

export default CountriesScreen