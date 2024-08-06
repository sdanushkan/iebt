import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import {Accordion, AccordionItem} from "@nextui-org/accordion";
import {Tabs, Tab, Card, CardBody, CardHeader, Skeleton} from "@nextui-org/react";
import au1 from '../assets/au1.jpg'

const AboutScreen = () => {
  const dispatch = useDispatch()
    const history = useNavigate()
    const location = useLocation()

    const [selected, setSelected] = React.useState("photos");


    useEffect(() => {
      window.scroll(0,0);
    }, [location]);
  return (
    <div className='h-fit w-full flex flex-col gap-12 pb-12'>
      <section className='h-fit w-full relative bg-black'>
        <img src={au1} alt='' className='h-[300px] w-full object-cover relative z-0 opacity-50' />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pt-16'>
          <p className='text-2xl md:text-4xl text-white font-bold'>About us</p>
        </div>
      </section>

      <section className='h-fit w-full'>
        <div className='h-fit w-full max-w-[1024px] mx-auto px-8 flex flex-col md:flex-row gap-6 md:gap-12 md:items-center'>
          <div className='h-[200px] w-full md:w-[330px] md:h-[330px] md:min-w-[330px] md:min-h-[330px] md:max-w-[330px] md:max-h-[330px] rounded-[16px] md:rounded-full duration-300 flex items-center relative bg-black'>
            <Skeleton className='h-full w-full rounded-[16px] md:rounded-full duration-300 flex items-center absolute bg-[#DA0C0C]'>
            
            </Skeleton>
            <div className='h-full w-full rounded-[16px] md:rounded-full flex items-center absolute bg-black hover:scale-95 duration-300'>
              <img src='https://st2.depositphotos.com/1006009/11827/i/450/depositphotos_118276998-stock-photo-who-are-we-question-on.jpg' alt='' className='h-full w-full rounded-full  object-cover' />
            </div>
          </div>
          {/* <div className='h-[200px] w-full md:w-[330px] md:h-[330px] rounded-[16px] md:rounded-full duration-300 border-8 border-transparent flex items-center relative'>
            <Skeleton className='h-[200px] w-full md:w-[330px] md:h-[330px] rounded-[16px] md:rounded-full bg-[#DA0C0C]'>
              <div className='h-[200px] w-full md:w-[330px] md:h-[330px] rounded-[16px] md:rounded-full duration-300 border-black absolute z-10'></div>
            </Skeleton>
            <div className='h-[200px] w-full md:w-[330px] md:h-[330px] hover:md:w-[320px] hover:md:h-[320px] rounded-full duration-300 border-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30'>
              <img src='https://st2.depositphotos.com/1006009/11827/i/450/depositphotos_118276998-stock-photo-who-are-we-question-on.jpg' alt='' className='h-full w-full rounded-full  object-cover' />
            </div>
          </div> */}
          <div className='w-fit flex flex-col gap-4'>
            <p className='text-2xl md:text-4xl text-black font-bold'>Who We Are?</p>
            <div className='flex flex-col gap-1'>
              <p className='text-sm text-black opacity-50 text-left'>(IEBC) is a higher education institution that specializes in delivering cost-effective and high quality internationally accredited qualifications to a global audience, with a particular emphasis on serving students in Sri Lanka.
                </p>
                <p className='text-sm text-black opacity-50 text-left'>As a dedicated education institution, IEBC offers British-regulated diploma programs at various levels (3, 4, 5, 6, 7, and 8) awarded by British awarding organizations regulated by OFQUAL, leading to the attainment of degrees from prestigious UK and EU universities.
              </p>
              <p className='text-sm text-black opacity-50 text-left'>IEBC is a privately owned and for-profit higher education institute dedicated to providing students with the opportunity to access exceptional British qualifications at significantly reduced tuition fees compared to local higher education providers.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className='h-fit w-full'>
        <div className='h-fit w-full max-w-[1024px] mx-auto px-8 flex flex-col gap-6'>
          <Tabs aria-label="Options" 
          classNames={{
            tabList: "",
            cursor: "bg-[#DA0C0C]",
            tab: "",
            tabContent: "group-data-[selected=true]:text-[white]"
          }}>
            <Tab key="our story" title="Our story">
              <section className='h-fit w-full'>
                <div className='h-fit w-full max-w-[1024px] mx-auto flex flex-col md:flex-row-reverse gap-6 md:items-center md:gap-12'>
                  <div className='h-[200px] w-full md:w-[330px] md:h-[330px] md:min-w-[330px] md:min-h-[330px] md:max-w-[330px] md:max-h-[330px] rounded-[16px] md:rounded-full duration-300 flex items-center relative bg-black'>
                    <Skeleton className='h-full w-full rounded-[16px] md:rounded-full duration-300 flex items-center absolute bg-[#DA0C0C]'>
                    
                    </Skeleton>
                    <div className='h-full w-full rounded-[16px] md:rounded-full flex items-center absolute bg-black hover:scale-95 duration-300'>
                      <img src='https://st2.depositphotos.com/1475009/6978/i/450/depositphotos_69786611-stock-photo-vintage-inscription-made-by-old.jpg' alt='' className='h-full w-full rounded-full  object-cover' />
                    </div>
                  </div>
                  <div className='h-fit flex flex-col gap-4'>
                    <p className='text-2xl md:text-4xl text-black font-bold'>Our story</p>
                    <div className='flex flex-col gap-1'>
                      <p className='text-sm text-black opacity-50 text-left'>The International Educational Business Ca mpus(IEBC) offers students high-quality educational experiences and support services 
                        designed to ensure successful completion of their qualifications. We promote academic and career success by developing critical thinking, effective communication, creativity, and cultural awareness in a safe, accessible, 
                        and affordable learning environment. To meet the needs of our diverse student 
                        population, we prioritize equity and account ability through measurable learning 
                        out comes, ethical data-driven decisions, and a focus on student achievement.
                        </p>
                    </div>
                  </div>

                </div>
              </section>
            </Tab>
            <Tab key="our mission" title="Our mission">
              <section className='h-fit w-full'>
                
                <div className='h-fit w-full max-w-[1024px] mx-auto flex flex-col md:flex-row gap-6 md:items-center'>
                  <div className='h-[200px] w-full md:w-[330px] md:h-[330px] md:min-w-[330px] md:min-h-[330px] md:max-w-[330px] md:max-h-[330px] rounded-[16px] md:rounded-full duration-300 flex items-center relative bg-black'>
                    <Skeleton className='h-full w-full rounded-[16px] md:rounded-full duration-300 flex items-center absolute bg-[#DA0C0C]'>
                    
                    </Skeleton>
                    <div className='h-full w-full rounded-[16px] md:rounded-full flex items-center absolute bg-black hover:scale-95 duration-300'>
                      <img src='https://st3.depositphotos.com/14431644/34729/i/450/depositphotos_347298024-stock-photo-conceptual-hand-writing-showing-our.jpg' alt='' className='h-full w-full rounded-full  object-cover' />
                    </div>
                  </div>
                  <div className='flex flex-col gap-4'>
                    <p className='text-2xl md:text-4xl text-black font-bold'>Our Mission</p>
                    <div className='flex flex-col gap-1'>
                      <p className='text-sm text-black opacity-50 text-left'>Dedicated to being one of the premier campuses on the island, we aim to contribute to society in transformative and enriching ways within a diverse and multi cultural learning environment.</p>
                    </div>
                  </div>
                </div>
              </section> 
            </Tab>
            <Tab key="our vission" title="Our vission">
              <section className='h-fit w-full'>
                <div className='h-fit w-full max-w-[1024px] mx-auto flex flex-col md:flex-row gap-6 md:items-center'>
                  <div className='h-[200px] w-full md:w-[330px] md:h-[330px] md:min-w-[330px] md:min-h-[330px] md:max-w-[330px] md:max-h-[330px] rounded-[16px] md:rounded-full duration-300 flex items-center relative bg-black'>
                    <Skeleton className='h-full w-full rounded-[16px] md:rounded-full duration-300 flex items-center absolute bg-[#DA0C0C]'>
                    
                    </Skeleton>
                    <div className='h-full w-full rounded-[16px] md:rounded-full flex items-center absolute bg-black hover:scale-95 duration-300'>
                      <img src='https://lh4.googleusercontent.com/proxy/DmX2Yo22Z0UtpnAqg0FNbRYLqDrUzMExN69YKgW9aUJtOIHnvcO2M5fPFHXmEE-2TBU4Iq1yWvhaZ1mZqscmIQDnhA' alt='' className='h-full w-full rounded-full  object-cover' />
                    </div>
                  </div>
                  <div className='flex flex-col gap-4'>
                    <p className='text-2xl md:text-4xl text-black font-bold'>Our Vision</p>
                    <div className='flex flex-col gap-1'>
                        <p className='text-sm text-black opacity-50 text-left'>The International Educational Business Campus (IEBC) offers students high-quality educational 
                        experiences and support services designed to ensure successful completion of their qualifications. We promote academic and career success by developing critical thinking, effective communication, creativity, and cultural awareness in a safe, accessible, and affordable learning environment. To meet the needs of our diverse student population, we prioritize equity and accountability through measurable learning outcomes, ethical data driven decisions, and a focus on student achievement.
                        </p>
                    </div>
                  </div>

                </div>
              </section> 
            </Tab>
          </Tabs>
        </div>
      </section>

      <section className='h-fit w-full'>
        <div className='h-fit w-full max-w-[1024px] mx-auto px-8 flex flex-col md:flex-row gap-6'>
          <div className='flex flex-col gap-4'>
            <p className='text-2xl md:text-4xl text-black font-bold'>Our Values</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2'>
              <div className='w-full p-8 border-[1px] border-[#DA0C0C] border-opacity-25 rounded-[16px] flex flex-col gap-1'>
                <p className='text-base font-semibold text-black  text-center sm:text-left'>Excellence</p>
                <p className='text-sm text-black opacity-50 text-left sm:text-left'>Commitment to providing high quality education and support services that foster academic and career success for all students.</p>
              </div>
              <div className='w-full p-8 border-[1px] border-[#DA0C0C] border-opacity-25 rounded-[16px] flex flex-col gap-2'>
                <p className='text-base font-semibold text-black  text-center sm:text-left'>Inclusivity</p>
                <p className='text-sm text-black opacity-50 text-left sm:text-left'>Embracing a diverse and multicultural community, ensuring equity and accessibility in all 
                aspects of the learning environment.</p>
              </div>
              <div className='w-full sm:col-span-2 lg:col-span-1 p-8 border-[1px] border-[#DA0C0C] border-opacity-25 rounded-[16px] flex flex-col gap-2'>
                <p className='text-base font-semibold text-black  text-center sm:text-left'>Integrity</p>
                <p className='text-sm text-black opacity-50 text-left sm:text-left'>Upholding ethical standards and accountability through transparent, data-driven decisions 
                and measurable outcomes that promote student achievement</p>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className='h-fit w-full'>
        <div className='h-fit w-full max-w-[1024px] mx-auto px-8 flex flex-col gap-6'>
          <p className='text-2xl md:text-4xl text-black font-bold'>Culture and Structure</p>
          <div className='h-fit w-full flex flex-col md:flex-row gap-6 lg:gap-12 md:items-center'>      
            <div className='h-[200px] w-full md:w-[330px] md:h-[330px] md:min-w-[330px] md:min-h-[330px] md:max-w-[330px] md:max-h-[330px] rounded-[16px] md:rounded-full duration-300 flex items-center relative bg-black'>
              <Skeleton className='h-full w-full rounded-[16px] md:rounded-full duration-300 flex items-center absolute bg-[#DA0C0C]'>
              
              </Skeleton>
              <div className='h-full w-full rounded-[16px] md:rounded-full flex items-center absolute bg-black hover:scale-95 duration-300'>
                <img src='https://dmh.lacounty.gov/wp-content/uploads/2021/10/LACDMH_Connecting-Our-Community_cc.png' alt='' className='h-full w-full rounded-full  object-cover' />
              </div>
            </div>
            <div className='w-full flex flex-col gap-4'>
              
              <div className='flex flex-col gap-4'>
                <Tabs aria-label="Options" classNames={{
                  tabList: "",
                  cursor: "bg-[#DA0C0C]",
                  tab: "",
                  tabContent: "group-data-[selected=true]:text-[white]"
                }}>
                  <Tab key="culture" title="Culture">
                    <div className='flex flex-col gap-6'>
                      <div className='flex flex-col gap-1'>
                        <p className='text-base font-medium text-black '>Student-Centered</p>
                        <p className='text-sm text-black opacity-50 text-left'>IEBC prioritizes student needs, focusing on personalized learning experiences, accessible support services, and active student involvement in decision-making processes.</p>
                      </div>
                      <div className='flex flex-col gap-1'>
                        <p className='text-base font-medium text-black  '>Innovation and Creativity</p>
                        <p className='text-sm text-black opacity-50 text-left'>Emphasis on innovative teaching methods and creative problem solving. Faculty are encouraged to use technology and modern pedagogical techniques to enhance learning.</p>
                      </div>
                      <div className='flex flex-col gap-1'>
                        <p className='text-base font-medium text-black  '>Continuous Improvement</p>
                        <p className='text-sm text-black opacity-50 text-left'>A culture of continuous feedback and improvement, where students and staff regularly review and enhance processes and practices. Professional development and lifelong learning are highly valued</p>
                      </div>  
                    </div> 
                  </Tab>
                  <Tab key="structure" title="Structure">
                    <div className='flex flex-col gap-6'>
                      <div className='flex flex-col gap-1'>
                        <p className='text-base font-medium text-black  '>Academic Departments</p>
                        <p className='text-sm text-black opacity-50 text-left'>Divided into specialized teams such as teaching/curriculum delivery, testing and evaluation, student enrollment for faculty management.</p>
                      </div>
                      <div className='flex flex-col gap-1'>
                        <p className='text-base font-medium text-black  '>Student Services</p>
                        <p className='text-sm text-black opacity-50 text-left'>Includes academic advising, career counseling. These services ensure students have the resources they need to succeed.</p>
                      </div>
                      <div className='flex flex-col gap-1'>
                        <p className='text-base font-medium text-black  '>Administration</p>
                        <p className='text-sm text-black opacity-50 text-left'>This team sets strategic goals and manages the overall operations of the institute.</p>
                      </div>
                      <div className='flex flex-col gap-1'>
                        <p className='text-base font-medium text-black  '>Finance</p>
                        <p className='text-sm text-black opacity-50 text-left'>This team manages institute’s finances 
                        and engages in budgeting.</p>
                      </div>
                      <div className='flex flex-col gap-1'>
                        <p className='text-base font-medium text-black  '>Operations</p>
                        <p className='text-sm text-black opacity-50 text-left'>Responsible for the maintenance and development of campus infrastructure, ensuring a safe, sustainable, and conducive learning environment</p>
                      </div>  
                    </div>  
                  </Tab>
                </Tabs>                
              </div>
            </div>

          </div>
        </div>
      </section>

  

      <section className='h-fit w-full'>
        <div className='h-fit w-full max-w-[1024px] mx-auto px-8 flex flex-col md:flex-row gap-6 lg:gap-8'>
          
          <div className='w-full flex flex-col gap-4'>
            <p className='w-full text-2xl font-bold text-red-500'>Learning Model</p>
            <div className='h-[200px] min-w-full '>
                <img  src='https://media.sproutsocial.com/uploads/1e_facebook-cover-photo_labels@2x-1.png' alt='' className='h-full w-full object-cover'/>
            </div>
            <div className='flex flex-col gap-4 w-full'>
              
              <Accordion defaultExpandedKeys={["Approaching Comprehensive Learning"]} aria-label="Options">
                <AccordionItem key="Approaching Comprehensive Learning" title={
                  <p className='text-base font-medium'>Approaching Comprehensive Learning</p>
                }>
                  <div className='flex flex-col gap-1'>
                      <p className='text-sm text-black opacity-50 text-left'>IEBC combines independent online study through its IEBC LMS with interactive virtual classrooms and live webinars, creating a blended learning approach. By using advanced technology, a rigorous curriculum, and innovative teaching methods, IEBC delivers a superior learning experience to its students.</p>
                  </div>  
                </AccordionItem>
                <AccordionItem key="Study Material" title={
                  <p className='text-base font-medium'>Study Material</p>
                }>
                  <div className='flex flex-col gap-1'>
                    <p className='text-sm text-black opacity-50 text-left'>Courses are crafted by industry experts with over five years of experience in their fields. Each subject focuses heavily on practical applications and case studies, ensuring a thorough understanding of real world scenarios.</p>
                  </div> 
                </AccordionItem>
                <AccordionItem key="Virtual Learning" title={
                  <p className='text-base font-medium'>Virtual Learning</p>
                }>
                  <div className='flex flex-col gap-1'>
                    <p className='text-sm text-black opacity-50 text-left'>Experienced academic staff from around the country lead our weekly virtual classroom sessions. These sessions provide IEBC students with the comprehensive support and benefits of a traditional full-time program.</p>
                  </div>  
                </AccordionItem>
                <AccordionItem key="E-Mentoring" title={
                  <p className='text-base font-medium'>E-Mentoring</p>
                }>
                  <div className='flex flex-col gap-1'>
                    <p className='text-sm text-black opacity-50 text-left'>IEBC offers a highly efficient e-mentoring system, enabling students to quickly address academic 
                    questions via email and instant messaging. This system ensures personalized and timely support.</p>
                  </div>
                </AccordionItem>
                <AccordionItem key="Web-Based Support Services" title={
                  <p className='text-base font-medium'>Web-Based Support Services</p>
                }>
                  <div className='flex flex-col gap-1'>
                    <p className='text-sm text-black opacity-50 text-left'>Our IEBC Learning Management System (LMS) portal provides comprehensive support and resources, enhancing the overall learning experience.</p>
                  </div>
                </AccordionItem>
              </Accordion> 
            </div>
          </div>

        </div>
      </section>


      
    </div>
  )
}

export default AboutScreen