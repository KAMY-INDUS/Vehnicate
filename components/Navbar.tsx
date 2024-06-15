"use client";
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { faBars ,faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
const Navbar = () => {
  const [extend,setExtend]=useState(false);
  return (
    <>
  <nav className='sm:flex hidden navlap'>
    <Image alt="logo" className="logo" src="/logo.png" height={100} width={100}/>
    <div className="navbar flex flex-row m-4">
      
        <ul className="navitem flex flex-row">
        <li className='ele'><Link href="#home" scroll={true}> Home</Link></li>
        <li className='ele'><Link href="#about" scroll={true}>About</Link></li>
        <li className='ele'><Link href="#community" scroll={true}>Community</Link></li>
        <li className='ele'><Link href="#blog" scroll={true}>Blog</Link></li>
        </ul>
    </div>
    <Link href="#contact" className='contact' scroll={true} >Contact</Link>
    </nav>
    <nav className="sm:hidden flex relative mobnav">
    <Image alt="logo" className="logo" src="/logo.png" height={100} width={100}/>
    {extend?<FontAwesomeIcon icon={faTimes} onClick={()=>{setExtend(!extend);
                }} className='faicon z-999 cursor-pointer'/>:<FontAwesomeIcon icon={faBars} onClick={()=>{setExtend(!extend);
                }} className='faicon z-999 cursor-pointer'/>}
    {extend?<ul className="mobnavitem flex flex-col absolute right-3 top-14 z-999">
        <li className='ele'><Link href="#home" scroll={true}> Home</Link></li>
        <li className='ele'><Link href="#about" scroll={true}>About</Link></li>
        <li className='ele'><Link href="#community" scroll={true}>Community</Link></li>
        <li className='ele'><Link href="#blog" scroll={true}>Blog</Link></li>
        <li className='ele'><Link href="#contact" scroll={true} className='contact' >Contact</Link></li>
        </ul>:<></>}
    </nav>
  </>
  )
}

export default Navbar