"use client"
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';

const ViewBlog = () => {
    const [blog,setBlog]=useState([])
    const pathName = usePathname();
    useEffect(()=>{
        const fetchBlog = async()=>{
            const response = await fetch(`/api${pathName}`)
            const data = await response.json();
            setBlog(data);
        }
        fetchBlog();
    },[])
  return (
    <section id='blogview' className="z-50">
        <div className="blogcontent">
        <span className='viewbloghead tg'>{blog.title}</span>
        {blog.image && <Image src={blog.image} width={500} height={500} className='viewblogimg'/>}
        <span className='viewblogcontent'>{blog.blog}</span></div>
    </section>
  )
}

export default ViewBlog