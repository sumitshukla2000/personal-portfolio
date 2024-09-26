import React from 'react'
// import avatar  from '../assets/avatar.jpg'
import { Button } from 'primereact/button';  


function Hero() {
    return (
        <>
            <div className='w-full h-[70vh]'>

                {/* <div className='w-full pt-24'>
                    <div className='h-[210px] w-[210px] bg-blue rounded-full mx-auto flex items-center'>
                    <img src={avatar} alt="avatar" className='w-[200px] h-[200px] mx-auto rounded-full'/>
                    </div>
                </div> */}
                

                <div className='w-full font-display pt-32'>
                    <p className='tracking-[0.3rem] text-6xl font-bold text-center'>HAY, I'M <span className='text-blue z-5'  
                    style={{ textShadow: "5px 6px #6E07F3" }}>SUMIT</span> SHUKLA</p>
                </div>

                <div className='w-[80%] font-body py-8 mx-auto'>
            <p className='text-xl font-medium text-center p-4'>"Crafting Seamless Web Experience: Responsive 
                 <span className='text-blue font-extrabold' style={{ textShadow: "1px 1px #6E07F3" }}> Frontend</span> Development with Precision and Creativity"</p>
                </div>

                <div className="card flex justify-content-center">
                <Button  label="Submit" />
        </div>
        
            </div>
        </>
    )
}

export default Hero