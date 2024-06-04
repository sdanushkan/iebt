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

const App = () => {
  return ( 
    <Router>
      <Header/>
      <Chatbot/>
      <Routes>
        <Route path='/' element={<HomeScreen/>} />
        <Route path='about' element={<AboutScreen/>} />
        <Route path='application' element={<ApplicationScreen/>} />
        <Route path='contact' element={<ContactScreen/>} /> 
        <Route path='countries/:country' element={<CountryScreen/>} />
        <Route path='courses/:course' element={<CourseScreen/>} />
        <Route path='abroad'element={<CountriesScreen/>} />
        <Route path='awarding-body/:name' element={<AwardingBodyScreen/>} />
        <Route path='faculties/:faculty' element={<CourseFilterScreen/>} />
        <Route path='programes/:programe' element={<CourseFilterScreen/>} />
        <Route path='search/:keyword' element={<CourseFilterScreen/>} />
        <Route path='faculties/:faculty/:course' element={<CourseFilterScreen/>} />
        <Route path=':faculty/:programe/:award/:credit' element={<CourseFilterScreen/>} />
        <Route path=':faculty/:programe/:award/:credit/:keyword' element={<CourseFilterScreen/>} />
        
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App