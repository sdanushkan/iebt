import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

const AboutScreen = () => {
  const dispatch = useDispatch()
    const history = useNavigate()
    const location = useLocation()

    useEffect(() => {
      window.scroll(0,0);
    }, [location]);
  return (
    <div className='mt-[500px]'>AboutScreen</div>
  )
}

export default AboutScreen