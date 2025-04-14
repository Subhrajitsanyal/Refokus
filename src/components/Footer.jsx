import React from 'react'

function Footer() {
  return (

    <div className='w-full'>
        <div className='max-w-screen-xl mx-auto py-10 flex gap-32'>
            <div className='basis-1/2'>
             <h1 className='text-[11.5rem] font-medium leading-none tracking-tight'>refokus.</h1>
            </div>
            <div className='basis-1/2 flex gap-5' >
            <div className='basis-1/3'>
            <h4 className='mb-10 text-zinc-500 capitalize'>Socials</h4>
            {["Instagram","Twitter (x?)", "Linkedin"].map((item, index)=> <a key={index} className='block mt-2 text-zinc-600 capitalize'>{item}</a>)}
            </div>
            <div className='basis-1/3'>
            <h4 className='mb-10 text-zinc-500 capitalize'>SiteMap</h4>
            {["Home","Contact", "Work", "Careers"].map((item, index)=> <a  key={index} className='block mt-2 text-zinc-300 capitalize'>{item}</a>)}
            </div>
            <div className='basis-1/2 flex flex-col items-end'>
            <p className='text-right'>Refokus is a Pioneering digital agency driven by designed and empowered by technology and enthusiasm.</p>
            <img src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg" className='w-35 mt-10' alt="" />
              </div>
            </div>
        </div>
        <div className="w-full h-full mt-2 p-5">
             {["Privacy Policy", "Cookie Policy", "Impressum", "Terms", "Webflow Agency"].map((item, index) => (
              <a key={index} className="ml-16 h-full text-sm text-zinc-600">{item}</a>
            ))}
      </div>
    </div>

  )
}

export default Footer
