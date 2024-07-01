import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {Accordion, AccordionItem} from "@nextui-org/accordion";
import {Tabs, Tab, Card, CardBody, CardHeader, Skeleton, Tooltip} from "@nextui-org/react";
import bg from '../assets/bg.gif'


const AbroadAboutUsScreen = () => {
  const dispatch = useDispatch()
    const history = useNavigate()
    const location = useLocation()

    const [selected, setSelected] = React.useState("photos");


    // useEffect(() => {
    //   window.scroll(0,0);
    // }, [location]);
  return (
    <div className='h-fit w-full flex flex-col gap-12'>
      <section className='h-fit w-full relative bg-black'>
        <img src={'https://t4.ftcdn.net/jpg/05/08/80/19/360_F_508801991_UTsCAOorx25USitqonfRADueJlzyjhDq.jpg'} alt='' className='h-[300px] w-full object-cover relative z-0 opacity-50' />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pt-16'>
          <p className='text-2xl md:text-4xl text-white font-bold'>About Us - IEBC</p>
        </div>
      </section>

      

      {/* <section>
        <div>
            <p>Book Appointment</p>
        </div>
      </section> */}

      <section className='h-fit w-full'>
        <div className='h-fit w-full max-w-[1024px] mx-auto px-8 flex flex-col md:flex-row gap-6 md:gap-12 md:items-center'>
          <div className='h-[200px] w-full md:w-[330px] md:h-[330px] md:min-w-[330px] md:min-h-[330px] md:max-w-[330px] md:max-h-[330px] rounded-[16px] md:rounded-full duration-300 flex items-center relative bg-black'>
            <Skeleton className='h-full w-full rounded-[16px] md:rounded-full duration-300 flex items-center absolute bg-[#DA0C0C]'>
            
            </Skeleton>
            <div className='h-full w-full rounded-[16px] md:rounded-full flex items-center absolute bg-black hover:scale-95 duration-300'>
              <img src='https://media.istockphoto.com/id/1304225026/photo/top-view-of-mobile-phone-glasses-pen-and-notebook-written-with-about-us-on-wooden-background.jpg?s=612x612&w=0&k=20&c=YhbAlzZONGfWt-Qm5W10Z0-Z8waHkblhtZEbRh4E0bM=' alt='' className='h-full w-full rounded-full  object-cover object-right' />
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
            <p className='text-2xl md:text-4xl text-black font-bold'>About us</p>
            <div className='flex flex-col gap-1'>
                <p className='text-sm text-black opacity-50 text-left'>With extensive industry experience and a high success rate in admissions and visa approvals, we have established a prominent position in our field. In addition to these achievements, we offer premium services such as career counseling, country and university selection, course guidance, admission procedures, SOP assistance, education loans, and visa services. Our team of counselors is readily available to address students' queries and ensure all concerns are resolved. We are dedicated to expanding our network with leading universities in highly sought-after countries to provide students with superior options.
                </p>
                <p className='text-sm text-black opacity-50 text-left'>We dispel misconceptions and alleviate concerns students may have about studying abroad.
                </p>
                <p className='text-sm text-black opacity-50 text-left'>At IEBC Global, we conduct regular training sessions for our counselors, admissions team, and visa team to keep them updated on the latest information and requirements of relevant departments. We provide comprehensive assistance to students in every aspect of their study abroad journey.
                </p>
            </div>
          </div>
        </div>
      </section>


      <section className='h-fit w-full relative overflow-hidden px-8 bg-red-50 py-12 lg:py-16'>
        <div className='h-fit w-full max-w-[1024px] mx-auto justify-center gap-6 '>
          <div className='flex flex-col pb-8'>
            <p className='uppercase text-xs text-center'>Questions</p>
            <p className='text-2xl lg:text-4xl font-bold text-center'>Why Learn with us?</p>
          </div>
          <div className='w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center gap-4 place-content-evenly'>

            <Tooltip showArrow={true} content={
              <div className='p-4 max-w-[500px] '>
               Supported by a team of highly qualified professionals, we adeptly fulfill students' exact requirements. Leveraging profound knowledge and experience, we offer the best available study options based on factors like previous qualifications, areas of interest, academic achievements, and budget considerations.
              </div>
            } placement='bottom'>
              <div className='h-[175px] w-full min-w-full border-[1px] border-gray-300 rounded-[8px] flex  flex-col items-center justify-center gap-2 px-8 mx-auto'>
                <img src='https://d65ixtnmlqq6w.cloudfront.net/wp-content/uploads/2023/11/diploma_12608865.webp' alt='' className='h-[80px] w-[80px] object-cover'/>
                <p className='text-base font-bold text-center'>Expertise and Experience
                </p>
              </div>
            </Tooltip>

            <Tooltip showArrow={true} content={
              <div className='p-4 max-w-[500px] '>
                We maintain a broad network spanning countries such as Canada, Australia, New Zealand, UK, USA, Eastern Europe, and all Asian countries, providing expert Visa Consultancy services with meticulous guidance.

              </div>
            } placement='bottom'>
              <div className='h-[175px] w-full min-w-full border-[1px] border-gray-300 rounded-[8px] flex  flex-col items-center justify-center gap-2 px-8 mx-auto'>
                <img src='https://d65ixtnmlqq6w.cloudfront.net/wp-content/uploads/2023/11/businessman_998412.webp' alt='' className='h-[80px] w-[80px] object-cover'/>
                <p className='text-base font-bold text-center'>Network and Connections</p>
              </div>
            </Tooltip>

            <Tooltip showArrow={true} content={
              <div className='p-4 max-w-[500px] '>
                We maintain transparency in their processes, ensuring students understand requirements and procedures clearly.
              </div>
            } placement='bottom'>
              <div className='h-[175px] w-full min-w-full border-[1px] border-gray-300 rounded-[8px] flex  flex-col items-center justify-center gap-2 px-8 mx-auto'>
                <img src='https://d65ixtnmlqq6w.cloudfront.net/wp-content/uploads/2023/11/policy.webp' alt='' className='h-[80px] w-[80px] object-cover'/>
                <p className='text-base font-bold text-center'>Transparency and Integrity</p>
              </div>
            </Tooltip>

            <Tooltip showArrow={true} content={
              <div className='p-4 max-w-[500px] '>
                We provide end-to-end services including document preparation, application submission, and follow-up with authorities.
              </div>
            } placement='bottom'>
              <div className='h-[175px] w-full min-w-full border-[1px] border-gray-300 rounded-[8px] flex  flex-col items-center justify-center gap-2 px-8 mx-auto'>
                <img src='https://d65ixtnmlqq6w.cloudfront.net/wp-content/uploads/2023/11/24-hours.webp' alt='' className='h-[80px] w-[80px] object-cover'/>
                <p className='text-base font-bold text-center'>Comprehensive Services
                </p>
              </div>
            </Tooltip>

            

            
          </div>
        </div>
      </section>

      <section className='h-fit w-full'>
        <div className='h-fit w-full max-w-[1024px] mx-auto px-8 flex flex-col md:flex-row gap-6 lg:gap-8'>
          
          <div className='w-full flex flex-col gap-4'>
            <p className='w-full text-2xl font-bold text-red-500'>Why Choose IEBC?</p>
            <div className='h-fit min-w-full '>
                <p className='text-left'>Opting for IEBC Global to shape your career is a prudent decision, as we are recognized as the top overseas education consultants in Sri Lanka. Our success is driven by hard work and logical experience, upheld by ethical business practices that ensure reliable services.</p>
                {/* <img  src='https://media.sproutsocial.com/uploads/1e_facebook-cover-photo_labels@2x-1.png' alt='' className='h-full w-full object-cover'/> */}
            </div>
            <div className='flex flex-col gap-4 w-full'>
              
              <Accordion defaultExpandedKeys={["Specialized Departments "]} aria-label="Options">
                <AccordionItem key="Specialized Departments " title={
                  <p className='text-lg font-semibold'>Specialized Departments </p>
                }>
                  <div className='flex flex-col gap-1'>
                      <p className='text-sm text-black opacity-50 text-left'>At IEBC Global, we have dedicated departments ensuring smooth operations and accurate handling of  documents and visa files. Each department is responsible for its tasks, delivering comprehensive services to students.</p>
                  </div>  
                </AccordionItem>
                <AccordionItem key="Authenticity and Transparency" title={
                  <p className='text-lg font-semibold'>Authenticity and Transparency</p>
                }>
                  <div className='flex flex-col gap-1'>
                    <p className='text-sm text-black opacity-50 text-left'>Authenticity is a cornerstone of our organization, earning us trust and respect within the industry. We maintain transparency throughout the admission and visa processes, reinforcing our credibility.</p>
                  </div> 
                </AccordionItem>
                <AccordionItem key="Direct Access to University Representatives" title={
                  <p className='text-lg font-semibold'>Direct Access to University Representatives</p>
                }>
                  <div className='flex flex-col gap-1'>
                    <p className='text-sm text-black opacity-50 text-left'>Understanding students' need for accurate information, we organize regular seminars where 
                    universities visit our offices, allowing students direct interaction and enrollment opportunities.</p>
                  </div>  
                </AccordionItem>
                <AccordionItem key="100% Student Satisfaction" title={
                  <p className='text-lg font-semibold'>100% Student Satisfaction</p>
                }>
                  <div className='flex flex-col gap-1'>
                    <p className='text-sm text-black opacity-50 text-left'>Our commitment to student satisfaction is unwavering. From enrollment to graduation, we provide continuous support, establishing a friendly and supportive relationship with our students.</p>
                  </div>
                </AccordionItem>
                <AccordionItem key="Career Guidance" title={
                  <p className='text-lg font-semibold'>Career Guidance</p>
                }>
                  <div className='flex flex-col gap-1'>
                    <p className='text-sm text-black opacity-50 text-left'>Our experienced counselors provide expert guidance on study programs and destination countries, 
                    presenting both positive and negative aspects to aid informed decision-making for your career.</p>
                  </div>
                </AccordionItem>
                <AccordionItem key="Proven Excellence" title={
                  <p className='text-lg font-semibold'>Proven Excellence</p>
                }>
                  <div className='flex flex-col gap-1'>
                    <p className='text-sm text-black opacity-50 text-left'>IEBC Global has a proven track record of delivering high-quality, customized support that consistently 
                    achieves successful outcomes, setting benchmarks in the industry.</p>
                  </div>
                </AccordionItem>
              </Accordion> 
            </div>
          </div>

        </div>
      </section>

      <section className='h-fit w-full'>
        <div className='h-fit w-full'>
            <img src={bg} alt='' className='h-[200px] w-full object-cover' />
        </div>
      </section>


      {/* <section className='h-fit w-full '>
        <div className='h-fit w-full max-w-[1024px] mx-auto px-8 flex flex-col gap-6'>
          <p className='text-2xl md:text-4xl font-bold text-[#DA0C0C] text-center'>LANGUAGE ENTRY TEST</p>
          <div className='h-fit w-full flex flex-col md:flex-row gap-6 lg:gap-12'>      
            
            <div className='w-full flex flex-col gap-4 text-left'>
              
                <p>For students aspiring to study abroad in English-taught programs, proving English language proficiency is a crucial requirement. Numerous standardized tests are recognized globally to assess non-native speakers'English skills. These exams are designed to evaluate the ability to understand lectures, participate in discussions, and complete academic assignments.
                </p>

                <p>
                Commonly accepted English proficiency tests include IELTS Academic, TOEFL iBT, PTE Academic, C1 Advanced, and B2 First. While these tests share similarities, each has unique features and formats. 

                </p>

                <p>Each test has specific scoring criteria and expiration policies, typically requiring scores to be recent (within two years). Prospective students should verify the specific test requirements of their chosen universities to ensure they meet the necessary standards. Preparation resources, including practice tests, are available online to help candidates choose the best test for their needs.</p>
            </div>

          </div>
        </div>
      </section>

      <section className='h-fit w-full '>
        <div className='h-fit w-full max-w-[1024px] mx-auto px-8 flex flex-col gap-6'>
          <p className='text-2xl md:text-4xl font-bold text-[#DA0C0C] text-center'>LIVING ABROAD</p>
          
          
          <div className='h-fit max-w-full grid grid-cols-1 md:grid-cols-2 gap-4'>
            <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2Fiebc.lk%2Fvideos%2F390059596804608%2F&show_text=false&width=560&t=0" className='w-full h-[300px] object-cover' frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
            
            <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2Fiebc.lk%2Fvideos%2F1113865666370498%2F&show_text=false&width=560&t=0" className='w-full h-[300px] object-cover' frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>

            <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2Fiebc.lk%2Fvideos%2F1113865666370498%2F&show_text=false&width=560&t=0" className='w-full h-[300px] object-cover' frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>

            <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2FIEBCGlobal%2Fvideos%2F137729791776490%2F&show_text=false&width=560&t=0" className='w-full h-[300px] object-cover' frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
          </div>
          <div className='h-fit w-full flex flex-col md:flex-row gap-6 lg:gap-12'>      
            
            <div className='w-full flex flex-col gap-4 text-left'>
              
                <p>
                  Adjusting to life abroad involves navigating a new culture, managing daily responsibilities, and building a support network. Initially, acclimating to a different culture, language, and traditions can be both challenging and exciting, and culture shock is a common experience that can be overwhelming for some.
                </p>
                <p>
                  Living abroad also means taking on various responsibilities, such as doing your laundry, cooking meals, and balancing studies, often while working part-time. Tackling these tasks with a positive attitude and organizational skills is crucial.
                </p>
                <p>
                  Lastly, creating a support network by making friends, engaging in communal activities, and embracing the opportunities of student life abroad helps you feel more comfortable and at home in your new environment. This sense of belonging can make the experience so fulfilling that you may not want to leave.
                </p>
            </div>

          </div>
        </div>
      </section> */}

      
    </div>
  )
}

export default AbroadAboutUsScreen