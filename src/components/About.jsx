import { skills } from './constants'
import '../index.css'
function About() {
    return (
        <>
            <div id='about' className="blockk lg:mt-24 py-6 pb-32 w-full mt-12 bg-dark min-h-screen">
                <div className=" w-[80%] mx-auto pt-12">
                    <h1 className="text-3xl font-body font-extrabold text-center text-whitee">ABOUT ME</h1>
                    <div className="bg-blue h-[5px] w-[70px] mx-auto mt-2 rounded-xl"></div>
                </div>

                <div className="md:w-[70%] w-[90%] mx-auto mt-2">
                    <p className="text-center md:text-xl text-lg p-2 font-display font-normal text-whitee opacity-80">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
                </div>


                <div className="blockk max-w-[90%] mt-12 mx-auto flex gap-2 justify-center flex-wrap md:flex-nowrap ">
                {/* get to know */}
                    <div className='md:w-[50%] w-full'>
                        <h1 className="text-whitee px-2 font-bold text-2xl py-6 font-body">Get to know me!</h1>
                <p className="md:w-[90%] md:text-lg text-sm w-full px-2 font-display leading-[1.8rem] pb-2 opacity-80 text-whitee">
                Hey there! I’m a passionate <span className='text-blue font-extrabold' style={{ textShadow: "1px 1px #6E07F3" }}>Frontend</span> developer who loves crafting engaging and intuitive <span  className='text-blue font-extrabold' style={{ textShadow: "1px 1px #6E07F3" }}>Web</span> experiences. With a strong focus on clean, efficient code and modern design principles, I strive to bring ideas to life through the web. Whether it’s building responsive layouts, ensuring smooth user interactions, or working with the latest frameworks, I’m always excited to take on new challenges.
                </p>
                <p className="md:w-[90%] md:text-lg text-sm w-full px-2 font-display leading-[1.8rem] pb-4  opacity-80 text-whitee">
                I’m currently <span className='text-blue font-extrabold' style={{ textShadow: "1px 1px #6E07F3" }}>Open</span> to exciting job opportunities where I can contribute my skills and grow professionally. If you’re looking for someone who’s detail-oriented, adaptable, and ready to take on new challenges, <span className='text-blue font-extrabold' style={{ textShadow: "1px 1px #6E07F3" }}>let’s connect!</span> You can find me on <a className='text-blue font-extrabold' style={{ textShadow: "1px 1px #6E07F3" }} href="https://www.linkedin.com/in/sumit-shukla-5152aa222/" target='_blank'>LinkedIn</a>, and you can explore my recent projects on <span>
                    <a  className='text-blue font-extrabold' style={{ textShadow: "1px 1px #6E07F3" }} href="https://github.com/sumitshukla2000" target="_blank">  
                    GitHub.
                    </a>
                    </span>

        </p>
        <p className="md:w-[90%] md:text-lg text-sm w-full px-2 font-display leading-[1.8rem] pb-4 opacity-80 text-whitee">
                Feel free to reach out—I’m always up for a new challenge, whether it’s a full-time role or freelance work. Let’s build something awesome together!
                </p>

                <div className='flex justify-center items-center  md:block'>
                <button className="mt-4 mx-2 transition ease-in hover:translate-y-[-5%] text-whitee opacity-80 font-display text-sm bg-blue px-12 rounded  py-4 shadow-[0px_0px_100px] shadow-blue font-extrathin tracking-widest uppercase">Contact</button>
                </div>
                    </div>


            {/* skills */}
                    <div className='md:w-[50%] w-full'>
                    <h1 className="text-whitee md:text-left text-center font-bold mr-2 text-2xl py-6 font-body">My Skills</h1>
                   <div className='md:w-[90%] md:justify-start w-full flex flex-wrap justify-center'>
                   {
                        skills.map(skill => (
                            <p key={skill.id} className='animate-pulse cursor-pointer shadow-md shadow-secDark py-2 px-4 mr-2 rounded-md text-whitee opacity-80 text-md bg-secDark my-2'>
                                {skill.title.toLocaleUpperCase()}
                            </p>
                        ))
                    }
                   </div>
                    
                    </div>
                </div>
            </div>
        </>
    )
}

export default About