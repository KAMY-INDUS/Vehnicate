import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const Client = () => {
    const [blogs,setBlogs]=useState([]);
    useEffect(() => {
        const fetchBlogs = async () => {
            const res = await fetch('/api/client');
            const data = await res.json();
            setBlogs(data);
        }
        fetchBlogs();
    }, []);
  return (
    <section id='blog'>
        <motion.h1 className='communityhead tg' initial={{opacity:0,scale:0,filter:"blur(10px)",translateY:"20%"}} whileInView={{opacity:1,scale:1,filter:"blur(0px)",translateY:"0%"}} transition={{duration:0.5}}>Community</motion.h1>
        <div className="clients flex">
        {blogs.map((blog)=>(
            <motion.div className="client cursor-default" initial={{opacity:0,scale:1,filter:"blur(0px)",translateY:"0%"}} whileInView={{opacity:1,scale:1,filter:"blur(0px)",translateY:"0%"}} whileHover={{scale:1.05,background:"linear-gradient(-45deg,rgba(50, 5, 92, 0.731),#be326c6b)",boxShadow:"0px 0px 25px rgb(92, 0, 178,0.5))"}} transition={{duration:0.25}}>
            
            <span className='clienttitle'>{blog.service}</span>
            <span className='clientcontent'>{blog.content}</span>
            <div className="clientinfo">
            {blog.image && <Image src={blog.image} height={90} width={90} className='clientimg'/>}
              <span className='clientname'>{blog.name}</span>
            </div>
            </motion.div>
        ))}
        </div>
        
        
    </section>
  );
}

export default Client


