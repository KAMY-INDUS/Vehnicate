import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const Blog = () => {
    const [blogs,setBlogs]=useState([]);
    const router = useRouter();
    const blogTap=(id)=>{
        router.push(`blog/${id}`);
    }
    useEffect(() => {
        const fetchBlogs = async () => {
            const res = await fetch('/api/blog');
            const data = await res.json();
            setBlogs(data);
        }
        fetchBlogs();
    }, []);
  return (
    <section id='blog'>
        <motion.h1 className='tg' initial={{opacity:0,scale:0,filter:"blur(10px)",translateY:"20%"}} whileInView={{opacity:1,scale:1,filter:"blur(0px)",translateY:"0%"}} transition={{duration:0.5}}>Blog</motion.h1>
        <div className="blogs">
        {blogs.map((blog)=>(
            <motion.div className="blog cursor-pointer" initial={{opacity:0,filter:"blur(0px)"}} whileInView={{opacity:1,filter:"blur(0px)"}}  whileHover={{scale:1.05,background:"linear-gradient(-45deg,rgba(50, 5, 92, 0.731),#be326c6b)",boxShadow:"0px 0px 25px rgb(92, 0, 178,0.5))",transitionDelay:0.25}} transition={{duration:0.5,ease:"easeInOut"}} key={blog._id} onClick={()=>blogTap(blog._id)}>
                <span className='blogh'>{blog.title}</span>
                {blog.image && <Image src={blog.image} height={200} width={200} className='blogimg'/>}
                <span className='blogmes'>
                    {(((blog.blog).length)>150?`${blog.blog.slice(0,150)}...Read More`:blog.blog)}
                </span>
            </motion.div>
        ))}
        </div>
    </section>
  )
}

export default Blog
