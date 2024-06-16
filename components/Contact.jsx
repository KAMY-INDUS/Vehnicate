"use client"
import { motion } from 'framer-motion';
import React,{useState} from 'react';

const Contact = () => {
    const [data,setData]=useState({name:"",email:"",message:""})
    function saveData(e){
        setData({...data,[e.target.name]: e.target.value})
    }
  return (
    <section id='contact'>
      <motion.h1 className='contact tg' initial={{opacity:0,scale:0,filter:"blur(10px)",translateY:"20%"}} whileInView={{opacity:1,scale:1,filter:"blur(0px)",translateY:"0%"}} transition={{duration:0.5}} >Contact</motion.h1>

      <motion.form className='contactboxig' intial={{opacity:0, scale:0, filter:"blur(10px)", translateY:"15%"}} whileInView={{opacity:1,filter:"blur(0px)",translateY:0,scale:1}} transition={{duration:0.5}} action="https://api.web3forms.com/submit" method="POST">
          <input type="hidden" name="access_key" value="21e76921-6ea1-4388-8779-447d89a96fa7" />

          <motion.p initial={{opacity:0,scale:1,filter:"blur(0px)"}} whileInView={{opacity:1,scale:1,filter:"blur(0px)"}} transition={{duration:0.8}} className='inputp'>
            <input type="text" name="name" id="name" onChange={(e)=>saveData(e)} placeholder='Enter your Name' required autocomplete='off'/>
          </motion.p>
        
          <motion.p initial={{opacity:0,scale:1,filter:"blur(0px)",translateY:"0%"}} whileInView={{opacity:1,scale:1,filter:"blur(0px)",translateY:"0%"}} transition={{duration:0.5}} className='inputp'>
            <input  type="text" name="email" id="email" autocomplete="off" placeholder='Enter your Email' onChange={(e)=>saveData(e)} required />
          </motion.p> 

          <motion.textarea initial={{opacity:0,scale:1,filter:"blur(0px)",translateY:"0%"}} whileInView={{opacity:1,scale:1,filter:"blur(0px)",translateY:"0%"}} transition={{duration:0.5}} name="message" id="message" placeholder='Write your Query..' rows={7} onChange={(e)=>saveData(e)} />

        <motion.button type="submit" initial={{opacity:0,scale:1,filter:"blur(0px)",translateY:"0%"}} whileInView={{opacity:1,scale:1,filter:"blur(0px)",translateY:"0%"}}  whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }} transition={{duration:0.25}}>Submit</motion.button>
      </motion.form>
    </section>
  )
}

export default Contact