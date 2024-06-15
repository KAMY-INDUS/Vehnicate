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
            {disappear?<span style={{fontWeight:"700"}}>V E H</span>:<span className='veh'>VEH</span>}
            {disappear?null:<span className='icle'>ICLE</span>}
        </div>
        {disappear?null:<span className='plus'>+</span>}
        <div className="communicate">
               {disappear?null:<span className='commu'>COMMU</span>}
         {disappear?<span style={{fontWeight:"700"}}>N I C A T E</span>:<span className='nicate'>NICATE</span>}
        </div>
        </div>
    </div>
  )
}

export default Load