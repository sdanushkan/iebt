import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import AboutScreen from './screens/AboutScreen'
import Header from './components/Header'
import Footer from './components/Footer'
import CountryScreen from './screens/CountryScreen'
import ContactScreen from './screens/ContactScreen'
import CourseFilterScreen from './screens/CourseFilterScreen'
import CountriesScreen from './screens/CountriesScreen'
import CourseScreen from './screens/CourseScreen'
import Chatbot from './components/Chatbot'
import ApplicationScreen from './screens/ApplicationScreen'
import AwardingBodyScreen from './screens/AwardingBodyScreen'
import FAQScreen from './screens/FAQScreen'
import AbroadAboutUsScreen from './screens/AbroadAboutUsScreen'
import OurServicesScreen from './screens/OurServicesScreen'
import DualQualificationScreen from './screens/DualQualificationScreen'
import DQSecondPage from './screens/DQSecondPage'
import DQCourseScreen from './screens/DQCourseScreen'
import VerifyCertificatScreen from './screens/VerifyCertificatScreen'
import StudentPortalScreen from './screens/StudentPortalScreen'
import ELibraryScreen from './screens/ELibraryScreen'

const App = () => {
  return ( 
    <Router>
      <Header/>
      <Chatbot/>
      <Routes>
        <Route path='/' element={<HomeScreen/>} />
        <Route path='about' element={<AboutScreen/>} />
        <Route path='student/portal' element={<StudentPortalScreen/>} />
        <Route path='faq' element={<FAQScreen/>} />
        <Route path='application' element={<ApplicationScreen/>} />
        <Route path='ourservices' element={<OurServicesScreen/>} />
        <Route path='verify' element={<VerifyCertificatScreen/>} />
        <Route path='contact' element={<ContactScreen/>} /> 
        <Route path='dual' element={<DualQualificationScreen/>} /> 
        <Route path='dual/:qualification' element={<DQSecondPage/>} />
        <Route path='qualification/:qualification' element={<DQSecondPage/>} /> 
        <Route path='dual/courses/:course' element={<DQCourseScreen/>} /> 
        <Route path='abroad/about' element={<AbroadAboutUsScreen/>} />  
        <Route path='countries/:country' element={<CountryScreen/>} />
        <Route path='courses/:courseSlug' element={<CourseScreen/>} /> 
        <Route path='abroad'element={<CountriesScreen/>} />
        <Route path='e_library'element={<ELibraryScreen/>} />
        <Route path='awarding-body/:name' element={<AwardingBodyScreen/>} />
        <Route path='courses/:faculty/:programe/:award/:credit' element={<CourseFilterScreen/>} />
        {/* <Route path=':faculty/:programe/:award/:credit/:keyword' element={<CourseFilterScreen/>} /> */}
        
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App