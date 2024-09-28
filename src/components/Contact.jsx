import React from 'react'
import { prism } from './'
import Form from './Form'
const Contact = () => {
  return (
    <>
    <div className='w-full pt-4 h-full'>
        <div className='w-full relative'>

            <div>
            <img src={prism} alt="svg" className='w-full md:h-[180vh] h-[200vh]' />
            </div>

            <div className='w-full absolute top-0 left-0'>
            <h1 className="text-3xl md:mt-32 mt-12 font-body font-extrabold text-center text-secDark uppercase ">Contact</h1>
            <div className="bg-blue h-[5px] w-[70px] mx-auto mt-2 rounded-xl"></div>

            <p className='md:w-[60%] w-[80%] text-center md:h-auto h-[20rem] text-xl font-display mx-auto py-6 mb-24 font-md'>
                Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
            </div>

            <div className='w-full absolute top-[20rem] left-0'>
                <Form />
            </div>
            </div>

        </div>
    </>
  )
}

export default Contact