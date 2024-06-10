import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import {Accordion, AccordionItem} from "@nextui-org/accordion";
import {Tabs, Tab, Card, CardBody, CardHeader} from "@nextui-org/react";


const AboutScreen = () => {
  const dispatch = useDispatch()
    const history = useNavigate()
    const location = useLocation()

    const [selected, setSelected] = React.useState("photos");


    // useEffect(() => {
    //   window.scroll(0,0);
    // }, [location]);
  return (
    <div className='h-fit w-full flex flex-col gap-12 pb-12'>
      <section className='h-fit w-full relative bg-black'>
        <img src={'https://static.vecteezy.com/system/resources/previews/015/634/808/non_2x/circular-hud-connection-with-circuit-board-futuristic-modern-website-background-or-cover-page-for-technology-and-finance-concept-and-education-future-company-vector.jpg'} alt='' className='h-[400px] w-full object-cover relative z-0 opacity-50' />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pt-16'>
          <p className='text-2xl text-white font-bold'>About us</p>
        </div>
      </section>

      <section className='h-fit w-full'>
        <div className='h-fit w-full max-w-[1024px] mx-auto px-8 flex flex-col md:flex-row gap-6'>
          <div className='h-[300px] w-full bg-red-500'>

          </div>
          <div className='flex flex-col gap-4'>
            <p className='text-2xl text-black font-bold'>Who We Are?</p>
            <div className='flex flex-col gap-1'>
              <p className='text-sm text-black opacity-50'>International Education and Business Campus
                  (IEBC) i s a hi gher educati on i nstituti on that 
                  speci ali zes i n deli veri ng cost -eff ecti ve and hightquality i nternati onall y accredi ted qualifi cati ons to 
                  a gl obal audi ence, wi th a parti cul ar emphasi s on 
                  ser vi ng students i n Sri Lanka.
                </p>
                <p className='text-sm text-black opacity-50'>As a dedi cat ed educati on instituti on, I EBC off ers 
                  Bri tish-r egul ated di pl oma progr a ms at vari ous 
                  l evel s (3, 4, 5, 6, 7, and 8) awar ded by Bri ti sh 
                  a war di ng or gani zati ons regul ated by OFQUAL, 
                  l eadi ng to the attai nment of degr ees from 
                  prestigi ous UK and EU universities .
              </p>
              <p className='text-sm text-black opacity-50'>IEBC i s a privately owned and f or -profit higher educati on i nstitute dedi cat ed to provi di ng st udents 
              with the opport unity to access excepti onal 
              Bri tish qualifi cati ons at si gnifi cantl y reduced 
              tuiti on fees co mpar ed to local hi gher educati on 
              pr ovi ders .
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className='h-fit w-full'>
        <div className='h-fit w-full max-w-[1024px] mx-auto px-4 flex flex-col gap-6'>
          <Tabs aria-label="Options" >
            <Tab key="our story" title="Our story">
              <section className='h-fit w-full'>
                <div className='h-fit w-full max-w-[1024px] mx-auto px-4 flex flex-col md:flex-row gap-6'>
                  <div className='h-[300px] w-full bg-red-500'>

                  </div>
                  <div className='flex flex-col gap-4'>
                    <p className='text-2xl text-black font-bold'>Our story?</p>
                    <div className='flex flex-col gap-1'>
                      <p className='text-sm text-black opacity-50'>The International Educational Business Ca mpus(IEBC) offers students high-quality educational experiences and support services 
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
                <div className='h-fit w-full max-w-[1024px] mx-auto px-4 flex flex-col md:flex-row gap-6'>
                  <div className='flex flex-col gap-4'>
                    <p className='text-2xl text-black font-bold'>Our Mission</p>
                    <div className='flex flex-col gap-1'>
                      <p className='text-sm text-black opacity-50'>Dedicated to being one of the premier campuses on the island, we aim to contribute to society in transformative and enriching ways within a diverse and multi cultural learning environment.</p>
                    </div>
                  </div>
                </div>
              </section> 
            </Tab>
            <Tab key="our vission" title="Our vission">
              <section className='h-fit w-full'>
                <div className='h-fit w-full max-w-[1024px] mx-auto px-4 flex flex-col md:flex-row gap-6'>
                  <div className='h-[300px] w-full bg-red-500'>

                  </div>
                  <div className='flex flex-col gap-4'>
                    <p className='text-2xl text-black font-bold'>Our Vision</p>
                    <div className='flex flex-col gap-1'>
                        <p className='text-sm text-black opacity-50'>The International Educational Business Campus (IEBC) offers students high-quality educational 
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
            <p className='text-2xl text-black font-bold'>Our Values</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2'>
              <div className='w-full p-8 border-[1px] border-black/25 flex flex-col gap-1'>
                <p className='text-base font-semibold text-black  text-center sm:text-left'>Excellence</p>
                <p className='text-sm text-black opacity-50 text-center sm:text-left'>Commitment to providing high quality education and support services that foster academic and career success for all students.</p>
              </div>
              <div className='w-full p-8 border-[1px] border-black/25 flex flex-col gap-2'>
                <p className='text-base font-semibold text-black  text-center sm:text-left'>Inclusivity</p>
                <p className='text-sm text-black opacity-50 text-center sm:text-left'>Embracing a diverse and multicultural community, ensuring equity and accessibility in all 
                aspects of the learning environment.</p>
              </div>
              <div className='w-full sm:col-span-2 lg:col-span-1 p-8 border-[1px] border-black/25 flex flex-col gap-2'>
                <p className='text-base font-semibold text-black  text-center sm:text-left'>Integrity</p>
                <p className='text-sm text-black opacity-50 text-center sm:text-left'>Upholding ethical standards and accountability through transparent, data-driven decisions 
                and measurable outcomes that promote student achievement</p>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className='h-fit w-full'>
        <div className='h-fit w-full max-w-[1024px] mx-auto px-8 flex flex-col gap-6'>
          <p className='text-2xl text-black font-bold'>Culture and Structure</p>
          <div className='h-fit w-full flex flex-col md:flex-row gap-6 lg:gap-12'>      
            <div className='h-[250px] md:min-h-full w-full md:w-[400px] lg:w-[500px] bg-red-500'>

            </div>
            <div className='w-full flex flex-col gap-4'>
              
              <div className='flex flex-col gap-4'>
                <Tabs aria-label="Options">
                  <Tab key="culture" title="Culture">
                    <div className='flex flex-col gap-6'>
                      <div className='flex flex-col gap-1'>
                        <p className='text-base font-medium text-black '>Student-Centered</p>
                        <p className='text-sm text-black opacity-50'>IEBC prioritizes student needs, focusing on personalized learning experiences, accessible support services, and active student involvement in decision-making processes.</p>
                      </div>
                      <div className='flex flex-col gap-1'>
                        <p className='text-base font-medium text-black  '>Innovation and Creativity</p>
                        <p className='text-sm text-black opacity-50'>Emphasis on innovative teaching methods and creative problem solving. Faculty are encouraged to use technology and modern pedagogical techniques to enhance learning.</p>
                      </div>
                      <div className='flex flex-col gap-1'>
                        <p className='text-base font-medium text-black  '>Continuous Improvement</p>
                        <p className='text-sm text-black opacity-50'>A culture of continuous feedback and improvement, where students and staff regularly review and enhance processes and practices. Professional development and lifelong learning are highly valued</p>
                      </div>  
                    </div> 
                  </Tab>
                  <Tab key="structure" title="Structure">
                    <div className='flex flex-col gap-6'>
                      <div className='flex flex-col gap-1'>
                        <p className='text-base font-medium text-black  '>Academic Departments</p>
                        <p className='text-sm text-black opacity-50'>Divided into specialized teams such as teaching/curriculum delivery, testing and evaluation, student enrollment for faculty management.</p>
                      </div>
                      <div className='flex flex-col gap-1'>
                        <p className='text-base font-medium text-black  '>Student Services</p>
                        <p className='text-sm text-black opacity-50'>Includes academic advising, career counseling. These services ensure students have the resources they need to succeed.</p>
                      </div>
                      <div className='flex flex-col gap-1'>
                        <p className='text-base font-medium text-black  '>Administration</p>
                        <p className='text-sm text-black opacity-50'>This team sets strategic goals and manages the overall operations of the institute.</p>
                      </div>
                      <div className='flex flex-col gap-1'>
                        <p className='text-base font-medium text-black  '>Finance</p>
                        <p className='text-sm text-black opacity-50'>This team manages institute’s finances 
                        and engages in budgeting.</p>
                      </div>
                      <div className='flex flex-col gap-1'>
                        <p className='text-base font-medium text-black  '>Operations</p>
                        <p className='text-sm text-black opacity-50'>Responsible for the maintenance and development of campus infrastructure, ensuring a safe, sustainable, and conducive learning environment</p>
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
          
          <div className='flex flex-col gap-4'>
            <p className='text-2xl font-bold text-red-500'>Learning Model</p>
            <div className='h-[200px] w-full bg-red-500'>

            </div>
            <div className='flex flex-col gap-4'>
              
              <Accordion defaultExpandedKeys={["Approaching Comprehensive Learning"]} aria-label="Options">
                <AccordionItem key="Approaching Comprehensive Learning" title={
                  <p className='text-base font-medium'>Approaching Comprehensive Learning</p>
                }>
                  <div className='flex flex-col gap-1'>
                      <p className='text-sm text-black opacity-50'>IEBC combines independent online study through its IEBC LMS with interactive virtual classrooms and live webinars, creating a blended learning approach. By using advanced technology, a rigorous curriculum, and innovative teaching methods, IEBC delivers a superior learning experience to its students.</p>
                  </div>  
                </AccordionItem>
                <AccordionItem key="Study Material" title={
                  <p className='text-base font-medium'>Study Material</p>
                }>
                  <div className='flex flex-col gap-1'>
                    <p className='text-sm text-black opacity-50'>Courses are crafted by industry experts with over five years of experience in their fields. Each subject focuses heavily on practical applications and case studies, ensuring a thorough understanding of real world scenarios.</p>
                  </div> 
                </AccordionItem>
                <AccordionItem key="Virtual Learning" title={
                  <p className='text-base font-medium'>Virtual Learning</p>
                }>
                  <div className='flex flex-col gap-1'>
                    <p className='text-sm text-black opacity-50'>Experienced academic staff from around the country lead our weekly virtual classroom sessions. These sessions provide IEBC students with the comprehensive support and benefits of a traditional full-time program.</p>
                  </div>  
                </AccordionItem>
                <AccordionItem key="E-Mentoring" title={
                  <p className='text-base font-medium'>E-Mentoring</p>
                }>
                  <div className='flex flex-col gap-1'>
                    <p className='text-sm text-black opacity-50'>IEBC offers a highly efficient e-mentoring system, enabling students to quickly address academic 
                    questions via email and instant messaging. This system ensures personalized and timely support.</p>
                  </div>
                </AccordionItem>
                <AccordionItem key="Web-Based Support Services" title={
                  <p className='text-base font-medium'>Web-Based Support Services</p>
                }>
                  <div className='flex flex-col gap-1'>
                    <p className='text-sm text-black opacity-50'>Our IEBC Learning Management System (LMS) portal provides comprehensive support and resources, enhancing the overall learning experience.</p>
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