import React, { useEffect, useState } from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, DropdownSection} from "@nextui-org/react";
import logo from '../assets/Logo.png'
import { CiMenuBurger, CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import {Tabs, Tab} from "@nextui-org/react"; 
import {Badge} from "@nextui-org/badge";
import { Progress } from "@nextui-org/react";
import { useLoaderData, useLocation, useNavigate ,Link} from 'react-router-dom';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
import {GrFormAdd, GrFormSubtract, GrFormEdit} from 'react-icons/gr'
import {MdOutlineCancel} from 'react-icons/md'
import { MdOutlineArrowDropDown } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { getCourseList, getFacultyList, getLevelList } from '../actions/courseActions';
import { Accordion, AccordionItem} from "@nextui-org/react";
import { HiOutlineMenu } from "react-icons/hi";

const Header = () => {
    const [navbar, setNavbar] = useState(false);

    const dispatch = useDispatch()
    const history = useNavigate()
    const location = useLocation()

    const facultyList = useSelector(state => state.facultyList)
    const { error, loading, faculties } = facultyList

    const levelList = useSelector(state => state.levelList)
    const { error:levelListError, loading: levelListLoading, levels } = levelList

    const [selected, setSelected] = useState("/");

    useEffect(() => {
      history(selected)
    }, [selected])

    useEffect(() => {
      if (location.pathname == '/'){
        setSelected('/')
      }

    }, [location])
    
    useEffect(() => {
      dispatch(getFacultyList())
      dispatch(getLevelList())
    }, [dispatch])
    

  return (
    <section className='relative z-50'>

        {/* navbar */}
        <Navbar 
        classNames={{
          item: [
            "flex",
            "flex-col",
            "relative",
            "h-full",
            "px-0",
            "items-center",
            "data-[active=true]:after:content-['']",
            "data-[active=true]:after:absolute",
            "data-[active=true]:after:bottom-0",
            "data-[active=true]:after:left-0",
            "data-[active=true]:after:right-0",
            "data-[active=true]:after:h-[2px]",
            "data-[active=true]:after:rounded-[2px]",
            "data-[active=true]:after:bg-primary",
          ],
        }}
        shouldHideOnScroll height={'fit'} maxWidth='full' className={
            location.pathname == "/login" || location.pathname == "/register" || location.pathname == "/Login" || location.pathname == "/Register"?
            'h-fit w-full z-40 fixed bg-black/50 hidden px-0':
            'h-fit w-full z-40 fixed bg-black/50 md:fixed px-0'
        }>
            <div className='h-fit w-full max-w-[1200px] max-h-[100px] mx-auto flex justify-between items-center relative border-black/50 py-4'>
                <div className='flex items-center '>
                  {/* <Button isIconOnly variant='light' onClick={() => setNavbar(!navbar)} className='md:hidden' >
                      <IoMenu  className='text-black text-2xl'/>
                  </Button> */}
                  <Link to={'/'}>
                    <img src={logo} alt='' className='h-[56px] lg:h-[64px]' />
                  </Link>
                </div>
                <div className='hidden lg:flex items-center justify-start gap-4'>
                  <Dropdown
                    showArrow
                    backdrop="blur"
                    classNames={{
                      base: "before:bg-default-200 mt-[16px]", // change arrow background
                      content: "py-1 px-1 border border-default-200 bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black flex pb-0 ",
                    }}
                  >
                    <DropdownTrigger>
                      <div className='flex items-center justify-center gap-1'>
                        <p className='cursor-pointer font-semibold text-xs uppercase text-white/50 focus:text-white'>Home</p>
                      </div>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Static Actions" className='rounded-none flex  grid-cols-2 pb-0'>
                      <DropdownSection className='pb-0'>
                        <DropdownItem onHoverChange={'bg-[#ffffff]'} className='p-0 bg-transparent'>
                          <Button variant='light' size='sm' className='text-left w-full'>
                              <Link to={'/'} className='text-left w-full'>Home</Link>
                          </Button> 
                        </DropdownItem>
                        <DropdownItem onHoverChange={'bg-[#ffffff]'} className='p-0 bg-transparent'>
                          <Button variant='light' size='sm' className='text-left w-full'>
                              <Link to={'/about'} className='text-left w-full'>About Us</Link>
                          </Button>
                        </DropdownItem>
                        
                      </DropdownSection>
                      
                     
                      
                    </DropdownMenu>
                  </Dropdown> 
                  <Dropdown
                    showArrow
                    backdrop="blur"
                    classNames={{
                      base: "before:bg-default-200 mt-[16px]", // change arrow background
                      content: "py-1 px-1 border border-default-200 bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black flex pb-0 ",
                    }}
                  >
                    <DropdownTrigger>
                      <div className='flex items-center justify-center gap-1'>
                        <p className='cursor-pointer font-semibold text-xs uppercase text-white/50 focus:text-white'>Courses</p>
                      </div>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Static Actions" className='rounded-none flex  grid-cols-2 pb-0'>
                      <DropdownSection className='pb-0'>
                        <DropdownItem onHoverChange={'bg-[#ffffff]'} className='p-0 bg-transparent'>
                          <div className='bg-gradient-to-br p-4'>
                            <div className='grid grid-cols-2 gap-4'>
                              <div className='w-full flex flex-col'>
                                <p className='text-left text-base font-semibold text-black '>Courses</p>
                                {
                                  levelListLoading?
                                  '':
                                  levels?
                                  levels.map(i => (
                                    <Button variant='light' key={i.id} size='sm' className='text-left w-full'>
                                      <Link to={`/level/${i.slug}`} className='text-left w-full'>{i.name}</Link>
                                    </Button>
                                  )):
                                  ''
                                }
                              </div>

                              <div className='w-full flex flex-col'>
                                <p className='text-left text-base font-semibold text-black '>Faculties</p>
                                {
                                  loading?
                                  '':
                                  faculties?
                                  faculties.map(i => (
                                    <Button variant='light' key={i.id} size='sm' className='text-left w-full'>
                                      <Link to={`/faculties/${i.slug}`} className='text-left w-full'>{i.name}</Link>
                                    </Button>
                                  )):
                                  ''
                                }
                              </div>
                            </div>
                          </div>
                        </DropdownItem>
                        
                      </DropdownSection>
                      
                     
                      
                    </DropdownMenu>
                  </Dropdown> 
                  {/* <Dropdown
                    showArrow
                    backdrop="blur"
                    classNames={{
                      base: "before:bg-default-200 mt-[16px]", // change arrow background
                      content: "py-1 px-1 border border-default-200 bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black flex pb-0 ",
                    }}
                  >
                    <DropdownTrigger>
                      <div className='flex items-center justify-center gap-1'>
                        <p className='cursor-pointer font-semibold text-xs uppercase text-white/50 focus:text-white'>Study Abroad </p>
                      </div>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Static Actions" className='rounded-none flex  grid-cols-2 pb-0'>
                      <DropdownSection className='pb-0'>
                        <DropdownItem onHoverChange={'bg-[#ffffff]'} className='p-0 bg-transparent'>
                          <Button variant='light' size='sm' className='text-left w-full'>
                              <Link to={'/abroad'} className='text-left w-full'>Destinations</Link>
                          </Button> 
                        </DropdownItem>
                        <DropdownItem onHoverChange={'bg-[#ffffff]'} className='p-0 bg-transparent'>
                          <Button variant='light' size='sm' className='text-left w-full'>
                              <Link to={'/abroad/about'} className='text-left w-full'>About Us</Link>
                          </Button>
                        </DropdownItem>
                        
                      </DropdownSection>
                      
                     
                      
                    </DropdownMenu>
                  </Dropdown>  */}
                  <Tabs color="primary" variant="underlined" aria-label="Options" 
                  classNames={{
                    tabList: "text-",
                    cursor: "bg-[#DA0C0C]",
                    tab: "max-w-fit ",
                    tabContent: "group-data-[selected=true]:text-[white] focus:font-semibold text-white/50 hover:text-white "
                  }} selectedKey={selected} onSelectionChange={setSelected}>
                
                    <Tab key="/" className='hidden' title={
                          <Link to={'/'} className='items-center justify-center gap-1 hidden'>
                            <p className='cursor-pointer font-semibold text-xs uppercase '>Home</p>
                            {/* <MdOutlineArrowDropDown className='text-white' /> */}
                          </Link>
                        }>
                          
                    </Tab>
                    <Tab key="abroad" title={
                      <Link to={'/abroad'} className='flex items-center justify-center gap-1'>
                        <p className='cursor-pointer font-semibold text-xs uppercase '>Study broad</p>
                        {/* <MdOutlineArrowDropDown className='text-white' /> */}
                      </Link>
                    }>
                      
                    </Tab>
                    <Tab key="contact" title={
                      <Link to={'/contact'} className='flex items-center justify-center gap-1'>
                        <p className='cursor-pointer font-semibold text-xs uppercase '>Contact us</p>
                        {/* <MdOutlineArrowDropDown className='text-white' /> */}
                      </Link>
                    }>
                      
                    </Tab>
                    <Tab key="dual" title={
                      <Link to={'/dual'} className='flex items-center justify-center gap-1'>
                        <p className='cursor-pointer font-semibold text-xs uppercase '>dual qualification</p>
                        {/* <MdOutlineArrowDropDown className='text-white' /> */}
                      </Link>
                    }>
                      
                    </Tab>
                    {/* <Tab key="about" title={
                      <Link to={'/about'} className='flex items-center justify-center gap-1'>
                        <p className='cursor-pointer font-semibold text-xs uppercase '>About us</p>
                        <MdOutlineArrowDropDown className='text-white' />
                      </Link >
                    }>
                    </Tab> */}
                    {/* <Tab key="abroad" title={
                      <Link to={'/abroad'} className='flex items-center justify-center gap-1'>
                      <p className='cursor-pointer font-semibold text-xs uppercase '>Study abroad</p>
                      <MdOutlineArrowDropDown className='text-white' />
                    </Link>
                    }>

                      
                      
                    </Tab> */}
                  </Tabs>
                  

                  
                </div>
      
                <div>
                  <Button color='' className="hidden lg:flex bg-[#DA0C0C] text-sm text-white px-2 md:px-5 py-2 md:py-3 rounded-full">
                    <p>Pay online</p>
                  </Button>
                  <Button isIconOnly variant='light' onClick={() => setNavbar(!navbar)} className="lg:hidden flex bg-[#DA0C0C] text-xs lg:text-sm text-white px-2 md:px-5 py-2 md:py-3 rounded-full">
                    <HiOutlineMenu />
                  </Button>
                </div>
            </div>
            {/* <section className=' flex items-center justify-center gap-4 py-2 bg-gray-100 fixed top-[90px]'>
              <Link className='text-sm '>About</Link>
            </section> */}
            {/* <Progress
            size="sm"
            isIndeterminate
            aria-label="Loading..."
            className="max-w-md"
            /> */}
        </Navbar>
        


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
              {/* <Button color='' className="w-full flex bg-[#DA0C0C] rounded-none text-white font-medium md:px-6 py-6">
                <p>Pay online</p>
                <RiSecurePaymentFill />
              </Button> */}
              <div className='flex flex-col py-4'>
                <Link onClick={() => setNavbar(!navbar)} to={'/'} className='text-sm font-semibold text-[#DA0C0C] h-12 flex items-center px-2 '>Home</Link>
                <Accordion defaultExpandedKeys={['2']}>
                  
                <AccordionItem key="2" aria-label="Faculties" className='flex flex-col' title={
                  <p className='text-sm font-semibold text-[#DA0C0C]'>Courses</p>
                }>
                  { 
                    levelListLoading?
                    '':
                    levels?
                    levels.map(i => (
                      <Link onClick={() => setNavbar(!navbar)} to={`/facuties/${i.slug}`} className=' h-8 flex items-center text-xs px-4 font-medium'>{i.name}</Link>
                    )):
                    ''
                  }
                </AccordionItem>

                  <AccordionItem key="3" aria-label="Faculties" className='flex flex-col' title={
                    <p className='text-sm font-semibold text-[#DA0C0C]'>Faculties</p>
                  }>
                    {
                      loading?
                      '':
                      faculties?
                      faculties.map(i => (
                        <Link onClick={() => setNavbar(!navbar)} to={`/facuties/${i.slug}`} className=' h-8 flex items-center text-xs px-4 font-medium'>{i.name}</Link>
                      ))
                      :
                      ''
                    }
                  </AccordionItem>
                  
                </Accordion>
                <Link onClick={() => setNavbar(!navbar)} to={'/abroad'} className='text-sm font-semibold text-[#DA0C0C] h-12 flex items-center px-2 '>Study abroad</Link>
                <Link onClick={() => setNavbar(!navbar)} to={'/contact'} className='text-sm font-semibold text-[#DA0C0C] h-12 flex items-center px-2 '>Contact us</Link>
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