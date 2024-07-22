import React, { useEffect, useState } from 'react'
import {Input} from "@nextui-org/input";
import { BiSearch } from 'react-icons/bi';
import { checkVerifiedStudent } from '../actions/courseActions';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Spinner } from '@nextui-org/react';

const VerifyCertificatScreen = () => {
  const studentVerification = useSelector(state => state.studentVerification)
  const { error, loading, student } = studentVerification

  const [NIC, setNIC] = useState('')

  const dispatch = useDispatch()
  const history = useNavigate()
  const location = useLocation()

  useEffect(() => {
    dispatch(checkVerifiedStudent(NIC))
  }, [dispatch, NIC])

  useEffect(() => {
    window.scroll(0,0);
  }, [location]);
  

  return (
    <div className='min-h-screen py-8 pt-[128px]'>
        <div className='h-fit w-full max-w-[1024px] mx-auto px-6'>
            <Input size={'md'} type="text" variant='flat' className='' value={NIC} onChange={(e) => setNIC(e.target.value)}  placeholder='Enter student id' endContent={<BiSearch/>}/>
        </div>
        <div className='h-fit w-full max-w-[1024px] mx-auto px-6 flex items-center justify-center'>
            <div className='h-[300px] w-full flex items-center justify-center'>
              
              {
              loading?
              <Spinner size='lg'></Spinner>:
              student ?
              student.name?
              <p className='text-green-500 font-bold text-2xl'>Student verification done successfully</p>:
              <p className='text-red-500 font-bold text-2xl'>There is no student founded!</p>:
              ''
            }
            </div>
        </div>
    </div>
  )
}

export default VerifyCertificatScreen