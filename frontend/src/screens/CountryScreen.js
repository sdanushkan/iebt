import React, { useEffect, useState } from 'react'
import {Tabs, Tab, Input, Link, Button, Card, CardBody, CardHeader} from "@nextui-org/react";import { MdAccessTime, MdEmail } from "react-icons/md";
import { FaArrowRightLong, FaCircleQuestion, FaRegCircleUser } from "react-icons/fa6";
import {Divider} from "@nextui-org/react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { find } from 'lodash';
import { getCountryList } from '../actions/abroadActions';
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/react";
import {Textarea} from "@nextui-org/input";
import { RiSecurePaymentFill } from "react-icons/ri";
import parse from 'html-react-parser';
import { FaUserCircle } from 'react-icons/fa';
import { BiWorld } from 'react-icons/bi';

const CountryScreen = () => {

    const {country} = useParams()

    const [nCountry, setNContry] = useState('')

    const dispatch = useDispatch()
    const history = useNavigate()
    const location = useLocation()

    const countryList = useSelector(state => state.countryList)
    const { error: countryListError, loading: countryListLoading, countries } = countryList

    useEffect(() => {
        dispatch(getCountryList())
    }, [dispatch])

    useEffect(() => {
        window.scroll(0,0);
      }, [location]);

    useEffect(() => {
        if (country) {
            setNContry(countries.find( f => f.slug == country))
        }
    }, [country])
  return (
    <div className='w-full h-fit'>
        {
            nCountry?
            <section className='relative'>
                
                <div className='h-[400px] w-full object-cover relative -z-40'>
                  <div className='h-[400px] w-full object-cover absolute top-0 -z-0 bg-black/50 flex items-center justify-center'>
                    <p className='text-2xl font-bold text-white'>{nCountry.name}</p>
                  </div>
                  <img src={nCountry.image} alt='' className='h-[400px] w-full object-cover relative -z-40' />
                </div>
                
                <div className='w-full h-fit max-w-[1024px] mx-auto -mt-[100px] relative z-10 bg-transparent px-8'>
                  <div className='w-full h-fit mx-auto bg-white rounded-[16px] shadow-[0px_4px_25px_rgba(0,0,0,0.05)] grid grid-cols-1 md:grid-cols-5 md:gap-4 lg:gap-8 p-12'>
                      <div className='w-full h-full md:col-span-3 flex flex-col gap-2'>
                        <div className=''>
                          <p className='text-3xl font-bold capitalize'>send message</p>
                          <p></p>
                        </div>
                        <div className='flex flex-col gap-4 py-8'>
                          <div className=' flex gap-4'>
                          <Input
                              isClearable
                              type="text"
                              variant="flat"
                              placeholder="Enter your Name"
                              onClear={() => console.log("input cleared")}
                              className="max-w-xs"
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
                              className="max-w-xs"
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
                            <Input
                              type="text"
                              placeholder="why do you plan to study"
                              labelPlacement="outside"
                              variant="flat"
                              startContent={
                                <FaCircleQuestion className="text-lg text-default-400 pointer-events-none flex-shrink-0" />
                              }
                              className='w-full shadow-none rounded-none'
                              radius='sm'
                              size='md'
                              // endContent={
                              //   // <VscSymbolKeyword />
                              // }
                            />
                          </div>
                          
                          <Button color='' size='md' className="hidden lg:flex bg-[#DA0C0C] text-white font-medium rounded-md max-w-fit mt-4">
                            <p>Submit</p>
                            <FaArrowRightLong/>
                          </Button>
                        </div>
                        
                      </div>

                      <div className='h-full w-full col-span-2 max-w-[400px] '>
                          <img src={nCountry.flag} alt='' className='h-full w-full object-cover' />
                      </div>
                  </div>
                </div>
            </section>:
            ''
        }

        {
          nCountry?
          <section className='h-fit w-full'>
            <div className='h-fit w-full max-w-[1024px] mx-auto px-8 py-8'>
              <div className="flex w-full flex-col gap-4">
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
                    nCountry.discription != "<p>null</p>" ?
                    <Tab key={`Study in ${nCountry.name}`} title={`Study in ${nCountry.name}`}>
                      <div className={
                        nCountry.discription == "<p>null</p>"?
                        'hidden bg-red-50 p-8 rounded-[8px] flex-col gap-4 ':
                        ' bg-red-50 p-8 rounded-[8px] flex flex-col gap-4 '
                      }>
                        {
                          parse(nCountry.discription)
                        } 
                      </div> 
                    </Tab>
                    :
                    ''
                  }
               
                  {
                    nCountry.details_and_scholarship != "<p>null</p>" ?
                    <Tab key="Details And Scholarship" title="Details And Scholarship">
                      <div className={
                        nCountry.details_and_scholarship == "<p>null</p>"?
                        'hidden bg-red-50 p-8 rounded-[8px] flex-col gap-4 ':
                        ' bg-red-50 p-8 rounded-[8px] flex flex-col gap-4 '
                      }>
                        {
                          parse(nCountry.details_and_scholarship)
                        } 
                      </div> 
                    </Tab>
                    :
                    ''
                  }
                  {
                    nCountry.visa_reqrequirementi != "<p>null</p>" ?
                    <Tab key="Student Visa Requirements" title="Student Visa Requirements">
                      <div className={
                        nCountry.visa_reqrequirementi == "<p>null</p>"?
                        'hidden bg-red-50 p-8 rounded-[8px] flex-col gap-4 ':
                        ' bg-red-50 p-8 rounded-[8px] flex flex-col gap-4 '
                      }>
                        {
                          parse(nCountry.visa_reqrequirementi)
                        } 
                      </div> 
                    </Tab>
                    :
                    ''
                  }
             
               
                  
                  {
                    nCountry.details_and_scholarship != "<p>null</p>" ?
                    <Tab key="University Details and Scholarships" title="University Details and Scholarships">
                      <div className={
                        nCountry.details_and_scholarship == "<p>null</p>"?
                        'hidden bg-red-50 p-8 rounded-[8px] flex-col gap-4 ':
                        ' bg-red-50 p-8 rounded-[8px] flex flex-col gap-4 '
                      }>
                        {
                          parse(nCountry.details_and_scholarship)
                        } 
                      </div> 
                    </Tab>
                    :
                    ''
                  }

{
                    nCountry.FAQ != "<p>null</p>" ?
                    <Tab key="FAQ" title="FAQ">
                      <div className={
                        nCountry.FAQ == "<p>null</p>"?
                        'hidden bg-red-50 p-8 rounded-[8px] flex-col gap-4 ':
                        ' bg-red-50 p-8 rounded-[8px] flex flex-col gap-4 '
                      }>
                        {
                          parse(nCountry.FAQ)
                        } 
                      </div> 
                    </Tab>
                    :
                    ''
                  }
                  
                  
                  
                </Tabs>
              </div>  
            </div>
          </section>
          :
          ''
        }
        
    </div>
  )
}

export default CountryScreen