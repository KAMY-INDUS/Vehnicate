import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { motion } from 'framer-motion';

library.add(faFacebook, faTwitter, faInstagram, faLinkedin);
const Footer = () => {
  return (
    <motion.section id='footer' className='relative' initial={{translateY:"20%",opacity:0,filter:"blur(10px)"}} whileInView={{translateY:"0%",opacity:1,filter:"blur(0px)"}} transition={{duration:0.5}}>
        <div className="fup">
        <div className='fabout'>
            <Image src="/logo.png" height={100} width={100} className='flogo'/>
            <span className='flogocon'>Be Differently Expressive</span>
        </div>
        <div className="infoc">
            <span>Email: <Link href="mailto:hn.webqueries@gmail.com"></Link>ss.sottallu@gmail.com</span>
            <span>Phone: <Link href="tel:91+77081 61551">+91 77081 61551</Link></span>
        </div>
        <div className="newsletter">
            <span>Want to Receive Our Newsletters?</span>
            <input type="email" name="email" id="fnewsmail" placeholder='Enter You Email ID' className='femail'/>
            <div className="icons">
                <Link href="#" ><FontAwesomeIcon icon={['fab','facebook']} className='ficon' /></Link>
                <Link href="#" ><FontAwesomeIcon icon={['fab','twitter']} className='ficon' /></Link>
                <Link href="#" ><FontAwesomeIcon icon={['fab','instagram']} className='ficon' /></Link>
                <Link href="#" ><FontAwesomeIcon icon={['fab','linkedin']} className='ficon' /></Link>
            </div>
        </div>
        </div>
        <div className="fbottom">
            <span className='copyright'>© Copyright 2024 | Vehnicate</span>
        </div>
    </motion.section>
  )
}

export default Footer