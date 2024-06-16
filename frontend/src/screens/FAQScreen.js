import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import {Accordion, AccordionItem} from "@nextui-org/accordion";
import {Tabs, Tab, Card, CardBody, CardHeader} from "@nextui-org/react";


const FAQScreen = () => {
  const dispatch = useDispatch()
    const history = useNavigate()
    const location = useLocation()

    const [selected, setSelected] = React.useState("photos");


    useEffect(() => {
      window.scroll(0,0);
    }, [location]);
  return (
    <div className='h-fit w-full flex flex-col gap-12 pb-12'>
      <section className='h-fit w-full relative bg-black '>
        <img src={'https://www.smtusa.com/uploads/faqs.jpg'} alt='' className='h-[300px] w-full object-cover object-top relative z-0 opacity-50' />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pt-16'>
          <p className='text-2xl text-white font-bold'>FAQ</p>
        </div>
      </section>
      <section className='h-fit w-full'>
        <div className='h-fit w-full max-w-[1024px] mx-auto px-4 flex flex-col gap-6'>
          <Tabs 
            aria-label="Options"         
            selectedKey={selected}
            onSelectionChange={setSelected}
            classNames={{
              tabList: "",
              cursor: "bg-[#DA0C0C]",
              tab: "",
              tabContent: "group-data-[selected=true]:text-[white]"
            }}
          >
            <Tab key="application" title="Application">
              <div className='h-fit w-full flex flex-col gap-2'>
                
                <Accordion defaultExpandedKeys={["1"]} >
                  <AccordionItem key="1" aria-label="Accordion 1" title={
                    <p className='text-base font-medium'>1. Do we need prior experience to follow any program at IEBC?</p>
                  }>
                    <p className='text-sm text-black/50'>
                      Basic programs such as Diplomas require O/L. To enroll in any program at IEBC, you need an O/L English 
                      Credit pass or an equivalent Diploma qualification from IEBC for a Level 3 program. For a Level 4/5 
                      program, you need an A/L or a Level 3 program. To follow a Level 6 program or a Bachelor’s Degree, you 
                      need an accepted Higher National Diploma or Higher Diploma from a recognized University. For a 
                      Postgraduate Diploma, you need at least 5 years of working experience or a Graduate 
                      Diploma/Bachelor’s Degree. To enroll in the Top Up – Master’s Program, you need a Postgraduate 
                      Diploma with 120 credits. For the Full Master’s Program, you need an O/L English Credit pass and a fully 
                      completed Bachelor’s Degree
                    </p>
                  </AccordionItem>
                  <AccordionItem key="2" aria-label="Accordion 2" title={
                    <p className='text-base font-medium'>2. How do I choose the best course for me?</p>
                  }>
                    <div className='flex flex-col gap-4'>
                      <p className='text-sm text-black/50'>Learners should first visit the IEBC to explore the available courses. Choose a subject you enjoy and that will help you achieve your goals. Consider the following when selecting the right course:
                      </p>
                      <div className='flex flex-col gap-2'>
                        <p className='text-sm text-black/40'>- Review the course modules: Are they interesting and relevant to your career path?</p>
                        <p className='text-sm text-black/40'>- Course delivery and assessment: Are you motivated for distance learning and able to work independently?</p>
                      </div>
                      <p className='text-sm text-black/50'>It’s important not to overextend yourself. Choose a path that aligns with your current skills and experience</p>
                    </div>
                  </AccordionItem>
                  <AccordionItem key="3" aria-label="Accordion 3" title={
                    <p className='text-base font-medium'>3. How do I apply for a course?</p>
                  }>
                    <p className='text-sm text-black/50'>You can choose and enroll in a course online via the Online Application. Alternatively, you can call the IEBC Enrolments Team at +94 77 828 9898, and they will guide you through the enrollment process.</p>
                  </AccordionItem>
                </Accordion>
              </div>
            </Tab>
            <Tab key="cost" title="Cost">
              <div className='h-fit w-full flex flex-col gap-2'>
                
                <Accordion defaultExpandedKeys={["1"]} >
                  <AccordionItem key="1" aria-label="Accordion 1" title={
                    <p className='text-base font-medium'>1. Is the online payment accepted immediately?</p>
                  }>
                    <p className='text-sm text-black/50'>
                    Yes. Once ENC receives the cleared funds, your course material will be released to you immediately.
                    </p>
                  </AccordionItem>
                  <AccordionItem key="2" aria-label="Accordion 2" title={
                    <p className='text-base font-medium'>2. Does the campus provide financial assistance?
                    </p>
                  }>
                    <div className='flex flex-col gap-4'>
                      <p className='text-sm text-black/50'>IEBC offers an interest-free payment plan up to three months from initial registration. Contact one of our student advisers/coordinators for more information or request at info@iebc.lk or payments@iebc.lk. IEBC students may also be eligible for student scholarships for the university top-up programs.
                      </p>
                    </div>
                  </AccordionItem>
                  <AccordionItem key="3" aria-label="Accordion 3" title={
                    <p className='text-base font-medium'>3. Is there likely to be any additional costs?                </p>
                  }>
                    <p>No additional costs are levied by IEBC. All additional learning resources, including tutor support, ebooks, are included in the course tuition fees. For more information related to Student Support, contact +94 77 429 7270 or email student.support@iebc.l</p>
                  </AccordionItem>
                  <AccordionItem key="3" aria-label="Accordion 3" title={
                    <p className='text-base font-medium'>4. How much do assessments cost?</p>
                  }>
                    <p>Assessments are included with the course purchases. If a student submits the assessment late, a second assessment penalty will be applied upon the late submission.</p>
                  </AccordionItem>
                </Accordion>
              </div>  
            </Tab>
            <Tab key="credibility" title="Credibility">
              <div className='h-fit w-full flex flex-col gap-2'>
                
                <Accordion defaultExpandedKeys={["1"]} >
                  <AccordionItem key="1" aria-label="Accordion 1" title={
                    <p className='text-base font-medium'>1. What are the educational partnerships with IEBC?
                    </p>
                  }>
                    <p className='text-sm text-black/50'>
                    We are closely working with three UK Government-regulated awarding standards. These are assured programs that are also EU University attested
                    </p>
                  </AccordionItem>
                  <AccordionItem key="2" aria-label="Accordion 2" title={
                    <p className='text-base font-medium'>2. How are the universities linked with the modules?
                    </p>
                  }>
                    <div className='flex flex-col gap-4'>
                      <p className='text-sm text-black/50'>Learners who achieve an IEBC qualification are automatically mapped against a standard UK and EU Higher Education qualification framework. This is a universally recognized framework of credits, allowing universities to award credits for IEBC study and provide exemptions from large parts of their formal programs.
                      </p>
                    </div>
                  </AccordionItem>
                </Accordion>
              </div>  
            </Tab>
            <Tab key="assignments" title="Assignments">
              <div className='h-fit w-full flex flex-col gap-2'>
                
                <Accordion defaultExpandedKeys={["1"]} >
                  <AccordionItem key="1" aria-label="Accordion 1" title={
                    <p className='text-base font-medium'>1. Do we have to make a payment for assignments? </p>
                  }>
                    <p className='text-sm text-black/50'>
                    All assignment submissions are free of charge. However, if a student submits an assignment late, a second penalty fee will be applied.
                    </p>
                  </AccordionItem>
                  <AccordionItem key="2" aria-label="Accordion 2" title={
                    <p className='text-base font-medium'>2. Do I receive help and guidance for writing the assignments?
                    </p>
                  }>
                    <div className='flex flex-col gap-4'>
                      <p className='text-sm text-black/50'>Yes, all students receive guidance for the preparation of assignments. Students can get assignment support from the Assignment Tutor via academic@iebc.lk. Additionally, students are updated with relevant details in the Student Guideline Document shared with them.
                      </p>
                    </div>
                  </AccordionItem>
                  <AccordionItem key="3" aria-label="Accordion 3" title={
                    <p className='text-base font-medium'>3. How can I submit my assignments?</p>
                  }>
                    <p>Submissions need to be uploaded via the IEBC LMS, in the 'Assignments' section. Students must also submit the assignments for a plagiarism check at academic@iebc.lk</p>
                  </AccordionItem>
                  <AccordionItem key="4" aria-label="Accordion 3" title={
                    <p className='text-base font-medium'>4. How do I receive the assignments?
                    </p>
                  }>
                    <p>Assignments are released to students upon enrolment and are uploaded to the IEBC LMS under each module.</p>
                  </AccordionItem>
                  <AccordionItem key="5" aria-label="Accordion 3" title={
                    <p className='text-base font-medium'>5. Will I be writing exams?

                    </p>
                  }>
                    <p>Yes, you will be writing exams based on the course you are following. Have a look at our courses published in our website to know which qualification is exam-based.</p>
                  </AccordionItem>
                </Accordion>
              </div> 
            </Tab>
            <Tab key="general" title="General">
              <div className='h-fit w-full flex flex-col gap-2'>
                
                <Accordion defaultExpandedKeys={["1"]} >
                  <AccordionItem key="1" aria-label="Accordion 1" title={
                    <p className='text-base font-medium'>1.What is IEBC?
                    </p>
                  }>
                    <p className='text-sm text-black/50'>
                    International Education and Business Campus (IEBC) works in partnership with UK and EU governmentregulated awarding bodies, universities, and colleges to offer globally recognized undergraduate and postgraduate qualifications in Sri Lanka.
                    </p>
                  </AccordionItem>
                  <AccordionItem key="2" aria-label="Accordion 2" title={
                    <p className='text-base font-medium'>2.What does IEBC do?
                    </p>
                  }>
                    <div className='flex flex-col gap-4'>
                      <p className='text-sm text-black/50'>International Education and Business Campus (IEBC) is dedicated to providing a wide range of undergraduate and postgraduate courses at an affordable cost. All learning activities, materials, and content are provided online using modern delivery models to make learning more engaging and costeffective.
                      </p>
                    </div>
                  </AccordionItem>
                  <AccordionItem key="3" aria-label="Accordion 3" title={
                    <p className='text-base font-medium'>3. Where is IEBC located?
                    </p>
                  }>
                    <p>International Education and Business Campus is located at the following address:</p>
                    <p>International Education and Business Campus </p>
                    <p>No. 85 1/2, Galle Road, Dehiwala,</p>
                    <p>Sri Lanka</p>
                  </AccordionItem>
                </Accordion>
              </div>  
            </Tab>
            <Tab key="personal details" title="Personal Details">
              <div className='h-fit w-full flex flex-col gap-2'>
                
                <Accordion defaultExpandedKeys={["1"]} >
                  <AccordionItem key="1" aria-label="Accordion 1" title={
                    <p className='text-base font-medium'>1. How do I change my personal contact details once I have given them to IEBC?
                    </p>
                  }>
                    <p className='text-sm text-black/50'>
                    You can edit your personal details by contacting your coordinator and providing the updated information
                    </p>
                  </AccordionItem>
                  <AccordionItem key="2" aria-label="Accordion 2" title={
                    <p className='text-base font-medium'>2. Can I still access my Student Dashboard if I have finished my course?

                    </p>
                  }>
                    <div className='flex flex-col gap-4'>
                      <p className='text-sm text-black/50'>Access to the IEBC Dashboard is available for a maximum of 3 to 6 months from the program end date. 
    This can be extended upon written request to the IEBC Student Administration Team at info@iebc.lk
                      </p>
                    </div>
                  </AccordionItem>
                  <AccordionItem key="3" aria-label="Accordion 3" title={
                    <p className='text-base font-medium'>3. If I have forgotten my username/password and cannot log in to my dashboard, how can I get access?
                    </p>
                  }>
                    <p>If students have lost or forgotten their login details, they can request a new password by providing their 
    email address. Email academic@iebc.lk for more assistance.</p>
                  </AccordionItem>
                </Accordion>
              </div> 
            </Tab>
            <Tab key="progression" title="Progression">
              <div className='h-fit w-full flex flex-col gap-2'>
                
                <Accordion defaultExpandedKeys={["1"]} >
                  <AccordionItem key="1" aria-label="Accordion 1" title={
                    <p className='text-base font-medium'>1. Am I able to further my higher studies through IEBC?

                    </p>
                  }>
                    <p className='text-sm text-black/50'>
                    The IEBC programs are mapped against UK and EU higher education qualifications, which are fully 
    transferable to a range of other higher education routes and professional qualifications. We accept 
    students who have completed the Diploma to enroll in the ENC Level 4/5 Program. Upon completing the 
    ENC Level 4/5 program, students will be awarded 240 credits (equivalent to the first 2 years of an 
    undergraduate degree). They can then proceed to the final year at one of the qualification-accepted 
    universities. Similarly, at Level 7, students gain 120 credits out of a total of 180 credits for a Master’s 
    program. They can then complete the remaining credits at an accepted university partner.

                    </p>
                  </AccordionItem>
                  <AccordionItem key="2" aria-label="Accordion 2" title={
                    <p className='text-base font-medium'>2. What potential job opportunities are available after I complete the course?


                    </p>
                  }>
                    <div className='flex flex-col gap-4'>
                      <p className='text-sm text-black/50'>Once you successfully complete your final year at university, you will have a full BA degree or 
                      postgraduate qualification that will open doors to many career opportunities.
                      </p>
                    </div>
                  </AccordionItem>
                </Accordion>
              </div>
            </Tab>
            <Tab key="student support" title="Student Support">
              <div className='h-fit w-full flex flex-col gap-2'>
                
                <Accordion defaultExpandedKeys={["1"]} >
                  <AccordionItem key="1" aria-label="Accordion 1" title={
                    <p className='text-base font-medium'>1. What do I do if I am struggling?


                    </p>
                  }>
                    <p className='text-sm text-black/50'>
                    We have a dedicated academic support team who are ready to support students with any relevant issues.

                    </p>
                  </AccordionItem>
                  <AccordionItem key="2" aria-label="Accordion 2" title={
                    <p className='text-base font-medium'>2. How much support is available for students?



                    </p>
                  }>
                    <div className='flex flex-col gap-4'>
                      <p className='text-sm text-black/50'>Learners can use the Online IEBC Portal with the given access to view the uploaded lessons, lecture 
                      videos, and other relevant information
                      </p>
                    </div>
                  </AccordionItem>
                </Accordion>
              </div>
            </Tab>
            <Tab key="studying" title="Studying">
              <div className='h-fit w-full flex flex-col gap-2'>
                
                <Accordion defaultExpandedKeys={["1"]} >
                  <AccordionItem key="1" aria-label="Accordion 1" title={
                    <p className='text-base font-medium'>1. How do I achieve a qualification?</p>
                  }>
                    <p className='text-sm text-black/50'>
                    You need to complete all the modules detailed in your required course option plus all the associated 
    assessments to complete the IEBC course according to the university. This will give you the recognized 
    university credits. You can study the modules at your own pace.
                    </p>
                  </AccordionItem>
                  <AccordionItem key="2" aria-label="Accordion 2" title={
                    <p className='text-base font-medium'>2. Do I need a specific computer to study with IEBC?




                    </p>
                  }>
                    <div className='flex flex-col gap-4'>
                      <p className='text-sm text-black/50'>As long as you have internet access, any computer or tablet can be used to complete online modules 
                      and courses. You can also study on your phone with our mobile-friendly content.
                      </p>
                    </div>
                  </AccordionItem>

                  <AccordionItem key="3" aria-label="Accordion 2" title={
                    <p className='text-base font-medium'>2. What study materials do I need to follow the course at IEBC?



                    </p>
                  }>
                    <div className='flex flex-col gap-4'>
                      <p className='text-sm text-black/50'>The modules themselves are sufficient for passing the associated assessments, which are available on 
    the IEBC LMS. The modules contain additional accessible resources that learners may wish to follow to 
    enhance their learning, and these are provided within the text.
                      </p>
                    </div>
                  </AccordionItem>

                  <AccordionItem key="4" aria-label="Accordion 2" title={
                    <p className='text-base font-medium'>3. What is a Certificate of Completion?





                    </p>
                  }>
                    <div className='flex flex-col gap-4'>
                      <p className='text-sm text-black/50'>When you pass a module or an assessment, it generates a certificate of completion which details the 
    module content, level of study, and learning outcomes achieved. It is mapped against formal UK 
    educational quality guidelines defined by the university or awarding body. If you are a student following 
    a program from OTHM, you will receive an e-certificate. If the student is registered under QUALIFI or any 
    other qualification, you will receive a hard copy of the certificate.
                      </p>
                    </div>
                  </AccordionItem>

                  <AccordionItem key="4" aria-label="Accordion 2" title={
                    <p className='text-base font-medium'>3. Do all modules have exams?
                    </p>
                  }>
                    <div className='flex flex-col gap-4'>
                      <p className='text-sm text-black/50'>No. Some courses and qualifications are exam-based and some are assessment-based.

                      </p>
                      <p className='text-sm text-black/50'>Based on the program chosen, the student will have to sit for the exam for all the modules or complete 
    the assignments for all the modules in order to complete the program. Explore our website to know the 
    type of assessment (examination or written assessment).

                      </p>
                    </div>
                  </AccordionItem>
                  <AccordionItem key="5" aria-label="Accordion 2" title={
                    <p className='text-base font-medium'>3. Will I be able to complete a 3-year Bachelor’s Degree in 2 years?

                    </p>
                  }>
                    <div className='flex flex-col gap-4'>
                      <p className='text-sm text-black/50'>Yes, students who successfully complete their IEBC Level 4 & 5 in 1 year will receive a Level 4 & 5 
    Diploma from IEBC. With proper guidance and learning hours, along with a full syllabus of high standard, 
    they can proceed to the Bachelor’s Degree or Graduate Diploma with a preferred IEBC affiliate UK/EU 
    University or an awarding organization respectively
                      </p>
                    </div>
                  </AccordionItem>

                  <AccordionItem key="6" aria-label="Accordion 2" title={
                    <p className='text-base font-medium'>3. Will I be able to get a Master’s Degree in 12 months?


                    </p>
                  }>
                    <div className='flex flex-col gap-4'>
                      <p className='text-sm text-black/50'>Yes, IEBC provides 12-month postgraduate study content with 120 credits and an additional 6 months 
                      for a dissertation.
                      </p>
                    </div>
                  </AccordionItem>

                  <AccordionItem key="7" aria-label="Accordion 2" title={
                    <p className='text-base font-medium'>7. Can I go to the UK for graduation?
                    </p>
                  }>
                    <div className='flex flex-col gap-4'>
                      <p className='text-sm text-black/50'>Students will be eligible to go to the UK for graduation if the university accepts to invite the students for 
    graduation overseas. If so, IEBC will provide the necessary guidance for students to migrate for 
    graduation.
                      </p>
                    </div>
                  </AccordionItem>

                  <AccordionItem key="8" aria-label="Accordion 2" title={
                    <p className='text-base font-medium'>8. Who will award the degree?

                    </p>
                  }>
                    <div className='flex flex-col gap-4'>
                      <p className='text-sm text-black/50'>All our qualifications will be awarded by UK and EU government-regulated awarding bodies based on 
                      the course the student is following
                      </p>
                    </div>
                  </AccordionItem>

                  <AccordionItem key="9" aria-label="Accordion 2" title={
                    <p className='text-base font-medium'>9. What is a Level 3 qualification?


                    </p>
                  }>
                    <div className='flex flex-col gap-4'>
                      <p className='text-sm text-black/50'>The Level 3 qualifications improve subject knowledge and study skills and prepare learners for 
                      undergraduate courses at UK universities.
                      </p>
                    </div>
                  </AccordionItem>

                  <AccordionItem key="10" aria-label="Accordion 2" title={
                    <p className='text-base font-medium'>10. What are Level 4, 5 & 6 qualifications?



                    </p>
                  }>
                    <div className='flex flex-col gap-4'>
                      <p className='text-sm text-black/50'>The Level 4, 5, and 6 qualifications are equivalent to Year 1, 2, and 3 (final year) respectively of a threeyear UK Bachelor’s degree. Each level consists of 120 credits. Completing any of the Level 4, 5, and 6 
                      qualifications will enable learners to progress to the next level of higher education at UK universities.
                      </p>
                    </div>
                  </AccordionItem>

                  <AccordionItem key="11" aria-label="Accordion 2" title={
                    <p className='text-base font-medium'>11. What is a Top-up Master’s?




                    </p>
                  }>
                    <div className='flex flex-col gap-4'>
                      <p className='text-sm text-black/50'>The Top-up Master’s is an esteemed postgraduate qualification that provides an overview of key 
    business practices and is highly valued by top employers and businesses globally. This is offered to 
    students who already possess the Level 7 qualification.
                      </p>
                      <div className='flex flex-col gap-2'>
                        <div>
                          <p className='text-sm text-black font-bold'>QUALIFI</p>
                          <p className='text-sm text-black/50'>QUALIFI qualifications are an excellent way to demonstrate learning accomplishments and skills for 
      career growth. They are credible, accessible, and recognized in many countries. QUALIFI was founded to 
      give learners ways to access and demonstrate valuable and relevant learning. QUALIFI awards are an 
      excellent choice for career-motivated learners to continue their commitment to lifelong learning.
      </p>
                        </div>

                        <div>
                          <p className='text-sm text-black font-bold'>OTHM</p>
                          <p className='text-sm text-black/50'>OTHM is a global provider of British qualifications. OTHM is an established and recognized awarding 
    organization (certification body) regulated and approved by Ofqual.

      </p>
                        </div>

                        <div>
                          <p className='text-sm text-black font-bold'>LRN</p>
                          <p className='text-sm text-black/50'>Learning Resource Network (LRN) is an awarding body creating qualifications for educational 
    institutions, independent learning providers, and employers. LRN is recognized for its portfolio of 
    international English qualifications, providing evidence of English language skills for professional or 
    personal development. These qualifications are internationally recognized for proving the skills and 
    abilities required by educational institutes, professional bodies, and governments. LRN offers 
    qualifications that are easy to deliver, cost-effective, and user-friendly.

      </p>
                        </div>
                      </div>
                    </div>
                  </AccordionItem>
                </Accordion>
              </div>
            </Tab>
          </Tabs>
        </div>
      </section>
    </div>
  )
}

export default FAQScreen