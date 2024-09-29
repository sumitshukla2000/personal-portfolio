import React from 'react'
import 'primeicons/primeicons.css';
import { socialLinks } from './constants';

    
const Footer = () => {
  return (
    <>
    <div className='w-full py-12 mt-12 bg-blue shadow-[-5px_-5px_60px] shadow-blue'>
        <div className='w-[80%] mx-auto'>
            <a href="/">
            <p className='text-center tracking-[5px] text-4xl py-2 font-body font-bold text-whitee'>SUMIT SHUKLA</p></a>

            <p className='md:w-[50%] w-[100%] mx-auto py-4 text-center md:text-2xl text-xl opacity-75 text-whitee font-body'>
        Living, Learning & Leveling up one day at a time
            </p>

            <div className='w-[100%] px-2 py-4'>
                    <div className=' w-full py-4 flex justify-center items-center'>
                        {
                            socialLinks.map(social => (
                                <div key={social.id} className='w-[45px] h-[45px] grid place-items-center rounded-full border-[2.5px] border-gray-400 hover:border-white hover:bg-whitee mx-2 text-whitee hover:text-blue transition-all delay-100'>
                                <a href={social.linkk} target='_blank'>
                                    <i className={`${social.icon} text-lg `}></i>
                                    </a>
                                    </div>
                            ))
                        }
                        
                    </div>
                    <div className='w-[80%] mx-auto text-lg font-display font-medium tracking-widest text-whitee mt-2 py-2'>
                    <p className='text-center   opacity-60'>Handcrafted by me <span className='font-bold'>&#9426; </span> <a href={socialLinks[2].linkk} target='_blank' className='uppercase font-bold'> Sumit Shukla</a></p>
                    </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer