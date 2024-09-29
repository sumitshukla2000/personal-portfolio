import React, { useState , useRef } from 'react'
import { navLinks } from './constants'
import avatar from '../assets/man.png'
import 'primeicons/primeicons.css';
import { Link, animateScroll as scroll } from 'react-scroll';


function Header() {
    const [active , setActive] = useState('Home')
    const [toggleMenu , setToggleMenu] = useState(false)

    const toggleFun = (linkk) => {
        setActive(linkk)
        setToggleMenu(prev => !prev)
    }
    
  return (
    <>
    <header className='max-w-[100%] sticky top-0 z-50 h-[80px] p-4 bg-whitee shadow-md shadow-slate-400'>
        <nav className='w-[100%] bg-whitee h-full flex items-center justify-between mx-auto px-4'>
            
            <div className='md:[50%] mx-4'>
                <img src={avatar} alt="logo" className='h-[40px] w-[40px]'/>
            </div>

            <div className='md:block hidden'>
                <ul className='flex items-center md:justify-evenly font-body font-bold md:text-[1.2rem] text-[0.8rem]'>
                    {navLinks.map(navLink => (
                        <li className='basis-1/5 mx-[10px]' key={navLink.id}>
                            <Link to={navLink.id}
                            spy={true}
                            offset={-90}
                            smooth={true}
                            duration={100} 
                            className={`hover:text-blue cursor-pointer transition ease-in-out delay-75 py-4 px-2 }
                                ${active === navLink.title ? "text-blue" : "text-black"}` 
                            }
                             onClick={() => toggleFun(navLink.title) }
                             >{navLink.title.toUpperCase()}</Link>
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
                    

        <div className={`md:hidden absolute top-[80px] left-0 z-20 shadow-lg border-t border-slate-300
        ${toggleMenu ? 'visible opacity-100' : 'opacity-0 invisible'} transition-all delay-100
        x-10 w-full bg-white`}>
        <ul className='font-bold text-[0.89rem] font-display flex items-center flex-col'>
                    {navLinks.map(navLink => (
                        <li className='basis-1/4h-[40px] flex justify-end px-8 py-1 text-center border-b border-slate-300 w-full' key={navLink.id}>
                            
                            <Link to={navLink.id} 
                            spy={true}
                            offset={-90}
                            smooth={true}
                            duration={100} 
                            className={` transition ease-in-out delay-75 py-4 tracking-[0.2rem] ${active === navLink.title ? "text-blue" : "text-black"}
                            // ${toggleMenu ? 'visible opacity-100' : 'opacity-0 invisible'}`}
                                onClick={()=>toggleFun(navLink.title)}
                            >
                                {navLink.title.toUpperCase()}
                                 </Link>
                        </li>
                    ))}
                     </ul>
        </div>
    </header>

    
    </>
  )
}

export default Header