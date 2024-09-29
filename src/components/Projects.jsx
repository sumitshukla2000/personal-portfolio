import React from 'react'
import  { project } from './constants'
import '../index.css'
import 'primeicons/primeicons.css';
        
const Projects = () => {
    return (
        <>
            <div className='w-full blockk mt-12'>
                <div className=" w-[80%] mx-auto">
                    <h1 className="text-3xl uppercase font-body font-extrabold text-center text-secDark">Projects</h1>
                    <div className="bg-blue h-[5px] w-[70px] mx-auto mt-2 rounded-xl"></div>
                </div>
            <div className='w-[70%] mx-auto py-6'>
                <p className='text-xl text-center'>Here you will find some of my personal projects thats contains its own live link</p>
            </div>

            {/* project showcase */}
            <div className='w-full py-4 px-2'>
            {
                project.map(project => (
                    <div key={project.id} className='blockk md:flex-nowrap sm:h-[100vh] md:h-[100vh] lg:h-[70vh] text-wrap my-4 w-[90%] px-6 mx-auto flex flex-wrap md:justify-between md:gap-6 sm:items-center md:items-start sm:mb-24 mb-12'>

                        <section className='section relative md:rounded-[20px] md:w-[50%] sm:w-full sm:h-[20rem] md:h-[18rem] mx-auto md:mt-12 overflow-hidden rounded-md shadow-lg shadow-dark border border-slate-800 cursor-pointer '>
                        <img src={project.url} alt={project.title} className=' image z-[-1] hover:scale-[1.9] h-full w-full  mx-auto' />
                        
                        <div className='coverr z-10 opacity-0 h-full w-full absolute top-0 left-0 bg-[#301934] hover:opacity-100 transition ease-in-out delay-100 flex justify-center items-center'>
                            
                                <a href={project.link} 
                                target='_blank'
                                className='rounded-full'> <button className='btn md:text-md md:py-4 md:px-6 px-4 py-2 border-2 text-white font-body text-xs font-semibold border-blue rounded-full hover:bg-blue transition-all delay-100 opacity-0
                                '>View Website </button> </a>
                        </div>
                        </section>

                        <section className='md:w-[50%] md:py-12 py-6'>
                        <p className='md:text-left md:text-3xl text-2xl text-center w-full  text-secDark font-bold font-display px-4'>{project.title}</p>

                        <p className='lg:text-xl md:text-lg md:leading-[1.8rem] md:text-left text-center leading-[1.3rem] text-[15px] w-full md:px-4 md:pt-6 font-body text-dark'>{project.description}</p>

                        <a href={project.repoLink} target='_blank' className='md:block flex justify-center' ><button className='bg-blue md:text-md md:py-2 md:px-8 md:my-6 mx-4  py-2 px-4 mt-4 rounded text-white text-sm font-semibold uppercase font-display transition ease-linear delay-100 hover:translate-y-[-5px] shadow-[5px_8px_5px] shadow-cyan-900'>Repo...</button> </a>
                        </section>  
                    </div>
                ))
            }    

            </div>
            </div>
        </>
    )
}

export default Projects