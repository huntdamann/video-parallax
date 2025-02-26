"use client"

import { Oswald } from 'next/font/google';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faBars, faArrowDown, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactLenis, useLenis } from 'lenis/react'

import { Parallax } from "react-scroll-parallax";
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
config.autoAddCss = false;

import Image from "next/image";
import land from '../../public/land.png'

import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { Video } from '../videos/Video'

const os = Oswald({ subsets: ['latin'] })
gsap.registerPlugin(useGSAP);

export default function Home() {

  const fadeRef = useRef(null);
  const fadeRef2 = useRef(null);
  const menuRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false)
  const [isSafari, setIsSafari] = useState(false);


  useEffect(() => {
    if (typeof window !== "undefined") {

      const ua = window.navigator.userAgent;

      const safari = ua.includes("Safari") && !ua.includes("Chrome") && !ua.includes("CriOS");

    }
  }, []);



  useEffect(() => {
    if(isOpen) {
      gsap.to(menuRef.current, {zIndex:999 ,y: 0, opacity: 1, top: 0 , duration: 0.5, ease: "power1.out"})

    } else {
      gsap.to(menuRef.current, {
        y:"-100%",
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
        zIndex: -1,

      })
    }
  }, [isOpen])


  useGSAP(() => {
    gsap.from(fadeRef.current, {opacity: 0, delay: 2})
    gsap.to(fadeRef.current, {opacity: 1, delay: 2});
    gsap.from('.hero', {opacity: 0, delay: 2})
    gsap.to('.hero', {opacity: 1, delay: 2});
  })

  return (
    <div className="app">

      <header ref={fadeRef} className='fade'>

        <div id='logo' className='col-left'>
          <span>HumannDesign</span>
          <span>Parallax Template</span>

        </div>
       


       <FontAwesomeIcon onClick={() => setIsOpen(!isOpen)} icon={faBars} />
      </header>

      <div ref={menuRef} className="menu">

      <FontAwesomeIcon className='market' onClick={() => setIsOpen(!isOpen)} icon={faCircleXmark} />
        <ul>
          
          <li>Home</li>
          <li>Cinematography</li>
          <li>Photography</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>

  
    
    <ParallaxBanner style={{aspectRatio: '2'/ '1'}} className='banner'>

        <ParallaxBannerLayer className='bg' speed={-20}>
        
          <Image  className='img' src={land} width={500} height={300} alt='land' />
        </ParallaxBannerLayer>
        <div ref={fadeRef2} className="hero">

          <h2>Scroll Down</h2>
          <FontAwesomeIcon icon={faArrowDown} />

    
        </div>

    </ParallaxBanner>
    <ParallaxBanner style={{aspectRatio: '2'/ '1'}} className='banner'>

      <ParallaxBannerLayer speed={-20}>

        {isSafari ? <img src='/video.mp4' autoplay="autoplay" playsinline muted="on" /> : <Video link='/video.mp4' />  }
      
        {/* <Video link='/video.mp4' /> */}

      </ParallaxBannerLayer>
      <div className="hero">

        <h2>Lead.</h2>


    </div>

    </ParallaxBanner>
    <ParallaxBanner style={{aspectRatio: '2'/ '1'}} className='banner'>

      <ParallaxBannerLayer speed={-20}>
      <Video link='/video2.mp4' />


      </ParallaxBannerLayer>
      <div className="hero">

        <h2>Think.</h2>


    </div>

    </ParallaxBanner>
    <ParallaxBanner style={{aspectRatio: '2'/ '1'}} className='banner'>

      <ParallaxBannerLayer speed={-20}>
      <Video link='/video3.mp4' />

      </ParallaxBannerLayer>
      <div className="hero">

        <h2>Live.</h2>


    </div>

    </ParallaxBanner>
    <ParallaxBanner style={{aspectRatio: '2'/ '1'}} className='banner'>

<ParallaxBannerLayer speed={-20}>
<Video link='/video4.mp4' />

</ParallaxBannerLayer>
<div className="hero">

  <h2>Play.</h2>


</div>

</ParallaxBanner>


    <footer>


      <div className='col-left'>

        <div className='col-header'>
        <span>HumannDesign</span>
        <span>Parallax Template</span>

        </div>
         


          <div style={{display: 'flex', flexDirection: 'column'
          }}>
            <span>Email Here</span>
            <span>Dallas, Texas</span>
          </div>

      </div>

      <div className="col-middle">

        <ul>
          <li style={{color: 'gold'}}>Home</li>
          <li>Cinematography</li>
          <li>Photography</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="col-right">

        <div className="social-icons">
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faLinkedin} />


        </div>

        <div>
          &copy; Website by HumannDesign
        </div>
      </div>

      


    </footer>

   

    
    
      

    
    </div>
  );
}
