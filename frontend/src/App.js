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

const App = () => {
  return (
    <Router>
      <Header/>
      {/* <Chatbot/> */}
      <Routes>
        <Route path='/' element={<HomeScreen/>} />
        <Route path='/aboutUs' element={<AboutScreen/>} />
        <Route path='/contact' element={<ContactScreen/>} />
        <Route path='/:award' element={<CourseFilterScreen/>} />
        <Route path='/:award/:programe' element={<CourseFilterScreen/>} />
        <Route path='/:award/:programe/:credit' element={<CourseFilterScreen/>} />
        <Route path='/:award/:programe/:credit/:keyword' element={<CourseFilterScreen/>} />
        <Route path='/abroad'element={<CountriesScreen/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App