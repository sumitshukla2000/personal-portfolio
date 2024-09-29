import React from 'react'
import { prism } from './'
import Form from './Form'
const Contact = () => {
  return (
    <>
    <div id='contact' className='w-full h-full min-h-screen'>
        <div className='w-full bg-secDark pb-12'>

            {/* <div className='max-h-[200vh]'>
            <img src={prism} alt="svg" className='w-full' />
            </div> */}

            <div className='w-full'>
            <h1 className="text-3xl md:mt-24 pt-12 mt-12 font-body font-extrabold text-center text-whitee uppercase ">Contact</h1>
            <div className="bg-blue h-[5px] w-[70px] mx-auto mt-2 rounded-xl"></div>

            <p className='md:w-[60%] w-[80%] text-center md:h-auto text-xl font-display mx-auto py-8 mb-4  font-md text-whitee'>
                Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
            </div>

            <div className='w-full'>
                <Form />
            </div>
            </div>

        </div>
    </>
  )
}

export default Contact