import React, { useState , useRef } from 'react'
import { navLinks } from './constants'
import avatar from '../assets/man.png'
import 'primeicons/primeicons.css';

function Header() {
    const [active , setActive] = useState('Home')
    const [toggleMenu , setToggleMenu] = useState(false)
    
  return (
    <>
    <header className='max-w-[100%] bg-whitee sticky top-0 z-20 h-[90px] p-4 flex items-center shadow-md shadow-slate-400'>
        <nav className='w-[100%]  flex items-center justify-between mx-auto px-4'>
            
            <div className='md:[50%] mx-4'>
                <img src={avatar} alt="logo" className='h-[40px] w-[40px]'/>
            </div>

            <div className='md:block hidden'>
                <ul className='flex items-center md:justify-evenly font-body font-bold md:text-[1.2rem] text-[0.8rem]'>
                    {navLinks.map(navLink => (
                        <li className='basis-1/5 mx-[10px]' key={navLink.id}>
                            <a href="#" className={`hover:text-blue transition ease-in-out delay-75 py-4 px-2 ${active === navLink.title ? "text-blue" : "text-black"}`} onClick={()=>setActive(navLink.title)}>{navLink.title.toUpperCase()}</a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className='md:hidden hover:rounded-2xl hover:bg-slate-300 px-2 py-1'>
            <button onClick={() => setToggleMenu(prev => !prev)}>
            <i className={`pi pi-${toggleMenu ? 'times' : 'align-justify'} text-2xl  `} ></i>
                </button>
            </div>
        </nav>
       
    </header>
    <div className={`md:hidden absolute top-[100px] left-0 shadow-lg
        ${toggleMenu ? 'visible opacity-100' : 'opacity-0 invisible'} transition-all delay-100
        x-10 w-full bg-white`}>
        <ul className='font-bold text-[0.89rem] font-display flex items-center flex-col'>
                    {navLinks.map(navLink => (
                        <li className='basis-1/4h-[40px] flex justify-end px-8 py-1 text-center border-b border-slate-300 w-full' key={navLink.id}>
                            
                            <a href={`/#${navLink.id}`} className="hover:text-slate-500 transition ease-in-out delay-75 py-4 tracking-[0.2rem]">
                                {navLink.title.toUpperCase()}
                                 </a>
                        </li>
                    ))}
                     </ul>
        </div>
    </>
  )
}

export default Header