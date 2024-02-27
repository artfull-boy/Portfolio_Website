import React, {useEffect, useRef} from 'react'
import {useTypewriter, Cursor} from 'react-simple-typewriter'
import './HeroSection.css'
import bgImg from '../../images/1.png'

function HeroSection() {
   const [text] = useTypewriter({
    words: ["Software Engineering","Frontend Developer","UX/UI Designer"],
    loop: {},
    typeSpeed:120,
    deleteSpeed:100,
   })
   
    
  return (
    <section id="hero">
        <img className='bgImg' src={bgImg} />
		<h1>Hi I'm Ilias Rais, a <br/>
			<span id="typewrite">{text}</span>
			<span id="cursor"><Cursor cursorStyle="|" /></span>
		</h1>
            <p className='description'>
        Who picks a book by its cover... <br/>
        Because if the cover doesn't grab you, what else will?
        </p>
        <div className='button'>
            <a href={`${process.env.PUBLIC_URL}/CV.pdf`}  download='Ilias Rais.pdf'>
            <button className='primary'>
                Download Resume
                <img src='https://em-content.zobj.net/source/apple/354/artist-palette_1f3a8.png' width={23} height={23}></img>
            </button>
            </a>
            <a href="https://www.behance.net/gallery/165747755/Modern-Portfolio-Graphic-Design" target='_blank'>
            <button className='secondary'>
                My portfolio
                <img src='https://em-content.zobj.net/source/apple/354/page-with-curl_1f4c3.png' width={23} height={23}></img>
            </button>
            </a>
        </div>
    </section>
  )
}

export default HeroSection