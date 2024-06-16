"use client"
import React from 'react'
import { useState,useEffect } from 'react';

const Greet = () => {
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
  },[]);
  return (
  <span className='homecongreet'>{greet},</span>
  )
}

export default Greet