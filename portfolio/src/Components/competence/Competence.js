import React from 'react'
import './Competence.css'
import ux from '../../images/ux.png'

function Competence() {
  return (
    <div className='competence px-28 flex flex-col gap-7 justify-center content-center'>
        <p className='font-bold text-xl'>What Can I Do</p>
        <div className='relative do flex justify-between px-[65px] py-[50px] w-full content-center bg-[#F5F5F5] rounded-[71px]'>
            <div className='texts relative flex flex-col gap-7 justify-center'>
                <p className='text-[28px] font-normal self-start'>UX/UI Design</p>
                <div className='flex flex-col gap-3 self-start'>
                    <p className='font-semibold self-start text-6xl'>User-Friendly.</p>
                    <p className='font-semibold self-start text-6xl'>Attractive.</p>
                    <p className='font-semibold self-start text-6xl'>Functional.</p>
                    <p className='font-normal self-start text-xl flex content-center gap-1'>Experience: 1+ Year <img src='https://em-content.zobj.net/source/apple/354/flexed-biceps_light-skin-tone_1f4aa-1f3fb_1f3fb.png' width={20}></img></p>
                </div>
            </div>
            <img src={ux} className='picture w-[50%] z-10'/>
        </div>
    </div>
  )
}

export default Competence