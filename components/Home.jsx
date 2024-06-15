"use client"
import Image from 'next/image'
import React from 'react'
import { useState,useEffect } from 'react'
import Link from 'next/link';
import {motion} from 'framer-motion'
import { TypeAnimation } from 'react-type-animation';
import Spline from '@splinetool/react-spline/next';
import Car from './Car';

const Home = () => {
  // useEffect(()=>{
  //   const observer= new IntersectionObserver((entries)=>{
  //       entries.forEach((entry)=>{
  //           if (entry.isIntersecting){
  //               entry.target.classList.add('show');
  //           }
  //           else{
  //               entry.target.classList.remove('show');
  //           }
  //       })
  //   })
  //   const hiddenElement=document.querySelectorAll('.hidden');
  //   hiddenElement.forEach((el)=>observer.observe(el));
  // });
  const [greet,setGreet]=useState("Good Afternoon🌇")
  useEffect(()=>{
    const timeInterval= setInterval(()=>{
      const time = new Date();
      if(time.getHours()>=12 && time.getHours()<=17){
        setGreet("Good Afternoon🌇");
      }
      else if(time.getHours()>=17 && time.getHours()<24){
        setGreet("Good Evening🌙");
      }
      else{
        setGreet("Good Morning🌞");
      }
    },1000)
    return ()=>clearInterval(timeInterval);
  },[])
  return (
    <main className='ov'>
    <div style={{ height: '100dvh',display:"flex", justifyContent:"center", alignContent:"center",alignItems:"center"}} className='hidden'>
    <section id="home">
      <div className="homecon" initial={{translateX:"-20%", opacity:0,filter:"blur(10px)"}} whileInView={{opacity:1,translateX:"0",filter:"blur(0px)"}} transition={{ease:"easeInOut",duration:2}}>
        <span className='homecongreet'>{greet},</span>
        <span className='homeconh'>Welcome to <span className='homeconhl'>VEHNICATE</span></span>
        <div className="homecontent">
          <TypeAnimation
      sequence={[
        'Ecosystem for Vehicle',
        1500,
        'Ecosystem of Vehicle',
        1500,
        'Ecosystem by Vehicle',
        1500
      ]}
      wrapper="span"
      speed={25}
      style={{ fontSize: '1.5rem', display: 'inline-block' }}
      repeat={Infinity}
    />
        </div>
        <div className="homebtns">
        <Link href="#" className="homeconbtn">Download hnAir</Link>
        </div>
        
      </div>
    </section>
    </div>
    </main>
  )
}

export default Home