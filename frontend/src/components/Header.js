import React, { useEffect, useState } from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import logo from '../assets/Logo.png'
import { CiMenuBurger, CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import {Tabs, Tab} from "@nextui-org/react"; 
import {Badge} from "@nextui-org/badge";
import { Progress } from "@nextui-org/react";
import { useLoaderData, useLocation, useNavigate ,Link} from 'react-router-dom';
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
import {GrFormAdd, GrFormSubtract, GrFormEdit} from 'react-icons/gr'
import {MdOutlineCancel} from 'react-icons/md'
import { MdOutlineArrowDropDown } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { getFacultyList } from '../actions/courseActions';
import {Accordion, AccordionItem} from "@nextui-org/react";

const Header = () => {
    const [navbar, setNavbar] = useState(false);

    const dispatch = useDispatch()
    const history = useNavigate()
    const location = useLocation()

    const facultyList = useSelector(state => state.facultyList)
    const { error, loading, faculties } = facultyList

    const [selected, setSelected] = useState("/");

    useEffect(() => {
      history(selected)
    }, [selected])
    
    useEffect(() => {
      dispatch(getFacultyList())
    }, [dispatch])
    

  return (
    <section className='relative z-50'>

        {/* navbar */}
        <div className={
            location.pathname == "/login" || location.pathname == "/register" || location.pathname == "/Login" || location.pathname == "/Register"?
            'h-fit w-full z-40 fixed bg-black/50 hidden':
            'h-fit w-full z-40 fixed bg-black/50 md:fixed'
        }>
            <div className='h-fit w-full max-w-[1200px] max-h-[100px] px-2  mx-auto flex justify-between items-center relative border-black/50 py-4'>
                <div className='flex items-center '>
                  {/* <Button isIconOnly variant='light' onClick={() => setNavbar(!navbar)} className='md:hidden' >
                      <IoMenu  className='text-black text-2xl'/>
                  </Button> */}
                  <Link to={'/'}>
                    <img src={logo} alt='' className='h-[72px]' />
                  </Link>
                </div>
                <div className='hidden lg:flex items-center justify-start gap-8'>
                  <Tabs color="primary" variant="underlined" aria-label="Options" 
                  classNames={{
                    tabList: "",
                    cursor: "bg-[#DA0C0C]",
                    tab: "",
                    tabContent: "group-data-[selected=true]:text-[white]"
                  }} selectedKey={selected} onSelectionChange={setSelected}>
                    <Tab key="/" title={
                      <Link to={'/'} className='flex items-center justify-center gap-1'>
                        <p className='cursor-pointer text-sm uppercase text-white'>Home</p>
                        {/* <MdOutlineArrowDropDown className='text-white' /> */}
                      </Link>
                    }>
                    
                    </Tab>
                    <Tab key="/faculties" title={
                      <Dropdown>
                      <DropdownTrigger>
                        <div className='flex items-center justify-center gap-1'>
                          <p className='cursor-pointer text-sm uppercase text-white'>faculties</p>
                          <MdOutlineArrowDropDown className='text-white' />
                        </div>
                      </DropdownTrigger>
                      <DropdownMenu aria-label="Static Actions" className='rounded-none'>
                        {
                          loading?
                          '':
                          faculties?
                          faculties.map(i => (
                            <DropdownItem key={i.id} className=''>
                              <Link to={`/faculties/${i.slug}`} >{i.name}</Link>
                            </DropdownItem>
                          )):
                          ''
                        }
                        
                      </DropdownMenu>
                    </Dropdown>
                    } >
                      
                    </Tab>
                    <Tab key="stdy-abroad" title={
                      <Link to={'/abroad'} className='flex items-center justify-center gap-1'>
                      <p className='cursor-pointer text-sm uppercase text-white'>Study abroad</p>
                      {/* <MdOutlineArrowDropDown className='text-white' /> */}
                    </Link>
                    }>
                      
                    </Tab>

                    <Tab key="contact" title={
                      <Link to={'/contact'} className='flex items-center justify-center gap-1'>
                        <p className='cursor-pointer text-sm uppercase text-white'>Contact us</p>
                        {/* <MdOutlineArrowDropDown className='text-white' /> */}
                      </Link>
                    }>
                      
                    </Tab>
                    <Tab key="about" title={
                      <Link to={'/about'} className='flex items-center justify-center gap-1'>
                        <p className='cursor-pointer text-sm uppercase text-white'>About us</p>
                        {/* <MdOutlineArrowDropDown className='text-white' /> */}
                      </Link >
                    }>
                      
                    </Tab>
                  </Tabs>
                  
                  
                  

                  
                  
                  
                </div>
                <div>
                  <Button color='' className="hidden lg:flex bg-[#DA0C0C] rounded-none text-white font-medium md:px-6 py-6">
                    <p>Pay online</p>
                    <RiSecurePaymentFill />
                  </Button>
                  <Button isIconOnly variant='light' onClick={() => setNavbar(!navbar)} className='lg:hidden bg-[#DA0C0C] rounded-md' >
                      <IoMenu  className='text-white text-2xl'/>
                  </Button>
                </div>
            </div>
            {/* <Progress
            size="sm"
            isIndeterminate
            aria-label="Loading..."
            className="max-w-md"
            /> */}
        </div>


        {/* side navbar */}
        <div className={
            navbar?
            'fixed flex h-screen w-full bg-black bg-opacity-50 z-50 overflow-hidden duration-100 md:hidden':
            'relative h-fit hidden w-full bg-black bg-opacity-0 -z-50 overflow-hidden duration-300 delay-100 md:hidden'
        }>
            
            {/* content */}
            <div className={
                navbar?
                'h-full w-[80%] bg-gray-200 duration-100 delay-100 overflow-hidden p-4':
                'h-full w-[0px] bg-gray-200 duration-300 overflow-hidden p-4'
            }>
              <Button color='' className="w-full flex bg-[#DA0C0C] rounded-none text-white font-medium md:px-6 py-6">
                <p>Pay online</p>
                <RiSecurePaymentFill />
              </Button>
              <div className='flex flex-col py-4'>
                <p className='text-sm font-semibold text-[#DA0C0C] h-12 flex items-center px-2 '>Home</p>
                <Accordion>
                  
                  <AccordionItem key="2" aria-label="Faculties" className='flex flex-col' title={
                    <p className='text-sm font-semibold text-[#DA0C0C]'>Faculties</p>
                  }>
                    {
                      loading?
                      '':
                      faculties?
                      faculties.map(i => (
                        <Link to={`/facuties/${i.slug}`} className=' h-8 flex items-center text-xs px-4 font-medium'>{i.name}</Link>
                      ))
                      :
                      ''
                    }
                  </AccordionItem>
                  
                </Accordion>
                <p className='text-sm font-semibold text-[#DA0C0C] h-12 flex items-center px-2 '>About us</p>
                <p className='text-sm font-semibold text-[#DA0C0C] h-12 flex items-center px-2 '>Contact us</p>
                <p className='text-sm font-semibold text-[#DA0C0C] h-12 flex items-center px-2 '>Contact us</p>
              </div>
            </div>

            {/* close navbar handler area */}
            <div onClick={() => setNavbar(!navbar)} className={
                navbar?
                'ml-auto h-full w-[20%] bg-transparent opacity-100':
                'ml-auto h-full w-[0px] bg-transparent opacity-0'
            }>
            
            </div>
        </div>
    </section>
  )
}

export default Header


// <Navbar className='py-4'>
//         <NavbarBrand>
//             <img src={logo} alt='' className='h-12'></img>
//         </NavbarBrand>
//         <NavbarContent>
//             <NavbarItem className='border-b-2 border-rose-600 hover:border-rose-500 duration-200'>
//                 <Link color="foreground" href="#" className='text-sm text-black'>
//                     Home
//                 </Link>
//             </NavbarItem>
//             <NavbarItem>
//                 <Link color="foreground" href="#" className='text-sm text-black'>
//                     Cart
//                 </Link>
//             </NavbarItem>
//         </NavbarContent>
//     </Navbar>