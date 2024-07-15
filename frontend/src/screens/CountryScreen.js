import React, { useEffect, useState } from 'react'
import {Tabs, Tab, Input, Link, Button, Card, CardBody, CardHeader, Select, SelectItem} from "@nextui-org/react";import { MdAccessTime, MdEmail } from "react-icons/md";
import { FaArrowRightLong, FaCircleQuestion, FaRegCircleUser } from "react-icons/fa6";
import {Divider} from "@nextui-org/react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { find } from 'lodash';
import { getCountryDetails, getCountryList } from '../actions/abroadActions';
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/react";
import {Textarea} from "@nextui-org/input";
import { RiSecurePaymentFill } from "react-icons/ri";
import parse from 'html-react-parser';
import { FaUserCircle } from 'react-icons/fa';
import { BiWorld } from 'react-icons/bi';
import ReactPlayer from 'react-player'
import thum from '../assets/thum.png'
  
import sdv from '../assets/sdv.mp4'
import  apply  from '../assets/apply.png'
import  verification  from '../assets/verification.png'
import  sp  from '../assets/sp.png'
import  es  from '../assets/es.png'

import bg from '../assets/bg.gif'
import { sendCAMail } from '../actions/courseActions';

const CountryScreen = () => {
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
    setnSI(SI.anchorKey)
  }, [SI])


  useEffect(() => {
    
    setndestination(destination.anchorKey)
  }, [destination])

    const {country} = useParams()

    const [nCountry, setNContry] = useState('')

    const dispatch = useDispatch()
    const history = useNavigate()
    const location = useLocation()

    const countryDetails = useSelector(state => state.countryDetails)
    const { error: countryDetailsError, loading: countryDetailsLoading, country: countryD } = countryDetails

    useEffect(() => {
        if (!countryD){
          dispatch(getCountryDetails(country))
        }
    }, [dispatch, country, countryD])

    useEffect(() => {
        window.scroll(0,0);
      }, [location]);

      const sendMailCA = () =>{
        if((mNumber!='')&& (name!='')&& (email!='')&& (nSI!='')){
          dispatch(sendCAMail({ 
            "mNumber": mNumber,
            "name": name,
            "email": email,
            "country": country,
            "intake": nSI,
        }))
        setmNumber('')
        setemail('')
        setSI('')
        setname('')
        }
      }
     

  return (
    <div className='w-full h-fit'>
        {
            countryD?
            <section className='relative'>
                 
                <div className='h-[300px] w-full object-cover relative -z-40'>
                  <div className='h-[300px] w-full object-cover absolute top-0 -z-0 bg-black/50 flex items-center justify-center'>
                    <p className='text-4xl font-bold text-white'>{countryD.name}</p>
                  </div>
                  <img src={countryD.image} alt='' className='h-[300px] w-full object-cover relative -z-40' />
                  
                </div>
                  
                  
              </section>
            :
            ''
        }

        {
          countryD?
          <section className='h-fit w-full'>
            <div className='h-fit w-full max-w-[1024px] mx-auto px-8 py-8 grid grid-cols-1 lg:grid-cols-10'>
              {
                countryD.discription==''?
                '':
                <div className="flex w-full flex-col gap-4 col-span-6">
                <p className='text-xl font-bold border-dotted border-b-[2px] border-red-500 py-2'>Study in {countryD.name}</p>
                <Tabs aria-label="Options" 
                  classNames={{
                    tabList: "",
                    cursor: "bg-[#DA0C0C] text-sm",
                    tab: " text-sm",
                    tabContent: "group-data-[selected=true]:text-[white] text-sm"
                  }}
                  size='lg'
                >
                  {
                    countryD.discription != "" ?
                    <Tab className='' key={`Study in ${countryD.name}`} title={`Study in ${countryD.name}`}>
                      <div className={
                        countryD.discription == ""?
                        'h-fit hidden bg-red-50 p-8 rounded-[8px] flex-col gap-4 ':
                        'h-fit bg-red-50 p-8 rounded-[8px] flex flex-col gap-4 '
                      }>
                        {
                          parse(countryD.discription)
                        } 
                      </div> 
                    </Tab>
                    :
                    ''
                  }
               
                  {
                    countryD.details_and_scholarship != "" ?
                    <Tab className='' key="Details And Scholarship" title="Details And Scholarship">
                      <div className={
                        countryD.details_and_scholarship == ""?
                        'h-fit hidden bg-red-50 p-8 rounded-[8px] flex-col gap-4 ':
                        'h-fit bg-red-50 p-8 rounded-[8px] flex flex-col gap-4 '
                      }>
                        {
                          parse(countryD.details_and_scholarship)
                        } 
                      </div> 
                    </Tab>
                    :
                    ''
                  }
                  {
                    countryD.visa_reqrequirementi != "" ?
                    <Tab className='' key="Student Visa Requirements" title="Student Visa Requirements">
                      <div className={
                        countryD.visa_reqrequirementi == ""?
                        'h-fit hidden bg-red-50 p-8 rounded-[8px] flex-col gap-4 ':
                        'h-fit bg-red-50 p-8 rounded-[8px] flex flex-col gap-4 '
                      }>
                        {
                          parse(countryD.visa_reqrequirementi)
                        } 
                      </div> 
                    </Tab>
                    :
                    ''
                  }
             
               
                  
                  {
                    countryD.details_and_scholarship != "" ?
                    <Tab className='' key="University Details and Scholarships" title="University Details and Scholarships">
                      <div className={
                        countryD.details_and_scholarship == ""?
                        'h-fit hidden bg-red-50 p-8 rounded-[8px] flex-col gap-4 ':
                        'h-fit bg-red-50 p-8 rounded-[8px] flex flex-col gap-4 '
                      }>
                        {
                          parse(countryD.details_and_scholarship)
                        } 
                      </div> 
                    </Tab>
                    :
                    ''
                  }

                  {
                    countryD.FAQ != "" ?
                    <Tab className='' key="FAQ" title="FAQ">
                      <div className={
                        countryD.FAQ == ""?
                        'h-fit hidden bg-red-50 p-8 rounded-[8px] flex-col gap-4 ':
                        'h-fit bg-red-50 p-8 rounded-[8px] flex flex-col gap-4 '
                      }>
                        {
                          parse(countryD.FAQ)
                        } 
                      </div> 
                    </Tab>
                    :
                    ''
                  }
                  
                  
                  
                </Tabs>
              </div> 
              }
              <div className={
                countryD.discription==''?
                'w-full h-fit max-w-[1024px] col-span-full mx-auto  relative z-10 bg-transparent px-8':
                'w-full h-fit max-w-[1024px] col-span-4 mx-auto  relative z-10 bg-transparent px-8'
              }>
                  <div className='w-full h-fit mx-auto bg-white rounded-[16px] shadow-[0px_4px_25px_rgba(0,0,0,0.05)] grid grid-cols-1 md:gap-4 p-6'>

                      <div className='w-full h-fit md:col-span-3 flex flex-col gap-4'>
                        {
                          countryD.discription ==''?
                          <img src={countryD.flag} alt='' className='h-[150px] rounded-[8px] md:h-[250px] w-full'/>:
                          <img src={countryD.flag} alt='' className='h-[150px] rounded-[8px] w-full'/>
                        }
                        <div className=' '>
                          <p className='text-2xl font-bold'>Book an appointment</p>
                        </div>
                        <div className='flex flex-col gap-4 '>
                          <div className=' flex gap-4'>
                          <Input
                              isClearable
                              type="text"
                              value={name} 
                            onChange={(e) => setname(e.target.value)}
                              variant="flat"
                              placeholder="Enter your Name"
                              onClear={() => console.log("input cleared")}
                              className="w-full"
                              radius='sm'
                              startContent={
                                <FaUserCircle className="text-lg text-default-400 pointer-events-none flex-shrink-0" />
                              }
                            />
                            <Input
                              isClearable
                              type="email"
                              variant="flat"
                              placeholder="Enter your Email"
                              onClear={() => console.log("input cleared")}
                              className="w-full"
                              value={email} 
                            onChange={(e) => setemail(e.target.value)}
                              radius='sm'
                              startContent={
                                <MdEmail className="text-lg text-default-400 pointer-events-none flex-shrink-0" />
                              }
                            />
                          </div>
                          <div className=' flex gap-4'>
                            <Input
                              type="number"
                              placeholder="Mobile"
                              labelPlacement="outside"
                              variant="flat"
                              className='w-full shadow-none rounded-none'
                              radius='sm'
                              value={mNumber} 
                            onChange={(e) => setmNumber(e.target.value)}
                              size='md'
                              onClear={() => console.log("input cleared")}
                              startContent={
                                <div className="pointer-events-none flex items-center">
                                  <span className="text-default-400 text-small">+94 </span>
                                </div>
                              }
                              // endContent={
                              //   // <VscSymbolKeyword />
                              // }
                            />
                            <Input
                              type="text"
                              placeholder="Country"
                              labelPlacement="outside"
                              variant="flat"
                              disabled
                              value={countryD.name}
                              className='w-full shadow-none rounded-none'
                              radius='sm'
                              size='md'
                              startContent={
                                <BiWorld className="text-lg text-default-400 pointer-events-none flex-shrink-0" />
                              }
                              // endContent={
                              //   // <VscSymbolKeyword />
                              // }
                            />
                          </div>
                          <div className='flex gap-4'>
                          <Select 
                              className="w-full" 
                              // selectedKeys={pLocation}
                              // onSelectionChange={setPLocation}
                              variant=''
                              placeholder='Year of Study'
                              required
                              size='md'
                              selectedKeys={SI}
                              onSelectionChange={setSI}

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
                          
                          <Button onClick={sendMailCA} color='' size='md' className="hidden lg:flex bg-[#DA0C0C] text-white font-medium rounded-md max-w-fit mt-4">
                            <p>Submit</p>
                            <FaArrowRightLong/>
                          </Button>
                        </div>

                        <div className='min-h-fit w-full'>
                          <ReactPlayer height={'100%'} width={'100%'} light={<img src={thum} alt='Thumbnail'/>} url={sdv} loop={true} playing={false} controls={true} />
                        </div>
                        
                      </div>

                      {/* <div className='h-[200px] w-full col-span-2 min-w-full max-w-[400px] rounded-[8px]'>
                          <img src={countryD.flag} alt='' className='h-full min-w-full object-cover rounded-[8px]' />
                      </div> */}
                      
                  </div>
                </div> 
            </div>
          </section>
          :
          ''
        }

      <section className='h-fit w-full relative overflow-hidden px-8 py-6'>
        <div className='h-fit w-full max-w-[800px] mx-auto grid grid-cols-2 md:grid-cols-4 justify-center gap-2 lg:gap-6'>
          <Link to={'/abroad/about'} className='w-full md:w-48 h-full md:h-48 flex flex-col items-center justify-center gap-4 bg-white text-black duration-200 cursor-pointer hover:text-[#DA0C0C] p-12 hover:p-10 rounded-[8px] shadow-[0px_4px_25px_rgba(0,0,0,0.05)] hover:shadow-[0px_4px_50px_rgba(0,0,0,0.075)]'>
                <img src={sp}  alt='' className='w-full h-full object-contain' />
                <p className='text-base font-bold text-red-900 px-2 text-center'>About us</p>
              </Link>
              <Link to={'/ourservices'} className='w-full md:w-48 h-full md:h-48 flex flex-col items-center justify-center gap-4 bg-white text-black duration-200 cursor-pointer hover:text-[#DA0C0C] p-12 hover:p-10 rounded-[8px] shadow-[0px_4px_25px_rgba(0,0,0,0.05)] hover:shadow-[0px_4px_50px_rgba(0,0,0,0.075)]'>
                <img src={es}  alt='' className='w-full h-full object-contain' />
                <p className='text-base font-bold text-red-900 px-2 text-center'>Services</p>
              </Link>
              <Link to={'/application'} className='w-full md:w-48 h-full md:h-48 flex flex-col items-center justify-center gap-4 bg-white text-black duration-200 cursor-pointer hover:text-[#DA0C0C] p-12 hover:p-10 rounded-[8px] shadow-[0px_4px_25px_rgba(0,0,0,0.05)] hover:shadow-[0px_4px_25px_rgba(0,0,0,0.075)] '>
                <img src={apply}  alt='' className='w-full h-full object-contain' />
                <p className='text-base font-bold text-red-900 px-2 text-center'>Apply</p>
              </Link>
              <div className='w-full md:w-48 h-full md:h-48 flex flex-col items-center justify-center gap-4 bg-white text-black duration-200 cursor-pointer hover:text-[#DA0C0C] p-12 hover:p-10 rounded-[8px] shadow-[0px_4px_25px_rgba(0,0,0,0.05)] hover:shadow-[0px_4px_50px_rgba(0,0,0,0.075)]'>
                <img src={verification}  alt='' className='w-full h-full object-contain' />
                <p className='text-base font-bold text-red-900 px-2 text-center'>Book Appoinment</p>
              </div>
              
          </div>
      </section>

      <section className='h-fit w-full'>
        <div className='h-fit w-full'>
            <img src={bg} alt='' className='h-[200px] w-full object-cover' />
        </div>
      </section>
        
    </div>
  )
}

export default CountryScreen