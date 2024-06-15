"use client"
import React,{useState} from 'react';

const Contact = () => {
    const [data,setData]=useState({name:"",email:"",message:""})
    function saveData(e){
        setData({...data,[e.target.name]: e.target.value})
    }
  
  return (
    <section id='contact'>
      <h1 className='tg'>Contact</h1>
      <form action="https://api.web3forms.com/submit" method="POST">
          <input type="hidden" name="access_key" value="21e76921-6ea1-4388-8779-447d89a96fa7" />
          <input type="text" name="name" id="name" 
                    onChange={(e)=>saveData(e)} placeholder='Enter your Name' required />
        

            <input type="text" name="email" id="email"placeholder='Enter your Email' onChange={(e)=>saveData(e)} required />
            
          <textarea name="message" id="message" placeholder='Write your Query..' rows={7} onChange={(e)=>saveData(e)} />

        <input type="submit" value="Submit" />
      </form>
    </section>
  )
}

export default Contact