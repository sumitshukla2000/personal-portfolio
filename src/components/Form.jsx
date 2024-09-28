import React from 'react'

const Form = () => {
  return (
    <>
        <div className='w-full'>
            <div className='md:w-[60%] w-[90%] bg-whitee rounded-lg shadow-[2px_2px_15px] shadow-gray-400 mx-auto font-display'>
            <form action="/" className='py-6'>
                <div className='w-full px-4'>
                    <label htmlFor="name" className='block w-[90%] mx-auto md:pt-12 pt-6 pb-4 text-sm font-semibold '>Name</label>
                    <input type="text" name="name" id="name" className='border border-slate-200 focus:ring-purple-500 focus:ring-1 outline-none invalid:bg-red-400 shadow-md block w-[90%] mx-auto py-4 px-4 rounded-md bg-gray-200 text-gray-900 font-normal'
                    placeholder='Enter Your Name'/>
                </div>

                <div className='w-full px-4'>
                    <label htmlFor="email" className='block w-[90%] text-sm mx-auto md:pt-12 pt-6 pb-4 font-semibold '>Email</label>
                    <input type="email" name="email" id="email" className='border border-slate-200 shadow-md focus:ring-purple-500 focus:ring-1 outline-none  invalid:bg-red-200 block w-[90%] mx-auto py-4 px-4 rounded-md bg-gray-200 text-gray-900 font-normal '
                    placeholder='Enter Your Email'/>
                </div>

                <div className='w-full px-4'>
                    <label htmlFor="email" className='block w-[90%] text-sm mx-auto md:pt-12 pt-6 pb-4 font-semibold '>Message</label>
                    <textarea type="email" name="email" id="email" className='border border-slate-200 shadow-md focus:ring-purple-500 focus:ring-1 outline-none invalid:bg-red-200 block w-[90%] mx-auto py-4 px-4 rounded-md bg-gray-200 text-gray-900 font-normal resize-none'
                    placeholder='Enter Your Email' rows={8}></textarea>
                </div>
                <div className='w-[90%] mx-auto flex justify-end px-4'>
                    <button type='submit' className='md:w-[200px] w-full uppercase py-4 px-12 bg-blue rounded-md mt-8 text-whitee shadow-[5px_4px_14px_#4e5994] transition-all delay-150 hover:translate-y-[-10px] font-semibold'>Submit</button>
                    </div>
            </form>
            </div>
        </div>
    </>
  )
}

export default Form