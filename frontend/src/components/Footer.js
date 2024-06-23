import React, { useEffect } from 'react'
import logo from '../assets/Logo.png'

import logoAD from '../assets/logoAD.png'
import {Button} from "@nextui-org/react";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCourseList } from '../actions/courseActions';
import _ from 'lodash';
import { getCountryList } from '../actions/abroadActions';

const Footer = () => {
    const {course} = useParams()

    const dispatch = useDispatch()
    const history = useNavigate()
    const location = useLocation()

    const courseList = useSelector(state => state.courseList)
    const { error: courseListError, loading: courseListLoading, courses } = courseList

    const countryList = useSelector(state => state.countryList)
    const { error, loading, countries } = countryList

    useEffect(() => {
        dispatch(getCourseList())
        dispatch(getCountryList())
    }, [dispatch])

    useEffect(() => {
        window.scroll(0,0);
      }, [location]);
  return (
    <footer className={
      location.pathname =='/abroad'?
      'h-fit w-full bg-red-900 py-12':
      'h-fit w-full bg-[#DA0C0C] py-12'
    }>
      <div className='h-fit w-full max-w-[1200px] mx-auto flex flex-col md:flex-row gap-8 '>
        <div className='h-fit w-full px-8 md:px-0 md:w-[300px] flex flex-col items-center md:text-start mx-auto'>
          <div className={
            location.pathname == '/abroad'?
            'w-full flex items-center justify-center rounded-[8px]':
            'w-full flex bg-red-500 items-center justify-center rounded-[8px]'
          }>
            <img src={
              location.pathname == '/abroad'?
              logoAD:
              logo
            } alt='' className='min-h-[200px] min-w-[200px] object-contain mx-auto' />
          </div>        
          <p className={
            location.pathname == '/abroad' ?
            'text-base font-bold text-white uppercase text-center hidden':
            'text-base font-bold text-white uppercase text-center'
          }>International Education and Bussiness campus</p>
          <div className='h-[1px] w-full bg-red-100 mt-4'></div>
          <div className='py-4'>
            <Button isIconOnly startContent={<RiInstagramFill className='text-2xl text-white'/>} variant='light'>

            </Button>
            <Button isIconOnly startContent={<FaFacebook  className='text-2xl text-white'/>} variant='light'>

            </Button>
            <Button isIconOnly startContent={<FaLinkedin  className='text-2xl text-white'/>} variant='light'>

            </Button>
          </div>
        </div>
        <div className={
          location.pathname =='/abroad'?
          'h-fit grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 lg:gap-12':
          'h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-12'
        }>
          {
              location.pathname == '/abroad'?
              '':
              <div className='flex flex-col justify-center items-center md:items-start md:justify-start gap-2'>
                <p className='text-base font-bold border-b-[2px] border-[#DA0C0C] gap-6 h-[60px] flex items-end text-center md:text-left text-white'>AWARDING BODY QUALIFICATION</p>
                <div className='px-4 flex flex-col gap-2 py-2 md:py-4 order-1 text-center md:text-start'>
                  <Link to={`awarding-body/lrn-uk-qualification`} className='text-xs text-white/80'>LRN- British Qualification</Link>
                  <Link to={`awarding-body/othm-uk-qualification`} className='text-xs text-white/80'>OTHM- British Qualification</Link>
                  <Link to={`awarding-body/qualifi-uk-qualification`} className='text-xs text-white/80'>Qualifi- British Qualification</Link>
                </div>
              </div>
            }
          <div className='flex flex-col'>
            {
              location.pathname == '/abroad'?
              <div className='flex flex-col justify-center items-center md:items-start md:justify-start gap-2'>
                <p className='text-lg font-bold border-b-[2px] border-[#DA0C0C] gap-6 flex items-end text-center md:text-left text-white uppercase'>Destination</p>
                <div className='px-4 flex flex-col gap-2 order-1 text-center md:text-start'>
                  <p className='font-bold  gap-6 flex items-end text-center text-sm md:text-left text-white uppercase'>Popular countries</p>
                  <div className='flex gap-2'>
                    {
                      loading?
                      <Link className='text-xs text-white/80'></Link>
                      :
                      countries?
                      countries.filter(f => f.category.slug == 'main').map(i => 
                        <Link key={i.id} className='text-xs min-w-fit text-white/80'>{i.name}   |  </Link>
                      )
                      :

                      ''
                    }
                  </div>
                  {/* <Link className='text-xs text-white/80'>Level 3 (Foundation)</Link>
                  <Link className='text-xs text-white/80'>Level 4 and Level 5 (Higher Diploma)</Link>
                  <Link className='text-xs text-white/80'>Level 6 (Graduate Diploma)</Link>
                  <Link className='text-xs text-white/80'>Level 7 (Postgraduate Diploma)</Link>
                  <Link className='text-xs text-white/80'>Level 8 (Doctoral Diploma)</Link> */}
                </div>

                <div className='px-4 flex flex-col gap-2 order-1 text-center md:text-start'>
                  <p className='font-bold  gap-6 flex items-end text-center text-sm md:text-left text-white uppercase'>European countries</p>
                  <div className='flex w-[600px] flex-wrap gap-2 text-sm text-white/50 max-w-[600px]'>
                    <p>Austria </p> 
                    <p>Belgium</p> 
                    <p>Bulgaria</p>
                    <p>Croatia</p>
                    <p>Republic of Cyprus</p>
                    <p>Denmark</p>
                    <p>Estonia</p>
                    <p>Finland</p>
                    <p>France</p>
                    <p>Germany</p>
                    <p>Greece</p>
                    <p>Hungary</p>
                    <p>Ireland</p>
                    <p>Latvia</p>
                    <p>Malta</p>
                    <p>Netherlands</p>
                    <p>Luxembourg</p>
                    <p>Lithuania</p>
                    <p>Portugal</p>
                    <p>Latvia</p>
                    <p>Malta</p>
                    <p>Romania</p>
                    <p>Spain</p>
                    <p>Slovenia</p>
                    {/* {
                      loading?
                      <Link className='text-xs text-white/80'></Link>
                      :
                      countries?
                      countries.filter(f => f.category.slug == 'eu').map(i => 
                        <Link key={i.id} className='text-xs min-w-fit text-white/80'>{i.name}   |  </Link>
                      )
                      :

                      ''
                    } */}
                  </div>
                  {/* <Link className='text-xs text-white/80'>Level 3 (Foundation)</Link>
                  <Link className='text-xs text-white/80'>Level 4 and Level 5 (Higher Diploma)</Link>
                  <Link className='text-xs text-white/80'>Level 6 (Graduate Diploma)</Link>
                  <Link className='text-xs text-white/80'>Level 7 (Postgraduate Diploma)</Link>
                  <Link className='text-xs text-white/80'>Level 8 (Doctoral Diploma)</Link> */}
                </div>

                <div className='px-4 flex flex-col gap-2 order-1 text-center md:text-start'>
                  <p className='font-bold  gap-6 flex items-end text-center text-sm md:text-left text-white uppercase'>Popular countries</p>
                  <div className='flex gap-2'>
                    {
                      loading?
                      <Link className='text-xs text-white/80'></Link>
                      :
                      countries?
                      countries.filter(f => f.category.slug == 'medicine').map(i => 
                        <Link key={i.id} className='text-xs min-w-fit text-white/80'>{i.name}   |  </Link>
                      )
                      :

                      ''
                    }
                  </div>
                  {/* <Link className='text-xs text-white/80'>Level 3 (Foundation)</Link>
                  <Link className='text-xs text-white/80'>Level 4 and Level 5 (Higher Diploma)</Link>
                  <Link className='text-xs text-white/80'>Level 6 (Graduate Diploma)</Link>
                  <Link className='text-xs text-white/80'>Level 7 (Postgraduate Diploma)</Link>
                  <Link className='text-xs text-white/80'>Level 8 (Doctoral Diploma)</Link> */}
                </div>


              </div>:
              <div className='flex flex-col justify-center items-center md:items-start md:justify-start gap-2'>
              <p className='text-base font-bold border-b-[2px] border-[#DA0C0C] gap-6 h-[60px] flex items-end text-center md:text-left text-white'>PROGRAMMES</p>
              <div className='px-4 flex flex-col gap-2 py-2 md:py-4 order-1 text-center md:text-start'>
                <Link className='text-xs text-white/80'>Level 3 (Foundation)</Link>
                <Link className='text-xs text-white/80'>Level 4 and Level 5 (Higher Diploma)</Link>
                <Link className='text-xs text-white/80'>Level 6 (Graduate Diploma)</Link>
                <Link className='text-xs text-white/80'>Level 7 (Postgraduate Diploma)</Link>
                <Link className='text-xs text-white/80'>Level 8 (Doctoral Diploma)</Link>
              </div>
            </div>
            }
            {
              location.pathname =='/abroad'?
              <div className='w-[500px] flex flex-col justify-center items-center md:items-start md:justify-start gap-2 ml-auto'>
              <p className='text-base font-bold border-b-[2px] border-[#DA0C0C] gap-6 h-[60px] flex items-end text-center md:text-left text-white'>USE FULL LINKS </p>
              <div className='px-4 flex flex-row flex-wrap divide-x-1 gap-4 py-2 md:py-4 order-1 text-center md:text-start'>
                <Link className='text-xs min-w-fit px-2 text-white'>PROGRESSION</Link>
                <Link className='text-xs min-w-fit px-2 text-white'>QUALITY STANDARDS VALID,VALUED LEARNING</Link>
                <Link className='text-xs min-w-fit px-2 text-white'>FACILITIES</Link>
                <Link className='text-xs min-w-fit px-2 text-white'>DISTANCE LEARNING</Link>
                <Link className='text-xs min-w-fit px-2 text-white'>CAREERS</Link>
                <Link className='text-xs min-w-fit px-2 text-white'>FAQ</Link>
                <Link className='text-xs min-w-fit px-2 text-white'>TESTIMONIAL</Link>
              </div>
            </div>:
              ''
            }
            
          </div>
            {
              location.pathname=='/abroad'?
              '':
              
              <div className='flex flex-col justify-center items-center md:items-start md:justify-start gap-2 ml-auto'>
              <p className='text-base font-bold border-b-[2px] border-[#DA0C0C] gap-6 h-[60px] flex items-end text-center md:text-left text-white'>USE FULL LINKS </p>
              <div className='px-4 flex flex-col gap-2 py-2 md:py-4 order-1 text-center md:text-start'>
                <Link className='text-xs text-white/80'>PROGRESSION</Link>
                <Link className='text-xs text-white/80'>QUALITY STANDARDS VALID,VALUED LEARNING</Link>
                <Link className='text-xs text-white/80'>FACILITIES</Link>
                <Link className='text-xs text-white/80'>DISTANCE LEARNING</Link>
                <Link className='text-xs text-white/80'>CAREERS</Link>
                <Link className='text-xs text-white/80'>FAQ</Link>
                <Link className='text-xs text-white/80'>TESTIMONIAL</Link>
              </div>
            </div>
            }

            <div className=' flex-col justify-center items-center md:items-start md:justify-start gap-2 hidden'>
              <p className='text-base font-bold border-b-[2px] border-[#DA0C0C] gap-6 h-[60px] flex items-end text-center md:text-left text-white'>QUICK LINKS</p>
              <div className='px-4 flex flex-col gap-2 py-2 md:py-4 order-1 text-center md:text-start'>
                <Link className='text-xs text-white/80'>APPLY ONLINE</Link>
                <Link className='text-xs text-white/80'>VERIFY CERTIFICATE</Link>
                <Link className='text-xs text-white/80'>STUDENT PORTAL</Link>
                <Link className='text-xs text-white/80'>PAY ONLINE</Link>
                <Link className='text-xs text-white/80'>EVENT CALENDER</Link>
                <Link className='text-xs text-white/80'>FAQ</Link>
                <Link className='text-xs text-white/80'>TESTIMONIAL</Link>
              </div>
            </div>
        </div>
        <div className='h-fit w-auto'>
          {
            location.pathname == "/abroad" ?
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fweb.facebook.com%2FIEBCGlobal%2F%3F_rdc%3D1%26_rdr&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" onScroll={true} className='min-h-full min-w-fit overflow-scroll rounded-[8px]' onScrollCapture={true} height={400} width={400} eframeborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share;" ></iframe>
            :
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fweb.facebook.com%2Fiebc.lk%2F%3F_rdc%3D1%26_rdr&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" onScroll={true} className='min-h-full min-w-fit overflow-scroll rounded-[8px]' onScrollCapture={true} height={400} width={400} eframeborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share;"></iframe>
          }
          
        </div>
      </div>
    </footer>
  )
}

export default Footer