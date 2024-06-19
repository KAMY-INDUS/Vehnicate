"use client"
import React, { useEffect, useState } from 'react'

const Load = () => {
    const [disappear,setDisappear]=useState(false);
    useEffect(()=>{
        const fetchLoad=()=>{
            setTimeout(()=>{
                setDisappear(true);
            },1500)
        }
        fetchLoad();
    },[])
  return (
    <div className="loadsrc">
        <div className="loadcon">
        <div className="vechicle">
            {disappear?<span style={{fontWeight:"700"}}>v e h</span>:<span className='veh'>veh</span>}
            {disappear?null:<span className='icle'>icle</span>}
        </div>
        {disappear?null:<span className='plus'>+</span>}
        <div className="communicate">
               {disappear?null:<span className='commu'>commu</span>}
         {disappear?<span style={{fontWeight:"700"}}>n i c a t e</span>:<span className='nicate'>nicate</span>}
        </div>
        </div>
    </div>
  )
}

export default Load