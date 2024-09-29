import React from 'react'
import avatar  from '../assets/man.png'
// import { Button } from 'primereact/button';  
import '../index.css'


function Hero() {
    return (
        <>
            <div id='home' className='blockk z-10 w-full md:min-h-[80vh] min-h-[100vh] '>
                <div className='w-full pt-16'>
                    <div className='h-[200px] w-[200px] bg-blue rounded-full mx-auto flex items-center'>
                    <img src={avatar} alt="avatar" className='w-[190px] h-[190px] mx-auto rounded-full'/>
                    </div>
                </div>
                

                <div className='w-full font-display pt-4'>
                    <p className='tracking-[0.3rem] text-4xl md:text-6xl font-bold text-center'>HAY, I'M <span className='text-blue z-5 sm:drop-shadow-[5px_6px_0_#6E07F3] drop-shadow-[3px_4px_0_#6E07F3]'  
                    // style={{ textShadow: "5px 6px #6E07F3" }}
                    >SUMIT</span> SHUKLA</p>
                </div>

                <div className='md:w-[60%] font-body pt-4 mx-auto'>
            <p className='text-xl font-medium text-center p-4'>"Crafting Seamless Web Experience: Responsive 
                 <span className='text-blue font-extrabold' style={{ textShadow: "1px 1px #6E07F3" }}> Frontend</span> Development with Precision and Creativity"</p>
                </div>

                {/* <div className="card flex justify-content-center">
                <Button  label="Submit" />
        </div> */}

        <div className='sm:py-6 w-[80%] mx-auto mt-4 pb-2 flex items-center justify-center'> 
            <a href='#' className='font-body font-extralight text-white bg-blue py-2 px-12 text-md tracking-[2px] rounded-md  shadow-slate-500 transition ease-in-out focus:outline-none delay-50 hover:shadow-lg hover:translate-y-[-3px]'>
                PROJECTS
            </a>
        </div>
        
            </div>
        </>
    )
}

export default Hero