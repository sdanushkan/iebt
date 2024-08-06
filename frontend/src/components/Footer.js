import React, { useEffect } from 'react'
import logo from '../assets/Logo.png'
import logo1 from '../assets/logo1.jpg'
import { CiLinkedin } from "react-icons/ci";
import logoAD from '../assets/logoAD.png'
import {Button} from "@nextui-org/react";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCourseList } from '../actions/courseActions';
import _, { map } from 'lodash';
import { getEuCountryList, getMainCountryList, getMedicineCountryList } from '../actions/abroadActions';

const Footer = () => {
    const {course} = useParams()

    const dispatch = useDispatch()
    const history = useNavigate()
    const location = useLocation()

    const courseList = useSelector(state => state.courseList)
    const { error: courseListError, loading: courseListLoading, courses } = courseList

    const mainCountryList = useSelector(state => state.mainCountryList)
    const { error:mainCountryListError, loading:mainCountryListLoaoding, countries:mainCountries } = mainCountryList

    const euCountryList = useSelector(state => state.euCountryList)
    const { error:euCountryListError, loading:euCountryListLoaoding, countries:euCountries } = euCountryList

    const medicineCountryList = useSelector(state => state.medicineCountryList)
    const { error:medicineCountryListError, loading:medicineCountryListLoaoding, countries:medicineCountries } = medicineCountryList

    const testimonialList = useSelector(state => state.testimonialList)
    const { error: testimonialListError, loading: testimonialListLoading, testimonials } = testimonialList

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


    const levelList = useSelector(state => state.levelList)
    const { error:levelListError, loading:levelListLoading, levels } = levelList

    useEffect(() => {
        if(!courses){
          dispatch(getCourseList('faculties', 'programes', 'qualifications', 'credits'))
        }
    }, [dispatch, courses])

    useEffect(() => {
        window.scroll(0,0);
      }, [location]);
  return (
    <footer className={
      location.pathname =='/abroad'?
      'h-fit w-full max-w-screen overflow-hidden bg-red-900 py-12':
      'h-fit w-full max-w-screen overflow-hidden bg-[#DA0C0C] py-12'
    }>
      {
        location.pathname =='/abroad'?

        <div className='h-fit w-full max-w-[1200px] mx-auto flex flex-col md:flex-row md:items-center gap-2 lg:gap-4'>
          <div className='h-fit w-full px-8 md:px-0 md:w-[300px] flex flex-col items-center md:text-start mx-auto'>
            <div className='w-full flex items-center justify-center rounded-[8px] flex-col'>
              <div className='flex flex-col gap-1'>
                <img src={logo1} alt='' className='min-h-[200px] scale-75 rounded-full min-w-[200px] object-contain mx-auto' />
                <div className='py-4 mx-auto'>
                  <a href='https://www.instagram.com/ieb_consultancy/'>
                    <Button isIconOnly startContent={<RiInstagramFill className='text-2xl text-white'/>} variant='light'>

                    </Button>
                  </a>
                  <a href={'https://www.facebook.com/profile.php?id=61563085658668'}>
                    <Button isIconOnly startContent={<FaFacebook  className='text-2xl text-white'/>} variant='light'>

                    </Button>
                  </a>
                  <a href='http://www.linkedin.com/in/ieb-consultancy-6a9223320'>
                    <Button isIconOnly startContent={<FaLinkedin  className='text-2xl text-white'/>} variant='light'>

                    </Button>
                  </a>
                </div>
              </div>
              <img src={logoAD} alt='' className='min-h-[200px] min-w-[200px] object-contain mx-auto' />
            </div>        
            <p className={'text-sm font-bold text-white uppercase text-center hidden'}>International Education and Bussiness campus</p>
            <div className='h-[1px] w-full bg-red-100 mt-4'></div>
            <div className='py-4'>
              <a href='https://www.facebook.com/IEBCGlobal/'>
                <Button isIconOnly startContent={<RiInstagramFill className='text-2xl text-white'/>} variant='light'>

                </Button>
              </a>
              <a href={'https://web.facebook.com/IEBCGlobal/?_rdc=1&_rdr'}>
                <Button isIconOnly startContent={<FaFacebook  className='text-2xl text-white'/>} variant='light'>

                </Button>
              </a>
              <a href='https://www.linkedin.com/company/iebc-visa-global/'>
                <Button isIconOnly startContent={<FaLinkedin  className='text-2xl text-white'/>} variant='light'>

                </Button>
              </a>
            </div>
          </div>
          <div className={'h-fit w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2 lg:gap-4'}>
              {/* <div className='w-full md:min-w-[200px] flex flex-col justify-center items-center md:items-start md:justify-start gap-2'>
                  <p className='text-sm font-bold border-b-[2px] border-[#DA0C0C] gap-6 flex items-end text-center md:text-left text-white'>AWARDING BODY QUALIFICATION</p>
                  <div className='px-4 flex flex-col gap-2 py-2 md:py-4 order-1 text-center md:text-start'>
                    <Link to={`awarding-body/lrn-uk-qualification`} className='text-[10px] text-white/80'>LRN- British Qualification</Link>
                    <Link to={`awarding-body/othm-uk-qualification`} className='text-[10px] text-white/80'>OTHM- British Qualification</Link>
                    <Link to={`awarding-body/qualifi-uk-qualification`} className='text-[10px] text-white/80'>Qualifi- British Qualification</Link>
                  </div>
                </div> */}
              <div className='flex flex-col'>
                  <div className='w-full md:min-w-[200px] flex flex-col justify-center items-center md:items-start md:justify-start gap-6 pb-4'>
                    <p className='text-lg font-bold border-b-[2px] border-[#DA0C0C]  flex text-center md:text-left text-white uppercase'>Destination</p>
                    <div className='px-4 flex flex-col gap-2 order-1 text-center md:text-start'>
                      <p className='font-bold  gap-6 flex items-end text-center text-sm md:text-left text-white uppercase'>popular countries</p>
                      <div className='flex w-full flex-wrap gap-2 text-sm text-white/50 '>
                      {
                        mainCountryListLoaoding?
                        '':
                        mainCountries?
                        mainCountries.map(i =>(
                          <Link to={`/countries/${i.slug}`}>{i.name}</Link>
                        ))
                        :
                        ''

                      }
                        
                        {/* {
                          loading?
                          <Link className='text-[10px] text-white/80'></Link>
                          :
                          countries?
                          countries.filter(f => f.category.slug == 'eu').map(i => 
                            <Link key={i.id} className='text-[10px] min-w-fit text-white/80'>{i.name}   |  </Link>
                          )
                          :

                          ''
                        } */}
                      </div>
                      {/* <Link className='text-[10px] text-white/80'>Level 3 (Foundation)</Link>
                      <Link className='text-[10px] text-white/80'>Level 4 and Level 5 (Higher Diploma)</Link>
                      <Link className='text-[10px] text-white/80'>Level 6 (Graduate Diploma)</Link>
                      <Link className='text-[10px] text-white/80'>Level 7 (Postgraduate Diploma)</Link>
                      <Link className='text-[10px] text-white/80'>Level 8 (Doctoral Diploma)</Link> */}
                    </div>

                    <div className='px-4 flex flex-col gap-2 order-1 text-center md:text-start'>
                      <p className='font-bold  gap-6 flex items-end text-center text-sm md:text-left text-white uppercase'>European countries</p>
                      <div className='flex w-full flex-wrap gap-2 text-sm text-white/50 '>
                      {
                        euCountryListLoaoding?
                        '':
                        euCountries?
                        euCountries.map(i =>(
                          <Link to={`/countries/${i.slug}`}>{i.name}</Link>
                        ))
                        :
                        ''

                      }
                        
                        {/* {
                          loading?
                          <Link className='text-[10px] text-white/80'></Link>
                          :
                          countries?
                          countries.filter(f => f.category.slug == 'eu').map(i => 
                            <Link key={i.id} className='text-[10px] min-w-fit text-white/80'>{i.name}   |  </Link>
                          )
                          :

                          ''
                        } */}
                      </div>
                      {/* <Link className='text-[10px] text-white/80'>Level 3 (Foundation)</Link>
                      <Link className='text-[10px] text-white/80'>Level 4 and Level 5 (Higher Diploma)</Link>
                      <Link className='text-[10px] text-white/80'>Level 6 (Graduate Diploma)</Link>
                      <Link className='text-[10px] text-white/80'>Level 7 (Postgraduate Diploma)</Link>
                      <Link className='text-[10px] text-white/80'>Level 8 (Doctoral Diploma)</Link> */}
                    </div>

                    <div className='px-4 flex flex-col gap-2 order-1 text-center md:text-start'>
                      <p className='font-bold  gap-6 flex items-end text-center text-sm md:text-left text-white uppercase'>Medicine countries</p>
                      <div className='flex flex-wrap gap-2 text-sm text-white/50'>
                        {
                          medicineCountryListLoaoding?
                          '':
                          medicineCountries?
                          medicineCountries.map(i =>(
                            <Link to={`/countries/${i.slug}`}>{i.name}</Link>
                          ))
                          :
                          ''

                        }
                      </div>
                      {/* <Link className='text-[10px] text-white/80'>Level 3 (Foundation)</Link>
                      <Link className='text-[10px] text-white/80'>Level 4 and Level 5 (Higher Diploma)</Link>
                      <Link className='text-[10px] text-white/80'>Level 6 (Graduate Diploma)</Link>
                      <Link className='text-[10px] text-white/80'>Level 7 (Postgraduate Diploma)</Link>
                      <Link className='text-[10px] text-white/80'>Level 8 (Doctoral Diploma)</Link> */}
                    </div>


                  </div>

                  <div className='w-full md:min-w-[200px] flex flex-col justify-center items-center md:items-start md:justify-start gap-2 ml-auto'>
                    <p className='text-sm font-bold border-b-[2px] border-[#DA0C0C] gap-6 flex items-end text-center md:text-left text-white'>USE FULL LINKS </p>
                    <div className='px-4 flex flex-row flex-wrap gap-4 py-2 md:py-4 order-1 text-center md:text-start'>
                      <Link className='text-[10px] text-white/80'>About Us</Link>
                      <Link className='text-[10px] text-white/80'>Visit our virtual office</Link>
                      <Link className='text-[10px] text-white/80'>Book an appointment</Link>
                    
                    </div>
                  </div>
              </div>

              <div className=' flex-col justify-center items-center md:items-start md:justify-start gap-2 hidden'>
                <p className='text-sm font-bold border-b-[2px] border-[#DA0C0C] gap-6 flex items-end text-center md:text-left text-white'>QUICK LINKS</p>
                <div className='px-4 flex flex-col gap-2 py-2 md:py-4 order-1 text-center md:text-start'>
                  <Link className='text-[10px] text-white/80'>APPLY ONLINE</Link>
                  <Link className='text-[10px] text-white/80'>VERIFY CERTIFICATE</Link>
                  <Link className='text-[10px] text-white/80'>STUDENT PORTAL</Link>
                  <Link className='text-[10px] text-white/80'>PAY ONLINE</Link>
                  <Link className='text-[10px] text-white/80'>EVENT CALENDER</Link>
                  <Link to={'/faq'} className='text-[10px] text-white/80'>FAQ</Link>
                  <Link className='text-[10px] text-white/80'>TESTIMONIAL</Link>
                </div>
              </div>
          </div>
          <div className='h-fit w-auto'>
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fweb.facebook.com%2FIEBCGlobal%2F%3F_rdc%3D1%26_rdr&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" onScroll={true} className='min-h-full min-w-fit overflow-scroll mx-auto' onScrollCapture={true} height={400} width={400} eframeborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share;" ></iframe>
            {/* <p className='text-center text-white'>© 2024 IEBC. All rights reserved</p> */}
          </div>
        </div>
        
        :

        <div className='h-fit w-full max-w-[1200px] mx-auto flex flex-col md:flex-row gap-8 '>
          <div className='h-fit w-full px-8 md:px-0 md:w-[300px] flex flex-col items-center md:text-start mx-auto gap-2'>
            <div className='w-full flex bg-red-500 items-center justify-center rounded-[8px]'>
              <img src={logo} alt='' className='min-h-[200px] min-w-[200px] object-contain mx-auto' />
            </div>        
            <p className={'text-sm font-bold text-white uppercase text-center'}>International Education and Bussiness campus</p>
            <div className='h-[1px] w-full bg-red-100 mt-4'></div>
            <div className='py-4'>
              <a href='https://www.linkedin.com/company/iebc-campus/'>
                <Button isIconOnly startContent={<CiLinkedin  className='text-2xl text-white'/>} variant='light'>

                </Button>
              </a>
              <a href={'https://www.facebook.com/iebc.lk/'}>
                <Button isIconOnly startContent={<FaFacebook  className='text-2xl text-white'/>} variant='light'>

                </Button>
              </a>
              <a href='https://www.youtube.com/@internationaleducationbusi3630/videos'>
                <Button isIconOnly startContent={<FaYoutube  className='text-2xl text-white'/>} variant='light'>

                </Button>
              </a>
            </div>
          </div>
          <div className='h-fit grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-4'>
            <div className='w-full flex flex-col justify-center items-center md:items-start md:justify-start gap-2'>
              <p className='text-sm font-bold border-b-[2px] border-[#DA0C0C] gap-6 flex  text-center md:text-left text-white'>AWARDING BODY QUALIFICATION</p>
              <div className='px-4 flex flex-col gap-2 py-2 md:py-4 order-1 text-center md:text-start'>
                <Link to={`awarding-body/lrn-uk-qualification`} className='text-[10px] text-white/80'>LRN- British Qualification</Link>
                <Link to={`awarding-body/othm-uk-qualification`} className='text-[10px] text-white/80'>OTHM- British Qualification</Link>
                <Link to={`awarding-body/qualifi-uk-qualification`} className='text-[10px] text-white/80'>Qualifi- British Qualification</Link>
              </div>
            </div>
            <div className='flex flex-col'>
              <div className='w-full  flex flex-col justify-center items-center md:items-start md:justify-start gap-2'>
                <p className='text-sm font-bold border-b-[2px] border-[#DA0C0C] gap-6 flex items-end text-center md:text-left text-white'>PROGRAMMES</p>
                <div className='px-4 flex flex-col gap-2 py-2 md:py-4 order-1 text-center md:text-start'> 
                        {
                          levelListLoading?
                            <Link className='text-[10px] text-white/80'>Level 3 (Foundation)</Link>
                            :
                            levels?
                            levels.map(i=>(
                            <Link to={`/footer/courses/faculties/${i.slug}/qualifications/credits`} className='text-[10px] text-white/80'>{i.name}</Link>
                            ))
                            :
                            ''
                        }
                  
                </div>
              </div>             
            </div>
            <div className='w-full flex flex-col justify-center items-center md:items-start md:justify-start gap-2 ml-auto'>
              <p className='text-sm font-bold border-b-[2px] border-[#DA0C0C] gap-6 flex items-end text-center md:text-left text-white'>USE FULL LINKS </p>
              <div className='px-4 flex flex-col gap-2 py-2 md:py-4 order-1 text-center md:text-start'>
              <Link to={'/application'} className='text-[10px] text-white/80'>APPLY ONLINE</Link>
                <Link to={'/verify'} className='text-[10px] text-white/80'>VERIFY CERTIFICATE</Link>
                <Link to={'/'} className='text-[10px] text-white/80'>PAY ONLINE</Link>
                <Link to={'/faq'} className='text-[10px] text-white/80'>FAQ</Link>
              </div>
            </div>
            {/* <div className=' flex-col justify-center items-center md:items-start md:justify-start gap-2 hidden'>
              <p className='text-sm font-bold border-b-[2px] border-[#DA0C0C] gap-6 flex items-end text-center md:text-left text-white'>QUICK LINKS</p>
              <div className='px-4 flex flex-col gap-2 py-2 md:py-4 order-1 text-center md:text-start'>
                <Link to={'/application'} className='text-[10px] text-white/80'>APPLY ONLINE</Link>
                <Link to={'/verify'} className='text-[10px] text-white/80'>VERIFY CERTIFICATE</Link>
                <Link to={'/'} className='text-[10px] text-white/80'>PAY ONLINE</Link>
                <Link to={'/faq'} className='text-[10px] text-white/80'>FAQ</Link>
              </div>
            </div> */}
          </div>
          <div className='h-fit w-auto'>
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fweb.facebook.com%2Fiebc.lk%2F%3F_rdc%3D1%26_rdr&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" onScroll={true} className='min-h-full min-w-fit overflow-scroll mx-auto' onScrollCapture={true} height={400} width={400} eframeborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share;"></iframe>    
            <p className='text-center text-white'>© 2024 IEBC. All rights reserved</p>       
          </div>
        </div>

      }
    </footer>
  )
}

export default Footer