import React, { useEffect, useState } from 'react'
import {Tabs, Tab, Input, Link, Button, Card, CardBody, CardHeader} from "@nextui-org/react";import { MdAccessTime } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import {Divider} from "@nextui-org/react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { find } from 'lodash';
import { getCountryList } from '../actions/abroadActions';
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/react";
import {Textarea} from "@nextui-org/input";
import { RiSecurePaymentFill } from "react-icons/ri";

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
                <img src={nCountry.image} alt='' className='h-[400px] w-full object-cover relative -z-40' />
                
                <div className='w-full h-fit max-w-[1100px] mx-auto bg-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] -mt-[100px] relative z-10 grid grid-cols-1 md:grid-cols-5 md:gap-4 p-12'>
                    <div className='w-full h-full md:col-span-3  flex flex-col gap-2'>
                      <div className=''>
                        <p className='text-3xl font-bold capitalize'>send message</p>
                        <p></p>
                      </div>
                      <div className='flex flex-col gap-4 py-8'>
                        <div className=' flex gap-4'>
                          <Input
                            type="text"
                            placeholder="Full name"
                            labelPlacement="outside"
                            variant="bordered"
                            
                            className='w-full shadow-none rounded-none'
                            radius='sm'
                            size='md'
                            // endContent={
                            //   // <VscSymbolKeyword />
                            // }
                          />
                          <Input
                            type="text"
                            placeholder="Last Name"
                            labelPlacement="outside"
                            variant="bordered"
                            
                            className='w-full shadow-none rounded-none'
                            radius='sm'
                            size='md'
                            // endContent={
                            //   // <VscSymbolKeyword />
                            // }
                          />
                        </div>
                        <div className=' flex gap-4'>
                          <Input
                            type="text"
                            placeholder="Mobile"
                            labelPlacement="outside"
                            variant="bordered"
                            
                            className='w-full shadow-none rounded-none'
                            radius='sm'
                            size='md'
                            // endContent={
                            //   // <VscSymbolKeyword />
                            // }
                          />
                          <Input
                            type="text"
                            placeholder="Email"
                            labelPlacement="outside"
                            variant="bordered"
                            
                            className='w-full shadow-none rounded-none'
                            radius='sm'
                            size='md'
                            // endContent={
                            //   // <VscSymbolKeyword />
                            // }
                          />
                        </div>
                        <div className=' flex gap-4'>
                          <Input
                            type="text"
                            placeholder="Country"
                            labelPlacement="outside"
                            variant="bordered"
                            
                            className='w-full shadow-none rounded-none'
                            radius='sm'
                            size='md'
                            // endContent={
                            //   // <VscSymbolKeyword />
                            // }
                          />
                          <Input
                            type="text"
                            placeholder="why do you plan to study"
                            labelPlacement="outside"
                            variant="bordered"
                            
                            className='w-full shadow-none rounded-none'
                            radius='sm'
                            size='md'
                            // endContent={
                            //   // <VscSymbolKeyword />
                            // }
                          />
                        </div>
                        
                        <Button color='' size='md' className="hidden lg:flex bg-[#DA0C0C] text-white font-medium rounded-md">
                          <p>Submit</p>
                          <RiSecurePaymentFill  />
                        </Button>
                      </div>
                    </div>

                    <div className='w-full h-full md:col-span-2 flex flex-col gap-4 border-[1px] p-4'>
                        {/* <img src={nCountry.qualification.image} alt='' className='w-full h-fit bg-cover' />
                        <p className='text-xs font-semibold text-[#DA0C0C]' >{nCountry.qualification.name}</p> */}
                    </div>
                </div>
            </section>:
            ''
        }
        
    </div>
  )
}

export default CountryScreen