import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { getEventList } from '../actions/courseActions'

const EventScreen = () => {

    const {date} = useParams()

    const dispatch = useDispatch() 
    const history = useNavigate()
    const location = useLocation()

    const [envent, setEnvent] = useState('')

    const eventList = useSelector(state => state.eventList)
    const { error: eventListError, loading: eventListLoading, eventse } = eventList

    useEffect(() => {
        if(!eventse){
            dispatch(getEventList()) 
          }
    }, [eventse])

    useEffect(() => {
       setEnvent(eventse.find(item => item.date == date))
    }, [date])
    
    useEffect(() => {
        window.scroll(0,0);
      }, [location]);
    
  return (
    <div>EventScreen</div>
  )
}

export default EventScreen