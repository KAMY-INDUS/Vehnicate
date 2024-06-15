"use client"
import React from 'react'
import { useState,useEffect } from 'react';
import Navbar from './../components/Navbar';
import Home from './../components/Home';
import About from './../components/About';
import Load from '@/components/Load';
import Community from './../components/Community';
import Blog from './../components/Blog';
import Contact from './../components/Contact';
import Footer from './../components/Footer';


const page = () => {
  const [loader,setLoader]=useState(false);
  useEffect(()=>{
    const fetchLoad=()=>{
        setTimeout(()=>{
            setLoader(true);
        },3000)
    }
    fetchLoad();
  },[])
  useEffect(()=>{
    const observer= new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            if (entry.isIntersecting){
                entry.target.classList.add('show');
            }
            else{
                entry.target.classList.remove('show');
            }
        })
    })
    const hiddenElement=document.querySelectorAll('.hidden');
    hiddenElement.forEach((el)=>observer.observe(el));
  });
  return (
    <section className="webpage">
      {loader?
      <main>
        <Navbar/>
        <Home/>
        <About />
        <Community/>
        <Blog/>
        <Contact />
        <Footer />
      </main> :<Load/>}
    </section>
  );
}

export default page